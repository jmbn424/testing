# canon.md — rev 15 (2026-06-12)

THE CANON. Single authoritative record for the J&R Health Insurance website legal + compliance project: `<immutable-project-context-and-reference>` + `<mutable-working-content>`, identical for every role. Load order: a role bootloader first (integrator / validator / general), then this file; bootloaders reference this file, never the reverse, so this file is self-sufficient. The Integrator thread is the only writer; every rev is announced and logged in the register (item 5.30), and this header restates the current rev. Completeness check: the file ends with `</mutable-working-content>`.

Integrity: rev 15 · 2026-06-12 · body = 2,057 lines below the divider · body SHA-256 `a14fb97584004e717eaaa58f0f431f64dc251e3ef31870932abe87acc5ef586f`. Supersedes the merged `_birds-eye-view-integration.md` and the one-off `latest-version-of-canonical-artifact.md`. Standing posture: every authority UNVERIFIED pending counsel + FMO; Locked decisions are do-not-relitigate; everything is DRAFT until the named owner signs off.

---
<immutable-project-context-and-reference>

<overall-project-brief>

- Draft high-quality legal-aware artifacts in the form of <pages> that will be published on a website. See <company-facts>.
- Provide high-quality guidance on industry-specific disclaimers to publish on the agency's website
- Provide high-quality documentation, process, sources, and flagged items that we can prepare alongside the <pages> and disclaimers for the attorneys and CMS compliance officers to review, modify if necessary, and sign-off on.
- Build a powerful web templating system with our existing static site generator that mirrors the internal conditional logic of applicable legal language modules.

<values>

We want to strike the right balance of:

1. Upholding the organization's strongly held values of integrity, honesty, and being good people who genuinely want to help others.
2. Communicating to the public in plain, approachable English what they are agreeing to.
3. Protecting J&R from liability, especially around compliance. "CYA" and showing we care about compliance but not overpromising things that might put us at risk.
4. Setting a quality bar for website legal documentation for this industry
5. Staying as lean and "no fat" as possible.

Posture toward J&R (governs tone, not verification): presume good faith. Assume J&R acts ethically and will get any unsettled point right once it is surfaced, and read an open or flagged item as "not yet confirmed," never as "suspected." This is reinforced by common sense: a heavily regulated industry that selects for above-board operators, and a client with strong organic word-of-mouth who is investing in serious compliance (this project) and chasing every loose end. The presumption does NOT extend to the truth of a claim or the soundness of a cite. Those stay UNVERIFIED until a primary source, counsel, or FMO confirms, because assuming a compliance claim is already fine when it is not is exactly what would expose the people we are protecting. Good faith about the people, full rigor on the claims.

</values>

</overall-project-brief>

<company-facts>

# J&R Health Insurance

Token-efficient primer for seeding new threads. J&R is a small Medicare/health-insurance brokerage and a Medicare TPMO operating in a heavily regulated industry; treat every public-facing claim as a compliance surface. Cited authorities are unverified pending counsel/FMO sign-off. Open questions and review items live in the separate "Flagged Items" doc. (Rev. 2026-06-08: synthesized with the J&R shared-doc Q&A and the launch sitemap. Updated lead-flow, HIPAA, Vetecare, SMS/Intulse, and AI-discoverability facts; site launch = 6/30/2026. Rev. 2026-06-11, canon rev 10: licensure detail + expirations, HIPAA true-up, Vetecare confirmation, DBA note, IFP/toll-free/out-referral roadmap facts, testimonials developer-review carve-out.)

## Identity
- J&R Health Insurance — private Medicare/health-insurance brokerage; not affiliated with or endorsed by Medicare, VA, DoD, or any government agency. Registered legal name: J&R Health Insurance LLC (confirmed by J&R 2026-06-11); the legal pages define "J&R Health Insurance" as the short form. The short form is NOT currently a registered DBA/trade name — J&R plans to prioritize registering one (J&R 2026-06-11; trade-name-use).
- 2 employees; based Puyallup, WA (Tacoma metro). Live/licensed at launch in WA, OR, GA, TN — Rowena's individual producer licenses, confirmed active and none lapsed (WA exp 2028-03, OR exp 2028-03, GA exp 2027-03, TN exp 2027-03; J&R 2026-06-11); WA is the only actively marketed state, OR/GA/TN are license-held (J&R 2026-06-11); whether the LLC itself holds entity licenses is open (entity-license). CA and NV are PENDING licensure (not yet legally able to do business there; expected ~2027, not 2026 — J&R 2026-06-11) — excluded from launch licensure representations and from `jurisdiction` gates until active. Per-state active/pending status is the single control in `<build-conventions>` (Supported jurisdictions); it drives the `<licensed-states />` include + the `jurisdiction = XX` gates, so opening CA/NV later is a status flip there (1.6).
- Contact coordinates (email, phone + hours, fax, mailing address): see the `<company-contact-info>` block. Relay/711 supported. This single email and phone are also the intake for privacy-rights and accessibility requests.
- jrhealthins.org · LinkedIn /company/jrhealthins · Facebook /jrhealthins (page live as of 2026-06-12, courier) · Yelp (j-and-r-health-insurance-puyallup) · © 2026.
- People: Rowena Baladad (Medicare + VA/CHAMPVA/TRICARE lead); Jasmine Baladad-Nalder (website/compliance coordinator).
- Advocate Health Advisors — upline/partner in the FMO/oversight role; confirmed legal name "Advocate Health Advisors," Florida-based. Will review the compliance work when ready, and (per J&R's rep) recycles its own aged/"cold" leads to other agents. Also runs the "Vetecare" veterans-Medicare program. Veterans referrals point to advocatehealthadvisors.com/who-we-serve/veterans. Confirmed as the formal FMO sign-off authority.

## Operations
- Presents Medicare Advantage (Part C). Discusses Part D but cannot enroll (Part D non-commissionable; E&O covers only commissionable) — guides clients to self-enroll at medicare.gov. Also serves Individual & Family coverage (a planned service line; healthcare.gov possibly 2027 — J&R 2026-06-11 — and IFP marketing stays dark until launched). Life insurance, annuities, and similar lines are referred out to other agents — current practice, not a planned line (J&R 2026-06-11; compensation in either direction unconfirmed — referral-comp-out).
- Paid by carrier commission; no charge to consumer. Not on healthcare.gov yet (as of May 2026). Differentiator: client advocate / go-to resource. Clients via word-of-mouth + educational Medicare 101 (SEO).
- Producers complete an annual Medicare certification (yearly recertification plus an exam) through Advocate in order to market and educate the public on Medicare. This routine MA/Part D credential is separate from FFM, the ACA-marketplace registration (also confirmed); marketplace/IFP marketing stays dark until J&R chooses to launch it.
- Veterans: coordinates VA/CHAMPVA/TRICARE for Life with Medicare; "Vetecare Certified" through its FMO's (Advocate's) Vetecare program — NOT a VA accreditation; NOT VA-accredited; does NO VA claims work (education/referral only). Vetecare credential confirmed (J&R 2026-06-11): issued by Advocate Health; signifies specialization in helping veterans coordinate their federal coverage with civilian health insurance; appears only within Veterans-services content (1.8/N4 closed — VA-implication wording rides 3.1 + D1–D4). No VA-accreditation or claims-work plans (J&R 2026-06-11). Plans a referral link to advocatehealthadvisors.com/who-we-serve/veterans. The standalone Veterans page was cut; Veterans-services content and disclosures live on the Services page until /services/veterans launches (planned 12/31/2026).
- Leads: CRM = AgencyBloc (embedded lead form; lead-capture processor). Form collects name (first/last) + phone (required), email + message (optional). (No "coverage interest by topic" field — confirmed by J&R 2026-06-09.) Decided: the form carries two separate checkboxes — a required, unchecked clickwrap assent to the Terms/Privacy/CHD (clickwrap-assent), and a separate, optional, unchecked SMS opt-in checkbox that satisfies Intulse's opt-in-to-texting requirement. The two are not combined: the SMS opt-in must stay optional and never a condition; exact SMS verbiage received from Intulse 2026-06-11 (reconciliation: sms-consent-scope).
- Lead flows: does NOT sell or share leads with other agencies for their marketing (confirmed by J&R 2026-06-11). Refers out-of-scope prospects to other brokers when J&R cannot serve them (e.g., an unlicensed state) and informs the prospect; no prospect data moves on a referral — it is a pointer, not a data transfer (confirmed by J&R 2026-06-11). Leads are essentially all organic (word-of-mouth, Medicare 101 / SEO, the lead form, occasional partner referral links); no bought lead lists and no per-lead fees to Advocate or anyone (confirmed by J&R 2026-06-11; 1.4 closed). The partner referral links are unsolicited, uncompensated links that independent third parties choose to place on their own sites pointing to J&R's homepage — the visitor clicks through and self-submits, so these are first-party with no data handoff and no consideration (J&R 2026-06-11). Advocate (upline) sends J&R recycled/cold leads, and that prospect data does come INTO J&R (confirmed by J&R 2026-06-11); J&R does not send client information back to Advocate. So Advocate is a confirmed third-party inbound data source — the inbound consent/authorization burden sits on the Advocate contract (CMS §422.2274 PEWC naming J&R + MHMDA valid authorization for any CHD; 3.7a), and Privacy §2 must disclose this source to match CHD §4 (1.1 closed 2026-06-11). Advocate also runs social marketing campaigns for J&R that J&R does not purchase (no consideration; J&R 2026-06-11) — campaign creative/disclaimer compliance rides the FMO electronic-marketing ownership lock (Locked decisions), and whether campaign-generated leads arrive as data or only as click-through traffic is open at campaign-lead-path.
- Comms: ~99% via SMS/text (also email + call; calls for less tech-savvy clients); personal "work cells" used for SMS; contacts own leads only (no third-party texting on its behalf).
- VoIP = Intulse; SMS not yet enabled (A2P 10DLC requires a compliant website — see Web). No toll-free number planned (J&R 2026-06-11) — 10DLC is the sole A2P path. Will register broad: customer care + account notifications + marketing. Intulse supplied its SMS verbiage 2026-06-11 (templates from its 10DLC guide; adaptation allowed, but the opt-in must carry the exact words of the registered use case) — the drafted SMS language (Terms §6, Contact opt-in, Privacy) must be reconciled with it before launch, and the campaign is not created until sms-legal-theory is decided (the use case is immutable once created).
- HIPAA: J&R does NOT handle carrier-sourced medical records or other actual medical information in day-to-day work — it collects only self-reported information (e.g., doctors and medications) to shop plans (J&R 2026-06-11). That self-reported information is still consumer health data under MHMDA, so the consumer-health-data obligations stand regardless of HIPAA status (a no-PHI posture does not narrow the consumer-health-data scope). The website itself is a no-PHI brochure site (no PHI to or from the domain — see Web for the architectural basis), so HIPAA's role for the site is minimal. Entity-level HIPAA status (covered entity / business associate / neither) is still open (1.9) — counsel pins it; the confirmed absence of routine carrier-PHI inflow weakens the business-associate trigger, but that characterization is counsel's call, and no public copy asserts a HIPAA status either way.

