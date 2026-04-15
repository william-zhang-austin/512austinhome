---
name: blog-hero-generator
description: Generate photorealistic editorial-style hero images for 512austinhome.com blog posts using the Gemini image API, then wire them into frontmatter. Use this skill whenever a blog post in src/content/blog/*.mdx is missing a heroImage, when the user asks to create/generate/add a hero image for a blog post, when auditing blog posts for OG image coverage, or when the user mentions blog hero images, OG fallback, or social card previews. Also trigger when writing a new blog post that needs a custom scene image, or when replacing a stock/generic hero with something purpose-built. Scene-only — no faces, no text, no logos.
---

# Blog Hero Generator (512 Austin Home)

Generate custom hero images for blog posts on 512austinhome.com and wire them into frontmatter. Scene-only, photorealistic, editorial — matching the existing aesthetic in [src/assets/blog-images/](../../../src/assets/blog-images/).

Custom heroes beat stock for SEO, click-through, and social card quality. Generic fallbacks to `og-default.jpg` waste a social-share opportunity on every post that lacks a unique hero.

## When to use this skill

- A blog post's frontmatter has no `heroImage` field (falls back to og-default)
- User says "generate a hero image for [post]", "the blog post needs a hero", "add OG images"
- Auditing blog OG coverage and finding gaps
- Writing a brand-new post that doesn't have a matching image yet

## Project context

- **Site**: 512austinhome.com — William Zhang's English Austin, TX real estate site
- **Blog collection**: [src/content/blog/](../../../src/content/blog/) (.mdx files)
- **Image directory**: [src/assets/blog-images/](../../../src/assets/blog-images/)
- **Frontmatter schema**: [src/content.config.ts](../../../src/content.config.ts) — `heroImage` is `z.optional(image())`, path relative from the .mdx file
- **Frontmatter reference path**: `../../assets/blog-images/SLUG.png`
- **Astro image pipeline**: Sharp processes PNG/JPG at build → optimized WebP variants. Source 1–2MB is fine.

## Aesthetic (match existing blog-images/)

Study 2–3 existing files in [src/assets/blog-images/](../../../src/assets/blog-images/) before writing prompts. The established look is:

- **Photorealistic editorial** — like a high-end magazine feature, not stock photography
- **Golden hour or soft daylight** — warm, natural, Texas hill country light
- **Austin-flavored scenery** — suburban streets, master-planned communities, limestone + stucco homes, Texas live oaks, downtown skyline, Lady Bird Lake, hill country backdrops
- **16:9 aspect ratio** — blog hero + OG social card
- **No people's faces front-and-center**, no text, no watermarks, no logos, no UI elements
- **Shallow depth of field** where it helps, clean composition, one clear focal point

The prompt should describe a **scene**, not a concept. "A master-planned community in Leander at golden hour, modern transitional homes, wide suburban street" beats "a picture about new construction."

## Workflow

### 1. Identify the target post(s)

Find blog post(s) missing `heroImage`:

```
grep -L "^heroImage:" src/content/blog/*.mdx
```

Or use [Grep](../../../) tool with pattern `^heroImage:` and output `files_with_matches`, then diff against [Glob](../../../) of `src/content/blog/*.mdx`.

### 2. Write a scene-specific prompt

Read the post's title, description, and opening paragraphs. Translate the topic into a concrete Austin scene. Examples:

| Post topic | Prompt scene |
|---|---|
| Moving from California to Austin | Moving truck with California plates in front of a modern Austin home at golden hour, Texas flag visible, palm transitioning to Texas oak |
| New construction guide | Row of brand-new master-planned community homes in Leander, modern transitional architecture, wide suburban street, golden hour, elevated angle |
| Neighborhoods near Apple office | Modern Domain-area Austin office campus with residential neighborhood in foreground, late afternoon light |
| School districts guide | Texas elementary school building with playground, live oak trees, sunset warm light |
| Property tax explainer | Close-up of a Texas home's stone facade with "for sale" sign blurred in background, golden hour, editorial depth of field |

Avoid: concept art, infographic-style layouts, text overlays, people, cartoon rendering, generic stock-photo feel.

### 3. Generate the image

The generator script already exists at `~/.claude/skills/youtube-to-blog/scripts/generate-hero-image.py`. It auto-loads the Gemini API key from the EA workflow .env file — no env wrangling needed.

```bash
python3 ~/.claude/skills/youtube-to-blog/scripts/generate-hero-image.py \
  --prompt "YOUR SCENE PROMPT" \
  --output "src/assets/blog-images/POST-SLUG.png"
```

Use the **post slug** as the filename (e.g. `moving-from-california-to-austin.png`). The slug should match the .mdx filename so the mapping is obvious.

If the script reports an SSL error, prepend the cert file:

```bash
SSL_CERT_FILE=$(python3 -c "import certifi; print(certifi.where())") \
python3 ~/.claude/skills/youtube-to-blog/scripts/generate-hero-image.py ...
```

### 4. Preview the output

Read the generated PNG with the [Read](../../../) tool so you can see it inline. Verify:

- Photorealistic, not illustrated/cartoon/AI-looking
- No readable text, no faces, no watermarks
- Composition matches the prompt's intent
- Feels consistent with neighboring files in [src/assets/blog-images/](../../../src/assets/blog-images/)

If any check fails, regenerate with a more specific prompt (describe lighting, camera angle, specific landmarks). Two generations at most — if scene direction isn't landing, the prompt needs more concrete Austin anchors, not more retries.

### 5. Wire into frontmatter

Edit the blog post's .mdx file and add the `heroImage` line to the frontmatter. Place it right after `pubDate:` for consistency with other posts:

```yaml
---
title: "..."
description: "..."
pubDate: 2026-04-13
heroImage: ../../assets/blog-images/POST-SLUG.png
tags: [...]
---
```

The path is **relative from the .mdx file**, which is why it's `../../assets/blog-images/` from `src/content/blog/`. Quotes are optional in YAML but other posts in this project tend to use them — match the surrounding style.

### 6. Verify the build

Run an Astro build to confirm the image resolves and the Sharp pipeline optimizes it:

```bash
export PATH="$HOME/.nvm/versions/node/v22.22.2/bin:$PATH"
npx astro build 2>&1 | tail -15
```

Look for a line like `/_astro/POST-SLUG.HASH_XYZ.webp (before: 917kB, after: 45kB)` — that's confirmation the image entered the pipeline. The build must complete without errors.

Node must be 22+. If the system default is Node 20, use the PATH export above (the project's `.nvm` config usually has a compatible version installed).

## Batch mode

When multiple posts need heroes at once (e.g., after an OG audit):

1. List all missing posts via the grep in step 1
2. Generate all prompts up front, review them as a batch before launching the API calls
3. Run generations sequentially (the Gemini image API can be rate-limited; parallel calls aren't worth the risk of a mid-batch failure)
4. Do a single build at the end to verify all images resolve

Sequential is intentional here — image gen is cheap in wall-clock terms and the failure mode of "half your batch failed silently because of a rate limit" is worse than waiting 30 extra seconds.

## Pitfalls

- **Don't generate an image for a post that already has one** unless the user explicitly asks to replace it. Check `heroImage:` before running the script.
- **Don't save images with marketing-speak filenames** (`best-austin-post-ever.png`). Use the post slug so the mapping is traceable.
- **Don't use the thumbnail-generator skill** in the EA workflow folder for blog heroes — it's tuned for YouTube thumbnails (William's face + Chinese text overlays) and produces a different aesthetic.
- **Don't commit the .env file** from the EA workflow folder. The script reads it in place; never copy the key into this project.
- **If the generated image has text artifacts** (Gemini sometimes hallucinates signage or captions), regenerate with "absolutely no text, no signs, no readable characters anywhere in the frame" appended to the prompt.