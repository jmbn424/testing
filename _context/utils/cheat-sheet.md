# cheat-sheet.md — the human courier guide

Prepared 2026-06-11 against canon.md rev 11 (same-day refresh: seeding step-0 model check added). Maintained by the Integrator thread — when the system changes, ask it to refresh this file. Your job in this system is COURIER + DECIDER: you move files between role threads, you pick what runs next, and you hold every sign-off gate. Nothing moves by itself.

## Golden rules (apply to every thread)

1. Files, not pastes — both directions, always. Upload artifacts; download deliverables.
2. One role per thread. Never reuse a thread across roles; retire threads early and often (see "Fresh thread vs. continue?" below).
3. Rev handshake: every artifact names the canon rev it targets. On any mismatch, stop and fetch the current canon.
4. Load check: after seeding, the thread restates its state and queue. Compare that restatement to your own read BEFORE authorizing work — a mismatch is a bad load caught for free. Your own read comes from the files you just uploaded: skim the bootloader’s handoff section (state, queue, housekeeping) before seeding so you know what the restatement should contain.
5. Research mode OFF everywhere by default. ON only for Validator verification passes, OFF again for assembly/synthesis.
6. Large outputs: the thread should build a downloadable file in ~150-line chunks and share the link, never echo a big document into chat. If a response dies mid-stream, ask it to rebuild as a chunked file.
7. Keep follow-ups about a report in the thread that holds the report.
8. Save discipline: keep one local folder with canon.md, the four bootloaders (integrator / validator / general / external-validator), and this file. Replace canon.md and the bootloaders only from Integrator presents. Never hand-edit canon.

## Model + budget strategy (Max 20x plan, as of 2026-06-11)

- Through **June 22, 2026**: Fable 5 is included in your plan at no extra cost. Use **Fable 5, max effort** for Integrator sessions and Validator cycles — these are the judgment-heavy roles where it earns its keep.
- Fable 5 counts roughly **2x usage weight** against your limits and burns the 5-hour window faster than Opus/Sonnet. Spend it on rev batches, audits, verification passes, and synthesis; downshift everything else.
- **General role + light housekeeping: Sonnet 4.6** (or Opus 4.8 if you want more depth). Save the Fable allowance.
- **Zero extra spend rule: leave usage credits OFF / decline when offered.** Then hitting a limit only ever means waiting for the 5-hour session reset, never a bill.
- Usage resets per 5-hour session (with a soft ~50 sessions/month guideline), so **batch your work into sittings** instead of dribbling messages across the day.
- Context window is 200K on all plans. The canon + bootloader seed fits easily, but a long-running thread will eventually fill — that is your cue to close out (Integrator: regenerate handoff) and seed a successor.
- **After June 22:** drop Integrator/Validator to **Opus 4.8, max effort** as the default; reach for Fable 5 via usage credits only if a specific cycle justifies paying API rates.
- References: support.claude.com → "About Claude's Max plan usage" and "Manage usage credits for paid Claude plans" (re-check there if mechanics seem to have changed).
- **Wrongful-flag playbook:** Settings > Capabilities > "Switch models when a message is flagged" — OFF keeps you in control (a flag pauses the turn for an edit-and-retry instead of silently switching models). Then **send feedback on every wrongful switch** — the feedback channel is the durable fix that narrows the classifier over time.
- **Agnosticism policy:** bootloaders and canon stay model-agnostic — every model / mode / toggle specific lives in THIS file only, so when models or product mechanics change, this is the only file to update.

## Seeding ritual — step 0, model check (before START)

Applies to every role seeding, because the first message of a new chat can get silently routed to a different model than the picker shows (observed: auto-downshift to Opus 4.8 on the initial prompt; a manual switch on message 2 then sticks). Phrase the check as a report, not a yes/no — "confirm you are Fable 5" invites an agreeable yes from whatever model is running, while asking for the declared name gets a factual readout from the system prompt.

