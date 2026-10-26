// Cloud synchronization service for global portfolio unlock state
const CLOUD_API_URL = 'https://api.restful-api.dev/objects/ff808181a09d98f701a176f331a50f70';
const BACKUP_URL = 'https://extendsclass.com/api/json-storage/bin/ecdcabc';

export const SECRET_CODE = 'Arksvg@23!';

/**
 * Fetch the current global unlock state from cloud storage
 * Returns boolean or null if unreachable
 */
export async function fetchGlobalUnlockState() {
  // 1. Fetch from high-speed Cloud API (with 4s timeout)
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000);

    const res = await fetch(`${CLOUD_API_URL}?t=${Date.now()}`, {
      cache: 'no-store',
      headers: { 'Accept': 'application/json' },
      signal: controller.signal
    });
    clearTimeout(timeoutId);

    if (res.ok) {
      const json = await res.json();
      if (json && json.data && typeof json.data.unlocked === 'boolean') {
        return json.data.unlocked;
      }
    }
  } catch (err) {
    // try fallback
  }

  // 2. Fallback secondary cloud store
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3000);

    const res = await fetch(`${BACKUP_URL}?t=${Date.now()}`, {
      cache: 'no-store',
      headers: { 'Accept': 'application/json' },
      signal: controller.signal
    });
    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      if (typeof data.unlocked === 'boolean') {
        return data.unlocked;
      }
    }
  } catch (err) {
    // ignore
  }

  return null;
}

/**
 * Update the global unlock state across cloud stores
 */
export async function updateGlobalUnlockState(unlocked) {
  const timestamp = new Date().toISOString();

  // Primary update
  const primaryPromise = (async () => {
    try {
      const res = await fetch(CLOUD_API_URL, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'arksvg_portfolio_config',
          data: { unlocked, updatedAt: timestamp }
        })
      });
      return res.ok;
    } catch {
      return false;
    }
  })();

  // Backup update
  const backupPromise = (async () => {
    try {
      const res = await fetch(BACKUP_URL, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ unlocked, updatedAt: timestamp })
      });
      return res.ok;
    } catch {
      return false;
    }
  })();

  const results = await Promise.allSettled([primaryPromise, backupPromise]);
  const succeeded = results.some(
    (r) => r.status === 'fulfilled' && r.value === true
  );

  return succeeded;
}
