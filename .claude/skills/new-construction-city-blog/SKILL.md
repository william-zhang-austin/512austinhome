---
name: new-construction-city-blog
description: Generate SEO-optimized new construction blog posts for specific Austin-area cities. Use this skill whenever the user wants to write a new construction article for a city (e.g., "write a new construction article for Georgetown"), create city-specific new build guides, batch-generate new construction posts for multiple cities, or update an existing city new construction post with fresh pricing. Also trigger when the user mentions ranking for new construction keywords, generating leads from new build content, or covering new homes in Austin suburbs.
---

# New Construction City Blog Post Generator

Generate long-form, data-backed blog posts targeting "new construction homes in [City] TX" for Austin-area cities. Each post combines two data sources: (1) the site's existing TypeScript data files as a structural baseline, and (2) live web research from builder sites and aggregators for the freshest pricing, incentives, and community details.

## Project context

- **Site**: 512austinhome.com -- William Zhang's English Austin, TX real estate site
- **Audience**: Austin homebuyers searching for new construction in specific cities
- **Tech stack**: Astro 6 + MDX, Tailwind 4, content collections in [src/content/blog/](../../../src/content/blog/)
- **Blog frontmatter schema**: defined in [src/content.config.ts](../../../src/content.config.ts)
- **City data**: [src/data/cities.ts](../../../src/data/cities.ts) -- school districts, employers, commute times, price ranges, FAQs
- **Community data**: [src/data/communities.ts](../../../src/data/communities.ts) -- pricing, builders, sqft, amenities, highlights, watchOuts, incentives

## Valid cities

Pflugerville, Leander, Round Rock, Georgetown, Hutto, Austin, Dripping Springs. These match the `CITIES` array in `cities.ts`. If the user requests a city not in this list, inform them and suggest adding it to `cities.ts` first.

## Input

A city name (required). Optional: year (defaults to current year).

**Example invocations:**
- "write a new construction article for Georgetown"
- "create new construction blog posts for all cities"
- "update the Leander new construction article with latest pricing"

---

## Workflow

### Step 0: Parse and validate city

Fuzzy-match the user's input against `CITIES[].name` or `CITIES[].slug` in [src/data/cities.ts](../../../src/data/cities.ts). If no match, list valid cities and stop.

For batch mode ("all cities"), process each city sequentially, running a build check after each.

### Step 1: Check for existing post

Search `src/content/blog/` for files matching `new-construction-homes-{city-slug}*.mdx`.

- **If found**: Ask the user whether to **update** the existing post (re-pull data, set `updatedDate` in frontmatter) or **skip**. In update mode, re-read `cities.ts` and `communities.ts`, regenerate the pricing/community sections, preserve the evergreen narrative sections, and set `updatedDate` to today.
- **If not found**: Proceed to create a new post.

### Step 2: Read baseline data from site files

Read the city's entry from [src/data/cities.ts](../../../src/data/cities.ts):
- `name`, `slug`, `schoolDistricts`, `nearbyEmployers`, `newConstructionPriceRange`, `commuteToDowntown`, `description`, `newConstructionFaqs`

Filter communities from [src/data/communities.ts](../../../src/data/communities.ts) where `city === cityName`:
- `slug`, `name`, `builder`, `priceFrom`, `priceTo`, `sqftMin`, `sqftMax`, `bedsMin`, `bedsMax`, `schoolDistrict`, `mud`, `amenities`, `highlights`, `watchOuts`, `incentives`, `tagline`, `summary`

This gives you the structural baseline: which communities exist, which builders are active, and the site's current data. The next step enriches this with live web data.

### Step 2b: Live web research from builder sites and aggregators

Pull current pricing, incentives, floor plans, and inventory from the web. This is what makes each post authoritative and up-to-date rather than just restating static data.

**Important**: Direct `WebFetch` on builder sites (Lennar, Pulte, Taylor Morrison, KB Home) usually fails -- they return 403s or JS-rendered shells. NewHomeSource also blocks direct fetching. Instead, use **`WebSearch`** which returns rich snippets with real data from these same sites.

#### 2b-i: Search for each known community

