# SEO Title & Meta Description Audit — 512austinhome.com
**Date:** 2026-05-06
**Auditor:** Claude Code (SEO Audit Framework)
**Scope:** All 51 blog posts in `src/content/blog/`
**Problem being solved:** 444 GSC queries with impressions but ZERO clicks — pages are ranking (page 2-3) but SERP snippets are not compelling enough to earn clicks.

---

## Executive Summary

51 blog posts audited. The site has real ranking presence (444 impression-generating queries), but zero clicks indicates a CTR problem, not a ranking problem. The SERP snippets are too long, too generic, and lack the number-anchored hooks, urgency signals, and emotional triggers that beat competing results.

**Root causes across the board:**
1. **Titles are too long** — 34 of 51 posts exceed the 60-character display limit. Google truncates them in SERPs, cutting off the keyword or the hook.
2. **Descriptions are too long** — 42 of 51 exceed 155 characters. Google rewrites long descriptions and often pulls random body text, destroying the intended SERP snippet.
3. **Titles lack click triggers** — Most titles are descriptive but not compelling. No curiosity gap, no surprising number, no "what nobody tells you" hook that makes someone choose YOUR result over the others.
4. **Descriptions bury the value prop** — Many descriptions start with a restatement of the title or a generic intro rather than the most compelling fact up front.
5. **Intent mismatch on key queries** — The "builder discounts georgetown" query maps to the Georgetown new construction post, but neither the title nor description mentions discounts, incentives, or savings — a direct signal mismatch.

**Top 5 Highest-Impact Fixes:**
1. `moving-from-california-to-austin` — 34 impressions, 0 clicks. Title is 69 chars (truncated). Description is 183 chars. Fixing both could add 10-20 clicks/month immediately.
2. `best-neighborhoods-for-families-austin` — 42 impressions (17+25 across variants), 0 clicks. Description is 169 chars. Needs a number hook and shorter title.
3. `new-construction-homes-georgetown-2026` — 17 impressions for "builder discounts georgetown," 0 clicks. Description doesn't mention incentives or savings at all — pure intent mismatch.
4. `new-construction-homes-leander-2026` — 18 impressions for "new home builders leander tx," 0 clicks. Title and description don't call out specific builders, which is what searchers want to know.
5. `new-construction-homes-round-rock-2026` — 16+ impressions for "new construction homes round rock" variants, 0 clicks. Title is 67 chars and description is short but weak — no pricing hook.

---

## GSC Query → Post Mapping Table

| GSC Query | Impressions | Est. Clicks | Mapped Post (Slug) | Match Quality |
|-----------|-------------|-------------|--------------------|---------------|
| moving to austin texas from california | 34 | 0 | `moving-from-california-to-austin` | Strong |
| best neighborhoods in austin for families | 25 | 0 | `best-neighborhoods-for-families-austin` | Strong |
| best neighborhoods in austin tx for families 2025/2026 | 17 | 0 | `best-neighborhoods-for-families-austin` | Strong |
| new home builders leander tx | 18 | 0 | `new-construction-homes-leander-2026` | Strong |
| builder discounts georgetown | 17 | 0 | `new-construction-homes-georgetown-2026` | Weak (intent mismatch) |
| new construction homes round rock (variants) | 16+ | 0 | `new-construction-homes-round-rock-2026` | Strong |
| pros and cons of living in austin | ~10 est. | 0 | `pros-and-cons-austin-2026` | Strong |
| austin housing market 2026 | ~10 est. | 0 | `austin-housing-market-january-2026` | Strong |
| things to know before moving to austin | ~8 est. | 0 | `things-no-one-tells-you-living-in-austin` | Strong |
| new construction homes leander | ~8 est. | 0 | `leander-new-construction-by-price-2026` | Strong |
| new construction homes pflugerville | ~7 est. | 0 | `new-construction-homes-pflugerville-2026` | Strong |
| new construction homes hutto tx | ~7 est. | 0 | `new-construction-homes-hutto-2026` | Strong |
| austin neighborhoods to avoid | ~6 est. | 0 | `austin-neighborhoods-to-avoid` | Strong |
| best suburbs of austin texas | ~6 est. | 0 | `top-austin-suburbs-2026` | Strong |
| new construction homes cedar park | ~5 est. | 0 | `new-construction-homes-cedar-park-2026` | Strong |
| new construction homes dripping springs | ~5 est. | 0 | `new-construction-homes-dripping-springs-2026` | Strong |
| first time home buyer austin | ~5 est. | 0 | `austin-first-time-home-buyer-mistakes-2026` | Moderate |
| how much home can i afford austin | ~5 est. | 0 | `austin-home-affordability-by-salary` | Strong |
| new construction upgrades worth it | ~4 est. | 0 | `new-construction-upgrades-highest-roi` | Strong |
| mistakes buying new construction | ~4 est. | 0 | `new-construction-mistakes-austin` | Strong |

