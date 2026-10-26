// Cloud synchronization service for global portfolio unlock state
const CLOUD_STORE_PRIMARY = 'https://extendsclass.com/api/json-storage/bin/ecdcabc';
const CLOUD_STORE_BACKUP = 'https://extendsclass.com/api/json-storage/bin/daacbae';

export const SECRET_CODE = 'Arksvg@23!';

/**
 * Fetch the current global unlock state from cloud storage
 * Returns boolean or null if unreachable
 */
export async function fetchGlobalUnlockState() {
  // 1. If running in browser, try same-origin Vercel serverless endpoint first
  if (typeof window !== 'undefined' && window.location && window.location.origin) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 2500);

      const res = await fetch(`/api/unlock-state?t=${Date.now()}`, {
        cache: 'no-store',
        headers: { Accept: 'application/json' },
        signal: controller.signal
      });
      clearTimeout(timeoutId);

      const contentType = res.headers.get('content-type') || '';
      if (res.ok && contentType.includes('application/json')) {
        const json = await res.json();
        if (json && typeof json.unlocked === 'boolean') {
          return json.unlocked;
        }
      }
    } catch {
      // Fall through to direct cloud storage
    }
  }

  // 2. Fetch from primary cloud store
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3500);

    const res = await fetch(`${CLOUD_STORE_PRIMARY}?t=${Date.now()}`, {
      cache: 'no-store',
      headers: { Accept: 'application/json' },
      signal: controller.signal
    });
    clearTimeout(timeoutId);

    if (res.ok) {
      const json = await res.json();
      if (json && typeof json.unlocked === 'boolean') {
        return json.unlocked;
      }
    }
  } catch {
    // try backup
  }

  // 3. Fallback secondary cloud store
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3500);

    const res = await fetch(`${CLOUD_STORE_BACKUP}?t=${Date.now()}`, {
      cache: 'no-store',
      headers: { Accept: 'application/json' },
      signal: controller.signal
    });
    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      if (data && typeof data.unlocked === 'boolean') {
        return data.unlocked;
      }
    }
  } catch {
    // ignore
  }

  return null;
}

/**
 * Update the global unlock state across cloud stores
 */
export async function updateGlobalUnlockState(unlocked) {
  const timestamp = new Date().toISOString();
  const payload = JSON.stringify({ unlocked, updatedAt: timestamp });

  // 1. Update through Vercel API endpoint if reachable
  const apiPromise = (async () => {
    if (typeof window === 'undefined') return false;
    try {
      const res = await fetch('/api/unlock-state', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ unlocked, code: SECRET_CODE })
      });
      return res.ok;
    } catch {
      return false;
    }
  })();

  // 2. Update primary cloud store directly
  const primaryPromise = (async () => {
    try {
      const res = await fetch(CLOUD_STORE_PRIMARY, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: payload
      });
      return res.ok;
    } catch {
      return false;
    }
  })();

  // 3. Update backup cloud store directly
  const backupPromise = (async () => {
    try {
      const res = await fetch(CLOUD_STORE_BACKUP, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: payload
      });
      return res.ok;
    } catch {
      return false;
    }
  })();

  const results = await Promise.allSettled([apiPromise, primaryPromise, backupPromise]);
  const succeeded = results.some(
    (r) => r.status === 'fulfilled' && r.value === true
  );

  return succeeded;
}
