const PRIMARY_BIN = 'https://extendsclass.com/api/json-storage/bin/ecdcabc';
const BACKUP_BIN = 'https://extendsclass.com/api/json-storage/bin/daacbae';
const SECRET_CODE = 'Arksvg@23!';

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // GET: Retrieve the unlock state
  if (req.method === 'GET') {
    // 1. Try primary bin
    try {
      const response = await fetch(`${PRIMARY_BIN}?t=${Date.now()}`, {
        headers: { Accept: 'application/json' },
        cache: 'no-store'
      });
      if (response.ok) {
        const data = await response.json();
        if (data && typeof data.unlocked === 'boolean') {
          res.setHeader('Cache-Control', 's-maxage=30, stale-while-revalidate=60');
          return res.status(200).json(data);
        }
      }
    } catch {
      // fallback
    }

    // 2. Try backup bin
    try {
      const backupResponse = await fetch(`${BACKUP_BIN}?t=${Date.now()}`, {
        headers: { Accept: 'application/json' },
        cache: 'no-store'
      });
      if (backupResponse.ok) {
        const data = await backupResponse.json();
        if (data && typeof data.unlocked === 'boolean') {
          res.setHeader('Cache-Control', 's-maxage=30, stale-while-revalidate=60');
          return res.status(200).json(data);
        }
      }
    } catch {
      // fallback
    }

    return res.status(200).json({ unlocked: false, source: 'default' });
  }

  // POST or PUT: Update the unlock state
  if (req.method === 'POST' || req.method === 'PUT') {
    try {
      const body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
      const { unlocked, code } = body;

      if (code !== SECRET_CODE) {
        return res.status(401).json({ error: 'Unauthorized: Invalid secret code' });
      }

      const payload = JSON.stringify({
        unlocked: Boolean(unlocked),
        updatedAt: new Date().toISOString()
      });

      const updatePromises = [PRIMARY_BIN, BACKUP_BIN].map((binUrl) =>
        fetch(binUrl, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: payload
        })
          .then((r) => r.ok)
          .catch(() => false)
      );

      const results = await Promise.all(updatePromises);
      const anySucceeded = results.some(Boolean);

      return res.status(anySucceeded ? 200 : 500).json({
        success: anySucceeded,
        unlocked: Boolean(unlocked)
      });
    } catch (err) {
      return res.status(500).json({ error: err.message || 'Internal server error' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
