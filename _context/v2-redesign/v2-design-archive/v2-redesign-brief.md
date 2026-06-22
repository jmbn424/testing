# v2-redesign-brief.md — rev 1 (2026-06-12)

PURPOSE: General-thread synthesis of the v2 redesign inputs (prior Integrator parting analysis, formatting house rules, AgencyBloc/market research) into a carryable design brief + discrete Integrator intake asks. AUDIENCE: the courier, then Integrator-thread triage. AUTHORITY: advisory sandbox output from the General role; not canon, no verdicts; canon rev 11 controls on any conflict. COMPLETENESS: ends with `</v2-redesign-brief>`.
INTEGRITY: rev 1 · 2026-06-12 · body = 81 lines below the divider (final newline inside the body) · body SHA-256 `17453c100e35cd9af1981e30e7794ffd800d7fe10567cdfba2c583f8113d360c`.

<manifest>
- §1 status — provenance + inputs digested
- §2 pre-launch-items — the only time-sensitive content (one canon check, email tweaks, freeze)
- §3 v2-design — engine / law / client layer separation
- §4 process-diet — what git replaces, what control structure stays
- §5 sequencing — freeze → migrate → prove → generalize-on-trigger
- §6 dark-factory-posture — parked; asset definition, honest reframe, comparator economics
- §7 carry-to-integrator — the discrete asks, triage-ready
</manifest>

---
<v2-redesign-brief>

<status id="§1">
Produced 2026-06-12 in the General sandbox against canon rev 11 (header + body hash verified). Inputs digested: `v2-redesign-ideas-from-claude-1.md` (prior Integrator close-out transcript: thread-hygiene doctrine, J&R-standing meta, from-scratch redesign list, email v1 + design rationale), `formatting-advice-from-claude-opus-4.8-extra.md` (rev 1; FMT-01..11 + TERM rules; own integrity line verified clean), `abippoc.md` (Engage+ research verdict + sell-to-AgencyBloc market map), `email-to-j-and-r.md` (courier-side draft v2, drafted against canon rev 10). NOTE: `v2-redesign-ideas-from-claude-2.md` arrived as a 0-byte file — if it held content, re-export it; nothing from it is reflected here.
</status>

<pre-launch-items id="§2">
Everything in this brief except this section is post-milestone material. Before 6/30 the posture is the prior Integrator's: freeze the system; the launch-critical path is people (counsel review, FMO sign-off, vendor paper), and the J&R email is the highest-leverage artifact in the project. Send it.

1. CHD ungated-Nevada check (the one canon-facing, pre-launch ask — small, fits any batch). Register item 3.17 sets the launch default: NV CHD blocks stay DARK while NV is pending, and names the gated set (§1 SB 370 + coverage sentences, §10 AG link, §14 geofence). Two NV mentions sit OUTSIDE that gated set and will render at launch: the CHD §2 intro line "The full legal meanings are set by Washington and Nevada law," and the §7 affiliates line "as Washington and Nevada law define that term." Ask: Integrator confirms these are a deliberate exception (harmless definitional context) and logs it on 3.17, or gates them with a WA-only fallback ("set by Washington law" / "as Washington law defines that term"). The WA-AG no-extraneous-content concern recorded on 3.17 leans toward gating. If counsel later resolves 3.17's parked question (NV law attaching to NV-resident submissions pre-market) by forcing NV blocks ON, this item dissolves.
2. Email tweaks (courier-side; owner edits freely; also delivered in chat): (a) "(Washington and Nevada law)" → Washington-only at launch per 3.17, e.g. "(Washington's My Health My Data Act, with Nevada ready when we open there)"; (b) item 4 "record sales and enrollment calls" → "record marketing, sales, and enrollment calls" to match the §422.2274 recording scope as the record states it; (c) item 9 "since I have written one" → canon counts two developer-authored reviews (1 of 8 Google + the sole Yelp), so "since a couple of the current reviews are mine"; (d) cosmetic: "Part I" / "Part 2" numbering styles disagree.
3. No other canon edits requested before the milestone.
</pre-launch-items>

