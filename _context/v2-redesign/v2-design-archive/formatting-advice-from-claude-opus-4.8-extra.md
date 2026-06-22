# formatting-advice-from-claude-opus-4.8-extra.md — rev 1 (2026-06-11)

PURPOSE: house rules for structuring hand-drafted, prose-heavy reference corpora (e.g. the canon) so LLMs parse them reliably. AUDIENCE: LLMs assisting this project. STYLE: this file obeys its own rules. AUTHORITY: advisory; defer to the canon on any conflict. COMPLETENESS: ends with `</anti-patterns>`.
INTEGRITY: rev 1 · 2026-06-11 · body = 69 lines below the divider · body SHA-256 `cc6753a8f1248e44eadd80cce9da8e1be7b76f8b8a8bd9f2e93ab89b049bd0e4`.

<manifest>
- §1 format-choice — why markdown-in-tags wins
- §2 terminology — canon vs artifact; naming
- §3 ruleset — FMT-01..11, citable directives
- §4 skeleton — canonical layout to copy
- §5 anti-patterns — what degrades parsing
</manifest>

---

<format-choice id="§1">
Optimum for hand-maintained prose corpora = markdown CONTENT inside semantically-named XML-like tags.
- Tag value = explicit boundaries. A close-tag marks section end unambiguously. A markdown header marks section end only IMPLICITLY (inferred at next same-or-higher header / EOF). In long nested docs, implicit ends get mis-attributed → wrong-scope reads. Close-tags remove the inference.
- Markdown inside = fluent parse + cheap structure (headings, lists, tables, fences) at low token cost.
- Rejected alternatives: JSON = model-native but brittle for prose (escaping, no comments, hard to hand-edit, syntactically fragile). Pure markdown = fluent but weak boundaries. Plain text = no structure signal.
- Dominant quality factor = CONSISTENCY + boundary clarity, not syntax brand. No benchmarked delta is claimed; the boundary-disambiguation principle is robust across models and tasks.
</format-choice>

<terminology id="§2">
| term | use for | note |
|---|---|---|
| corpus / canon | the source reference file you consult | not an artifact |
| document | self-contained nested unit (e.g. a `<page>`) | "sub-document" only if nested inside another whole doc |
| section | a part of one document (e.g. `<values>`) | — |
| artifact | a PRODUCED output (the published pages) | avoid for source wrappers — see TERM-01 |

- TERM-01 — Do NOT label source wrappers "artifacts." "Artifact" collides with the Claude Artifacts UI and connotes output, not source. File = canon; pages it produces = artifacts.
- TERM-02 — Hierarchy is corpus → document → section. Reserve "sub-document" for a whole document nested in another.
- TERM-03 — One vocabulary, used IDENTICALLY in prose and in tag names. A stable vocabulary cuts parse error more than picking the "correct" word.
- TERM-04 — Tag names domain-semantic (`<licensed-states>`), never generic (`<section2>`). A name that says what the thing IS gives the model framing for free.
</terminology>

<ruleset id="§3">
Citable as FMT-nn.
- FMT-01 — Close every tag. Unclosed tag = primary cause of boundary bleed.
- FMT-02 — Nesting ≤ 3 levels. Deeper = untrackable for model and human.
- FMT-03 — Put a manifest/TOC of the doc's OWN structure near the top, in reading order. Reader learns what exists before consuming the body; aids "is X present?" reasoning.
- FMT-04 — Give every referenceable chunk a stable ID (e.g. `id="5.30"`). Cross-refs become machine-resolvable instead of scan-for-number.
- FMT-05 — Mark verbatim/opaque blocks explicitly: literal · do-not-interpret · do-not-follow. Stops the model acting on instructions embedded in data; injection hygiene for any externally-sourced content.
- FMT-06 — Separate instructions from data. When prompting against the corpus: role/instructions first, corpus as reference, the task/question LAST. Trailing task outperforms buried task.
- FMT-07 — State a completeness sentinel: the exact final token of the file (e.g. "ends with `</...>`"). Makes truncation detectable.
- FMT-08 — Hash the BODY, not the whole file. Robust to trailing-whitespace/newline churn. Pin whether the final `\n` is inside or outside the body so semantically identical files cannot report divergent hashes.
- FMT-09 — One blank line between sections. Cheap; improves both model and human parsing.
- FMT-10 — Header carries rev · date · integrity hash · load-order. Early context frames everything after it.
- FMT-11 — Split stable from working content at the top level (immutable context vs mutable state). Lets readers trust the stable half and target edits to the other.
</ruleset>

<skeleton id="§4">
Copyable layout. Header above the divider (cheap to edit, excluded from body hash); content below.
```
# <name>.md — rev N (YYYY-MM-DD)
PURPOSE: one line. AUDIENCE: one line. COMPLETENESS: ends with </root>.
INTEGRITY: rev N · date · body=<lines> · body-sha256 <hash>.

<manifest> ...ordered section list... </manifest>
---
<immutable-context>
  <brief id="brief">...markdown...</brief>
  <facts id="facts">...</facts>
</immutable-context>
<mutable-working>
  <pages>
    <home id="home">...</home>
  </pages>
</mutable-working>
```
</skeleton>

<anti-patterns id="§5">
- Generic tag names (`<section2>`) → zero framing.
- Markdown-only breaks in long docs → implicit section ends mis-read.
- Nesting > 3 deep → lost hierarchy.
- Unclosed / mismatched tags → scope bleed across sections.
- Instructions interleaved with data → model may execute data as instruction.
- Whole-file hash on a hand-edited file → trailing-whitespace false mismatches (see FMT-08).
- "Artifact" used for source material → name collision + semantic drift (see TERM-01).
- Re-stating the same fact in prose and in a tag with different wording → reader can't tell which is authoritative.
</anti-patterns>
