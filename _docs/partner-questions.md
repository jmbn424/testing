# Partner questions & verification plan — 2026-06-22

Working planning artifact (NOT canon). Generated from the `canon.md` flagged-items register
(J&R / FMO / ATT / EXT / WEB lanes + Closed ledger), `_scratch/jr-batch5-questions.md`,
`_scratch/jr-email-draft-rev3.md`, `_context/knowledge/vendor-facts.md`, and the `content.md`
canon↔code divergence log. Supersedes the partner agendas in those scratch files; regenerate
from the register when it changes.

**Standing caveat.** Every cited authority is UNVERIFIED pending counsel + FMO. Nothing ships
without the named owner's sign-off. **The lawyer list is deliberately held** for its own pass
(it's the expensive one) — the goal here is to max out the *cheaper* partner sanity-checks
(FMO, the processors) and J&R's own facts first, so counsel only adjudicates the genuinely legal
calls.

**Context / timing.** FMO (Advocate) + Intulse are reviewing the testing site within ~48h of
2026-06-22; counsel later this week / early next. These are the questions to walk into those
reviews already holding, so the experts spend their time on the hard calls, not on facts we
could have nailed down ourselves.

---

## 0. High-leverage closers — answer these first

Roughly ordered by how much each unblocks (reach × launch-urgency). Each is a single answer that moves
multiple downstream items.

1. **How do Advocate's leads actually arrive, and does their consent name J&R?**
   *(register: `campaign-lead-path` ★ / `3.7a`)* — Whether recycled/cold leads and social-campaign
   leads come as **data** (a list / CRM records) or only **click-through traffic**, plus rough monthly
   volume; and whether any consent paperwork on those leads **names "J&R Health Insurance" specifically**.
   **Unblocks:** Privacy §2 + CHD §4 inbound-source wording · the live TCPA/CMS exposure on leads J&R is
   already texting/calling (`3.27`) · the A2P 10DLC "3rd-party lead-generated services" never-allowed
   use-case risk · and it feeds the SMS-scope call below. One answer, ~5 items move. **Owner: J&R → Advocate.**

2. **SMS scope: service-only, or marketing too?** *(register: `sms-legal-theory` 🔴)* — A counsel decision
   (held), but the highest-reach unblock, and it must be made *before* Intulse creates the 10DLC campaign,
   because the registered use case is **immutable once created** (3-month TCR lock; **$20 per submission,
   including each rejected resubmission; $3–15/mo per campaign**). **Unblocks** the entire SMS surface
   (Terms §6, Privacy §3/§4, Contact opt-in, footer) + campaign registration. J&R's stated intent is
   register-broad (customer care + account notification + marketing), which points to a Mixed campaign.
   **Owner: counsel decides; J&R intent known; do not let Intulse create the campaign first.**

3. **AgencyBloc: a signed BAA/DPA that bars their own use of the data?** *(register: `3.6` / `3.7`)* —
   The widest vendor chain: **unblocks** the processor classification, MHMDA §060 / NV 603A.525
   processor-binding, the retention-clock setup, the §5–§7 processor representations, and the data-flow map
   (register feeds `retention-period`, `3.7`, `3.7a`, `3.8`, `5.5`, `vendor-naming`). The #1 vendor action.
   **Owner: J&R → AgencyBloc.**

4. **Is the no-count TPMO disclaimer variant acceptable for an anonymous web page?** *(register: `2.1` 🔴)*
   — One item, but **the most-checked thing on the site** and a launch blocker: both codified
   §422.2267(e)(41) variants carry the plan/carrier counts; our footer substitutes "Any information we
   provide is limited to those plans we do offer in your area." **Unblocks** the footer disclaimer basis for
   launch. **Owner: FMO** (relationship + CMS sign-off authority).

5. **Does any client info ever flow OUT from J&R to Advocate?** *(register: item-3 / Privacy §5–§6 ↔ CHD §7)*
   — Narrow reach (one held contradiction across two sections), but listed here because it **currently
   freezes published copy**: a yes/no picks PATH a (drop Advocate from Privacy §5/§6) or PATH b (repair
   CHD §7). Cheap to answer, unblocks shipped text. **Owner: J&R.**

6. **J&R's HIPAA status: business associate, or neither?** *(register: `1.9`)* — Smaller reach than the
   above — it's a **framing input** to the CHD §1 + Privacy §1 intros (the GLBA-vs-state data-security
   regime is a *separate* item, `3.10`, not this one) — but front-loaded because counsel needs it early and
   the facts are already gathered (no carrier medical records; self-reported only). **Owner: counsel; J&R
   facts ready.**