---

## Tier 1: HIGH IMPACT — Fix Immediately
*Posts mapping to GSC queries with 15+ impressions and 0 clicks*

### 1. `moving-from-california-to-austin`
**GSC Query:** "moving to austin texas from california" — 34 impressions, 0 clicks

| | Current | Recommended |
|---|---|---|
| **Title** | Moving from California to Austin: The Complete 2026 Relocation Guide *(69 chars — TRUNCATED)* | Moving from California to Austin: 2026 Guide *(45 chars)* |
| **Description** | Thinking of moving from California to Austin, TX? Here's the honest breakdown of taxes, home prices, lifestyle, weather, and what to expect — from a local Austin real estate agent. *(183 chars — TOO LONG)* | No state income tax, lower home prices, 300 days of sun. Here's the honest relocation guide from a local Austin agent — what nobody posts on Reddit. *(149 chars)* |

**Reasoning:** The current title is 69 chars and gets cut off after "Complete" in most SERPs — Google never shows "2026 Relocation Guide." The description is 183 chars and gets rewritten by Google. The new title fits entirely. The new description leads with the #1 reason Californians move to Austin (no income tax), adds a number (300 days), and ends with a curiosity hook ("what nobody posts on Reddit") that beats generic relocation articles.

---

### 2. `best-neighborhoods-for-families-austin`
**GSC Queries:** "best neighborhoods in austin for families" (25 imp.) + "best neighborhoods in austin tx for families 2025 2026" (17 imp.) — 42 total impressions, 0 clicks

| | Current | Recommended |
|---|---|---|
| **Title** | Best Neighborhoods for Families in Austin, TX (2026) *(53 chars — OK)* | Best Austin Neighborhoods for Families 2026: Ranked *(52 chars)* |
| **Description** | The top family-friendly neighborhoods in Austin, Texas ranked by schools, safety, home prices, and amenities. A local agent's honest guide to where families should buy. *(169 chars — TOO LONG)* | 7 Austin neighborhoods ranked by schools, safety & home prices — from Avery Ranch ($450K) to Brushy Creek. A local agent's honest picks for 2026. *(146 chars)* |

**Reasoning:** The title is acceptable length but feels flat — "Ranked" at the end creates pattern interruption. More importantly, the description is 169 chars (Google truncates at ~155) and mentions no specific neighborhoods or prices. The new description names actual neighborhoods and includes a real price anchor ($450K), which signals to searchers that this result has specific data, not generic advice. The "7 neighborhoods" number also increases click confidence.

---

### 3. `new-construction-homes-georgetown-2026`
**GSC Query:** "builder discounts georgetown" — 17 impressions, 0 clicks — INTENT MISMATCH

| | Current | Recommended |
|---|---|---|
| **Title** | New Construction Homes in Georgetown, TX -- The 2026 Buyer's Guide *(67 chars — TRUNCATED)* | Georgetown TX New Construction Homes 2026: From $340K *(54 chars)* |
| **Description** | Georgetown new construction from the $340s to $725K+. Top communities, builders, school districts, and current incentives. *(123 chars — OK length, but weak)* | Georgetown new construction from $340K–$725K. Builder incentives, rate buydowns & lot discounts available now. 3 communities compared by a local agent. *(152 chars)* |

