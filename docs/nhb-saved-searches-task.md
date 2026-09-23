# Task: create New Home Buddy saved searches and wire them into the site

Use the Claude desktop app's built-in browser (or Claude in Chrome if this is running in the CLI). Do NOT script a login and do NOT hit any API — go through the UI at a normal human pace, one search at a time. The account feeds my lead gen and must not look like a bot.

**Sign-in:** open `https://agent.newhomebuddy.com/login` in the browser pane first. If it isn't already signed in, stop and ask me to sign in myself in the pane — do not type my password. The built-in browser keeps the session, so this is a one-time step.

## Steps, for each search below
1. Go to NHB → **Lead Gen** → create a new saved search with the filters listed.
2. Name it as listed.
3. Click **Copy link** and read the link (clipboard works in real Chrome).
4. Paste it into the matching `nhb: ''` slot in `src/data/search-links.ts`.

If a filter doesn't exist in NHB (e.g. "rate incentives"), pick the closest honest option and tell me what you used — or skip it and tell me. Never guess a URL.

## Top 10, in order
| # | Name | Filters | Slot in search-links.ts |
|---|---|---|---|
| 1 | Move-in ready, Austin | Build status: move-in ready · Austin metro | `TOPIC_LINKS['quick-move-in']` (also use for `best-time-to-buy`) |
| 2 | Rate incentives, Austin | Builders offering rate buydowns (Lennar, Pulte) · Austin metro | `TOPIC_LINKS['rate-buydowns']` |
| 3 | Incentives, Austin | Homes with an incentive · Austin metro | `TOPIC_LINKS['incentives']` |
| 4 | Lennar, Austin | Builder: Lennar · Austin metro | `BUILDER_LINKS['lennar']` |
| 5 | Taylor Morrison, Austin | Builder: Taylor Morrison | `BUILDER_LINKS['taylor-morrison']` |
| 6 | Pulte, Austin | Builder: Pulte Homes | `BUILDER_LINKS['pulte-homes']` |
| 7 | Meritage, Austin | Builder: Meritage Homes | `BUILDER_LINKS['meritage-homes']` |
| 8 | Luxury new construction | $750K+ · Austin metro | `TOPIC_LINKS['luxury']` |
| 9 | Top school districts | Leander / Round Rock / Dripping Springs / Liberty Hill / Georgetown ISD | `TOPIC_LINKS['best-schools']` |
| 10 | Recent price drops | Austin metro · price reduced | `TOPIC_LINKS['price-reductions']` |

Stop after these 10 and check with me before doing the rest (12 more builders, 9 cities — full list with filters in `src/data/search-links.ts`).

## Rules
- **No commission info anywhere.** NHB shows a commission field "not shown to buyers" — never record it.
- Don't touch any other NHB settings, clients, or connections.

## When done
1. `npm run build` — must pass.
2. Spot-check that the buttons on `/deals/`, `/builders/lennar/`, `/deals/rate-buydowns/` now point at the new links (grep `dist/`).
3. Commit (author `William Zhang <william@magyak.com>`, pass it explicitly with `git -c user.name=... -c user.email=...`) and push. Confirm the deploy is live.
4. Tell me which 10 were created, their links, and anything you had to approximate.
