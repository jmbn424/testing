# v2-layer-slice.md — reusability diagnostic of the J&R canon (rev 18)

*Diagnostic, NOT canon and NOT a v2 architecture. Produced 2026-06-13 by slicing `canon.md` rev 18 into reusability layers ON PAPER, to find what is actually reusable before any factory is built. Builds nothing; commits nothing. The failures (Lists B and C) are the point, not List A.*

## The model under test

Four CONTENT layers, most reusable first, plus one METHOD axis the four-layer model doesn't capture:

- **G — General:** any regulated-industry SMB brochure site.
- **I — Industry:** Medicare TPMO / health-insurance brokerage.
- **J — Jurisdiction:** per-state law (WA, OR, GA, TN, CA, NV).
- **X — Instance:** this client (J&R: people, address, vendors, FMO, actual lead flows, licenses held).
- **M — Method (separate axis):** process/posture that is reusable but is not canon *content* — belongs in the bootloader layer, not the canon layers.

A new client should inherit G + their I + their J modules and fill only X. That is the claim. Below is how the real canon resists it.

---

## List A — layer assignment (the easy ~70%, abbreviated)

This is the part that ports. Stated at category level, not item-by-item, because the value is in B and C.

**Authority table (~80 rows) — slices almost mechanically, because every row already carries a `scope` (National/WA/GA/…) and `product` (Medicare/VA/All) column that doubles as a layer key:**
- → **G:** all National + All-product rows — TCPA, FCC orders, FTC §5, CAN-SPAM, WCAG/ADA, GLBA, e-commerce/e-SIGN, dispute-resolution, breach-notification framework. ~40 rows.
- → **I:** Medicare rows (§422.2260–2274 marketing, §422.2267 disclaimers, MCMG, FMO infra, referral/anti-inducement) + all Veterans/VA rows. ~22 rows.
- → **J:** per-state privacy + telemarketing + insurance-licensing + health-data rows, already state-tagged (WA MHMDA, NV SB370/603A, OR OCPA, CA CCPA, GA, TN). ~18 rows.