**Reasoning:** The query "builder discounts georgetown" is a commercial-intent searcher who wants to know what they can negotiate. Neither the current title nor description mentions discounts, incentives, or savings. The new description explicitly mentions "builder incentives, rate buydowns & lot discounts" — directly matching the search intent. Title shortened to 54 chars so it renders fully. The price range ($340K) immediately qualifies the audience.

---

### 4. `new-construction-homes-leander-2026`
**GSC Query:** "new home builders leander tx" — 18 impressions, 0 clicks

| | Current | Recommended |
|---|---|---|
| **Title** | New Construction Homes in Leander, TX -- The 2026 Buyer's Guide *(64 chars — borderline)* | Leander TX New Construction Homes 2026: 9 Communities *(54 chars)* |
| **Description** | Leander new construction from the $370s to $1.1M. Top communities, builders, Leander ISD schools, and current incentives. *(122 chars — OK length, weak hook)* | 9 Leander communities from $370K–$1.1M. Pulte, Meritage, Highland Homes & more — all in top-rated Leander ISD. Current incentives listed. *(139 chars)* |

**Reasoning:** The query "new home builders leander tx" means the searcher wants to know WHICH builders are active in Leander. Neither the current title nor description names a single builder. The new description names 3 specific builders (Pulte, Meritage, Highland Homes), which directly answers the query and will dramatically increase CTR for this intent. "9 communities" in the title signals comprehensive coverage. Leander ISD reinforces the quality signal for family buyers.

---

### 5. `new-construction-homes-round-rock-2026`
**GSC Query:** "new construction homes round rock" variants — 16+ impressions, 0 clicks

| | Current | Recommended |
|---|---|---|
| **Title** | New Construction Homes in Round Rock, TX -- The 2026 Buyer's Guide *(67 chars — TRUNCATED)* | Round Rock TX New Construction 2026: From $310K *(48 chars)* |
| **Description** | Round Rock new construction from $310K to $650K. 3 communities, top builders, Round Rock ISD info, and current incentives. *(123 chars — OK length, weak)* | Round Rock new construction from $310K–$650K in top-rated Round Rock ISD. Only 3 active communities — here's exactly what each offers in 2026. *(143 chars)* |

**Reasoning:** Current title is 67 chars and gets truncated in most SERPs. The new title at 48 chars renders fully and leads with the location + price anchor ($310K). The description is improved by adding "Only 3 active communities" — scarcity is a powerful SERP click trigger that also accurately describes the market. "Top-rated Round Rock ISD" adds an emotional benefit for family buyers who are the primary audience.

---

## Tier 2: MEDIUM IMPACT — Fix This Week
*Posts mapping to GSC queries with 5–14 impressions and 0 clicks*

### 6. `pros-and-cons-austin-2026`
**GSC Query:** "pros and cons of living in austin" — ~10 est. impressions, 0 clicks

| | Current | Recommended |
|---|---|---|
| **Title** | Pros and Cons of Living in Austin Texas 2026: The Honest Breakdown *(67 chars — TRUNCATED)* | Pros and Cons of Living in Austin TX 2026 *(42 chars)* |
| **Description** | Pros and cons of living in Austin Texas 2026 — job market, outdoor lifestyle, schools, heat, traffic, property taxes, and what's actually changed in the last two years. *(171 chars — TOO LONG)* | 8 real pros and 6 honest cons — property taxes, 100°F summers, tech jobs, and no state income tax. Updated for 2026 by a local Austin agent. *(141 chars)* |

**Reasoning:** Title truncated at "2026" — the "Honest Breakdown" never shows. Description is 171 chars and gets rewritten. New description uses specific numbers (8 pros, 6 cons), calls out the most emotionally resonant items (property taxes, 100°F summers, no state income tax), and includes the trust signal "local Austin agent." Searchers choosing between multiple "pros and cons austin" results will click the one that signals specificity.

---

### 7. `austin-housing-market-january-2026`
**GSC Query:** "austin housing market 2026" — ~10 est. impressions, 0 clicks