1. Attach the files, but the first message is only: "Before anything else: state the model name exactly as your system prompt declares it. Do not begin START yet."
2. Reply names the expected model (currently Fable 5) → send "Proceed with START."
3. Reply names anything else → switch the model picker to Fable 5, then send: "Model switched. State the declared model name again, then proceed with START."
4. The interface's per-response model indicator outranks the self-report if they ever disagree.

This supersedes the one-shot "Run START" first message in the role sections below: files still attach with message 1, START moves to message 2. Cost is one tiny extra turn; benefit is the expensive bootloader-processing turn never runs on the wrong model.

## Fresh thread vs. continue?

The system is built so retiring a thread loses nothing: canon.md + the regenerated handoff ARE the state. So the default posture is fresh-biased — continue a thread only while it holds something not yet externalized.

Why long threads quietly get worse (and cost more):
- **Quality.** Every reply re-reads the whole history. As a thread grows, attention spreads thinner: seed instructions fade relative to recent chatter, mid-thread details blur, and self-consistency drifts. A fresh seed puts the model's full attention on canon + your request.
- **Spend.** Usage scales with what each message processes, and each message processes the entire history — a reply in a bloated thread can cost double the allowance of the same reply in a fresh seed, for worse output. Thrift and quality point the same way: the expensive habit is the giant immortal thread, not the re-seed.
- **Hard ceiling.** 200K context on all plans. A thread that fills mid-task is the worst failure mode (the output-ceiling incident was this in miniature).

Start FRESH when:
- A new work cycle begins (new rev batch, new verification pass, new synthesis) — the natural seam.
- You are about to run something high-stakes (an apply-batch, a full verification pass) and the thread already carries long detours.
- Quality signals appear: it forgets a convention, re-asks settled things, contradicts an earlier decision, restates the queue with gaps, or responses start dying mid-stream.
- The thread has done 2–3 substantial cycles. Retire on principle even if it still seems fine.

CONTINUE when:
- A propose-then-confirm exchange is in flight (proposals not yet approved and applied).
- The thread holds a deliverable's full text you are still asking about (the Validator's report — follow-ups stay with the report).
- The Integrator has un-closed-out state — close out FIRST (regenerate handoff, present files), then retire. Never abandon an Integrator thread without close-out.
- Same sitting, and the next request directly extends the last one.

Per role: **Integrator** — one rev cycle (intake → propose → approve → apply → present) per thread is the sweet spot, two at most; the close-out ritual makes retirement free. **Validator** — a full Research pass generates huge context; after the deliverable lands, keep the thread only for Q&A about that report and run the next cycle in a fresh seed. **General** — disposable; restart whenever.

---

## INTEGRATOR (the only writer of canon)

### Seed a fresh thread
1. New chat. Model: Fable 5 (max effort) while available, else Opus 4.8 (max effort). Research OFF. File Creation ON (the "Code Execution & File Creation" toggle in Settings > Capabilities; on by default with most plans).
2. Upload **integrator-bootloader.md + canon.md**.
3. First message:
```
Files attached: integrator-bootloader.md + canon.md. Run START.
```
4. It restates state + queue and confirms the rev handshake. Check the restatement against your own read. If it is off, fix the load before anything else.
5. Pick from the menu. It proposes before editing unless you authorize direct edits for a batch.
6. First move: carrying a file in (a Validator report, new facts, vendor paper) means the matching intake snippet; empty-handed means the Status check. Maintenance the handoff carries (e.g. a pending 5.30 log line) rides the next rev automatically — your only job is approving that rev like any other. Log entries are bookkeeping, not load-bearing; even a slipped one cannot hurt the launch work.

### Menu of common Integrator requests