**Page-copy frame:**
- → **G:** Accessibility statement (~95%; WCAG, testing method, accommodations structure); Terms skeleton (acceptance, IP, warranties, LoL, arbitration *structure*); Privacy skeleton (DNT, GPC, children's, GLBA notice, rights mechanics *structure*).
- → **I:** the Services veterans-disclosure block; Medicare-101 educational framing; the TPMO footer *requirement*.
- → **J:** CHD policy *existence* (WA MHMDA mandates a standalone policy) + the NV-gated variant blocks.
- → **X:** every contact block (already an `<company-contact-info />` include), party names, license-state list, vendor names.

**Switch/gate/include machinery → G (method-flavored):** the conditional-render system is fully reusable; only the *switch values* are X.

**Verdict on A:** the authority table and the drafting *frame* are the genuinely reusable core. That is a real, valuable finding — but it is the smaller half of the canon by effort.

---

## List B — FUSION POINTS (clauses that must be ASSEMBLED from layers, not filed under one)

These are the v2 component spec. Each is a place the factory needs a *composition rule*, not a slot.

1. **The TPMO footer disclaimer.** I (CMS *requires* it) + X ("we don't offer every plan" depends on captive-vs-independent) + J/time (the SHIP clause is federal but sunsets 10/1/2026) + M (the gate that swaps it). One sentence, four layers. Cannot be filed; must be composed.
2. **Terms arbitration carve-outs.** G (arbitration structure) + J (which claims are non-waivable: WA MHMDA private right of action vs NV AG-only enforcement) + I (does a Medicare context add a carve-out?). The carve-out *list* is jurisdiction-assembled.
3. **The SMS opt-in + consent block.** G (TCPA/CTIA element set) + I (CMS PEWC for Medicare contacts) + J (state calling-hours floor: WA/NV tighten the federal window) + X (Intulse as the vendor; the registered use-case words). Four layers fused in one form control.
4. **Retention language.** I (CMS 10-yr SOA/recording floor, dropping to 6 for recordings ≥10/1/2026) + J (per-state producer-recordkeeping floors, item 4.12) + X (AgencyBloc dual-clock capability). The number shown is a max() across layers.
5. **CHD policy scope statement.** J (WA MHMDA defines it; NV adds a variant) + I (the HIPAA-boundary illustration uses a Medicare-enrollment example) + X (no carrier PHI; self-reported only). The "what is consumer health data here" sentence is assembled.
6. **The "no-count" disclaimer variant (item 2.1).** I (CMS allows omitting plan/carrier counts) + X (whether J&R *can* use it depends on its actual carrier set) + M (FMO must ratify). Looks Industry; resolution is Instance+Method.

**Takeaway:** the highest-compliance-value copy is exactly the copy that fuses layers. A slot-filling factory can't produce these; it needs a composition engine with precedence rules (e.g., "tightest jurisdiction floor wins," "Industry requirement + Instance fact → assembled clause").

---

## List C — ASSUMPTION LEAKS (General-looking content that secretly encodes J or X) — highest value

These are latent bugs that would ship silently into every future client. Found by asking of each "General" element: *if I moved this to a different state/client, would it still be true?*

1. **LoL cap + arbitration carve-out cites the WA MHMDA private right of action by name.** Looks G; is J. Port to a state with no private right of action and the clause over-preserves rights that don't exist there — silently wrong, not visibly broken.
2. **"We use Cloudflare's privacy-focused analytics… without cookies" in the Privacy/CHD copy.** Looks G (privacy posture); is X (specific vendor + specific product behavior). A client on a different host inherits a false factual claim.
3. **The 9 a.m.–8 p.m. calling window in Terms §6.** Presented as the operative window (G-ish); is actually the *tightest J floor* (WA/OR), and NV would move it. Encodes a jurisdiction max() as if it were a constant.
4. **"We are not VA-accredited" veterans line.** Looks I (all Medicare-adjacent brokers); is X — true only because *this* broker isn't accredited. An accredited client inherits a false statement.
5. **GLBA notice framing ("because we are an insurance brokerage…").** Looks G; is I — a non-insurance regulated SMB (a clinic, a tax shop) inherits an inapplicable federal-law framing.
6. **"Self-reported doctors/meds only; no carrier PHI" HIPAA-boundary premise threaded through CHD §1 and company-facts.** Looks I (TPMO posture); is X — it's J&R's specific data-flow fact, and it's load-bearing for the entire HIPAA-vs-MHMDA boundary. A client who *does* receive carrier PHI inherits a posture that inverts their actual legal status.
7. **The §1557 / language-access and EU/soft-GDPR sections.** Looks G; their *applicability* is J+X (entity size, federal-funding nexus, whether the client serves EU visitors). Reusable as scaffolding, dangerous as included-by-default.

**Takeaway:** every leak is a clause that *ports cleanly and is wrong*. The slice's single most valuable output is this list, because external review (counsel/FMO) will surface these too — finding them now is free; finding them per-client-after-shipping is paid repeatedly.

---

## The register: the special case (it does NOT decompose by layer)

The ~85-item flagged register is the canon's crown jewel and its least layerable part. Sampling the real items:

- `3.3` (MHMDA carve-out must distinguish from NV) exists *only because two J modules interact* — it is intrinsically cross-jurisdiction; it has no home layer.
- `sms-legal-theory` is M-process (every SMS client hits it) but *gates* an X action (Intulse campaign creation).
- `3.7a` (Advocate sends recycled leads inbound) is pure X.
- `2.1`, `2.8`, `2.9` are I-requirements whose *resolution* is X+M.

The register is a **graph of items that span layers**, not a set partitioned by layer. This is the scaled-up form of v1's collision-ledger strain, and it gets worse across many clients because an item's truth value becomes *relative to a layer/instance pair* ("resolved for client A, open for client B"). 

**Consequence for v2:** you cannot inherit a register the way you inherit an authority table. The reusable unit is the **item TEMPLATE** ("every TPMO instance must resolve: no-count disclaimer basis [I+X+M]; calling-window floor [J]; inbound-lead consent if any FMO inflow [X]"), which *instantiates fresh* per client and then accumulates instance-specific items. v2's register is a generator of per-client registers, not a shared register.

---

## Bottom-line read

- **Ports well (inherit as-is):** authority table (scope-tagged), drafting frame, switch/gate/include machinery, the Method/posture layer.
- **Ports as composition rules, not content:** the six fusion points in List B — these define the v2 component engine.
- **Must be assumption-flushed before any reuse:** List C — or the factory mass-produces silent errors.
- **Does not port as content at all:** the register — only as templates that generate per-client instances.

**Honest size estimate:** the reusable core is roughly "a scope-tagged authority library + a layered drafting frame + a composition rule-set + a register-template generator + the honesty methodology." That is a **starter-kit-plus-methodology**, materially smaller and more honest than a "factory." Knowing that *before* building is the entire return on this diagnostic.

**Sequencing implication (unchanged from the kickoff brief, now evidenced):** none of List C's leaks can be *confirmed* reusable-vs-specific until one instance clears counsel/FMO — because review is exactly what reveals which assumptions were load-bearing. So the slice argues *for* the brief's framing #1: ship J&R through the gauntlet, instrument which List-B/List-C calls counsel actually changes, then harden only those into v2.