<v2-design id="§3">
PRINCIPLE. v1's canon interleaves three different kinds of content in one file because it grew organically: the ENGINE (gate/include syntax, switch discipline, registers, drafting frame, orphan checks), the LAW layer (jurisdiction modules, the authority register, dated flips), and the CLIENT layer (J&R facts, elections, voice, client-specific copy). v2 separates them. Pages become templates that read law modules + client keys and inline neither statute text nor client facts.

This completes the contract metaphor the architecture already runs on: engine = the form book, law = the statute riders, client config = the executed term sheet. "Abstract all J&R-specific references and conditional-logic states into one config" then means: J&R is a `clients/jr/` folder, and a hypothetical client #2 is a new folder with a filled term sheet — not a fork of the system.

Canon already anticipates this. The `<config-parameters>` stub + the `config-schema` register item ARE the seed of the client-elections file ("the migration that makes THIS block the single definitional source"). v2 executes that recorded migration rather than inventing a parallel one. The Supported-jurisdictions table stays exactly as designed; it gains a per-client dimension only if client #2 ever exists.

Illustrative repo shape (platform-agnostic; Jekyll remains one implementation):

```
engine/       conventions, gate/include syntax, drafting frame, CI lints (orphan check: every switch has a gate, every gate a switch)
law/          jurisdiction modules, authority register (UNVERIFIED keys), dated-flip calendar, rejected-claims ledger
clients/jr/   facts.yml, elections.yml (boolean switches + per-state status), voice notes, client-specific copy
pages/        templates only; client facts and statute text enter by reference, never inline
registers/    open flags per client; closed history lives in git log, not in the working file
```

Single-sourcing fix v1 tolerates: the drafting frame is currently duplicated verbatim across two bootloaders (a restatement the architecture forbids everywhere else). In v2 it is one `engine/` file included by thin role stubs.
</v2-design>

<process-diet id="§4">
"Leaner, less process-oriented" should cut COORDINATION process (which exists to compensate for chat-thread statelessness and human couriering) and keep CONTROL structure (which is the compliance product). The prior Integrator's parting analysis names the move: the rev/manifest/hash/one-writer/handshake apparatus is hand-rolled version control, and the courier is its bottleneck and failure mode.

CUT — replaced by git primitives, worked via Claude Code on the existing private repo (the substrate already exists: GitHub source + CI are in the stack, and the pre-staged SHIP PR that Jasmine merges proves the human muscle exists too):
- rev announcements + header restatement → commits + tags
- change manifests → diffs / PR descriptions
- body hashes + completeness sentinels → commit SHAs (keep sentinels only on files that still travel by upload)
- one-writer-by-convention → branch protection; Validator verify-only → PR review; role threads → session modes over the repo (Integrator session = branch + PR, Validator = review pass, General = read-only checkout)
- regenerated handoffs → none needed; state is the repo
- closed ledger in the working file → git history + an archive file out of the working set

