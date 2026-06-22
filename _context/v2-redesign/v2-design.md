# v2-design.md — proposed plan, roadmap, and documentation for the v2 system

PURPOSE: one carryable design document for v2 (a reusable, compliance-first static brochure-site system for regulated-industry SMBs), synthesizing the analysis into a plan we can iterate on. AUDIENCE: Aaron, then any future design/Integrator thread or person picking this up cold. AUTHORITY: advisory working document. NOT canon, NOT a build order, no verdicts; `canon.md` controls on any conflict about J&R facts. COMPLETENESS: ends with `</v2-design>`.
INTEGRITY (tiered, by design): rev 2 · 2026-06-13 · side-file tier, line-count-and-a-glance, no body hash. Deliberately omits the canon hash ritual as a first instance of the "tier the ceremony" principle it argues for in §6.

<manifest>
- §0 what this is, provenance, what changed in rev 2
- §1 thesis (one screen)
- §2 sequencing — the spine that governs everything else
- §3 the design/build boundary — cheap-now vs must-wait
- §4 the safe-and-urgent work — the review-instrumentation harness
- §5 target architecture — the destination, plus the clone rule and the GUI trap
- §6 process diet — what git replaces, what control structure stays
- §7 survivability / bus factor / the J&R relationship in writing
- §8 the commercial path — honest read and the requirements that come with money
- §9 carry-forward / drop — quick reference
- §10 open questions for our iteration
</manifest>

---
<v2-design>

<what-this-is id="§0">

## What this document is

A single place that states the v2 plan, the roadmap with dates and gates, and the documentation shape, so we can argue with it and revise it. It is the cheap paper work, not the build. Writing the plan commits no code and hardens no legal content, which is why it is safe to keep doing while the engine work is deferred (see §3).

It continues the read from earlier turns, which landed on four points this document carries forward and makes concrete: (1) "design" and "build" are different verbs and the real fork is paper-versus-tooling, not now-versus-later; (2) the one v2 task that is both safe and time-critical is instrumenting the upcoming legal review before it happens, because that learning is produced once and is lossy by default; (3) a clean J&R pass validates less than it appears to (n=1, one jurisdiction, one industry); (4) the strategy documents converge hard because they trace to a single lineage, so the convergence is one viewpoint argued well, not independent confirmation.

## Provenance

Synthesized from: the two Integrator close-out transcripts; the kickoff brief; the layer-slice diagnostic; the design-principles companion; the General-thread `v2-redesign-brief.md`; `architecture.md`; the three role bootloaders; `vendor-facts.md`; the formatting house rules; the rev-3 J&R email draft; a pasted founder-conversation thread with Jon (AI research engineer) and messages to John Merrell (regulated-medical-marketing/SEO); and a quick read of the live testing site. `cheat-sheet.md` is runtime-operational and out of scope. `abippoc.md` (Engage+ / market research) was referenced but not in view; the comparator economics in §8 are carried from that brief and flagged volatile.

## What changed in rev 2

- The generalization trigger is firing. There is a second WA-adjacent brokerage (a J&R friend in a non-competing state) that wants the system, a cross-industry prospect via John's plastic-surgery/medspa agency, and an active acquisition thesis (AgencyBloc / Engage+). This answers the prior "is there a second client" question (yes) and moves §8 from a parked option to a set of active requirements.
- The J&R build has correctly begun. A functional, intentionally barebones testing site exists with all required disclaimer text and all legal pages, passing the validators. This is the instance, not the factory, which is exactly right per §3.
- The J&R timeline is now accurate and lower-stakes than rev 1 assumed: FMO sanity-check next week, then counsel, then an FMO final look at the polished site, then a soft launch with no fanfare. June 30 is a soft target set by everyone's attention and availability, not a regulatory deadline. The one genuinely time-bound thing remains the 2026-10-01 SHIP swap.
- The "dark factory" framing is retired by the owner's own clarification. The intended product is a human-first, human-middle, human-last hybrid: seasoned pros steering a mix of frontier and lightweight-local models plus ordinary code libraries, each used where it is the right tool. This document treats that hybrid as the design target, and §8 argues it is also the defensible and sellable shape.

</what-this-is>

<thesis id="§1">

## Thesis (one screen)