## Web
- Static brochure site; full site launches 6/30/2026 (a minimal placeholder page is live now). Host, static-site generator, and build/deploy tooling are business-controlled implementation, tracked here only where they bear on legal liability. Host is Cloudflare Pages (canonical, confirmed 2026-06-10); GitHub holds the private source repo and CI only, with compiled output deployed to Cloudflare Pages (GitHub Pages ruled out as host — see partner-legal). Legally-relevant properties: the site is static with no back-end and no server-side handling of the lead payload behind the CDN, so no PHI or PII is transmitted to or from the jrhealthins.org domain — the lead form is a `<form action>` that POSTs directly to an external processor (AgencyBloc; DPA confirming — 3.6) and the host serves only flat files. This no-PHI conclusion holds only while that architecture holds; adding any server-side handler (e.g. a Worker that reads the payload) reopens the data-flow analysis. The build/deploy pipeline is isolated from the serving environment. Cloudflare also provides DNS, proxy, and cookieless analytics, and is the migrating registrar (IONOS → Cloudflare; cookie/config confirm closed 2026-06-10 — the live re-check rides the 4.11 launch sweep). Web fonts are self-hosted (no third-party font request, removing the visitor-IP transmission and a subprocessor/cross-border flow). Intulse remains in the stack (VoIP/SMS, separate from the web layer) — it places no HTML/JS/meta/script on the domain and needs no custom DNS records, so it adds no third-party code or DNS footprint to jrhealthins.org (per Intulse docs, captured-as-of 2026-06-10; reinforces the no-PHI / nothing-on-domain analysis). Turnstile is under consideration and currently off (`turnstile_enabled`). Cloudflare "LLM scraping + training" is enabled (ai-crawlers).
- Launch set (6/30/2026): Home, Services, Medicare 101, About, Contact, Privacy Policy, Terms & Conditions, Accessibility Statement, Consumer Health Data Privacy Policy (/consumer-health-data-privacy), Thanks (post-form success), 404, Sitemap, Credits, plus robots.txt and llms.txt.
- Planned carrier-logos section on Home (and possibly Services) at launch: Advocate-approved logos (list pending) shown with an identification-only / no-implied-endorsement / not-every-plan disclaimer, single-sourced as one include; logos are third-party trademarks shown by permission (not the Credits stock-image policy); FMO signs off the wording (2.7).
- Planned by 12/31/2026: Services sub-pages (/services/medicare, /services/veterans, /services/individual-and-family), Carriers, Team (Rowena, Jasmine), Referrals.
- AI discoverability is live: J&R enabled Cloudflare LLM scraping + training, llms.txt + robots.txt are in the launch set, and robots.txt allows the named AI user-agents (GPTBot, ClaudeBot, Google-Extended, PerplexityBot, OAI-SearchBot). Allowing AI training on the content is a deliberate posture (fine for a public brochure).
- Intulse A2P 10DLC website prerequisites (per Intulse, 6/5/2026; DNS/code requirements confirmed 2026-06-10, see 1.13): About, Services, and Contact pages; the Contact page must carry a form with a phone-number field and an opt-in-to-texting checkbox; plus a Privacy Policy and Terms & Conditions; plus Intulse-supplied SMS disclaimers. A bare "hello world" page does not qualify. The site's displayed business identity (name + contact) must match the brand registration Intulse submits to The Campaign Registry (business-identity flow → partner-legal TCR entry), and a domain-based email is required (free webmail rejected) — already met by info@jrhealthins.org. These website/email prerequisites apply only if SMS is used; Intulse needs no custom DNS records and no on-page code (1.13). (Jasmine sent Intulse the message-type answers on 6/8/2026; Intulse supplied the verbiage + registration steps 2026-06-11 — see partner-legal Intulse.)
- Global footer on every page: TPMO disclaimer + Medicare/VA non-affiliation + solicitation line.
- Footer links: Home, About, Contact, Services, Medicare 101, Sitemap, Consumer Health Data Privacy Policy, Privacy Policy, Terms & Conditions, Accessibility Statement, Credits. The CHD link sits in its own "Your Data Rights" footer group, separate from Privacy Policy and visibly separated on every page; the social footer icons are plain links with no cookie-setting SDK. (Veterans and Carriers were removed from Quick Links; future links use /services#veterans and /services#medicare. Footer is protected; N3 resolved.)
- Accessibility Statement live (effective / last reviewed [set at publication]): WCAG 2.2 Level AA conformance claim. Testing is continuous-integration: Lighthouse/PageSpeed Insights, W3C validation, WAVE, axe, full browser battery, keyboard-only, captions/transcripts, WebAIM, VoiceOver on iOS + macOS, mobile/tablet. CI re-tests as pages ship, which keeps the conformance claim current through the 6/30/2026 launch.

## Compliance (high-level)
- Medicare/CMS: standardized TPMO disclaimer → Medicare.gov / 1-800-MEDICARE; no implied Medicare/HHS endorsement (§422.2262, SSA §1140); obtain CMS one-to-one consent before sharing beneficiary contacts (survived CY2027); keep Medicare 101 on the educational side of the MCMG line. SHIP drops from the disclaimer 10/1/2026 (CY2027), from the disclaimer's third sentence; the removal mechanism is a pre-staged PR that Jasmine merges on the day.
- Section 1557 (ACA) + HHS §504 web rule: N/A — J&R confirmed it receives no HHS federal financial assistance.
- Telemarketing/SMS: TCPA PEWC for marketing texts, honor STOP/HELP, retain consent records; A2P 10DLC + CTIA; state mini-TCPAs (WA CEMA = per se CPA violation + PRA, amended by ESHB 2274 eff 6/11/2026: adds an actual-knowledge element scoped to subject-line falsity (incl. knowledge "fairly implied on the basis of objective circumstances"), statutory damages drop to $100/message; OR/GA/TN registration + DNC duties); composite calling/texting window ~9a–8p (floor = NV, ceiling = WA + OR). The FCC one-to-one rule was vacated (IMC v. FCC, 11th Cir., 1/24/2025) — pre-existing PEWC governs; the CMS one-to-one consent is separate and still applies. Operational reality: SMS goes out from personal "work cells" today, which is person-to-person and sits outside the planned A2P 10DLC program — reconcile consent records, STOP/HELP handling, the calling window, and the P2P-vs-A2P channel before going live.
- Privacy: WA MHMDA strongest (opt-in consumer-health-data consent; standalone CHD policy + separate footer link; geofencing ban; specific-affiliate naming; private right of action, treble up to $25k); NV 603A (consumer-health-data provisions per SB 370 in force since 3/31/2024 — relevant to CHD scope); OR OCPA; CA CalOPPA (NO threshold — the lead form triggers it) + CCPA (J&R likely below threshold); GA has NO comprehensive privacy law (SB 111/Act 462 = rural-hospital tax credit amending O.C.G.A. §31-8-9.1, NOT a privacy law; breach-notification law O.C.G.A. §10-1-910 et seq. only; watch the 2027 session); TN TIPA (exempts licensed insurers at entity level / J&R likely below threshold). CT possible later (low priority per J&R) — affects future CHD scope. Offer access/delete rights "to the extent applicable." GDPR N/A (no EU banner); COPPA — site not directed to children. J&R confirmed (2026-06-09) it is well under every comprehensive-privacy-law revenue and consumer-count threshold (CCPA / OCPA / TIPA) and does not sell data — this supports the below-threshold posture; the formal exemption conclusion still rests with counsel.
- Data security: J&R is a GLBA "financial institution," but for the business of insurance the state insurance data-security law (NAIC model) usually governs rather than the FTC Safeguards Rule; MHMDA adds CHD safeguards + required processor contracts; all 6 states have breach-notification laws.
- Veterans: non-affiliation / no implied VA endorsement + accurate VA/CHAMPVA/TRICARE–Medicare coordination (drives the disclaimer). Not VA-accredited; no claims work (accreditation/claims-fee regime N/A). CA SB 694 eff. 1/1/2027 (veterans-related; gates the Veterans block). Veterans referral → advocatehealthadvisors.com/who-we-serve/veterans. The "Vetecare Certified" claim must be substantiable (FTC §5) and must not imply VA accreditation or endorsement; VA/CHAMPVA/TRICARE names and logos are identification-only — confirm any logo use against trademark/endorsement limits before display.
- Advertising/FTC: FTC Act §5 (no deceptive insurance/Medicare or lead-gen claims); Endorsement Guides + Fake/AI Reviews Rule (Google/Yelp reviews, AI-assisted copy); CA Ins. Code §1725.5 (producer license # on emails to CA leads, not website). Planned home-page carousel of select Google/Yelp client reviews (last names obfuscated); all reviews confirmed organic — unsolicited, no compensation or quid pro quo (J&R 2026-06-10) — so no material connection to disclose for the general reviews; on-site display triggers the Endorsement Guides / 16 CFR 465 / §5 + CMS testimonial rules (see flagged-items `testimonials-display`). Separately, some independent third parties voluntarily place uncompensated recommendation links to J&R on their own sites (no sponsorship or quid pro quo; J&R 2026-06-11) — J&R does not publish these, so no material connection attaches on J&R's side; reposting any such third-party endorsement on J&R's own site would trigger the same Endorsement Guides analysis (testimonials-display). Carve-out (courier 2026-06-11): two of the nine current reviews are developer-authored — 1 of 8 on Google and the sole Yelp review — written by the site developer, a genuine client who is donating the website; that is a material connection for on-site republication, so exclude those two from any on-site display or disclose the connection, and hold any "read us on Yelp" link until unaffiliated Yelp reviews exist (testimonials-display).
- Accessibility: ADA Title III; WCAG 2.2 Level AA is the target and current conformance claim (see Web — re-validate at launch).
- Media: all site assets are properly licensed — people-images carry stock model releases (confirmed by the source catalog), and the Creative Commons / public-domain images contain no identifiable people, logos, or branded elements (used for landscapes, skylines, objects, and abstracts). Attribution required for Flickr CC BY + Noun Project free-tier; none for Unsplash/Pexels/Pixabay/public-domain; public-domain clears copyright only (not trademark/publicity/property) — no recognizable people, logos, or private property without releases.

</company-facts>

<company-contact-info>

**Email:** info@jrhealthins.org
**Phone:** (253) 528-8805
**Fax:** (253) 363-8808
**Address:**
702 S Hill Park Dr, Ste 205
Puyallup, WA 98373
**Hours:** Monday to Friday, 9:30 a.m. to 5:30 p.m. Pacific time, except holidays

</company-contact-info>

<licensed-states>

```
governed-by: Supported jurisdictions — active set (build-conventions). Renders the states J&R is licensed-and-live in, as an inline fragment that slots into a sentence. Build → {% include licensed-states.html %} reading the one jurisdictions data source that also drives the `jurisdiction = XX` gates. The control is the source of truth; keep this rendering in sync with the active set there. Pending states (CA, NV at launch) are never listed.
```

Washington, Oregon, Georgia, and Tennessee

</licensed-states>

<testimonials>

```
governed-by: testimonials-display (curation rules) + the hosting page's gate (`referrals_page` for /referrals; the Home carousel ships only per testimonials-display). STUB — no curated quotes yet; content lands only after FMO marketing review + counsel FTC pass. Heading parameter: `<testimonials heading="..." />` sets the section heading; default "Reviews". Build → {% include testimonials.html %} rendering the curated, static review set (genuine + unedited, last names obfuscated, developer-authored reviews excluded or disclosed, outcome stories framed "results vary"; no live Google/Yelp widget — 5.2/5.3).
```

{CURATED REVIEW SET — pending testimonials-display}

</testimonials>

<tpmo-regulatory-compliance-authoritative-sources>

# TPMO Compliance References

Verified vs. live sources. Primary-source verification applied 2026-06-09; Group D corrections + additions incorporated. Reference only, not legal advice; every authority is UNVERIFIED pending counsel + FMO final CMS sign-off pre-launch. Open questions, review items, and process flags live in the project register (birds-eye Flagged Items / buckets), not here — this table is the clean authority reference.

Owner key (primary first; "/" = shared): FMO = Field Marketing Org (marketing + CMS sign-off) · Attorney = retained counsel (legal review + launch sign-off) · Web = web designer/dev (accessibility, implementation, placement) · Agency = in-house producers (licensing, registration, DNC scrubbing, recordkeeping).

| Category | Name / Reference | Type | Gov | Region | Service | Priority | Owner | URL | Notes |
|---|---|---|---|---|---|---|---|---|---|
| Medicare — framework | Centers for Medicare & Medicaid Services (CMS) | Federal regulator | GOV | National | Medicare | Critical | FMO | <https://www.cms.gov/> | Administers Medicare/Medicaid; regulates MA/Part D marketing & TPMO conduct. |
| Medicare — framework | Social Security Administration (SSA) | Federal agency | GOV | National | Medicare | Applicable | FMO / Attorney | <https://www.ssa.gov> | Medicare enrollment; co-enforces SSA Act §1140 (misuse of Medicare/CMS names & card). |
| Medicare — marketing | Medicare Communications & Marketing Guidelines (MCMG) | Federal rule set | GOV | National | Medicare | Critical | FMO | <https://www.cms.gov/medicare/health-drug-plans/managed-care-marketing/medicare-guidelines> | CMS interpretive marketing rulebook (Part 422/423); holds TPMO disclaimer wording. Through 9/30/2026: cites Medicare.gov + 1-800-MEDICARE + SHIP. From 10/1/2026 (CY2027): drops SHIP; keeps Medicare.gov + 1-800-MEDICARE. **Note:** the consolidated MCMG PDF posted at this page is dated 3/16/2022; the operative TPMO marketing rules now live in 42 CFR Parts 422/423 as amended by successive contract-year final rules, so the PDF alone misses 2023–2026 changes — treat eCFR + the latest CY final rule as authoritative. |
| Medicare — marketing | 42 CFR Part 422 Subpart V & Part 423 Subpart V | Federal rule | GOV | National | Medicare | Critical | FMO / Attorney | <https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-B/part-422/subpart-V> | Core MA & Part D marketing regimes; TPMO definition at §422.2260(c)/§423.2260. |
| Medicare — marketing | 42 CFR §422.2262 (MA marketing & communications standards) | Federal rule | GOV | National | Medicare | Critical | FMO / Attorney | <https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-B/part-422/subpart-V/section-422.2262> | Dedicated row for the `cms-2262` key (7 annotation uses): general MA marketing/communications standards, incl. the testimonial/endorsement and misleading-content rules the page annotations lean on. Pinpoints to populate at the next EXT pass (package lead L12). UNVERIFIED. |
| Medicare — marketing | 42 CFR §422.2267 & §423.2267 (Required materials / disclaimer) | Federal rule | GOV | National | Medicare | Critical | FMO | <https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-B/part-422/subpart-V/section-422.2267> · <https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-B/part-423/subpart-V/section-423.2267> | Standardized TPMO disclaimer at §422.2267(e)(41)/§423.2267(e)(41) + required-content rules for site, emails, client materials; FMO must also carry it. CY2027 (marketing provisions eff. 10/1/2026): the disclaimer must be conveyed before any discussion of plan benefits (replacing the prior "within the first minute" rule), and SHIP is removed from the disclaimer's third-sentence referral list (keep Medicare.gov + 1-800-MEDICARE). Through 9/30/2026 the SHIP-inclusive wording stands — do NOT swap early (2.2b). FMO word-for-word sign-off required. |
| Medicare — marketing | 42 CFR §422.2274 & §423.2274 (Agent/broker & TPMO) | Federal rule | GOV | National | Medicare | Critical | FMO / Attorney | <https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-B/part-422/subpart-V/section-422.2274> · <https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-B/part-423/subpart-V/section-423.2274> | TPMO oversight, lead-gen disclosures, call recording, CMS one-to-one prior-express-written-consent for sharing beneficiary contacts, compensation/anti-steering. Recording retention 10 yr through 9/30/2026, then 6 yr from 10/1/2026 (audio yrs 1-3; audio or full transcript yrs 4-6); chain-of-enrollment records stay 10 yr (§422.504). CMS one-to-one consent SURVIVED CY2027 — separate from vacated FCC rule. CONTESTED, do-not-adopt: a claim that from 10/1/2026 only calls resulting in enrollment must be recorded — primary sources change the retention period, not the recording trigger; verify the recording-scope against the codified text before relying (C4 / ATT + FMO). Recording/consent = agency; compensation = FMO. |
| Medicare — marketing | CMS one-to-one consent vs. vacated FCC one-to-one rule | Compliance note | GOV | National | Medicare | Critical | Attorney / Agency | <https://media.ca11.uscourts.gov/opinions/pub/files/202410277.pdf> | The CMS prior-express-written-consent ("one-to-one") requirement at §422.2274/§423.2274 is SEPARATE from, and SURVIVED, the vacatur of the FCC TCPA one-to-one rule (IMC v. FCC, 11th Cir., 1/24/2025). The 11th Cir. ruling does NOT relieve the CMS obligation, which rests on independent SSA §1851/§1860D authority and has not been challenged. Highest-risk pitfall for a Medicare TPMO: keep obtaining CMS one-to-one consent before sharing beneficiary contacts even though the parallel FCC rule is dead. (Opinion URL liveness re-confirmed via the 2026-06-12 package — closes the F4 gap.) |
| Medicare — marketing | CMS Final Rules by Contract Year (CY2023–CY2027) | Federal rulemaking | GOV | National | Medicare | Monitor | FMO | <https://www.federalregister.gov/documents/2026/04/06/2026-06600/medicare-program-contract-year-2027-and-certain-contract-year-2026-policy-and-technical-changes-to> | CY2027 final rule = FR Doc 2026-06600, pub 4/6/2026 (91 FR 17384); eff 6/1/2026; marketing provisions apply from 10/1/2026. Removes 48-hr SOA wait & 12-hr educational-to-marketing gap; drops SHIP from disclaimer; recording 10→6 yr; superlatives allowed (still no misleading content). Proposed rule: FR Doc 2025-21456 (11/28/2025). |
| Medicare — marketing | Social Security Act §1140 (misuse-of-name) | Federal statute | GOV | National | Medicare | Critical | FMO / Attorney | <https://www.ssa.gov/OP_Home/ssact/title11/1140.htm> | Bars Medicare/CMS/HHS names, logos, card to imply govt approval. Drives "not affiliated with or endorsed by Medicare or any govt agency" disclaimer (w/ §422.2262). |
| Medicare — FMO infrastructure | 42 CFR §422.504 & §423.505 (Contracts / FDR / records) | Federal rule | GOV | National | Medicare | Applicable | FMO / Attorney | <https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-B/part-422/section-422.504> | Plan contracting flows down to FDRs; 10-yr chain-of-enrollment records (enrollment records stay 10 yr even after recording drops to 6). Flow-down + retention bind the agency. |
| Medicare — referral | Medicare.gov & 1-800-MEDICARE | Program (federal) | GOV | National | Medicare | Reference | FMO | <https://www.medicare.gov> | Official resources the TPMO disclaimer must direct beneficiaries to. |
| Veterans / VA | U.S. Dept. of Veterans Affairs (VA) | Federal dept. | GOV | National | VA | Critical | FMO / Attorney | <https://www.va.gov> | VA-Medicare intersection. Marketing must not imply VA affiliation/endorsement or misuse VA marks; must state VA/CHAMPVA/TRICARE-Medicare coordination accurately. |
| Veterans / VA | VA OGC — Accreditation, Discipline & Fees | Federal program | GOV | National | VA | Critical | Attorney | <https://www.va.gov/ogc/accreditation.asp> | Only accredited persons may prepare/present/prosecute VA claims; accreditation can't be used to sell financial products. Line between permissible veteran education/referral vs. unaccredited claims help. |
| Veterans / VA | VA OGC Accredited Rep Search Tool | Federal tool | GOV | National | VA | Reference | Attorney / FMO | <https://www.va.gov/ogc/apps/accreditation/index.asp> | Verify accreditation; supports the "not VA-accredited; free accredited help exists" disclosure. |
| Veterans / VA | 38 U.S.C. §§5901–5905 | Federal statute | GOV | National | VA | Applicable | Attorney | <https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title38-section5901&num=0&edition=prelim> | Ch. 59 — accreditation requirement + fee rules for claims assistance. |
| Veterans / VA | 38 CFR Part 14 (Representation; accreditation; conduct; fees) | Federal rule | GOV | National | VA | Applicable | Attorney | <https://www.ecfr.gov/current/title-38/chapter-I/part-14> | §14.629 accreditation; §14.632 conduct; §14.636 fees. No fees before AOJ initial decision (§14.636(c); post-2017 Pub. L. 115-55 / 38 USC §5104; old "notice of disagreement" trigger only for legacy cases). |
| Veterans / VA | 38 CFR §1.9 (Use of VA seal and flag) | Federal rule | GOV | National | VA | Applicable | Attorney | <https://www.ecfr.gov/current/title-38/chapter-I/part-1/section-1.9> | Civil/regulatory bar specific to the VA SEAL AND FLAG (not VA names/symbols generally). §1.9(g)(1)(viii) bars use implying VA endorsement of commercial products/services; routes violations to 18 U.S.C. §§506, 701, 1017. Civil companion to criminal 18 U.S.C. §701; narrower than a general VA-branding bar. No VA seal currently reproduced on the site (3.25). |
| Veterans / VA | 18 U.S.C. §701 (official badges, identification cards, other insignia) | Federal statute | GOV | National | VA | Applicable | Attorney | <https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title18-section701&num=0&edition=prelim> | Correct criminal cite for misuse of official insignia/seals, including the VA seal. Use §701, NOT §709 (which does not enumerate the VA). |
| Veterans / VA | Federal "claim shark" bills — H.R. 3132 (CHOICE) vs. H.R. 1732 (GUARD) | Federal legislation (pending) | GOV | National | VA | Monitor | Attorney | <https://www.congress.gov/bill/119th-congress/house-bill/3132> | 119th Cong. bills on for-profit charging veterans for claims help. H.R. 3132 reported by House VA Cmte 5/6/2025 (12-11), NOT enacted. H.R. 1732 pending, NOT enacted. |
| Veterans / VA | California SB 694 (Veterans Benefit Protection Act) | State statute | GOV | CA | VA | Applicable | Attorney | <https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=202520260SB694> | Signed 2/10/2026 (chaptered; non-urgency, so eff. 1/1/2027). Requires VA accreditation before charging for claims help; bans unauthorized/excess fees; extends CLRA (Civ. Code §1770) to veterans' benefits (amends Mil. & Vet. Code §401). WA/OR/NV/GA no equivalent; TN unverified. |
| Veterans / VA | Veterans Service Organizations (VSOs) | Nonprofit (referral) | NON-GOV | National | VA | Reference | FMO | <https://www.va.gov/vso/> | VA-accredited nonprofits (American Legion, VFW, DAV, PVA, AMVETS, VVA) — free claims help; the accredited alternative to refer to. Don't imply affiliation. |
| ACA / IFP | CMS CCIIO | Federal regulator | GOV | National | IFP/ACA | Applicable | FMO / Agency | <https://www.cms.gov/cciio> | ACA marketplace agent/broker registration, training, conduct rules. |
| ACA / IFP | 45 CFR §155.220 (Agents/brokers in FFM) | Federal rule | GOV | National | IFP/ACA | Applicable | FMO / Attorney | <https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-B/part-155/subpart-C/section-155.220> | Conditions agent/broker assistance in the FFM (consumer consent; no misleading marketing). Amended by the 2027 Payment Notice (CMS-9883-F), 91 FR 29526 (start page; §155.220 text ~29864) / FR Doc 2026-10050 / CMS-9883-F (pub. 5/20/2026), eff. 7/20/2026; HHS-approved consumer-consent form required for plan years beginning on/after 1/1/2028. |
| ACA / IFP | 45 CFR §155.260 (Privacy of consumer info in FFM) | Federal rule | GOV | National | IFP/ACA | Applicable | Attorney | <https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-B/part-155/subpart-C/section-155.260> | Limits agency use of info gained assisting Marketplace consumers. |
| ACA / IFP | CMS Marketplace Agent/Broker Registration & Training | Federal requirement | GOV | National | IFP/ACA | Critical | Agency / FMO | <https://www.cms.gov/marketplace/agents-brokers/registration-training> | Annual FFM registration/training, per producer. |
| ACA / IFP | Marketplace platform specifics (GA & OR) | Program | GOV | GA, OR | IFP/ACA | Reference | FMO / Agency | <https://georgiaaccess.gov> | Georgia Access replaced HealthCare.gov for GA (2025+). OR = state-based marketplace on the federal platform (enrolls via HealthCare.gov). Others: WA Healthplanfinder, Covered California, Nevada Health Link; TN on HealthCare.gov. |
| Telemarketing / SMS / email | FCC TCPA (47 U.S.C. §227; 47 CFR §64.1200) | Federal statute/rule | GOV | National | All | Critical | Attorney / Web | <https://www.ecfr.gov/current/title-47/chapter-I/subchapter-B/part-64/subpart-L/section-64.1200> · <https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title47-section227&num=0&edition=prelim> | Prior express written consent for autodialed/prerecorded marketing calls/texts; honor STOP; keep consent records. Attorney drafts consent language; Web builds unchecked checkbox; Agency retains records. |
| Telemarketing / SMS / email | FCC one-to-one consent rule — VACATED | Federal rule (vacated) | GOV | National | All | Monitor | Attorney | <https://media.ca11.uscourts.gov/opinions/pub/files/202410277.pdf> | Vacated 1/24/2025 (Insurance Marketing Coalition Ltd. v. FCC, 11th Cir., No. 24-10277; CG Docket Nos. 02-278 & 21-402); mandate 4/30/2025. The vacated language was then ministerially removed from the CFR and §64.1200(f)(9) reverted to the pre-2023 PEWC definition by Order DA-25-621, published 90 FR 42138 (8/29/2025). The Oct 2025 FNPRM (FCC 25-76) did NOT revive the requirement. Do NOT implement. CMS one-to-one (§422.2274/§423.2274) still in force — see the CMS one-to-one row. |
| Telemarketing / SMS / email | FCC revocation-of-consent rule (FCC 24-24) | Federal rule | GOV | National | All | Critical | Attorney / Agency | <https://www.fcc.gov/document/tcpa-rules-revoking-consent-unwanted-robocallsrobotexts> | "Revoke by any reasonable means" + 10-business-day honoring + keyword opt-outs eff. 4/11/2025 (core rule CONFIRMED). The apply-to-all-message-types sub-provision was granted a limited waiver to 4/11/2026 (DA 25-312, CONFIRMED). The cross-channel "revoke-all" extension (§64.1200(a)(10)) to 1/31/2027 via Order DA 26-12 (CGB, released 1/6/2026) is now INDEPENDENTLY VERIFIED (landing page: <https://www.fcc.gov/document/cgb-extends-effective-date-tcpas-consent-revocation-rule>). Cite FCC document landing pages, not direct docs.fcc.gov PDF links. |
| Telemarketing / SMS / email | FTC Telemarketing Sales Rule (16 CFR Part 310) | Federal rule | GOV | National | All | Critical | Attorney / Agency | <https://www.ecfr.gov/current/title-16/chapter-I/subchapter-C/part-310> | Outbound telemarketing disclosures + recordkeeping. Amended eff. 5/16/2024 (call-detail recordkeeping 10/15/2024); retention 2→5 yr; misrep rules extended to B2B. |
| Telemarketing / SMS / email | National Do Not Call Registry | Federal registry | GOV | National | All | Critical | Agency / Attorney | <https://www.donotcall.gov> | Scrub against federal DNC; keep internal DNC list; honor opt-outs. |
| Telemarketing / SMS / email | CAN-SPAM Act & FTC Rule (16 CFR Part 316) | Federal statute/rule | GOV | National | All | Applicable | Attorney / Agency | <https://www.ecfr.gov/current/title-16/chapter-I/subchapter-C/part-316> | Commercial email: opt-out + accurate headers. |
| Telemarketing / SMS / email | Washington CEMA (RCW 19.190) | State statute | GOV | WA | All | Critical | Attorney | <https://app.leg.wa.gov/rcw/default.aspx?cite=19.190> | Restricts commercial texts to WA numbers; bars false/misleading content; per se CPA violation w/ private right of action. ESHB 2274 (C 135 L 26; signed 3/23/2026, eff. 6/11/2026): damages $500→$100/msg (or actual) + an actual-knowledge element scoped to subject-line falsity ("actual knowledge, or knowledge fairly implied on the basis of objective circumstances"); non-retroactive (actions filed on/after 6/11/2026). ATT annotation (Validator package 2026-06-12, F-2B): confirm whether the $100 figure routes to text-message violations via amended RCW 19.190.040. |
| Telemarketing / SMS / email | Georgia telemarketing (SB 73; O.C.G.A. Title 46) + GA No-Call | State statute | GOV | GA | All | Applicable | Attorney | <https://law.georgia.gov> | GA telephone/text solicitation rules; SB 73 eff. 7/1/2024. GA AG enforces; PSC runs no-call list. |
| Telemarketing / SMS / email | Tennessee Do Not Call/Text Register (T.C.A. §47-18-1526; Title 65 Ch.4 Pt.4) | State statute/registry | GOV | TN | All | Applicable | Attorney / Agency | <https://www.tn.gov/tpuc/tennessee-do-not-call-program.html> | TN runs its own register (TPUC); AG/TPUC-enforced do-not-call conduct rules, on top of federal. The separate annual $500 solicitor registration (due May 1) is the row below, led by §65-4-401 / TPUC Rule 1220-04-11-.04. |
| Telemarketing / SMS / email | TN solicitor annual registration — TPUC Do Not Call program (T.C.A. §65-4-401 et seq.; TPUC Rule 1220-04-11-.04) | State statute/rule | GOV | TN | All | Applicable | Agency / Attorney | <https://www.tn.gov/tpuc/tennessee-do-not-call-program/csd-tn-do-not-call-telemarketer-faqs.html> | Annual telemarketer/solicitor registration, $500, due May 1 (term Jul 1–Jun 30), via TPUC Rule 1220-04-11-.04 under Title 65 Ch. 4. Lead cite = §65-4-401 et seq. / TPUC, NOT §47-18-1526 (the AG-enforced conduct row above). A 2026 TN solicitation-oversight law (HB2408/SB2659) reportedly restates the $500/May-1 registration — confirm (EXT follow-up). TN is a launch state. |
| Telemarketing / SMS / email | Oregon HB 3865 (Oregon Laws 2025, ch. 580; ORS 646.561/646.563/646A.370/646A.372/646A.374) | State statute | GOV | OR | All | Applicable | Attorney / Agency | <https://www.oregonlegislature.gov/bills_laws/lawsstatutes/2025orlaw0580.pdf> | Telephone-solicitation modernization. Signed 7/24/2025; eff. 1/1/2026 (in force). Window 8 a.m.–8 p.m. recipient-local; max 3 contacts per rolling 24 hrs; expressly includes TEXT messages; 18-month established-business-relationship exception. Violations = OR UTPA. |
| Telemarketing / SMS / email | Nevada NRS 598.0918(3) (solicitation hours; covers texts) | State statute | GOV | NV | All | Applicable | Attorney / Agency | <https://www.leg.state.nv.us/NRS/NRS-598.html> | Deceptive trade practice to solicit between 8 p.m. and 9 a.m. — a 9 a.m. floor / 8 p.m. ceiling; statute expressly covers solicitation "by telephone or text message." Source of the 9 a.m. floor in the composite 9 a.m.–8 p.m. window. |
| Telemarketing / SMS / email | Washington RCW 19.158.110(4) (commercial telephone solicitation hours) | State statute | GOV | WA | All | Applicable | Attorney / Agency | <https://app.leg.wa.gov/rcw/default.aspx?cite=19.158.110> | No commercial telephone solicitation before 8 a.m. or after 8 p.m. recipient-local — the 8 p.m. ceiling of the composite window. This (not RCW 80.36.390, which governs caller-ID/DNC) is the correct cite for the time-of-day ceiling. Pinpoint corrected to (4) rev 12 (two official-text reads; (2) is the end-call-within-10-seconds duty; parallel hours text ~19.158.040(2)). |
| Telemarketing / SMS / email | California Pub. Util. Code §2875 (ADAD) | State statute | GOV | CA | All | Monitor | Attorney | <https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=2875.&lawCode=PUC> | CA's principal time-related telemarketing restriction (automatic dialing-announcing devices); CA has no general time-of-day statute for live solicitation. Confirm exact section/applicability with counsel. |
| Privacy / data | WA My Health My Data Act (RCW 19.373) + CPA (RCW 19.86) | State statute | GOV | WA | All | Critical | Attorney / Web | <https://app.leg.wa.gov/RCW/default.aspx?cite=19.373&full=true> | Opt-in consent for "consumer health data"; standalone health-data privacy policy w/ prominent homepage link (§19.373.020); geofencing ban within 2,000 ft of health-care facilities (§19.373.080); per se CPA violation + private right of action, treble up to $25k (§19.373.090). Most aggressive regime for health-related lead forms. Attorney drafts policy; Web places link. |
| Privacy / data | Oregon Consumer Privacy Act (ORS 646A.570–589) | State statute | GOV | OR | All | Applicable | Attorney / Web | <https://www.doj.state.or.us/consumer-protection/id-theft-data-breaches/privacy/> | OR DOJ enforcement, no private right of action; penalties up to $7,500/violation. Universal opt-out/GPC mandatory 1/1/2026; cure period ended 1/1/2026. Insurer/producer carve-outs may reduce applicability. |
| Privacy / data | California CCPA/CPRA (Civil Code §1798.100 et seq.) | State statute + regulator | GOV | CA | All | Applicable | Attorney / Web | <https://cppa.ca.gov> | CPPA + CA AG enforce. New ADMT/risk-assessment/cybersecurity-audit regs eff. 1/1/2026, phased: risk assessments comply 1/1/2026 (first docs to CPPA 4/1/2028); ADMT comply 1/1/2027; cybersecurity-audit first certs 4/1/2028 (>$100M), 4/1/2029 ($50–100M), 4/1/2030 (<$50M). Threshold-dependent (confirm size triggers); CalOPPA row below applies regardless of size. |
| Privacy / data | CalOPPA — California Online Privacy Protection Act (Bus. & Prof. Code §§22575–22579) | State statute | GOV | CA | All | Applicable (no threshold) | Attorney / Web | <https://leginfo.legislature.ca.gov/faces/codes_displayText.xhtml?division=8.&chapter=22.&lawCode=BPC> | In force since 2004 (AB 370 amend. eff. 1/1/2014); NOT superseded by CCPA. No revenue/volume threshold — applies to any commercial site collecting PII from CA residents (the lead form does). Requires a conspicuously posted privacy policy: PII categories collected, third-party sharing, review/change process, change-notification method, effective date; + Do-Not-Track & cross-site-tracking disclosures (§22575(b)(5)-(7)). CA AG enforces via UCL §17200/§17206 (up to $2,500/violation); 30-day cure after notice. Attorney drafts; Web ensures conspicuous link. |
| Privacy / data | Nevada NRS 603A (SB 220 opt-out + SB 370 health data) | State statute | GOV | NV | All | Applicable | Attorney | <https://www.leg.state.nv.us/nrs/nrs-603a.html> | Opt-out-of-sale (SB 220) + consumer-health-data (SB 370, eff. 3/31/2024): opt-in consent; geofencing ban within 1,750 ft of in-person health-care facilities (NRS 603A.540); entity-level GLBA/HIPAA exemptions; AG enforcement, no private right of action, penalties up to $5,000/violation (AB 373 raised the DTP cap to $15k/willful — NRS 598.0999(2); which figure governs 603A-CHD enforcement is open, see 5.27; needs-fresh-fetch). Consumer-request clocks: deletion within 30 days binding the regulated entity itself (NRS 603A.515(1), not processors-only); downstream +30 days (.515(2)); response 45+45 (NRS 603A.510); archived/backup deletion delay up to 2 years (.515(3)). |
| Privacy / data | Georgia — NO comprehensive privacy law | State law status | GOV | GA | All | Applicable | Attorney | <https://gov.georgia.gov/press-releases/2026-05-11/gov-kemp-signs-legislation-lowering-taxes-and-supporting-economic-growth> | Georgia has NO comprehensive consumer privacy law. SB 111 carried the "Georgia Consumer Privacy Protection Act" title, but the House substituted in rural-hospital tax-credit text and did not restore the privacy text; Act 462 (signed 5/11/2026, eff. 7/1/2026) amends O.C.G.A. §31-8-9.1 (rural-hospital tax credit) — no privacy provisions, no "Article 35 of Title 10," no thresholds. Stale trackers (LegiScan/TrackBill) still show the dead privacy caption; they do not control (Kemp signing release + Bloomberg Tax confirm). In force: breach notification O.C.G.A. §10-1-910 to -912 + GA AG UDAP (Fair Business Practices Act, below) + federal sectoral (HIPAA/GLBA). Watch the 2027 session. |
| Privacy / data | Georgia Fair Business Practices Act (O.C.G.A. §10-1-390 to -408) | State statute | GOV | GA | All | Applicable | Attorney | <https://law.justia.com/codes/georgia/title-10/chapter-1/article-15/> | GA's primary UDAP tool and the backstop in a state with no comprehensive privacy law. GA AG Consumer Protection Division enforces; individual private right of action (§10-1-399) but class/representative actions barred; 30-day pre-suit demand notice; 2-yr SOL. Reaches misleading insurance/Medicare marketing + lead-gen misrepresentation. GA is a launch state. Official-code path still to be pinned (Justia stand-in) — see EXT follow-up. |
| Privacy / data | Tennessee Information Protection Act (T.C.A. §§47-18-3301–3315) | State statute | GOV | TN | All | Applicable | Attorney | <https://law.justia.com/codes/tennessee/title-47/chapter-18/part-33/section-47-18-3301/> | Comprehensive privacy law eff. 7/1/2025 (HB1181 / SB0073, 2023 Public Chapter 408); NIST-framework affirmative defense (§47-18-3314); exclusive AG enforcement, no private right of action; 60-day cure period is PERMANENT (no sunset); civil penalties up to $7,500/violation, treble to $22,500 for knowing/willful (§47-18-3313). $25M revenue + volume thresholds (brokerage likely below); TN exempts licensed insurers at the entity level. **Citation settled — do not re-open:** cite the CODIFIED §§47-18-3301–3315 (enforcement/cure §47-18-3313), NOT §47-18-3201–3213. The 3201 numbers are the ENROLLED-BILL numbering, renumbered into the 3301 series at codification because §§47-18-3201–3205 was the (now-repealed) Booting Consumer Protection Act; some trackers still cite the enrolled 3201 numbers and Justia/FindLaw show a stale "Vehicle Immobilization" part-heading over the TIPA sections — both are artifacts, not authority. Tiebreaker-confirmed 2026-06-10 vs the enrolled bill + TN AG guidance; counsel confirm vs the LexisNexis official code at sign-off. |
| Privacy / data | HIPAA — HHS OCR | Federal statute/regulator | GOV | National | All | Low | Attorney | <https://www.hhs.gov/hipaa/index.html> | Applies if a party handles PHI from carriers/plans. Low for a no-PHI brochure site; rises if portal/PHI intake added. |
| Privacy / data — health data | FTC Health Breach Notification Rule (16 CFR Part 318) | Federal rule | GOV | National | All | Monitor | Attorney | <https://www.ecfr.gov/current/title-16/chapter-I/subchapter-C/part-318> | 2024 amendments (89 FR 47054, eff. 7/29/2024) extend the Rule to non-HIPAA "vendors of personal health records," "PHR related entities," and third-party service providers, expressly covering health apps/websites. A brokerage lead form most likely falls OUTSIDE "personal health record" scope (a PHR needs a multi-source draw + individual management), so LIKELY INAPPLICABLE — counsel-evaluate watch-row. Escalates if the site ever ingests on-site PHI/health data. Pairs with MHMDA / NV SB 370 + data-flow analysis. |
| Privacy / data — children/education | COPPA (16 CFR Part 312) & FERPA (20 U.S.C. §1232g; 34 CFR Part 99) | Federal statute/rule | GOV | National | All | Low | Attorney | <https://www.ftc.gov/business-guidance/privacy-security/childrens-privacy> | For the record. COPPA: not directed to children, no under-13 data — low; don't target minors via form/SMS. FERPA: N/A (no education records). |
| Consumer protection (advertising) | FTC Act §5 (15 U.S.C. §45) | Federal statute | GOV | National | All | Applicable | FMO / Attorney | <https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title15-section45&num=0&edition=prelim> | Bars unfair/deceptive acts; reaches misleading insurance/Medicare ads & lead-gen claims. |
| Consumer protection (advertising) | FTC Endorsement Guides (16 CFR 255) + Fake/AI Reviews Rule (16 CFR 465) | Federal guide + rule | GOV | National | All | Applicable | FMO / Attorney | <https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking> | Disclose material connections; no fake/incentivized-undisclosed or AI-fabricated reviews. Part 465 (eff. 10/21/2024) bans fake/AI reviews; direct eCFR: <https://www.ecfr.gov/current/title-16/chapter-I/subchapter-D/part-465> (89 FR 68077, 8/22/2024). Relevant to Google Reviews. |
| Consumer protection (advertising) | Generative AI / LLM-generated content | Practice area (FTC) | GOV | National | All | Conditional | FMO / Attorney | <https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking> | Agency may use LLMs for copy/images/video/code. FTC §5 + 16 CFR 465 govern accuracy & fabricated testimonials; FMO/counsel review AI marketing claims for substantiation; no AI-fabricated reviews/quotes. |
| Insurance licensing / market conduct | NAIC | Standard-setter (nonprofit) | NON-GOV | National | All | Reference | FMO | <https://content.naic.org/model-laws> | 501(c)(3) of state commissioners; not a regulator, but model rules underlie state advertising/unfair-trade rules. Verify current name/activity of any "Improper Marketing of Health Plans" working group before relying (unconfirmed as of 6/2026). |
| Insurance licensing / market conduct | NAIC Advertisements of Accident & Sickness Insurance Min. Standards Model Act | Model rule | NON-GOV | National | All | Reference | FMO | <https://content.naic.org/model-laws> | Model act behind state insurance-ad content rules (truthfulness, required disclosures, no misleading comparisons). Map each state's adoption (see WA WAC 284-50 below for WA's enacted version). See also Ad of Medicare Supplement + Unfair Trade Practices model acts. |
| Insurance licensing / market conduct | WA insurance advertising rules — Chapter 284-50 WAC | State rule | GOV | WA | All | Applicable | FMO / Attorney | <https://app.leg.wa.gov/wac/default.aspx?cite=284-50> | WA's ENACTED adoption of the NAIC accident-&-sickness advertising standards — the operative rule, vs. NAIC Model #40 (not law). Advertising judged by overall impression; plan-identification + required disclosures; no implied government affiliation. Controls for a TPMO whose entire site is advertising. OR/CA/NV/GA/TN enacted equivalents NOT yet identified — EXT follow-up. |
| Insurance licensing / market conduct | WA Office of the Insurance Commissioner (OIC) | State regulator | GOV | WA | All | Critical | FMO / Agency | <https://www.insurance.wa.gov> | Producer/agency licensing; market-conduct review of sales/ads; anti-rebating/inducement. |
| Insurance licensing / market conduct | Oregon DFR (DCBS) | State regulator | GOV | OR | All | Critical | FMO / Agency | <https://dfr.oregon.gov> | Producer advertising & conduct rules. Parent: DCBS. |
| Insurance licensing / market conduct | California Dept. of Insurance (CDI) | State regulator | GOV | CA | All | Critical | FMO / Agency | <https://www.insurance.ca.gov> | Producer advertising & conduct rules. |
| Insurance licensing / market conduct | Nevada Division of Insurance | State regulator | GOV | NV | All | Critical | FMO / Agency | <https://doi.nv.gov> | Producer advertising & conduct rules. |
| Insurance licensing / market conduct | Georgia OCI | State regulator | GOV | GA | All | Critical | FMO / Agency | <https://oci.georgia.gov> | Producer advertising & conduct rules; administers Georgia Access. |
| Insurance licensing / market conduct | Tennessee Dept. of Commerce & Insurance (TDCI) | State regulator | GOV | TN | All | Critical | FMO / Agency | <https://www.tn.gov/commerce/insurance> | Producer advertising & conduct rules. |
| Accessibility / web standards | DOJ — ADA Title III | Federal statute/regulator | GOV | National | All | Applicable | Web / Attorney | <https://www.ada.gov> | Public-accommodation accessibility for commercial sites; no fixed private-sector WCAG deadline but real litigation risk — WCAG 2.2 AA is the defensible target. 2024 DOJ web rule binds Title II (state/local govt) only at WCAG 2.1 AA; DOJ 4/20/2026 IFR extended Title II dates (4/26/2027 / 4/26/2028) — doesn't change private-sector duties. |
| Accessibility / web standards | W3C WCAG 2.2 AA | Standard | NON-GOV | Intl | All | Reference | Web | <https://www.w3.org/WAI/standards-guidelines/wcag/> | Target standard + defensible ADA Title III benchmark. |
| Accessibility / web standards | Section 508 · AODA · EN 301 549 (considered — N/A) | Federal/foreign standards | Mixed | US / ON / EU | All | Low | Web | <https://www.section508.gov> | For the record. Section 508 (29 U.S.C. §794d) binds federal agencies & their contractors only — N/A to a private brokerage. AODA = Ontario, Canada only — N/A. EN 301 549 = EU standard referenced by the EAA; satisfied by the existing WCAG 2.2 AA build. |
| Foreign / EU | GDPR (Regulation (EU) 2016/679) | EU regulation | GOV | EU | All | Reference | Attorney | <https://eur-lex.europa.eu/eli/reg/2016/679/oj> | Does NOT apply in any of the 6 operating states — listed only for possible inbound EU web traffic. In force 25 May 2018. Art. 3: reaches a US business only if it targets/offers goods-services to, or monitors, people in the EU; a US-audience brochure not targeting the EU is out of scope; mere reachability doesn't trigger it. Generic privacy-policy clause suffices; no EU-specific banners. |
| Foreign / EU | European Accessibility Act (Directive (EU) 2019/882) | EU directive | GOV | EU | All | Reference | Web | <https://commission.europa.eu/strategy-and-policy/policies/justice-and-fundamental-rights/disability/european-accessibility-act-eaa_en> | Does NOT apply in any of the 6 operating states — listed only for possible inbound EU web traffic. Adopted 17 Apr 2019; applies from 28 June 2025 to specified EU-market consumer products/services (e-commerce, banking, telecom, transport, e-books) and only to operators offering them in the EU. Brochure-only US site not selling covered services in EU = out of scope (microenterprise carve-out <10 staff / <€2M would also apply). Conformance measured vs EN 301 549 (refs WCAG 2.1 AA); existing WCAG 2.2 AA build substantially satisfies it. |
| Referral / non-regulatory | State Health Insurance Assistance Programs (SHIPs) | Referral resource | HYBRID | National + 6 states | Medicare | Reference | FMO | <https://www.shiphelp.org> | ACL/HHS-funded; delivered via state agencies/AAAs/nonprofits; referral resource, not a regulator. SHIP dropped from disclaimer from 10/1/2026 (CY2027). State programs: WA SHIBA, OR SHIBA, CA HICAP, NV MAP, GA GeorgiaCares, TN SHIP. Re-verify URLs at sign-off. |
| Enforcement (cross-cutting) | State Attorneys General — WA, OR, CA, NV, GA, TN | State enforcers | GOV | 6 states | All | Critical | Attorney | — | Primary enforcers of state privacy/UDAP/mini-TCPA: WA AG (MHMDA, CEMA), OR AG/DOJ (OCPA, HB 3865), CA AG + CPPA (CCPA/CPRA, CalOPPA via UCL), NV AG/Consumer Affairs (SB 370, NRS 603A), GA AG (Fair Business Practices Act + breach law; GA has NO comprehensive privacy law), TN AG (TIPA, consumer-protection act). Several regimes are AG-only (no private right of action); MHMDA and WA CEMA carry private rights of action. |
| Enforcement (federal) | Consumer Financial Protection Bureau (CFPB) | Federal regulator | GOV | National | All | N/A | Attorney | <https://www.consumerfinance.gov> | **For the record — generally N/A to the business of insurance** (McCarran-Ferguson; the CFPB's authority excludes the business of insurance). Could touch ancillary consumer-finance products only, not insurance sales. Listed so its absence is intentional, not an oversight. |
| Telemarketing / SMS / email | Oregon telephonic seller registration | State requirement | GOV | OR | All | Applicable | Agency / Attorney | <https://www.doj.state.or.us/consumer-protection/> | Oregon requires telephonic sellers to register with the OR DOJ (separate from HB 3865 calling-hour limits). Confirm applicability to the agency's outbound-text/call practices. |
| SMS carrier / messaging | CTIA Messaging Principles + The Campaign Registry (A2P 10DLC) | Industry / contractual | NON-GOV | National | All | Applicable | Agency / Web | <https://www.campaignregistry.com/> | NOT statutes — carrier/ecosystem rules that gate SMS deliverability + campaign-suspension risk. Register brand + campaign (10DLC); the campaign description must match the actual opt-in; honor STOP/HELP; no sharing/selling of opt-in data. Intulse (the SMS provider) is the CSP; registration runs through the Intulse Account Center with J&R completing the brand + campaign forms (confirmed 2026-06-11 — not the CRM), but the brand stays responsible. |
| Insurance licensing / market conduct | CA Ins. Code §1725.5 (license-number display) | State statute | GOV | CA | All | Applicable | Agency / Attorney | <https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=1725.5.&lawCode=INS> | Requires the producer license number on business cards, written price quotations, print (paper) ads distributed exclusively in CA, and — since 1/1/2023 (subsec. (c)) — EMAILS involving licensed activity (sized ≥ the largest phone/address/email shown). Per the statute + CA DOI Bulletin 96-08, "print advertisements" = paper; it does NOT mandate website display. Website display is optional best practice; the live obligation here is on the agency's emails to CA leads. |
| Data security / GLBA | GLBA (15 U.S.C. §6801 et seq.) + FTC Safeguards Rule (16 CFR 314) vs. state insurance data-security | Federal + state | GOV | National + 6 states | All | Applicable | Attorney / Agency | <https://www.ftc.gov/business-guidance/privacy-security/gramm-leach-bliley-act> | Insurance agencies are GLBA "financial institutions," but GLBA uses functional regulation: for the business of insurance the operative regime is usually the STATE insurance data-security law (NAIC Insurance Data Security Model Law as adopted), enforced by the DOI — not necessarily the FTC Safeguards Rule. Counsel confirms which applies (state-only, or both); don't assume a single regime. Drives privacy-notice posture + safeguards. |
| Dispute resolution | Federal Arbitration Act (9 U.S.C. §§1–16) | Federal statute | GOV | National | All | Applicable | Attorney | <https://uscode.house.gov/view.xhtml?path=/prelim@title9/chapter1&edition=prelim> | Load-bearing for Terms §13 — governs enforceability of the binding individual-arbitration agreement, class-action waiver, 30-day opt-out, and carve-outs. |
| Contracts / e-commerce | E-SIGN Act (15 U.S.C. §7001 et seq.) | Federal statute | GOV | National | All | Applicable | Attorney / Web | <https://uscode.house.gov/view.xhtml?path=/prelim@title15/chapter96&edition=prelim> | Load-bearing for Terms §5 + the Contact clickwrap — electronic records/signatures carry the same legal effect as writings; supports the clickwrap-assent architecture. |
| Data security / health data | MHMDA §19.373.050 & §19.373.060; NV NRS 603A.525 | State statute | GOV | WA, NV | All | Applicable | Attorney / Agency / Web | <https://app.leg.wa.gov/RCW/default.aspx?cite=19.373&full=true> | Consumer-health-data security duties: restrict internal access + reasonable admin/technical/physical safeguards (§050); REQUIRED processor contracts binding processors to the policy + instructions (§060). NV 603A.525 parallels. Maintain a vendor/data-flow map (Cloudflare, CRM, form, phone/SMS, email, FMO tools) with processor/service-provider/BAA/TPMO flow-downs as applicable. |
| Breach notification | State breach-notification laws — WA/OR/CA/NV/GA/TN | State statutes | GOV | 6 states | All | Applicable | Attorney / Agency | — | Each operating state requires notice to affected residents (and often the state AG) after a breach of personal information, on varying timelines/thresholds. GA: O.C.G.A. §10-1-910 to -912. Build a 6-state breach matrix + incident-response plan (intake, vendor-notice deadlines, evidence preservation, comms approval). No single canonical URL — see each state AG. |

## Citation keys

Page-annotation `src:` keys resolve to rows in the table above by the row's Name / Reference (match the closest short token, e.g. `caloppa` → the CalOPPA row, `cms-2267` → the §422.2267 row, `nv-603a` → the NV NRS 603A row). Inline narrowing rides on the key: a `§…` pinpoint (`caloppa §22575(b)(1)`) or a parenthetical (`ca-sb694 (eff 1/1/2027)`) scopes within the row, it does not name a new one. This is a lightweight resolver rather than an added key column on every row — the table was reseeded fidelity-verified, and hand-keying ~75 rows risked introducing a mismatch, so keys are matched on the row text. If a key is ambiguous, the row Name / Reference is authoritative.

New rows (2026-06-10) and their disambiguating keys: `ga-fbpa` → the Georgia Fair Business Practices Act row (distinct from `ga-sb111`, which points at the GA no-comprehensive-law row); `va-seal-civil` / `38cfr1.9` → the 38 CFR §1.9 row (civil companion to the 18 U.S.C. §701 row); `tn-tpuc-reg` / `tn-65-4-401` → the TN solicitor-registration row (distinct from the §47-18-1526 conduct row); `wa-wac-284-50` → the WA insurance-advertising row; `hbnr` / `16cfr318` → the FTC Health Breach Notification Rule row.

Keys that deliberately have NO regulatory row:
- `gen` — general legal-aware drafting with no single controlling authority (boilerplate, structure, plain-language framing).
- `copyright`, `tm`, `cc-by`, `noun`, `unsplash`, `pexels`, `pixabay` — copyright / trademark / image-license pointers handled on the Credits page, not regulatory sources.

Special case — `ga-sb111`: this key is retained so the Georgia annotations resolve, but it points at the GA row as **reframed** (Act 462 = a rural-hospital tax-credit statute, O.C.G.A. §31-8-9.1; the privacy bill died). It does NOT denote an in-force GA privacy statute. See Locked decisions and `<flagged-items>` `ga-comprehensive-law`. The FCC src-key split is also locked: `fcc-1to1-vacated` (dead), `fcc-da26-12` (in-force revoke-all), and `cms-2274` (surviving CMS one-to-one) are three distinct keys and must not be re-merged.

</tpmo-regulatory-compliance-authoritative-sources>

<website-partner-legal-canonical-sources>

# Website Partner Legal — Canonical Sources

Per-vendor operative legal sources for the website's data stack. Captured per a 2026-06-09 sourcing pass; treat every URL, version, and effective date as captured-as-of and UNVERIFIED — re-fetch and date-stamp at reliance (same posture as the regulatory authority table). Several entries are post-cutoff or version-sensitive (Cloudflare DPA v6.4 eff. 2026-04-03; AgencyBloc ToS eff. 2026-03-19) and were sourced by an external pass, not independently fetched here, so live URL re-verification rides with the partner-URL secondary pass (handoff doc). Whether a given DPA/BAA/term binds J&R's specific plan or contract — and whether MHMDA §060 (RCW 19.373) / NV NRS 603A.525 processor-binding requirements are met — is a counsel determination. Several vendor "HIPAA compliant"/"HITRUST" statements are marketing-page assertions; request and review the underlying SOC 2 reports, HITRUST certificates, and BAAs before relying.

**The lens.** For a processor relationship the load-bearing documents are the **customer/master agreement, the DPA, and the subprocessor list** — NOT the vendor's own marketing-site privacy policy or website terms (those govern visitors to the vendor's site, not J&R as a customer). Visitor-facing policies are demoted to the style-reference appendix. Each entry names its single most load-bearing document.

**Markers.** `[OPEN]` = a still-missing operative document that must be obtained (no public source, or account/console-gated). `[DECISION]` = a J&R business/legal decision that changes what the entry should say (do not pre-resolve; keep flagged). The prior pass's `[add]`/`[pin]` gaps are now resolved or converted to `[OPEN]`/`[DECISION]`.

*Entry shape: customer/master agreement · DPA · subprocessor list · product-specific terms (if any) · security/trust · most load-bearing · Maps to.*

## AgencyBloc · CRM + lead-form intake processor (receives submitted lead data)
*Most load-bearing vendor in the stack, and the one with the least public documentation.*
- Flow: the lead form POSTs to an AgencyBloc URL via a form action J&R controls; no AgencyBloc widget or `<script>` on J&R pages, so no AgencyBloc cookie/JS on the domain. Receives submitted lead data only.
- Customer/master agreement: Terms of Use — <https://www.agencybloc.com/about-us/terms-of-use/> (eff. 2026-03-19; AgencyBloc, LLC; Iowa law). Supplements a separate **non-public Subscription Agreement** that controls on conflict.
- DPA: **[OPEN] no public DPA located** — request directly.
- Subprocessor list: **[OPEN] not public** (the privacy policy withholds data-center locations) — request it.
- BAA / HIPAA: **[OPEN] no public BAA**; the security page asserts SOC 2 Type II only, while HIPAA/HITRUST claims sit on a marketing page — request the executed BAA + the underlying SOC 2 report / HITRUST certificate.
- Security/trust: <https://www.agencybloc.com/about-us/security/>
- Most load-bearing: the **non-public Subscription Agreement + signed BAA + DPA** — #1 vendor action; required for MHMDA §060 / NV 603A.525 processor-binding terms.
- Maps to: 3.6 (DPA) · 3.7 (own-use) · 5.16 / N11 (consent record) · 5.5
- Demoted (appendix): visitor privacy policy.

## Intulse · VoIP + SMS processor
- Customer/master agreement: Master Services Agreement — <https://intulse.com/legal/master-services-agreement>; Unified Communications Service Agreement — <https://intulse.com/legal/unified-communications-service-agreement>
- DPA: **[OPEN]** Intulse offers **no DPA as a standard or named instrument at any tier** and refuses client-supplied agreements (Contract Acceptance Policy), so J&R cannot impose its own. Closest binding analog = **MSA §16 (Data Sharing & Confidentiality)**: no sale of Client Data, US-only storage, encryption in transit + at rest, no retention of third-party integration (CRM) data beyond integration need, survives termination — supported by the Data Security Policy, the Unified Communications Privacy Policy (legal hub, <https://intulse.com/legal/>), and the Trust Center "No AI Training on Client Data" commitment. A real DPA would still add a breach-notification SLA, audit rights, and explicit deletion/return-on-termination (SCC / intl-transfer mooted by US-only storage). Residual: a "rare circumstances" exception may permit a bespoke Intulse-issued DPA (request-only, possible legal-review fee) — UNVERIFIED. Captured-as-of 2026-06-10; re-fetch at reliance. Defensible claim: no DPA as a standard/named instrument, NOT that none could ever exist.
- Subprocessor list: Trust Center (<https://intulse.com/trust>) names **Vultr** (hosting), **Equinix** (data center), and **Backblaze** (storage); also asserts SOC 2 Type II + PCI DSS. Captured-as-of 2026-06-10; re-fetch at reliance. (Supersedes the earlier "none located"; the 2024 Data Security Policy named only Equinix — the current Trust Center list controls.)
- Product-specific terms: SMS Terms of Service & Privacy Policy — <https://intulse.com/legal/sms-terms-of-service-privacy-policy> (updated 2024-11-26; covers 10DLC, STOP/START/HELP). Contract Acceptance Policy — <https://intulse.com/legal/contract-acceptance-policy>: Intulse uses its own standardized agreements and **will not sign client-provided agreements**, and states its standard terms cover HIPAA — bears on custom-BAA feasibility and on whether any PHI may route through it (3.7, sms-consent-scope).
- Supplied SMS website verbiage (received via J&R 2026-06-11; templates per the 10DLC guide below — adaptation allowed; placeholders unfilled; reconciliation: sms-consent-scope / N7): **Privacy clause** — "Text message opt-in data and consent are not shared with any third parties (including subsidiaries and affiliates). If you wish to be removed from receiving future communications, text STOP to opt out." **SMS Terms block** — "You agree to receive customer care, account notification, and marketing messages from J&R Health Insurance. Message frequency will vary. Message and data rates may apply. Carriers are not liable for delayed or undelivered messages. You can cancel SMS service at any time. Just reply STOP. Once you reply STOP to us, we will send a message to confirm that you have been unsubscribed. After this, you will no longer receive SMS messages from us. If you want to join again, just sign up as you did the first time and we will start sending SMS messages to you again. If you are experiencing issues with the messaging program you can reply with the word HELP for more assistance, or you can get help directly at {SUPPORT EMAIL}. If you have any questions regarding privacy, please read our privacy policy here. {DIRECT LINK TO PRIVACY POLICY}" **Checkbox disclaimer** — "By submitting this form and signing up for texts, you consent to receive customer care, account notification, and marketing text messages from J&R Health Insurance at the number provided. Consent is not a condition of purchase. Msg & data rates may apply. Msg frequency varies. Unsubscribe at any time by replying STOP. Reply HELP for help. Privacy policy {LINK} and Term & Conditions {LINK}"
- 10DLC registration requirements (Intulse guide — <https://support.intulse.com/articles/10dlc-registration>; captured-as-of 2026-06-11, re-fetch at reliance): the guide's verbiage blocks are samples/templates (a "starting point" covering minimums), so adaptation is allowed; the binding constraints are the required opt-in element set (consent + brand name + use-case message types + frequency-varies + msg-and-data-rates + HELP + STOP + Privacy and Terms links) and that the opt-in carries the EXACT words of the registered use case. The privacy policy must state opt-in data is not shared with third parties for THEIR direct marketing, plus how to opt out; an opt-in checkbox is required anywhere the site collects a phone number; opt-in must be one-to-one, never implied, never buried in the Terms. Carrier review is manual against the live site; the brand name + EIN must match tax documents exactly and the brand info must match the website; one brand per EIN; support email/phone must be domain-based and shown on the Contact page. Fees/locks: $8 brand, $20 per campaign submission AND per rejected resubmission, $3–15/mo per campaign, 3-month TCR lock on submission even if denied; the use case CANNOT be changed once the campaign is created. Vetting is optional (unvetted limits — 2,000/day T-Mobile, 75 TPM AT&T — exceed J&R's volume). Use-case menu: Customer Care / Account Notification / Marketing are standard; Mixed and Low Volume Mixed take 2–5 sub-use-cases; Intulse-approved conversational UCaaS (Low/High) is a special use case barred from mass messaging. NEVER-allowed use cases include "3rd party lead generated services" (campaign-lead-path). Sample messages must match the use case, name the brand, include at least one with opt-out language, one per type if Mixed; embedded links must be declared and appear in a sample (no public URL shorteners); opt-in/opt-out/HELP confirmation texts are auto-populated for review; a verbal opt-in path is registrable with consent captured on a recorded line (call-recording-consent). Operational checklist: 10dlc-registration-readiness.
- Most load-bearing: the **MSA / UC Service Agreement**, plus the **SMS Terms** for the texting flow.
- Maps to: 3.7 · 3.27 (interim SMS exposure) · sms-consent-scope / N7 · 10dlc-registration-readiness · 5.5
- Demoted (appendix): website privacy policy, website terms & conditions.

## Cloudflare · Pages host + DNS + cookieless analytics (registrar migration in progress); possible Turnstile
- Customer/master agreement: Self-Serve Subscription Agreement — <https://www.cloudflare.com/terms/>
- DPA: <https://www.cloudflare.com/cloudflare-customer-dpa/> (canonical HTML; current version v6.4, effective 2026-04-03, supersedes v6.3 / 2025-06-20). Commits Cloudflare to maintaining the subprocessor list (below) + at least 30 days' notice before a new subprocessor begins processing. Rev 12 adds (Validator package 2026-06-12): v6.4 re-confirmed live, no v6.5 observed; product docs renamed "Service-Specific Terms" (ex-"Supplemental"; page last-updated 2026-06-09); capture-grade PDF asset for the v6.4 instrument at cf-assets.www.cloudflare.com (path as captured in the package — re-fetch at reliance).
- Subprocessor list: <https://www.cloudflare.com/gdpr/subprocessors/>
- Product-specific terms: Domain Registration Agreement — <https://www.cloudflare.com/domain-registration-agreement/> (governs the IONOS→Cloudflare registrar migration; incorporates the Subscription Agreement); Registrar Terms — <https://www.cloudflare.com/registrar-terms/> — verify currency; demote if stale (the Domain Registration Agreement may make the older Registrar Terms redundant in the active register). **[DECISION]** Turnstile (only if enabled): cookieless, covered by the **same Cloudflare DPA** (no separate Turnstile DPA); disclosure responsibility sits with the site operator — add a one-line disclosure if turned on.
- Most load-bearing: the **DPA + subprocessor list**.
- Maps to: 1.7 / N1 (cookie config) · 5.3 (change-control if analytics/Turnstile turn on) · 5.5
- Demoted (appendix): website terms (expressly N/A to customers under the Subscription Agreement), visitor privacy policy.

## Web fonts · self-hosted (Bunny dropped) — resolved 2026-06-10
- Web fonts are self-hosted; the Bunny Fonts external dependency was dropped. This removes the third-party font request that transmits the visitor's IP to Bunny (an EU subprocessor) by technical necessity, deleting a vendor, a cross-border flow, and a data-flow-map entry — the cleaner posture for the consumer-health-data footprint, and the reason the decision went to self-host rather than retain.
- No partner DPA/GDPR document is load-bearing here anymore (no third-party font host). Closes the Bunny half of 1.7 / N1.
- Maps to: 1.7 (no third-party request) · 5.5

## GitHub · private source repo + CI (GitHub Pages ruled out as host)
- GitHub Pages is ruled out as the static host (its commercial-use terms bar a business web presence). The canonical host is Cloudflare Pages (confirmed 2026-06-10); GitHub holds the private source repo and CI only. See company-facts Web for the legally-relevant properties.
- No processor obligation: the static host and the build/deploy pipeline process no lead or consumer data (the lead form POSTs directly to AgencyBloc), and the GitHub source repo stores only static site source with no lead PII. So no GitHub DPA/BAA is load-bearing, and the host is intentionally out of the 5.5 data-flow map.
- Maps to: company-facts Web.

## Google Workspace · email host (info@ mailbox; inbound lead/consumer PII; rights + accessibility intake)
- Customer/master agreement: Google Workspace Agreement — <https://workspace.google.com/terms/> (confirm the plan's exact variant). CAVEAT (rev 12): this legacy URL is reportedly dead (Open item 2); the current paid-tier agreement is likely workspace.google.com/terms/premier_terms/ — repoint after the V5/W10 ratification fetch, not before.
- DPA: Cloud Data Processing Addendum — <https://cloud.google.com/terms/data-processing-addendum> (single CDPA covers Workspace + Google Cloud + Cloud Identity); customer copy at <https://admin.google.com/terms/apps/8/2/en/dpa_terms.html>
- Subprocessor list: <https://workspace.google.com/terms/subprocessors/> (at least 30 days' notice; 90-day objection / terminate-for-convenience right).
- BAA / HIPAA: **[OPEN] execute the Workspace BAA in the Admin console** — info@ receives inbound consumer/lead email that may contain PHI.
- Most load-bearing: the **CDPA + Workspace BAA**.
- Maps to: 5.5 (email flow) · rights-posture (info@ intake)

## The Campaign Registry (A2P 10DLC) · business-identity data flow (activates when SMS goes live)
- Reference: <https://www.campaignregistry.com/>
- Role: brands cannot register directly; **Intulse acts as Campaign Service Provider (CSP)** — registration runs through the Intulse Account Center with J&R completing the brand + campaign forms (confirmed 2026-06-11 — not the CRM; reconciles the CTIA/TCR authority row). J&R business-identity data (legal name, EIN, address, contacts) flows to TCR via Intulse; carriers block unregistered traffic.
- Most load-bearing: governed through Intulse's MSA / SMS terms (above); no separate TCR agreement for J&R.
- Maps to: sms-consent-scope · 5.5

## Domain registrar · IONOS → Cloudflare Registrar (transitional)
- Both the losing and gaining registrars hold ICANN-required registrant / WHOIS data (name, address, email, phone). The Cloudflare Registrar role is governed by the Domain Registration Agreement (Cloudflare entry above). IONOS's role ends at transfer — retain IONOS registrant terms only until migration completes, then cut this note.
- Maps to: 5.5

## Advocate Health Advisors · FMO — cross-reference only (NOT a website data processor)
- CMS-compliance support + website-disclaimer sign-off authority; the FMO role lives in the authority table, the FMO lane, and Locked decisions. Pointer: compliance hub <https://www.advocatehealthadvisors.com/compliance>; Privacy & Security Policy PDF <https://www.advocatehealthadvisors.com/compliance/Advocate%20Health%20Privacy%20%26%20Security%20Policy.pdf> (PDF dated November 2021; confirm currency at reliance).
- Retained here only for the inbound-lead data-flow linkage (3.7a): confirm whether any CHD flows back to Advocate.
- Maps to: FMO lane · 3.7a

## Appendix — demoted style/drafting references (NOT operative processor docs)
Vendor website-visitor policies (govern people browsing the vendor's own marketing site), kept only as drafting examples:
- Cloudflare website terms — <https://www.cloudflare.com/website-terms/>; privacy policy — <https://www.cloudflare.com/privacypolicy/>
- Intulse website privacy policy — <https://intulse.com/legal/website-privacy-policy>; website terms — <https://intulse.com/legal/website-terms-conditions>
- AgencyBloc visitor privacy policy — <https://www.agencybloc.com/about-us/privacy-policy/>

## Open items (carry until closed)
1. **AgencyBloc** — obtain the Subscription Agreement + signed BAA + DPA + subprocessor list (3.6). *[highest priority]*
2. **Google Workspace** — execute the BAA in the Admin console; confirm the current customer-agreement URL (legacy workspace.google.com/terms reportedly dead) and that the CDPA is operative vs. the legacy admin.google.com copy (5.5, V5).
3. **Intulse** — (a) confirm whether any PHI / consumer-health-data actually routes through Intulse; this drives whether the absent formal DPA matters for MHMDA §060 / NV 603A.525 (if none does, MSA §16 + Trust Center commitments likely suffice — counsel confirms). (b) BAA is request-only on Intulse's own paper (businessoffice@intulse.com or the Trust Center request form); Intulse will not accept J&R's BAA. (c) Only if a formal DPA is required, invoke the "rare circumstances" exception in writing (expect a legal-review fee). (3.7, sms-consent-scope)
4. **Maintenance** — re-fetch + date-stamp all URLs at reliance; confirm DPA versions are still current (Cloudflare now v6.4 eff. 2026-04-03). Rides with the partner-URL secondary pass.

*Closed 2026-06-10: Bunny self-host-vs-retain → self-host (see the Web fonts entry above); Cloudflare DPA → v6.4; Intulse subprocessor list located (Trust Center) + Intulse "no standard/named DPA" characterization firmed (see Locked decisions).*

</website-partner-legal-canonical-sources>

<compliance-success-criteria>

## Success Criteria

The website is functionally compliant with every authority listed in <tpmo-regulatory-compliance-authoritative-sources>. This list is intentionally a high-level checklist of compliance **domains**, not a restatement of statute-level detail — for citations, thresholds, effective dates, and enforcing bodies, defer to <tpmo-regulatory-compliance-authoritative-sources> as the single source of truth. (Duplicating statute detail in two places is what produced the earlier Georgia inconsistency; authoritative detail lives in the table only.)

Each domain is marked with its weight for THIS risk profile: a Medicare/VA/ACA Third Party Marketing Organization running an SMS-followed-up lead form across WA/OR/CA/NV/GA/TN (launch-live: WA/OR/GA/TN; CA and NV pending licensure).

### Marketing & solicitation conduct (HIGH — core to a TPMO)
- **CMS Medicare marketing regime** — 42 CFR Part 422/423 Subpart V; the standardized TPMO disclaimer (§422.2267(e)); the Medicare Communications & Marketing Guidelines (MCMG); Scope of Appointment, Permission to Contact, and call-recording rules. FMO owns CMS sign-off.
- **SSA §1140 Medicare-name misuse** (42 U.S.C. §1320b-10) + **42 CFR §422.2262** — no false impression of government affiliation/endorsement; a disclaimer is necessary but is NOT itself a defense.
- **VA name/seal misuse + VA accreditation** — 38 CFR §1.9, 18 U.S.C. §701 (no implied VA endorsement; §701 is the correct insignia cite, not §709); 38 CFR Part 14 / 38 U.S.C. §§5901–5905 (only VA-accredited persons may assist with VA claims), now mirrored by CA SB 694 (eff. 1/1/2027).
- **FTC Act §5 + FTC Endorsement Guides (16 CFR 255) + fake/AI-reviews rule (16 CFR 465)** — directly engaged by heavy reliance on Google Reviews/Yelp; disclose material connections; no fabricated or undisclosed-incentivized reviews.
- **ACA marketplace agent/broker conduct** — 45 CFR §155.220 / §155.260 (documented consumer consent; no misleading conduct).
- **State insurance advertising & producer market-conduct** — each operating state's enacted insurance-advertising / unfair-trade-practice / producer-marketing rules. The NAIC *Advertisements of Accident & Sickness Insurance* Model #40 is the template (advertising judged by overall impression; no implied government affiliation; lead-gen devices must disclose an agent may contact) — it is NOT law itself; counsel confirms the enacted rules in WA/OR/CA/NV/GA/TN. Includes affirmative **license-number display where required**: CA Ins. Code §1725.5 mandates the license number on business cards, written price quotations, print (paper) ads, and **emails** involving licensed activity (subsec. (c), eff. 1/1/2023) — **NOT the website** per the statute's text + CA DOI Bulletin 96-08 (which limits "print advertisements" to paper). Website display is optional best practice, not a §1725.5 mandate.

### Telemarketing / SMS / email (HIGH — the lead form + SMS follow-up is the main liability surface)
- **TCPA + FCC rules** — because the agency texts/calls leads about coverage, lead follow-up is **telemarketing**, so capture proper consent (prior express written consent for marketing messages), keep an auditable consent record, honor revocation by any reasonable means within 10 business days, and do NOT implement the (vacated) FCC one-to-one rule. One unchecked-by-default checkbox + phone number is the classic TCPA fact pattern — get the consent capture and audit log right.
- **CMS beneficiary-data-sharing consent (42 CFR §422.2274)** — distinct from the vacated FCC one-to-one rule and still in force: Medicare beneficiary data a TPMO collects may be shared with another TPMO only with PEWC that identifies each recipient. The agency captures leads for **first-party use only**, so the sharing trigger isn't hit — but if leads are ever shared with the FMO/other TPMOs, this applies (flag for attorney/FMO).
- **FTC Telemarketing Sales Rule (16 CFR 310) + National DNC** — outbound-call operations: prompt seller-identity & sales-purpose disclosures, calling-hour limits, caller-ID transmission, entity-specific DNC + National DNC scrubbing, abandonment/prerecorded-call controls. Insurance sits at the TSR / state-insurance boundary — counsel confirms applicability and any exemption.
- **A2P 10DLC / CTIA carrier messaging** — brand + campaign registration via The Campaign Registry and alignment with CTIA Messaging Principles (frequency/STOP/HELP, no sharing or selling of opt-in data). Carrier/contractual layer, not statute, but it gates SMS deliverability and campaign-suspension risk; Intulse (the SMS provider) is the CSP — registration runs through its Account Center with J&R completing the forms (confirmed 2026-06-11 — not the CRM), but the brand is still responsible.
- **State mini-TCPA / calling-window / telemarketer-registration laws** — the operational calling/texting window is 9 a.m.–8 p.m. recipient-local (NV floor, WA/OR ceiling; per-state hours and cites live in the authority table); WA CEMA now covers texts; Oregon HB 3865 + Oregon telephonic-seller registration; Nevada / Tennessee / Georgia (TN registration; GA no damages cap + vicarious liability).
- **CAN-SPAM** — applies if/when the agency sends commercial email.

### Privacy — consumer health data (HIGH — no revenue threshold; the lead form likely triggers these)
- **WA My Health My Data Act (RCW 19.373)** — standalone consumer-health-data policy with its own distinct, prominent **homepage** link; opt-in consent; geofencing ban; per se Consumer Protection Act violation WITH a private right of action.
- **Nevada SB 370 (NRS 603A)** — consumer-health-data policy; separate opt-in consents; geofencing ban; AG-enforced (no private right of action).

### Privacy — general (MEDIUM — posture/transparency; thresholds likely not met today)
- **CalOPPA** (no threshold — a posted privacy policy is required for any site collecting PII from Californians) and **CCPA/CPRA** (threshold-dependent; agency likely below).
- **Oregon OCPA, Tennessee TIPA** — threshold-dependent (TIPA additionally exempts licensed insurers at the entity level); honored defensively via a multi-state rights clause + GPC.
- **GLBA financial privacy** — insurance is GLBA-covered; drives both notice posture and the exemptions other privacy laws grant.
- **GDPR — "soft"/silent** — US-audience brochure site is out of scope; a generic privacy-policy clause suffices; no EU-facing banner. (Validated: GDPR Art. 3 is not triggered by mere reachability.)
- **Accuracy of "no tracking / cookieless" claims** — verify the live Cloudflare Web Analytics + Turnstile configuration before stating the site is cookieless/tracker-free. Cloudflare Web Analytics is cookieless, but Turnstile **Pre-Clearance**, if enabled, can set a `cf_clearance` cookie, and `__cf_bm` (bot management) is a Cloudflare cookie. An unverified blanket "we don't track / no cookies" claim is itself a UDAP exposure — state what is actually true after checking the config.

### Data security, vendor management & breach readiness (HIGH — required by the health-data laws; an operational gap until built)
- **Vendor / data-flow map + processor contracts** — MHMDA §060 (RCW 19.373.060) and NV NRS 603A.525 require processor-contract terms and reasonable access limits for consumer health data. Maintain a vendor map and data-flow record (Cloudflare, the CRM SaaS, form handling, phone/SMS systems, email tools, FMO tools, future analytics/ad vendors) and the corresponding contract flow-downs (processor / service-provider / business-associate / TPMO terms, as applicable per flow).
- **Data-security regime determination** — confirm which applies: state **insurance data-security law** (NAIC Insurance Data Security Model Law as adopted in each operating state) vs. the **FTC Safeguards Rule** (16 CFR 314). GLBA uses functional regulation, so for a licensed insurance agency the state insurance regime is frequently the operative one — counsel confirms; do not assume only one regime applies. MHMDA §050 (RCW 19.373.050) also imposes its own security/access duties for consumer health data.
- **Breach-notification readiness** — a 6-state breach matrix (WA/OR/CA/NV/GA — incl. O.C.G.A. §10-1-912 — /TN) plus incident intake, vendor-notice deadlines, evidence preservation, and a communications-approval path.

### Health records privacy (LOW for this build — included for the record)
- **HIPAA** — static brochure site with no patient portal and no PHI ingestion; the optional lead form collects contact info + a free-text message, not medical records. Rises only if a portal/PHI intake is added (kept as a dormant HIPAA-notice scaffold). https://www.hhs.gov/hipaa/
- **COPPA** — site not directed to children; no knowing collection of under-13 data. **FERPA** — N/A (no education records). Both intentionally de-weighted vs. the marketing/SMS/health-data domains above (the majority of visitors are turning 65).

### Accessibility (HIGH litigation exposure; the build already targets the right standard)
- **WCAG 2.2 AA** — the website is being delivered to this standard by retained consultants (rigorous validation underway). This is the de facto **ADA Title III** benchmark; there is no fixed private-sector WCAG deadline, but litigation volume is high. https://www.w3.org/ · https://www.ada.gov/
- **Section 508 / EAA / EN 301-549 / AODA — "soft"/silent** — not triggered by a private US brochure site; the existing WCAG 2.2 AA build substantially satisfies them should they ever apply (EU/Ontario service or federal contracting).

### Content & media (MEDIUM)
- **Image/media licensing** — Creative Commons CC BY attribution; stock-license terms (Unsplash/Pexels/Pixabay need no attribution for standard downloads; Noun Project free tier does). Model/property-release risk is the agency's.
- **AI-generated content honesty** — FTC §5 / 16 CFR 465: keep internal records; never present AI output as a real testimonial/endorsement.

### Legal documents & disclaimers (gating)
- All required legal documents and disclaimers — and all content required within them — are created, reviewed, and signed off by licensed professionals (retained counsel for legal review; FMO for CMS-related disclaimers), and published as the legal <pages> in this working document. No go-live until that sign-off is on record.

</compliance-success-criteria>

</immutable-project-context-and-reference>
<mutable-working-content>
<roadmap>

After launch of the website in development for the agency described in <company-facts>, J&R may at some future point pursue the following. We keep a clear path ahead for each so it can be added without re-architecting:
- Expand into other state jurisdictions. Driven by the Supported-jurisdictions list in <build-conventions>: add a state there and every `jurisdiction = XX` gate follows. Each new state adds its own privacy / insurance-advertising / mini-TCPA surface to verify against the authority table.
- Expand into life insurance brokerage. A product line outside the current Medicare / health / ACA scope, with its own marketing and suitability rules — a new regulatory surface, not covered by the current CMS/TPMO framing. (Not currently planned — life/annuities are referred out; J&R 2026-06-11, roadmap-intent ✅. Dormant scaffold like 3.23.)
- Add a YouTube channel and embed videos on the site.
- Source media from premium catalogs (Getty Images, iStockPhoto, etc.).
- Within CMS-compliant constraints and with FMO guidance, commission creative and production consultants for campaigns spanning multiple marketing domains.
- Especially alongside FMO-managed targeted campaigns, use Google Tag Manager, Google Analytics, and Facebook Pixel for coordination. Each must be conditionally switchable on/off in the template, since usage may be temporary and sporadic.
- Use LLMs to generate media assets (images, video, audio, motion graphics).
- Hire human copywriters to evaluate, modify, or generate original page copy.
- Fork the legal pages into heavy and light variants selected by one switch, so a future tone re-calibration becomes a config flip rather than a one-time rewrite (terms-contract-heaviness resolved 2026-06-11: protective-and-formal elected, so the fork stays unbuilt). Likely starts with Terms; not planned, a heads-up only.

Compliance hooks for the above, so activating any of them is not treated as free:
- The on/off toggling of analytics/ad tools is the Switch-registry pattern in <build-conventions> — add the switch there, gate the template, and the decision lives in one place.
- Anything that adds a third-party script, cookie, pixel, or embed (GTM / GA / Facebook Pixel, a standard YouTube embed, a premium-media widget) breaks the current "no advertising or tracking cookies / cookieless" posture and trips the change-control checkpoint (flagged-items 5.2 / 5.3): update the Privacy Policy, add the vendor to <website-partner-legal-canonical-sources> with its DPA, and re-confirm the cookie claims. A privacy-preserving embed (e.g. youtube-nocookie) still adds a third-party request to disclose. For MHMDA/NV, any health-data-implicating tracker (Facebook Pixel especially — Pixel + consumer health data is a top FTC/MHMDA enforcement target) needs opt-in consent BEFORE it fires, and the privacy-copy toggle must be paired with the tracker switch so the two cannot drift (5.2).
- Premium-catalog, LLM-generated, and copywriter-produced media run through the Credits page attribution discipline (1.11) and the AI-content honesty bar (FTC §5 / 16 CFR 465): keep per-asset license/attribution records and never present AI or stock output as a real testimonial. Licensed premium media (Getty/iStock) typically forbids exposing the asset to AI-training crawlers, which conflicts with the deliberate allow-LLM-scraping-and-training posture — revisit the scraping posture per asset when such media lands (ai-crawlers).

</roadmap>

<config-parameters>

# Root-level config parameters — PLACEHOLDER (to be fleshed out later)

STATUS: stub. This block is the intended canonical home for the site's root-level configuration — the single source of truth for every binary/enumerated parameter that drives downstream conditional templating (gates, includes, dated text swaps). It is deliberately NOT fleshed out yet. Today the live values still sit in `<build-conventions>` (the Switch registry + the Supported-jurisdictions control); the job later is to formalize them into one root-level schema so no page, gate, or include ever reads config from more than one place.

BUILD MAPPING. In the Jekyll build this is the site-root config — `_config.yml` and/or `_data/` files (e.g. `_data/switches.yml`, `_data/jurisdictions.yml`) that templates read via Liquid. The gate markers and the `<licensed-states />` include resolve their conditions against these values. One definition each: a parameter is set here once and only read elsewhere.

WHAT IT WILL HOLD (categories; specifics deferred):
- **Boolean switches** — the on/off flags now in the Switch registry (sms_program_live, ship_in_tpmo_disclaimer, va_not_accredited, turnstile_enabled, referrals_page, shares_chd_with_brokers, carrier_logos_shown). Live values + meanings: `<build-conventions>` Switch registry.
- **Per-jurisdiction status** — the active/pending control now in `<build-conventions>` Supported jurisdictions (drives the `<licensed-states />` include + every `jurisdiction = XX` gate). Flips are event-driven (e.g. CA/NV pending → active on licensure).
- **Dated / scheduled flips** — parameters that change on a calendar date rather than a manual toggle (today: ship_in_tpmo_disclaimer ON → OFF on 2026-10-01). OPEN DESIGN QUESTION: the site is static, so a date-driven flip needs a defined mechanism — a build run on/after the date, a scheduled rebuild, or a manual flip with a calendar reminder. The verification pass confirms the dates these flips key off (handoff dated-items cluster, EXT 4.11); the SHIP flip has compliance teeth (2.2).

LINKED REFERENCES: `<build-conventions>` (Switch registry + Supported-jurisdictions control + the gate/include syntax that reads them) · `<licensed-states>` (renders from jurisdiction status) · `<flagged-items>` `config-schema` (WEB lane — the design/build task + the dated-flip-mechanism question).

TO FLESH OUT LATER (not in this thread): the formal schema (names, types, defaults, allowed values), the dated-flip mechanism, and the migration that makes THIS block the single definitional source, leaving `<build-conventions>` with only the syntax legend + a pointer here.

</config-parameters>

<build-conventions>

# Build conventions

How the review-doc markup maps to the Jekyll/Liquid build. Three constructs plus annotations.

## Syntax legend
- **Include (transclusion):** `<name />` renders the shared block defined as `<name>…</name>` in the immutable reference. Build → `{% include name.html %}`. In use: `<company-contact-info />` (renders identically wherever it appears — legal-page prose or footer).
- **Gate (conditional render):** `{# gate: <cond> #}` … `{# /gate #}` wraps content that renders only when `<cond>` holds. `<cond>` is a switch name (renders when ON) or `jurisdiction = XX` (renders for that state). The gate self-declares its own condition. Build → `{% if … %} … {% endif %}`. A reserved/empty gate (content not yet written, or switch OFF with nothing to show) is a single line: `{# gate: <switch> — reserved: <what renders when ON> (<ref>) #}`.
- **House style (page copy):** no em-dash connectors in consumer-facing page copy; use parentheses, colons, or separate sentences instead. Em dashes remain acceptable in annotations and register text, which never render. Adopted rev 14 from the 2026-06-12 de-slop pass; verbs and list grammar must stay correct in every gate state (see the CHD §7 recast).
- **governed-by:** annotation pointer for a section that always renders but whose wording/timing a switch controls (e.g. a dated text swap, or "not active yet" copy). State is NOT redeclared inline — it lives only in the Switch registry.
- **Annotation:** review metadata in fenced code blocks — `src` (authority keys → `<tpmo-regulatory-compliance-authoritative-sources>`), `flag` (open-issue keys → `<flagged-items>` flag index), `see` (cross-refs), `note` (additive only; never restates the flag/bucket). Build strips all annotation fences from the rendered HTML (see flagged-items Web lane / 2026-06-07 annotation-reformat note in history).

## Switch registry — the single config (flipping a switch here is the only decision point)
These switches + the Supported-jurisdictions control below are the site's binary config parameters; their intended canonical root-level home (the schema all templating reads from) is `<config-parameters>` — a placeholder for now, so the live values + meanings stay here until that schema is fleshed out.
| switch | state | gates | locked rationale / flip trigger |
|---|---|---|---|
| `sms_program_live` | OFF | Terms §6, Privacy §3/§4, Contact opt-in (copy reads "not active yet") | Flip when A2P 10DLC is live + the reconciled verbiage ships (N7; Intulse verbiage received 2026-06-11). Decoupled from the 6/30 launch (1.2). |
| `ship_in_tpmo_disclaimer` | ON (SHIP shown) → flips OFF 2026-10-01 | footer Important Disclosures (3rd sentence), Terms §14 | Dated: keep SHIP through 9/30/2026; remove 10/1/2026 (CMS CY2027). Mechanism = pre-staged PR, Jasmine merges 10/1 (2.2a). Do NOT swap early (2.2b). |
| `va_not_accredited` | ON | Services D2 (VA-accreditation + VSO-referral disclosure) | Confirmed ON per J&R — not VA-accredited, no claims work (1.14). Lawyer finalizes exact wording (3.1). |
| `turnstile_enabled` | OFF | Accessibility §5 anti-bot dependency mention; Privacy §2 anti-bot note | OFF (Turnstile not enabled). If enabled later, restore the §5 reference + update Privacy §2 (5.3 change-control). |
| `referrals_page` | OFF | /referrals page (whole page dark; pages → `<referrals>`) | Seeded rev 10; on the planned-by-12/31/2026 list, NOT in the 6/30 launch set. Flip only after FMO marketing review + counsel FTC pass (testimonials-display) and the curation rules are met (developer reviews excluded or disclosed; mentions list confirmed). |
| `shares_chd_with_brokers` | OFF | CHD §6 broker-sharing block (reserved/empty) | Stays dark until a CMS §422.2274(g)(4) one-to-one PEWC naming each recipient is cleared (5.4). |
| `carrier_logos_shown` | OFF | Home/Services carrier-logos section (not yet seeded; will render the `disclaimer-carrier-marks` include) | Define-ahead (rev 12, package item 21 + audit F3): the D1 single-source note already referenced this gate, so the switch is defined to close the orphan. Section seeds with 2.7; flip only after carrier trademark/co-branding permissions clear (2.7) + FMO review. |

## Supported jurisdictions — the single control for the licensed-states list + `jurisdiction = XX` gates
Per-state status is the one source of truth (in the build, one `_data/jurisdictions` file; here, this table). The `<licensed-states />` include and every `jurisdiction = XX` gate both derive from it — flip a state's status here and both follow, with no page edits.

| state | status | CHD-law state | notes |
|---|---|---|---|
| WA | active | yes (MHMDA) | live at launch |
| OR | active | — | live at launch |
| GA | active | — | live at launch |
| TN | active | — | live at launch |
| CA | pending | — | licensure in progress; NOT live at launch — do not represent as licensed; flip to active when licensed |
| NV | pending | yes (SB 370) | licensure in progress; NOT live at launch; NV CHD blocks stay dark while pending (3.17) |

Rules (stated once): `<licensed-states />` renders the **active** set only. A `jurisdiction = XX` gate fires only when XX is **active**; pending states render no jurisdiction-gated content. The CHD policy renders its jurisdiction blocks for **active CHD-law states** only — WA at launch; NV stays dark until NV flips active. The static site has no geolocation, so active blocks render to all visitors (5.23); pending states render nothing. To open a market: flip its status to active here (and confirm licensure + that the authority-table rows already cover its laws).

</build-conventions>

<pages>

<sitemap>

```
status: page body is a STUB, but the launch list below is real. Launches 6/30/2026. Human-readable sitemap; also a footer link. Thanks + 404 are deliberately EXCLUDED from this public sitemap page (utility pages; they remain in the launch set + robots/llms handling) — confirmed courier 2026-06-12.
```

# Sitemap

## Pages launching 2026-06-30
- [Home](/)
- [Services](/services) (covers Medicare and Veterans services)
- [Medicare 101](/medicare-101) (educational / evergreen SEO)
- [About Us](/about)
- [Contact Us](/contact)
- [Privacy Policy](/privacy-policy)
- [Terms & Conditions](/terms)
- [Accessibility Statement](/accessibility)
- [Consumer Health Data Privacy Policy](/consumer-health-data-privacy)
- [Sitemap](/sitemap)
- [Credits](/credits)

```
FYI — not human-sitemap entries: the post-form-submission confirmation page (/thanks) and the not-found page (/404) publish at launch but stay OFF the human list — /thanks is transactional (not a destination a direct visitor should land on, per RR §5) and /404 is an error page. robots.txt and llms.txt also publish at launch (AI discoverability is a goal; Cloudflare LLM scraping + training is enabled). Keep all four in the build, off the human list.
note (2026-06-09 reconciliation): /thanks and /404 are real launch pages (each renders only the global footer; no page-specific legal copy). Their former stub blocks were dropped from this legal working document as non-load-bearing for legal review; nothing else references them as a content surface. See company-facts launch set + flagged-items N9.
```

## Planned by 2026-12-31
- /services/medicare, /services/veterans, /services/individual-and-family
- /carriers
- /team (+ /team/rowena-baladad, /team/jasmine-baladad-nalder)
- /referrals

</sitemap>
<global-sitewide-footer>

## J&R Health Insurance
### Where coverage meets care

<company-contact-info />

### Your Data Rights
- [Consumer Health Data Privacy](/consumer-health-data-privacy)

### Legal
- [Privacy Policy](/privacy-policy)
- [Terms & Conditions](/terms)
- [Accessibility](/accessibility)

### Quick Links
- [Home](/)
- [Services](/services)
- [Medicare 101](/medicare-101)
- [About Us](/about)
- [Contact Us](/contact)

### Important Disclosures

We do not offer every plan available in your area. Any information we provide is limited to those plans we do offer in your area. Please contact Medicare.gov, 1-800-MEDICARE, or your local State Health Insurance Program (SHIP) to get information on all of your options. J&R Health Insurance is a private insurance brokerage and is not affiliated with or endorsed by Medicare, the U.S. Department of Veterans Affairs, or any other government agency. This is a solicitation for insurance. A licensed insurance agent/broker may contact you.

---

### Social Media Links
- [Follow us on LinkedIn](https://www.linkedin.com/company/jrhealthins/)
- [Follow us on Facebook](https://www.facebook.com/jrhealthins)

---

Copyright © 2026 J&R Health Insurance LLC. All rights reserved.

- [Sitemap](/sitemap)
- [Credits](/credits)

---

```
DATED CHANGE: the Important Disclosures text must be updated on 10/1/2026.
what: CMS CY2027 Final Rule removes the SHIP reference from the standardized TPMO disclaimer.
edit: on 10/1/2026, change the THIRD sentence's referral list from "Medicare.gov, 1-800-MEDICARE,
or your local State Health Insurance Program (SHIP)" to "Medicare.gov or 1-800-MEDICARE."
(Earlier build notes said "first sentence" — wrong target; SHIP lives in the third sentence.)
how: manual dated text swap, owner-assigned; store both dated versions now (this is option (a) in 2.2a).
hold: keep the SHIP wording through 9/30/2026; do NOT swap early (see 2.2b).
src: cms-cy2027, cms-2267
see: Flagged Items 2.2 / 2.2a / 2.2b
```

```
justification: this block is the single-sourced home for the always-on disclosures; other pages cross-reference it rather than restating it. Restating would risk drift across pages.
```

</global-sitewide-footer>
<consumer-health-data-privacy>

# Consumer Health Data Privacy Policy

**Effective date:** [set at publication]
**Last updated:** [set at publication]

```
status: DRAFT — every authority UNVERIFIED pending counsel + FMO; launches 6/30/2026. Highest-stakes policy on the site (MHMDA per se CPA violation + private right of action). Annotation layer added rev 12 (package item 13); build strips all fenced annotations (build-output-strip).
```

## Summary

This policy explains how J&R Health Insurance handles your consumer health data. Consumer health data is information that can be linked to you and that relates to your health. On this website, it mostly means the fact that you are looking for help with Medicare, Veterans coverage, or another health plan, plus anything about your health needs that you choose to tell us. In this policy, "you" means you, the person using this website or contacting us, and "we," "us," and "our" mean J&R Health Insurance.

In short:

- We collect this data only to help you find coverage.
- We do not sell it.
- We do not share it with other companies for their own advertising, and we do not sell leads or hand off the information you give us.
- You can see your data, take back your consent, or ask us to delete it at any time.

This policy covers the information you give us through this website and in related calls, emails, and texts. It does not cover health information that is protected by HIPAA, which we explain in the Scope and standalone statement section.

This summary is here to help you understand the policy. The numbered sections below are the full policy and are what legally applies.

## Contents

1. [Scope and standalone statement](#1-scope-and-standalone-statement)
2. [What some words mean](#2-what-some-words-mean)
3. [Categories of consumer health data we collect](#3-categories-of-consumer-health-data-we-collect)
4. [Sources of consumer health data](#4-sources-of-consumer-health-data)
5. [How we use consumer health data](#5-how-we-use-consumer-health-data)
6. [Data we share and why](#6-data-we-share-and-why)
7. [Processors, third parties, and affiliates](#7-processors-third-parties-and-affiliates)
8. [Your rights](#8-your-rights)
9. [How to exercise your rights](#9-how-to-exercise-your-rights)
10. [Appeals](#10-appeals)
11. [Deletion and data retention](#11-deletion-and-data-retention)
12. [Consent and no secondary use](#12-consent-and-no-secondary-use)
13. [No sale without your authorization](#13-no-sale-without-your-authorization)
14. [No geofencing of health-care facilities](#14-no-geofencing-of-health-care-facilities)
15. [Security](#15-security)
16. [Other websites we link to](#16-other-websites-we-link-to)
17. [Changes to this policy](#17-changes-to-this-policy)
18. [Effective date and contact](#18-effective-date-and-contact)

## 1. Scope and standalone statement

```
src: mhmda, nv-603a
see: 1.9 · mhmda-homepage-prominence
note: entity HIPAA status open at 1.9 (counsel pins; no public copy asserts a status either way). The business-associate illustration ("active enrollment in a plan") trim is counsel’s call at 1.9 (package item 26).
```

This is our Consumer Health Data Privacy Policy. It is separate from our general [Privacy Policy](/privacy-policy) on purpose. [Washington's My Health My Data Act](https://app.leg.wa.gov/RCW/default.aspx?cite=19.373&full=true) requires us to keep a standalone consumer health data policy, with its own prominent link on our homepage. {# gate: jurisdiction = NV #}Nevada's [consumer health data law](https://www.leg.state.nv.us/nrs/nrs-603a.html) (Senate Bill 370) requires us to keep a consumer health data privacy policy and make it available online, which this standalone policy does.{# /gate #}

This policy covers the consumer health data we collect through this website and through related communications with us, such as calls, emails, text messages, and contact-form submissions. J&R Health Insurance LLC ("J&R Health Insurance") is an insurance brokerage. If we handle data on behalf of a health plan or carrier as their business associate, for example data about your active enrollment in a plan, that data is protected health information under [HIPAA](https://www.hhs.gov/hipaa/index.html) and is governed by HIPAA rather than this policy. We do not treat the information you give us through this website, including your form, your questions, and your messages, as protected health information, and this policy fully covers it.

This policy covers Washington consumers, which includes Washington residents and people whose consumer health data is collected in Washington. {# gate: jurisdiction = NV #}It also covers Nevada consumers to the extent Nevada law applies to us. {# /gate #}Our general [Privacy Policy](/privacy-policy) covers all other information we handle, and our [Terms and Conditions](/terms) cover your use of this site.

If you live in another state where we are licensed that does not have a standalone consumer health data law, this consumer health data policy may not apply to you. Our general [Privacy Policy](/privacy-policy) explains the privacy rights you have under your state's law, and we will honor those rights to the extent the law gives them to you.

## 2. What some words mean

These short descriptions are here to help you read this policy. The full legal meanings are set by Washington{# gate: jurisdiction = NV #} and Nevada{# /gate #} law.

- **Consumer health data.** Information that can be linked to you and that relates to your past, present, or future physical or mental health.
- **Collect.** To get, keep, use, or create consumer health data in any way.
- **Share.** To give consumer health data to another company or person.
- **Sell.** To exchange consumer health data for money or other valuable things.
- **Consent.** Your clear, freely given "yes," made by a real action, after we tell you what you are agreeing to. We cannot get it through pre-checked boxes, confusing designs, or buried terms.
- **Processor.** A company we hire to handle data for us, under a contract, and only for us.
- **Affiliate.** A company that shares common branding with us and that controls us, is controlled by us, or is under common ownership or control with us.

## 3. Categories of consumer health data we collect

```
src: mhmda
see: 4.11 · 5.2
note: collection categories mirror the self-reported-only premise (company-facts HIPAA line, 1.9-corrected); cookie/tracker claims re-confirm at the 4.11 launch sweep.
```

We collect a small amount of consumer health data, mostly what you give us directly. This can include:

- the fact that you contacted us for help with Medicare, Veterans coverage, or another health plan
- the kind of coverage you tell us you are interested in, if you mention it
- any health needs or situation you choose to share so we can help you

Even when you do not describe a health condition, the fact that you ask us about coverage can suggest something about your health, so we treat this information as consumer health data.

We do not collect your medical records. We do not have a patient portal, so we do not collect data through one. We do not track you across other websites, and we do not use advertising cookies or pixels.

Please do not send us medical records, your Social Security number, or payment card numbers through the website form. If we ever need sensitive information like that, we will ask for it through a secure method.

## 4. Sources of consumer health data

```
src: mhmda, cms-2274
see: 3.7a · campaign-lead-path
note: the inbound Advocate source line pairs with the consent/authorization burden on the Advocate contract (CMS §422.2274 PEWC naming J&R + MHMDA authorization — 3.7a); the "on occasion… a small number" volume wording rides campaign-lead-path.
```

We collect most of this data directly from you. You give it to us when you:

- fill out the contact or lead form on this site
- send us a message, email, or text
- talk with us by phone

We may also get this data from a person you ask to help you, such as a family member, caregiver, or authorized representative.

On occasion, our marketing partner Advocate Health Advisors sends us a small number of prospect referrals. When that happens, we treat any consumer health data in those referrals under this policy.

We do not buy or sell consumer health data, and we do not collect it by tracking you across other websites.

## 5. How we use consumer health data

```
src: mhmda
see: 4.11 · 5.2
note: no-secondary-use posture; any added tracker or script trips the 5.2/5.3 change-control checkpoint before this section’s claims ship.
```

We use your consumer health data to:

- contact you about the coverage help you asked for
- find and explain plan options that may fit your needs
- answer your questions and provide our brokerage services
- keep the records the law requires us to keep, and guard against fraud and security threats
- meet our legal and regulatory duties

We do not use this data for unrelated purposes. If we ever want to use it for a new purpose, or collect a new type of it, we will ask for your separate consent first.

We do not use your consumer health data for targeted advertising. This website has no advertising cookies, pixels, or trackers. If we ever add tools like those, we will update this policy first and ask for any consent the law requires.

## 6. Data we share and why

We do not sell your consumer health data. We do not share it with other companies for their own advertising or marketing. We do not sell leads or hand off the information you give us to a third party.

To run our business and help you, we may share your consumer health data with these kinds of recipients:

- **Insurance carriers and plans**, when you ask us to help you compare options or apply, and only as much as is needed
- **Service providers (processors)** that handle data for us under a written contract, and only to provide services to us (we name these in the Processors, third parties, and affiliates section)
- **Professional advisors**, such as our lawyers or accountants
- **Government agencies or courts**, when the law requires it
- **A future owner of our business**, if we are ever part of a merger, sale, or similar change, and as the law allows

{# gate: shares_chd_with_brokers — reserved: broker-sharing block, renders when ON (5.4) #}

## 7. Processors, third parties, and affiliates

```
src: mhmda
see: 3.7a · 3.6 · 5.5
note: the "we do not share your consumer health data with it" line is the public face of the outbound-flow fact — reconcile with Privacy §5/§6 per package item 3, HELD on the J&R one-line confirm (appendix Q3, batch 5); PATH(b) repair would land here if a real outbound flow exists. Google Workspace processor naming added rev 12 (DRAFT — counsel ratifies wording; BAA pending execution, Open item 2 / 5.5).
```

We use service providers, also called processors, to run parts of our business. A processor may only handle your data to provide services to us, under a written contract.

The processor that stores your contact information and messages is AgencyBloc, our customer relationship management system.

When you opt in to text messages, Intulse handles our text messaging for us as a processor.

Our email runs on Google Workspace, also as a processor. If you email us, including a privacy-rights or accessibility request, Google Workspace stores and delivers those messages for us under a written contract.

Our website runs on privacy-first tools that do not use tracking cookies: Cloudflare for security and basic, cookieless analytics. Our fonts are served from our own website rather than a third-party font service, so viewing a page does not send a request to an outside font provider. These tools are not used to track you across other websites.

We have no affiliates as that term is defined by Washington{# gate: jurisdiction = NV #} and Nevada{# /gate #} law, meaning a company that shares common branding with us and that controls us, is controlled by us, or is under common ownership or control with us. Because we have no affiliates, we do not share your consumer health data with any. If this ever changes, we will name each specific affiliate here, as the law requires.

Advocate Health Advisors is our upline marketing partner. It is a separate company, it is not our affiliate, and we do not share your consumer health data with it.

## 8. Your rights

You have these rights for your consumer health data:

- **Confirm and access.** You can ask whether we are collecting, sharing, or selling your data, and you can ask for a copy of it.
- **See who has it.** You can ask for a list of every third party and affiliate we have shared or sold your data with. For each one, we will give you an active email address or another online way to contact them.
- **Withdraw consent.** You can take back your consent to our collecting or sharing your data at any time.
- **Stop collecting, sharing, or selling.** Where the law gives you this right, you can ask us to stop collecting, sharing, or selling your data. We do not sell it.
- **Delete.** You can ask us to delete your data.

We will not deny you our services, charge you a different price, or treat you differently because you used any of these rights.

## 9. How to exercise your rights

To make a request, contact us by email at info@jrhealthins.org or by phone at (253) 528-8805. To protect your privacy, we will take reasonable steps to confirm who you are before we act on your request. We will not ask for more than we need to do that, and we will use the information you give us only to check your identity.

You do not need to create an account to make a request.

**Someone can act for you.** You can name another person, such as a family member or caregiver, to make a request for you. We may ask that person for proof that you gave them permission, and we may also ask you to confirm your identity with us directly.

We will respond within 45 days. If we need more time, we may take up to 45 more days, and we will tell you why before the first 45 days end.

Responses are free up to twice per calendar year. If a request is clearly excessive, repetitive, or has no real basis, we may charge a reasonable fee to cover our costs, or decline to act, and we will explain why.

## 10. Appeals

If we deny your request, we will tell you why and how you can appeal. To appeal, contact us at info@jrhealthins.org with "Consumer Health Data Appeal" in the subject line. We will review your appeal and give you a written answer, with our reasons, within 45 days.

{# gate: jurisdiction = WA #}
If you live in Washington and you are not satisfied with our answer, you can file a complaint with the [Washington State Office of the Attorney General](https://www.atg.wa.gov/file-complaint).
{# /gate #}

{# gate: jurisdiction = NV #}
If you live in Nevada, you can file a complaint with the [Nevada Attorney General](https://ag.nv.gov/Complaints/File_Complaint/).
{# /gate #}

## 11. Deletion and data retention

```
src: mhmda, nv-603a
see: 3.16 · 3.17 · 5.25
note: deletion clock target = single 30-day clock satisfying both regimes (3.16); response/appeal 45s stay; NV blocks render via jurisdiction = NV gates only while NV is pending (3.17).
```

If you ask us to delete your consumer health data, we will act on your request without undue delay, and in all cases within 45 days after we confirm your identity. We may extend that time once, by up to 45 more days, when reasonably necessary, and we will tell you before the first 45 days end. If some of your data sits on a backup or archive system, we may wait to delete it from that system until the system is next restored or rebuilt, but no later than 6 months after we confirm your identity. We will also tell our processors to delete your data.

We may keep records only when the law requires us to, for example Medicare or insurance recordkeeping rules, or to establish, exercise, or defend a legal claim. We do not keep your consumer health data for marketing or analytics after you ask us to delete it.

## 12. Consent and no secondary use

We collect, use, or share your consumer health data only for the purposes described in this policy. We will not use it for anything else without asking you first.

We collect your consumer health data with your consent, or because we need it to give you the help you asked for. We share it only as needed to give you that help, such as sending your information to a carrier or plan you chose.

If we ever want to share your consumer health data for any other purpose, we will first ask for a separate consent to share, kept distinct from your consent to collect.

We do not bundle these consents together. We do not use pre-checked boxes. We do not use confusing or pressuring designs to push you toward agreeing. We do not hide these choices inside our Terms and Conditions.

## 13. No sale without your authorization

We do not sell your consumer health data, and we have no plans to.

The law treats a "sale" as exchanging your data for money or other valuable things. If we ever wanted to sell your data, the law would first require you to sign a separate authorization that meets strict rules. Among other things, that authorization must:

- describe the exact data and who would buy it
- state that we cannot make our help conditional on your signing
- tell you how to take it back
- expire no later than one year after you sign

We would not sell your data unless you signed that authorization, and you could take it back at any time.

We will never require you to allow a sale of your consumer health data to get our help.

## 14. No geofencing of health-care facilities

We do not use geofencing around any health-care facility. This means we do not set up a virtual boundary around a place where you get health care to find you, track you, collect your consumer health data, or send you ads or messages based on your location. We also do not allow our service providers to do this for us.

{# gate: jurisdiction = WA #}
In Washington, this applies within 2,000 feet of any place that provides in-person health-care services.
{# /gate #}

{# gate: jurisdiction = NV #}
In Nevada, this applies within 1,750 feet of any such place.
{# /gate #}

## 15. Security

We use reasonable administrative, technical, and physical safeguards to protect your consumer health data. We limit who can see it to people and service providers who need it to do their work. We require our service providers to protect your data under a written contract and to use it only as we instruct.

No website, email, phone, or text system is perfectly secure. See the Categories of consumer health data we collect section for what not to send us.

## 16. Other websites we link to

Our website may link to other sites, such as insurance carriers, government pages, or review pages. Those sites have their own privacy practices, and their own policies govern how they handle your information.

## 17. Changes to this policy

We may update this policy from time to time. If we make an important change, we will post a notice on our website and update the effective and last-updated dates before the change takes effect. We will not collect, use, or share new types of consumer health data, or use it for new purposes, without first telling you and getting any consent the law requires.

## 18. Effective date and contact

If you have questions about this policy or your consumer health data, contact us:

<company-contact-info />

If you are deaf, hard of hearing, or have a speech disability, you can reach us through your telecommunications relay service, or by dialing 711. If you need this policy in another format, see our [Accessibility Statement](/accessibility), which explains how to request an accessible version.

We will post any changes to this policy on this page and update the effective and last-updated dates.

## Change log

- [set at publication]: Initial publication of this Consumer Health Data Privacy Policy.

</consumer-health-data-privacy>
<privacy-policy>

```
posture: defensive "to-the-extent-applicable"; likely below CCPA/OCPA/TIPA thresholds; TIPA exempts licensed insurers at entity level; CalOPPA applies regardless of size (the lead form triggers it)
keep CHD content OUT — standalone; §16 is a pointer only (see consumer-health-data-privacy)
style: matches the executed Terms style (Summary + In-short bullets + non-binding line + anchored Contents + plain numbered sections + bold lead-ins). All src/flag/note annotations live in these fenced blocks and in Flagged Items, never in the published prose.
flags: ga-comprehensive-law · sms-consent-scope · sms-marketing-scope · retention-period · vendor-naming · referral-data-transfer · business-transfer-clause · data-security-regime · rights-posture · rights-appeal-mechanism · rights-45-day · gpc-voluntary-framing · soft-gdpr · ai-crawlers · cookie-accuracy · form-field-list · privacy-toc-anchors
status: DRAFT — every authority UNVERIFIED pending counsel + FMO; not live
```

# Privacy Policy

**Effective date:** [set at publication]
**Last updated:** [set at publication]

## Summary

This Privacy Policy explains what information J&R Health Insurance collects through this website, how we use it, who we share it with, and the choices you have. In this summary, "you" means you, the person using our site, and "we," "us," and "our" mean J&R Health Insurance.

In short:

- We are a licensed insurance brokerage that helps you compare and enroll in Medicare and other coverage. This policy is about our **website**, jrhealthins.org.
- We collect what you choose to give us through our contact form: your name, phone number, email, your message, and your consent choices. Our site does not use advertising or tracking cookies, and does not track you across other websites.
- We use your information to respond to you and help with the coverage you asked about. We do not sell it, and we do not share it for other companies' marketing. That includes your phone number and your text-message consent.
- If you text with us, your mobile number and your consent stay private. Our text message program is not active yet. When it launches, it is for customer-care messages about your request.
- You can ask to see, correct, or delete the information we hold about you. Email info@jrhealthins.org or call (253) 528-8805.
- Health-related information has its own, separate policy. See our [Consumer Health Data Privacy Policy](/consumer-health-data-privacy).

This summary is here to help you understand this policy. The numbered sections below are the full policy and are what applies.

## Contents

1. [Who we are and what this policy covers](#1-who-we-are-and-what-this-policy-covers)
2. [Information we collect and where it comes from](#2-information-we-collect-and-where-it-comes-from)
3. [How we use your information](#3-how-we-use-your-information)
4. [Text messages (SMS) and your phone number](#4-text-messages-sms-and-your-phone-number)
5. [When we share information](#5-when-we-share-information)
6. [Our no-sale and no-transfer commitment](#6-our-no-sale-and-no-transfer-commitment)
7. [Data retention, security, and access controls](#7-data-retention-security-and-access-controls)
8. [Your privacy rights](#8-your-privacy-rights)
9. [Do Not Track and cross-site tracking](#9-do-not-track-and-cross-site-tracking)
10. [Global Privacy Control and universal opt-out](#10-global-privacy-control-and-universal-opt-out)
11. [Visitors from the EU, EEA, and UK](#11-visitors-from-the-eu-eea-and-uk)
12. [Children's privacy](#12-childrens-privacy)
13. [Financial information and GLBA](#13-financial-information-and-glba)
14. [Georgia residents](#14-georgia-residents)
15. [Changes to this policy and how to contact us](#15-changes-to-this-policy-and-how-to-contact-us)
16. [Consumer health data](#16-consumer-health-data)

```
src: caloppa §22575(b)(1)
see: terms §2 · global-sitewide-footer (Important Disclosures) · consumer-health-data-privacy
note: scope separates the no-PHI website from operational broker handling (HIPAA where relevant). The non-affiliation line cross-references the footer (single-source) rather than restating the TPMO disclaimer.
```
## 1. Who we are and what this policy covers

J&R Health Insurance LLC ("J&R Health Insurance," "we," "us," or "our") is a licensed insurance brokerage based in Puyallup, Washington. We help people compare and enroll in Medicare and other health coverage in the states where we are licensed: <licensed-states />.

This policy applies to the information we collect through our website at jrhealthins.org (the "site"), which is an informational site about our services. It does not change the way we handle your information when we act as your broker with insurance carriers. That activity is governed by the insurance-privacy and health-privacy rules that apply to it, including, where relevant, HIPAA. Our website itself is not designed to collect medical records or other protected health information.

The health-related information you share with us (for example, if you tell us the kind of coverage you are interested in) is treated as "consumer health data" and is covered by our separate [Consumer Health Data Privacy Policy](/consumer-health-data-privacy), described in section 16.

J&R Health Insurance is not connected with or endorsed by Medicare, the U.S. Department of Veterans Affairs, or any other government agency. You can read more in our [Terms & Conditions](/terms) and in the disclosures in our site footer.

```
src: caloppa §22575(b)(1)
flag: cookie-accuracy · ai-crawlers
note: cookieless affirmed (Cloudflare cookieless analytics, self-hosted fonts (no third-party font request), Turnstile OFF; static form POSTs to AgencyBloc, nothing stored on the site). Residual re-homed (rev 12): confirm the AgencyBloc POST/redirect to /thanks sets no cookie — rides the 4.11 launch sweep (1.7/N1 closed 2026-06-10). Coverage-interest field removed (J&R confirmed 2026-06-09 the form has no such field; form-field-list resolved). Public cookie wording softened 2026-06-09 (conceptual pass, item 1) from an absolute "no cookies" to "no advertising or tracking cookies" so it holds even if a strictly-necessary security cookie exists, and the analytics claim is now attributed to its provider (Cloudflare), and fonts are self-hosted; the live config check still confirms (1.7/N1). The future-tools sentence is the change-control hook (5.2/5.3) for any added Turnstile/script.
```
## 2. Information we collect and where it comes from

**Information you give us.** When you fill out the contact form on our site, we collect the information you choose to provide: your name and phone number, which are required to submit the form, and, if you choose, your email address and a message. We also record the consent choices you make on the form, such as whether you checked the box agreeing to receive text messages. That box is not checked for you in advance. If you would rather not receive texts, you can reach us by phone or email instead.

Our website is a static informational site and does not store the information you submit. When you send the form, your information goes directly to the third-party platform we use to manage inquiries, which holds it on our behalf as described in section 5.

**Information we receive from others.** Sometimes a person you ask to help you, such as a family member, caregiver, or authorized representative, gives us your information on your behalf. On occasion, our marketing partner Advocate Health Advisors sends us a small number of prospect referrals, which may include your contact details and the fact that you are looking for coverage. We handle any information we receive this way under this policy.

**Information collected automatically.** We keep this to a minimum, and we do not use advertising or tracking cookies. We use Cloudflare's privacy-focused analytics, which, according to Cloudflare, measures site traffic without cookies and without tracking you across other websites. Our fonts are served from our own website rather than a third-party font service, so viewing a page does not send a request to an outside font provider. Our hosting and security providers process basic technical information, such as your IP address and browser type, in standard server and security logs to deliver the site and protect it from abuse.

**What we do not use.** Our site does not use advertising or cross-site tracking cookies, and we do not build advertising profiles about you.

If we add tools in the future that collect information differently (for example, a security check that confirms a form is submitted by a person rather than a bot), we will update this policy before we rely on them.

```
src: caloppa
see: §4 · §6 · terms §6
flag: sms-marketing-scope · sms-consent-scope
note: SMS use REVISED to customer-care/servicing only; the web form is NOT marketing consent; A2P 10DLC not live. Intulse verbiage received 2026-06-11 (sms-consent-scope); reconcile at launch. Sources sync — DONE (draft) 2026-06-11: added an "Information we receive from others" subsection disclosing the inbound Advocate-referral source + the family/caregiver/representative source, mirroring CHD §4 ("Sources of consumer health data"). DRAFT — counsel confirms the wording + scope; the inbound consent/authorization burden sits on the Advocate contract (3.7a). The voluntary third-party referral links remain first-party (a click-through to this form) and need no listing.
```
## 3. How we use your information

We use the information we collect to:

- respond to your request and give you the help you asked for, such as comparing plans, answering your questions, and following up;
- contact you about your request, using the methods you gave us and agreed to: by phone, email, and, if you opted in, text message;
- operate, maintain, and improve our site, using aggregate, privacy-friendly analytics; and
- meet our legal, regulatory, and recordkeeping obligations, including the insurance and Medicare rules that apply to our work.

If you opt in to text messages, we use your number to send **customer-care messages** about the request you started with us. We do not send marketing or promotional texts unless you give us separate written permission first, and we do not treat the website form by itself as that permission. Section 4 explains our text-message practices in more detail.

We do not use your information for behavioral or cross-site advertising, and we do not sell it. Section 6 describes our no-sale and no-transfer commitment.

```
src: caloppa, tcpa, ctia-10dlc
see: terms §6 (full program terms, single-sourced) · contact (opt-in surface) · consumer-health-data-privacy
flag: sms-consent-scope
note: render prominent (dedicated section + bold no-sale line). STOP/HELP summarized here; operative program terms single-sourced to Terms §6. The "text-message box on the form" now exists — restored as a separate optional checkbox (J&R 2026-06-09). Reconcile the exact SMS verbiage per sms-consent-scope before launch (N7 — Intulse verbiage received 2026-06-11).
```
## 4. Text messages (SMS) and your phone number

We collect your phone number through our contact form so we can respond to your request. You can agree to receive text messages from us by checking the text-message box on the form, which is not checked for you in advance. Agreeing to texts is not a condition of buying any insurance product, and you can always reach us by phone or email instead.

Our text-message program is not active yet. When it launches, our texts are **customer-care messages** about the request you started with us, such as replies to your questions, help scheduling a call, and follow-ups about your inquiry. We will not send you marketing or promotional texts unless you give us separate written permission first, and we will not treat the website form by itself as that permission.

You stay in control of our texts. When the program is live, you can stop them at any time by replying STOP to any message, and you can reply HELP for help. You can also reach us anytime at info@jrhealthins.org or (253) 528-8805.

**We do not sell or share your mobile number, your text-message opt-in data, or your consent records.** We do not share your phone number or your opt-in with any other companies or affiliates for their marketing. We share your number only with the service providers that help us send our own messages to you, under contracts that prevent them from using it for their own purposes. Section 6 describes this commitment in full.

Our [Terms & Conditions](/terms) contain the complete text-message program terms, including message frequency and rates.

```
src: caloppa §22575(b)(1), ccpa, glba, cms-2274
see: terms §5 · consumer-health-data-privacy §6/§7
flag: vendor-naming · referral-data-transfer · business-transfer-clause
note: kept category-level by design (asymmetric vs §2's named infrastructure) — confirm or name AgencyBloc/Intulse (1.3, 3.6). The CMS one-to-one consent line reflects §422.2274 — separate from and survived the vacated FCC rule; do NOT tie it to the FCC rule (confirm wording with FMO). Referral "no data transfer" confirmed by J&R 2026-06-11 (the referral is a pointer; no contact details passed). Business-transfer clause is new — keep or cut (counsel).
```
## 5. When we share information

We share your information only as described here: with parties that need it to help us serve you, or where the law requires it. We do not share it for other companies' marketing.

- **Service providers who work for us.** We use trusted providers to run our business and communicate with you, such as the platform that manages our inquiries and the telephone and messaging service we use to reach you. These providers may use your information only to perform services for us, under our instructions, and not for their own purposes.
- **Insurance carriers and our marketing organization.** When you ask us to help you compare or enroll in a plan, we share the information needed to do that with the relevant insurance carriers and with the field marketing organization that supports our work. For Medicare, we obtain your prior express written consent before sharing your contact information so a plan can contact you, as Medicare's rules require.
- **Referrals.** If we cannot help you (for example, because you live in a state where we are not licensed), we may refer you to another broker by letting you know who to contact. We do not transfer your information to them as part of that referral.
- **Legal, safety, and fraud prevention.** We may disclose information when the law requires it, in response to valid legal process, or to protect the rights, property, or safety of you, us, or others.
- **Business changes.** If our business is sold, merged, or reorganized, your information may be transferred as part of that change, and it will remain subject to this policy.

We do not sell your information, and we do not share it with third parties for their own marketing. Section 6 explains this in more detail.

```
src: ccpa, glba
note: stated as current fact; expressly covers SMS opt-in + consent records + form submissions; "strictly required by law" is the only carve-out. J&R confirmed (2026-06-11): no sale/share to other agencies for marketing, all-organic sourcing, no per-lead fees — the promise squares with ops (1.4 closed; 1.1 downgraded). Residuals resolved/re-homed (rev 12): the Advocate inbound flow was CONFIRMED and 1.1 closed at rev 6 (successor 3.7a carries the consent burden); the processor carve-out characterization rides 3.8/3.9.
```
## 6. Our no-sale and no-transfer commitment

We do not sell your personal information. We also do not rent, trade, or transfer it to outside organizations for their own marketing or other independent purposes.

This commitment covers all of the information you give us, including your name and contact details, your mobile phone number, the information you submit through our form, and your text-message opt-in and consent records.

The only times we share your information are the limited situations described in section 5: service providers who handle it for us under contract, insurance carriers and our marketing organization when you ask us to help with coverage, a business change such as a sale or merger (where your information stays protected under this policy), and disclosures that are strictly required by law. We may disclose your information to comply with the law or valid legal process, but not otherwise.

To be clear about text messaging: we do not share your SMS consent or your phone number with any third parties or affiliates for marketing purposes.

```
src: glba, naic, mhmda §.050 (security), mhmda §.060 (processor contracts)
flag: retention-period · data-security-regime
note: Retention REVISED 2026-06-09 to three buckets — lead/inquiry data ~24 mo from last contact; consent/permission proof kept longer to show authorized contact; legally-required artifacts (call recordings, SOAs) follow their own clocks even for non-clients. The recordkeeping-floor question is SUPPORTED by the cited producer-recordkeeping authorities (no statutory minimum attaches to a bare non-client inquiry — minimums attach to consummated transactions + specific artifacts; an application, unlike an inquiry, starts a clock) but stays UNVERIFIED pending EXT (4.12) + counsel. Aligns with CHD §11's establish/exercise/defend-a-claim carve-out and Privacy §8's "to the extent applicable." Open item is now operational: AgencyBloc dual-clock expiry (retention-period). Internal longest-minimum/shortest-maximum methodology stays in an internal schedule, NOT this published text. Safeguards described generically; the operative regime is likely the STATE insurance data-security law (NAIC model), not necessarily FTC Safeguards — counsel confirms (3.10). CMS chain-of-enrollment (10 yr) and call-recording retention (10→6 yr) are separate regimes about enrollment/call records, not website leads.
```
## 7. Data retention, security, and access controls

**How long we keep your information.** We keep your information only as long as we need it, and then we securely delete or de-identify it. If you contact us through our site but do not become a client, we keep the information from your inquiry for up to 24 months after your most recent contact with us, so we can follow up about the coverage you asked about, unless you ask us to delete it sooner. We may keep a record of the permissions you gave us (such as your agreement to our Terms and your text-message opt-in) for longer where we need it to show that our contact with you was authorized and to meet our legal obligations. If our work with you creates records that the law requires us to keep, such as recordings of phone calls or Medicare appointment records, we keep those for as long as the applicable insurance and Medicare rules require, whether or not you become a client. If you do become a client, we keep the records we are required to keep under the insurance and Medicare rules that apply to our work, which can be several years.

**How we protect it.** We use reasonable administrative, technical, and physical safeguards to protect your information against loss, misuse, and unauthorized access, disclosure, or alteration. Our website is served over a secure (HTTPS) connection. Because our site is a static informational site that does not store what you submit, the information you send us is held by the providers we use to manage inquiries and communications, under contracts that require them to protect it.

**Who can see your information.** We limit access to your information to the people who need it to do their work. Only authorized personnel may access your personal information, and only for permitted business purposes and to meet our legal obligations.

No method of sending information over the internet or storing it electronically is completely secure, so while we work to protect your information, we cannot guarantee its absolute security.

```
src: ccpa, ccpa-thresholds, ocpa, tipa, nv-603a
flag: rights-posture · rights-appeal-mechanism · rights-45-day
note: offered defensively "to the extent the law that applies to you provides them," without conceding any statute applies (likely below CCPA/OCPA/TIPA thresholds; TIPA exempts licensed insurers at entity level — 3.14, 3.13, 3.15). 45-day response + appeal-on-denial are included (Virginia-model laws). Single intake = info@jrhealthins.org / (253) 528-8805. Confirm a 2-person staff can meet the 45-day clock; build intake logging.
```
## 8. Your privacy rights

Depending on where you live, you may have rights over the personal information we hold about you. We honor the following requests to the extent the law that applies to you provides them:

- **Know and access.** You can ask what personal information we have about you and request a copy.
- **Correct.** You can ask us to fix information that is inaccurate or incomplete.
- **Delete.** You can ask us to delete the information we hold about you.
- **Portability.** You can ask for a copy of certain information in a portable, usable format.
- **Opt out.** You can opt out of the sale of your information, of sharing it for cross-context behavioral advertising, and of profiling. As explained in section 6, we do not do any of these.

**How to make a request.** Email us at info@jrhealthins.org or call (253) 528-8805. To protect your privacy, we may need to confirm your identity before we act, and we may ask for enough detail to locate your records. You may use an authorized agent to make a request for you where the law allows, and we may ask the agent to show they are authorized.

**Our response.** We will respond within 45 days. If we need more time, we will tell you. Making a request is free, and we will not deny you service, charge you a different price, or give you a lower level of service because you exercised your rights.

**If we say no.** If we decline your request, we will explain why and, where the law gives you a right to appeal, how to do that. You may also contact your state attorney general if you have a concern about how we handled your request.

```
src: caloppa §22575(b)(5)–(7)
note: mandatory CalOPPA element; clean affirmative answer (no cross-site tracking; none permitted by third parties). Distinct from §10 — do NOT merge or delete (CalOPPA requires this disclosure regardless of thresholds).
```
## 9. Do Not Track and cross-site tracking

Some browsers can send a "Do Not Track" (DNT) signal to the websites you visit. There is no common industry standard for how to respond to these signals. Because our site does not track you across other websites, our practices are the same whether or not your browser sends a DNT signal.

We also do not allow other companies to collect personal information about your online activities over time and across different websites when you visit our site.

```
src: ocpa, ccpa
flag: gpc-voluntary-framing
note: OCPA universal-opt-out went live 1/1/2026, but J&R is almost certainly below the threshold and there is no sale/share for a signal to act on; framed as "where the law requires" + future-proofed (5.8). Kept Oregon generic — confirm or name OR/CA.
```
## 10. Global Privacy Control and universal opt-out

Some browsers and extensions let you turn on a universal opt-out signal, such as Global Privacy Control (GPC), that tells the websites you visit not to sell or share your information. Where the law requires us to honor such a signal, we do.

In practice, we do not sell your personal information and we do not share it for cross-context behavioral advertising (see section 6), so there is nothing for the signal to opt you out of. If that ever changes, we will treat a recognized universal opt-out signal as a valid request to opt out for the browser or device that sends it.

```
src: gdpr
flag: soft-gdpr
note: "soft GDPR" — rendered always, silent (no EU cookie banner; the site is cookieless). Per the source list GDPR does NOT apply (US-audience brochure not targeting the EU; mere reachability doesn't trigger Art. 3); the section is defensive only. Trimmed to one paragraph on 2026-06-09 (conceptual pass, item 5; rights pointer routed to §8). Confirm keep-vs-omit with counsel.
```
## 11. Visitors from the EU, EEA, and UK

Our services are meant for people in the United States, in the states where we are licensed, and we do not direct our website to people in the European Union, the European Economic Area, or the United Kingdom. If you contact us from one of those regions, we will handle the information you give us as described in this policy, relying on our legitimate interest in responding to you and on your consent where it applies, and you can exercise the rights in section 8 using the contact details in section 15. Because our site does not use tracking or advertising cookies, we do not display a cookie-consent banner.

```
src: coppa
see: terms §4 (18+)
note: COPPA under-13 floor + the Terms' 18+ intended audience. Teen-data (13–17) heightened rules under CCPA/OCPA/TIPA/GA are moot here (no sale, no targeted ads) — no action unless that changes.
```
## 12. Children's privacy

Our site is meant for adults and is not directed to children. We do not knowingly collect personal information from children under 13. If you believe a child has given us personal information, please contact us at info@jrhealthins.org and we will delete it.

As explained in our [Terms & Conditions](/terms), this site is intended for people who are 18 or older.

```
src: glba, wa-oic, naic
flag: data-security-regime
note: acknowledges the GLBA "financial institution" status + state insurance privacy; separate notices provided where required. Ties to §7's data-security-regime flag — the NAIC model likely governs over the FTC Safeguards Rule for the business of insurance; counsel confirms which applies (3.10).
```
## 13. Financial information and GLBA

Because we are an insurance brokerage, some of the information we handle when we help you with coverage is financial information protected by the federal Gramm-Leach-Bliley Act (GLBA) and by state insurance privacy laws. Where those laws require us to give you a separate privacy notice about how we collect, use, and protect that information, we will provide it. This policy describes the information we collect through our website.

```
src: ga-sb111
flag: ga-comprehensive-law
note: section renders the no-omnibus posture — breach-law-only + §8 defensive rights + standing 2027 watch. Full basis (GA has no comprehensive privacy law) is in Locked decisions; flag ga-comprehensive-law. The `ga-sb111` src key resolves per Citation keys.
```
## 14. Georgia residents

Georgia does not currently have a comprehensive consumer privacy law of the kind several other states have enacted. If you live in Georgia, we still handle your information as described in this policy, and we honor the privacy rights that Georgia law does give you, including those under Georgia's data-breach notification law. The privacy choices and requests described in section 8 are available to you to the extent the law that applies to you provides them.

If you have a concern about how we handled your information or a privacy request, please contact us first using the details in section 15, and you may also contact the Georgia Attorney General's office.

```
src: caloppa §22575(b)(3)–(4)
note: change-notification method + effective date (mandatory CalOPPA elements). The contact block is pulled from the global footer for consistency (email, phone + hours, fax, mailing address, relay/711). info@jrhealthins.org is the single monitored intake for general, privacy-rights, and accessibility requests (per company-facts) — confirm it is actively monitored and that rights requests are logged to meet the §8 45-day clock (1.12).
```
## 15. Changes to this policy and how to contact us

**Changes.** We may update this policy from time to time. When we do, we will change the "Last updated" date at the top and post the new version on this page. If we make a material change, we will give a more prominent notice, such as a notice on our website.

**Contact us.** If you have questions about this policy, or if you want to exercise your privacy rights, you can reach us:

<company-contact-info />

If you are deaf, hard of hearing, or have a speech disability, you can reach us through your telecommunications relay service, or by dialing 711.

```
src: mhmda, wa-ag-mhmda
see: consumer-health-data-privacy (standalone — keep distinct)
note: pointer only; names MHMDA as the driver; CHD substance stays out of this policy to avoid drift between the two documents.
```
## 16. Consumer health data

Some of the information related to your interest in health coverage may be "consumer health data" under state laws such as the Washington My Health My Data Act. We handle that information under our separate [Consumer Health Data Privacy Policy](/consumer-health-data-privacy), which explains your rights and our practices for that data. Please read it alongside this policy.

## Change log

- June 8, 2026: First full consumer-facing draft, expanded from the annotated skeleton into the Terms & Conditions style. Every authority UNVERIFIED pending counsel and FMO review.

</privacy-policy>
<terms>

```
title standardized "Terms & Conditions"; consumer-facing draft in CHD gold-standard style (layered summary + anchored contents + plain numbered sections + change log); developer-note annotations retained
load-bearing = §6 (SMS), §9/§10 (conspicuousness + non-waivable carve-outs), §13 (arbitration carve-outs), §14 (incorporated CMS/SSA/VA disclaimers + 10/1/2026 SHIP swap)
hosts relocated footer content · no-cost/commission (§2) · third-party-marks (§7)
flags: age-floor · cema-2274 · liability-carveouts · venue-choice-of-law · wcag-claim · clickwrap-assent
status: DRAFT — every authority UNVERIFIED pending counsel + FMO; not live
```

# Terms & Conditions

**Effective date:** [set at publication]
**Last updated:** [set at publication]

## Summary

These Terms are the agreement between you and J&R Health Insurance for using this website. In this summary, "you" means you, the person using this site, and "we," "us," and "our" mean J&R Health Insurance.

In short:

- We are a licensed insurance brokerage that helps you compare and enroll in Medicare and other coverage. There is no charge to you for our help. Insurance carriers pay us a commission if you enroll.
- This site is for general information. It is not insurance, medical, or legal advice, and using it does not enroll you in any plan.
- If you text with us, you stay in control. Reply STOP to cancel at any time and HELP for help. We never sell or share your phone number for other companies' marketing.
- We are not connected with or endorsed by Medicare, the VA, or any government agency.
- Some parts of these Terms limit our liability and ask you to resolve most disputes by individual arbitration. You keep the rights your state's law says you cannot waive, and you can opt out of arbitration within 30 days.

This summary is here to help you understand the Terms. The numbered sections below are the full Terms and are what legally applies.

## Contents

1. [Acceptance of these Terms](#1-acceptance-of-these-terms)
2. [Who we are and what we do](#2-who-we-are-and-what-we-do)
3. [Information only, not advice](#3-information-only-not-advice)
4. [Who can use this site](#4-who-can-use-this-site)
5. [Lead form and electronic communications](#5-lead-form-and-electronic-communications)
6. [Text message (SMS) program terms](#6-text-message-sms-program-terms)
7. [Intellectual property and images](#7-intellectual-property-and-images)
8. [Links and content from others](#8-links-and-content-from-others)
9. [Disclaimer of warranties](#9-disclaimer-of-warranties)
10. [Limitation of liability](#10-limitation-of-liability)
11. [Indemnification](#11-indemnification)
12. [Governing law and venue](#12-governing-law-and-venue)
13. [Dispute resolution and arbitration](#13-dispute-resolution-and-arbitration)
14. [Required Medicare and government-affiliation disclaimers](#14-required-medicare-and-government-affiliation-disclaimers)
15. [Changes, severability, and contact](#15-changes-severability-and-contact)
16. [Accessibility](#16-accessibility)

```
src: gen
flag: clickwrap-assent
```
## 1. Acceptance of these Terms

By using this website, you agree to these Terms and Conditions ("Terms") and to our [Privacy Policy](/privacy-policy) and [Consumer Health Data Privacy Policy](/consumer-health-data-privacy). If you do not agree, please do not use the site.

We may update these Terms from time to time. When we do, we will change the "Last updated" date above and post the new version here, and we will post a notice on the site for any significant change. If you keep using the site after a change takes effect, you agree to the updated Terms.

When you submit our contact or lead form, you confirm that you have read and agree to these Terms.

```
src: ftc5, cms-2262
note: hosts relocated no-cost/commission line; "no charge to you," not bare "free"
```
## 2. Who we are and what we do

J&R Health Insurance LLC ("J&R Health Insurance," "we," "us," or "our") is a licensed insurance brokerage based in Puyallup, Washington. We help people compare and enroll in Medicare and other health coverage in the states where we are licensed: <licensed-states />.

Here is what we do and do not do:

- We present Medicare Advantage (Part C) plans from the carriers we work with.
- We can explain Medicare Part D (prescription drug) coverage, but we do not enroll you in Part D. You can enroll in Part D yourself at [Medicare.gov](https://www.medicare.gov).
- We help veterans understand how VA, CHAMPVA, and TRICARE for Life work alongside Medicare. This is general education and referral only. We are not accredited by the VA, and we do not prepare, file, or represent you on VA claims.
- We do not offer every plan available in your area. The Medicare disclaimer in our site footer explains this and points you to Medicare.gov and 1-800-MEDICARE to see all your options.

There is no charge to you for our brokerage help. An insurance carrier pays us a commission if you enroll in a plan through us. This does not add to the price you pay for a plan.

```
src: ftc5, cms-2262, medicare-gov
```
## 3. Information only, not advice

The information on this site is general and for educational purposes. It is not insurance, medical, tax, or legal advice, and it is not a recommendation to buy any particular plan.

Plan availability, benefits, costs, and enrollment periods vary by county, ZIP code, and your eligibility, and they can change. Before you enroll, review the plan's official documents and the information at [Medicare.gov](https://www.medicare.gov).

Using this site, contacting us, or submitting a form does not create an insurance policy and does not enroll you in any plan. Enrollment happens only through the carrier and under Medicare's rules.

```
src: gen
flag: age-floor
```
## 4. Who can use this site

This site is meant for adults who are 18 or older. We provide insurance brokerage services only to residents of the states where we are licensed (<licensed-states />). By using the site, you confirm that you are 18 or older.

This site is not directed to children, and we do not knowingly collect information from children under 13.

```
src: esign, tcpa
note: unchecked-by-default opt-in lives at the form, not here; consent never required to use services
```
## 5. Lead form and electronic communications

If you use our contact or lead form, we ask for your name and phone number, and you can also give us your email and a message. We use this to respond to your request. How we handle this information is explained in our [Privacy Policy](/privacy-policy) and, where it relates to your health, our [Consumer Health Data Privacy Policy](/consumer-health-data-privacy).

By submitting the form, you agree that we may contact you about your request by phone and email, using the details you give us. Text messaging is separate and optional: if you check the optional text-message box, the program terms in section 6 apply. Any box you check is not checked for you in advance, and agreeing to texts is never required to use our services or to get a quote.

You also agree that we may communicate with you electronically, and that electronic records and disclosures meet any requirement that they be in writing.

```
src: tcpa, fcc-1to1-vacated, fcc-24-24, fcc-da26-12, wa-cema, or-hb3865, ctia-10dlc
flag: cema-2274
see: contact (canonical opt-in language) · privacy-policy · consumer-health-data-privacy
note: load-bearing — customer-care scope ONLY until A2P 10DLC + written consent; do NOT reference the vacated FCC one-to-one rule.
governed-by: sms_program_live (Switch registry)
```
## 6. Text message (SMS) program terms

These terms apply if you give us your mobile number and agree to receive text messages from us. Our text message program is not active yet. When it launches, these terms apply.

**What our texts are for.** For now, our program is for customer-care texts only. These are messages that help with the coverage request you started with us, such as replies to your questions, scheduling a call, and follow-ups about your request. We will not send you marketing or promotional texts unless you give us separate written permission first, and we will not treat a web form by itself as that permission.

**How you join.** You join by giving us your mobile number and agreeing to texts, for example by checking the text-message box on our form or by texting us first. Agreeing to texts is not a condition of getting our help.

**Message frequency.** Message frequency varies based on your request and our conversation with you.

**Cost.** Message and data rates may apply, depending on your mobile plan.

**How to stop.** You can stop our texts at any time by any reasonable method. The simplest way is to reply STOP to any text. You can also reply with a word like CANCEL, END, QUIT, UNSUBSCRIBE, OPT OUT, or REVOKE, or contact us by phone or email. After you opt out, we will stop within 10 business days, and we will send one final text confirming you are unsubscribed. If you change your mind later, you can opt in again the same way, and we will resume texting you.

**How to get help.** Reply HELP to any text, or contact us at (253) 528-8805 or info@jrhealthins.org.

**Carrier note.** Mobile carriers are not liable for delayed or undelivered messages.

**Your privacy.** We do not sell or share your mobile number or your text-message consent with other companies for their marketing. See our [Privacy Policy](/privacy-policy) and [Consumer Health Data Privacy Policy](/consumer-health-data-privacy) for how we handle this information.

**Hours.** We send texts and make calls only during the hours your state allows.

**Emergencies.** Do not use text messages for emergencies. If you have a medical emergency, call 911.

```
src: copyright
see: credits (attributions)
note: hosts relocated third-party-marks line
```
## 7. Intellectual property and images

The content on this site, including text, layout, graphics, and the logos we own, belongs to J&R Health Insurance or our licensors. You may view and print it for your own personal, non-commercial use. Please do not copy, redistribute, or change it for other purposes without our permission.

Medicare, the VA, TRICARE, CHAMPVA, and the names and logos of insurance carriers are the marks of their respective owners. We use them only to identify those programs and plans, not to claim any endorsement or affiliation.

Some images on this site come from other sources and are used under license. Where credit is required, we provide it on our [Credits](/credits) page.

```
src: gen
```
## 8. Links and content from others

This site links to other websites and may show content from other companies, such as embedded videos. Examples include Medicare.gov and insurance carrier sites. We do not control those sites or that content, we are not responsible for them, and a link is not an endorsement. When you visit another site, that site's terms and privacy policy apply.

```
src: gen
flag: liability-carveouts
note: house style uses sentence case, NOT all-caps; conspicuousness via bold lead-in — counsel may want traditional UCC all-caps for the warranty disclaimer
```
## 9. Disclaimer of warranties

We work to keep this site accurate and available, but we provide it **"as is" and "as available."** To the extent the law allows, we do not make warranties about the site, including the implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not promise that the site will always be available, error-free, or free of harmful components.

This does not limit any rights you have under laws that cannot be waived.

```
src: mhmda, wa-cpa
flag: liability-carveouts
note: load-bearing — express carve-out for non-waivable claims; conspicuousness via bold, not all-caps
```
## 10. Limitation of liability

To the maximum extent the law allows, J&R Health Insurance is **not liable for indirect, incidental, special, or consequential damages** arising from your use of this site, such as lost profits or lost data. Because we do not charge you for using the site, our total liability for any claim relating to the site will not be more than one hundred US dollars (USD 100).

These limits do not apply to, and nothing in these Terms waives:

(a) your rights under the Washington My Health My Data Act, including its private right of action;
(b) your rights under the Washington Consumer Protection Act, or a similar consumer-protection law in your state;
(c) liability for fraud, willful misconduct, or personal injury; and
(d) anything else the law says cannot be limited or waived.

```
src: gen
```
## 11. Indemnification

If your misuse of this site, or your breach of these Terms, leads to a claim against us, you agree to cover the reasonable costs and damages we face because of it, to the extent the law allows. We will tell you about the claim and may take part in defending it.

```
src: gen
note: WA choice
flag: venue-choice-of-law
```
## 12. Governing law and venue

These Terms are governed by the laws of the State of Washington, without regard to its conflict-of-laws rules. Any dispute that is not resolved by arbitration under section 13, and that is not a matter for small-claims court, will take place in the state or federal courts located in Pierce County, Washington, and you agree to that location.

If you live in another state where we are licensed, this does not take away the consumer-protection rights your home state gives you that cannot be waived.

```
src: faa, mhmda, ccpa
note: load-bearing — full arbitration + class waiver drafted per "use defaults"; WHETHER to include arbitration at all is an attorney policy call (flagged); enforceability depends on conspicuous assent (see clickwrap-assent)
```
## 13. Dispute resolution and arbitration

We would rather solve any concern informally, so please contact us first and give us a chance to help.

**Please read this section carefully. It affects how disputes are resolved and it limits class actions.** Except for the claims listed below, you and J&R Health Insurance agree to resolve any dispute relating to this site or these Terms by binding individual arbitration, under the Federal Arbitration Act, instead of in court. In arbitration there is no judge or jury, and review by a court is limited.

**What is not covered.** This arbitration agreement does not apply to:

(a) claims you can bring in small-claims court, if they qualify;
(b) a request for an injunction or other equitable relief;
(c) your rights under the Washington My Health My Data Act, the Washington Consumer Protection Act, or another consumer-protection law in your state that cannot be sent to arbitration; and
(d) any other claim the law says cannot be required to go to arbitration.

**Class-action waiver.** You and we agree to bring claims against each other only as individuals, and not as a plaintiff or class member in any class, collective, or representative action, except where the law does not allow this waiver.

**Your right to opt out.** You can opt out of this arbitration agreement within 30 days of first accepting these Terms. Email info@jrhealthins.org with your name and the words "Arbitration Opt-Out." If you opt out, the governing law and venue in section 12 apply instead. Opting out does not affect any other part of these Terms.

**Grouped cases.** If many similar arbitration demands are filed at about the same time, they may be grouped and handled in batches under the arbitration provider's rules. If the class-action waiver is found unenforceable for a particular claim, that claim will be decided in court rather than in arbitration.

```
src: cms-2267, cms-cy2027, mcmg, ssa-1140, cms-2262, va-accred, va-5901, va-seal-civil, ca-sb694(eff 1/1/2027)
see: global-footer (Important Disclosures) · veterans
note: load-bearing — incorporate footer disclaimers by reference; footer holds verbatim CMS wording + both dated TPMO versions; a disclaimer is NOT itself a §1140 defense
```
## 14. Required Medicare and government-affiliation disclaimers

Our site footer shows the disclaimers that Medicare's rules and federal law require. Those disclaimers are part of these Terms. Here is a plain summary, but the footer text is what controls:

- We are a Third-Party Marketing Organization. We do not offer every plan available in your area. The footer disclaimer explains that we do not offer every plan available in your area and directs you to Medicare.gov and 1-800-MEDICARE so you can review all of your options.
- J&R Health Insurance is not connected with or endorsed by Medicare, the Centers for Medicare & Medicaid Services, the U.S. Department of Health and Human Services, the U.S. Department of Veterans Affairs, the Department of Defense, or any other government agency.
- For veterans: we are not accredited by the VA, and we do not handle VA claims. We provide general education and referrals about how VA, CHAMPVA, and TRICARE for Life coordinate with Medicare. See our [Services](/services) page.

```
governed-by: ship_in_tpmo_disclaimer (Switch registry — dated swap; see footer DATED CHANGE + 2.2/2.2a/2.2b)
```
The footer disclaimer also directs you to your State Health Insurance Program (SHIP).

```
src: gen
```
## 15. Changes, severability, and contact

**Changes.** We may update these Terms. We will post the updated version here, change the "Last updated" date, and post a notice on the site for any significant change.

**Severability.** If any part of these Terms is found to be unenforceable, the rest stays in effect.

**Contact.** If you have questions about these Terms, contact us:

<company-contact-info />

If you are deaf, hard of hearing, or have a speech disability, you can reach us through your telecommunications relay service, or by dialing 711.

```
src: ada, wcag22
flag: wcag-claim
```
## 16. Accessibility

We want this site to be usable by everyone. We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.2 Level AA. To learn more, to report a problem, or to ask for an accessible version of something on this site, see our [Accessibility Statement](/accessibility).

## Change log

- June 8, 2026: First full consumer-facing draft, expanded from the annotated skeleton into the CHD gold-standard style. Every authority UNVERIFIED pending counsel and FMO review.

</terms>
<accessibility>

# Accessibility Statement

**Effective date:** [set at publication]
**Last reviewed:** [set at publication]

## Summary

J&R Health Insurance wants everyone to be able to use our website, [jrhealthins.org](https://jrhealthins.org/), including people who use assistive technology such as screen readers, screen magnifiers, voice control, or a keyboard alone. We build and test the site against a recognized accessibility standard, WCAG 2.2 Level AA, and we keep working on accessibility over time. If something does not work for you, you can tell us using the details in the Contact and accommodations section, and we will help. In this statement, "you" means you, the person using this site, and "we," "us," and "our" mean J&R Health Insurance.

## 1. The standard we follow

We use the [Web Content Accessibility Guidelines (WCAG) version 2.2 at Level AA](https://www.w3.org/WAI/standards-guidelines/wcag/) as our accessibility standard. WCAG is an international standard published by the World Wide Web Consortium (W3C) that explains how to make web content easier to use for people with disabilities. Level AA is the level most organizations aim for.

## 2. Conformance status

Based on our most recent evaluation, this website substantially conforms to WCAG 2.2 Level AA. We performed this evaluation in-house, using industry-standard testing tools together with manual testing. The evaluation covers the pages currently published at jrhealthins.org; as we add new pages, we test them and update this statement. We re-test after any significant change.

## 3. Using this website

We built this website so that you should be able to:

- move through the site using a keyboard alone
- use the site with a screen reader, including recent versions of common screen readers
- use the site with speech recognition software
- zoom in up to 400% without content breaking or forcing you to scroll sideways to read
- read content that does not rely on color alone to carry meaning
- use forms that have clear labels, instructions, and error messages

We designed the site to work with current versions of major browsers and commonly used assistive technology. For the best results, keep your browser and assistive technology reasonably up to date. Some older browsers or assistive technology may not support current accessibility features.

## 4. How we test and maintain accessibility

We check accessibility in two ways. We use automated tools to scan pages for issues software can detect, such as missing text alternatives, low color contrast, and unlabeled form fields. We also test by hand, because automated tools reliably cover only part of the standard. Manual testing includes moving through the site with a keyboard, using screen readers and other assistive technology, and checking that content reads in a sensible order.

We also work to keep the site accessible as it grows. We:

- build accessibility in when we design and add new pages or features
- check accessibility before we publish significant changes
- fix confirmed barriers we find in testing or that you report to us

## 5. Known limitations

As of our most recent review, we are not aware of any accessibility barriers on the pages we publish. Some features of the site rely on third-party services that we do not fully control and that can change without notice, for example, our online contact form. If one of these creates a barrier, we want to know about it. Please tell us using the details in the Contact and accommodations section, and we will work to fix it or to give you another way to get what you need.

```
note: the spam-protection-tool reference was removed from §5 because Turnstile is OFF. If Turnstile or any other anti-bot tool is enabled later, restore a third-party-dependency mention here and update Privacy §2 (5.2/5.3).
```
{# gate: turnstile_enabled — reserved: §5 anti-bot dependency mention, renders when ON (5.3) #}

## 6. Contact and accommodations

We welcome your feedback. If you cannot use part of this website, need an adjustment to use it, or want a document in an accessible format, please tell us and we will work with you. It helps if you include:

- the address of the page
- a short description of the problem
- the browser, device, and assistive technology you were using, if you are comfortable sharing that

You can reach us:

<company-contact-info />

If you are deaf, hard of hearing, or have a speech disability, you can reach us through your telecommunications relay service, or by dialing 711.

We will respond as soon as possible. If you need information from the site in another format, such as large print, plain text, audio, or braille, tell us the format you need. You can ask us for an accessible version of anything you cannot use.

If you are not satisfied with how we handle your concern, you can ask us to escalate it internally for a further review. Depending on where you live, you may also have rights under accessibility or consumer-protection laws, and you can raise your concern with the relevant authority in your area.

## Change log

- [set at publication]: Initial publication of this Accessibility Statement.

</accessibility>
<medicare-101>

```
body: educational content TBD (out of scope this thread)
canonical home for educational disclaimer; do NOT duplicate verbatim TPMO line in body
flags: educational-vs-marketing
```

# Medicare 101
```
note: page body TBD
```

## Important Disclosures

```
src: cms-2262, ftc5, mcmg
```
### D1 · Educational-Content Disclaimer
- "This page provides general educational information about Medicare. It is not individualized advice or a recommendation to enroll in any specific plan. Plan availability and eligibility vary by location and personal circumstances."

```
see: global-footer (Important Disclosures)
```
### D2 · Site-Wide Disclosures Already Present
- CMS TPMO + Medicare/VA non-affiliation + solicitation render in the global footer every page.

```
justification: keeping this page on the educational side of the MCMG line changes which CMS rules attach. Naming specific plans or routing to the lead form may make it marketing material.
flag: educational-vs-marketing
```

</medicare-101>
<carriers>

```
body: carrier list/content TBD (out of scope this thread)
carries page-level marks/non-endorsement text because it displays carrier names/logos
flags: carrier-cobranding
```

# Carriers
```
note: page body TBD
```

## Important Disclosures

```
src: tm, ftc5, cms-2262
see: terms §7
```
### D1 · Third-Party Marks / No Implied Endorsement
- "Carrier names and logos are the trademarks of their respective owners, shown for identification only. Their display does not imply any carrier's endorsement of, or affiliation with, J&R Health Insurance. We do not offer every plan available in your area, and the plans we discuss are limited to those we offer." (Companion to Terms §7.)

```
see: global-footer (Important Disclosures)
```
### D2 · Site-Wide Disclosures Already Present
- TPMO + non-affiliation + solicitation render in the global footer.

```
justification: carrier marks raise (a) carrier-controlled trademark/co-branding permissions and (b) CMS rules against implying endorsement. Carrier co-branding approval + FMO sign-off required before publishing logos.
single-source: this D1 text is the canonical `disclaimer-carrier-marks` include; the Home/Services carrier-logos section will render the same include behind the `carrier_logos_shown` gate when that section seeds (2.7; switch defined rev 12, OFF), so it is never restated per page. The "not every plan" sentence is an intentional point-of-context echo of the footer (honest-design, like the Contact solicitation restatement) — FMO confirms keep-echo vs. bare footer cross-ref.
flag: carrier-cobranding
```

</carriers>
<about>

```
body: About content TBD (out of scope this thread)
media credits MOVED to the dedicated Credits page (latest structural decision); About no longer hosts attributions
see: credits
content note: feature J&R's annual Medicare certification (yearly recert + exam through Advocate) as a credibility/trust element. Keep any "certified to educate on Medicare" claim accurate and substantiable (FTC §5), with no implied CMS/government endorsement.
flag: about-recert-credential
```

# About Us
```
note: page body TBD
```

```
resolved (2026-06-10): no separate disclaimer block needed — About renders the global footer only. The one About-specific legal surface is the annual-Medicare-certification trust claim; keep it within the body guardrail (see the content note above + N14). Suggested safe phrasing, FMO to confirm: "We complete annual Medicare certification, including yearly recertification and testing through our partner FMO, Advocate Health Advisors." Avoid "Medicare-certified" / "government-certified" or anything implying CMS or government endorsement.
see: closed ledger (about-disclosure)
```

</about>
<contact>

```
status: DRAFT — every authority UNVERIFIED pending counsel + FMO; not live. Contact updated (J&R 2026-06-09): two separate checkboxes — a required clickwrap legal-assent box and a restored optional SMS opt-in box (they are not combined). Coverage-interest field removed.
renders: optional lead form + a required clickwrap consent checkbox + an optional SMS opt-in checkbox; canonical consent-language surface for the suite = this page
flags: clickwrap-assent · consent-record-capture · sms-submission-consent-mismatch · sms-consent-scope · form-placement · solicitation-restatement-drift
```

# Contact Us

## Send us a message

Tell us how we can help, and we'll follow up as soon as possible.

- **First name**
- **Last name**
- **Phone number**
- **Email address** (optional)
- **Your message** (optional)
- [ ] I agree to the [Terms & Conditions](/terms), and I acknowledge the [Privacy Policy](/privacy-policy) and [Consumer Health Data Privacy Policy](/consumer-health-data-privacy).
- [ ] (Optional) Text me. I agree to receive customer-care text messages from J&R Health Insurance at the phone number I provide. Consent is not a condition of getting help or of buying any insurance product. Message frequency varies. Message and data rates may apply. Reply STOP to cancel or HELP for help. See our [Privacy Policy](/privacy-policy), [Consumer Health Data Privacy Policy](/consumer-health-data-privacy), and [Terms & Conditions](/terms).

```
src: esign, ctia-10dlc, tcpa
see: terms §1 (acceptance) · terms §6 (SMS program terms) · privacy-policy §4 (SMS data handling) · consumer-health-data-privacy §4 (CHD in Medicare texts)
flag: clickwrap-assent · consent-record-capture · sms-consent-scope
governed-by: sms_program_live (Switch registry)
note: OFF-state Box-2 variant (renders while sms_program_live = OFF, replacing the live opt-in copy above per the registry wording contract): "Text messaging is not active yet. When our texting program launches, you can opt in here." Live opt-in copy renders only when ON. Variant authored rev 12 (package item 6).
note: TWO separate checkboxes by design. Box 1 = required clickwrap assent to the legal docs (unchecked, required to submit). Box 2 = SMS opt-in (unchecked, OPTIONAL, never a condition — TCPA + CTIA/10DLC). Not bundled: combining them would make texting a condition and break the "texts are optional" promise. Box-2 wording is DRAFT — Intulse verbiage received 2026-06-11; reconcile per sms-consent-scope before launch (N7). (clickwrap-assent, form-field-list both Closed.)
```

By submitting this form, you agree that we may contact you about your request by phone and email using the details you provide. Agreeing to text messages is optional and is never a condition of getting help from us or of enrolling in any plan.

```
flag: sms-submission-consent-mismatch · sms-consent-scope
note: consents to phone + email on submission and makes texts optional; matches Terms §5 (sms-submission-consent-mismatch ✅, counsel ratifies at sign-off). CMS one-to-one (§422.2274) still gates sharing beneficiary contacts and the vacated FCC one-to-one is do-not-implement — see Locked decisions. The operative 9 a.m.–8 p.m. recipient-local window is Locked (register); Terms §6 deliberately states only "the hours your state allows" — whether §6 should state the concrete window is a counsel/FMO style call (package item 22).
```

[ Submit ]

---

```
src: cms-2267, ssa-1140, cms-2262
see: global-sitewide-footer (Important Disclosures — single-source home)
flag: solicitation-restatement-drift
note: restates the footer's site-wide solicitation line at the point of choice (honest-design). Aligned 2026-06-09 to the footer's exact "agent/broker" wording; the added no-cost / no-obligation line is an intentional point-of-choice restatement (consistent with Terms §2), confirmed by the tech lead — not unintended drift.
```

This is a solicitation for insurance. A licensed insurance agent/broker may contact you. There is no cost to work with our brokers, and no obligation to enroll.

</contact>
<services>

```
body: TBD copy (punted for now)
added per Intulse requirement (the A2P 10DLC campaign references a Services page). Also the interim home for Veterans-services content + disclosures: the standalone Veterans page was cut (not launching 6/30); until /services/veterans ships (planned 12/31/2026), any Veterans-services copy and disclosures live here.
flags: services-disclosure-copy · vetecare-referral
```

# Services
```
note: page body TBD; will cover Medicare and Veterans services
```

## Veterans services: Important Disclosures

```
note: relocated from the cut <veterans> page; Services is the only page touching Veterans services until /services/veterans launches. va_not_accredited switch CONFIRMED ON per J&R (not VA-accredited, no claims work).
single-source: D1 below is the canonical `disclaimer-va-non-affiliation` include — /services/veterans renders the same include on launch; always-on for Veterans content (the footer keeps its compressed non-affiliation line lean, while D1 carries the full DoD/TRICARE/CHAMPVA enumeration for the §1140 posture).
src: va-seal-civil, ssa-1140, ftc5
```
### D1 · Full VA Non-Affiliation
- "J&R Health Insurance is not affiliated with, endorsed by, or sponsored by the U.S. Department of Veterans Affairs (VA), the Department of Defense, TRICARE, CHAMPVA, Medicare, or any other government agency. For official VA information, contact the VA at 1-800-827-1000 or VA.gov."

{# gate: va_not_accredited #}
```
src: va-accred, va-5901, va-ogc, vso, ca-sb694
```
### D2 · VA Accreditation & VSO Referral
- Not accredited by the VA and no claims help: "not accredited by the VA… free VA-accredited help via VSOs and VA.gov." (J&R confirmed not accredited / no claims; lawyer to confirm the exact line per 3.1.)
{# /gate #}

```
src: va-seal-civil, ftc5
note: VA-seal/insignia citation hygiene — use 18 U.S.C. §701, not §709 (N12 / 3.25).
```
### D3 · VA / CHAMPVA / TRICARE: Medicare Coordination
- Describe Medicare coordination accurately; no implied VA affiliation/endorsement.

```
src: ftc5
note: "Vetecare" is a program J&R's FMO (Advocate Health Advisors) runs; J&R is "Vetecare Certified" through it and plans a referral link to https://www.advocatehealthadvisors.com/who-we-serve/veterans (example of another TPMO's referral: https://www.iainow.com/veterans--medicare/vetecare). The "Vetecare Certified" claim must be substantiable and must not imply VA accreditation/endorsement.
flag: vetecare-referral
```
### D4 · Vetecare / Advocate Veterans Referral
- Referral link to Advocate Health Advisors' veterans page (FMO program); identification/referral only, no implied VA endorsement.

```
justification: footer's compressed line is necessary but not a §1140/§1.9 defense; full DoD/TRICARE/CHAMPVA enumeration + accreditation posture live here so the footer stays lean. D2 conditional on the claims determination (now confirmed not accredited / no claims).
note: Services-page SMS/program disclosure copy still TBD (see 5.24).
flag: services-disclosure-copy
```

</services>
<credits>

```
NEW canonical home for site credits — adopts the dedicated Credits page over the former About-page surface (latest structural decision). Not a required legal document; good housekeeping.
see: about (now points here) · terms §7
flag: image-attribution
```

# Credits

## Image and media attributions

```
src: cc-by, noun, unsplash, pexels, pixabay
```
We credit each image and icon according to its license:
- Attribution-required: Flickr CC BY (photographer + source URL + CC BY deed link); Noun Project free-tier ("Icon by [creator] from the Noun Project").
- No-attribution: Unsplash / Pexels / Pixabay standard downloads and Flickr public-domain (CC0 / PDM / US Gov Works / Flickr Commons), courtesy credit optional.

We list attribution-required assets here, per asset, as each one is used.

## Site credits
```
note: web developer and other site credits TBD
```

```
justification: attribution is satisfied case-by-case per each asset's license, centralized here instead of on About. Public-domain / no-attribution clears copyright only, not trademark, publicity, or property rights in what an image depicts; secure model/property releases before using recognizable people, logos, or private property in promotional material (release risk = agency's).
```

</credits>
<home>

```
status: STUB — placeholder, body TBD. Launches 6/30/2026. Renders the global footer (all required disclosures). If the lead form also renders here, the Contact form's two consent checkboxes (the required clickwrap legal-assent and the optional SMS opt-in) and their links must repeat at this instance, and the consent record must capture the page/context (see contact, 5.16 / N11).
```

# Home
```
note: page body otherwise TBD; the consumer-health-data section below is REAL launch content, added 2026-06-09 to serve the MHMDA "prominent homepage link" requirement (mhmda-homepage-prominence). The footer "Your Data Rights" group still renders too.
```

```
src: mhmda, nv-603a
see: consumer-health-data-privacy · global-sitewide-footer (Your Data Rights group)
flag: mhmda-homepage-prominence
note: MHMDA §19.373.020 requires a prominent CHD-policy link on the homepage; this dedicated section is that link — more conspicuous than, and complementing (not replacing), the footer group. NV SB 370's "available online" duty is met by the same link. BUILD: render this near the top / above the fold so it reads as "prominent." Counsel confirms the footer + this section clear the bar (mhmda-homepage-prominence).
```

## Your privacy and your health information

Some of what you share with us (even just that you are looking into Medicare or other health coverage) can be "consumer health data" under Washington{# gate: jurisdiction = NV #} and Nevada{# /gate #} law. We keep a separate, dedicated policy that explains how we handle it, the choices you have, and how to ask us to delete it.

[Read our Consumer Health Data Privacy Policy](/consumer-health-data-privacy)

</home>

<referrals>

```
status: DRAFT — every authority UNVERIFIED pending counsel + FMO; not live. NOT in the 6/30 launch set (it is on the planned-by-12/31/2026 list, company-facts Web) — gated dark behind `referrals_page` (off) until FMO marketing review + counsel FTC pass (testimonials-display). Seeded rev 10 from the courier's mock (2026-06-11).
```

{# gate: referrals_page #}

# Reviews and referrals

```
src: ftc-endorsement-guides, ftc5, cms-2262, wa-wac-284-50
see: home (testimonials carousel) · global-sitewide-footer (TPMO disclaimer + non-affiliation + solicitation line)
flag: testimonials-display · trade-name-use · referral-comp-out
note: marketing surface — CMS testimonial rules reach MA marketing, so FMO review gates the `referrals_page` flip; the global footer disclosures render here as on every page (TPMO disclaimer basis pending 2.1). Curation rules live at testimonials-display: genuine + unedited, no misleading cherry-pick, last names obfuscated, individual outcomes framed "results vary," static carousel only (no live Google/Yelp widget — preserves the cookieless posture, 5.2/5.3); exclude or disclose the two developer-authored reviews (1/8 Google, the sole Yelp — courier 2026-06-11); hold the Yelp profile link until unaffiliated Yelp reviews exist. The carousel is the single-sourced `<testimonials heading="..." />` include (default heading "Reviews"; shared with Home); the mentions/snippet content stays page-local. Snippet name form rides trade-name-use; the no-pay sentence is DRAFT pending referral-comp-out.
```

We're a small, word-of-mouth business. This page shares what clients say about us, thanks the sites that mention us, and explains how to refer someone to us. We don't pay for reviews or mentions.

## What clients are saying

<testimonials heading="What clients are saying" />

We don't pay for reviews, and we don't trade anything for them. The quotes here come from our public Google and Yelp pages. You can read every review, good or bad, at the source: {GOOGLE PROFILE LINK} · {YELP PROFILE LINK — held until unaffiliated Yelp reviews exist}.

## Mentions from the community

Some healthcare-community sites have mentioned or linked to us without us asking and without any payment. We're grateful for the support.

{EXAMPLE MENTIONS LIST — pending J&R; each entry links back to the mentioning site}

```
note: "without us asking" is scoped to the existing organic set (J&R 2026-06-11: no solicitation, no consideration). The invite below solicits future mentions, so never restate ALL mentions as unsolicited; any mention J&R republishes here rides testimonials-display.
```

## Mention or refer us

If you'd like to mention us on your site or refer someone to us, we'd be honored. Use your own words. We only ask that you write our name as J&R Health Insurance and link it to https://jrhealthins.org:

{SNIPPET — `<a href="https://jrhealthins.org">J&R Health Insurance</a>`}

We don't pay for links or mentions, and we don't run affiliate or referral-fee programs.

```
note: no reward of any kind is offered for referrals (CMS beneficiary-inducement hygiene — FMO confirms). Swap the snippet to the full legal name if counsel directs (trade-name-use). Final sentence DRAFT pending referral-comp-out.
```

## Feedback

If you have feedback about our service, or ideas for how we can improve, please contact us. Our contact details are at the bottom of every page. We read everything, and we use it to get better.

```
note: `<feedback />` include candidate — single-sourced, drop-in on multiple pages like `<testimonials>`.
```

{# /gate #}

</referrals>
</pages>
<flagged-items>

# Flagged-Items Register — canonical open-issues source

Single machine-readable register of OPEN issues, optimized for LLM parsing: one item = one row; one canonical home per item (no parallel restated copies); resolved items collapse to the Closed ledger as one-liners; settled facts live in **Locked decisions** + the immutable authority table. The human-readable session hand-off list is GENERATED from this register per `<resolution-requirements>` — do not maintain a parallel re-cut here. Process/edit history (the dated change-log, the AUDIT NOTE, the RE-BASELINE note, and the superseded register snapshot) moved to `birds-eye-history.md` to keep this file seed-lean; only forward-looking content lives here.

**Conventions (stated once):**
- **Owner lane** = who clears it first: **J&R** (client facts) · **FMO** (Advocate Health Advisors; CMS/Medicare sign-off) · **ATT** (retained counsel) · **EXT** (external primary-source verification — *pass returned 2026-06-09; confirmed cites READY to graduate at the next immutable rev, not yet moved*) · **WEB** (web/dev + agency operations).
- **Severity:** 🔴 blocks go-live or would ship a factual error · 🟠 resolve before sign-off · 🟡 cleanup / FYI.
- **id** = stable key. Bucket numbers (1.1, 2.1, 3.1…) and descriptive ids (`sms-consent-scope`) are kept; legacy reconciliation codes (`[FR-x]`, `[B-xx]`, `[§x]`) are dropped. **refs** = related ids / page §.
- Page-annotation `flag:` keys resolve via the **Flag index** at the bottom. All cited authority is UNVERIFIED pending counsel/FMO.
- **Anchors (parent items):** `1.1` (lead-sharing reality) and `sms-legal-theory` are anchors — do NOT close any dependent item while its anchor is open. `sms-legal-theory` / `3.27` (interim SMS, active now) is the top LIVE, non-launch-gated exposure, re-ranked above the launch-gated 🔴 blockers (verification + audit passes concur: lead follow-up that mentions any benefit reads as marketing under the CMS marketing definition, flipping consent to PEWC).

---

## Locked decisions — do NOT re-litigate

Settled against primary sources / J&R confirmation. Reconciled *against*, never reopened. The facts themselves live in the immutable authority table; this is the do-not-flip list.

- **GA = no comprehensive privacy law.** SB 111 / Act 462 (signed 5/11/2026) is a rural-hospital tax-credit statute (O.C.G.A. §31-8-9.1); the House gutted the privacy text, no restore. No thresholds, no "Article 35 of Title 10." Breach law (O.C.G.A. §10-1-910 et seq.) + GA AG only. Stale trackers (LegiScan/TrackBill) show a dead caption and do not control; a current law-firm source (recordinglaw.com) likewise mischaracterizes Act 462 as a privacy law — it pattern-matched the dead caption, so disregard it (verification pass 2026-06-09). Standing 2027-session watch.
- **CA SB 694 eff. 1/1/2027** — veterans / VA-accreditation statute (chaptered 2/10/2026, non-urgency). NOT a Medicare-marketing/SMS rule. Keys the Veterans D2 calendar + `va_not_accredited`.
- **FCC cross-channel "revoke-all" eff. 1/31/2027** (DA 26-12). Core 10-business-day revocation already in force (4/11/2025).
- **FCC one-to-one rule is DEAD — do NOT implement.** Vacated (IMC v. FCC, 11th Cir., 1/24/2025) + removed from the CFR (DA-25-621 / 90 FR 42137, doc spans 42137–42138; §64.1200(f)(9) reverted to pre-2023 PEWC). The separate **CMS one-to-one consent (§422.2274) SURVIVED** and still governs sharing beneficiary contacts — firewalled to data-sharing contexts.
- **SHIP timing:** keep SHIP in the TPMO disclaimer through 9/30/2026; remove 10/1/2026 (CMS CY2027). It lives in the disclaimer's **third** sentence. Do NOT swap early even though eCFR already shows it removed (text-effective vs. marketing-applicability split).
- **Calling/texting window = 9 a.m.–8 p.m. recipient-local.** Floor = NV (NRS 598.0918(3), covers texts); ceiling = WA (RCW 19.158.110(4)) + OR (HB 3865). [Pinpoint amended rev 12 on two independent official-text reads (4.16 closed); parallel hours text at ~RCW 19.158.040(2) was the likely source of the historic (2)/(4) split - do not re-cite (2) for hours.] Do NOT cite ESHB 2274 for hours — it is the CEMA damages/actual-knowledge amendment (statutory damages $500→$100/msg + an actual-knowledge requirement for subject-line falsity, covering commercial email AND text, eff. 6/11/2026), not the calling-hours statute.
- **NV 603A clocks (verified):** deletion 30 days binding the controller itself (NRS 603A.515(1)); +30 downstream (.515(2)); response 45+45 (.510); backup cap 2 years (.515(3)); geofence 1,750 ft (.540); AG-only, no private right of action.
- **src-key split (do not re-merge):** `fcc-1to1-vacated` (dead) ≠ `fcc-da26-12` (in-force revoke-all) ≠ `cms-2274` (surviving CMS one-to-one).
- **Rejected external-audit claims (do NOT reintroduce):** GA enacted a privacy law (FALSE); FCC one-to-one in effect (FALSE); NV 30-day deletion is processors-only (FALSE — binds the controller); TIPA 60-day cure sunsets 7/1/2027 (FALSE — the cure period is permanent); TIPA pinpoint "§47-18-3201" (use §47-18-3301 et seq. — the 3201 numbers are the ENROLLED-BILL numbering that codification renumbered into the 3301 series; §§47-18-3201–3205 is the repealed Booting Consumer Protection Act. The verification thread's C1 proposed reversing to 3201 and was DECLINED; reconfirmed by the 2026-06-10 tiebreaker vs the enrolled bill + TN AG guidance — do not re-open); a GA rights section behind a dated switch (moot — no GA law).
- **Three pages re-baselined 2026-06-09** (no longer byte-identical to the first upload, by design; tech-lead sign-off): footer (Quick Links trimmed), CHD (FMO name corrected), Accessibility (WCAG verb softened, spam-tool removed, dates placeholdered). The current working copy is the baseline.
- **Agency sales-process artifacts + electronic-marketing language are FMO-owned (J&R assurance 2026-06-09).** Advocate Health Advisors owns and compliance-reviews the agent scripts, checklists (incl. Scope of Appointment), and training materials, and reviews the email / online-chat / other electronic-marketing language (including TPMO-disclaimer placement across those channels). Do NOT re-flag script / checklist / training / email-chat language as an open J&R or website task — route any such item to Advocate. Advocate is also the confirmed sign-off authority for ALL website disclaimer text (the footer Important Disclosures and its TPMO / SHIP / no-cost / solicitation lines, plus the Terms disclaimer summaries) per J&R assurance 2026-06-09. That sign-off is pending until J&R's content is final, so the disclaimer-wording items (FMO lane 2.1, 2.2, 2.4, 2.6, 2.7, 2.8, 2.9, 2.11) stay OPEN as pending-Advocate-sign-off rather than closed. The one FMO item that is a content-classification judgment, not disclaimer wording, is the educational-vs-marketing call on Medicare 101 (2.5).
- **Intulse offers no DPA as a standard or named instrument** at any tier and refuses client-supplied paper (Contract Acceptance Policy); the binding own-use analog is MSA §16 + the Trust Center "No AI Training" commitment, not a DPA. Settled against Intulse's own legal pages (2026-06-10 sourcing pass; provenance in birds-eye-history) — do NOT re-litigate whether a standard Intulse DPA exists. Still OPEN (not locked): whether any PHI / CHD routes through Intulse, and whether a bespoke DPA is obtainable via the "rare circumstances" exception (partner-legal Intulse / 3.7).

---

## Open issues (open-only; 🔴 first within each lane)

### J&R lane — client facts (these drive the Questions-for-J&R appendix)
| id | crit | item | why it matters / action | refs |
|---|---|---|---|---|
| entity-license | 🟠 | LLC business-entity producer license + sole-producer confirm | The licensure answers named only Rowena's individual licenses (J&R 2026-06-11). Confirm (a) whether J&R Health Insurance LLC itself holds business-entity producer licenses in WA (and OR/GA/TN), and (b) that Rowena is the sole licensed producer, so no page copy implies Jasmine sells. Counsel then confirms whether soliciting under the LLC name requires the entity license (WA OIC producer/agency licensing — authority table). Routine checklist confirmation; frame it that way for J&R. Verified-input chain (Validator package 2026-06-12, official-text reads; UNVERIFIED for counsel): RCW 48.17.090(3) — a resident business entity needs its own producer license, with a designated responsible licensed producer at (3)(b) (DRLP; WAC 284-17-603); RCW 48.17.180 — producing under any name other than the legal name requires ch. 19.80 registration AND prior notice to the Commissioner; a sole-member LLC with one licensed individual still needs the entity license + named DRLP. Operational aims (official OIC/OCI/TN.gov/DFR/NIPR pages captured-as-of 2026-06-12, counsel-confirm grade): OR affiliation filing within 30 days of entity licensing + assumed-name with the SOS Corp Division; GA OCI Name Approval Acceptance Letter (restricted words "Health"/"Insurance", ~$55) BEFORE the SOS filing; TN business-entity filing via NIPR with a designated DRLP; non-resident entity fees ~ OR $75 / GA $15 / TN $50; non-resident CE exempt in good standing. | 1.6, trade-name-use, about, privacy §1 + summary, terms §2 + summary |
| 1.9 | 🟠 | HIPAA status + self-description | Determine J&R's HIPAA status: covered entity, business associate, or neither. A Medicare broker is usually NOT a covered entity (not a provider/plan/clearinghouse), and J&R confirmed 2026-06-11 that it does NOT handle carrier-sourced medical information in day-to-day work (self-reported doctors/medications only — still MHMDA consumer health data), which weakens the business-associate trigger; counsel still pins the status. The site-side operative regimes are GLBA + state insurance privacy + MHMDA (non-HIPAA consumer health data). Company-facts HIPAA line trued up to the confirmed facts at rev 10 (the prior carrier-PHI premise and the "operations are HIPAA-compliant" over-claim removed); counsel confirms the final characterization. | 3.23, company-facts, 5.30 |
| campaign-lead-path | 🟠 | Advocate social-campaign + recycled-lead path | Advocate runs social marketing campaigns for J&R at no charge to J&R (J&R 2026-06-11). Confirm whether campaign-generated leads (and the recycled/cold leads) arrive as DATA from Advocate or only as click-through traffic to J&R's own form, and rough volume. If data: they join the 3.7a inbound consent/authorization analysis, and volume bears on the "on occasion… a small number" phrasing in CHD §4 / Privacy §2. Carrier angle: "3rd party lead generated services" is a NEVER-allowed 10DLC use case, so texting third-party-sourced leads under the registered campaign needs scrutiny before SMS go-live. Campaign creative/disclaimer compliance itself rides the FMO electronic-marketing ownership lock (Locked decisions). | 3.7a, privacy §2, chd §4, 3.27 |
| retention-period | 🟠 | Non-client retention — operational (AgencyBloc dual-clock) + SOA/recording 10-yr | Privacy §7 REVISED 2026-06-09 to three buckets; the legal recordkeeping-floor question is settled in the text (no minimum on a bare inquiry; minimums attach to consummated transactions + artifacts), pending EXT (4.12) + counsel. Remaining: confirm AgencyBloc can expire lead/inquiry data (~24 mo from last contact) and consent proof (longer) on SEPARATE clocks. NEW (J&R 2026-06-11): J&R records sales calls and creates Scopes of Appointment; SOA/chain-of-enrollment forms retained 10 years per CMS §422.504; sales-call recordings kept 10 years as J&R practice — the CMS floor for marketing/sales recordings drops to 6 years for recordings on/after 10/1/2026 (rows 129/131/133), so 10 exceeds the floor — a distinct long-retention bucket for the internal schedule (5.32); confirm where SOAs/recordings are stored (AgencyBloc? — 3.6) and that the 10-yr clock runs separately. J&R ANSWERED (2026-06-12, batch 5 Q6): schedule-based deletion with separate timers IS an available AgencyBloc function — capability confirmed; the actual clock configuration for the three buckets still needs to be set up (vendor checklist + 5.32). Still open on this row: storage location + separate 10-yr clock (Q7) and the DPA/BAA (Q5). | privacy §7, 4.12, 5.32, 3.6 |
| N14 | 🟡 | Annual Medicare certification (About credential) | Trust element for the About page; keep any "certified to educate on Medicare" claim accurate/substantiable and free of implied CMS endorsement. | about, about-recert-credential |
| 1.6 | 🟡 | Licensure footprint — CA/NV flip tracking | Confirmed (J&R 2026-06-11): WA/OR/GA/TN licensed + active, none lapsed — Rowena's individual licenses (WA exp 2028-03, OR 2028-03, GA 2027-03, TN 2027-03); WA is the only actively marketed state, OR/GA/TN license-held; CA + NV expected ~2027, not 2026. Residual: track CA/NV licensure and flip them `active` in build-conventions when granted. Holding a state out implies licensure (market-conduct exposure), so the list must never show a pending state (rule encoded at 5.33). LLC entity-license question split to entity-license. | build-conventions, 5.33, entity-license |
| referral-comp-out | 🟡 | Out-referral compensation (life/annuities/out-of-scope) | J&R refers clients out for life insurance, annuities, and out-of-scope prospects (current practice, J&R 2026-06-11). Confirm no compensation moves in either direction on those referrals. Scopes the /referrals page's "we don't pay for links or mentions, and we don't run affiliate or referral-fee programs" sentence (DRAFT pending this) and flags any anti-rebating/disclosure angle for counsel if compensation exists. Expected answer: none. Not launch-gating (page is dark). | referrals, testimonials-display, 1.4✅ |

### FMO lane — Advocate (CMS / Medicare sign-off)
| id | crit | item | why it matters / action | refs |
|---|---|---|---|---|
| 2.1 | 🔴 | No-count TPMO disclaimer variant | §422.2267(e)(41) has two codified variants, **both requiring** the `[# orgs]/[# products]` counts — there is no no-count variant in the reg. The no-count web form rests on informal CMS guidance for anonymous/no-ZIP pages. FMO confirms CMS still honors it under CY2027 and records the basis is sub-regulatory. | footer, terms §14 |
| 2.5 | 🟠 | Medicare 101 educational-vs-marketing | If the page names/compares plans or routes to the lead form, CMS may treat it as marketing (full marketing rules attach). FMO confirms it stays educational or reclassifies. | 2.6, N10, educational-vs-marketing |
| 2.7 | 🟠 | Carrier co-branding + logos (launch surface: Home, maybe Services) | A carrier-logos content section is planned for Home (and possibly Services) at launch, not just the post-launch Carriers page. Single-source the section + its disclaimer as one include so the wording can't drift across pages. Before it publishes: an Advocate-approved logo list (J&R confirming) **and** the accompanying disclaimer (carrier marks = identification only, no implied endorsement/affiliation, "we do not offer every plan" framing), FMO signs off the wording. Carrier logos are third-party trademarks shown by permission, so they ride this co-branding approval, NOT the Credits stock-image policy. Stays dark until Advocate delivers both; blocker only if the section ships at launch. When built, add a `carrier_logos_shown` switch together with its gate (avoid an orphan). | carriers, carrier-cobranding, home, services |
| 2.8 | 🟠 | No-cost / commission wording | Confirm the premium-neutrality statement ("does not increase the premium you pay") is accurate for every product + MCMG-consistent, and that FMO is comfortable with the footer→Terms §2 relocation. No bare "free." | terms §2 |
| 2.9 | 🟠 | "Disclaimer is not a defense" | Posting the CMS/SSA disclaimer is necessary but is **not** an SSA §1140 / §422.2262 safe harbor — conduct/layout must independently avoid implying government endorsement (no Medicare logos / card-like design). Confirm framing. | terms §14 |
| 2.2 | 🟠 | SHIP-swap post-swap wording | Confirm the FMO/counsel-approved text ("Medicare.gov or 1-800-MEDICARE") before 10/1/2026. (Target sentence + mechanism are settled — see Locked + 2.2a.) Also set a calendar reminder + a backup merge owner so this compliance-mandated dated swap (pre-staged PR per 2.2a) does not ride on one person's recall. | footer, terms §14 |
| 2.4 | 🟠 | Do NOT add "Assistance" to SHIP | The reg says "State Health Insurance **Program** (SHIP)" — match CMS's exact words (applies to the pre-10/1/2026 wording only). | footer |
| 2.6 | 🟡 | Solicitation line on the educational page | The site-wide "This is a solicitation for insurance" line is forced onto Medicare 101 — confirm it doesn't reclassify the content, and assign it a src key. Do NOT gate off without FMO direction. | medicare-101 |
| 2.11 | 🟡 | FMO is itself a TPMO | Reconcile FMO-required language into one coherent footer (don't import numeric counts or the lead-form consent paragraph). | footer |

### ATT lane — retained counsel
| id | crit | item | why it matters / action | refs |
|---|---|---|---|---|
| 3.1 | 🔴 | VA accreditation / claims disclosure line | Facts answered (J&R NOT accredited, no claims work — 1.14), but counsel finalizes the exact "not VA-accredited / free accredited-VSO help" wording; this **gates the Veterans D2 going live** (`va_not_accredited` ON; interim = non-affiliation line only). | 1.14, services D2, 3.29 |
| 3.3 | 🔴 | MHMDA carve-out must distinguish from NV | MHMDA = per se WA CPA violation **with** a private right of action (treble ≤ $25k); NV SB 370 is AG-only. A blanket carve-out over-carves for NV. Draft Terms §10/§13 to distinguish, or use "non-waivable statutory claims under applicable consumer-health-data law." | terms §10/§13, liability-carveouts |
| sms-legal-theory | 🔴 | SMS legal theory (cross-surface anchor) | Decide ONE theory and propagate it to every surface: (a) a genuinely constrained customer-care-only program, or (b) treat lead follow-up as marketing and capture full PEWC at the form. Risk: the customer-care-only label is contestable — a broker texting a lead toward a commissionable enrollment can read as marketing regardless of label, and WA CEMA (now covering commercial texts per ESHB 2274) + OR HB 3865 sweep commercial texts broadly. The chosen theory must read consistently across success-criteria, Privacy §3/§4, company-facts SMS framing, the footer disclaimer, the Contact opt-in checkbox, and Terms §6; today these lean customer-care but the theory is not formally decided. The characterization is live in launch copy even with `sms_program_live` OFF, so this gates coherent copy across the suite. FORCING FUNCTION (2026-06-11): Intulse's supplied opt-in template names customer care + account notification + marketing (matching J&R's register-broad intent); per the 10DLC guide the opt-in must carry the EXACT words of the registered use case, the use case is immutable once the campaign is created (3-month TCR lock, $20 per resubmission), and off-scope texts are carrier-blocked post-approval — so the decision now gates campaign creation, not just copy. Mapping: (a) → a Customer Care (or conversational UCaaS) campaign; current copy survives nearly intact. (b) → Mixed / Low Volume Mixed naming every type + per-type sample messages, with three review adds: the template's missing ATDS/autodialer disclosure vs classic PEWC (counsel), TPMO-disclaimer treatment in marketing texts (FMO, rides the 2.10 ownership lock), and MHMDA secondary-use consent for marketing use of CHD (counsel). | sms-consent-scope, tcpa-bar-framing, 3.27, 1.2, 10dlc-registration-readiness |
| 3.4 | 🟠 | Arbitration / class-waiver — include or strike | Drafted (Terms §13, FAA, 30-day opt-out, carve-outs, mass-arbitration batching). Strategic include-or-strike is counsel's call (tiny firm, no consumer charge); must carve out non-waivable claims (3.3), survive enforceability across 6 states, and rest on conspicuous clickwrap. J&R elected protective-and-formal 2026-06-11 (ledger: terms-contract-heaviness), so the regime stands as drafted pending this call. | 3.3, terms-contract-heaviness✅ |
| 3.5 | 🟠 | MHMDA in-scope / exemption posture | Non-PHI web-form data likely stays in scope (HIPAA exemption is data-level); the lead is collected pre-GLBA relationship. Recommend publishing the standalone CHD policy regardless (no threshold, PRA); get the call on record. | chd |
| 3.6 | 🟠 | CRM processor-vs-affiliate + DPA (AgencyBloc) | Disclose AgencyBloc as a **processor** (naming it an affiliate would trigger separate share-consent under MHMDA). No public DPA / BAA / subprocessor list was located (security page asserts SOC 2 Type II only; HIPAA/HITRUST sit on a marketing page) — request the non-public Subscription Agreement + signed BAA + DPA + subprocessor list + the underlying SOC 2 / HITRUST evidence directly. AgencyBloc receives the lead data, so this is the #1 vendor action; required for MHMDA §060 / NV 603A.525 processor-binding terms. (J&R 2026-06-11: J&R creates SOAs + records sales calls under a 10-yr CMS retention — confirm whether these live in AgencyBloc so the DPA + retention scope covers them; retention-period.) | 1.3✅, vendor-naming, 5.5, website-partner-legal-canonical-sources |
| 3.7 | 🟠 | Processor contracts forbid own-use | The "processor" label for AgencyBloc/Intulse/Cloudflare holds only if their contracts forbid own-purpose use (incl. product improvement). Review the agreements; any own-use makes that vendor a third party + breaks the §7 representation. Note: Intulse uses standardized agreements and will NOT sign a client-provided BAA (its standard terms claim HIPAA coverage), so decide whether any PHI routes through Intulse before relying on it for anything PHI-adjacent. Intulse own-use basis now located (MSA §16 no-sale + integration-data-not-retained, Trust Center No-AI-Training, UC Privacy Policy no-sale) — counsel confirms whether MSA §16 suffices as the processor-binding instrument absent a formal DPA (see partner-legal Intulse). | 3.6, sms-consent-scope, website-partner-legal-canonical-sources |
| 3.7a | 🔴 | Advocate inbound-lead consent — CONFIRMED inflow + present exposure | J&R 2026-06-11: Advocate sends J&R recycled/cold lead data (a real inbound flow that may include Medicare-beneficiary / consumer-health data); J&R sends nothing back (CHD §7 "we do not share with it" holds). PRESENT EXPOSURE: J&R already contacts leads, mostly P2P SMS off personal cells (3.27), so any recycled lead whose Advocate consent did not name J&R is live TCPA/CMS exposure NOW, not just a contract gap — confirm Advocate's capture and assess/mitigate immediately. Durable fix: the Advocate contract must carry the inbound consent/authorization burden before J&R relies on these leads — CMS §422.2274 PEWC naming J&R (TPMO-to-TPMO transfer) + MHMDA valid authorization for any CHD. Privacy §2 inbound-source disclosure added (draft). Advocate-run social-campaign leads, if delivered as data, ride this same inbound consent/authorization analysis (campaign-lead-path) — with the added carrier angle that "3rd party lead generated services" is a never-allowed 10DLC use case. Rev 12 HOLD: the Privacy §5/§6 vs CHD §7 outbound-share contradiction (package item 3) is fact-gated on a one-line J&R confirm (appendix Q3, batch 5) — PATH(a) drops the FMO from both §5/§6 sharing clauses if NO outbound flow exists; PATH(b) repairs CHD §7/1.1 instead if one does. Public copy unchanged pending the answer; counsel ratifies on landing. | 1.1✅, 3.6, 3.27, sms-legal-theory, privacy §2, campaign-lead-path |
| 3.8 | 🟠 | No-sale/no-share vs. operations | J&R confirmed no sale/share to other agencies + first-party-only leads (2026-06-11), so the promise squares with external flows; counsel ratifies that the CRM/carrier/FMO processor flows are not "sharing" (rides 3.9, 3.6). A promise contradicted by routine ops is UDAP exposure. | 1.1, 3.9 |
| 3.9 | 🟠 | Could any vendor flow be a "sale"? | "Sell" is broad (data for other valuable consideration). Confirm nothing to Cloudflare/AgencyBloc counts before relying on the flat no-sale statement. | 5.5 |
| 3.10 | 🟠 | Data-security regime | For the business of insurance the state insurance data-security law (NAIC model, DOI-enforced) usually governs, maybe with FTC Safeguards too; MHMDA §050 adds CHD duties. Frame §7/§13 as "GLBA functional regulation; instrument varies by state." | data-security-regime |
| 3.11 | 🟠 | Governing-law / venue enforceability | WA law + Pierce County venue against out-of-state consumers (CA/OR/NV/GA/TN) is jurisdiction-dependent; some states resist out-of-state forum clauses. Confirm Puyallup is in Pierce; consider "to the extent permitted." | terms §12, venue-choice-of-law |
| 3.12 | 🟠 | Limitation-of-liability cap | The USD-100 cap is set but WA scrutinizes consumer liability limits — confirm it survives + that the 3.3 carve-out is broad enough. | terms §10 |
| 3.13 | 🟠 | OCPA insurer/producer exemption | If J&R is an OCPA "insurance producer" it is entity-level exempt (ORS 646A.572(2)(o)) — could drop OR from several docs. Confirm a valid OR nonresident producer license (no GLBA entity exemption in OCPA; AG-only). | 3.14 |
| 3.14 | 🟠 | Sub-threshold posture (CCPA/OCPA/TIPA/GA) | Facts confirmed (J&R well below all thresholds, no data sales — in company-facts); counsel makes the formal exemption conclusion. CalOPPA applies regardless of size. Document the analysis; re-test annually. | rights-posture, 3.13, 3.5, 3.15 |
| 3.15 | 🟠 | NV SB 370 GLBA entity exemption | J&R may be NV-exempt entirely. If exempt: keep the NV provisions as near-zero-cost courtesy (the policy must exist for WA regardless). If not: revisit the deletion timeline (3.16). | 3.16 |
| 3.16 | 🟠 | CHD deletion clock | NV 30-day verified (binds the controller). Recommend committing CHD §11 to a single 30-day deletion clock (satisfies both states) + keep WA's 45+45 response. | 5.25 |
| 3.17 | 🟠 | CHD combined WA/NV structure + NV-pending blocks | WA AG "no extraneous content" guidance vs. one combined policy carrying NV + HIPAA + Terms cross-refs. Decided posture = one combined policy; counsel blesses the structure + catch-all scope. NV-pending launch default: the CHD NV blocks (§1 SB 370 + coverage sentences now gated, §10 AG link, §14 1,750-ft geofence) stay DARK until NV flips active — defensible on both grounds (not doing NV business + WA no-extraneous-content). PARKED for counsel: whether NV CHD law attaches to an NV resident's form submission pre-market (if yes, force NV blocks on independent of market status). | chd, 5.23, build-conventions |
| 3.26 | 🟠 | Outbound telemarketing — legal applicability + registration | Lead follow-up = telemarketing. Open piece is the legal call: FTC TSR applicability/exemption, OR telephonic-seller registration, TN $500 registration. The operational side (DNC scrubbing, TCPA PEWC capture, STOP ≤ 10 business days) rides in the FMO-owned scripts/checklists/training per Locked decisions. | 4.1, 3.27 |
| 3.27 | 🔴 | Interim SMS exposure — active now (personal cells) | ≈99% of comms today is P2P SMS off agents' personal cells. P2P-vs-A2P is a carrier/CTIA deliverability concept, NOT a TCPA or state-mini-TCPA defense — those texts still need a consent basis, STOP/HELP, and 9a–8p window compliance right now, independent of the A2P switch and of how sms-legal-theory resolves. Present, ongoing exposure, not launch-gated; assess/mitigate until Intulse 10DLC is live. Includes the recycled/cold leads Advocate sends in — texting/calling them depends on Advocate's consent capture naming J&R (3.7a), so that vector is part of this live exposure. | sms-legal-theory, N7, 3.7a |
| call-recording-consent | 🟠 | Sales-call recording vs. state all-party consent | J&R records all sales calls (CMS §422.2274 requires it; SOA forms 10 yr per §422.504 + recordings kept 10 yr as J&R practice (CMS floor = 6 yr for recordings on/after 10/1/2026) — retention-period / 5.32). In all-party-consent states (e.g. WA RCW 9.73, plus check the other launch + contact states), recording requires every party's consent — confirm the recording-disclosure/consent practice (a recorded consent announcement at call start is the usual fix) and how it squares with the CMS recording mandate. Do NOT adopt the contested recording-scope claim (C4 stays do-not-adopt). | retention-period, 3.27 |
| rights-posture | 🟠 | Privacy §8 rights mechanics | Confirm the appeal-on-denial path (Virginia-model laws), the defensive "to the extent applicable" posture, and that a 2-person staff can meet the 45-day clock (build intake logging; single intake = info@ / phone). | 3.14, 1.12✅ |
| vendor-naming | 🟠 | Privacy §5 name-vs-category | §5 keeps recipients at category level while §2 names infrastructure — decide name-vs-category consistently with the CHD policy; tie to the processor classification. | 3.6 |
| sms-consent-scope | 🟠 | SMS scope/verbiage (downstream of sms-legal-theory) | Intulse verbiage RECEIVED 2026-06-11 (N7; verbatim snippets + the guide's operative requirements live in partner-legal Intulse). Per Intulse's own 10DLC guide the blocks are samples/templates (adaptation allowed); the binding constraints are the required opt-in element set + the EXACT words of the registered use case. Our Contact checkbox already carries every required element for a customer-care registration. Reconciliation deltas: Intulse's template scope includes marketing (forces sms-legal-theory), and its blocks lack our FCC 24-24 any-reasonable-means + 10-business-day revocation, alternative keywords, state-hours line, 911 line, and tailored consent-not-a-condition — keep our stronger clauses layered on top, not replaced. Do-NOT-adopt verbatim: (a) the absolute "not shared with any third parties" sentence — literally false for our processor stack (Intulse + AgencyBloc hold the number and consent record); the guide's operative requirement is no sharing with third parties for THEIR direct marketing, which our carve-out wording + the §4 bold line meet; (b) "By submitting this form and signing up for texts" — conflates submission with SMS consent; keep the two-checkbox separation; (c) "condition of purchase" — keep our "not a condition of getting help or of buying any insurance product." Once sms-legal-theory is decided, propagate the chosen scope verbiage across Privacy §3/§4 + Terms §6 + the checkbox before flipping `sms_program_live`; if customer-care-only holds, marketing texts still need separate PEWC. | sms-legal-theory, N7, 3.27, 10dlc-registration-readiness |
| 3.18 | 🟡 | "Other states" pointer vs. MHMDA "no extraneous" | The CA/OR/GA/TN → general-Privacy pointer is likely defensible as scope clarification; keep it in CHD or move it — make the choice deliberate. | chd |
| 3.19 | 🟡 | Incorporation chain / sequencing | Terms §1 incorporates Privacy + CHD by reference; finalize data statements only after those policies settle, then back-check. | terms §1 |
| 3.20 | 🟡 | E-SIGN consent depth | Fuller E-SIGN block (hardware/software, withdrawal) vs. the lighter brochure-site treatment. | terms §5 |
| 3.21 | 🟡 | Conspicuousness form (§9/§10) | Bold/set-off vs. all-caps. House style avoids all-caps (WCAG); counsel's call — log a precision exception if all-caps is wanted. | terms §9/§10 |
| 3.22 | 🟡 | MA marketing disclaimer trigger | Standard CMS MA disclaimer generally only on plan-specific marketing; decide whether the brochure crosses the line; revisit when plan-specific content is added. | 2.5 |
| 3.23 | 🟡 | Entity-level HIPAA NPP | Site ingests no PHI; the site-side HIPAA notice stays a dormant scaffold unless a portal/PHI intake is added. | 1.9 |
| 3.24 | 🟡 | §1557 / emergency notices | Applicability to a brokerage giving no clinical care is uncertain; decide whether either applies — don't assert coverage that doesn't exist. | — |
| 3.25 | 🟡 | VA seal/flag citation hygiene | If a VA seal is ever reproduced: 38 CFR §1.9 + 18 U.S.C. §701 (NOT §709). Currently no seal is reproduced. | N12 |
| 3.28 | 🟡 | Disclaimers ↔ Terms structure | Incorporate the footer block by reference (Terms §14/§15) vs. fold in — drafted toward by-reference; counsel's call. | terms §14 |
| 3.29 | 🟡 | Terms §14(c) incorporation gap | The footer carries VA non-affiliation but not the not-accredited-for-claims line (that's Services D2 behind `va_not_accredited`). Cross-reference D2 for the accreditation line. | 3.1, services D2 |
| age-floor | 🟡 | 18+ age floor | Confirm the 18+ floor fits a Medicare (65+) audience + caregiver/representative use, consistent across Terms + the privacy docs. | terms §4 |
| soft-gdpr | 🟡 | Privacy §11 keep-or-omit | Keep the defensive "soft GDPR" section or omit it (GDPR N/A for a US brochure not targeting the EU). | privacy §11 |
| business-transfer-clause | 🟡 | Privacy §5 business-transfer clause | Keep or cut for a small brokerage (low-risk, commonly expected). | privacy §5 |
| tcpa-bar-framing | 🟡 | 📌 Success-criteria TCPA bar wording (pinned 2026-06-09) | The immutable TCPA bar was reworded from "capture PEWC at the lead form **at launch** (not a customer-care-only posture deferred to later)" to a clean standard (capture proper consent, PEWC for marketing messages, keep an audit log, honor revocation within 10 business days, do not implement the vacated FCC rule), because the old absolutist framing conflicted with the resolved posture (SMS dark behind the `sms_program_live` switch, separate optional opt-in, customer-care-only scope, marketing PEWC captured separately). PIN: at sign-off, decide whether the clean standard is the right bar or the original "PEWC at launch / not customer-care-only" framing should be restored as an aspirational ceiling. Editorial / standard-framing call, not a launch blocker. The original wording is quoted verbatim in this item (and survives in the original uploaded `_birds-eye-view.md`). | sms-legal-theory, sms-consent-scope, success-criteria |
| hbnr | 🟡 | FTC Health Breach Notification Rule (16 CFR 318) applicability | GRADUATED to the authority table as a Monitor row (2026-06-10). OPEN counsel-evaluate question only: whether the HBNR reaches a brokerage lead form (likely outside "PHR vendor" scope; escalates only if the site ever ingests on-site PHI). Pairs with MHMDA / NV SB 370 + data-flow. | 16cfr318 (table row), 3.5, 5.2, 5.5 |
| trade-name-use | 🟠 | Short-form / trade-name use — confirmed unregistered | Legal name confirmed as "J&R Health Insurance LLC" (1.5 closed 2026-06-11). CONFIRMED (J&R 2026-06-11): "J&R Health Insurance" is NOT currently a registered DBA/trade name, and J&R intends to prioritize registering one. The short form is live across every public surface at launch, so: counsel confirms whether WA trade-name/DBA registration (RCW 19.80) plus any OIC name-use filing is required, or whether the legal pages' defined-short-form approach suffices; J&R registers if so. TCR brand-form handling (legal name exactly as on tax documents; DBA/Brand-Name field honestly blank until registered) lives at 10dlc-registration-readiness. WA chain (Validator package 2026-06-12, official-text reads; UNVERIFIED for counsel): RCW 19.80.010 — register the trade name via the DOR Business Licensing Service ($5/name; rules/fees RCW 19.80.045); RCW 19.80.040 — cannot maintain a suit until registered (contracts stay valid; defending suits unaffected); pairs with the RCW 48.17.180 prior-notice-to-Commissioner duty before use. | 1.5✅, terms §2, 10dlc-registration-readiness, entity-license |
| testimonials-display | 🟠 | Client testimonials on the site (home-page carousel + /referrals page) | Before any Google/Yelp reviews go on the site: use genuine, unedited reviews with no misleading cherry-pick (Fake/AI Reviews Rule, 16 CFR 465); for any reviewer with a relationship to J&R (e.g. the site developer) either disclose the material connection or use only unaffiliated reviewers (Endorsement Guides, 16 CFR 255); frame a strong individual outcome (e.g. a cancer-care or large-savings story) as "individual experience, results vary," not implied-typical; CMS testimonial rules reach MA marketing, so FMO signs off; build note — a static curated carousel preserves the cookieless posture, a live Google/Yelp widget adds a third-party script and breaks it (5.2/5.3). Reviews confirmed organic, no quid pro quo (company-facts). SCOPE EXTENDED rev 10 (2026-06-11): also covers the seeded /referrals page (dark behind `referrals_page`; FMO marketing review + counsel FTC pass gate the flip). Developer-authored reviews identified (courier 2026-06-11): 1 of 8 Google + the sole Yelp review — exclude from on-site display or disclose; hold the Yelp profile link until unaffiliated Yelp reviews exist. Keep "unsolicited" claims scoped to the existing organic set, since the page invites future mentions. Blocker only if the carousel ships at launch (the /referrals page is dark). Rev 12: the footer Yelp link was REMOVED per the hold (restore when unaffiliated Yelp reviews exist). Courier 2026-06-12: the sole Yelp review is genuine and unpaid, but its author builds the site free of charge — a material connection under the Endorsement Guides regardless of payment direction (free services / business relationship), so the hold + exclude-or-disclose treatment stands. Soliciting honest client reviews is fine; incentivized or sentiment-filtered solicitation is not (16 CFR 465). | 2.5, 5.2, 5.3, company-facts, referrals, referral-comp-out, trade-name-use |

### EXT lane — external primary-source verification (hand-off integrated 2026-06-10)
*The 2026-06-10 verification hand-off was integrated as the single immutable rev: authority-table row revisions (C2/C3/C5/C6), five new rows (GA FBPA, 38 CFR §1.9, TN solicitor registration, WA WAC 284-50, FTC HBNR), and partner-legal deltas (Cloudflare v6.4, Intulse repoint, Registrar-terms demote, Advocate URL). TIPA: C1 (reverse to §3201) was DECLINED — the 2026-06-10 tiebreaker confirmed the codified §§47-18-3301–3315 and 4.8 is closed. The CONTESTED recording-scope claim (C4) stays do-not-adopt. NOT covered by this hand-off and still open: the 4.12 producer-records cluster (not processed this pass); the SMS-scope nuance on 4.1; NAIC (D)-vs-(B) ownership (4.6); and the focused second-pass / not-verified cluster (4.13–4.17 below).*
| id | crit | item | status / action | refs |
|---|---|---|---|---|
| 4.1 | 🔴 | Calling window 9a–8p / NV floor | Resolved internally (Locked); EXT confirms the 9 a.m. floor is NV-driven + counsel ratifies; decide public-Terms vs. internal-SOP. | 3.26 |
| 4.11 | 🟠 | Re-verify all dated items at launch | Standing: CY2027 wording/timing, CA SB 694, GA 2027 session, FCC dates, all URLs. These dates also parameterize the config-schema flip schedule (the dated swaps in `<config-parameters>`), so precision drives build-time behavior, not just copy. STANDING (rev 12): FTC §5(m)(1)(A) ceiling = $53,088/violation through 2026 (16 CFR §1.98 eff 1/17/2025; the 2026 inflation adjustment was CANCELLED by OMB M-26-11, 4/17/2026; next cycle Jan 2027). SSA §1140 figure CONTESTED ($13,132 OIG page vs $12,799 reported FR Doc 2026-11585, which also tensions with M-26-11) — published copy carries no figure (correct); annotation-only; needs-fresh-fetch (#3). | config-schema |
| 4.5 | 🟡 | 45 CFR §155.220 — one-rule resolution, ratify then graduate | RESOLVED-PENDING-FETCH (Validator package 2026-06-12): CMS-9883-F = FR Doc 2026-10050 = the 2027 HHS NBPP, 91 FR 29526 (doc spans 29526–29877; the §155.220 amendatory text sits ~91 FR 29864, hence the eCFR cross-ref), published 2026-05-20, effective 2026-07-20. Consent-documentation duty §155.220(j)(2)(iii), 10-yr retention at (j)(2)(iii)(C); the HHS-standard consent form applies to plan-year 2028 enrollments (the old "1/1/2028" note = same fact loosely dated). One DATES-paragraph read ratifies (fetch queue #1), then graduate. | §155.220 row, 4.17 |
| 4.9 | 🟡 | Mismatched inline citations (prior passes) | Treat prior inline links as unreliable; re-pull primary sources for anything load-bearing. | — |
| 2.2b | 🟡 | "eCFR already shows SHIP removed" | VERIFIED 2026-06-09: eCFR §422.2267(e)(41) still contains SHIP — confirms the text-effective vs. marketing-applicability split and the do-not-swap-early Locked decision. STANDING: re-pull eCFR on or after 10/1/2026 to confirm the SHIP removal landed before merging the pre-staged footer PR. | 2.2 |
| 4.12 | 🟡 | State producer-recordkeeping floors (Privacy §7 basis) | Confirm no recordkeeping minimum attaches to a bare non-client website inquiry: WA RCW 48.17.470 (5 yr, consummated transactions; life/disability excluded), CA Ins. Code §10508 (5 yr; an application — not an inquiry — is the trigger), NV NRS 683A.351, GA O.C.G.A. §33-23-34, OR ORS 744.068 (+ OAR ch. 836), TN Comp. R. 0780-01-61-.22; NAIC MC-90 chart for cross-state/roadmap. Also confirm the consent-clock basis (TCPA §227 + the 4-yr §1658 limitations). NOT covered by the 2026-06-10 hand-off — nothing graduated this rev; rides to a later focused pass, then graduate. Default representation (overridable): individual per-state rows under a shared "producer recordkeeping" category, not one consolidated row, to keep the per-pinpoint and per-region precision (CA application-not-inquiry, WA life/disability exclusion, TN LTC-advertising-specific not a transaction clock, OR period in-statute); FTC TSR §310.5 updates the existing TSR row rather than adding one. | retention-period |
| 4.13 | 🟡 | Per-state enacted insurance-advertising rules | WA WAC 284-50 is graduated (A4); the OR/CA/NV/GA/TN enacted equivalents of the NAIC accident-&-sickness advertising standards are NOT yet identified. Find each state's adopted rule before relying on a uniform ad posture. | wa-wac-284-50 |
| 4.14 | 🟡 | GA citation upgrades + GA-telemarketing scope | Pin the official GA Code path for the FBPA (ga-fbpa, currently a Justia stand-in) and the GA-telemarketing row (law.georgia.gov landing). Also confirm whether GA "telephone solicitation" is voice-only — if so, texts to GA residents fall under the federal TCPA rather than the GA No-Call statute. | ga-fbpa |
| 4.15 | 🟡 | TN 2026 solicitation-oversight law | Confirm the reported 2026 TN law (HB2408/SB2659) and whether it restates or changes the $500/May-1 solicitor registration (A3 / tn-tpuc-reg). | tn-tpuc-reg |
| 4.16 | 🟠 | WA RCW 19.158.110 pinpoint reconcile | The two verification outputs disagree: the earlier report's delta D6 said (2)→(4); the 2026-06-10 hand-off's row reads (2). Reconcile the correct subsection with the verification thread before the WA calling-hours row is treated as pinned. | — |
| 4.17 | 🟠 | Focused second-pass / not-verified cluster | Not reached this pass — keep prior captured-as-of posture, do NOT treat as re-verified: 45 CFR §155.220 (competing FR-doc 91 FR 29864 vs 2026-10050; 1/1/2028 consent-form — see 4.5); NV 603A clocks + 1,750-ft geofence; WA MHMDA §.020/.080/.090 pinpoints + backup-deletion cap; NV/WA SMS reach (9 a.m.–8 p.m. stays a precautionary composite — see 4.1); DOJ ADA Title II IFR dates (2026-04-20); FTC 16 CFR 465 eff date + current max penalty; CCPA ADMT/risk-assessment/cybersecurity-audit phased dates. | 4.5, 4.1 |

### WEB lane — web/dev + agency operations
| id | crit | item | why it matters / action | refs |
|---|---|---|---|---|
| 5.2 | 🟠 | "No advertising trackers" is binding | Any future ad/analytics script (Meta Pixel, Google Ads, GTM/GA, any ad-function SDK) makes the statement false the day it ships. For MHMDA/NV a health-data-implicating tracker needs opt-in consent BEFORE it fires, not just a post-hoc policy update, and the legal-copy toggle must be paired with the tracker toggle so they cannot drift. Facebook Pixel + consumer health data is a top FTC/MHMDA enforcement fact pattern. Add a site-change checkpoint that triggers a privacy-policy review. Re-analysis trigger (rev 12, package F-15): ANY server-side handler that reads the lead payload (e.g. a Worker) reopens the no-PHI data-flow analysis — pair that check with this tracker checkpoint. | 5.3, roadmap |
| 5.5 | 🟠 | Vendor/data-flow map + breach readiness | Map every flow (Cloudflare, AgencyBloc, form, Intulse + personal cells, email / Google Workspace, FMO tools, **The Campaign Registry via Intulse when SMS goes live, and the IONOS→Cloudflare registrar WHOIS/registrant data**); paper the flow-downs (processor/BAA/TPMO), including executing the **Google Workspace BAA** (info@ may receive PHI) and obtaining AgencyBloc's BAA/DPA (3.6); build a 6-state breach matrix (incl. O.C.G.A. §10-1-910 to -912) + incident-response plan. MHMDA §060 + NV 603A.525 require processor contracts. [Agency + counsel] | 3.6, 3.7, website-partner-legal-canonical-sources |
| 5.16 | 🟠 | Lead-form per-instance consent | If the form renders beyond /contact (e.g. Home), the SMS PEWC block + Privacy/Terms links must appear at each instance, and the consent record must capture the page/context. | N11 |
| N11 | 🟠 | Consent-record spec | Capture per submission: timestamp, exact consent wording/version shown, page URL + form instance, checkbox state, name/phone, IP/user-agent where available. Capture at every form instance. | 5.16, consent-record-capture |
| build-output-strip | 🟠 | Build QA — strip annotations | Confirm the rendered HTML strips/hides every annotation fence (`src`/`flag`/`note`/`see`/`governed-by`) and gate marker before any `<pages>` block is used as literal site source. Verify the rendered HTML, not just the source. | build-conventions |
| config-schema | 🟡 | Root-level config schema (the "switchboard") | Design + build the single site-root config (Jekyll `_config.yml` / `_data/`) that consolidates the boolean switches + per-jurisdiction status + dated flips as the ONE source of truth every gate/include reads from (no per-page redefinition, no drift). Open sub-question with compliance teeth: the dated-flip mechanism on a static site (ship_in_tpmo_disclaimer ON→OFF 2026-10-01 — build-on/after-date vs scheduled rebuild vs manual flip + calendar reminder; the same mechanism serves any future dated swap). Values currently live in `<build-conventions>`; `<config-parameters>` is the placeholder for the formalized schema, to be fleshed out in a dedicated pass. | build-conventions, 2.2, 4.11 |
| 5.23 | 🟡 | CHD/Privacy TOC anchors + active-state render | Confirm the renderer's auto-generated heading IDs match the TOC anchor targets; render CHD blocks for ACTIVE CHD-law states only (no geolocation) — WA at launch; NV stays dark until NV flips active in the Supported-jurisdictions control (3.17). | privacy-toc-anchors, build-conventions |
| 5.24 | 🟡 | Page bodies + Services SMS disclosure TBD | Bodies aren't written for /services, /medicare-101, /carriers, /about, /contact; decide the Services-page SMS/messaging disclosure + nav/footer placement. [drafter → FMO/counsel; WEB placement] | services-disclosure-copy |
| ai-crawlers | 🟡 | AI-crawler note + premium-media license conflict | Cloudflare LLM scraping+training is ON; robots.txt/llms.txt allow the named agents. Decide whether to note AI-crawler access in Terms §8 or a site-use note, or omit (correctly OUT of the Privacy Policy). Conflict to revisit when licensed premium media (Getty/iStock) lands: those licenses typically prohibit exposing the asset to AI-training crawlers, which clashes with the allow-LLM-scraping-and-training posture — narrow the posture per asset or exclude that media from scraping. | 5.13✅, N2✅, roadmap |
| solicitation-restatement-drift | 🟡 | Contact line vs. protected footer | The Contact page restates the footer's solicitation line at the form (honest-design) with slight wording variance + an added no-cost/no-obligation sentence — confirmed intentional; needs footer-owner sign-off (footer is protected). | 2.6, footer |
| 10dlc-registration-readiness | 🟡 | 10DLC brand/campaign registration readiness (operational checklist) | BRAND (can proceed now): enter the legal name EXACTLY as on tax documents (confirm punctuation vs "J&R Health Insurance LLC") + EIN; leave the DBA/Brand-Name field honestly blank until the trade name is registered (trade-name-use); brand info must match the website; support email + phone = info@jrhealthins.org + the main line, shown on Contact; one brand per EIN; skip optional vetting (unvetted limits — 2,000/day T-Mobile, 75 TPM AT&T — exceed J&R's volume); $8 fee, ~1–2 days to verify. CAMPAIGN (WAITS on sms-legal-theory — use case immutable, 3-month TCR lock, $20 per resubmission): draft use-case-matched sample messages (brand-named, at least one showing opt-out; one per type if Mixed); set content attributes correctly (declare embedded links + include one in a sample; no public URL shorteners); review the auto-populated opt-in/opt-out/HELP confirmation texts; provide direct links to the SMS Privacy + SMS Terms sections and confirm whether anchored sections satisfy the "direct link" fields or standalone pages are needed; decide whether to also register a verbal opt-in path (consent captured on the recorded line — call-recording-consent). Source: Intulse 10DLC guide, captured-as-of 2026-06-11 (partner-legal Intulse). | sms-legal-theory, sms-consent-scope, call-recording-consent, 1.13✅, N11 |
| mhmda-homepage-prominence | 🟠 | MHMDA "prominent homepage link" sufficiency | §19.373.020 wants a prominent CHD-policy link on the homepage; footer-only prominence (the "Your Data Rights" group, 5.12✅) is contestable and MHMDA is PRA-backed. A dedicated Home consumer-health-data section (heading + blurb + link) was added 2026-06-09 as that prominent link. Remaining: counsel confirms footer + section clear "prominent," and Web renders the section near the top / above the fold at build. | home, chd, 5.24 |

### Noted / parked (recorded so the omission is intentional; mostly 🟡)
- **5.3** change-control benchmark — any new script/cookie/pixel/portal/marketing-text/EU-targeting re-triggers attorney review + the matching scaffolded doc.
- **5.4** CMS §422.2274(g)(4) future-share trigger — first-party use doesn't trigger it; `shares_chd_with_brokers` stays dark until a one-to-one PEWC naming each recipient is cleared. (refs 1.1)
- **5.6** CA producer license # = emails, not the website (§1725.5 + DOI Bulletin 96-08) — handle in email templates.
- **5.7** geofence comment hygiene — 1,750 ft is NV's, not MHMDA's (WA = 2,000 ft); no phantom WA figure. ✅ VERIFIED 2026-06-09: geofencing prohibition is RCW 19.373.080 (Processors is §060); the 2,000-ft figure is in definitions §19.373.010(14); the doc's cites are correct — section/figure caveat closed.
- **5.8** OR GPC = voluntary best practice (below threshold; nothing to opt out of); do NOT delete Privacy §9 (independent CalOPPA DNT disclosure). No phantom OCPA 7/1/2026 deadline.
- **5.9** 🟠 accessibility conformance verb — "substantially conforms" rests on an in-house assessment with no third-party audit; recommend "aim to conform to WCAG 2.2 AA," aligned with Terms §16. (refs 5.10, wcag-claim)
- **5.10** name specific WCAG 2.2 checks / AT+browser combos only if genuinely run. (refs 1.16✅)
- **5.11** CHD page = catch-all for standalone-CHD-law states only (WA/NV + future copycats); CT-model states fold into the general Privacy Policy; no CT content.
- **5.17** monitor "claim shark" bills (H.R. 3132 CHOICE / H.R. 1732 GUARD — not enacted); *McLaughlin* = Hobbs-Act, not a quiet-hours holding. No action unless triggered.
- **5.18** SSA §1140 penalties are substantial + per-view; 2026 amounts held through 1/14/2027 — reinforces disclaimer-is-not-a-defense; no dollar figure in the policy.
- **5.19** CFPB intentionally absent (McCarran-Ferguson; N/A to the business of insurance).
- **5.20** stale internal cross-refs to retire: "§A6" and the "four-item Legal Links list." (The roadmap's dead "See Roadmap section" pointer was removed 2026-06-09.) Rev 12: the legacy §-prefix flag tokens (§A.2, §A.3, §A.4/§L1, §A.5, §B.1, §B.4, §C.6/§L3, §F1, §F2, §F4, incl. the 3.8-refs §A.3) were stripped from all 11 annotation lines; descriptive index ids are the only valid flag vocabulary (package item 9).
- **5.21** CHD §§11–13 plain-language density slightly above target (unavoidable legal terms); optional glosses, not required.
- **5.22** change-log convention — decide whether the public page change logs record post-launch only or drafting history too.
- **5.25** CHD §11 WA 6-month backup-deletion cap still needs RCW 19.373 confirmation (NV 2-yr is verified, separate).
- **5.26** nine-element authorization-to-sell form (RCW 19.373.070) — future trigger only; J&R sells no CHD now.
- **5.27** NV penalty figure (file) — AB 373 raised the DTP cap to $15k/willful (NRS 598.0999(2)); the policy cites no figure (correct). Cross-annotated with the NV 603A authority row rev 12; which figure governs 603A-CHD enforcement (base vs willful) rides the Validator fetch queue (#2).
- **5.29** spend-control — tag each doc draft-from-scratch / review-redline / sanity-check; flag the two regimes (CMS/TPMO vs. VA accreditation) when scoping counsel.
- **5.30** immutable-reference drift — trued up through 2026-06-10 (rev 7). Applied: the 2026-06-09 success-criteria/footer/date trueups; the Round 1 host/altitude reframe; and the rev-2 verification-hand-off integration (Cloudflare Pages host, the no-PHI causal chain, self-hosted fonts, the §422.2267 / §422.2274 / FCC-TCPA / TIPA row changes plus the five new authority rows, and partner-legal V1/V2/V4/V6). Per the seed-lean pattern, the full per-rev narratives belong in birds-eye-history.md. RESOLVED at rev 10: the company-facts "operations are HIPAA-compliant" line was reframed to the confirmed facts (J&R 2026-06-11 — no carrier-sourced medical information; self-reported doctors/meds only); the entity-status determination itself stays open at 1.9 (counsel). Additional 2026-06-10 immutable additions: the planned-testimonials-carousel + confirmed-organic fact on the company-facts Advertising/FTC line (compliance tracked at testimonials-display), and the presumption-of-good-faith posture clause in <values> (tone, not verification), and the planned-carrier-logos-section note on the company-facts Web list (compliance tracked at 2.7). Rev 3 (2026-06-10): folded the Intulse technical findings — closed 1.13 (no DNS records, no on-page code; the 10DLC website + domain-email prerequisites are the only site touch, conditional on SMS), sharpened the company-facts Intulse stack line and the A2P 10DLC website-prerequisites line, and dropped the stale 1.13 cross-ref from 3.27, then regenerated the J&R appendix so the answered question fell off. Source: Intulse published docs, captured-as-of 2026-06-10. N7 and 3.27 untouched. Rev 4 (2026-06-11): folded the first J&R answer batch — closed 1.4 (organic leads, no per-lead fees) and downgraded the 1.1 anchor to 🟡 (referral-out = pointer with no data, no sale/share to other agencies, and all-organic sourcing all CONFIRMED by J&R 2026-06-11, so the first-party + no-sale/no-share promises are cleared to publish and §422.2274(g)(4) does not trigger), narrowing 1.1 to the lone residual of whether Advocate's recycled-lead data flows INTO J&R; trued up the company-facts Lead-flows line; flipped the Privacy §5/§6 "pending 1.1" referral and no-sale annotations to confirmed; closed referral-data-transfer and no-transfer-promise-vs-ops; annotated 3.7a/3.8 with the operational confirmation (legal characterization still counsel's); and regenerated the appendix (Q1 narrowed to the inbound piece, the organic question dropped). Source: J&R direct answers 2026-06-11 (more pending). Rev 5 (2026-06-11): folded J&R's clarification that the partner referral links are unsolicited, uncompensated third-party links to J&R's homepage (visitor clicks through and self-submits = first-party, no data inflow, no consideration) — refined the company-facts Lead-flows line, narrowed 1.1's residual to the Advocate-referral channel named in CHD §4, flagged the CHD §4 vs Privacy §2 "sources" mismatch (sync pending the Advocate-referral-data answer; tracked on the Privacy §2 annotation + 1.1), and recorded the FTC posture (no material connection for inbound links; reposting on J&R's own site would trigger the Endorsement Guides — testimonials-display) on the company-facts Advertising/FTC line. Source: J&R clarification 2026-06-11. Rev 6 (2026-06-11): folded the second J&R answer batch — CLOSED 1.1 (inbound resolved: Advocate DOES send recycled/cold lead data into J&R; J&R sends nothing back), upgraded 3.7a to a confirmed-live inflow with the CMS §422.2274 PEWC + MHMDA authorization burden on the Advocate contract, flipped the Privacy §2 sources-sync note to ACTIONABLE (§2 must add the inbound Advocate source to match CHD §4 — public-copy edit pending counsel), trued up the company-facts Lead-flows line; confirmed WA/OR/GA/TN licensed + active + none lapsed and narrowed 1.6 to actively-marketed-vs-license-held + CA/NV; recorded the SOA / sales-call-recording 10-yr CMS retention on retention-period + 3.6; and regenerated the appendix (1.1 dropped, AgencyBloc part c dropped, licensure Q narrowed). Source: J&R direct answers 2026-06-11. Rev 7 (2026-06-11): added the propose-then-confirm default to the bootloader INCOMING WORK rule; folded the rev-6 recommendations — added a draft "Information we receive from others" subsection to Privacy §2 (inbound Advocate-referral + helper sources, mirroring CHD §4; counsel to confirm wording/scope), bumped 3.7a to 🔴 as a present exposure tied to 3.27 (recycled-lead contact-consent), recorded the SOA/recording 10-yr clock in 5.32, and opened call-recording-consent (state all-party-consent e.g. WA RCW 9.73 vs the CMS recording mandate; C4 stays do-not-adopt); and regenerated the handoff + refreshed the verification-sources note; and added a build-conventions editing note flagging the handoff-splice trap (match the section tag line-anchored). Source: this session 2026-06-11. Rev 8 (2026-06-11): folded the Intulse SMS-verbiage email (via J&R) + the Intulse 10DLC guide (captured same day) + the third J&R answer batch — partner-legal Intulse gained the verbatim supplied verbiage and the guide's operative registration requirements + the confirmed Account Center channel; the CTIA/TCR row's CSP hedge trued up; company-facts trued up (verbiage received, registered legal name "J&R Health Insurance LLC", Advocate-run social campaigns not purchased by J&R); CLOSED 1.5 (residual split to trade-name-use, ATT 🟡); OPENED campaign-lead-path (J&R 🟠) + 10dlc-registration-readiness (WEB 🟡); annotated 3.7a + the 1.4 closed line with the campaign/lead-path linkage; updated sms-consent-scope (verbiage RECEIVED + reconciliation deltas + three do-not-adopt-verbatim calls) and sms-legal-theory (forcing function: exact use-case words, immutable use case, 3-month TCR lock — the decision now gates campaign creation); trued up the sms_program_live flip trigger + the Privacy §3/§4 and Contact annotations; theory-independent page micro-edits (Terms §6 "will send one final text confirming you are unsubscribed" + rejoin line; Privacy §4 bold line now names opt-in data + consent records); regenerated the appendix (legal-name question dropped; campaign-lead-path ★ + 10DLC brand-form questions added). Determination logged: the Intulse guide is vendor operating documentation — home = partner-legal, NOT the authority table (the CTIA/TCR row covers the ecosystem layer). Sources: Intulse support email forwarded by J&R 2026-06-11; Intulse 10DLC guide captured-as-of 2026-06-11; J&R direct answers 2026-06-11. Rev 9 (2026-06-11): structural — the role/file split per 5.31 (canon.md + integrator/validator/general bootloaders; splice-trap note relocated; generator hand-off destination set; one-way reference rule adopted: canon never references the bootloaders). No legal-content changes this rev. Wording pass late 2026-06-11 (between revs; canon untouched): role bootloaders + cheat-sheet re-phrased to cut automated safety-flag false positives; zero functional change; bootloaders model/config-agnostic (specifics live in cheat-sheet.md only). Provenance archived: update-bootloader-wording.md + bootloader-wording-dispositions.md. Rev 10 (2026-06-11): folded the fourth J&R answer batch + the courier's referrals mock — CLOSED 1.8/N4 (Vetecare: Advocate-issued; specialization meaning; Veterans-content-only placement; VA-implication wording rides 3.1), roadmap-intent (healthcare.gov possibly 2027, no toll-free, life/annuities referred out, no VA claims, no FMO, no portal — 3.23 stays dormant), and terms-contract-heaviness from Deferred (protective-and-formal elected; full regime stands; 3.4 refs marked ✅; heavy/light fork note trued up); FOLDED the corrected 1.9 premise (no carrier-sourced medical info; self-reported doctors/meds only — still MHMDA CHD) and trued up the company-facts HIPAA line (the carrier-PHI premise + "operations are HIPAA-compliant" over-claim removed; the 5.30 STILL-OPEN reframe is hereby done factually, counsel confirms the final characterization at 1.9); NARROWED 1.6 to CA/NV flip-tracking (🟠→🟡; Rowena's individual licenses + expirations recorded; WA-only actively marketed); RE-SEVERITIED trade-name-use 🟡→🟠 (confirmed NOT registered; J&R to prioritize; DBA field honestly blank on the TCR brand form until registered); OPENED entity-license (J&R 🟠 — LLC entity license + sole-producer confirm) and referral-comp-out (J&R 🟡 — out-referral compensation either way); company-facts trued up (header rev note, Identity DBA sentence, licensure detail, IFP timing + out-referral line, no-toll-free line, Vetecare confirmation, Advertising/FTC developer-review carve-out: 1/8 Google + the sole Yelp review are developer-authored — exclude or disclose; hold the Yelp link); SEEDED the /referrals page (`<referrals>` block, dark behind the new `referrals_page` switch — switch + gate + declaration bundled; single-sourced `<testimonials heading>` include shared with Home; `<feedback>` include candidate) and EXTENDED testimonials-display to cover it; appended flag-index keys (testimonials-display, trade-name-use, referral-comp-out; vetecare-referral→Closed✅); regenerated the appendix (Q4–Q8 dropped; entity-license + referral-comp-out questions added); ledger corroboration entry (1.5 + SOA/recording 10-yr re-confirmed; J&R's "guideline" phrasing noted, cite stays requirement-grade UNVERIFIED). Sources: J&R direct answers 2026-06-11 (batch 4, courier's Google Docs export); courier disclosures + referrals mock 2026-06-11. Rev 11 (2026-06-11): STAYING SOUND audit fixes (coherence/lean only, no fact changes) — J&R lane re-sorted to severity order (1.6 🟡 moved below N14); referrals `src:` keys consolidated to the defined vocabulary (ftc-endorsement-guides, ftc5, cms-2262, 284-50; one key per row); `<testimonials>` include stub defined in the immutable reference (heading parameter, default "Reviews"; content pending testimonials-display + FMO/counsel); TCR tax-name/DBA-blank guidance consolidated to its single operational home at 10dlc-registration-readiness (trade-name-use now points there). Audit otherwise clean: structural battery passed; closed-id references all intentional; OIC pointer supported; no portal/roadmap contradictions. Rev 12 (2026-06-12): folded the Validator synthesized package (vs rev 11) + courier confirms (self-hosted fonts; Thanks/404 sitemap exclusion deliberate; Yelp-review provenance) — two 🔴 public-copy fixes (footer Yelp link removed, Accessibility §5 fonts clause); Locked WA-hours pinpoint (2)→(4) on new primary authority with 4.16 closed; 4.6 closed; 4.5 unified pending fetch; hygiene sweeps (legacy §-flag keys, src keys incl. the new §422.2262 row, registry true-ups incl. carrier_logos_shown; audit F1 retracted in-session — the syntax legend documents the single-line reserved-gate form, so the two added closers were reverted); CHD annotation layer + Google-processor naming (DRAFT); Terms §4 access/service decouple (DRAFT); NV inline gates ×3; Terms §14 de-dated into the 2.2a PR; retention practice-vs-floor true-ups; partner-legal Cloudflare/Google updates; item 3 HELD on the new appendix Q6. Full verbatim old→new + dispositions: rev12-change-manifest.md. DEFERRED: the 5.30 history collapse (awaits the courier’s birds-eye-history.md confirm). Rev 13 (2026-06-12): appendix regenerated to the batch 5 set — 12 items mirroring the outbound list (adds the 3.7a consent-visibility fact, SOA/recording storage, the recording-disclosure habit, a trade-name status nudge, and the standing CA/NV flip notice; the prior six carry over in substance; the item-3 confirm renumbered Q6→Q3 with both cross-refs updated). No page copy touched. Manifest: rev13-change-manifest.md. Rev 14 (2026-06-12): de-slop adoption into page copy (em-dash connectors removed at four spots, two heading dashes to colons, CHD §7 affiliates sentence recast to fix the inline-NV-gate subject-verb bug the de-slop pass surfaced, Contact OFF-variant split into two sentences) + house-style rule added to build conventions + J&R batch-5 Q6 answer folded (AgencyBloc dual-clock deletion capability confirmed; retention-period updated; appendix Q6 marked answered with numbering held). Manifest: rev14-change-manifest.md. Rev 15 (2026-06-12): courier confirm folded — J&R Facebook page live; footer link unchanged (already present since before rev 12), company-facts inventory dated, new 5.34 notes the page as a TPMO marketing surface on the FMO review path. Manifest: rev15-change-manifest.md.
- **5.31** structural-reorg record — `<pages>` reordered to legal-relevance order; `<thanks>`/`<404>` stubs dropped (real launch pages, off the human sitemap, footer-only). Recorded so the drop reads as intentional. 2026-06-11 file split (rev 9): the merged working doc split into **canon.md** (a rev-stamped header + these two super-documents — the single shared record every role thread reads) plus three role bootloaders (integrator / validator / general) maintained outside this document; bootloaders reference the canon, never the reverse. The build-conventions Editing note (handoff-splice trap) relocated to the integrator bootloader with its layout-dependent count removed, and `<resolution-requirements>` now routes the generated hand-off there. The pre-split merged file is superseded. Recorded so the split reads as intentional.
- **5.32** internal retention schedule — the longest-applicable-minimum / shortest-defensible-maximum methodology and the concrete clocks (~24 mo lead data, longer consent proof, and — J&R 2026-06-11 — SOA forms at 10 years per CMS §422.504, sales-call recordings at 10 years as J&R practice, above the 6-yr CMS floor for recordings on/after 10/1/2026) live in an INTERNAL retention schedule, deliberately kept OUT of the published Privacy §7 text. Recorded so the omission reads as intentional. (refs retention-period)
- **5.33** jurisdiction status model — a per-state active/pending control in `<build-conventions>` (Supported jurisdictions) drives the `<licensed-states />` include + every `jurisdiction = XX` gate. Launch: WA/OR/GA/TN active, CA/NV pending (not yet licensed). Opening a market = flip its status to `active` there; the licensed-states list and the gates follow, no page edits. Recorded so the model reads as intentional. (refs 1.6, 3.17, 5.23)
- **5.34** J&R Facebook page LIVE as of 2026-06-12 (courier). No site-copy impact: the footer has linked /jrhealthins since before rev 12, and 5.15 keeps social icons plain links with no SDK. New-surface note: the page itself is now TPMO marketing real estate — disclaimer treatment on the profile/about section and on any marketing posts rides the FMO marketing-review path (2.1; campaign-lead-path for Advocate-run campaigns). If the page ever pushes a Meta Pixel or embed onto the site, 5.2’s change-control fires first.

---

## Deferred — J&R brand/values decisions (then counsel)
- *(none currently deferred — terms-contract-heaviness resolved 2026-06-11; see Closed ledger)*

---

## Closed ledger (resolved — one line each)

- **4.6** NAIC working-group status — RESOLVED (Validator package 2026-06-12): the Improper Marketing of Health Insurance (D) Working Group exists under the Antifraud (D) Task Force with 2026 charges posted, and produced the Model #880 amendments adding the defined "health insurance lead generator" (WG-adopted 8/14/2023); not disbanded, not absorbed by the (B) WG. naic.org committee page. UNVERIFIED for counsel as ever.
- **4.16** WA RCW 19.158.110 pinpoint — RESOLVED at (4) on two independent official-text reads (2026-06-12); the Locked window pinpoint was amended rev 12; (2) is the end-call-within-10-seconds duty; parallel hours text ~19.158.040(2) explains the historic split. Do not re-cite (2) for hours.
- **1.2** SMS go-live → `sms_program_live` switch; decoupled from the 6/30 launch.
- **1.3** CRM confirmed = AgencyBloc (DPA still → 3.6).
- **1.10** FMO legal name confirmed = "Advocate Health Advisors" (FL).
- **1.12** privacy-rights + accessibility intake = info@jrhealthins.org / (253) 528-8805.
- **1.14** J&R is NOT VA-accredited and does NO claims work (feeds 3.1).
- **1.15** Credits = its own page.
- **1.16** accessibility testing documented (CI: Lighthouse/PSI, W3C, WAVE, axe, keyboard, VoiceOver iOS+macOS, mobile/tablet).
- **2.2a** SHIP-swap mechanism = pre-staged PR, Jasmine merges 10/1/2026. Rev 12 (package item 29, option ii): Terms §14’s SHIP sentence no longer self-dates; the post-10/1 §14 variant (drop that sentence) rides the SAME pre-staged PR as the footer swap, behind the 2.2b eCFR confirm — one control governs both surfaces, and nothing auto-flips if the SHIP removal slips.
- **2.3** CY2027 script scrub (48-hr SOA wait, 12-hr ed→marketing gap, disclaimer-before-benefits) — Advocate owns and maintains the agency scripts + training (FMO ownership lock, 2026-06-09).
- **2.10** TPMO disclaimer across email / online chat / electronic marketing — Advocate reviews the electronic-marketing language and disclaimer placement (FMO ownership lock, 2026-06-09).
- **2.12** FFM (ACA-marketplace) registration/training per producer confirmed; IFP marketing stays dark until launch.
- **3.2** CA SB 694 eff. 1/1/2027 (→ Locked).
- **4.3 / 4.10** FCC one-to-one death + src-key split (→ Locked).
- **4.4 / 4.4a** GA = no privacy law; stale GA/SB694 versions superseded (→ Locked).
- **4.7** NV 603A clocks verified (→ Locked).
- **5.1** Privacy §14 reverted to no-omnibus.
- **5.12** CHD has its own "Your Data Rights" footer link group, separate page, on every page.
- **5.13** AI discoverability live (Cloudflare LLM scraping+training; robots.txt allows named agents).
- **5.14** footer `/accessibility` URL correct (no typo).
- **5.15** social footer icons = plain links, no cookie SDK.
- **5.28** HHS §504 web rule + ACA §1557 N/A (no HHS federal financial assistance).
- **clickwrap-assent** — unchecked, required consent checkbox drafted on the Contact form (counsel confirms wording).
- **form-field-list** — no coverage-interest field (removed from Privacy/Terms/company-facts).
- **contact-form-sms-optin-missing** — separate, optional, unchecked SMS opt-in box restored (box 2).
- **sms-submission-consent-mismatch** — Terms §5 aligned (submission = phone + email; text is the separate opt-in); counsel ratifies.
- **N2** AI-training opt-in recorded (deliberate posture).
- **N3** Veterans page cut; footer Quick Links Veterans + Carriers removed; convention `/services#veterans`, `/services#medicare`.
- **N5** Advocate Health Advisors = formal FMO sign-off authority.
- **N8** `/sitemap` added; robots.txt + llms.txt publish at launch (off the human list).
- **N9** Home stub kept; Thanks/404 stubs dropped from the working doc (still real launch pages, off the human sitemap).
- **N13** IFP / marketplace marketing dark until launch.
- **footer-links-vs-sitemap** — Veterans + Carriers removed from footer Quick Links (tech-lead sign-off).
- **advocate-naming-chd** — CHD §4/§7 corrected to "Advocate Health Advisors."
- **wcag-verb-mismatch** — Accessibility §2 "substantially conforms"; Terms §16 "aim to meet" (residual 5.9).
- **accessibility-spam-tool** — §5 spam-tool reference removed (Turnstile OFF; `turnstile_enabled` gate added).
- **ship-name-mismatch** — Terms §14 aligned to the footer's "State Health Insurance Program (SHIP)."
- **effective-date-alignment** — all four legal pages use "[set at publication]."
- **github-host-suitability** — GitHub Pages ruled out as the static host (commercial-use / AUP advertising restriction); Cloudflare Pages is the canonical host (confirmed 2026-06-10, corroborated by the verification thread + the WEB-lane architecture plan), GitHub kept as the private repo + CI only. Host/SSG/build stay out of the birds-eye except where they bear on liability; the static host + build process no lead/consumer data (form POSTs to AgencyBloc), so no processor obligation → company-facts Web + the partner-legal GitHub note. (Round 1 + 2026-06-10 rev.)
- **4.2** — FCC revoke-all 1/31/2027 (DA 26-12) confirmed by EXT; Locked. (Closed 2026-06-10.)
- **4.8** — TN TIPA codification confirmed §§47-18-3301–3315, enforcement/cure §47-18-3313 (2026-06-10 tiebreaker vs the enrolled bill + TN AG guidance); the §3201 enrolled-bill numbering was superseded at codification, so C1 (reverse to 3201) was declined. Counsel confirms vs the LexisNexis official code at sign-off. (Closed 2026-06-10.)
- **bunny-self-host** — fonts self-hosted, Bunny dropped from the stack (removes the third-party font request / visitor-IP transmission / EU subprocessor); closes the Bunny half of 1.7 / N1. (Closed 2026-06-10.)
- **1.7 / N1** — no tracking cookies confirmed on the live config by the dev (2026-06-10): Turnstile OFF (so no `cf_clearance`), `__cf_bm` not present, CF Web Analytics cookieless. The "no advertising or tracking cookies / cookieless" claim now holds for the deployed config. Holds while Turnstile stays OFF (re-check per 5.3 / `turnstile_enabled` if enabled); standing re-confirm at launch rides 4.11. (Closed 2026-06-10.)
- **1.11** — image / model-release policy confirmed (2026-06-10): recognizable-people images are sourced from release-backed stock catalogs (e.g. Unsplash, iStock), Creative Commons images are limited to non-people subjects, and per-asset records live on the Credits page + the internal Stock Media Assets doc. The one non-compliant CC-licensed people-image previously listed in Credits was removed from the design and replaced; no CC-licensed people-images remain. Do NOT reintroduce a CC-licensed image showing recognizable people (CC conveys copyright only, not a model release). (Closed 2026-06-10.)
- **about-disclosure** — About needs no separate disclaimer block; it renders the global footer only. The one About-specific legal surface is the annual-Medicare-certification trust claim, governed by the About body guardrail (substantiable, attributed to Advocate not CMS/government, no implied endorsement) and tracked at N14 / about-recert-credential. About stays in the doc for that claim surface. (Closed 2026-06-10.)
- **1.13** — Intulse needs no custom DNS records and no on-page HTML/JS/meta/script on the domain; the only website touch is 10DLC carrier verification (a live public site whose displayed business identity matches the TCR brand registration, plus a domain-based email — met by info@jrhealthins.org), and those apply only if SMS is used. From Intulse's published docs (support.intulse.com network-readiness + 10DLC); captured-as-of 2026-06-10, re-confirm at reliance. Does not touch N7 (SMS verbiage, open) or 3.27 (live P2P exposure). (Closed 2026-06-10.)
- **1.4** — Organic leads confirmed (J&R 2026-06-11): essentially all leads organic (word-of-mouth, Medicare 101 / SEO, the lead form, occasional partner referral links); no bought lists, no per-lead fees to Advocate or anyone. "We do not buy CHD" holds; no consideration-based "sale" on the inbound side. Clarified same day: Advocate also runs social marketing campaigns for J&R that J&R does not purchase (no consideration) — lead path tracked at campaign-lead-path. (Closed 2026-06-11.)
- **referral-data-transfer** — confirmed by J&R 2026-06-11: a referral-out is a pointer, no contact details passed; the Privacy/CHD "referral = no data transfer" statements are accurate. (Closed 2026-06-11.)
- **no-transfer-promise-vs-ops** — the no-hand-off / no-sale promise now matches confirmed ops (referral = pointer, no sale/share to other agencies, all-organic no-fee sourcing; J&R 2026-06-11). Cleared to publish; the residual inbound-Advocate-data question is tracked at 1.1. (Closed 2026-06-11.)
- **1.1** — Lead-sharing reality resolved (J&R 2026-06-11). Inbound: Advocate DOES send J&R recycled/cold lead data (it flows in, may include Medicare-beneficiary / consumer-health data). Outbound: J&R sends NO client information back to Advocate. Plus (rev 4–5): referral-out is a pointer, no sale/share to other agencies for marketing, all-organic otherwise, and the third-party referral links are unsolicited/uncompensated first-party traffic. Net: the no-sale/no-share (outbound) promises stand and J&R as a sharer does not trigger §422.2274(g)(4), BUT Advocate is now a confirmed third-party INBOUND source, so (a) Privacy §2 "Information we collect and where it comes from" must disclose it to match CHD §4 — public-copy edit pending (Privacy §2 annotation), and (b) the Advocate contract must carry the inbound consent/authorization burden (CMS §422.2274 PEWC naming J&R + MHMDA valid CHD authorization) before J&R relies on or contacts those leads (3.7a). (Closed 2026-06-11.)
- **1.5** — registered legal name confirmed = "J&R Health Insurance LLC" (J&R 2026-06-11). The legal pages already name the LLC and define "J&R Health Insurance" as the short form; the residual short-form/trade-name registration question split to `trade-name-use` (ATT 🟡). For the 10DLC brand form, enter the name exactly as on tax documents (10dlc-registration-readiness). (Closed 2026-06-11.)
- **1.8 / N4** — Vetecare confirmed (J&R 2026-06-11): issued by Advocate Health; signifies specialization in helping veterans coordinate their federal coverage (VA/CHAMPVA/TRICARE) with civilian health insurance; displays only within Veterans-services content (Services D4 at launch; /services/veterans later). Substantiation rests on J&R's confirmation plus the named issuer; the no-VA-implication wording duty stays live at 3.1 + D1–D4. (Closed 2026-06-11.)
- **roadmap-intent** — Roadmap confirmed (J&R 2026-06-11): healthcare.gov possibly 2027 (IFP stays dark until launched); no toll-free number planned (10DLC remains the sole A2P path); life/annuities referred out to other agents (compensation question split to referral-comp-out); no VA accreditation or claims plans; no FMO ambitions; no client login portal (3.23 stays a dormant scaffold). (Closed 2026-06-11.)
- **terms-contract-heaviness** — J&R elected protective-and-formal for the legal pages (2026-06-11): the full Terms regime (arbitration + class waiver + indemnification + liability cap) stands as drafted; the readability floor does not move ("formal" calibrates register, not legalese); the heavy/light fork stays unbuilt; FMO brand-voice weigh-in optional; the strategic include-or-strike on arbitration remains counsel's call at 3.4. (Closed 2026-06-11, from Deferred.)
- **batch-4 corroborations** — re-confirmations, no row changes (J&R 2026-06-11): 1.5 legal name re-confirmed; SOA creation + sales-call recording + the 10-yr CMS retention practice re-confirmed. J&R phrased the 10-yr as "a guideline we comply with" — the practice stands as confirmed fact; the cite stays requirement-grade UNVERIFIED for counsel (retention-period, 3.6, 5.32). (Logged 2026-06-11.)

---

## Flag index — page annotation `flag:` keys → register item
`ga-comprehensive-law`→Locked GA/5.1✅ · `sms-consent-scope`→ATT sms-consent-scope · `sms-marketing-scope`→sms-consent-scope · `retention-period`→J&R retention-period · `vendor-naming`→ATT vendor-naming/3.6 · `referral-data-transfer`→Closed✅ · `business-transfer-clause`→ATT business-transfer-clause · `data-security-regime`→3.10 · `rights-posture`/`rights-appeal-mechanism`/`rights-45-day`→ATT rights-posture · `gpc-voluntary-framing`→5.8 · `soft-gdpr`→ATT soft-gdpr · `ai-crawlers`→WEB ai-crawlers · `cookie-accuracy`→Closed✅ · `form-field-list`→Closed · `privacy-toc-anchors`→5.23 · `clickwrap-assent`→Closed · `age-floor`→ATT age-floor · `cema-2274`→Locked window/4.1 · `liability-carveouts`→3.3/3.12/3.21 · `venue-choice-of-law`→3.11 · `wcag-claim`→5.9 · `carrier-cobranding`→2.7 · `educational-vs-marketing`→2.5 · `services-disclosure-copy`→5.24 · `vetecare-referral`→Closed✅ (N4) · `about-recert-credential`→N14 · `about-disclosure`→Closed✅ · `image-attribution`→Closed✅ · `consent-record-capture`→N11 · `form-placement`→5.16 · `solicitation-restatement-drift`→WEB solicitation-restatement-drift · `sms-submission-consent-mismatch`→Closed · `contact-form-sms-optin-missing`→Closed · `mhmda-homepage-prominence`→WEB mhmda-homepage-prominence · `testimonials-display`→ATT testimonials-display · `trade-name-use`→ATT trade-name-use · `referral-comp-out`→J&R referral-comp-out

---

## Appendix — Questions for J&R (egress; GENERATED from the J&R lane + facts other lanes depend on)
*Paste-into-email list. Regenerate from the J&R lane each session; ★ = highest-leverage. Answered items are in the Closed ledger. Current set = batch 5 (regenerated 2026-06-12; mirrors the outbound jr-batch5-questions list; the item-3 confirm is now Q3, was Q6 at rev 12). Q6 (AgencyBloc deletion clocks) ANSWERED 2026-06-12; numbering held stable until the batch completes.*

1. ★ Advocate's social campaigns and recycled/cold leads: do these reach you as lead DATA from Advocate (a list, a spreadsheet, records appearing in the CRM), or only as people clicking through to your site and form? Rough monthly volume either way? [campaign-lead-path / 3.7a]
2. For the Advocate leads you are already calling or texting: can you see any consent paperwork, and does it name J&R Health Insurance specifically? No wrong answer — whatever exists (or doesn't) tells us exactly what to request from Advocate. [3.7a present exposure / 3.27]
3. One-line double-check for the privacy pages: other than the inbound leads above, does ANY client information ever go OUT from J&R to Advocate (e.g., asking your rep to help untangle a client's coverage issue)? Yes/no, plus an example if yes — it pins the wording in two sections. You're already doing this right; we just need the words to match the practice. [item-3 reconcile: privacy §5/§6 ↔ CHD §7 / 3.7a]
4. For the 10DLC brand form: the legal name exactly as printed on your tax documents (comma before "LLC"?) and the EIN ready; what the Intulse/10DLC console shows (existing brands/campaigns, use-case options, monthly fee); and will texts include links (e.g., medicare.gov or your site)? [10dlc-registration-readiness / sms-consent-scope]
5. AgencyBloc: is there a signed DPA/BAA barring their own use of the data? "Not sure" is the expected answer — we'll ask them together. [3.6]
6. ANSWERED (2026-06-12): AgencyBloc supports schedule-based deletion with separate clocks — recorded on retention-period; configuration rides the vendor checklist + 5.32. Number kept so the outbound list’s numbering stays stable mid-batch. [retention-period]
7. Where do SOA forms and call recordings live today (AgencyBloc, Google Drive, elsewhere), and is anything already on its own 10-year clock? [retention-period / 3.6 / 5.32]
8. When you record a sales call today, how does the person learn it is being recorded (announcement at call start, something in writing, other)? WA is all-party-consent — we want the current habit on paper for counsel. [call-recording-consent]
9. Licensing checklist: does J&R Health Insurance LLC itself hold a business-entity producer license in WA (and OR/GA/TN), or does everything run under Rowena's individual licenses? And is Rowena the only licensed producer? [entity-license]
10. When you refer clients out (life insurance, annuities, prospects you can't serve), does any money or other compensation move in either direction? We expect "no" — this just locks the wording on the planned referrals page. [referral-comp-out]
11. Trade name: any progress or rough timeline on registering "J&R Health Insurance"? No rush — the 10DLC brand-name field simply stays blank until it's done. [trade-name-use]
12. Standing, not a question: the day a CA or NV license lands, tell the courier same-day so the site flips correctly. [1.6]

</flagged-items>
<resolution-requirements>

# Resolution Requirements — generator spec (instructions, not a maintained list)

This block is INSTRUCTIONS, not content. `<flagged-items>` is the single canonical, LLM-optimized source of open issues. This spec tells a future session how to GENERATE the human-readable, owner-grouped open-issues hand-off from that register at the end of a working session. Do not hand-maintain a parallel re-cut of the issues here — a maintained second copy is exactly what drifted out of sync before. Generate it fresh, drop the output into the integrator bootloader's hand-off section (never back into this document), and let `<flagged-items>` stay the source of truth.

## What to produce

A plain-language "open issues, by who clears them" list that a non-LLM reader (J&R, the FMO, retained counsel, the dev/agency) can act on without parsing tables. Translate the terse register rows into readable action sentences — what to confirm or do, and why it matters in plain terms. Carry each item's `id` in brackets at the end of its line so every line traces back to the register. Open the output with the standing caveat: all cited authority is UNVERIFIED pending counsel/FMO confirmation, and nothing ships until the named owner signs off. Date it and state the launch target.

## How to build it

1. Read `<flagged-items>` and take ONLY open items — the five lane tables, plus Noted/parked and Deferred. Ignore the Closed ledger, the Locked decisions, and anything already moved to `birds-eye-history.md`.
2. Map each register lane to one output section, in this order (this mirrors the hand-off shape reviewers are used to):
   - **Resolved since the last hand-off** — a one-line pointer to the Closed ledger. Name only the items closed in THIS session; do not re-list the whole ledger.
   - **1. Ask J&R directly** — from the J&R lane.
   - **2. Partners (FMO / processors)** — from the FMO lane, split into an Advocate/FMO group and a processor group (AgencyBloc / Intulse / Cloudflare). Group by who you actually contact, so pull the processor-contract and DPA items (3.6, 3.7, 3.7a) and the Intulse-verbiage item (sms-consent-scope / N7) into the processor group even though their home lane is ATT or J&R.
   - **3. Lawyer review** — from the ATT lane.
   - **4. Couldn't resolve factually (external verification)** — from the EXT lane.
   - **5. Misc and pre-launch (mostly Web/Agency)** — from the WEB lane.
   - **Parked, no action now** — one compact paragraph naming the Noted/parked ids, so the omission reads as intentional.
   - **Deferred — J&R brand/values first, then counsel** — from the Deferred section.
3. Within each section, order by severity: 🔴 first, then 🟠, then 🟡 (mirror the register's own ordering).
4. Rewrite each row as one or two readable sentences. Drop the table scaffolding and the severity glyphs (the human list carries plain priority language instead). Keep cross-references as register ids in brackets.
5. Regenerate the **Questions for J&R** list from the J&R lane plus the facts other lanes depend on (e.g. the AgencyBloc DPA confirmation that the processor-contract item 3.6 needs from J&R). The register already carries a current copy under its Appendix — refresh that copy from the lane rather than maintaining a third one.

## Rules

- Owner lanes and severities are defined once, in `<flagged-items>`. Do not redefine them here.
- Never edit the generated list in place. If a register item changed, the next regeneration reflects it automatically — that is the entire point of moving to a generated artifact.
- Keep every cross-reference as an existing register id. Do not invent new IDs in the generated list.
- Match the document's plain-and-precise voice. This output is for humans, so favor readability over the register's terseness.

## Answer-intake pipeline (J&R answer → closed item → company-facts)

When a J&R answer arrives, fold it the same way every time:
1. Route the answer to its J&R-lane item (or the dependent item in another lane).
2. Close that item to the Closed ledger as a dated one-liner carrying the answer.
3. Write or true up the confirmed fact in `<company-facts>` and propagate it to any affected page copy + annotations, batched into the next announced immutable rev and logged in 5.30.
4. Regenerate this Appendix so the answered question drops off automatically. Never hand-edit the Appendix in place.

The point is single-sourcing: the answer lives once as a closed item plus a company-facts fact, and the egress list reflects it on the next regeneration, so no parallel copy drifts.

(Generator spec adopted 2026-06-09, replacing the hand-maintained re-cut that had drifted from the live pages. Site launch target = 6/30/2026. All authority UNVERIFIED; nothing ships without the named owner's sign-off.)

</resolution-requirements>

</mutable-working-content>
