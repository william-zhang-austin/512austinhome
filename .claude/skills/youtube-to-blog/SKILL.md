---
name: youtube-to-blog
description: Convert YouTube videos into SEO-optimized blog posts for the 512austinhome.com Astro site. Use this skill whenever the user wants to turn a YouTube video into a blog post, create a blog post from a video URL, transcribe a video to written content, or mentions converting their Austin real estate YouTube content to articles. Also trigger when the user pastes a YouTube URL and asks to write about it, mentions their English Austin real estate channel, or wants to repurpose video content as local SEO articles. Handles extraction, writing, hero image, and SEO optimization end-to-end.
---

# YouTube to Blog Post (512 Austin Home)

Convert YouTube videos into long-form, locally-optimized blog posts for the 512austinhome.com Astro site. Extracts metadata and transcript, generates a hero image, writes a 1,200-2,500 word post grounded in Austin, TX real estate context, then SEO-optimizes it.

The transcript is the foundation of every post. Description-only posts are not acceptable when a transcript can be pulled.

## Project context

- **Site**: 512austinhome.com — William Zhang's English Austin, TX real estate site
- **Audience**: Austin homebuyers, sellers, and relocators (not AI-for-agents — that is a different project)
- **English YouTube channel**: https://www.youtube.com/channel/UCun_gJQ6zg3q3Uc8avyOq6w (channel ID `UCun_gJQ6zg3q3Uc8avyOq6w`)
- **Mandarin YouTube channel**: https://www.youtube.com/@WilliamTexasHomes (do not repurpose Mandarin content here — this site is English-only)
- **Tech stack**: Astro 6 + MDX, Tailwind 4, content collections in [src/content/blog/](../../../src/content/blog/)
- **Blog frontmatter schema**: defined in [src/content.config.ts](../../../src/content.config.ts)

## Input

A YouTube URL in any standard format (`watch?v=`, `youtu.be/`, `/embed/`). Optional: tags, target keyword, custom slug, linked neighborhood.

## Workflow

1. **Extract** — metadata (yt-dlp) + transcript (YouTube Data API preferred)
2. **Plan local SEO** — keyword, slug, Austin-specific angle
3. **Generate hero image** — Gemini API, warm editorial Austin real estate style
4. **Write the post** — draft MDX from transcript, grounded in Austin context
5. **SEO optimize** — invoke `marketing:draft-content` for polish
6. **Save and verify** — write to `src/content/blog/`, build to confirm

---

## Step 1: Extract video data

### 1a. Metadata (yt-dlp)

Use the shared script from the global skill install:

```bash
/Library/Frameworks/Python.framework/Versions/3.9/bin/python3 \
  ~/.claude/skills/youtube-to-blog/scripts/extract_video.py "YOUTUBE_URL"
```

Outputs JSON with `id`, `title`, `description`, `uploader`, `upload_date`, `duration`, `tags`, `thumbnail`. The script also attempts a fallback transcript via `youtube-transcript-api`, but that API rate-limits after ~10 calls — use the YouTube Data API for reliability.

### 1b. Transcript (YouTube Data API — primary)

For William's own videos on the English Austin channel, use the YouTube Data API v3 captions endpoint via the executive assistant workflow scripts. Authenticated channel-owner OAuth means no IP blocks, no PO Token issues.

**512 Austin Home English channel ID:** `UCun_gJQ6zg3q3Uc8avyOq6w`

**Single video:**

```bash
cd ~/Desktop/executive\ assistant\ workflow/.claude/skills/youtube-analytics/scripts && \
source .env && \
export YOUTUBE_API_KEY YOUTUBE_OAUTH_CLIENT_ID YOUTUBE_OAUTH_CLIENT_SECRET && \
source ~/.nvm/nvm.sh && nvm use 22 && \
npx tsx -e "
import { getTranscript } from './src/api/captions.js';
(async () => {
  const r = await getTranscript('VIDEO_ID');
  console.log(JSON.stringify(r));
})();
"
```

**Batch (multiple videos):**

