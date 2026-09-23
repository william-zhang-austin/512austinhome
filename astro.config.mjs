// @ts-check

import { execSync } from 'node:child_process';
import { existsSync } from 'node:fs';

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

/**
 * lastmod, derived from git rather than build time.
 *
 * Stamping every URL with the build date would be a lie the moment a deploy
 * touches one file, and crawlers learn to discount a sitemap that claims
 * everything changed at once. Each URL instead reports the last commit that
 * actually touched the source behind it.
 */
const gitDateCache = new Map();

function gitLastModified(file) {
	if (gitDateCache.has(file)) return gitDateCache.get(file);
	let iso = null;
	try {
		if (existsSync(file)) {
			const out = execSync(`git log -1 --format=%cI -- "${file}"`, {
				encoding: 'utf-8',
				stdio: ['ignore', 'pipe', 'ignore'],
			}).trim();
			if (out) iso = out;
		}
	} catch {
		// Not a git checkout, or git unavailable — fall through to null and omit lastmod.
	}
	gitDateCache.set(file, iso);
	return iso;
}

/** Map a built URL back to the source file that determines its content. */
function sourceFileForUrl(pathname) {
	const p = pathname.replace(/^\/|\/$/g, '');

	if (p === '') return 'src/pages/index.astro';

	// Content collections: one file per URL.
	const collection = p.match(/^(blog|neighborhoods)\/(.+)$/);
	if (collection) {
		const [, dir, slug] = collection;
		for (const ext of ['.mdx', '.md']) {
			const f = `src/content/${dir}/${slug}${ext}`;
			if (existsSync(f)) return f;
		}
		return null;
	}

	// Data-driven routes: the data file is what changes, not the template.
	if (/^new-construction\/communities(\/.+)?$/.test(p)) return 'src/data/communities.ts';
	if (/^new-construction\/.+$/.test(p)) return 'src/data/cities.ts';
	if (/^sell\/.+$/.test(p)) return 'src/data/cities.ts';
	if (/^builders(\/.+)?$/.test(p)) return 'src/data/builders.ts';
	if (/^incentives(\/.+)?$/.test(p)) return 'src/data/incentives.ts';
	if (/^guides(\/.+)?$/.test(p)) return 'src/data/guides.ts';
	if (/^deals(\/.+)?$/.test(p)) return 'src/data/deals.ts';
	if (/^compare(\/.+)?$/.test(p)) return 'src/data/comparisons.ts';
	if (/^moving-to-austin\/.+$/.test(p)) return 'src/data/employers.ts';

	// Plain pages.
	for (const candidate of [`src/pages/${p}.astro`, `src/pages/${p}/index.astro`]) {
		if (existsSync(candidate)) return candidate;
	}
	return null;
}

export default defineConfig({
	site: 'https://512austinhome.com',
	trailingSlash: 'always',
	integrations: [
		mdx(),
		// Exclude paid-ad landing pages (noindex) from the sitemap
		sitemap({
			filter: (page) => !page.includes('/home-value'),
			serialize(item) {
				let pathname = '/';
				try {
					pathname = new URL(item.url).pathname;
				} catch {
					return item;
				}
				const source = sourceFileForUrl(pathname);
				const iso = source ? gitLastModified(source) : null;
				// Omit lastmod rather than guess — a missing value is better than a wrong one.
				if (iso) item.lastmod = iso;
				return item;
			},
		}),
	],

	vite: {
		plugins: [tailwindcss()],
	},
});
