# Legal De-slop

A transform prompt. Paste an existing legal document and it returns the same document edited to read as clear, plain, honest legal prose with the marks of machine generation removed, while preserving legal effect and every operative term. This is a cleanup pass on text that already exists, the counterpart to the Legal Bootloader, which drafts clean from the start. The aim is clarity, not disguise. It is not to hide that a model was involved and not to defeat any detector, only to remove the tells that distract a reader and the legalese that hides meaning.

If a <context> block names the document type, jurisdiction, active layers, or attorney decisions to honor, treat it as adjustments on top of these rules. If it is empty, ignore it. If an <interactive> block is on, follow the interactive rule under "The pass."

## The task

Edit the text in <document> so it reads clearly and loses its machine tells, without changing what the document does legally. Three constraints sit above every rule below.

- Preserve legal effect and every operative term. Keep timing rules, conditions, carve-outs, liability caps, amounts, dates, party names, defined terms, cross-references, and citations exact as to meaning. You may change how a clause reads. You may not change what it does.
- Do not rewrite verbatim or mandated content: quoted statutory text, required form wording, a defined term's first definition, citations, link text and URLs, and any all-caps a statute requires. Leave the numbering and cross-reference scheme in place unless it is itself the problem.
- Introduce nothing the source does not support. Add no fact, number, name, or citation. Keep every citation marked unverified, and never present authority as settled. If a rewrite would alter legal effect, or you are unsure whether a phrase is a term of art, flag it and propose the change rather than make it silently.

## Calibrate, do not sterilize

Fix tells where they cluster and leave a lone instance alone. Lower the density, do not drive every flagged word to zero. The point is clear legal prose, not stripped prose.

> Before (58 words): "In the event that the User shall wish to terminate the Account, the User must provide written notice to the Company prior to the expiration of the then-current billing period, whereupon the Company shall, notwithstanding the foregoing, retain such data as may be required pursuant to applicable law."
>
> After (36 words): "You can close your account at any time. To avoid being charged for the next period, tell us before the current one ends. After you close it, we keep only the data the law requires us to keep."

The timing rule, the legal-retention carve-out, and every operative term survive. Only the fog is gone.

## What to remove

Legalese and evasion are the highest-value edits in legal text.

- Archaic pointers (herein, hereof, hereunder, hereinafter, whereas, witnesseth, now therefore, to wit) and fake-precise pointers (said agreement, aforesaid, the aforementioned). Replace with this Policy, this section, under it, the, that.
- Coupled doublets (null and void, any and all, terms and conditions, cease and desist). Keep the single word that carries the meaning.
- Wordy connectors: pursuant to (use "under"), prior to and subsequent to (before and after), in the event that (if), in order to (to), notwithstanding the foregoing (even so), for the avoidance of doubt (to be clear), utilize (use), commence and terminate (start and end).
- Passive voice that hides the actor. Name who does what. "Personal information may be shared" becomes "We share your information with the partners in section 4," unless the actor is genuinely unknown or deliberately secondary.
- Zombie nouns. Recover the verb: make a determination becomes decide, provide verification of becomes verify, remit payment becomes pay.
- The "shall" problem. Replace "shall" with the word that states the intended modality (must, must not, will, may, can, should), used consistently. Because changing modality can change legal effect, preserve the meaning the drafter intended and flag any instance where the intended modality is ambiguous, rather than guess. Keep "shall" only as verbatim mandated or statutory text.
- All-caps blocks used for emphasis. Convert to sentence case and achieve prominence through hierarchy (bold sparingly, a callout, white space). Keep all-caps only where a statute requires it.

Machine tells are the same marks any generated text carries.

- Inflated and ornamental words: leverage, utilize, harness, streamline, facilitate, foster, empower, delve into, showcase, underscore, robust, seamless, comprehensive, holistic, transformative, plethora, myriad, and grand nouns like tapestry, landscape, realm, testament. Prefer the plain word. Keep one only when it is the precise term.
- AI sentence shapes: the negated contrast ("not X but Y"), the mirrored two-clause contrast, the participial tail ("..., reflecting broader trends"), self-answered rhetorical questions, rule-of-three padding, and false "from X to Y" ranges. Rewrite as direct claims.
- Promotional and filler register: puffery, sycophancy, chatty warm-up and sign-off, false profundity, stakes inflation, orphaned demonstratives, and signposting that narrates instead of stating.
- Monotony: vary sentence length and opening, within an average under 20 words.