For every community found in `communities.ts` for this city, run a WebSearch:

```
WebSearch: "{Community Name}" {City} TX {Builder} new homes pricing {year}
```

Example queries:
- `"Lisso" Pflugerville TX Taylor Morrison new homes pricing 2026`
- `"Horizon Lake" Leander TX Pulte new homes pricing 2026`
- `"Berry Creek Highlands" Georgetown TX new homes pricing 2026`

From each search result, extract:
- **Current base pricing** (often more current than `communities.ts`)
- **Available floor plans** and their individual prices
- **Move-in ready / quick-move-in homes** count and pricing
- **Current incentives** (rate buydowns, closing cost credits, free upgrades)
- **Sqft ranges** for available plans

#### 2b-ii: City-wide discovery search

Run a broader search to find communities NOT yet in `communities.ts`:

```
WebSearch: new construction homes {City} TX {year} communities builders pricing
```

Also search the major aggregators:

```
WebSearch: site:newhomesource.com {City} TX new homes
WebSearch: site:zillow.com {City} TX new construction
```

If you discover new communities not in `communities.ts`, include them in the blog post and flag them to the user: "Found 2 communities not in communities.ts: [names]. Consider adding them to the data file."

#### 2b-iii: Builder incentives search

Run a targeted search for current promotions:

```
WebSearch: {City} TX new home builder incentives promotions {year}
```

Builder incentives change monthly. Capture:
- Rate buydown offers (e.g., "4.99% for 30 years")
- Closing cost credits (e.g., "$10K toward closing")
- Free upgrade packages
- Quick-move-in discounts

#### 2b-iv: Merge web data with baseline

Create a merged dataset for each community:
- **Use web pricing when available** -- it's typically more current than `communities.ts`
- **Fall back to `communities.ts` pricing** when web search returns no results for a community
- **Keep structural data from `communities.ts`** (slug, amenities, highlights, watchOuts, MUD status) since this is curated editorial content not available from builder sites
- **Add new-from-web communities** at the end, noting they don't have site pages yet
- **Flag pricing discrepancies** to the user: "Lisso pricing on Taylor Morrison's site shows $386K-$557K vs $375K-$557K in communities.ts -- using web data, consider updating communities.ts"

### Data integrity rules

- Pricing in the blog post should come from **web research first**, `communities.ts` as fallback
- Structural/editorial data (highlights, watchOuts, tagline, summary) comes from `communities.ts` only -- this is curated content
- School districts and commute times come from `cities.ts` -- these are stable facts
- **Never invent numbers**. If neither web nor data file has a price, omit it
- When using web-sourced pricing, note the source in an HTML comment for future reference: `<!-- pricing from {source} as of {date} -->`
- If web prices differ significantly from `communities.ts` (>5%), alert the user to update the data file

### Step 3: Plan SEO

- **Primary keyword**: `new construction homes in {City Name} TX {year}`
- **Secondary keywords**: `best new builds in {City Name} TX`, `{City Name} new homes for sale`, `{City Name} builders`, `{City Name} {school district} new construction`
- **Slug**: `new-construction-homes-{city-slug}-{year}` (e.g., `new-construction-homes-georgetown-2026`)
- **Internal link targets**:
  - `/new-construction/{city-slug}/` -- city landing page (link in opening + closing)
  - `/new-construction/communities/{community-slug}/` -- each community mentioned
  - `/blog/new-construction-homes-austin-2026/` -- the master new construction guide (link once)
  - `/blog/new-construction-mistakes-austin/` -- mistakes post (link in watchOuts section)
  - `/blog/new-construction-upgrades-highest-roi/` -- upgrades post (link where relevant)
  - `/about` -- CTA in closing

**Pareto SEO rule**: Primary keyword must appear in title, URL slug, H1, first 100 words, and at least one H2.

### Step 4: Generate hero image

Use the existing Gemini image generation script:

```bash
source ~/Desktop/executive\ assistant\ workflow/.claude/skills/thumbnail-generator/.env && \
export GEMINI_API_KEY && \
export SSL_CERT_FILE=$(/Library/Frameworks/Python.framework/Versions/3.9/bin/python3 -c "import certifi; print(certifi.where())" 2>/dev/null) && \
/Library/Frameworks/Python.framework/Versions/3.9/bin/python3 \
  ~/.claude/skills/youtube-to-blog/scripts/generate-hero-image.py \
  --prompt "CITY-SPECIFIC PROMPT" \
  --output "src/assets/blog-images/new-construction-homes-{city-slug}-{year}.png"
```

**City-specific hero image prompts** (adapt based on city character):
- **Georgetown**: "Aerial view of a modern master-planned neighborhood in Georgetown Texas, Texas Hill Country landscape with live oaks, limestone homes, warm golden hour light, editorial real estate photography, 16:9 aspect ratio"
- **Leander**: "Row of new two-story homes along a wide street in a Leander Texas suburb, Hill Country hills in the background, clear blue sky, soft afternoon light, editorial photography, 16:9"
- **Pflugerville**: "Modern single-family homes in a new Pflugerville Texas community, flat prairie landscape, community pool visible, warm natural light, editorial real estate photography, 16:9"
- **Hutto**: "New construction homes on large lots in Hutto Texas, open Texas prairie, farmland in distance, bright morning light, editorial photography, 16:9"
- **Round Rock**: "Contemporary suburban neighborhood in Round Rock Texas, mature trees and new homes, park with walking trail, golden hour light, editorial real estate photography, 16:9"
- **Austin**: "New modern homes in an Austin Texas infill development, downtown skyline visible in distance, live oak trees, warm editorial photography, 16:9"
- **Dripping Springs**: "Hill Country new construction home on a large lot in Dripping Springs Texas, rolling green hills, limestone outcrops, golden hour, editorial real estate photography, 16:9"

No text, faces, logos, watermarks, or UI elements in the image.

**Fallback (stock):**
```bash
/Library/Frameworks/Python.framework/Versions/3.9/bin/python3 \
  ~/.claude/skills/youtube-to-blog/scripts/fetch-hero-image.py \
  --queries "{city name} texas homes, texas new construction neighborhood" \
  --output-dir "src/assets/blog-images/" \
  --per-query 2 --source unsplash
```

### Step 5: Write the MDX post

**Target length**: 1,500-2,500 words.

#### Frontmatter

```yaml
---
title: "New Construction Homes in {City}, TX -- The {Year} Buyer's Guide"
description: "{City} new construction from ${lowestPrice}. Top communities, builders, school districts, and what to watch out for."
pubDate: {today YYYY-MM-DD}
heroImage: ../../assets/blog-images/new-construction-homes-{city-slug}-{year}.png
tags: ["New Construction", "{City}", "Buying"]
faqs:
  - question: "How much do new construction homes cost in {City}, TX?"
    answer: "New construction in {City} ranges from ${lowestPriceFrom} to ${highestPriceTo}. {Brief breakdown by community from communities.ts data.}"
  - question: "Which builders build new homes in {City}?"
    answer: "{List all unique builders from communities.ts for this city with their community names.}"
  - question: "What school district serves new construction in {City}?"
    answer: "{From cities.ts schoolDistricts + community-level schoolDistrict fields. Note if multiple districts serve different communities.}"
  - question: "Are there MUD taxes on new construction in {City}?"
    answer: "{Check mud boolean across all communities. Give specific answer: which communities have MUDs, typical additional rate of 0.5-1.0%.}"
  - question: "How far is {City} from downtown Austin?"
    answer: "{From cities.ts commuteToDowntown. Mention specific routes -- I-35, Toll 130, Toll 45, etc.}"
---
```

Ensure the `description` is under 155 characters and includes the primary keyword.

#### Body sections

**1. Opening (100-150 words)**
- Primary keyword in the first sentence
- Overview of the city's new construction landscape using `cities.ts` description
- Establish William as a local agent who tours these communities regularly
- Link to the city landing page: `[{City} new construction guide](/new-construction/{city-slug}/)`