The asset is the routed, owner-assigned triage and the honest UNVERIFIED posture, not the polished pages. The reusable core is a scope-tagged authority library, a layered drafting frame, a render and gate machinery, a register-template generator, and the honesty methodology. That is a starter kit plus a methodology, materially smaller and more honest than a factory. The high-compliance-value copy fuses layers (the TPMO disclaimer is four layers in one sentence) and the register does not decompose by layer at all, so a slot-filling factory cannot produce the parts that carry the most risk. Those parts need the human-and-counsel layer, which is why the honest product is a studio or platform with review built in, not a lights-out machine.

The governing discipline is sequencing: validate one instance through real legal review before generalizing, because review is the only thing that reveals which assumptions were load-bearing. The product philosophy that follows is the right one and worth building an identity on: human-first, human-middle, human-last, with frontier models on hyperscalers and lightweight local models and plain code libraries each used where they fit, and licensed humans owning every compliance decision. That posture is simultaneously the ethical one, the liability-sound one (§8), and the one that differentiates in a market where naive AI slop-generators will proliferate and be distrusted.

</thesis>

<sequencing id="§2">

## Sequencing — the spine

Dates anchor to the soft J&R launch (target June 30, attention-driven not regulatory) and the CMS CY2027 marketing-applicability date of 2026-10-01. Each phase gates the next; do not pull work across a gate.

### Phase 0 — now: freeze the factory thinking, finish the instance, instrument
The J&R instance build is live and correct (the testing site). Permitted and active work in this window is narrow:
- Send the rev-3 J&R email. It defuses item 3.27, the live present-tense exposure (texting leads from personal cells before the registered program exists). Sending beats further polishing.
- The one canon-facing edit: the CHD ungated-Nevada check (item 3.17).
- Build the review-instrumentation harness (§4). This is the only net-new v2 construction worth doing now, because it is method-work that hardens no legal assumption and it must exist before the review to capture it.
- Write two short documents: the Jasmine cold-start one-pager and the J&R-relationship-in-writing note (§7).

### Phase 1 — the gauntlet (now accurate)
FMO sanity-check next week on the barebones-but-legally-complete site (all disclaimer text and all legal pages). If it passes the sanity check, counsel reviews while the rest of the content is fleshed out. The FMO then takes a final look at the polished, ready-to-publish site. A soft launch follows when the reviewers are happy and before everyone gets busy. Capture every FMO and counsel change through the harness: which layer(s) the touched clause fused, what changed, and whether it reads as instance-specific or general. This is the single highest-information event in the program. Instrument it.

### Phase 2 — post-launch (target July, gated by §10 q1)
Only after launch, and only if the process-as-product gate in §10 is cleared, move the working record into git plus Claude Code on the existing private repo. Re-folder into the engine/law/client layout (§5), port the open register, wire CI lints and the scheduled-rebuild mechanism, retire the courier artifacts. This is a refactor for inheritability, not a rebuild for its own sake. It is not a dashboard and not multi-client tooling.

### Phase 3 — 2026-10-01: the SHIP flip as first live proof
The `ship_in_tpmo_disclaimer` change ships through the dated mechanism on its real deadline. Stays compatible with the already-locked pre-staged-PR mechanism Jasmine merges, so it works whether or not Phase 2 has happened. (See §4 note: verify the current SHIP switch state, since the test render is showing the post-10/1 wording.)

### Phase 4 — generalize (the trigger is firing, so this is now near-term)
Treat each new instance as its own validation event, not as proof the factory works.
- The second brokerage is an engine-clone, never an instance-clone. Clone the templates plus the law modules for their state plus a fresh register instantiated from the templates. Do not copy J&R's filled elections, facts, or copy, which is both J&R-confidential and wrong for another state (the jurisdiction layer is exactly where the assumption leaks live). The new client runs their own gauntlet with their own counsel. The kit makes that cheaper. It never skips review.
- Build shared tooling, any GUI, or the company entity only after the first instance is validated and IP title is clean (§8). Until then the layer separation keeps generalization a refactor rather than a rewrite.

</sequencing>

<design-build-boundary id="§3">

## The design/build boundary

The most useful distinction in the whole effort. "Should we do v2 work now" conflates two activities with opposite risk profiles.

Cheap, reversible, sharpens thinking, surfaces bugs for free, safe now: this document, the harness specification, the layer-slice diagnostic, principle capture, naming hypotheses, writing composition rules down as prose, and the J&R instance build itself. Building J&R is the right kind of build: it is the instance under validation, not the factory.

