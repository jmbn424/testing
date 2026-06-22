# v2-design-principles.md — lessons distilled from the v1 (J&R) build

*Companion to `v2-layer-slice.md` and `v2-kickoff-brief.md`. Reference for the v2 design thread. Not canon. These are the durable lessons from running the v1 Integrator system end-to-end; the kickoff brief states the agenda, this states the principles the agenda should be tested against.*

## The one-line thesis
The v1 inventions worth keeping are the **triage register** and the **honesty/UNVERIFIED posture**. The role-separation was a good idea served by a bad transport. The integrity ceremony was confidence theater and should be retired to a minimal checksum. The real product is a routed question set, not polished prose. Validate one instance before generalizing.

## Principles (each is a claim v2 should pressure-test, not a settled rule)

### 1. The asset is the triage, not the prose.
The single highest-value output of the entire v1 effort, measured by impact on the client's actual launch, was the batch-5 routed question list — it converts a 2-person shop's vague unease into a finite set of owner-assigned, answerable questions. The polished legal pages are nearly a byproduct. A v2 that produced *only* an excellent register + routed questions, and zero drafted pages, would still deliver most of the value. Optimize for the triage; treat drafting as downstream.

### 2. Put rigor where the risk is; form-integrity theater is a *risk*, not just a cost.
v1 applied byte-exact hash rigor to document *form* while every legal citation sat at UNVERIFIED. The ceremony made the document *feel* settled along the one axis (transport integrity) that doesn't matter for the axis that does (legal correctness). That false confidence is a hazard, not merely overhead. v2's integrity mechanism should be (a) minimal — one content checksum that catches transport corruption + a "consumer-copy frozen" flag — and (b) *visibly humble* — it should announce that it says nothing about whether the content is right.

### 3. Separate verification authority from drafting authority — but not via a human courier.
The role split (Integrator drafts; Validator verifies; neither imports the other's "verified" stamp) was a genuine epistemic safeguard — it's *why* the UNVERIFIED posture held instead of decaying into "the other thread checked it." The friction wasn't the separation; it was copy-paste-between-threads as the transport (stripped newlines, corruption risk, the whole reason the hash machinery had to exist). Keep the separation of authority; replace the courier with a shared persistent store the roles are views over. Reframe the brief's open question from "is the role split worth it" to "what substrate lets roles stay separate without a human carrying bytes."

### 4. Method-reuse and content-reuse are different axes — don't conflate them.
Part of what made v1 feel heavy is that reusable *method* (honest-design posture, one-home-per-fact, UNVERIFIED standing, the gate/switch machinery) lived tangled with client *content* in one body. v2 should put method in the bootloader/process layer explicitly, so the four content layers (general/industry/jurisdiction/instance — see the slice) aren't carrying methodology as if it were content.

### 5. The reusable core is smaller than "factory" implies (see the slice for evidence).
The layer-slice diagnostic shows the parts that port well (scope-tagged authority library, drafting frame, render machinery) are the smaller half by effort; the high-compliance-value copy *fuses* layers (the TPMO disclaimer is 4 layers in one sentence) and the register doesn't decompose by layer at all. The honest product is a **starter-kit-plus-methodology**, not a factory. Name it that, and the design stays honest.

### 6. Survivability / bus factor is a first-class requirement.
A 2-person client cannot depend on tacit knowledge in one person's head or one thread's context. Every artifact must support a cold start by a new person/thread. v1's bootloader-plus-canon handoff actually achieved this (it's how the decompression and v2 threads start clean) — keep that property; it's a feature, not incidental.

### 7. Validate before you generalize (the sequencing spine).
J&R has not cleared FMO/counsel/launch. Until one instance survives real review, you cannot know which List-B fusion rules and List-C assumptions were load-bearing — *because review is what reveals it.* Designing the factory now hardens untested assumptions and multiplies any error across future clients. The cheap experiment (the paper slice) is done; the next cheap experiment is shipping J&R and *instrumenting which calls counsel actually changes.* Build v2 from what survives, not from what was drafted.

## What to carry forward vs. drop (quick reference)
- **Keep:** triage register (as a per-client *generator*, per the slice), honesty/UNVERIFIED posture, layered drafting frame, scope-tagged authority library, render/gate machinery, bootloader cold-start handoff.
- **Reduce to minimal:** integrity mechanism (one humble checksum, not per-rev pin/body/pages recompute).
- **Re-engineer:** role separation (keep the principle, lose the human-courier transport).
- **Drop:** the assumption that the reusable artifact is a "factory"; the framing that LLM+non-attorney polish can approach "bulletproof."
- **Do first:** the sequencing decision, then (if proceeding) study the slice's List C against whatever J&R's counsel/FMO review returns.
