# rev18-change-manifest.md — canon.md rev 17 → rev 18

*Coherence pass (Integrator), 2026-06-13. Companion to the rev-17 decompression manifest.*

## Pass type & disposition
- **Coherence / lean cleanup only** (the kind of pass rev 11 was) — no new facts, no `<pages>` page copy, no new disposition. **ADOPTED.**
- Resolves the FLAG raised in `rev17-change-manifest.md`: the stale OPEN 4.16 row that duplicated the already-closed 4.16.

## Integrity deltas
| field | rev 17 | rev 18 |
|---|---|---|
| header rev / date | rev 17 · 2026-06-13 | rev 18 · 2026-06-13 |
| body lines (below the L7 divider) | 2,062 | 2,061 |
| body SHA-256 | `c44057c84a563a6b91b2d84271d874653a34d9d6da327bef5072595ffa97b200` | `0f7324624dbb4d11ba1bf845d4b9bb64c77009620768dec991fcbdaaa665efcf` |
| full-file pin | `183ab3cfd5e148dfa62f7e0c70f7a3b771f0c2d4f7ad703d9a03e79c49ae63fc` | `494322c8d32d2af06bb576c7d765ef8ce0d77e60715a3d523482b5aca62b1a20` |
| `<pages>` block (L452–1765) SHA-256 | `0df41a6f…` | `0df41a6f…` (UNCHANGED) |
| canon.md size | 285,685 B | 285,605 B |

## The single change
**Removed** the stale OPEN EXT-lane row (a 🟠 open item already resolved at rev 12 — recorded in the Closed-ledger entry **4.16** and the Locked calling-hours decision; no inbound dependents):

```text
| 4.16 | 🟠 | WA RCW 19.158.110 pinpoint reconcile | The two verification outputs disagree: the earlier report's delta D6 said (2)→(4); the 2026-06-10 hand-off's row reads (2). Reconcile the correct subsection with the verification thread before the WA calling-hours row is treated as pinned. | — |
```

**Added** an r18 entry to the 5.30 rev-provenance index:

```text
r18 (2026-06-13): coherence pass — retired the stale duplicate 4.16 OPEN row (its closure was already recorded in the Closed ledger + the Locked calling-hours decision); no other change. Manifest: rev18-change-manifest.md.
```

## Why this is coherence, not a disposition change
The 4.16 disposition (WA RCW 19.158.110 pinpoint = (4), resolved on two independent official-text reads) was made at **rev 12** and remains recorded in the Closed ledger and the Locked decisions. This rev only removes a duplicate OPEN row that contradicted that closure — it changes no decision.

## Verification (all PASS)
- `<pages>` block hash == baseline `0df41a6f…` (consumer copy untouched).
- 4.16 now appears only as the Closed-ledger entry + the Locked decision (+ the 5.30 index) — no OPEN row; the removed row had no inbound dependents, so no dangling refs.
- Body + pin recomputed; the header integrity line is self-consistent with the file (body line count + hash match).
- All other rev-17 content byte-identical.