VERIFICATION DIET (prior Integrator's analysis, adopted): for a citation set this size, one careful primary-source pass + counsel beats N correlated model audits plus synthesis; counsel is the only verification that legally matters. Run the queued Validator cycle, then stop collecting audits. KEEP the rejected-claims ledger permanently — it is the immune system (the GA / TIPA-numbering / FCC-one-to-one traps prove correlated model error recurs), and in v2 it gets cheaper: a CI grep enforcing the do-not-reintroduce strings on every PR.

CONTEXT DIET. Stop every session swallowing a 2,006-line canon. The layer split IS the view mechanism: a session loads `engine/` plus the slice it is working. This is the prior Integrator's "per-role views generated from one source," implemented by file layout instead of a generator.

KEEP — the control structure, unchanged in kind:
- one decision point (the switchboard); self-describing gates; orphan check promoted from pre-handoff ritual to CI lint
- three registers, separate, never bleeding (content / authority / open questions); define-once, reference-never-restate
- every authority UNVERIFIED pending counsel + FMO; review gates as the structural default (unexecuted-until-signed)
- code-is-not-prose carve-out; FMT-01..11 + TERM discipline (largely embodied already; v2 additions: FMT-04 stable IDs on every referenceable chunk, FMT-05 literal/do-not-interpret fences on ALL externally sourced text — statute quotes, Intulse verbiage, vendor templates — injection hygiene that matters more as the pipeline automates)

DATED FLIPS get a real mechanism, answering config-schema's open sub-question: CI scheduled rebuild reading the dated-flip calendar in `law/`. `ship_in_tpmo_disclaimer` ON→OFF on 2026-10-01 is the first test (and stays compatible with the already-locked pre-staged-PR mechanism if v2 lands later than expected).
</process-diet>

<sequencing id="§5">
1. Now → 6/30: FREEZE. Milestone + people path only (counsel, FMO, vendors). No v2 work.
2. July: v2 migration as the first Claude Code project. Mostly mechanical re-foldering: canon content is already single-sourced and gated, so the move is cheap. Retire courier artifacts; port the open register; wire CI lints (orphan check, do-not-reintroduce greps, link checks) + the scheduled-rebuild mechanism.
3. 2026-10-01: the SHIP flip ships through the dated mechanism — v2's first live proof. Per the abippoc research, verified Engage+ sites were still showing the outdated SHIP language; same-day shipping of a regulator-dated change is the concrete differentiator, demonstrated on a real deadline.
4. Generalization (dashboard, multi-client): only on a real trigger — client #2 exists, or a buyer conversation gets real. Until then the layer separation keeps abstraction a refactor, not a rewrite. Build no dashboard for one client.
</sequencing>

<dark-factory-posture id="§6">
Parked by the owner's own call; three durable notes so the option stays open for free.

1. ASSET DEFINITION. Per the market map, the defensible asset is the compliance ENGINE, not the templates: switch/gate discipline, jurisdiction modules, dated-flip mechanism, registers, audit trail. In repo terms the pitchable thing is `engine/` + `law/`. `clients/jr/` never leaves the building: it is J&R-confidential fact and election data, excluded from any pitch material. Before any disclosure: clean IP title (no carrier/FMO claims, no open-source contamination) + NDA; an IP/tech-transactions attorney before the first pitch. Not legal advice; no inside knowledge of any acquirer's intent.
2. HONEST REFRAME. "Dark factory" contradicts the project's own recorded experiment finding (closing-thoughts: output quality depended on continuous human review; removing the review layer removes the basis for the quality claim) and matches the market gap from the research (vendors ship compliance-REVIEWED content, never a compliance guarantee — because lights-out does not work in this domain). The sellable thesis is the inverse framing: a factory that makes counsel/FMO review an order of magnitude cheaper and structurally unskippable — human gates as product features. Lights dim, never out. This also keeps faith with the values block.
3. COMPARATOR ECONOMICS (re-verify before any outreach; all volatile): transparent standalone compliant-site market ~$129–$300/mo + $0–$500 setup; Engage+ triangulated ~$150–$400/mo atop AMS+ seats (low-moderate confidence, quote-only); acquirer fit ranked AgencyBloc → MedicareCopilot/HealthcareGPS → dedicated site vendors. The 10/1 SHIP demo (item §5.3) is the strongest single artifact for that conversation if it ever happens.
</dark-factory-posture>

<carry-to-integrator id="§7">
Triage-ready asks, in priority order:
1. PRE-LAUNCH (small): the CHD ungated-Nevada check (§2.1 above) — gate the §2/§7 "and Nevada" phrases with WA-only fallbacks, or log the deliberate exception on 3.17.
2. POST-MILESTONE roadmap intake (heads-up entries, same register style as the existing heavy/light-fork note): (a) repo-native migration — git + Claude Code, courier retirement, roles as session modes; (b) verification diet + rejected-claims ledger as CI lint; (c) per-task views via the engine/law/client layer split, designated as the target shape for config-schema's "dedicated pass"; (d) dated-flip mechanism = scheduled CI rebuild (feeds config-schema + 2.2/4.11).
3. Nothing else touches canon before the milestone.
</carry-to-integrator>

</v2-redesign-brief>
