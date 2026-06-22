# page.html → Jekyll Integration Notes

This documents what changes when `page.html` becomes a shared Jekyll layout
(`_layouts/default.html`) with includes, `_data` files, and conditional logic.

The standalone file is verified clean (W3C Nu, WAVE/axe-resolvable markup, JSON-LD
parses, WCAG 2.2 AA). **Nothing below is a defect in the file** — these are the
integration-time tasks, plus the settled decisions templating must *not* "fix."

---

## 1. Per-route metadata — the one that actually matters

The `<head>` is currently hardcoded to the homepage. As shared chrome, every
page-specific value must come from front-matter, or **every sub-page will declare
itself the homepage** → duplicate canonicals + JSON-LD entity collisions (a silent,
site-wide SEO defect).

Drive from Liquid:

| Element | Source |
|---|---|
| `<title>` | `{% if page.title %}{{ page.title }} \| {% endif %}J&amp;R Health Insurance` |
| `<meta name="description">` | `{{ page.description \| default: site.description }}` |
| `<link rel="canonical">` | `{{ page.url \| absolute_url }}` |
| `og:url` | same as canonical |
| `og:title` / `og:description` | page values (fall back to site) |
| `og:type` | `website` for home; switch per page type later if needed |

**JSON-LD:** vary **only** the `WebPage` node (`@id`, `url`, `name`, `description`)
per route. Keep `WebSite` and `InsuranceAgency` **static** — they are site-wide
singletons and must resolve to the same `@id` on every page so the graph stays whole.

```liquid
"@id": "{{ page.url | absolute_url }}#webpage",
"url": "{{ page.url | absolute_url }}",
"name": "{{ page.title | default: site.title }}",
"description": "{{ page.description | default: site.description }}",
```

---

## 2. Content slot

`<main>` currently holds a placeholder heading. The layout must inject content:

```liquid
<main id="main" tabindex="-1">
    {{ content }}
</main>
```

Drop the placeholder `<div>`/`<h1>`. **Each page supplies its own single `<h1>`** —
keep exactly one per page so the heading order (h1 → h2 → h3) never skips.

---

## 3. Asset paths

`./`-relative paths resolve against the current directory and 404 on any nested
route. Use the `relative_url` filter (respects `baseurl`) or root-relative paths:

```liquid
{{ '/assets/css/main.css' | relative_url }}
```

Apply to: stylesheet, favicon(s), apple-touch-icon, manifest, and the font preload
once the filename is set.

> Internal page links: if your host issues a 301 for extensionless paths, match your
> permalink style (trailing slash or not) on internal `<a href>`s to avoid a redirect
> round-trip. Cosmetic — only worth it if you want zero redirects.

---

## 4. Active-nav state

Add `aria-current="page"` to the active link in **both** navs, conditional on
`page.url`. Only one link per nav may carry it.

```liquid
<a href="/" {% if page.url == '/' %}aria-current="page"{% endif %}>Home</a>
```

Best-practice add (helps AT announce the current page); not a current AA failure on a
static skeleton.

---

## 5. Navigation data + the intentional label split

If you move nav into `_data` or config, **preserve the deliberate voice difference**:

- **Header (terse, for horizontal space):** Home · Medicare 101 · Services · About ·
  Contact · *phone (click-to-call, last item)*
- **Footer Quick Links (warmer):** Home · Medicare 101 · Our Services · About Us ·
  Contact Us

Use either two label fields per item or two separate lists. The menu order is a
deliberate funnel — keep it. The header's trailing click-to-call item has no footer
equivalent.

---

## 6. Social links + the SVG sprite (the existing TODO)

- Drive the social list from `_data/social.yml` — each entry: `url`, `label`,
  `symbol` (sprite id), `enabled`. Currently LinkedIn + Facebook live; **Yelp is built
  but disabled** — flip it via the data file, never by editing markup.
- The inline `<svg id="svg" aria-hidden="true">` sprite renders **once** in the layout
  (forward-referenced by `<use>`). Conditionally emit only the `<symbol>`s whose social
  entry is `enabled` — this is exactly what the TODO comment describes. The Yelp
  `<symbol>` source should live in the include/data, not as a commented HTML block.
- **Keeping the sprite inline is intentional** (no extra request, no FOUC in practice).
  If you later externalize it for cross-page caching, repoint `<use href>` at the
  external file. Either is fine; inline is the current choice.
- The four rendering hosts now carry intrinsic sizes (logos `184×34`, icons `24×24`)
  as a no-CSS/CLS fallback — CSS still owns final sizing. Keep these when templating.

---

## 7. Dynamic copyright year

```liquid
Copyright © {{ 'now' | date: '%Y' }} J&amp;R Health Insurance LLC.
```