Expensive, hardens untested assumptions, multiplies error across clients, wait for validation: the engine-as-product, the composition tooling, the template generator with tooling around it, parameterized clause libraries treated as settled, any GUI, and the company. The second-client engine-clone is allowed because it is a clone of the reusable layer that still routes through its own counsel; the engine-as-a-sellable-product is not, until the first instance has survived review and IP is clean.

The rule stands: paper and hypotheses now, tooling and content-commitment after one instance survives review.

</design-build-boundary>

<instrumentation-harness id="§4">

## The safe-and-urgent work: the review-instrumentation harness

The centerpiece of Phase 0 and the part least covered by the existing inputs. The existing documents say "ship J&R and instrument what counsel changes." Correct in spirit, but you cannot instrument retroactively. The first FMO pass and the first counsel pass are the highest-information events in the program and they happen once per instance. Without a harness in place beforehand, the redlines come back, you fix them, you launch, and the data v2 is built from is metabolized as "J&R is now compliant" instead of "this clause fused layers I and J, counsel changed it thus, and here is whether it generalizes."

The register is already roughly 80 percent of the harness: routed, ID'd, owner-tagged, severity-coded. Two additions turn it into the instrument:
- a layer signature on each open item (which of G, I, J, X, M it draws on, and whether it is a single-layer item or a fusion);
- a review-disposition field, filled during Phase 1 (what counsel or the FMO did to the clause, plus a one-word generalization verdict: instance, jurisdiction, industry, or general).

The accumulated harness output across instances is also the product's evidence base. It is what you would show a buyer to prove the kit works and what tells you which clauses are safe to harden into shared modules (§8).

