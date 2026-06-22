# vendor-facts.md — operational vendor specifics (J&R website data stack)

*Reference, NOT canon.* This file holds the in-the-weeds, version-sensitive vendor operational facts that `canon.md`'s `<website-partner-legal-canonical-sources>` block used to carry inline (build/pricing limits, DPA version strings, 10DLC registration mechanics). The legal POSTURE — which instrument is load-bearing, the BAA/DPA `[OPEN]` status, the data-flow mapping, and the binding 10DLC opt-in/consent constraints — stays in `canon.md`; only the operational detail moved here. Carries no canon rev.

**Standing posture (inherited from canon).** Every URL, version, and effective date below is captured-as-of and UNVERIFIED — re-fetch and date-stamp at reliance (same posture as the regulatory authority table and partner-legal). Several entries are post-cutoff or version-sensitive and were sourced by an external pass, not independently fetched. Whether any instrument binds J&R's specific plan/contract is a counsel determination.

**Provenance.** Relocated 2026-06-13 (canon rev 17, the decompression pass) verbatim-in-substance from `canon.md` rev 16 partner-legal entries (Cloudflare, Intulse). The actionable subset of the 10DLC mechanics also lives, by design, in the canon register's operational checklist `10dlc-registration-readiness` (WEB lane) — that row is the live to-do; this file is the source reference.

---

## Cloudflare · Pages hosting cost/plan (canon Cloudflare entry → relocated)

Cloudflare docs captured 2026-06-12; re-fetch at reliance.

- **The Pages Free plan is sufficient for launch — Pro/Business is NOT required.** (This conclusion is the load-bearing fact; it stays stated in canon.)
- Free-plan limits relevant to a static Jekyll brochure site: 500 builds/month · 1 concurrent build · 20-minute build timeout · 20,000 files/site · 25 MiB/file · 100 custom domains/project · unlimited bandwidth/requests · commercial use expressly allowed. All comfortably above this site's needs.
- **Workers/Functions billing caveat (load-bearing for 5.2/5.5; the posture point stays in canon):** Pages Functions and Workers bill against the SEPARATE Workers quota (100k requests/day free), and a website-zone Pro upgrade does NOT lift the Workers free limits — so adding any Function/Worker is simultaneously a cost event AND a no-backend-posture break.

## Cloudflare · Customer DPA version/date detail (canon Cloudflare DPA line → relocated)

- Canonical HTML: <https://www.cloudflare.com/cloudflare-customer-dpa/>. **Current version v6.4, effective 2026-04-03, supersedes v6.3 / 2025-06-20.** (Canon keeps the load-bearing posture: the current DPA commits Cloudflare to maintaining the subprocessor list + at least 30 days' notice before a new subprocessor begins processing.)
- Rev 12 capture (Validator package 2026-06-12): v6.4 re-confirmed live, no v6.5 observed; Cloudflare product docs renamed "Service-Specific Terms" (ex-"Supplemental"; that page last-updated 2026-06-09); a capture-grade PDF asset for the v6.4 instrument exists at cf-assets.www.cloudflare.com (path as captured in the package — re-fetch at reliance).

## Intulse · A2P 10DLC registration mechanics (canon Intulse 10DLC line → relocated)

Source: Intulse 10DLC guide — <https://support.intulse.com/articles/10dlc-registration>; captured-as-of 2026-06-11, re-fetch at reliance. The BINDING legal constraints (the required opt-in element set, the exact-words-of-registered-use-case rule, the privacy-policy no-third-party-direct-marketing disclosure, the opt-in-checkbox-wherever-a-phone-is-collected / one-to-one / never-buried rule, the never-allowed "3rd party lead generated services" use case, and the recorded-line verbal-opt-in path) stay in `canon.md`'s Intulse entry. The procedural mechanics below are reference; the actionable subset is tracked at `10dlc-registration-readiness`.

- **Fees / locks:** $8 brand · $20 per campaign submission AND per rejected resubmission · $3–15/mo per campaign · 3-month TCR lock on submission even if denied · the use case CANNOT be changed once the campaign is created.
- **Vetting:** optional. Unvetted throughput limits — 2,000/day T-Mobile, 75 TPM AT&T — exceed J&R's volume, so vetting is skippable.
- **Use-case menu:** Customer Care / Account Notification / Marketing are standard; Mixed and Low Volume Mixed take 2–5 sub-use-cases; Intulse-approved conversational UCaaS (Low/High) is a special use case barred from mass messaging.
- **Carrier review** is manual against the live site; the brand name + EIN must match tax documents exactly and the brand info must match the website; one brand per EIN; support email/phone must be domain-based and shown on the Contact page.
- **Sample messages** must match the use case, name the brand, include at least one with opt-out language, and one per type if Mixed; embedded links must be declared and appear in a sample (no public URL shorteners); opt-in/opt-out/HELP confirmation texts are auto-populated for review.

---

*If any of these specifics is relied on, re-fetch the named source and date-stamp it; treat everything here as UNVERIFIED until then.*