**2. H2: What {City} New Construction Costs Right Now**
- Price range from cheapest to most expensive community
- Bullet list or comparison with: community name, builder, price range, sqft range
- All numbers directly from `communities.ts` `priceFrom`, `priceTo`, `sqftMin`, `sqftMax`
- Link each community to `/new-construction/communities/{community-slug}/`
- Example format:
  ```
  - **[Lisso](/new-construction/communities/lisso-pflugerville/)** (Taylor Morrison) -- $375K-$557K, 1,700-2,612 sqft, 3-5 beds
  - **[Meadowlark Preserve](/new-construction/communities/meadowlark-preserve/)** (Lennar) -- from $289K, 1,400-2,100 sqft, 3-4 beds
  ```

**3. H2: Top New Construction Communities in {City}**
- 2-4 paragraph review of each community
- Pull from `summary`, `highlights`, `tagline` fields -- synthesize, don't copy-paste
- Include pricing, bed/bath counts, sqft ranges from data
- Note MUD status where `mud: true` (explain the 0.5-1.0% extra tax rate)
- Note amenities from `amenities` array
- Mention garage, HOA from data where available

**4. H2: School Districts Serving {City} New Construction**
- Pull from `cities.ts` `schoolDistricts` array
- Cross-reference with community-level `schoolDistrict` field to show which communities feed into which districts
- If multiple districts serve the city, compare them briefly
- Be honest about school quality -- don't oversell (match the pattern in existing posts)

**5. H2: What to Watch Out For in {City} New Construction**
- Aggregate `watchOuts` from all communities for this city
- Group by theme: MUD taxes, builder contract terms, lot orientation, construction timeline, soil conditions
- Link to `/blog/new-construction-mistakes-austin/` ("I wrote a detailed breakdown of the five costliest new construction mistakes in Austin")
- Link to `/blog/new-construction-upgrades-highest-roi/` where relevant

**6. H2: Commute Times from {City}**
- Use `cities.ts` `commuteToDowntown` and `nearbyEmployers`
- Be specific about routes (I-35, Toll 130, Toll 45, US 183, SH 29, etc.)
- Reference employer locations (Samsung in Taylor, Tesla in southeast Travis County, Apple in northwest Austin, Dell in Round Rock)

**7. H2: Current Builder Incentives in {City}**
- Aggregate `incentives` field from communities where present
- Note that incentives change monthly -- always confirm before visiting
- Common patterns: rate buydowns, closing cost credits, free upgrades
- Link to `/blog/save-money-new-construction-austin/` for the full savings guide

**8. H2: Frequently Asked Questions About New Construction in {City}**
- Render the same FAQs from frontmatter as visible Q&A pairs
- Use `<details>` / `<summary>` or simple H3 + paragraph format (match existing blog post patterns)
- These MUST match the frontmatter `faqs` array exactly -- the frontmatter drives FAQPage JSON-LD schema

**9. Closing (50-100 words)**
- One-sentence summary takeaway
- CTA: "If you are looking at new construction in {City}, [reach out](/about) or call me at (512) 766-3188 -- I can walk you through which communities match what you are looking for."
- Link back to city landing page one more time

### Step 6: SEO optimization

After writing the draft, invoke `marketing:draft-content` to polish:

```
/draft-content Optimize this blog post for local SEO. The site is 512austinhome.com,
targeting Austin, TX homebuyers. Primary keyword: "new construction homes in {City} TX {year}".
Secondary: "best new builds {City} TX", "{City} builders new homes".
Draft is at src/content/blog/{slug}.mdx. Give me SEO recommendations, headline options,
and meta description options. Tone: direct, practical, agent-to-buyer. No emojis.
```

Apply the top recommendations to title, meta description, H2 keywords, and internal links.

### Step 7: Save and verify

Save to `src/content/blog/new-construction-homes-{city-slug}-{year}.mdx`.

Build to verify:
```bash
source ~/.nvm/nvm.sh && nvm use 22 && npm run build
```

After saving, report to the user:
- File path created/updated
- Expected URL: `/blog/new-construction-homes-{city-slug}-{year}/`
- Number of communities covered
- Number of FAQs included
- Reminder to commit and push when ready

---

## Voice and tone rules