### What a clean J&R pass actually validates (the n=1 ceiling)
A clean pass validates the general layer plus the Medicare-in-WA slice, and reveals what was load-bearing for that instance. The most dangerous assumption leaks are precisely the ones a WA-Medicare instance never exercises: the limitation-of-liability and arbitration carve-out naming the WA MHMDA private right of action (breaks only in a state without one), the GLBA-because-insurance framing (breaks only against a non-insurance SMB, for example John's medspa world), the "not VA-accredited" line (breaks only against an accredited client), and the language-access and EU sections (applicability turns on entity size, federal-funding nexus, and EU visitors). So a clean J&R pass is the first of N validation events, not the validation event. Leave the generalization verdict blank for any layer the instance did not test.

Keep a counsel-facing redline summary (verbatim old-to-new, human readable) even after git diffs replace the engineer-facing change manifest. A reviewing attorney acts on redlines, not diffs.

</instrumentation-harness>

<target-architecture id="§5">

## Target architecture — the destination, the clone rule, the GUI trap

Where Phase 2 points, not something to build before then. The shape comes from the redesign brief and completes the contract metaphor: the engine is the form book, the law layer is the statute riders, the client config is the executed term sheet.

```
engine/       conventions, gate/include syntax, drafting frame, CI lints (orphan check)
law/          jurisdiction modules, authority register (UNVERIFIED keys), dated-flip calendar, rejected-claims ledger
clients/jr/   facts.yml, elections.yml (boolean switches + per-state status), voice notes, client-specific copy
pages/        templates only; client facts and statute text enter by reference, never inline
registers/    open flags per client; closed history lives in git log, not in the working file
```

A new client is a new `clients/` folder with a filled term sheet, not a fork. Canon already anticipates this: the `<config-parameters>` stub plus the `config-schema` register item are the seed of the client-elections file.

Three things the existing inputs underweight:
- The high-value copy fuses layers (the slice's fusion list). Pages therefore need a composition step with precedence rules ("tightest jurisdiction floor wins"), not a slot-filler.
- Engine-clone, never instance-clone (the rule in §2 Phase 4). `clients/jr/` never leaves the building. A new client inherits `engine/` plus their `law/` modules plus a fresh register, and brings their own counsel.
- The GUI trap. Puck and Payload are heavy React page-builder and CMS infrastructure. The architecture's whole thesis is the opposite: static Jekyll, no CMS on purpose, almost no client JS, because every layer a visitor touches is a new compliance surface and a new public claim that must stay true. A GUI or configurator is fine at author time if it emits a minimal static artifact. A React editor inside the delivered page reintroduces the client-JS, cookie, and vendor footprint that is exactly what makes the product compliant. "Slap a GUI on top" is safe only if "on top" means author-time, never in-page. This is the build/serve separation the architecture already mandates.

Two cautions carried from rev 1: the substrate already exists (GitHub, CI, Cloudflare, and Jasmine already merges PRs), which de-risks the migration; but "mostly mechanical re-foldering" is optimistic about the control-structure port, and the role-to-session-mode move can quietly weaken the separation-of-authority safeguard unless the Validator pass runs from genuinely fresh context (§6).

</target-architecture>

<process-diet id="§6">

## Process diet — what git replaces, what control structure stays

Cut coordination process, which exists only to compensate for chat-thread statelessness and human couriering. Keep control structure, which is the compliance product.

Cut, replaced by git primitives worked through Claude Code on the existing repo: rev announcements to commits and tags; change manifests to diffs and PR descriptions (keep the counsel-facing redline summary, §4); body hashes and completeness sentinels to commit SHAs (keep sentinels only on files that still travel by upload); one-writer-by-convention to branch protection; regenerated handoffs to none needed, because the repo is the state; the closed ledger to git history plus an archive file.

Keep, unchanged in kind, because this is the product: one decision point (the switchboard); self-describing gates, with the orphan check promoted from ritual to CI lint; three registers, separate and never bleeding (content, authority, open questions), define-once and reference-never-restate; every authority UNVERIFIED pending counsel and FMO, review gates as the structural default; the code-is-not-prose carve-out; the FMT discipline, with two v2 additions that matter more as the pipeline automates: stable IDs on every referenceable chunk, and literal/do-not-interpret fences on all externally sourced text (statute quotes, vendor verbiage, templates), which is injection hygiene.

Tier the ceremony: the live working content earns full rigor; side files (this one) get a line count and a glance. Verification diet: one careful primary-source pass plus counsel beats N correlated model audits plus synthesis, because counsel is the only verification that legally matters and models share failure modes (the GA, TIPA, and FCC traps are the recorded correlated-error examples). Run the queued cycle, then stop. Keep the rejected-claims ledger permanently as the immune system, enforced cheaply in v2 by a CI grep on the do-not-reintroduce strings. Dated flips get a scheduled CI rebuild reading the calendar in `law/`; the 10/1 SHIP flip is the first test.

One caution on the role-to-session-mode move: the separation of verification authority from drafting authority (Integrator drafts, Validator verifies, neither imports the other's "verified" stamp) was a genuine epistemic safeguard, and it held because it was structural across two threads. Git solves the transport problem that forced the hash machinery into existence, but it can revert the safeguard to a matter of discipline unless the Validator pass runs from fresh context that has not seen the drafting reasoning. Preserve the safeguard deliberately.

</process-diet>

<survivability id="§7">

## Survivability / bus factor / the J&R relationship in writing

A 2-person mother-and-daughter shop cannot depend on tacit knowledge in one volunteer's head or one thread's context. This is a first-class requirement. The bootloader-plus-canon handoff already achieves a cold start; v2 should preserve it via thin role stubs that include one `engine/` frame.

Cheap insurance to add now:
- a one-page note for Jasmine: where the repo lives, what each file is, who holds which sign-off, how the SHIP swap and any state addition get made;
- the J&R relationship in writing, now urgent because commercialization is live (§8). Aaron built the site and holds the compliance corpus as a gift. Define what J&R is to any future company (customer, consented case study, equity holder, or simply the first friend helped for free), get it in writing, and make sure Rowena and Jasmine are bought in. The worst outcome here is not legal; it is a soured friendship over an unspoken assumption.

The deeper point, kept from the close-outs: the documents memorialize integrity, they do not manufacture it. The best protection the business has is that two real people answer the phone honestly. The system's job is to make that protectable and inheritable, not to substitute for it.

</survivability>

<commercial-path id="§8">

## The commercial path — honest read and the requirements that come with money

Promoted from a parked option, because Aaron is actively pursuing it.

### Honest read
The market is real: Medicare and individual/family health-insurance brokerage compliance is a high-pain, high-regulation niche with real money, and AgencyBloc's Engage+ proves customers already pay for adjacent tooling. The AI-distrust moment is a tailwind for an honest operator, not only a headwind: naive slop-generators will proliferate and be distrusted, and a transparent "AI does the engineering and analysis, licensed humans own every compliance call, audited" posture is a credible differentiator. The sharpest single wedge is the 10/1 SHIP demo, since the research found verified Engage+ sites still showing outdated SHIP language while a dated-flip system would have fixed it on the deadline.

The brutal part is the shape and size. The valuable core resists pure productization (the high-value copy fuses layers, the register does not decompose), so the honest product needs the expert-and-counsel steering layer. That makes it a compliance-first studio or platform with human review as the product, not a lights-out factory. It is a good business, but more services-flavored, lower-margin, and harder to walk away from than the pure-SaaS, config-in-site-out exit fantasy. Be clear which you are building, because the team and equity plan should match it.

Defensibility is the real question. "LLM prompts plus markdown templates plus Jekyll" is not a patent-style moat, and a resourced incumbent (AgencyBloc itself) could rebuild the engine after seeing the demo. The actual moat is operational: the curated and maintained authority and jurisdiction library, the methodology and register system, the accumulated validated instances, execution speed, and relationships. That is a real moat, but an operational one, which again favors the studio/platform shape over a pure-IP sale. The acquisition is plausible upside, not a base case; build it so it does not need AgencyBloc to say yes, because single-acquirer dependency is fragile.

The whole thing is gated on the work that keeps getting deferred. The opportunity becomes real at roughly three validated instances across two industries and a couple of jurisdictions, with at least one willing payer. Before that it is a strong hypothesis and a great demo.

### Requirements that come with money
- A non-removable human-review gate in the product: counsel sign-off structurally required before any site goes live. Lights dim, never out, as architecture, not slogan.
- Never claim a compliance guarantee in marketing or terms. Disclaim it, and require customer counsel sign-off. Selling "we made you compliant" is a representation a customer will point at after an enforcement action.
- Clean IP title before any pitch: excise J&R-confidential material (`clients/jr` never leaves), check open-source license compatibility (Puck, Payload, Jekyll, anything pulled in), and confirm the output terms of the tools used.
- The J&R relationship defined in writing with Rowena and Jasmine bought in (§7).
- A lawyer engaged early, vetted specifically for regulated-industry product liability, unauthorized practice of law, and E&O insurance, not generic startup counsel. Equity-as-teammate is reasonable if it fits.
- Sequence team and equity formation after validation and clean IP. Do not hand out slices of an undefined product built on an unvalidated foundation.

</commercial-path>

<carry-forward id="§9">

## Carry-forward / drop — quick reference

- Keep: the triage register as a per-client generator; the honesty and UNVERIFIED posture; the layered drafting frame; the scope-tagged authority library; the render and gate machinery; the bootloader cold-start handoff; the rejected-claims ledger as the immune system; engine-clone-never-instance-clone.
- Reduce to minimal: the integrity mechanism, to a tiered checksum rather than a per-rev hash, body-line, and pages recompute.
- Re-engineer: the role separation. Keep the epistemic principle, replace the human-courier transport with git, and preserve the verified-is-not-imported boundary deliberately (§6).
- Drop: the assumption that the reusable artifact is a factory; the "dark factory" framing; the idea that LLM plus non-attorney polish can approach "bulletproof" or that a compliance product can run lights-out.
- Do first: the Phase 0 work in order. Send the email, keep the FMO sanity-check on track, build the harness, write Jasmine's page and the J&R-relationship note. The sequencing decision is settled. The next cheap experiment is the gauntlet, captured.

</carry-forward>

<open-questions id="§10">

## Open questions for our iteration

1. Is the Phase 2 git migration itself the next instance of process-as-product? For a single launched brochure site in maintenance mode, the context-diet and courier-retirement benefits are weaker, the dated-flip benefit is already solved by the pre-staged PR Jasmine merges, and the client-2 benefit is real only as instances actually arrive. Proposed gate: migrate only if the post-launch maintenance reality needs it, keep it minimal, and name it a refactor for inheritability. Decide before July.
2. What are you actually building: a studio, a platform, or a pure-IP asset to sell? The honest read points to studio/platform. Does the team and equity plan (Jon, John, a lawyer, advisors) match that shape, or is it sized for a pure-IP exit that the product cannot support?
3. What is the moat once AgencyBloc has seen the demo? If it is curation plus validated proof plus speed plus relationships, is that enough to either win as a standalone or command an acquisition, and how do you bank it before pitching?
4. The J&R relationship and IP cleanup: a near-term decision, not a someday item. What is J&R to the company, and what has to be excised or licensed before anyone outside sees the engine?
5. The second-client gauntlet logistics: whose counsel reviews their clone, who pays for it, who owns that client relationship, and what does Jasmine's involvement in onboarding them imply for J&R's role and for any conflict.
6. What is the minimal harness schema (two fields, or a third pointing at the fusion rule a change confirms or breaks), and does the role-to-session-mode move actually preserve the separation-of-authority safeguard in practice?

</open-questions>

</v2-design>