```bash
cd ~/Desktop/executive\ assistant\ workflow/.claude/skills/youtube-analytics/scripts && \
source .env && \
export YOUTUBE_API_KEY YOUTUBE_OAUTH_CLIENT_ID YOUTUBE_OAUTH_CLIENT_SECRET && \
source ~/.nvm/nvm.sh && nvm use 22 && \
npx tsx src/batch-transcripts.ts \
  VIDEO_ID_1 VIDEO_ID_2 VIDEO_ID_3 ... \
  --output /tmp/transcripts.json
```

If the captions OAuth scope does not cover this newer channel yet, fall back to `youtube-transcript-api` via `extract_video.py` for one-off videos.

### 1c. Merge metadata + transcript

```python
import json
with open('/tmp/yt-extract.json') as f: data = json.load(f)
with open('/tmp/transcripts.json') as f: transcripts = json.load(f)
vid = data['id']
if vid in transcripts and transcripts[vid]['transcript']:
    data['transcript'] = transcripts[vid]['transcript']
    data['has_transcript'] = True
```

## Step 2: Plan local SEO

Identify:
- **Primary keyword** — the main Austin-real-estate search this post should rank for
- **Secondary keywords** (2-3 related terms)
- **Target slug** — kebab-case, max 6 words, keyword-rich
- **Linked neighborhood** — if the video covers a specific area, note the matching [src/content/neighborhoods/](../../../src/content/neighborhoods/) entry for cross-linking

### Keyword clusters this site targets

Local and buyer/seller intent — not national, not AI-for-agents:

- "moving to Austin TX" / "relocating to Austin"
- "best neighborhoods in Austin for [families / young professionals / retirees]"
- "Austin vs [Dallas / Houston / San Antonio]"
- "[Cedar Park / Round Rock / Leander / Pflugerville / Lakeway / Georgetown] real estate"
- "buying a home in Austin" / "first time home buyer Austin"
- "selling a home in Austin"
- "Austin housing market [year] forecast"
- "property taxes in Austin TX"
- "Austin school districts for home buyers" (Eanes, Lake Travis, Leander, Round Rock ISD, etc.)
- "new construction homes Austin"
- "Austin neighborhood comparison"

The primary keyword must appear in: title, URL slug, H1, first 100 words, and at least one H2. That is the Pareto SEO rule from [CLAUDE.md](../../../CLAUDE.md).

## Step 3: Generate hero image

Custom images outperform stock for SEO + engagement.

```bash
source ~/Desktop/executive\ assistant\ workflow/.claude/skills/thumbnail-generator/.env && \
export GEMINI_API_KEY && \
export SSL_CERT_FILE=$(/Library/Frameworks/Python.framework/Versions/3.9/bin/python3 -c "import certifi; print(certifi.where())" 2>/dev/null) && \
/Library/Frameworks/Python.framework/Versions/3.9/bin/python3 \
  ~/.claude/skills/youtube-to-blog/scripts/generate-hero-image.py \
  --prompt "DESCRIPTIVE PROMPT" \
  --output "src/assets/blog-images/SLUG.png"
```

**Prompt guidelines for Austin real estate hero images:**
- Describe an Austin-flavored scene when possible (hill country light, Texas live oaks, limestone and stucco homes, downtown skyline from South Congress, Lady Bird Lake, etc.) — but keep it editorial, not touristy
- Warm, natural, editorial real estate photography
- No text, no faces, no logos, no UI elements, no agent-in-frame
- Clean composition, shallow depth of field, golden-hour or soft daylight
- 16:9 aspect ratio for blog + social sharing

Save to [src/assets/blog-images/](../../../src/assets/blog-images/). Create the directory if it does not exist yet.

**Fallback (stock):**
```bash
/Library/Frameworks/Python.framework/Versions/3.9/bin/python3 \
  ~/.claude/skills/youtube-to-blog/scripts/fetch-hero-image.py \
  --queries "austin texas home, hill country house, texas neighborhood" \
  --output-dir "src/assets/blog-images/" \
  --per-query 2 --source unsplash
```

Use broad search terms — Unsplash handles single-concept queries better than compound ones.

## Step 4: Write the blog post

### Frontmatter (must match [src/content.config.ts](../../../src/content.config.ts))

```yaml
---
title: "Post Title — Include Primary Keyword"
description: "Meta description, max 155 chars, includes primary keyword, complete sentence"
pubDate: YYYY-MM-DD
tags: ["Austin Real Estate", "Buying", "Neighborhoods"]
youtubeId: "VIDEO_ID_HERE"
heroImage: "../../assets/blog-images/SLUG.png"
neighborhood: "cedar-park"   # optional — slug of a matching neighborhood entry
---
```

