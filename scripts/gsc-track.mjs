#!/usr/bin/env node
/**
 * GSC tracker for 512austinhome.com.
 *
 * Pulls Search Console, writes a dated snapshot, and diffs against the previous
 * one so a run answers "what changed" rather than "what is the number".
 *
 * Usage:
 *   node scripts/gsc-track.mjs            # 28-day window (default)
 *   node scripts/gsc-track.mjs --days 90
 *
 * Snapshots land in raw/metrics/gsc-512austinhome/ inside the EA vault, so the
 * history lives with the rest of the second brain rather than in the site repo.
 */

import { execSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const SEO = `${process.env.HOME}/.claude/skills/seo/bin/claude-seo`;
const PROPERTY = 'sc-domain:512austinhome.com';
const OUT_DIR = `${process.env.HOME}/Desktop/EA Ashley/raw/metrics/gsc-512austinhome`;

const days = Number(process.argv[process.argv.indexOf('--days') + 1]) || 28;
const today = new Date().toISOString().slice(0, 10);

/** The clusters launched 2026-09-23. These are what we are actually measuring. */
const CLUSTERS = {
  '/deals/': 'Deals',
  '/builders/': 'Builders',
  '/incentives/': 'Incentives',
  '/guides/': 'Guides',
  '/compare/': 'Comparisons',
  '/moving-to-austin/': 'Employers',
  '/new-construction/': 'New construction',
};

/** Pages we expect to move because their content changed materially. */
const WATCHLIST = [
  '/new-construction/communities/cross-creek-cedar-park/',
  '/new-construction/communities/morningstar/',
  '/new-construction/communities/travisso/',
  '/new-construction/georgetown/',
  '/blog/best-austin-real-estate-agents-2026/',
];

function pull() {
  const raw = execSync(
    `'${SEO}' run gsc_query.py query --property ${PROPERTY} --days ${days} --json`,
    { encoding: 'utf-8', maxBuffer: 64 * 1024 * 1024 },
  );
  return JSON.parse(raw).rows || [];
}

function summarise(rows) {
  const path = (u) => u.replace('https://512austinhome.com', '');
  const totals = { clicks: 0, impressions: 0, posWeighted: 0 };
  const byPage = {};
  const byQuery = {};
  const byCluster = Object.fromEntries(Object.keys(CLUSTERS).map((k) => [k, { clicks: 0, impressions: 0, posWeighted: 0, pages: new Set() }]));

  for (const r of rows) {
    totals.clicks += r.clicks;
    totals.impressions += r.impressions;
    totals.posWeighted += r.position * r.impressions;

    const p = path(r.page);
    (byPage[p] ??= { clicks: 0, impressions: 0, posWeighted: 0 });
    byPage[p].clicks += r.clicks;
    byPage[p].impressions += r.impressions;
    byPage[p].posWeighted += r.position * r.impressions;

    (byQuery[r.query] ??= { clicks: 0, impressions: 0, posWeighted: 0 });
    byQuery[r.query].clicks += r.clicks;
    byQuery[r.query].impressions += r.impressions;
    byQuery[r.query].posWeighted += r.position * r.impressions;

    // Longest prefix wins, so /new-construction/ does not swallow nothing and
    // a community page still counts under new construction.
    const pref = Object.keys(CLUSTERS).filter((k) => p.startsWith(k)).sort((a, b) => b.length - a.length)[0];
    if (pref) {
      byCluster[pref].clicks += r.clicks;
      byCluster[pref].impressions += r.impressions;
      byCluster[pref].posWeighted += r.position * r.impressions;
      byCluster[pref].pages.add(p);
    }
  }

  // Queries that look like an AI agent pasted its prompt into search. They are
  // not human demand and they inflate every rate if left in.
  const BOT = /i.m a broker representing|representing clients in the search/i;
  const botImpressions = Object.entries(byQuery)
    .filter(([q]) => BOT.test(q))
    .reduce((n, [, v]) => n + v.impressions, 0);

  return {
    date: today,
    days,
    totals: {
      clicks: totals.clicks,
      impressions: totals.impressions,
      ctr: totals.impressions ? +(100 * totals.clicks / totals.impressions).toFixed(3) : 0,
      position: totals.impressions ? +(totals.posWeighted / totals.impressions).toFixed(1) : 0,
      humanImpressions: totals.impressions - botImpressions,
      botImpressions,
    },
    clusters: Object.fromEntries(Object.entries(byCluster).map(([k, v]) => [k, {
      label: CLUSTERS[k],
      pages: v.pages.size,
      clicks: v.clicks,
      impressions: v.impressions,
      position: v.impressions ? +(v.posWeighted / v.impressions).toFixed(1) : null,
    }])),
    watchlist: Object.fromEntries(WATCHLIST.map((p) => {
      const v = byPage[p];
      return [p, v ? { clicks: v.clicks, impressions: v.impressions, position: +(v.posWeighted / v.impressions).toFixed(1) } : null];
    })),
    pagesWithImpressions: Object.keys(byPage).length,
    topPages: Object.entries(byPage).sort((a, b) => b[1].impressions - a[1].impressions).slice(0, 25)
      .map(([p, v]) => ({ page: p, clicks: v.clicks, impressions: v.impressions, position: +(v.posWeighted / v.impressions).toFixed(1) })),
    topQueries: Object.entries(byQuery).sort((a, b) => b[1].impressions - a[1].impressions).slice(0, 40)
      .map(([q, v]) => ({ query: q, clicks: v.clicks, impressions: v.impressions, position: +(v.posWeighted / v.impressions).toFixed(1) })),
  };
}

function previous() {
  if (!existsSync(OUT_DIR)) return null;
  const files = readdirSync(OUT_DIR)
    .filter((f) => f.endsWith(`-snapshot-${days}d.json`) && !f.startsWith(today))
    .sort();
  if (!files.length) return null;
  return JSON.parse(readFileSync(join(OUT_DIR, files.at(-1)), 'utf-8'));
}

const delta = (now, then) => {
  if (then === null || then === undefined) return '';
  const d = +(now - then).toFixed(1);
  if (d === 0) return '  (=)';
  return d > 0 ? `  (+${d})` : `  (${d})`;
};

const rows = pull();
const snap = summarise(rows);
mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(join(OUT_DIR, `${today}-snapshot-${days}d.json`), JSON.stringify(snap, null, 1));

const prev = previous();
const t = snap.totals;

console.log(`\n512austinhome.com — GSC ${days}-day window, ${today}`);
if (prev) console.log(`vs previous snapshot ${prev.date}`);
console.log('─'.repeat(64));
console.log(`clicks              ${t.clicks}${delta(t.clicks, prev?.totals.clicks)}`);
console.log(`impressions         ${t.impressions}${delta(t.impressions, prev?.totals.impressions)}`);
console.log(`  of which human    ${t.humanImpressions}   (${t.botImpressions} are AI-agent prompt leakage)`);
console.log(`CTR                 ${t.ctr}%${delta(t.ctr, prev?.totals.ctr)}`);
console.log(`avg position        ${t.position}${delta(t.position, prev?.totals.position)}   (lower is better)`);
console.log(`pages w/ impressions ${snap.pagesWithImpressions}${delta(snap.pagesWithImpressions, prev?.pagesWithImpressions)}`);

console.log(`\nCLUSTERS (launched 2026-09-23)`);
console.log('─'.repeat(64));
for (const [k, v] of Object.entries(snap.clusters)) {
  const p = prev?.clusters?.[k];
  const pos = v.position === null ? '   —' : String(v.position).padStart(5);
  console.log(`${v.label.padEnd(18)} ${String(v.impressions).padStart(6)}i${delta(v.impressions, p?.impressions)}  ${String(v.clicks).padStart(3)}c  pos ${pos}`);
}

console.log(`\nWATCHLIST`);
console.log('─'.repeat(64));
for (const [p, v] of Object.entries(snap.watchlist)) {
  if (!v) { console.log(`${p.slice(0, 46).padEnd(48)} no impressions`); continue; }
  const before = prev?.watchlist?.[p];
  console.log(`${p.slice(0, 46).padEnd(48)} ${String(v.impressions).padStart(5)}i  pos ${String(v.position).padStart(5)}${delta(v.position, before?.position)}`);
}
console.log(`\nSaved: ${join(OUT_DIR, `${today}-snapshot-${days}d.json`)}\n`);
