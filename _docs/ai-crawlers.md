# Controlling AI / LLM crawler access

How AI/LLM crawler access to the site is controlled, and where the real enforcement lives.
Operational note — read on demand (not @imported into the build briefing).

## Two layers (the signal vs. the enforcement)

**Layer 1 — the advisory signal (this repo).** `robots.txt` and `llms.txt` tell well-behaved
crawlers what they may do. Driven by two switches in `_data/global.yml`:

- **`allowLLM`** — when `false`, `robots.txt` adds `Disallow: /` rules for the named AI
  user-agents (GPTBot, OAI-SearchBot, ClaudeBot, Google-Extended, PerplexityBot) and `llms.txt`
  becomes a short "not permitted" notice. When `true` (current posture), AI crawlers are allowed
  and `llms.txt` carries the normal content.
- **`siteIsIndexable`** — when `false` (the testing deploy), `robots.txt` is `Disallow: /` for
  *all* bots, so AI access is blocked regardless of `allowLLM`, and `llms.txt` is a "not permitted"
  notice. (So `allowLLM` only has a visible effect on a live, indexable deploy.)

**Layer 2 — the enforcement (Cloudflare dashboard).** `robots.txt` is advisory only: well-behaved
crawlers honor it, but many AI scrapers ignore it entirely. The actual block — returning a 403 to
crawlers that don't respect the file — is configured at Cloudflare, at the edge, in front of the
origin. **If J&R ever wants to genuinely stop AI crawling, flipping `allowLLM` is not enough; the
Cloudflare control is what enforces it.**

## Current posture

ALLOW (deliberate). Per canon (`company-facts` "AI discoverability"; flagged-item `ai-crawlers`),
J&R intentionally permits AI scraping + training of the public brochure content, Cloudflare's
"LLM scraping + training" is enabled, and `robots.txt` allows the named AI agents. So
`allowLLM: true` and no Cloudflare AI block is active. Revisit per-asset if licensed premium media
(e.g. Getty/iStock) is ever added — those licenses typically forbid exposing the asset to
AI-training crawlers (canon `ai-crawlers`).

## How to restrict AI crawlers at Cloudflare (when/if the posture changes)

Captured-as-of 2026-06-22; re-verify at reliance (Cloudflare renames these features periodically).

- **One-click "Block AI bots"** — Cloudflare dashboard → Security settings → filter by Bot traffic →
  "Block AI bots" (block on all pages, only ad-bearing pages, or allow). A managed rule that blocks
  known AI crawlers at the edge.
  Docs: <https://developers.cloudflare.com/bots/additional-configurations/block-ai-bots/>
- **AI Crawl Control** (per-crawler allow / charge / block, with visibility into which AI services
  are hitting the site) — dashboard → select account + domain → AI Crawl Control → Crawlers tab.
  Docs: <https://developers.cloudflare.com/ai-crawl-control/> ·
  <https://developers.cloudflare.com/ai-crawl-control/features/manage-ai-crawlers/>
- Background / learning center: <https://www.cloudflare.com/learning/ai/how-to-block-ai-crawlers/>

Keep the two layers in sync: if AI is blocked at Cloudflare, also set `allowLLM: false` here so the
advisory signal and the enforcement agree (and the Privacy/posture copy stays accurate).