Fields available: `title`, `description`, `pubDate`, `updatedDate?`, `heroImage?`, `youtubeId?`, `tags`, `neighborhood?`, `canonical?`. The `youtubeId` field triggers automatic video embedding via [src/components/YouTubeEmbed.astro](../../../src/components/YouTubeEmbed.astro) — do not write iframe code.

### Content structure

**Opening (250-400 words, before the video):**
- Hook with a specific Austin market reality, neighborhood comparison, or buyer/seller problem from the video
- Establish credibility — William Zhang, practicing agent in Austin TX, eXp Realty, TREC #811948
- Preview what the reader will learn
- Primary keyword in the first 100 words
- The YouTube video auto-embeds after this intro

**Body (900-2,000 words, after the video):**
- H2/H3 headings with keywords woven in naturally
- Specific data: MLS medians, price ranges, days on market, school district ratings, property tax rates, HOA context
- Name real neighborhoods, ZIPs, and school districts (Eanes ISD, Lake Travis ISD, Leander ISD, Round Rock ISD, Austin ISD, Dripping Springs ISD)
- Comparison format where relevant (Austin vs X, neighborhood A vs neighborhood B)
- Pull quotes from the transcript when they add credibility
- At least one FAQ-style H2 with natural question phrasing — these get cited by LLMs

**Internal links (weave naturally, not clustered):**
- `/neighborhoods/` and specific neighborhood pages when mentioning areas
- `/buy` when discussing the buying process
- `/sell` when discussing listing or selling
- Other `/blog/` posts when topically related
- `/about` when referencing credentials or background
- `https://lifeinaustintx.com` for actual property search — never replicate IDX on this site

**FAQ section (recommended near the end):**
2-5 natural question/answer pairs. The FAQPage schema is already wired up elsewhere on service pages; for blog posts the Q&A format alone still helps LLM citation and featured snippets.

**Closing:**
- One-sentence key takeaway
- CTA: contact via `/about` or browse `/neighborhoods/` — no hard sell

### Voice and tone

- Write as a practicing Austin agent sharing market reality — first person where natural
- Direct and practical, grounded in local specifics (actual neighborhoods, schools, price points)
- No hype, no national generalizations, no clichés about "hot markets"
- Assume the reader is a prospective buyer, seller, or relocator — not an agent, not a tech person

### Banned patterns (make content sound AI-generated)

- "In this article, we will..."
- "Let's dive into..." / "Let's explore..."
- "In today's fast-paced..."
- "Whether you're a... or a..."
- "It's important to note that..."
- "In conclusion..."
- "Game-changer", "revolutionary", "cutting-edge", "landscape"
- Emoji anywhere in the post (see [CLAUDE.md](../../../CLAUDE.md) — no emojis)
- Rhetorical questions as section openers
- "X, Y, and Z" triplet lists repeated paragraph after paragraph
- Generic "the Austin market is booming" filler with no numbers

### Good patterns

- Start sections with a direct statement or observation
- "Here is what actually happens when you submit an offer in Northwest Hills right now..."
- "I walked three buyers through Cedar Park last month..."
- "The short answer is..."
- "This matters because property taxes in Travis County..."
- Reference specific listings, showings, inspection findings, CMAs

## Step 5: SEO optimization via draft-content

After writing the draft, invoke `marketing:draft-content` to optimize. Do not skip or wait to be asked.

```
/draft-content Optimize this blog post for local SEO. The site is 512austinhome.com,
targeting Austin, TX homebuyers and sellers. Primary keyword: "[KEYWORD]".
Secondary: "[KW2]", "[KW3]". Draft is at [FILE_PATH]. Give me SEO
recommendations, headline options, and meta description options.
Tone: direct, practical, written by a practicing Austin agent, not a marketer.
No emojis. Must reference specific neighborhoods, schools, or price data.
```

Apply recommendations:
- Update title if a better keyword-optimized option is suggested
- Tighten meta description to under 155 characters
- Adjust H2 headings to include secondary keywords where natural
- Add the primary keyword to the first 100 words if missing
- Add any missing internal links (neighborhoods, buy, sell, related blog posts)