Removes the annual manual edit. **Keep "LLC."**

---

## 8. Fonts

- Self-hosted woff2. Fill the commented `preload` placeholder with the real filename;
  keep `crossorigin` (required for fonts even same-origin).
- `@font-face` + `font-display` live in `main.css`.
- **No `preconnect`** — there is no third-party font origin to warm up.

---

## 9. Security headers — host config, not markup

`Content-Security-Policy`, `Strict-Transport-Security`,
`X-Content-Type-Options: nosniff`, and `Referrer-Policy` belong in a `_headers` file /
host rules, **not** a `<meta>` tag (a meta CSP is strictly weaker and can't express
some directives). A strict CSP is easy here because there's no inline or third-party
JS — start from `default-src 'self'` plus your self-hosted font origin.

---

## 10. Optional, decide later (not defects)

- **SVG favicon** — `<link rel="icon" type="image/svg+xml" href="…/icon.svg">` above
  the `.ico` line. Vector logo → crisp in the SERP and tabs at any DPI; modern browsers
  prefer it, `.ico` stays as fallback. Needs an `icon.svg` asset.
- **`legalName`** on the `InsuranceAgency` node — `"legalName": "J&R Health Insurance LLC"`
  alongside `name`. One line; helps regulated-entity disambiguation in the Knowledge Panel.
- **`dateModified`** on the `WebPage` node — freshness signal, inject via a
  last-modified plugin or front-matter (`{{ page.last_modified_at | date_to_xmlschema }}`).

---

## 11. Compliance / legal owns this — do NOT auto-edit

- The **Important Disclosures / TPMO** text and the **Consumer Health Data Privacy**
  link wording are owned by your CMS advisors / attorneys.
- The CHD link text is **shortened by design** to fit the layout; the destination
  page's title carries the full "…Policy" wording. This is intentional — leave it.
- Any *structural* change to the disclosure (e.g., linkifying "1-800-MEDICARE" or
  "Medicare.gov" for easier tapping) preserves the words but alters approved
  presentation → route through compliance before shipping.
- Several external AI reviewers hallucinated CMS rule changes (a "2023 legacy
  disclaimer," "CY2027 SHIP removal," a font-size floor violation from `<small>`).
  **Ignore those** — `<small>` is the spec-correct element for legal fine print, and
  the copy is attorney-owned regardless.

---

## 12. Settled decisions templating must NOT "fix"

These are deliberate and verified; don't let a refactor or minifier undo them:

- **sr-only logo text spelled "J and R"** (pronunciation reliability); visible logo
  uses "J&R". Both home links share the identical accessible name.
- **Lists use `list-style-type: ""`** in CSS — no `role="list"`, no `list-style: none`
  (preserves Safari/VoiceOver list semantics without the Nu "redundant role" warning).
- **Exactly two `<nav>` landmarks** (header Primary, footer Quick Links). Don't wrap
  other link groups in `<nav>` — avoids landmark overload.
- **Hours sit under the sr-only "Contact Information" heading** (a `<dl>` labeled by its
  `<dt>`, outside `<address>`). No separate "Hours" heading by design.
- **Social precedes the copyright block** in DOM order (matches the visual layout and
  reading/focus order).
- **`theme-color` = #ffffff**; **`format-detection: telephone=no`** kept.
- **Head comment buckets** (`Document` / `SEO` / `Appearance` / `Icons` / `Sharing` /
  `Structured Data`) are organizational — safe to strip at build.

---

## Build hygiene

If you minify HTML, confirm the minifier:

- **strips** HTML comments (the head buckets, any TODOs), but
- **does NOT** strip `aria-hidden`, SVG `viewBox`, the new SVG `width`/`height`, or
  empty/boolean attributes.

---

## Quick checklist

- [ ] Per-route `title` / `description` / `canonical` / `og:*` from front-matter
- [ ] `WebPage` JSON-LD node varies per route; `WebSite` + `InsuranceAgency` static
- [ ] `{{ content }}` in `<main>`; placeholder removed; one `<h1>` per page
- [ ] Asset paths via `relative_url`
- [ ] `aria-current="page"` conditional in both navs
- [ ] Nav from data, preserving the terse-header / warm-footer label split
- [ ] Social from `_data/social.yml`; sprite symbols rendered conditionally; Yelp toggle
- [ ] Dynamic copyright year (keep "LLC")
- [ ] Font preload filename filled; `crossorigin` kept; no preconnect
- [ ] Security headers in `_headers`, not `<meta>`
- [ ] (Optional) SVG favicon · `legalName` · `dateModified`
- [ ] Disclosure / CHD wording untouched (compliance-owned)
- [ ] Settled decisions in §12 preserved through the refactor
