# decompression-brief.md — Integrator session brief (prepared 2026-06-12)

*Courier handoff. Drop this into a fresh Integrator thread alongside `integrator-bootloader.md` and the current `canon.md`. Not part of canon; carries no canon rev. Read after the bootloader, before touching anything.*

## Why this session exists

`canon.md` rev 16 is structurally healthy but heavy: ~294 KB, ~73,600 tokens. The heft is concentrated in a few spots that have accreted detail "for the sake of process" rather than legal necessity. This session is a **decompression pass only**: deflate the structure, lose nothing load-bearing. No new facts, no public-copy changes, no disposition reversals.

Starting pin to verify on load: full-file SHA-256 `6b078e02804e08b1070a982be93afb5f91c64636e980011e6159cd737419979a` (rev 16, body 2,060 lines, body SHA `202eed4ad2cf68f55764f4d4dfd1e3712891f19fe41dfb48fbcb65f2a26efacb`).

## The one rule that governs this entire pass

**Nothing is cut. Things are RELOCATED. Deletion happens only after the destination is confirmed to hold the content.**

A deflation pass is the most dangerous kind of edit, because "this looks redundant" is exactly how load-bearing nuance gets silently deleted. Resolved detail moves to the Closed ledger. Vendor specifics move to a vendor file. Rev history moves to `birds-eye-history.md`. In every case: write the destination first, verify it carries the full content, then terse the canon entry to a one-liner + pointer. If a destination file does not exist yet, CREATE it as the first act, do not delete pending its creation. A decompression pass must never become a lossy pass.

## Targets, highest leverage first

### 1. Collapse 5.30 (the single biggest win) — ~12,000 chars / ~3,000 tokens

`- **5.30**` at L1922 is a **13,014-character single line** holding a full prose changelog of revs 3–16 (49 rev/date mentions, ~15 narrative segments). This is a working document carrying its own archival history inline.

**BLOCKER — resolve before collapsing:** the collapse cannot happen safely until the full narrative has a confirmed home. `birds-eye-history.md` is referenced in canon (L1770, L1796, L2032) but is **confirmed ABSENT from the container** (courier checked 2026-06-12; not in uploads, outputs, or working dir — it lives in another thread or was never created). Default path is therefore (b):
- (b, DEFAULT) GENERATE `birds-eye-history.md` from 5.30's own contents as the first act of the session — 5.30 already holds the full revs 3–16 changelog verbatim, so generation is lossless from rev 3 forward — then collapse 5.30 to per-rev one-liners + a pointer.
- (a, only if courier produces it) If the courier locates the prior file in another thread and it carries earlier history (revs 1–2, which predate 5.30's coverage), merge that in first, then proceed as (b).
Either way the full text survives in birds-eye; 5.30 keeps only a terse "revs 3–N folded; see birds-eye-history.md" plus any still-live provenance. Note: the ONLY content at risk is pre-rev-3 drafting narrative, the least load-bearing material in the file — do not block the pass waiting for it.

### 2. Externalize vendor specifics — partner-legal is carrying a vendor file's worth of detail

The legal canon needs the legal posture and a pointer; it does not need operational vendor minutiae sitting next to MHMDA analysis. Candidates to relocate to a `vendor-facts.md` (or similar), leaving a one-line posture + pointer in canon:
- **Cloudflare hosting/pricing** (rev 16 addition): exact free-tier limits (500 builds/mo, 20k files, 25 MiB/file, 100 domains, etc.). Canon should keep only "Pages Free tier suffices, Pro not required, re-fetch at reliance → vendor-facts." The courier explicitly flagged this one as too in-the-weeds.
- **10DLC registration mechanics** (L248–249, ~3,800 chars of Intulse procedure): the binding constraints stay referenced; the step-by-step registration procedure relocates.
- **DPA version numbers + effective dates + capture-as-of timestamps** across partner-legal: keep "current DPA is load-bearing; version/date in vendor-facts, re-fetch at reliance."
Keep in canon: which instrument is load-bearing, the BAA/DPA OPEN status, the data-flow mapping. Those are legal facts. Build limits and dollar figures are not.

### 3. Archive resolved detail out of live register rows — 21 RESOLVED/CLOSED/✅ markers

Resolved material is padding active register rows instead of living terse in the Closed ledger (e.g., 4.5 still carries its full FR-citation paragraph now that it is resolved-pending-fetch). For each resolved marker: keep the live row's open residual, move the resolved narrative to a one-line Closed-ledger entry. Do NOT discard the disposition; relocate it.

### 4. Minor: oversized noted items

`- **5.36**` (1,498 chars) and any other 5.x item over ~1,000 chars read like mini-essays. Tighten to register density where possible WITHOUT dropping the locked decisions they encode (5.36 in particular encodes the contact-form consent/a11y pattern lock — terse it, do not gut it).

## Explicitly OUT OF SCOPE (do not touch)

- The `<pages>` consumer copy and its per-copy annotation fences (the compliance audit trail; only ~15% of pages is annotation and it earns its place).
- The five open-lane register tables' OPEN content.
- The gate / switch / include machinery; the immutable contact block.
- Any disposition, hold, or HELD item (item 3 / appendix Q3 stays open; counsel reds, FMO items, fetch queue all stand).
- Public-facing wording of any kind. If a deflation edit would change a rendered character, it is out of scope.

## Process reminders specific to this pass

- Announce ONE rev for the batch; provenance one-liner in 5.30 (ironically the line being collapsed — append the rev-17 note to its surviving terse form).
- Full structural battery after (tag balance, fence parity, table columns, gate LIFO, appendix count = 12, legacy-key = 0, page-copy em-dash = 0 per the rev-14 house rule).
- After edits, re-confirm the `<pages>` block hash is byte-identical to rev 16 (it must not move). Recompute and state the new full-file pin.
- Manifest with verbatim old→new for every relocation, plus a note of what moved to which external file.
- Present `canon.md` first, then the manifest, then any new external files (`birds-eye-history.md`, `vendor-facts.md`).
- Update the locked reference copy.

## Expected outcome

Rough reclaim ~73.6k → ~60k tokens (~20%) with zero loss of load-bearing content — most of it from target 1 alone. The real goal is a smaller working surface, not a token score.

## Standing queue carried in (unchanged by this pass)

Holds: item 3 / appendix Q3 (outbound-to-Advocate confirm). Counsel reds: sms-legal-theory, 3.3 MHMDA-vs-NV carve-out, 3.1 VA wording, 2.1 no-count TPMO basis, 1.9 HIPAA status, Terms arbitration ratification. FMO: 3.7a inbound consent burden, 2.7 carrier logos, Vetecare usage, marketing review, campaign creative lock. Vendors: AgencyBloc SubAgmt+BAA/DPA+subprocessors + N11 consent capture, Google Workspace BAA, Intulse campaign. Validator fetch queue: 4.5 graduation (§155.220 DATES), NV + SSA penalty figures, Google terms repoint, eCFR SHIP re-pull ≥10/1/2026, plus the route-backs. J&R batch 5 outbound (12 Qs) is live; Q6 answered (AgencyBloc dual-clock). Render artifact `rendered-pages.md` is current as of rev 16 and unaffected by a deflation pass (no page copy moves).