## Step 6: Save and verify

Save to `src/content/blog/{slug}.md` (or `.mdx` if the post uses MDX components like `<YouTubeEmbed />` directly — usually not needed because `youtubeId` frontmatter handles embedding).

Build to verify:
```bash
source ~/.nvm/nvm.sh && nvm use 22 && npm run build
```

Note: this project requires Node 22+ per [package.json](../../../package.json). If the active shell is on an older Node, switch via nvm before building.

After saving, tell the user:
- The file path
- The URL it will serve at (`/blog/{slug}/`)
- Whether a `neighborhood` cross-link was added
- Reminder to commit and push when ready

---

## Batch processing

For multiple videos at once:

1. **List channel videos** via yt-dlp:
   ```bash
   /Library/Frameworks/Python.framework/Versions/3.9/bin/python3 -c "
   import yt_dlp
   opts = {'quiet': True, 'no_warnings': True, 'extract_flat': True, 'playlistend': 50}
   with yt_dlp.YoutubeDL(opts) as ydl:
       info = ydl.extract_info('https://www.youtube.com/channel/UCun_gJQ6zg3q3Uc8avyOq6w/videos', download=False)
       for e in info.get('entries', []):
           print(f\"{e['id']} | {e.get('title','')}\")" 2>/dev/null
   ```

2. **Batch download transcripts** via YouTube Data API
3. **Extract metadata** per video
4. **Merge transcripts** into metadata JSON
5. **Generate hero images** sequentially via Gemini (use **Haiku** subagent — mechanical script running)
6. **Write posts in parallel** via subagents (use **Sonnet** — good quality, lower token cost than Opus)
7. **Build to verify** all posts compile

### Token cost optimization

Mechanical tasks (scripts, images, merges, builds) → **Haiku** agents. Creative tasks (writing posts) → **Sonnet** agents. Reserve **Opus** for high-priority posts needing extra polish.

---

## Scripts reference (shared with global install)

```
~/.claude/skills/youtube-to-blog/scripts/
├── extract_video.py         # yt-dlp metadata + youtube-transcript-api fallback
├── fetch-hero-image.py      # Unsplash/Pexels stock fallback
└── generate-hero-image.py   # Gemini API image generation (preferred)

EA workflow (primary transcript source via YouTube Data API):
~/Desktop/executive assistant workflow/.claude/skills/youtube-analytics/scripts/
├── src/api/captions.ts        # listCaptions(), downloadCaption(), getTranscript()
├── src/batch-transcripts.ts   # Batch transcript downloader
├── tokens/                    # OAuth tokens (youtube.force-ssl scope)
└── .env                       # API keys and OAuth credentials
```

## Example output

For a video titled "Is Cedar Park Worth It in 2026? Real Numbers from an Austin Agent":

```markdown
---
title: "Cedar Park Real Estate in 2026: What Austin Buyers Actually Pay"
description: "Current Cedar Park home prices, school ratings, and commute trade-offs from a practicing Austin real estate agent. Real MLS data, no hype."
pubDate: 2026-04-13
tags: ["Cedar Park", "Austin Suburbs", "Buying"]
youtubeId: "abc123xyz"
heroImage: "../../assets/blog-images/cedar-park-2026.png"
neighborhood: "cedar-park"
---

Cedar Park went from "quiet Austin suburb" to one of the most searched
ZIP codes in the metro in about five years. Median prices in 78613 now
sit around [$X], which is roughly [Y%] below comparable central Austin
neighborhoods with similar square footage and school ratings.

I show homes in Cedar Park almost every week. Here is what buyers are
actually getting right now, what they are paying, and where the real
trade-offs are hiding.

## Cedar Park Median Price and Inventory Today
...

## Leander ISD vs Round Rock ISD — Which Part of Cedar Park You Want
...

## Commute Reality from Cedar Park to Downtown Austin
...

## Is Cedar Park a Better Value Than Round Rock Right Now?
...

## Frequently Asked Questions About Buying in Cedar Park
...

If you are comparing Cedar Park to other Austin suburbs, the
[Cedar Park neighborhood guide](/neighborhoods/cedar-park/) has current
price ranges and school details. When you are ready to tour homes,
[reach out directly](/about) — I can pull active listings that match
what you are looking for.
```
