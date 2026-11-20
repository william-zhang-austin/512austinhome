// Daily rebuild (Vercel cron, see vercel.json). Builder offers in src/data/current-offers.ts drop off
// at build time once their end date passes, so the site has to rebuild every day for that to happen
// on time. This calls the project's Deploy Hook, which rebuilds the latest commit on main.
//
// Env (Vercel, Sensitive): CRON_SECRET (already set; Vercel sends it as a Bearer token on cron calls),
// DEPLOY_HOOK_URL (Vercel > Project > Settings > Git > Deploy Hooks, branch main).
export default async function handler(req, res) {
	const auth = req.headers.authorization || '';
	if (!process.env.CRON_SECRET || auth !== `Bearer ${process.env.CRON_SECRET}`) return res.status(401).json({ error: 'unauthorized' });
	if (!process.env.DEPLOY_HOOK_URL) return res.status(200).json({ skipped: 'DEPLOY_HOOK_URL not set' });
	const r = await fetch(process.env.DEPLOY_HOOK_URL, { method: 'POST' });
	return res.status(r.ok ? 200 : 502).json({ triggered: r.ok, status: r.status });
}