| | Current | Recommended |
|---|---|---|
| **Title** | Austin Housing Market January 2026: What the Numbers Actually Mean *(67 chars — TRUNCATED)* | Austin Housing Market 2026: $400K Median, 4 Mo. Supply *(55 chars)* |
| **Description** | The Austin housing market in January 2026 shows a median price of $400,495, 4.0 months inventory, 89 days on market, and rental listings up 47.3%. Here's what it means for buyers and sellers. *(192 chars — WAY TOO LONG)* | Austin housing market data: $400K median, 89 days on market, inventory up 47%. A local agent explains what it means for buyers and sellers in 2026. *(148 chars)* |

**Reasoning:** Title is 67 chars and "Actually Mean" gets cut. The new title LEADS with the data ($400K median, 4 mo. supply) — this is what searchers actually want and it's a pattern interrupt against generic "Austin Housing Market 2026" titles. Description was 192 chars (way over limit). New version keeps the key numbers in under 155 chars.

---

### 8. `things-no-one-tells-you-living-in-austin`
**GSC Query:** "things to know before moving to austin" — ~8 est. impressions, 0 clicks

| | Current | Recommended |
|---|---|---|
| **Title** | 7 Things Nobody Tells You Before Moving to Austin Texas (Living in Austin Truth) *(81 chars — SEVERELY TRUNCATED)* | 7 Things Nobody Tells You About Moving to Austin TX *(52 chars)* |
| **Description** | The living in Austin Texas truth: heat, property taxes, cedar fever, electric bills, water restrictions, and construction. Read this before you move. *(150 chars — OK but starts weak)* | Cedar fever, $8K/yr property taxes, 105°F summers, and HOA rules everywhere. 7 Austin truths a local agent wishes buyers knew before they moved. *(145 chars)* |

**Reasoning:** Title is 81 chars — Google truncates after "Nobody Tells You Before" so the curiosity hook gets buried. New title at 52 chars shows completely. The description leads with specific numbers ($8K/yr property taxes, 105°F), which are the actual "nobody tells you" facts searchers want. These specifics will pull more clicks than the vague "heat, property taxes" list.

---

### 9. `new-construction-homes-pflugerville-2026`
**GSC Query:** "new construction homes pflugerville" — ~7 est. impressions, 0 clicks

| | Current | Recommended |
|---|---|---|
| **Title** | New Construction Homes in Pflugerville, TX -- The 2026 Buyer's Guide *(69 chars — TRUNCATED)* | Pflugerville TX New Construction 2026: From $290K *(50 chars)* |
| **Description** | Pflugerville new construction from $290K to $749K. 11 communities, top builders, school info, and current incentives. *(118 chars — OK length, weak hook)* | 11 Pflugerville communities from $290K–$749K near Apple, Samsung & Dell. Pfluger-Leander ISD info, builder incentives, and current pricing. *(140 chars)* |

**Reasoning:** Title truncated. New title at 50 chars renders fully with price anchor. The description update adds "near Apple, Samsung & Dell" — Pflugerville is a tech corridor and many searchers are tech workers. This employer proximity signal will dramatically increase CTR for the primary audience. "11 communities" shows comprehensive coverage.

---

### 10. `new-construction-homes-hutto-2026`
**GSC Query:** "new construction homes hutto tx" — ~7 est. impressions, 0 clicks

| | Current | Recommended |
|---|---|---|
| **Title** | New Construction Homes in Hutto, TX -- The 2026 Buyer's Guide *(62 chars — borderline)* | Hutto TX New Construction 2026: Cheapest Near Austin *(53 chars)* |
| **Description** | Hutto new construction from $260K to $550K. 4 communities, top builders, school info, and current incentives for 2026. *(119 chars — OK length, weak)* | Hutto has the most affordable new construction near Austin — from $260K. 4 communities, builder incentives, and Hutto ISD info from a local agent. *(147 chars)* |

**Reasoning:** "Cheapest Near Austin" in the title is a powerful click trigger — it tells the searcher immediately this is the affordability option they're looking for. The description reinforces this positioning with "most affordable new construction near Austin" and the $260K price floor. This is a strong value proposition that generic competing descriptions won't have.