---

## 1. Ask J&R directly (Rowena + Jasmine)

Most are ten-second answers; "not sure / ask Advocate or AgencyBloc" is a fine answer. Several batch-5
items are already answered (AgencyBloc *supports* scheduled deletion — `Q6 closed`; Intulse needs no DNS —
`1.13 closed`), so this is the trimmed, still-open set.

- **Advocate leads — data or traffic, and volume?** See high-leverage #1. `[campaign-lead-path]`
- **Advocate consent paperwork — does it name J&R?** For leads you're already contacting. `[3.7a]`
- **Any client info flowing OUT to Advocate?** Yes/no + example. See high-leverage #5. `[item-3]`
- **Entity license:** Does **J&R Health Insurance LLC itself** hold a business-entity producer license in
  WA (and OR/GA/TN), or does everything run under Rowena's individual licenses — and is Rowena the only
  licensed producer? (Routine checklist confirmation.) `[entity-license]`
- **Trade name:** Any progress / rough timeline on registering "J&R Health Insurance" with the state? (No
  rush — the 10DLC brand-name field stays blank until it's done.) `[trade-name-use]`
- **SOA & call-recording storage:** Where do Scope-of-Appointment forms and call recordings live today
  (AgencyBloc? Google Drive? elsewhere), and is anything already on its own 10-year clock? `[retention-period]`
- **Recording disclosure habit:** When you record a sales call, how does the person learn it's being
  recorded (announcement at the start, something in writing, other)? WA is all-party-consent. `[call-recording-consent]`
- **Out-referrals:** When you refer someone out (life, annuities, anyone you can't serve), does any money
  or value move in either direction? (We expect "no" — locks the referrals-page wording.) `[referral-comp-out]`
- **HIPAA facts (for counsel):** Confirm no carrier-sourced medical records reach J&R and clients
  self-report doctors/meds only. `[1.9]`
- **10DLC brand-form facts (feeds Intulse):** the legal name **exactly as printed on tax documents** (comma
  before "LLC"?), EIN handy; what the Intulse console currently shows (existing brand/campaign, use-case
  options, monthly fee); and **will texts ever include links** (e.g. medicare.gov, your site)? `[10dlc-registration-readiness]`
- **Standing favor:** the day a CA or NV license lands, tell us same-day so the site flips the right
  switches. `[1.6]`
- **About-page credential line:** OK to describe the annual cert as "We complete annual Medicare
  certification, including yearly recertification and testing through our partner FMO, Advocate Health
  Advisors" — no "Medicare-certified"/government-endorsed implication? (FMO also confirms.) `[N14]`

## 2. FMO — Advocate Health Advisors (CMS / Medicare sign-off authority)

Advocate is the confirmed sign-off authority for **all** website disclaimer text and owns the
electronic-marketing review. These are pending-Advocate-sign-off, not open J&R tasks.

- **★ No-count disclaimer variant** — written confirmation it's acceptable for an anonymous web page under
  CY2027 guidance (the basis is sub-regulatory; confirm CMS still honors it). `[2.1 🔴]`
- **Inbound-lead consent burden** — for every lead source Advocate sends J&R (recycled lists + social
  campaigns): copies of consent records, and do they **name J&R**? The Advocate contract must carry the
  inbound consent/authorization burden (CMS §422.2274 PEWC naming J&R + MHMDA valid authorization for any
  consumer-health data) before J&R relies on those leads. `[3.7a 🔴]`
- **TPMO disclaimer wording + placement** — sign off the footer disclaimer wording (pre- and post-SHIP) and
  its placement; bundling with the non-affiliation + solicitation sentences. Note: don't add "Assistance"
  to SHIP — the reg says "State Health Insurance **Program** (SHIP)". `[2.2 / 2.4]`
- **Medicare 101 stays educational** — confirm it doesn't cross into marketing (it names no specific plans
  and doesn't route to the lead form). `[2.5]`
- **Solicitation line on Medicare 101** — separately, confirm the site-wide "This is a solicitation for
  insurance" line forced onto the educational page doesn't reclassify it as marketing (and assign it a src
  key). `[2.6]`
- **Carrier logos** — the Advocate-approved logo list **and** the exact wording to show beside the logos
  (identification-only / no implied endorsement / "not every plan"). Gates flipping `carrierLogosShown`. `[2.7]`
- **No-cost / commission wording** — confirm the premium-neutrality phrasing is accurate for every product
  and MCMG-consistent, and that the footer→Terms §2 relocation is fine. `[2.8]`
- **"Disclaimer is not a defense"** — confirm the framing: posting the CMS/SSA disclaimer is necessary but
  not a §1140/§422.2262 safe harbor; layout must independently avoid implying government endorsement. `[2.9]`
- **Vetecare display** — the credential itself is confirmed (issuer Advocate Health; Veterans-content only;
  N4 closed). The open piece is the *display* wording/style so it implies no VA accreditation — rides the
  Veterans D-block + the veterans-sentence finalization, not a fresh ask. `[services D4 / 3.1]`
- **Marketing-review flow in writing** — who signs off disclaimer placement before the launch, and the same
  path later for the reviews section + referrals page. `[testimonials-display / 2.x]`
- **Campaign-lead data path** — do campaign-generated leads arrive as data or click-through? (Pairs with
  J&R #1; Advocate may answer faster.) `[campaign-lead-path]`
- **Carrier-specific filings** — anything carrier-specific J&R should be filing or following that flows
  through Advocate? `[gen]`
- *(minor)* FMO-is-a-TPMO footer reconciliation — don't import Advocate's numeric counts / lead-form consent
  paragraph into our footer. `[2.11]`

## 3. Intulse (VoIP / SMS — Campaign Service Provider for A2P 10DLC)

- **Hold campaign creation** until the SMS-scope decision (high-leverage #2) — the registered use case is
  immutable, 3-month TCR lock, **$20 per submission (including each rejected resubmission), $3–15/mo per
  campaign**. **This is the gating instruction.** `[sms-legal-theory]`
- **Brand registration** via the Account Center: legal name **exactly as on tax documents** + EIN; leave the
  DBA/brand-name field **blank** until the trade name is registered; brand info must match the website;
  support email/phone = info@jrhealthins.org + the main line, shown on Contact. ($8 brand fee.) `[10dlc-registration-readiness]`
- **Direct-link form fields** — do links to *sections* of our Privacy + Terms pages satisfy Intulse's
  "direct link" registration fields, or do they need standalone pages? `[10dlc-registration-readiness]`
- **Verbiage reconciliation** — Intulse supplied template blocks (received 2026-06-11). Keep our stronger
  clauses layered on top (FCC 24-24 any-reasonable-means + 10-business-day revocation, alternate STOP
  keywords, the 9am–8pm state-hours line, the 911 line, our tailored "not a condition" wording). **Do NOT
  adopt verbatim:** (a) the absolute "not shared with any third parties" line (literally false — our
  processors hold the number; the rule is no sharing for third parties' *direct marketing*); (b) "By
  submitting this form and signing up for texts" (keep the two-checkbox separation); (c) "condition of
  purchase" (keep our "not a condition of getting help or of buying any insurance product"). `[sms-consent-scope]`
- **Skip optional vetting** — unvetted throughput (2,000/day T-Mobile, 75 TPM AT&T) exceeds J&R's volume.

## 4. AgencyBloc (CRM + lead-form intake — the #1 vendor)

- **★ Signed BAA + DPA + subprocessor list** + the underlying SOC 2 Type II / HITRUST evidence (security
  page asserts SOC 2 only; HIPAA/HITRUST claims sit on a marketing page). Required for MHMDA §060 /
  NV 603A.525 processor-binding and to keep AgencyBloc classified as a **processor** (not an affiliate). `[3.6 🔴]`
- **Own-use bar** — confirm the contract forbids AgencyBloc using the data for its own purposes (incl.
  product improvement); any own-use makes it a third party and breaks the §7 representation. `[3.7]`
- **Retention clocks** — deletion *capability* is confirmed (`Q6 closed`); now configure separate timers:
  lead inquiries ~24 months from last contact, consent proof longer, SOAs + recordings on the 10-year
  clock. And confirm where SOAs + recordings are stored. `[retention-period]`
- **Consent-record capture** — can the embedded form store, per submission: a timestamp, the **exact consent
  wording shown + its version**, the page URL, and each checkbox's state? (Needed at every form instance.) `[N11]`

## 5. Google Workspace

- **Execute the BAA** in the Admin console — info@ receives inbound consumer/lead email that may contain
  PHI. `[5.5 / Open item 2]`
- **Confirm the current customer-agreement URL** (legacy workspace.google.com/terms reportedly dead; likely
  the premier-terms variant) and that the Cloud Data Processing Addendum is the operative instrument. `[5.5]`

## 6. Cloudflare

Mostly closed — the DPA (v6.4, eff. 2026-04-03) is confirmed; Pages Free tier is sufficient. Remaining are
**launch-time checklist items, not open questions:**

- **Live cookie/config re-verify at launch** — confirm Turnstile is OFF (no `cf_clearance`), `__cf_bm`
  absent, Web Analytics cookieless — before any "cookieless / no tracking" wording is live. `[1.7 / 4.11]`
- **AI Crawl Control** — set the dashboard enforcement to match the `allowLLM` posture (robots/llms are
  advisory only; real enforcement is at Cloudflare). See `_docs/ai-crawlers.md`.
- **Production custom domain** — configured in the CF Pages dashboard (not via the repo `CNAME` file, which
  is GitHub-Pages-specific — see the launch-mechanics item in `backlog.md`).

---

## 7. Verification missions — call-the-source vs. route-to-FMO vs. counsel

Aaron's question: should we go on verification missions — phoning official offices / agencies to get CMS
or compliance facts from the source — or feed better assumptions to the FMO (who already has the TPMO
relationship)? Short answer: **it depends which of three buckets the item is in.** Sort by bucket; don't
cold-call agencies for legal sign-off.

**Bucket A — CMS / Medicare-marketing items → route to the FMO, don't call CMS.**
Advocate is the confirmed CMS sign-off authority and has the carrier/CMS relationship; they receive CMS
guidance directly. A CMS phone rep won't give a legal opinion, and an offhand phone answer is **not a
defense** in an audit. The no-count disclaimer variant (`2.1`), SHIP timing, and the CMS recording mandate +
retention (§422.2274) — all FMO. *(The separate WA all-party-consent question — how a recorded caller is
told — is a legal call, not CMS-marketing; it's in Bucket B as `call-recording-consent`.)*
*Your signal value here is low; the FMO is both cheaper and authoritative-for-this-relationship.*

**Bucket B — legal / statute primary-source verification → counsel, as discrete lookups.**
The EXT-lane items are "is this statute current / what's the exact pinpoint / effective date" questions:
CY2027 wording + dates (`4.11`), state producer-recordkeeping floors behind the Privacy §7 retention basis
(`4.12`), per-state enacted insurance-advertising rules (`4.13`), GA citation upgrades + whether GA
"telephone solicitation" covers texts (`4.14`), the TN 2026 solicitation-oversight law (`4.15`), §155.220
graduation (`4.5`), the eCFR SHIP re-pull on/after 10/1 (`2.2b`), and the NV/SSA penalty figures. Also
counsel (legal opinions, not phone-closable): whether the **FTC TSR applies or J&R is exempt** and whether
the OR/TN telemarketer registrations are **legally required** of J&R's practice (`3.26` — the legal slice;
the filing *mechanics* are Bucket C), and the **WA all-party-consent recording-disclosure script**
(`call-recording-consent`; J&R's current habit is a fact for §1, but the script that satisfies WA + CMS at
once is counsel's). These are **counsel's job** — cheap for them because they're discrete reads, and a phone
rep gives no opinion and no defense. *Best move: hand counsel this pre-organized list so the lookups are
fast and billed efficiently — don't spend your own time cold-calling for these.*

**Bucket C — administrative / registration facts → these ARE worth phoning, and they're yours anyway.**
These are procedural questions where a state office gives a **definitive** answer (and J&R has to deal with
the office regardless):
- **WA trade-name / DBA registration** — WA Dept. of Revenue Business Licensing Service ($5/name). `[trade-name-use]`
- **WA business-entity producer license** (and the designated responsible licensed producer) — WA OIC; plus
  OR/GA/TN entity-license + assumed-name steps. `[entity-license]`
- **TN solicitor registration** ($500, due May 1) — TN TPUC. **OR telephonic-seller registration** — OR DOJ.
  *(Filing mechanics only — whether either is legally required of J&R is the Bucket-B counsel slice of `3.26`.)*
These are real verification missions worth doing: cheap, definitive, and they sharpen the counsel/FMO
questions (e.g. confirming whether the LLC needs its own entity license narrows what counsel must opine on).

**Bottom line.** Do the **Bucket C** calls yourself — they close cleanly and you own those filings anyway.
Route **Bucket A** to the FMO. Give counsel the **Bucket B** list pre-packaged. Don't substitute an agency
phone rep's answer for FMO or counsel sign-off anywhere a compliance representation is being made — that
sign-off is the thing that actually protects J&R, and a phone answer isn't.
