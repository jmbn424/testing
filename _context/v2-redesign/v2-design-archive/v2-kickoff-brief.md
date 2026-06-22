# v2-kickoff-brief.md — designing the reusable "compliant static brochure site for a regulated-industry SMB" system

*Seed document for a fresh design thread. This is a system-architecture conversation, NOT the Integrator role (that role is retired with canon rev 18). Load this first; the v1 artifacts travel alongside as reference examples, not as things to edit.*

## What v2 is
A reusable system for producing a launch-ready, compliance-first static brochure website for a small business in a regulated industry — with the legal disclosures, document language, and compliance-touching page copy baked into the core rather than bolted on. v1 is the J&R Health Insurance build (a 2-person WA Medicare/health brokerage + Medicare TPMO): one concrete instance, not yet through counsel/FMO/launch.

## Read this first — honest framing (these are design constraints, not caveats)
1. **Sequencing: validate before you generalize.** J&R has NOT yet cleared the FMO CMS review, counsel sign-off, or launch. Until one instance survives real legal scrutiny, you cannot know which parts of the canon are industry/client-specific versus reusable. Designing the factory now risks hardening untested assumptions. The strongest v2 move may be to **ship J&R through the full gauntlet first, instrument what changes under real review, then extract the reusable pattern from what survived.** The fresh thread should pressure-test whether v2 design should even proceed ahead of that, or only in a limited "capture principles, don't build" mode.
2. **Beware process-as-product.** v1 accreted significant ceremony (hash pinning, rev manifests, body-hash recomputation, multi-role thread-hopping). Much of it is meta-work that does not move legal questions toward sign-off. v2 should treat every process element as guilty until proven to earn its cost.
3. **Put rigor where the risk is.** v1 applied byte-exact integrity rigor to *document form* while the *legal correctness* of every citation sits at UNVERIFIED. Form-integrity machinery can make content feel more settled than it is. v2 should invert the emphasis: lightweight form integrity, heavy honesty about what is actually unresolved.
4. **"Bulletproof via LLM + non-attorney" is a trap framing.** The honest goal is "hand counsel/FMO clean, well-triaged drafts so their billable review is fast and cheap" — not "polish until review is unnecessary." Fluent prose can hide buried judgment calls and make review harder. The triage register is the asset; polish past ~80% has low ROI and may be invalidated by the first external pass.
5. **Survivability / bus factor.** The artifact must be able to outlive the idiosyncratic process that made it, and be picked up cold by another person or thread. Tacit knowledge is a liability for a 2-person client.

## What v1 validated — carry these forward
- **Immutable/mutable canon split** in one self-describing file: stable project context + reference vs. live working content. Genuinely useful; the single source of truth worked.
- **Flagged-items register as a triage engine** — every open item severity-coded and routed to an owner ([counsel] / [FMO] / [J&R] / [vendor] / [validator]). *This is the highest-value invention in the whole system* — it converts "review everything from scratch" into "adjudicate this finite, routed list." Protect and sharpen it.
- **Role bootloaders** (load a frame, then the canon) for clean resumption across fresh threads.
- **Change manifests** documenting verbatim old→new per rev — good for auditability and review.
- **One-home-per-fact / decompression discipline** — relocate detail to reference files, keep the working body lean, point rather than duplicate.
- **Honest-design + standing-UNVERIFIED posture** — no dark patterns; nothing treated as settled until the named owner signs off. Keep this as a hard rule.
- **Layered legal-copy drafting frame** (plain-language summary on top, controlling text below; WCAG 2.2 AA; plain-language obligation words). Strong; reusable across instances.

## What v1 revealed as friction — fix or question in v2
- **Thread-hop transport is fragile.** Copy-paste between threads strips trailing newlines (recurred repeatedly), risks corruption, and forced the hash machinery into existence. The system is partly fighting its own transport layer. Question: is the multi-role split + file-shuffle worth it, or would a simpler single-canon workflow with a lightweight checksum do?
- **Integrity ceremony cost.** Full body-hash + pin + pages-block recompute on every rev is heavy for a living draft. What is the *minimal* viable integrity mechanism (e.g., a single content checksum + a "consumer-copy frozen" flag) that catches transport corruption without the overhead?
- **Meta-work crowds out gating people-work.** Build the workflow so the people-path (FMO review, counsel questions, client answers, vendor paper) is the spine, and document refinement serves it — not the reverse.
- **Reusable-vs-specific is unseparated.** v1 mixes J&R-specific facts with industry-general compliance patterns in the same body. v2 needs an explicit layering: industry module (e.g., Medicare TPMO) / jurisdiction module (state privacy) / client instance — so a new client inherits the general layers and only fills the instance layer.

## Open design questions for v2
- Should v2 be designed now at all, or only after J&R clears the gauntlet? (See framing #1 — answer this first.)
- What is the minimal integrity mechanism that earns its cost?
- How do you parameterize the legal content into reusable, jurisdiction/industry-aware components without overclaiming (every reusable clause still UNVERIFIED per instance)?
- How is the external feedback loop (FMO, then counsel) built into the workflow as the spine, with a structured way to fold their changes back and learn which patterns generalize?
- What makes the artifact survivable without its author — a "cold-start" path for a new person/thread?
- What is the right granularity of modules (industry / jurisdiction / vendor stack / client instance), and how do they compose?

## Recommended first move for the v2 thread
Do not start by architecting the factory. Start by (a) deciding the sequencing question honestly, and (b) if proceeding, separating the v1 canon into "general / jurisdiction / industry / instance" layers on paper — that separation is the real test of what is reusable, and it costs nothing to attempt before J&R ships.

## Provenance / reference material
- `canon.md` (rev 18) — the v1 working artifact; the thing v2 generalizes from. Reference only.
- `integrator-bootloader.md` — example of the role-bootloader pattern.
- `rev17/rev18-change-manifest.md`, `birds-eye-history.md`, `vendor-facts.md` — examples of the manifest + reference-file patterns (optional; include if the v2 thread wants to study the mechanics).