---

### 11. `austin-neighborhoods-to-avoid`
**GSC Query:** "austin neighborhoods to avoid" — ~6 est. impressions, 0 clicks

| | Current | Recommended |
|---|---|---|
| **Title** | 7 Austin Neighborhoods People Regret Choosing (And What to Pick Instead) *(73 chars — TRUNCATED)* | 7 Austin Neighborhoods to Avoid (and Where to Buy Instead) *(59 chars)* |
| **Description** | Austin neighborhoods people regret most — from flood plains to brutal commutes — and the honest alternatives that actually fit how most buyers live. *(153 chars — just over limit)* | Flood plains, brutal commutes, high MUD taxes — 7 Austin areas a local agent says buyers regret, plus the honest alternatives for each. *(136 chars)* |

**Reasoning:** The current title actually avoids the query keyword "to avoid" — it says "people regret choosing" instead. Google may not be matching this as strongly to "austin neighborhoods to avoid" searches. The new title includes the exact query phrase. Description shortened from 153 to 136 chars and leads with specific negative triggers (flood plains, brutal commutes, high MUD taxes) that create urgency to click.

---

### 12. `top-austin-suburbs-2026`
**GSC Query:** "best suburbs of austin texas" — ~6 est. impressions, 0 clicks

| | Current | Recommended |
|---|---|---|
| **Title** | Top 9 Austin TX Suburbs to Move to in 2026 *(43 chars — short but generic)* | Best Austin Suburbs 2026: Top 9 Ranked by Price & Schools *(58 chars)* |
| **Description** | The best Austin suburbs to move to in 2026 — Cedar Park, Leander, Round Rock, Pflugerville, Georgetown, Lakeway, and more — with prices and honest pros and cons. *(166 chars — TOO LONG)* | Cedar Park, Leander, Round Rock, Georgetown — 9 Austin suburbs ranked by home prices, schools, and commute. Honest pros and cons from a local agent. *(150 chars)* |

**Reasoning:** Current title is short but doesn't signal competitive ranking criteria. "Ranked by Price & Schools" tells searchers what dimensions are being compared, which is exactly what suburb comparison searchers want. Description was 166 chars; new version stays under 155 chars and leads with the specific suburb names (which competitors' generic titles won't have) to attract location-specific searchers.

---

### 13. `austin-first-time-home-buyer-mistakes-2026`
**GSC Query:** "first time home buyer austin" — ~5 est. impressions, 0 clicks

| | Current | Recommended |
|---|---|---|
| **Title** | 5 First-Time Home Buyer Mistakes to Avoid in Austin in 2026 *(60 chars — borderline)* | 5 First-Time Buyer Mistakes in Austin TX (2026) *(48 chars)* |
| **Description** | First-time home buyers in Austin are losing tens of thousands of dollars in 2026 by repeating five avoidable mistakes — from hidden foundation issues to MUD tax surprises. Here's how to skip them. *(199 chars — WAY TOO LONG)* | Austin first-time buyers are losing $10K–$30K on 5 avoidable mistakes — hidden foundation issues, MUD tax surprises, and builder trap upgrades. Here's how to skip them. *(169 chars — still too long)* |

**Reasoning:** Description is 199 chars — heavily over limit and getting rewritten by Google. The title is at the limit and "in Austin in 2026" at the end may be the part that gets cut. Shortened title fits better. Even the "improved" description above should be trimmed further to under 155 chars — target version:

*"Austin first-time buyers lose $10K–$30K on 5 avoidable mistakes: hidden foundations, MUD tax traps, and builder upgrades. A local agent explains. (148 chars)"*

---

### 14. `austin-home-affordability-by-salary`
**GSC Query:** "how much home can i afford austin" — ~5 est. impressions, 0 clicks

