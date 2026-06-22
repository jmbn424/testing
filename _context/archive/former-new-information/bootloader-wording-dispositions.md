# bootloader-wording-dispositions.md — synthesis record, bootloader wording pass (late 2026-06-11)

Integrator-thread record for the out-of-cycle bootloader + cheat-sheet wording pass. Canon rev 9 stands untouched. One-cycle file: archive with the rest of the pass's record set once the 5.30 provenance note lands at the next canon rev. Dispositions below key to each report's own numbering per the courier protocol.

## 1. Canon confirmation

- canon.md was not edited, proposed against, or re-presented this thread. The on-disk rev-9 file re-verifies against its own header: body (lines below the divider, newline-terminated) hashes `81cb1cda31bb29120e20662d5626097607a78685dfba4531f99b6ef56e69f7b0`, matching the header claim exactly. No canon variant exists among the shipped outputs.
- Bonus scan: canon names no specific models, modes, or product toggles — already compliant with the new agnostic rule; no future canon sweep is needed for it.
- The only canon-related carry-forward is the 5.30 one-liner drafted in §8.

## 2. Incoming-report verification — both PASS

- **validator-thread-perspective.md.** Candidate extracted (its lines 8–111) hashes `fba1856029c35c13bec1bc1abdd0083805e61f0c68aca949242ddcc27fdbd188`, exactly the report's attested newline-terminated value. Reverse-applying its six changes (New → Old, each occurrence-asserted unique) reconstructs `f6b738c362259be99d3ae67d2c8e8608d63180a3a258ae31102dbc871d0a2aef` — the attested base hash. The candidate is therefore its base plus exactly the six proposals, proven without holding the base. Its independent confirmation of the applied integrator pass (129-line file, `05fd472d…`) is accepted.
- **general-thread-perspective.md.** Embed extracted (its lines 24–70): first 11,730 bytes re-hash to the attested `0e25e548d4599e3aec2a40b332588c5d4a961507e35da0bce765be989b672e6f`. Frame parity independently re-verified here: the two shared sections are byte-identical to the integrator copy, 33 lines each, both before and after this batch's integrator edits.
- **Packaging deviation (both, courier-directed).** The contracted selfscan payloads are complete inside the perspective wrappers; ACCEPTED, no re-emission under the contracted names needed.

## 3. Dispositions — Validator report (keyed to its Section 3)

1. ADOPTED [SOLO] — `SELF-SEEDING — two-file load.` → `TWO-FILE LOAD.`; parallels applied integrator change 2.
2. ADOPTED [SOLO] — disk/grep/diff scratch-copies line → `private scratch copies for search, comparison, and handshake checks are fine`.
3. ADOPTED [SOLO] — `written in small appended chunks (~150 lines per write)` → `built up in small sections (roughly 150 lines at a time)`.
4. ADOPTED [SOLO] — re-emit/oversized-write caution → plain equivalent; output-ceiling mechanism kept.
5. ADOPTED [SOLO] — START `execute nothing` → `run nothing`; "run nothing" intentionally now appears twice (Modes header + START); not a counted literal.
6. ADOPTED [HANDOFF: integrator-owned] — standing-queue header `execute an item` → `start an item`; adopted by the section's owner.

PLUS the both-files parity batch its Notes flagged: the integrator TRANSPORT twins were adopted here in the same batch — `written in small appended chunks (~150 lines per write)` → `built up in small sections (roughly 150 lines at a time)` and `a single oversized write hits the output ceiling mid-stream` → `a single oversized response hits the output ceiling mid-stream`. Cross-file phrasing divergence declined; parity chosen. The cheat-sheet's human-voice variant ("~150-line chunks… never echo a big document into chat") stays as-is, matching the Validator's own "echo" calibration.

Its flags: FLAG 1 (packaging) handled per §2 · FLAG 2 (seeding order) ENDORSED — see §8 · FLAG 3 ENDORSED — the wording lever is now exhausted by design; no further wording passes chasing the classifier.

## 4. Disposition — General report

Zero-change ACCEPTED for general-bootloader.md. Its one real catch — the upload's missing trailing newline — is a transit artifact, resolved by the newline convention in §7 rather than a content change. The embedded copy is a record, not a source: the standalone Integrator-presented file controls. Notes 1–9 accepted as stated. Courier flag 3 (model-choice tension) is the courier's call and cheat-sheet territory; by the agnostic rule it is out of bootloader scope.

## 5. Courier-directed batch — model/config agnosticism (all bootloaders; cheat-sheet exempt)

Interpretation applied (veto-able): product mode toggles count as LLM configuration and were generalized to capability language; GENERIC model references stay ("external model audit reports," "[EXT:model-name]," "labeled by source model," "frontier-model deep-research sources") because they name no specific model and carry load-bearing provenance meaning.

Edits, verbatim old → new:
- integrator USER CHECKLIST: `Research mode ON for new verification passes, OFF for assembly/editing/synthesis.` → `Live web research runs only in new verification passes, never in assembly/editing/synthesis.`
- integrator housekeeping (inside the rewritten wording-pass bullet): `model-switch false positives` → `automated safety-flag false positives`.
- validator Modes (5): `(Research ON)` → `(live web research)` [VERIFY] · `(Research OFF, no web)` → `(no web)` [AUDIT] · `(Research OFF)` → `(no web)` [SYNTHESIZE and RE-KEY] · `(Research ON only if a fresh fetch is needed)` → `(web only if a fresh fetch is needed)` [ADJUDICATE].
- validator BUILD MECHANICS: `Research mode ON for new verification passes; OFF for assembly, editing, and synthesis.` → `Live web research runs only in new verification passes, never in assembly, editing, or synthesis.`
- general-bootloader.md: zero hits; content unchanged.

