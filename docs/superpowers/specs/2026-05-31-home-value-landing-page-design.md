# `/home-value/` — Seller Home Valuation Landing Page

**Date:** 2026-05-31
**Goal:** A distraction-free landing page for cold paid traffic from ChatGPT ads targeting home sellers. The ads promise a home valuation, so the page leads with the Real Geeks valuation widget and is engineered for a single conversion: get the visitor to enter their address.

## Decisions (confirmed with user)

| Decision | Choice |
|---|---|
| Page style | Distraction-free LP — no site `Header`/`Footer`, no nav, no cross-links to blog/neighborhoods. Slim header (brand + tap-to-call) and slim legal footer only. |
| Indexing | `noindex, nofollow` + excluded from sitemap. Keeps it ad-only, avoids competing with the main `/sell/` page. |
| Conversion paths | Primary: Real Geeks valuation widget. Secondary: Tally `ContactForm`. (No big click-to-call CTA section, no booking embed.) |
| Route | `/home-value/` |

## Architecture

Two new files + one config edit. Reuses existing `BaseHead`, `SchemaMarkup`, `ContactForm`, and `consts.ts` — nothing in the shared site is modified.

### 1. `src/layouts/LandingLayout.astro` (new)
Distraction-free document shell. Renders the full `<html>` doc itself (does NOT use `BaseLayout`, so the site `Header`/`Footer` never appear).
- `<head>`: includes `BaseHead` (fonts, OG, meta, global.css) **plus** `<meta name="robots" content="noindex, nofollow" />`.
- **Slim header:** brand wordmark "512 Austin Home" as plain text (not a link — no exit leak) + a tap-to-call `tel:` button. Sticky, matches site styling.
- `<slot />` for page content.
- **Slim footer:** legal only — copyright, `eXp Realty`, `TREC #811948`, plus the TREC-required IABS and Consumer Protection Notice links, and phone. No nav.
- Props: `title`, `description`, `image?`, `canonical?` — passed through to `BaseHead`.

### 2. `src/pages/home-value.astro` (new)
Uses `LandingLayout`. `trailingSlash: 'always'` makes this resolve to `/home-value/`.

Sections (single column, `max-w-4xl`, conversion-ordered):
1. **Hero + valuation widget** — H1 "What's Your Austin Home Worth?", one-line subhead, trust microcopy, then the Real Geeks widget embedded **above the fold**. Widget = the exact provided `<div class="rg-valuation-root" ...>` + loader script wired with `is:inline` so Astro doesn't strip/bundle it.
2. **Trust strip** — 4 proof points (5.0 rating, families helped, local Austin agent, eXp Realty).
3. **More than an algorithm** — 3 short cards: instant online estimate *plus* a real local CMA. Honest framing that converts skeptical sellers vs. Zillow-style guesses.
4. **How it works** — 3 numbered steps: enter address → instant estimate → optional no-obligation expert valuation.
5. **Meet William** — short credibility block (eXp, TREC #811948, YouTube proof).
6. **Secondary capture** — `ContactForm` (Tally) for "prefer a personal valuation?" leads.

**Schema:** `SchemaMarkup type="agent"` and `type="faq"` (a few seller-valuation Q&As). Emitted even though `noindex` — LLMs and ad quality bots still parse it. No breadcrumb (orphan LP).

### 3. `astro.config.mjs` (edit)
Add a `filter` to the `sitemap()` integration excluding any URL containing `/home-value`.

## Out of scope
- No changes to existing pages, components, or the main `/sell/` funnel.
- No click-to-call CTA section or scheduling embed (per user's CTA selection).
- No A/B variants, analytics/pixel wiring (can be layered later if the ad platform needs a conversion pixel).

## Verification
`npm run build` succeeds; `/home-value/index.html` is generated, contains the `rg-valuation-root` div + loader script and the `robots noindex` meta; `/home-value/` does not appear in the generated sitemap.
