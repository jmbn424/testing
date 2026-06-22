# Medicare 101: Process & Methodology

Last updated: 2026-06-01

## TL;DR

The Medicare 101 page was built through scoping, drafting from inspiration examples, iterative refinement, state-specific expansion, and three rounds of multi-model cross-verification across three frontier models (Claude, Perplexity, Gemini), each with access to real-time web search and deep research capabilities. The multi-model protocol caught errors that single-source research would have missed, including incorrect statute citations and a hallucinated legislative tracker. Where models disagreed on contested facts, the page uses deliberately softer language paired with inline links to authoritative sources. After three rounds of verification, all three models converged on the same final draft. This document captures the process so future pages can follow the same approach.

---

This document records the process used to research, draft, refine, and verify `medicare-101-page.md`, the educational Medicare overview published on the agency's Jekyll site. It exists for three reasons: to make the work repeatable when new pages are added, to onboard future collaborators (human or AI) without re-litigating decisions already made, and to document the multi-model accuracy verification protocol that produced the final page.

The companion documents are `medicare-101-page.md` itself (the production page), [medicare-101-content-sources.md](medicare-101-content-sources.md) (the audit trail for every factual claim on the page), and [medicare-101-content-maintenance.md](medicare-101-content-maintenance.md) (the schedule and triggers for re-verifying time-sensitive content). This process doc connects them: how the page was built, how the sources were vetted, and where the maintenance triggers came from.

## Project Context

The site is a Jekyll project hosted on GitHub Pages, built for a health insurance agency licensed in Washington, Oregon, California, Georgia, and Tennessee, with possible future expansion. The Medicare 101 page is the flagship educational page: state-neutral in its main body, with state-specific accordion blocks for each licensed state and a catch-all for everywhere else. The page funnels softly toward licensed-advisor contact but is designed primarily as an authoritative SEO-friendly resource, not a marketing funnel. Marketing-funnel components live elsewhere in the site template, and the two CMS-mandated disclaimers (the "We do not offer every plan available..." notice and the "Not connected with or endorsed by the U.S. government..." notice) live in the sitewide footer rather than on individual pages.

## Phase 0: Scoping

Before any drafting, six clarifying questions were resolved:

1. **Audience.** Primarily first-timers approaching 65, but also current enrollees considering changes and family members helping a parent. Not adult-children-as-caregivers specifically, and not nursing-home-stage. Golden years, not end-of-life.
2. **Scope.** A single comprehensive page, not a hub linking out to sub-pages.
3. **State strategy.** Start state-neutral, expand later. The original Phase 1 page shipped without state content; Phase 2 added the accordion blocks.
4. **Funnel.** Educate with soft CTAs; no marketing.
5. **Voice.** Warm, plain-English, anti-jargon, trustworthy without being salesy. The mental model is "calm, competent local broker who happens to be a good writer," not "national carrier marketing department."
6. **Out of scope.** Carrier lists, plan recommendations, pricing tables, anything that would require continuous maintenance or trigger CMS marketing-regulation review.

CMS marketing-compliance considerations were flagged at this stage so they would not be a surprise later, with the explicit understanding that final publication would route through the agency's compliance contact.