Durable rule recorded in the integrator editing notes: bootloaders and canon name no specific models, modes, or product toggles; every model/mode/toggle specific lives in cheat-sheet.md only.

## 6. Cheat-sheet additions — [USER-CONFIRM]

Two bullets appended to Model + budget strategy: (a) the wrongful-flag playbook (the "Switch models when a message is flagged" toggle OFF for pause-and-retry control, plus send feedback on every wrongful switch), and (b) the agnosticism policy line. Rationale: the cheat-sheet is now the designated home for every product specific, and the playbook otherwise survives only in archive-bound files. Strike either on review and the Integrator re-cuts.

## 7. Other adopted conventions and Integrator self-edits

- Newline convention (General Note 1): saved-set masters are newline-terminated; recorded in the integrator transit-gotcha bullet. The shipped validator and general files are newline-terminated forms of the attested bytes.
- Integrator housekeeping wording-pass bullet rewritten: PENDING resolved to completed; REMAINING = the 5.30 note, then archiving the pass's record set.

## 8. Seeding guidance + carry-forwards

- Seed every fresh role thread from THESE shipped files only. If any thread was already seeded from a perspective-file candidate, say so at next contact so the next re-cut reconciles instead of collides (Validator FLAG 2).
- The shipped general-bootloader.md differs from the scanned upload by exactly one byte: the terminal newline.
- 5.30 draft for the next announced canon rev: "Late 2026-06-11, between revs, canon untouched: wording pass across the three role bootloaders + cheat-sheet — plain-language swaps to cut automated safety-flag false positives on benign seed files; zero functional change; bootloaders made model/config-agnostic (specifics live in cheat-sheet.md only). Provenance: update-bootloader-wording.md + bootloader-wording-dispositions.md, archived on this entry."
- Archive set once that note lands: update-bootloader-wording.md · advice-for-validator.md · advice-for-general.md · validator-thread-perspective.md · general-thread-perspective.md · this file.
- Optional courier spot-check: your local pre-pass bases should hash `f6b738c3…` (validator, unterminated) and `0e25e548…` (general, unterminated). A mismatch means tell the Integrator before adopting anything.

## 9. Output ledger (shipped, newline-terminated)

- integrator-bootloader.md · 130 lines · SHA-256 `07c6c6f48fdbbbef6bfa8e924ff669500513d28c56ea20e9f17090376971d518`
- validator-bootloader.md · 104 lines · SHA-256 `2a56ba71343b734ce628497a3e8483ed04a720d8767cd9e1ce0d5002a880cd61`
- general-bootloader.md · 47 lines · SHA-256 `4b9d79ec64701d19fa8ca9a8f846b53c6c8ad130555770f9b582e2be18db9045`
- cheat-sheet.md · 206 lines · SHA-256 `32672e89eb8ecc2900c99cd3ebdb3cd6cb5b5b219662684c24ebc2f884b9a70f`

## 10. Post-batch addendum — same day, courier-directed

- external-validator-bootloader.md CREATED (new saved-set member: the any-LLM external auditor brief; stateless, fully agnostic) · 53 lines · SHA-256 `a35b001539780fbf109b69f49896b0b40c950663de2f8d0100d5c7e2c2f3f3a2`.
- cheat-sheet.md RE-CUT on courier direction: an "External audits — fresh-perspective passes" sub-menu added to the VALIDATOR section (run matrix for the courier's external plans, privacy pre-flight, independence rules, per-mode prompt snippets); golden rule 8 updated to the four-bootloader folder and the Integrator-presents rule extended to all bootloaders. The §6 additions remain in place and remain strikeable on review. This entry supersedes §9's cheat-sheet line; the new ledger entry is appended below.
- Behavioral inputs adopted from the courier's prior model-comparison notes: no consensus priming across external sessions (models double down under social pressure), corroboration requires cold independent runs, deep-research modes earn their time on multi-source synthesis rather than single facts. The notes' routing table and dated product claims were deliberately NOT imported.
- Updated ledger entry (final, incl. the load-check + first-move additions at retirement): cheat-sheet.md · 261 lines · SHA-256 `5327a0489a0dc92f84c79e80f9c77b80f7601365ecc2d38adc3105af8fa41900`.
- Close-out re-cut: integrator-bootloader.md housekeeping gains one bullet recording the external auditor brief + the same-day cheat-sheet re-cut, and its REMAINING clause is rewritten self-contained with the 5.30 note text embedded verbatim in the handoff (handoff section only; shared frame untouched) · 131 lines · SHA-256 `15205dc2b34cfbb43a7a5b991db725f22d28022abceb8c488b7517cd38209e2a` — supersedes §9’s integrator entry AND §8’s separate 5.30 draft (the handoff-embedded text is now the operative version).
- Saved-set master canon.md re-presented at close-out with its transit-stripped terminal newline restored: content byte-identical, body hash unchanged (`81cb1cda…` matches the rev-9 header), per the newline convention.
