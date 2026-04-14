# 512 Austin Home — Site Instructions

## What This Is
512austinhome.com — William Zhang's English-language real estate site for Austin, TX.
Built with Astro + Tailwind. Optimized for local SEO and AI/LLM discoverability (GEO/AEO).

## Tech Stack
- Astro 6.x + MDX
- Tailwind CSS 4.x (via @tailwindcss/vite)
- @astrojs/sitemap, @astrojs/rss
- Sharp for image optimization
- Node 22+

## Content Structure
- `src/content/blog/` — Blog posts (MDX). Each gets JSON-LD Article schema automatically.
- `src/content/neighborhoods/` — Neighborhood guide pages (MDX). Each gets Place schema.
- `src/content/content.config.ts` — Collection schemas.

## SEO Rules
- Every page must have: title with target keyword, meta description, canonical URL, OG tags
- Blog posts: keyword in title, URL, H1, first sentence (Pareto SEO)
- FAQ sections on service pages use FAQPage schema — these get cited by LLMs
- SchemaMarkup component handles all JSON-LD (RealEstateAgent, LocalBusiness, Article, FAQPage, Place)
- Never remove or weaken structured data

## Design
- Light/bright theme (not dark mode)
- Font: Plus Jakarta Sans (display), Inter (body)
- Accent color: #2563eb (blue)
- Mobile-first, clean, content-driven
- No emojis

## Key URLs
- IDX/home search: lifeinaustintx.com (Real Geeks) — link to it, don't replicate
- YouTube: @WilliamTexasHomes (Mandarin), @aiforrealtors (English)
- Phone: (512) 766-3188
- Brokerage: eXp Realty, TREC #811948

## What This Site Does NOT Do
- No IDX/property search (that's lifeinaustintx.com)
- No Mandarin content (that's the YouTube channel)
- No CRM integration (leads from contact form get manually added to FUB)

## Content Guidelines
- Write for Austin homebuyers and sellers
- Include specific neighborhood names, school districts, price data
- Use comparison format when covering multiple areas (Austin vs X)
- FAQ sections with natural question-answer pairs (AI loves these)
- Embed YouTube videos where relevant using YouTubeEmbed component
- Cross-link between blog posts and neighborhood pages

## Commands
```bash
npm run dev     # Local dev server
npm run build   # Production build
npm run preview # Preview production build
```