**Intake a Validator report** (upload: the Validator's synthesized report file):
```
Attached: the Validator's synthesized report (its own pass + external LLM audits, with a
recommended-changes list). Triage per INCOMING WORK against Locked decisions and the
rejected-claims ledger. Propose your recommended changes — do not edit yet — and include
a disposition line per item keyed to the report's own numbering.
```

**Intake new facts** (upload or paste the source — email, vendor doc, J&R answers):
```
New information from <source>, attached. Evaluate against the register, propose the
changes you would make (propose-then-confirm), and flag any register items this
closes, opens, or re-severities.
```

**Apply an approved batch:**
```
Approved: apply items <numbers> as ONE announced rev. Run the propagation sweep and
structural validation, then present the updated canon.md and a fresh
change-manifest-for-validator.md.
```

**Prepare the Validator package:**
```
Prepare the outbound Validator package for the current rev: canon.md + change manifest.
Refresh the validator-bootloader handoff section if state changed, and present
everything I need to upload.
```

**Status check:**
```
Status check: restate the open queue, highest-leverage first, grouped by owner, and
tell me the single highest-value thing I can do today.
```

**Audit (light, Integrator-side):**
```
Run a STAYING SOUND audit against THE BAR and report findings before changing anything.
```

**Draft something new:**
```
Draft <X>. Propose structure or draft directly, your call — say which. Propose-then-
confirm before anything lands in canon.
```

**Close out a session (always do this before abandoning a thread):**
```
Close out: regenerate the handoff, then present refreshed integrator-bootloader.md and
canon.md (plus validator-bootloader.md if its handoff changed). Note anything I should
carry to other threads.
```

**Request parting thoughts (works in ANY role thread, right before retiring it):**
```
Before we close: parting thoughts, peer to peer, no sugar-coating. What should I watch
out for, what would you change about the system or the work itself, and what is the
highest-value thing I am underweighting? Brutal honesty over reassurance.
```
A retiring thread holds context no fresh seed will have — this is the cheapest moment to
harvest it. Carry anything good to the Integrator as a note or file.

---

## VALIDATOR (verify, audit, synthesize — never edits canon)

### Seed a fresh thread
1. New chat. Model: Fable 5 (max effort) while available, else Opus 4.8 (max effort). **Research OFF at seeding.** File Creation ON.
2. Upload **validator-bootloader.md + canon.md**.
3. First message:
```
Files attached: validator-bootloader.md + canon.md. Run START.
```
4. It confirms the role + handshake and restates the standing queue, then waits. Check the restatement. Nothing runs until you ask.
5. Pick a mode from the menu. Rule of thumb: flip Research ON right before a verification pass, OFF right after the deliverable lands.

### Menu of common Validator requests

**Full verification pass** (flip Research ON first):
```
Research mode is ON. Run a full verification pass against canon rev <N>: the EXT-lane
queue plus your handoff targets. Primary sources only; verdicts per your format.
Deliver per spec as a downloadable file built in small chunks.
```

**Targeted verification** (flip Research ON first):
```
Research mode is ON. Verify only: <items / claims>. Verdict format with pinpoint cites
and canonical URLs. File if long, chat if short.
```

**Internal quality audit (no web needed — Research OFF):**
```
Research OFF. Run an internal audit of canon.md rev <N>: coherence, consistency,
structural integrity, cross-references, register hygiene, and legal-document quality.
No external verification this pass. Deliver per spec.
```

**Synthesize external audits** (upload: each external report file; Research OFF):
```
Attached: external audit reports, labeled by source model. Research OFF. Synthesize
them with your own findings into ONE package per your deliverable spec. Adjudicate
collisions against Locked decisions and the rejected-claims ledger; where reports
disagree, tiebreak against primary sources you have already captured and flag where
a fresh fetch is needed.
```

**Re-key after a new rev** (upload: new canon.md + change-manifest-for-validator.md):
```
New rev attached: canon.md rev <N> + the change manifest. Re-key your open verdicts
using the manifest — re-verify only what the manifest shows changed or what its
verification notes flag.
```

**Package and deliver:**
```
Package the current cycle into the deliverable file per spec and present it. State the
canon rev it ran against in the header.
```

Then carry the deliverable file to the Integrator thread (see "Intake a Validator report" above). Dispositions come back keyed to the Validator's numbering — upload that manifest here on the next cycle.

### External audits — fresh-perspective passes (feed SYNTHESIZE)

Independent audits of canon.md by non-Claude models, run by you in their own apps, then synthesized by the Validator. Seed every run the same way: attach **external-validator-bootloader.md + the current canon.md**, one model per session. The brief handles the format, the evidence rules (FETCHED vs RECALLED), and the header label you confirm on save.

**When to run:** before graduating a rev's cites or a counsel handoff, or after a big rev batch — not every cycle. Deep-research runs take minutes each; batch them in one sitting, then run one SYNTHESIZE.

**Privacy pre-flight (once per provider):** canon carries real client business details. Perplexity Enterprise Pro contractually excludes training on your data. For Gemini and Mistral, check the data / model-improvement settings before the first upload and turn training off where offered.

**Independence rules (protect the corroboration math):**
- Cold runs only: never show one model another model's findings, and never say "other models found X" — consensus priming makes models double down, not self-correct. Two independent passes agreeing is corroboration; one pass echoed twice is not.
- Full pass by default; targeted variants only for tie-breakers, and tell the Validator which items were targeted.
- Confirm the header label on every saved report yourself — models misstate their own names, versions, and modes.
- Save as `external-audit-[model]-[mode]-[date].md`.

**Run matrix (your plans, and what each mode is for):**

*Perplexity (Enterprise Pro) — Research / Deep Research.* Your strongest FETCHED authority-lane pass; search-native citations.
```
Attached: an audit brief and the document under audit. Run the audit per the brief.
You have live web access: prioritize the AUTHORITY lane and fetch primary sources
(legislature, agency, court originals) for every load-bearing claim you can.
Return one self-contained markdown report per the brief's format.
```

*Perplexity — Pro Search.* Quick targeted tie-breakers, never full passes.
```
Attached: an audit brief and the document under audit. Targeted pass only — verify
just these claims against primary sources: <claims or register ids>. Follow the
brief's evidence rules and report format for these items only.
```

*Perplexity Computer.* Same prompt as Research mode; reach for it when a source needs multi-step navigation (state legislature session archives, eCFR cross-references) that one-shot search keeps fumbling.

*Gemini (AI Ultra) — Deep Research.* Second independent FETCHED pass; same prompt as Perplexity Research. Independence between the two web passes is the point — do not let either see the other's output.

*Gemini — Deep Think.* The long-document reasoning specialist; aim it at coherence.
```
Attached: an audit brief and the document under audit. Declare your web access per
the brief and label evidence accordingly (RECALLED means no URLs). Spend your effort
on the CONSISTENCY lane — internal contradictions, cross-reference breaks, copy that
outruns the stated facts, logic gaps — and list any authority doubts as RECALLED
leads for the web-enabled passes to chase.
```

*Gemini Flash (incl. extended-thinking variants) and Mistral Vibe (free).* Fresh-eyes consistency sweeps; Mistral's different training distribution sometimes surfaces different assumptions. Mind the free-tier quota — one good pass beats three shallow ones.
```
Attached: an audit brief and the document under audit. Fast CONSISTENCY-lane pass:
read as a careful first-time reviewer and flag contradictions, unclear copy, and
anything a plain reader would misread. Follow the brief's format; mark everything
RECALLED unless you actually fetched a source.
```

**Then:** label-confirm and save each report, and hand the set to the Validator with the "Synthesize external audits" snippet above.

---

## GENERAL (read-only Q&A + sandbox)

1. New chat. Model: Sonnet 4.6 (default effort) is plenty. Research OFF.
2. Upload **general-bootloader.md + canon.md**.
3. First message:
```
Files attached: general-bootloader.md + canon.md. Confirm the role and the canon rev you loaded, then stand by.
```
4. Ask anything; sandbox drafts are welcome. Nothing here changes canon — if something good comes out of it, carry it yourself (as a file) to the Integrator with: "From a General sandbox session, attached — evaluate and propose."

---

## The loop, in one breath

Integrator cuts a rev → presents canon.md + manifest → you carry both to Validator → Validator re-keys, verifies/audits/synthesizes on your request → presents ONE report file → you carry it to Integrator → Integrator triages, proposes, you approve → next rev, with dispositions keyed to the Validator's numbering → repeat. Counsel + FMO sign-off gates stay closed throughout: nothing in this loop makes anything "approved."
