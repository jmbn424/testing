# rev14-change-manifest.md — canon.md rev 13 → rev 14 (2026-06-12)

Against rev 13 (pin `b0287d6573b54bbb0e9bc1369c9a296d44b6b8351017736c08d9d09a66bf49b9`).
Result: rev 14 · body = 2,056 lines · body SHA-256 `d3893e14d11f0c20e0e2ce41dfe049847610c06ccd1fb77c582198d029a0f686`.
Scope: (1) de-slop adoption — page-copy style fixes from the 2026-06-12 external de-slop pass, including one real render bug (CHD §7 subject-verb across the inline NV gate); (2) house-style rule added to build conventions; (3) J&R batch-5 Q6 answer folded (retention-period + appendix). No authority rows touched. All authority UNVERIFIED pending counsel + FMO.

## Verification notes
Battery expectation unchanged except: page-copy em-dash count is now ZERO by house-style rule — future audits should enforce it (annotations/register exempt). Appendix stays at 12 numbered lines with Q6 marked ANSWERED; do not renumber until the batch completes.

## Edits (verbatim old → new)
### 1. E1-chd7-grammar-gate
OLD:
~~~
We have no affiliates as Washington{# gate: jurisdiction = NV #} and Nevada{# /gate #} law define that term, meaning
~~~
NEW:
~~~
We have no affiliates as that term is defined by Washington{# gate: jurisdiction = NV #} and Nevada{# /gate #} law, meaning
~~~

### 2. E2-home-teaser
OLD:
~~~
Some of what you share with us — even just that you are looking into Medicare or other health coverage — can be
~~~
NEW:
~~~
Some of what you share with us (even just that you are looking into Medicare or other health coverage) can be
~~~

### 3. E3-privacy7
OLD:
~~~
permissions you gave us — such as your agreement to our Terms and your text-message opt-in — for longer
~~~
NEW:
~~~
permissions you gave us (such as your agreement to our Terms and your text-message opt-in) for longer
~~~

### 4. E4-svc-heading
OLD:
~~~
## Veterans services — Important Disclosures
~~~
NEW:
~~~
## Veterans services: Important Disclosures
~~~

### 5. E5-svc-d3
OLD:
~~~
### D3 · VA / CHAMPVA / TRICARE — Medicare Coordination
~~~
NEW:
~~~
### D3 · VA / CHAMPVA / TRICARE: Medicare Coordination
~~~

### 6. E6-contact-variant
OLD:
~~~
"Text messaging is not active yet — when our texting program launches, you can opt in here."
~~~
NEW:
~~~
"Text messaging is not active yet. When our texting program launches, you can opt in here."
~~~

### 7. E7-style-rule
OLD:
~~~
(insert after gate legend)
~~~
NEW:
~~~
- **House style (page copy):** no em-dash connectors in consumer-facing page copy; use parentheses, colons, or separate sentences instead. Em dashes remain acceptable in annotations and register text, which never render. Adopted rev 14 from the 2026-06-12 de-slop pass; verbs and list grammar must stay correct in every gate state (see the CHD §7 recast).
~~~

### 8. E8-retention-answer
OLD:
~~~
| retention-period | 🟠 | Non-client retention — operational (AgencyBloc dual-clock) + SOA/recording 10-yr | Privacy §7 REVISED 2026-06-09 to three buckets; the legal recordkeeping-floor question is settled in the text (no minimum on a bare inquiry; minimums attach to consummated transactions + artifacts), pending EXT (4.12) + counsel. Remaining: confirm AgencyBloc can expire lead/inquiry data (~24 mo from last contact) and consent proof (longer) on SEPARATE clocks. NEW (J&R 2026-06-11): J&R records sales calls and creates Scopes of Appointment; SOA/chain-of-enrollment forms retained 10 years per CMS §422.504; sales-call recordings kept 10 years as J&R practice — the CMS floor for marketing/sales recordings drops to 6 years for recordings on/after 10/1/2026 (rows 129/131/133), so 10 exceeds the floor — a distinct long-retention bucket for the internal schedule (5.32); confirm where SOAs/recordings are stored (AgencyBloc? — 3.6) and that the 10-yr clock runs separately. | privacy §7, 4.12, 5.32, 3.6 |
~~~
NEW:
~~~
| retention-period | 🟠 | Non-client retention — operational (AgencyBloc dual-clock) + SOA/recording 10-yr | Privacy §7 REVISED 2026-06-09 to three buckets; the legal recordkeeping-floor question is settled in the text (no minimum on a bare inquiry; minimums attach to consummated transactions + artifacts), pending EXT (4.12) + counsel. Remaining: confirm AgencyBloc can expire lead/inquiry data (~24 mo from last contact) and consent proof (longer) on SEPARATE clocks. NEW (J&R 2026-06-11): J&R records sales calls and creates Scopes of Appointment; SOA/chain-of-enrollment forms retained 10 years per CMS §422.504; sales-call recordings kept 10 years as J&R practice — the CMS floor for marketing/sales recordings drops to 6 years for recordings on/after 10/1/2026 (rows 129/131/133), so 10 exceeds the floor — a distinct long-retention bucket for the internal schedule (5.32); confirm where SOAs/recordings are stored (AgencyBloc? — 3.6) and that the 10-yr clock runs separately. J&R ANSWERED (2026-06-12, batch 5 Q6): schedule-based deletion with separate timers IS an available AgencyBloc function — capability confirmed; the actual clock configuration for the three buckets still needs to be set up (vendor checklist + 5.32). Still open on this row: storage location + separate 10-yr clock (Q7) and the DPA/BAA (Q5). | privacy §7, 4.12, 5.32, 3.6 |
~~~

### 9. E9-q6-answered
OLD:
~~~
6. AgencyBloc: can deletion run on a schedule, with separate clocks (old inquiries sooner, consent proof longer)? [retention-period]
~~~
NEW:
~~~
6. ANSWERED (2026-06-12): AgencyBloc supports schedule-based deletion with separate clocks — recorded on retention-period; configuration rides the vendor checklist + 5.32. Number kept so the outbound list’s numbering stays stable mid-batch. [retention-period]
~~~

### 10. E10-preamble
OLD:
~~~
was Q6 at rev 12).*
~~~
NEW:
~~~
was Q6 at rev 12). Q6 (AgencyBloc deletion clocks) ANSWERED 2026-06-12; numbering held stable until the batch completes.*
~~~

### 11. E11-530
OLD:
~~~
Manifest: rev13-change-manifest.md.
~~~
NEW:
~~~
Manifest: rev13-change-manifest.md. Rev 14 (2026-06-12): de-slop adoption into page copy (em-dash connectors removed at four spots, two heading dashes to colons, CHD §7 affiliates sentence recast to fix the inline-NV-gate subject-verb bug the de-slop pass surfaced, Contact OFF-variant split into two sentences) + house-style rule added to build conventions + J&R batch-5 Q6 answer folded (AgencyBloc dual-clock deletion capability confirmed; retention-period updated; appendix Q6 marked answered with numbering held). Manifest: rev14-change-manifest.md.
~~~