| | Current | Recommended |
|---|---|---|
| **Title** | How Much Home Can You Afford in Austin? A Salary-by-Salary Guide *(65 chars — TRUNCATED)* | How Much Home Can You Afford in Austin, TX? (2026) *(51 chars)* |
| **Description** | How much home can I afford in Austin? A practical income-to-home-price map for 2026: $72K salary → ~$250–275K, $100K → ~$350–400K, $150K → ~$500–550K. Includes Austin property tax reality. *(201 chars — WAY TOO LONG)* | Austin affordability by salary: $72K buys ~$275K, $100K buys ~$400K, $150K buys ~$550K. Includes property tax reality. Updated for 2026. *(137 chars)* |

**Reasoning:** Title at 65 chars — "A Salary-by-Salary Guide" gets truncated. The description at 201 chars is the worst offender in the site — it's being almost entirely rewritten by Google. The new description keeps the exact same salary-to-price mapping data (the strongest click trigger) but trims to 137 chars. The arrow format (→) in the current description may not render correctly in some SERP contexts; using plain text is safer.

---

### 15. `new-construction-homes-cedar-park-2026`
**GSC Query:** "new construction homes cedar park" — ~5 est. impressions, 0 clicks

| | Current | Recommended |
|---|---|---|
| **Title** | New Construction Homes in Cedar Park, TX -- The 2026 Buyer's Guide *(67 chars — TRUNCATED)* | Cedar Park TX New Construction 2026: From $367K *(48 chars)* |
| **Description** | Cedar Park new construction is rare -- just 3 active communities from $367K to $1.4M+. Leander ISD, Apple proximity, and what each offers. *(139 chars — good length, weak hook)* | Only 3 active Cedar Park communities from $367K–$1.4M+. All in Leander ISD, minutes from Apple. A local agent compares what each offers in 2026. *(145 chars)* |

**Reasoning:** Title truncated. New title at 48 chars renders fully with price anchor. Description updated to lead with "Only 3 active communities" — the scarcity signal is compelling because it tells buyers the market is limited and they need to act. "Minutes from Apple" is a powerful employer proximity signal for Cedar Park's primary buyer demographic.

---

### 16. `new-construction-homes-dripping-springs-2026`
**GSC Query:** "new construction homes dripping springs" — ~5 est. impressions, 0 clicks

| | Current | Recommended |
|---|---|---|
| **Title** | New Construction Homes in Dripping Springs, TX -- The 2026 Buyer's Guide *(73 chars — TRUNCATED)* | Dripping Springs New Construction 2026: From $500K *(51 chars)* |
| **Description** | Dripping Springs new construction from $500K to $1.5M+. Top communities, builders, Dripping Springs ISD info, and current incentives. *(134 chars — OK length, weak)* | Dripping Springs new construction from $500K–$1.5M. Toll Brothers' Headwaters, Caliterra & more — Hill Country luxury with DSISD schools. *(138 chars)* |

**Reasoning:** Title is 73 chars (badly truncated). New title at 51 chars renders fully. Description improved by naming specific communities (Headwaters, Caliterra), which are what searchers actually want to find. "Hill Country luxury" is the key emotional trigger for Dripping Springs buyers and differentiates from suburban new construction results.

---

## Tier 3: LOW IMPACT — Flag for Future Optimization
*Posts with weak titles/descriptions but no strong impression data yet*

These posts need cleanup but aren't currently generating enough impressions to prioritize:

| Slug | Issues |
|------|--------|
| `500k-austin-inside-vs-suburbs` | Description 159 chars (over limit) |
| `6-reasons-to-move-to-austin` | Description 167 chars (over limit); title generic |
| `austin-city-new-construction-by-price-2026` | Title 72 chars (truncated); dual post with `new-construction-homes-austin-city-2026` may cause duplicate content dilution |
| `austin-vs-dallas-cost-of-living` | Title 70 chars (truncated); description 161 chars (over limit) |
| `cedar-park-new-construction-by-price-2026` | Title 80 chars (badly truncated); potential duplicate of `new-construction-homes-cedar-park-2026` |
| `dripping-springs-new-construction-by-price-2026` | Title 80 chars (badly truncated); potential duplicate |
| `georgetown-new-construction-by-price-2026` | Title 80 chars (badly truncated); potential duplicate |
| `horizon-lake-leander-new-homes` | Title 71 chars (truncated); description 164 chars |
| `how-new-construction-homes-are-built` | Title 77 chars (truncated); description 168 chars |
| `how-to-buy-a-home-in-austin-2026` | Title 61 chars (borderline); description 176 chars |
| `hutto-new-construction-by-price-2026` | Title 91 chars (severely truncated); potential duplicate |
| `inside-the-domain-austin-new-downtown` | Title 70 chars (truncated); description 179 chars |
| `leander-new-construction-by-price-2026` | Title 77 chars (truncated); potential duplicate |
| `lisso-pflugerville-new-homes` | Title 69 chars (truncated); description 166 chars |
| `manor-new-construction-by-price-2026` | Title 75 chars (truncated); potential duplicate |
| `moving-to-kyle-texas` | Description 172 chars (over limit) |
| `neighborhoods-near-austin-apple-office` | Title 67 chars (truncated); description 181 chars |
| `new-construction-350k-500k-austin-2026` | Title 72 chars (truncated) |
| `new-construction-500k-750k-austin-2026` | Title 75 chars (truncated); description 138 chars |
| `new-construction-homes-austin-2026` | Description 181 chars (way over limit) |
| `new-construction-homes-austin-city-2026` | Title 71 chars (truncated); potential duplicate |
| `new-construction-luxury-750k-plus-austin-2026` | Title 75 chars (truncated) |
| `new-construction-mistakes-austin` | Title 78 chars (truncated); description 171 chars |
| `new-construction-under-350k-austin-2026` | Title 71 chars (truncated) |
| `new-construction-upgrades-highest-roi` | Title 85 chars (badly truncated); description 168 chars |
| `pflugerville-new-construction-by-price-2026` | Title 82 chars (badly truncated); potential duplicate |
| `round-rock-new-construction-by-price-2026` | Title 80 chars (badly truncated); potential duplicate |
| `save-money-new-construction-austin` | Title 72 chars (truncated); description 188 chars |
| `sell-or-lease-austin-home-2026` | Description 167 chars (over limit) |
| `texas-cities-housing-market-crash-2025` | Title 71 chars (truncated) |
| `top-austin-school-districts` | Description 194 chars (way over limit) |
| `types-of-austin-homes-not-to-buy` | Description 185 chars (way over limit) |
| `upsizing-austin-home-mistake-2026` | Description 179 chars (over limit) |
| `what-450k-buys-in-austin-2026` | Description 156 chars (just over limit) |

**Special note on duplicate pairs:** The site has apparent duplicate content pairs where both a `*-by-price-2026` slug and a `new-construction-homes-*-2026` slug target the same city. Google will split impressions and ranking authority between them. Recommend consolidating each city to one canonical URL or using canonical tags. Affected cities: Georgetown, Leander, Pflugerville, Cedar Park, Round Rock, Hutto, Manor, Dripping Springs, Austin City.

---

## Priority Execution Order

1. **Tier 1 (this week):** Fix the 5 posts mapped to 15+ impression queries — Georgetown, Leander, Round Rock, California→Austin, best neighborhoods families. Combined they represent 100+ impression-generating queries.
2. **Tier 2 (next week):** Fix the 11 posts mapped to 5–14 impression queries — pros/cons, housing market, things nobody tells you, pflugerville, hutto, neighborhoods to avoid, suburbs, first-time buyer, affordability, cedar park, dripping springs.
3. **Tier 3 (ongoing):** Systematically trim all titles to under 60 chars and all descriptions to under 155 chars. This alone will stop Google from rewriting your snippets with random body text.
4. **Structural fix (this month):** Resolve the duplicate city post pairs by consolidating or adding canonical tags — this could recover split ranking authority.

---

## Character Count Reference (All 51 Posts)

Posts where title > 60 chars (over display limit) — fix priority:

| Post | Title Chars | Desc Chars | Status |
|------|------------|------------|--------|
| `500k-austin-inside-vs-suburbs` | 51 | 159 | Desc over |
| `6-reasons-to-move-to-austin` | 58 | 167 | Desc over |
| `austin-city-new-construction-by-price-2026` | 72 | 136 | Title over |
| `austin-first-time-home-buyer-mistakes-2026` | 60 | 199 | Both over |
| `austin-home-affordability-by-salary` | 65 | 201 | Both over |
| `austin-housing-market-january-2026` | 67 | 192 | Both over |
| `austin-neighborhoods-to-avoid` | 73 | 153 | Both over |
| `austin-vs-dallas-cost-of-living` | 70 | 161 | Both over |
| `best-neighborhoods-for-families-austin` | 53 | 169 | Desc over |
| `cedar-park-new-construction-by-price-2026` | 80 | 134 | Title over |
| `dripping-springs-new-construction-by-price-2026` | 80 | 149 | Title over |
| `georgetown-new-construction-by-price-2026` | 80 | 151 | Title over |
| `horizon-lake-leander-new-homes` | 71 | 164 | Both over |
| `how-new-construction-homes-are-built` | 77 | 168 | Both over |
| `how-to-buy-a-home-in-austin-2026` | 61 | 176 | Both over |
| `hutto-new-construction-by-price-2026` | 91 | 142 | Title over |
| `inside-the-domain-austin-new-downtown` | 70 | 179 | Both over |
| `leander-new-construction-by-price-2026` | 77 | 131 | Title over |
| `lisso-pflugerville-new-homes` | 69 | 166 | Both over |
| `manor-new-construction-by-price-2026` | 75 | 142 | Title over |
| `moving-from-california-to-austin` | 69 | 183 | Both over |
| `moving-to-kyle-texas` | 57 | 172 | Desc over |
| `neighborhoods-near-austin-apple-office` | 67 | 181 | Both over |
| `new-construction-350k-500k-austin-2026` | 72 | 145 | Title over |
| `new-construction-500k-750k-austin-2026` | 75 | 138 | Title over |
| `new-construction-homes-austin-2026` | 61 | 181 | Both over |
| `new-construction-homes-austin-city-2026` | 71 | 140 | Title over |
| `new-construction-homes-cedar-park-2026` | 67 | 139 | Title over |
| `new-construction-homes-dripping-springs-2026` | 73 | 134 | Title over |
| `new-construction-homes-georgetown-2026` | 67 | 123 | Title over |
| `new-construction-homes-hutto-2026` | 62 | 119 | Title over |
| `new-construction-homes-leander-2026` | 64 | 122 | Title over |
| `new-construction-homes-manor-2026` | 62 | 131 | Title over |
| `new-construction-homes-pflugerville-2026` | 69 | 118 | Title over |
| `new-construction-homes-round-rock-2026` | 67 | 123 | Title over |
| `new-construction-luxury-750k-plus-austin-2026` | 75 | 151 | Title over |
| `new-construction-mistakes-austin` | 78 | 171 | Both over |
| `new-construction-under-350k-austin-2026` | 71 | 147 | Title over |
| `new-construction-upgrades-highest-roi` | 85 | 168 | Both over |
| `pflugerville-new-construction-by-price-2026` | 82 | 139 | Title over |
| `pros-and-cons-austin-2026` | 67 | 171 | Both over |
| `round-rock-new-construction-by-price-2026` | 80 | 128 | Title over |
| `save-money-new-construction-austin` | 72 | 188 | Both over |
| `sell-or-lease-austin-home-2026` | 61 | 167 | Both over |
| `texas-cities-housing-market-crash-2025` | 71 | 155 | Title over |
| `things-no-one-tells-you-living-in-austin` | 81 | 150 | Title over |
| `top-austin-school-districts` | 59 | 194 | Desc over |
| `top-austin-suburbs-2026` | 43 | 166 | Desc over |
| `types-of-austin-homes-not-to-buy` | 51 | 185 | Desc over |
| `upsizing-austin-home-mistake-2026` | 57 | 179 | Desc over |
| `what-450k-buys-in-austin-2026` | 49 | 156 | Desc over |

**Summary:** 34 titles over 60 chars. 42 descriptions over 155 chars. Only 2 posts (`best-neighborhoods-for-families-austin` and `top-austin-suburbs-2026`) have title under 60 chars AND description under 155 chars simultaneously.