- Write as William Zhang, practicing Austin real estate agent (eXp Realty, TREC #811948)
- First person where natural: "I tour new construction in {City} regularly" / "I walk buyers through these communities every month"
- Direct, practical, data-driven -- not marketing-speak
- Assume the reader is a prospective buyer, not an agent or tech person
- Ground every claim in specific data from the data files

### Banned patterns (AI-generated red flags)

- "In this article, we will..."
- "Let's dive into..." / "Let's explore..."
- "In today's fast-paced..."
- "Whether you're a... or a..."
- "It's important to note that..."
- "In conclusion..."
- "Game-changer", "revolutionary", "cutting-edge", "landscape"
- Emoji anywhere
- Rhetorical questions as section openers
- "X, Y, and Z" triplet lists repeated paragraph after paragraph
- Generic "the market is booming" filler with no numbers
- "Nestled in..." / "Boasting..." / "A stone's throw from..."

### Good patterns

- Start sections with a direct statement or observation
- "Here is what {City} new construction actually costs right now..."
- "I walked three buyers through [community] last month..."
- "The short answer is..."
- "This matters because property taxes in [county]..."
- Reference specific communities, floor plans, MUD rates, school ratings

---

## Batch mode

When the user requests posts for all cities:

1. Read all entries from `cities.ts`
2. For each city, check if a post already exists
3. Generate posts sequentially (one at a time)
4. Run `npm run build` after each post to catch errors early
5. Report a summary at the end: cities covered, cities skipped, total posts created

For token cost optimization in batch mode:
- Use **Sonnet** subagents for writing individual posts (good quality, lower cost)
- Use **Haiku** subagents for mechanical tasks (hero image generation, build verification)

---

## Freshness and update strategy

- **Re-running for an existing city** triggers update mode: re-reads data files, regenerates pricing/community sections, preserves evergreen narrative, sets `updatedDate`
- **Year transitions** (e.g., 2026 to 2027): create a new post with the new year slug rather than updating in place. Optionally set `canonical` on the old post pointing to the new one.
- **When `communities.ts` is updated** with new pricing, new communities, or removed communities: re-run the skill for affected cities to propagate changes

---

## Example output (Georgetown)

```yaml
---
title: "New Construction Homes in Georgetown, TX -- The 2026 Buyer's Guide"
description: "Georgetown new construction from $285K. Top communities, builders, school districts, and MUD tax details from a local agent."
pubDate: 2026-04-23
heroImage: ../../assets/blog-images/new-construction-homes-georgetown-2026.png
tags: ["New Construction", "Georgetown", "Buying"]
faqs:
  - question: "How much do new construction homes cost in Georgetown, TX?"
    answer: "New construction in Georgetown ranges from the mid $280s to over $600K, depending on the community and builder. Entry-level options include Lennar homes at Riverview starting around $285K, while larger custom-style builds from Chesmar and Perry Homes reach $600K+."
  - question: "Which builders build new homes in Georgetown?"
    answer: "Major builders active in Georgetown include Lennar, Perry Homes, Chesmar Homes, Pulte Homes, Taylor Morrison, and Meritage Homes. Each targets a different price point and buyer profile."
  - question: "Is Georgetown ISD a good school district?"
    answer: "Georgetown ISD is one of the stronger districts in the north Austin metro. It consistently performs well in state ratings and is a step up from Hutto ISD and Pflugerville ISD, though not quite at Leander ISD or Eanes ISD levels."
  - question: "Are there MUD taxes on new construction in Georgetown?"
    answer: "Some Georgetown communities are in MUDs, which add 0.5-1.0% to your property tax rate. Always ask for the MUD disclosure before signing a contract. Communities inside Georgetown city limits typically do not have MUD taxes."
  - question: "How far is Georgetown from downtown Austin?"
    answer: "Georgetown is about 30-40 minutes from downtown Austin via I-35, depending on traffic. The commute to Round Rock tech employers like Dell is only 15-20 minutes."
---

New construction homes in Georgetown, TX start in the mid $280s and run past
$600K depending on the community and builder. Georgetown has become one of the
most active new-build markets in the north Austin metro...
```