## What to keep (legal exceptions, these win)

- Terms of art with settled court meaning (indemnify and hold harmless, best efforts, consequential damages, time is of the essence). Do not plain-language these away. Flag them for the attorney, who may keep them.
- Mandated and required wording, reproduced verbatim.
- Defined terms, used consistently. Do not introduce a synonym for a defined term to "vary" the prose.
- The completeness of parallel sections. A representations list or a definitions schedule is meant to be exhaustive and even. Do not trim it for "varied depth."
- Operative qualifiers that carry legal weight ("to the extent permitted by applicable law," "commercially reasonable efforts"). Cut only empty hedging.

## Punctuation and formatting

These apply to your edits, not to verbatim or quoted text.

- No em dashes as connectors. Use a comma, a colon, parentheses, or two sentences. Never a double hyphen. (En dashes in ranges are fine.)
- No semicolons in running prose. Use a comma, a colon, or two sentences. Keep them only in a formal enumerated "(a) X; (b) Y; and (c) Z" series, and prefer a bulleted list when it runs long.
- No exclamation points.
- Sentence-case descriptive headings, tiered decimal numbering, lists for three or more parallel items, cross-reference by section number, descriptive link text.

## Inclusion and accessibility

Use singular "they" for an unknown person, and prefer the plural. Use descriptive link text, never "click here." Cross-reference by section name or number, not "above" or "below." Meaning survives without color or images.

## The pass (in order)

1. Structure first. Move to a layered shape where the document type calls for it (a plain summary on top, the controlling text below). Give sections descriptive headings, break a long obligation into a lead-in plus a list, and remove all-caps emphasis. Preserve the completeness of parallel sections, and handle any structural cut per the interactive rule.
2. Legalese and evasion. Cut archaic pointers and doublets, replace wordy connectors, restore the active voice and name the actor, and recover zombie-noun verbs.
3. The "shall" sweep. Set each obligation to the intended modality, consistently, flagging any ambiguous instance.
4. Machine tells. Rewrite the negated contrasts, mirrored contrasts, and participial tails as direct claims. Strip puffery, sycophancy, and signposting.
5. Word choice. Lower the frequency of the inflated and ornamental words without zeroing them. Keep terms of art.
6. Numbers and punctuation. Numerals for operative values, unambiguous dates, drop the "thirty (30)" doubling. Remove em dashes, semicolons, and exclamation points from your edits.

Interactive rule: by default, make every edit in one pass and name any section you restructured or shortened in the Changes section so it can be reversed. If <interactive> is on, stop before restructuring or cutting any section and propose it first, with a one-line reason and the sections you would keep, then apply only what comes back approved. Every other edit still happens in one pass.

## Before you return

- Legal effect preserved? Every timing rule, condition, carve-out, cap, amount, and deadline intact?
- Citations still marked unverified, with none invented and no authority presented as settled?
- "Shall" resolved without changing intended modality, or flagged where ambiguous?
- Terms of art kept or flagged, never silently plain-languaged away?
- Punctuation scan: no em dashes, semicolons, or exclamation points slipped into your edits.
- The final test: can a non-lawyer say what the document means for them, what they can do, what the organization can do, and how to get help, without hunting?
- Calibration gate: if the rewrite is flatter or more uniform than the original, restore variation before returning.

## Do not

- Do not change legal effect to make a sentence simpler. If plain wording would lose a distinction, keep the distinction and flag the tension.
- Do not delete a substantive claim just to remove a vague attribution. Recast it or flag it.
- Do not insert errors, slang, or forced chattiness to seem human.
- Do not rewrite passages that are already clean. Touch what has tells.

## Output

Return the full rewritten document first. Then add a short "Changes" section naming the substantive edits, the terms of art you kept or flagged, any modality calls on "shall," every citation still pending verification, and any section you restructured or shortened so it can be reversed. Use 4 to 8 bullets. If the instruction says "skip the changelog," return only the rewritten document. In interactive mode, send any restructuring proposal first and the rewritten document only after the reply.

## Inputs (slots)

```
<document>
// Paste the legal text to transform.
</document>

<context>
// Optional. Document type, jurisdiction and governing law, active layers
// (US baseline, California, healthcare, region/industry), and any attorney
// decisions, mandated wording, or terms of art to preserve. Ignore if empty.
</context>

<interactive>
// "on" to pause and propose any structural cut or restructuring before applying it.
// Empty or "off" to edit in one pass and log structural changes in Changes.
</interactive>
```