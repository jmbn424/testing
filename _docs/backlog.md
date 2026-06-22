# Site Backlog — incremental tweaks

Working backlog for the J&R Jekyll site: tiny, PR-style changes reviewed one at a time. This is
the source of truth for build/site priorities. (Companion to `canon.md`, which governs
compliance and content decisions; this list is the engineering task queue.)

**Context.** The legal/compliance corpus was built first; the site is functional but barebones
and heads toward an FMO sanity-check, then counsel, then a soft launch (~June 30, a soft target).
The one hard date is the 2026-10-01 SHIP disclaimer swap.

## Working method
- Claude commits to a `claude-`-prefixed feature branch (never `main`); Aaron may use `aaron-`.
- One focused commit per change; `bundle exec jekyll build` + spot-check before each commit.
- Aaron reviews the branch and merges to `main` when ready.
- Aaron always handles `git push` (and the deploy it triggers); Claude never pushes.
- Context/canon docs are edited directly here now (the Validator/Integrator role threads are retired for this phase, per v2-design); tiered ceremony — light rev notes, no per-rev hash ritual.
- **No Jekyll plugins beyond what GitHub Pages safe-mode supports, until well after launch** (Aaron, 2026-06-22). The testing site runs on GitHub Pages, so stay portable: build features in core Liquid/`_data` only — no `_plugins/`. (Cloudflare Pages *would* allow custom plugins, but we're not relying on that yet.) This is why, e.g., the `/credits` "auto-attribution" is a `_data` registry, not a generator-plugin scan.

## Done (merged to `main`)
- **A1** — SMS opt-in off (`SMSProgramIsLive: false`) — `0c22e35`
- **A2** — strip internal review annotations from the Services page — `2d141cb`
- **B1** — single-source all site URLs from `_data/global.yml` `url` (canonical / og / JSON-LD /
  links / sitemap / robots / llms); launch is now a one-line `url` flip — `e1ba9ae`
- **B2** — remove the orphaned per-page `canonicalSlug` front matter — `f27b5dd`
- **basePath → `/`** (root-relative, for the custom-domain root host) — by Aaron
- **backlog** — this file added to the repo — `efac0f9`
- **C6b** — internal links root-relative (`./x → /x`) — `c6a8d88`
- **C7** — data-drive footer social links from `publishedSocialProfiles`; gate SVG symbols — `ce533af`
- **C8** — remove dead `_data/pages/*` scaffolding (286 lines) — `13feb3c`
- **C9** — remove dormant `compress.html` layout — `217b4dd`
- **6b** — per-route `WebPage` JSON-LD node (`@id`/`url`/`name`/`description` per page, `@type`
  override, `dateModified`) — `30b4b5e`
- **JSON-LD single-source** — `sameAs` ← `publishedSocialProfiles`, `areaServed` ← `licensedStates`
  × new `_data/reference.yml` (filtered subset of `tpmo-jurisdictions.md`) — `cab7955`
- **F1 — CHD reference engine** — data-driven `sections` engine; CHD ported as the reference — `2b64875` (+ `siteData` `8bed0c2`)
- **G — architecture-doc reconciliation** — `hosting-decisions.md` deferred to reference + canon — `ae22533`
- **FMO-prep** — single-sourced legal dates (`legalDocsDate` 2026-06-30); cleaned internal change-log lingo; `{# gate #}` jurisdiction/switch gate for `document:` pages + CA/NV hidden on Medicare 101; Accessibility language softened (canon 5.9) + self-URL de-hardcoded; SoT registry + Canon↔code divergence log in `content.md` — `92d3146`·`3ddde20`·`b698770`·`0f707de`
- **Marketing build** — engine generalized (`legal.html`→`sections.html` + `heroSize`); reusable gated Carriers/Reviews module includes + `carrierLogosShown`/`testimonialsShown` switches; Home/Services/About/Contact bodies; `<!-- accordion -->` flag convention + applied (Medicare 101, Services) — `a4778ac`·`3989c8f`
- **Track F step 2 + licensed-states** (branch `claude-track-f-ship-and-ports`, merged + pushed) —
  SHIP swap wired as the `shipInTPMODisclaimer` switch (`3ca68a1`, store-both-versions + one-line flip);
  Privacy/Terms/Accessibility ported onto the `sections` engine (`c871d40`·`eb8f68e`·`21e37bd`);
  licensed-states single-sourced via the `${licensedStates}` token in canonical display order
  WA,OR,CA,NV,GA,TN (`eec11ae`). All four legal pages now render through the engine. (Divergence-log
  notes in `content.md` for the SHIP mechanism + the licensed-states order.)
- **Track E — deploy-exposure + AI-crawler switches** (branch `claude-track-e-index-llm-switches`, merged
  + pushed) — `siteIsIndexable` (false on testing → site-wide `<meta robots noindex,nofollow>`, no
  canonical, robots.txt `Disallow: /`, empty sitemap.xml), `showStructuredData` (JSON-LD),
  `includeSocialShareMeta` (og/Twitter), independent (replaced `isProduction`) so testing can be noindex
  while still emitting testable cards/JSON-LD (`9f3a0d3`); `allowLLM` switch drives the AI-crawler rules in
  robots.txt + llms.txt, with `_docs/ai-crawlers.md` documenting advisory-here vs. enforcement-at-Cloudflare
  (`28c7f8f`). Switchboard now: `SMSProgramIsLive`, `sharesCHDWithBrokers`, `carrierLogosShown`,
  `testimonialsShown`, `shipInTPMODisclaimer`, `siteIsIndexable`, `showStructuredData`,
  `includeSocialShareMeta`, `allowLLM`. **Launch flip is two lines: `url` → prod and `siteIsIndexable` → true.**
- **Track F loose-thread — contact-form copy → data** (branch `claude-form-copy-to-data`, merged) — moved the
  lead form's consent intro, clickwrap, SMS opt-in, and solicitation copy out of `form.liquid` into a
  `contactForm:` namespace in `_data/global.yml`; render byte-identical (`39dfe1a`).
- **DRY sections migration** (merged) — the last `document:` pages (credits/sitemap/services/medicare-101)
  moved onto the `sections` engine; `default.html`'s `{% if page.document %}` block deleted, so gating +
  `${tokens}` live in one place and `{# gate #}` is retired (`d37e154`).
- **Partner-questions + security docs** (merged) — `_docs/partner-questions.md` (FMO/Intulse/J&R/AgencyBloc/
  Google/Cloudflare question synthesis + high-leverage closers + verification plan) and
  `_docs/security-practices.md` (`dfb7d14`·`db66589`).
- **Jurisdictions / redirects / sprite / credits** (merge `9099f57`; all plugin-free) — every state a
  first-class `jurisdictions` on/off toggle (`4eaed2f`); `_redirects` path aliases + `_config include:`
  (`d47f204`); reference-driven SVG sprite (`cb4f98d`); data-driven `/credits` + Inter credit (`6a70d92`).
- ✅ **Everything above is merged to `main` and pushed.**

## Next (for a fresh session — start here)
Everything above is merged + pushed; the site is FMO-review-ready (clean build, no internal syntax rendered,
legal dates single-sourced to 2026-06-30, CA/NV jurisdiction-gated). **Apply the
[Tone of Voice Guide](content/tone-of-voice.md) to every copy task below** (warm, plain-spoken, honest,
steady; written for a 65+ Medicare audience). Highest-value work, roughly in order:

1. **Capture FMO + Intulse redlines** — they're reviewing within ~48h of 2026-06-22; counsel later that week
   / early the next. Drive the conversations from [`partner-questions.md`](partner-questions.md) (open
   questions by partner + the high-leverage "answer these first" list); log any canon-relevant change in
   `content.md`'s Canon↔code divergence log.
2. **Launch mechanics — needs an Aaron decision before building** (the real remaining launch blocker): the
   host cutover (GitHub Pages testing → Cloudflare Pages prod), a `_headers` file (CSP that allows the
   AgencyBloc form-action; HSTS; nosniff; Referrer-Policy — and add it to `_config.yml include:` like
   `_redirects`), the repo `CNAME` disposition (GitHub-Pages-specific; CF Pages sets the domain in-dashboard),
   and the two-line launch flip: `url` → `https://jrhealthins.org/` **and** `siteIsIndexable` → true.
   (`_redirects` is already built, inert until on CF Pages.) Detail in `partner-questions.md` §6 + `cloudflare.md`.
3. **Resolve the surfaced flags** (all in `content.md` divergence log), in the tone-guide voice: the Home hero
   "ACA Marketplace plans" vs the IFP-dark posture (FMO/counsel call); team bios (photos already at
   `assets/images/team/`); Vetecare/Advocate veterans referral + Veterans D2 wording (counsel 3.1); flip
   `carrierLogosShown` once FMO approves a logo list (`_data/lists/logos.yml`); flip `testimonialsShown` once
   curated reviews + the counsel FTC pass land (data ready in `_data/lists/testimonials.yml`).
4. **Plugin-free quick wins, available now** (no review needed): flesh out `llms.txt` (feature Medicare 101 /
   Services / etc.); add the `company-contact-info` include to `/contact`. (Both detailed in Tracked items.)

## Key references (orientation for a fresh session)
- [`_docs/partner-questions.md`](partner-questions.md) — open questions grouped by partner (J&R / FMO /
  Intulse / AgencyBloc / Google / Cloudflare) + high-leverage closers + the call-source-vs-FMO-vs-counsel
  verification plan. Drives the imminent reviews.
- [`_docs/security-practices.md`](security-practices.md) — plain-language cybersecurity guide for the J&R team.
- [`_docs/content/tone-of-voice.md`](content/tone-of-voice.md) — the voice for ALL client-facing copy.
- `_context/architecture/content.md` — the Source-of-truth registry (per-page authority) + the Canon↔code
  divergence log (where code leads canon — read before touching legal pages).
- `_context/architecture/stem-cell/` — "Stem Cell," a separate token-driven, WCAG-AAA-out-of-the-box
  front-end framework (the v2 reusable foundation; pre-alpha; **NOT** a J&R-launch item).
- **Standing constraint:** no Jekyll plugins beyond GitHub Pages safe-mode until well after launch (see
  Working method; also saved to memory).

## Tracked items + smaller ideas (raised 2026-06-22; most post-review)
- **llms.txt — flesh out** (proposed, quick win, no legal content). Today it emits only company name +
  description + the Home link. Build it into a real llmstxt.org-style index: feature Medicare 101, Services,
  About, Contact, and the legal pages with one-line descriptions, still gated behind `siteIsIndexable && allowLLM`.
- **Legal-page "Change log" heading → "Version History"** (track only; do NOT edit legal copy pre-review).
  Aaron prefers "Version History"; entries stay formatted as a log for now. Batch with the other legal redlines
  after FMO/counsel — avoid piecemeal edits to reviewed legal pages.
- **SHIP switch post-2026-10-01 cleanup** (after the dated swap). `shipInTPMODisclaimer` + the SHIP `disclaimer`
  + the Terms §14 SHIP gate become permanent dead weight once SHIP drops on 2026-10-01. KEEP the switch through
  the swap (safest way to hit the one hard compliance date — one-line flip, no prose surgery, no
  dangling-conjunction risk). Then a one-time cleanup PR: rename `disclaimerPostSHIP` → `disclaimer`, delete the
  old SHIP `disclaimer` + the `shipInTPMODisclaimer` switch, drop the Terms §14 `when:` gate (post-SHIP becomes
  unconditional). Calendar early October 2026.
- **`/_pages` folder reorg** (idea; defer to post-launch). Possible via a Jekyll collection (`_pages` with
  `output: true` + matching `permalink:` so every URL stays byte-identical), but it touches permalink/URL
  mechanics — too launch-sensitive to do right before review. Revisit after launch; verify every URL unchanged.
- **Contact-info block on `/contact`** (proposed). Reuse the existing `company-contact-info` include (already
  shared by the legal pages) to show full contact details on the contact page. Additive, not a legal edit.
  Recommend leaving the legal pages' embedded contact block as-is — it's deliberate (in-document contact method
  for rights/accessibility requests; a "see footer" reference is layout-fragile + a minor compliance step-back).
- **Testimonials + carriers module wiring** (gated; FMO marketing review + counsel FTC pass first).
  `_data/lists/testimonials.yml` holds 7 organic 5-star reviews (last names already obfuscated);
  `testimonials.liquid` shows only an honest word-of-mouth blurb today and does NOT yet consume the data file.
  When `testimonialsShown` flips ON, wire it to render the curated set per canon `testimonials-display`
  (exclude/disclose the 2 developer-authored reviews, "results vary" framing, static — no live widget). Same
  shape for `carrierLogosShown` + `_data/lists/logos.yml`.
- ✅ **All jurisdictions as first-class on/off toggles** — DONE (`4eaed2f`, this session). `licensedStates`
  array → an ordered `jurisdictions` boolean map; the gate / prose token / JSON-LD areaServed consumers
  derive the active set. Byte-identical with the current active set; CA/NV flip true renders them in order.
- ✅ **Redirects** — DONE (`d47f204`, this session). `_redirects` (/about-us, /contact-us, /tos + /terms-*
  → canonical, 301) + wired into `_config.yml include:`. Inert on the GitHub-Pages testing host, live on
  Cloudflare Pages.
- ✅ **"Subscribing to an asset"** — DONE plugin-free (this session). (b) the **per-page SVG sprite** is now
  reference-driven (`cb4f98d` — a `<symbol>` ships only if its `#id` is `<use>`-referenced on the page);
  (a) **`/credits` attributions** render from `_data/lists/credits.yml` (`6a70d92`) — add a registry entry
  when an attribution-required asset is used and it appears automatically. The fully-automatic
  "scan-all-rendered-pages-for-usage" version would need a Jekyll generator plugin and is **deferred** (no
  plugins until well after launch — see Working method); the registry entry is the subscription for now.

## Maintenance & reference notes
- **Bump the copyright year — force a rebuild each Jan 1.** The footer year is dynamic
  (`{{ site.time | date: "%Y" }}` in `footer.liquid`), but the site is static, so the year only updates when
  a build runs. On/around Jan 1, trigger a Cloudflare Pages rebuild (an empty commit or a dashboard
  "Retry deployment") so the footer rolls over. No code change needed — just the rebuild.
- **Body font = Inter** (open-source, SIL OFL), self-hosted woff2. Source: <https://github.com/rsms/inter>.
  Now credited on the public `/credits` page (via `_data/lists/credits.yml` → `sections/credits.liquid`).
- **New docs this session:** `_docs/partner-questions.md` (partner/verification question synthesis) and
  `_docs/security-practices.md` (plain-language cybersecurity guide for the J&R team).

## Bigger tracks (not "tiny")
- **D — content. (first pass DONE 2026-06-22, `3989c8f`.)** Home/Services/About bodies fleshed from the
  placeholder + a Contact intro; Medicare 101 already had content. Conservative, Medicare-forward, no
  marketing of the dark IFP/ACA line. Remaining (all gated/flagged in `content.md`): team bios, Individual
  & Family detail, Vetecare/Advocate veterans referral, carrier logos + testimonials. FMO owns final voice.
- **E — launch config.** **Indexing/exposure controls DONE 2026-06-22** (`9f3a0d3`·`28c7f8f`): the
  `siteIsIndexable` / `showStructuredData` / `includeSocialShareMeta` / `allowLLM` switches now keep the
  testing deploy out of search (noindex + `Disallow: /` + empty sitemap) while leaving social cards +
  structured data testable, and gate AI-crawler signals (robots.txt + llms.txt; enforcement at Cloudflare
  per `_docs/ai-crawlers.md`). Remaining: flip `url` to production (`https://jrhealthins.org/`) **and**
  `siteIsIndexable` → true at launch; prod CNAME. When adding a `_headers`/`_redirects`
  file, also add them to `include:` in `_config.yml` — Jekyll auto-excludes underscore-prefixed files, so
  otherwise the security headers silently never deploy (verified — `hosting-reference.md` §11.1 / §11.6).
- **F — content/data reconciliation (the active spine; contains D).** Make the code the source of
  truth by moving all content into data and rendering it through a content-agnostic engine. Full
  design + decisions: [`_context/architecture/content.md`](../_context/architecture/content.md). **Status
  (2026-06-22; steps 1–3 on `main`+unpushed, step 2 on branch `claude-track-f-ship-and-ports`
  pending merge):** sequence steps **(1)** CHD reference engine, **(2)** legal-page ports + SHIP dated
  swap, and **(3)** marketing bodies are all DONE; **(4)/(5)** deferred. Per-page authority, the
  Canon↔code divergence log, and the `<!-- accordion -->` convention all live in the **Source-of-truth
  registry** in [`content.md`](../_context/architecture/content.md) — the single home, not duplicated here.

  Sequence (✅ done): **(0)** ✅ source-of-truth map → **(1)** ✅ CHD reference impl of the engine (now the
  `sections` layout, `company-contact-info` include, `when` gates, `${tokens}`, front-matter-only page,
  dated fields) → **(2)** ✅ ported Privacy/Terms/Accessibility onto the `sections` engine + wired the
  `shipInTPMODisclaimer` dated SHIP swap (one-line flip; the one hard date, 2026-10-01) →
  **(3)** ✅ marketing pages from the placeholder outline (track **D**, data-driven) →
  **(4)** update canon where code leads (per the divergence log) → **(5, deferred)** split canon into files.

  Findings (updated 2026-06-22): ✅ CA/NV now **suppressed via jurisdiction gates** (not deleted) on CHD +
  Medicare 101; ✅ the **jurisdiction control + 5 switches** are wired (`SMSProgramIsLive`,
  `sharesCHDWithBrokers`, `carrierLogosShown`, `testimonialsShown`, `shipInTPMODisclaimer`); ✅ **SHIP now
  has its dated mechanism** (the `shipInTPMODisclaimer` switch — flip `true → false` on 2026-10-01); ✅ all
  four legal pages render through the engine, with contact blocks on the `company-contact-info` include and
  email/phone on `${email}`/`${phone}` tokens; ✅ the **licensed-states list is single-sourced** via the
  `${licensedStates}` token (canonical display order WA, OR, CA, NV, GA, TN); ✅ the **contact-form consent
  + solicitation copy is now in `_data`** (`contactForm:` namespace), so no visitor-facing copy is baked
  into HTML; ✅ the **`document:` engine is retired** — credits/medicare-101/sitemap/services migrated onto the
  `sections` engine and `default.html`'s `{% if page.document %}` block was deleted, so gating + `${tokens}`
  resolve in ONE place (`sections.html`) and `{# gate #}` is gone from the build. Still open:
  `testimonialsShown` has no canon Switch-Registry entry (reconcile in step 4).

  Decisions (see content.md): content = data, templates = agnostic engines; `${token}` inline
  substitution; `when:` gates against the switchboard; switch keys camelCase with acronyms uppercase;
  per-page `effectiveDate`/`lastUpdated` defaulting to `2026-06-30` in `global.yml`.
- **G — architecture-doc reconciliation (decision doc ↔ locked reference ↔ canon).** Three docs coexist in
  `_context/architecture/`: `content.md` (content/template engine), `hosting-decisions.md` (the
  decision/posture/plan doc, @imported into the briefing), and `hosting-reference.md` (the LOCKED, verified
  evidence base + cost model + runbook — *not* imported; consult on demand). Treat `hosting-reference.md`
  and `canon.md` as read-only authorities; do all reconciliation in `hosting-decisions.md`.
  - **Done** (prior session, merged to `main` via `claude-arch-doc-cleanup`): renamed `hosting-and-compliance.md`
    → `hosting-decisions.md` and `jekyll-hosting-architecture-reference.md` → `hosting-reference.md`; updated
    every reference (index.md import + prose, content.md, v2-design provenance, next-steps).
  - **Done this session** (branch `claude-track-g-arch-reconcile`, pending Aaron review/merge): all five
    reconciliation edits to `hosting-decisions.md` — (1) added the "doc map" header naming the three docs +
    canon's content authority; (2) replaced §4.4's drift-prone cost figures with a summary + pointer to
    `hosting-reference.md` §10; (3) rewrote §6 to recommend native Cloudflare Git as primary (Direct Upload
    via Actions = fallback + one-way-door caveat; Ruby pinning; GitHub-vs-Cloudflare division of labor;
    transitional-testing-host NB) and synced the §3 stack table, §4.1/§4.3, and §10 items 1–2; (4) flagged
    in the doc map that `hosting-reference.md` §13 is unverified Report-A CMS material whose "call recording
    only for enrollment" item contradicts canon's do-not-adopt **C4**, with canon as the CMS-content
    authority; (5) cross-referenced §14.1's conditional questions to canon (HIPAA = 1.9, BAA = 3.6/5.5,
    data-flow test = 1.7/4.11) in §10 item 8 + noted the form-mechanism is already verified in §2.
  - **Track G complete** pending merge. No further architecture-doc reconciliation queued.