Ten inspiration pages were gathered upfront (MedPAC, KFF, Cedars-Sinai, Medicare Rights Center, Mutual of Omaha, Medicare.gov, BCBSM, two local agency examples, and Providence Health Plan). These were used for structural and topical reference only, never lifted from. They are documented in the [sources file](medicare-101-content-sources.md#inspiration-sources-structural-and-editorial-reference-not-factual-citation) under "Inspiration sources" and are explicitly separated from the factual citation tiers.

## Phase 1: First Draft

The first draft worked outward from three of the strongest inspiration anchors (Cedars-Sinai, Mutual of Omaha, MedPAC) by extracting common structural patterns across them, then composing original content. All 2026 CMS figures (Part A deductible, Part B premium and deductible, Part D out-of-pocket cap, IRMAA thresholds, coinsurance amounts) were verified against the November 2025 CMS press release at draft time.

The first draft landed at roughly 2,800 words with the structure: intro, what Medicare is, eligibility, the four parts, the two main paths, Medigap explainer, costs, enrollment windows, how to choose, FAQ, next steps.

## Phase 1.5: Iterative Refinement

This was the most labor-intensive phase. Several distinct passes ran in sequence:

**Length reduction.** Trimmed from roughly 2,800 to 2,100 words. The four Parts sections collapsed from headers to bolded lead-ins, and prose tightened throughout. This established the target length window for educational pages on this site: roughly 2,000 to 2,500 words.

**Voice fixes.** Removed lines that read as goofy or AI-stylistic in a content review. One specific example: "That last point is where the confusion usually starts. Let's untangle it." Lines like that read as transitions a writer would never actually write.

**Accuracy self-review.** Caught and corrected a "per hospital stay" reference that should have been "per benefit period."

**Multi-model critique.** Feedback was solicited from Perplexity, ChatGPT, and Gemini, then evaluated on merit (not deferring to any model by default). Seven substantive catches were adopted: decoupling Medicare eligibility from the 10-year Part A work history (the original phrasing conflated two things), correcting the Medigap Open Enrollment Period to require both age 65 and Part B enrollment, softening an absolute claim about vaccine cost, adding the 20-employee threshold for safely delaying Part B, adding the COBRA/retiree/VA-coverage caveat, adding the IRMAA two-year lookback and Form SSA-44 appeal route, and trimming an aphoristic line that read as filler. Several suggestions were rejected: ChatGPT's claim about General Enrollment Period coverage timing relied on a pre-2023 rule, several proposed rewrites reintroduced em dashes and other LLM-stylistic markers, and the wholesale page rewrites would have replaced concrete prose with vaguer wordier prose. This established a principle that carried through the project: **evaluate suggestions on merit, not by source, and treat AI-generated stylistic noise differently from AI-generated substantive catches.**

**Em dash purge.** Em dashes were flagged as an AI tell in informational web copy. All 22 instances were replaced contextually with colons, parentheses, semicolons, or sentence splits. This is now a locked-in editorial rule for the site.

**Inline authoritative links.** Ten outbound links to .gov sources (medicare.gov, ssa.gov, cms.gov, medicaid.gov) were added to anchor the page's trust signals and give readers navigation paths into authoritative source material.

**Late-addition example analysis.** One additional inspiration page (BCBSM) was reviewed after the bulk of refinement was complete. It contributed one worthwhile addition: the "do I have to re-enroll every year" FAQ with the Annual Notice of Change reference.

**Compliance disclaimers.** The two CMS-mandated disclaimers were placed in the sitewide footer rather than on the page itself, on the principle that footer disclaimers cover all pages without cluttering educational content.

**`lastUpdated` front matter.** A `lastUpdated` field was added to the page's front matter with Liquid template guidance for rendering "Last reviewed: [Month Year]" near the bottom educational disclaimer.

This version of the page shipped to production.

## Phase 1.75: Bootloader Documentation

To preserve context efficiently across future Claude conversations, a "bootloader prompt" was created: a roughly 680-word block that summarizes project background, editorial decisions made (do-not-relitigate list), the synthesis-from-examples approach, working style, and what's already in production. The bootloader is designed to be pasted into a new thread as the first message, with the production markdown and a new request following after acknowledgment. The bootloader lives in `bootloader-reference.md` alongside instructions for keeping it up to date.

## Phase 2: State-Specific Content

The state-neutral page was extended with accordion-ready content blocks for each of the five licensed states, plus a catch-all "All Other States" block. Scoping decisions: no carrier lists, link-only SHIP information (since the SHIP locator is the canonical resource), balanced treatment in the catch-all block so users in unlicensed states still get useful pointers.

Research mode was used to surface state-specific Medigap rules, SHIP programs, Medicaid programs and Medicare Savings Program access, and state insurance regulators. The research returned structured findings covering Washington's year-round guaranteed-issue switching (with the 90-day prior-coverage requirement and community rating), Oregon's birthday rule, California's 60-day birthday rule and Medi-Cal asset rules, Georgia's prohibition on attained-age rating since 2009, Tennessee's attained-age pricing without a state switching window, and federal resources for the catch-all.

Six state blocks were drafted following a parallel micro-structure: lead with what's distinctive about that state's Medigap rules, then SHIP, then Medicaid and MSP, then regulator, then a plan-comparison pointer to Medicare.gov's Plan Finder. Total addition was roughly 1,200 words distributed across six blocks designed to render collapsed by default.

## Phase 2.5: First Verification Pass

A targeted accuracy review on Phase 2 content caught two real errors that had slipped through Research mode:

- **Oregon birthday rule timing.** The Research mode finding said "30 days starting on the birthday." The official SHIBA fact sheet says "30 days before your birthday and ends 30 days after." Fixed.
- **Washington 90-day prior-coverage requirement.** Missing from the original draft; added.

A third change softened the count of states with birthday-rule equivalents from "sixteen states" to "more than a dozen and growing," for evergreen accuracy. This was the project's first explicit instance of erring toward softer language when the precise count was both moving and verifiable only with effort, which became a recurring pattern.

This verification pass was significant in establishing a working principle: **Research mode output is good but not infallible, and primary-source spot checks on the highest-risk claims are worth doing even when the research seems thorough.**

## Phase 3: Multi-Model Cross-Verification (Fresh Thread)

Phase 3 was the most rigorous accuracy phase and is where the multi-model verification protocol was fully developed. The work happened in a fresh Claude thread bootstrapped with the bootloader, the current production markdown, and the maintenance doc. Three independent rounds of verification ran in series.

**Round 1: Claude's own deep research.** Verified all federal Medicare basics, all nine 2026 CMS cost figures, enrollment windows, and the state-specific Medigap rules. Surfaced three material updates that needed to land on the page: California's Medi-Cal asset limit reinstatement effective January 1, 2026 (the asset-free regime from 2024-2025 is over), California's specific ESRD exclusion from its under-65 Medigap mandate, and a clarification of the regulatory split in California between CDI and DMHC.

**Round 2: Perplexity independent audit.** Perplexity was asked to audit Claude's content with its own research, and flagged several specific items. Verification against primary sources resolved each:
- Perplexity's claim that California's birthday rule is governed by Insurance Code § 10192.62 was **refuted**. The correct statute is § 10192.11(h)(1).
- Perplexity's correction that Oregon's SHIBA is administered by the Oregon Department of Human Services (not Department of Consumer and Business Services as previously listed) was **confirmed** and applied to the page.
- Perplexity's citation of Georgia's prohibition on attained-age rating since September 23, 2009, via Ga. Comp. R. & Regs. R. 120-2-8-.15(7), was **confirmed**.
- Perplexity's report that California SB 242 had died on February 2, 2026 was **confirmed**.

**Round 3: Gemini independent audit.** Gemini was asked to do the same kind of audit. It returned a much larger volume of proposed changes, many of which required independent verification against primary sources:
- Gemini's claim that California's birthday rule provides a "91-day window" was **refuted**. The statute provides a window of "30 days or more, commencing with the individual's birthday." Most carriers voluntarily extend to 60 days; the consumer window does not begin before the birthday.
- Gemini's proposed pending-legislation tracker paired three real bill numbers (WA SB 5032, WA HB 1201, GA SB 401) with **fabricated Medicare-related subject matter**. A fourth bill number (TN HB 2104) did not appear to exist. This is a classic AI hallucination pattern (real handles, fabricated content) and the entire proposed tracker section was rejected.
- Gemini's proposed additions of TrumpRx, the Medicare GLP-1 Bridge, High Deductible Plan G specifics, MA out-of-pocket maximum specifics, the 60% to 72% creditable-coverage threshold change, and an IRMAA top-tier freeze were all **confirmed as factually real 2026 Medicare changes** but **rejected as out of scope** for a 101 page. These belong on more specialized pages if they're added at all.
- Gemini's proposed GLP-1 Bridge drug list was **partially refuted**. Mounjaro and Ozempic are not included; Foundayo is included; Zepbound is KwikPen-only.
- Gemini's birthday-rule state count of 15 was **refuted**. The correct number was 16 as of mid-2026, and the count keeps growing as more states pass equivalent legislation.
- Gemini's status report on Tennessee SB 2575 / HB 1848 was **corrected**. These bills died at the 114th Tennessee General Assembly's sine die adjournment on April 23, 2026, rather than remaining pending.

## Phase 4: Synthesis and Minimum-Necessary-Changes

Applying the verification results back to the page used a strict minimum-necessary-changes principle: improve accuracy where verification surfaced a real problem, leave alone everything that was already correct, and resist the urge to use accuracy review as an excuse to rewrite passages that were merely stylistically different from what a given audit model would have preferred.

Changes applied:
- Oregon SHIBA agency attribution updated from DCBS to Oregon Department of Human Services
- California section gained the Medi-Cal asset reinstatement paragraph, the ESRD exclusion clause, the corrected DMHC/CDI regulatory framing, and an inline link to California Health Advocates' specific birthday-rule article
- Tennessee "most" Medigap policies use attained-age rating softened to "many," reflecting the absence of state-specific market-share data
- "All Other States" block updated from "more than a dozen" to "about 16 states currently have some form of Medigap birthday rule or annual guaranteed-issue switching window, with specifics that differ from state to state, and the count keeps growing"

Changes deliberately rejected:
- All of Gemini's out-of-scope additions (TrumpRx, GLP-1 Bridge details, HD Plan G, MA MOOP specifics, creditable-coverage threshold details, IRMAA top-tier freeze)
- All four of Gemini's fabricated or mis-subjected bill numbers in the proposed pending-legislation tracker
- The pending-legislation tracker itself, as a section on the public-facing page (a maintenance-only tracker lives in [medicare-101-content-maintenance.md](medicare-101-content-maintenance.md) instead)

## Phase 5: Final Verification and Source Documentation

A final self-diagnostic accuracy review of the updated page surfaced no further corrections. Perplexity and Gemini were each asked to do a final read-through; both signed off (Perplexity: "no critical errors, ready to publish"; Gemini: "100% accurate, ready to ship").

A comprehensive sources document ([medicare-101-content-sources.md](medicare-101-content-sources.md)) was then assembled, capturing all three models' research consolidated into a single structured reference. Sources were organized into four tiers: shared sources (cited by two or more models, with subdivisions by which combination), Claude's unique sources, Gemini's unique sources, and Perplexity's unique sources. Within each section, sources were split into primary (CMS, statute text, official agency publications) and secondary (broker sites, advocacy groups, news, analysis). Four randomly selected URLs from the new lists were spot-checked against live web content for sanity; all resolved.

The sources doc also includes a [methodology note](medicare-101-content-sources.md#notes-on-methodology-and-source-quality) flagging known patterns of source-quality variability, with one specific extended example: multiple broker sites describe the California birthday rule incorrectly as a 90-day window starting before the birthday, often citing the wrong statute section. The methodology note is intended as evergreen guidance for future verification work, not just a one-time disclosure.

## The Soft-Language Pattern

One pattern recurred often enough to deserve explicit treatment. When verification surfaced a fact that was either contested between models, hard to verify with confidence, or unstable over time, the resolution was usually the same: use deliberately softer or vaguer language on the page itself, and either link out to an authoritative source for readers who need precision or document the uncertainty in the maintenance doc.

Concrete examples:

- **California birthday rule window.** Models disagreed on the window length and statute citation. The statute provides "30 days or more" starting on the birthday; most carriers extend to 60. The page uses "a 60-day window each year, starting on your birthday" and links to California Health Advocates' specific birthday-rule article for readers who need exact carrier-by-carrier detail.
- **Birthday-rule state count.** Models gave different counts (15, 16, "more than a dozen"). The page uses "About 16 states currently have some form of Medigap 'birthday rule' or annual guaranteed-issue switching window, with specifics that differ from state to state, and the count keeps growing," paired with a pointer to the user's state SHIP for state-specific detail.
- **Tennessee attained-age rating prevalence.** No reliable state-specific market-share data was available. The page uses "Many Tennessee Medigap policies use attained-age rating" rather than "Most," and recommends working with an advisor who can re-shop on the user's schedule.
- **Late-enrollment penalty severity.** Different sources frame this differently. The page uses "The penalties aren't usually catastrophic, but they're permanent," which is accurate and signals the right level of concern without overclaiming.

The general principle: **when two well-sourced research passes disagree on a precise fact, prefer language that is correct under either interpretation, and route readers who need precision to a primary or near-primary source via inline link.**

## Locked-In Editorial Decisions

These should not be re-litigated in future threads or future pages on this site:

- **No em dashes anywhere.** Use colons, parentheses, or sentence splits.
- **Semicolons sparingly.** They tend to read as an LLM tic in informational web copy. Prefer splitting into separate sentences or using a comma plus a conjunction. Reserve semicolons for the rare case where nothing else reads as cleanly. The production page was deliberately de-semicoloned in a June 2026 copy-quality pass.
- **Prose over bullets** for anything that isn't genuinely list-shaped.
- **Target length** of roughly 2,000 to 2,500 words for main educational pages. Tighter beats longer when there's a choice. The current Medicare 101 page runs longer because the state accordions add material; the state-neutral core is still in the target range.
- **Voice.** Warm, plain-English, anti-jargon, trustworthy without being salesy. Educate first, sell second or not at all on educational pages.
- **Compliance disclaimers in the footer**, sitewide. Not on individual pages.
- **Educational disclaimer at the bottom** of content pages, including the `lastUpdated` reference.
- **`lastUpdated` front matter** in camelCase, rendered as "Last reviewed: [Month Year]."

## Working Principles

- **Ask clarifying questions before substantive work begins.** The Phase 0 scoping conversation saved enormous rework downstream.
- **Verify factual claims with web search rather than from memory**, especially numbers and current rules.
- **Evaluate multi-model feedback on merit, not by source.** Reject stylistic noise; adopt substantive catches; show reasoning.
- **Make only the changes requested.** Don't take edit requests as opportunities to "improve" other passages.
- **Flag compliance considerations** when they come up; defer final calls to the agency's compliance contact.
- **Minimum-necessary-changes principle.** When applying verification results, change only what verification surfaced as wrong.

## Working Principles for Multi-Model Verification

The three-model cross-verification protocol delivered higher accuracy than any single model's research alone. Several specific errors would have shipped under single-source review: the Oregon SHIBA agency change, the California Medi-Cal asset limit reinstatement, the Tennessee legislative death, the fabricated bill numbers in Gemini's proposed tracker, and several places where models confidently propagated common-but-incorrect statutory citations.

The verification pattern that worked best:

1. **Ask each model for its claims AND its sources.** Claims without sources can't be audited.
2. **Independently verify the most consequential claims against primary sources.** Statute text, CMS fact sheets, state legislature trackers, official agency publications.
3. **Treat AI-suggested bill numbers with extra skepticism.** The failure mode of "real bill number, fabricated subject" appeared multiple times in this project and is worth flagging in any future research that proposes a legislative tracker.
4. **Treat confident agreement between two AI models as weak evidence, not strong evidence.** Common incorrect framings propagate between models because they propagate between secondary sources, which both models consult. Direct primary-source verification breaks the loop.
5. **Document where uncertainty remained** so future maintenance triggers can re-check the right things.

**Claude wanted to clarify: self-evaluation has limits.** At several checkpoints in this project, each model was explicitly asked to introspect on its own accuracy and hallucination risk. This caught some real errors (the "per hospital stay" reference in Phase 1.5, the Oregon birthday-rule timing miss in Phase 2.5) and is worth doing as a discipline. But the practice's limits are real: a model that could reliably detect its own hallucinations would not produce them in the first place. Gemini's "100% accurate, ready to ship" sign-off arrived in the same thread that had earlier proposed multiple fabricated bill subjects. The bigger accuracy wins came from cross-model verification and primary-source checking, not from any single model's self-evaluation. Treat self-review as a useful checkpoint that creates structure and slows down confident wrong answers, not as a reliable defense against hallucinations on its own.

## What's Next

Likely candidates for future work using this same process:

- Topic-specific deeper pages (Medigap-only, Medicare-Advantage-only, Part D-only, enrollment-only)
- Life-event-specific pages (turning 65, retiring, losing employer coverage, moving states)
- State-specific pages if state expansion creates enough volume to justify them
- A glossary page for the vocabulary that the 101 page deliberately introduces in plain English

For any of these, the workflow is: bootloader into a fresh thread, paste the current production markdown plus any companion docs, scope with clarifying questions, draft against authoritative sources, refine with multi-model critique evaluated on merit, verify with multi-model cross-verification, apply minimum-necessary changes, document sources.
