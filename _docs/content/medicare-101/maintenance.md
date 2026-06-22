# Medicare 101 Content Maintenance

**Last modified:** 2026-06-01

This document covers the maintenance work needed to keep `medicare-101-page.md` accurate over time. It lives next to the source content and gets updated whenever the maintenance landscape itself changes. Its two sibling documents are [medicare-101-content-generation-process.md](medicare-101-content-generation-process.md) (how the page was built) and [medicare-101-content-sources.md](medicare-101-content-sources.md) (the audit trail for every factual claim on the page).

The page contains specific dollar figures, dates, statutory carve-outs, and a state count. Different types of content drift on different cadences. This doc is organized in three parts:

1. **Upcoming Deadlines** (time-bound): specific dates between now and early 2027 when something needs to be checked or updated. Refresh this part as items are completed or new dates emerge.
2. **Evergreen Practices** (always true): editorial guardrails, recurring task workflows, triggers that should prompt unscheduled review, and how to use Claude for help. Update only when the practice itself changes.
3. **Active Legislation Tracker** (status-dependent): current status of state bills under watch. Update as bills move, die, or new ones emerge.

---

## Part 1: Upcoming Deadlines

Listed chronologically. Each entry notes the action and points to the relevant evergreen section for the full procedure.

### By April or May 2026 (may have passed by the time you read this)

**2027 Part D structural figures release.** CMS publishes the Final CY 2027 Part D Redesign Program Instructions in spring, covering the 2027 out-of-pocket cap, max annual deductible, insulin cap, and vaccine cost-sharing. Source: cms.gov/newsroom/fact-sheets. **Action:** Note the new figures; the full annual page update happens in November once Parts A and B are also released.

### By end of July 2026

**Post-session legislation check on TN, GA, and WA.** All three states adjourn their main sessions in spring 2026. Check the active tracker in Part 3 for current bill statuses, then click through to each state's official bill page to confirm whether bills passed, died, or carry over. See Part 3 > Action Triggers for what to do with each outcome.

### By end of September 2026

**Post-session legislation check on CA.** California's 2025–26 session ends August 31, 2026. Same procedure as the July check. See Part 3 > Action Triggers.

### By end of October 2026

**2027 high-deductible Plan F/G deductible release.** CMS publishes the F, G & J Deductible Announcement annually in October. (The 2026 figure of $2,950 was released October 2025.) Not currently cited on the page, but worth recording in case it gets added.

### By end of November 2026: PRIMARY ANNUAL UPDATE WINDOW

**2027 Part A and B cost figures plus IRMAA brackets.** CMS releases the "2027 Medicare Parts A & B Premiums and Deductibles" fact sheet typically mid-November. The IRMAA Federal Register notice follows. **This is the main annual maintenance event.** See Part 2 > Annual: CMS Cost Figure Update for the full list of fields to change. Total effort: 15 to 30 minutes.

### January 1, 2027

**New Mexico birthday rule takes effect.** Bumps the national count to at least 17. See Part 2 > Reactive: Birthday Rule State Count for when this actually triggers a page edit.

### Mid-January 2027

**Verification pass on 2027 cost figures.** Confirm no late-breaking changes between the November release and the January 1 effective date. Quick sanity check, 10 minutes.

### January through February 2027

**Watch for new bills in new state sessions.** Most states begin sessions in early January. Add new WA/OR/CA/GA/TN bills to the active tracker in Part 3 as they emerge.

---

## Part 2: Evergreen Practices

These are always true and don't change with the calendar.

### Editorial guardrails (apply to every edit)

These mirror the [locked-in editorial decisions](medicare-101-content-generation-process.md#locked-in-editorial-decisions) in the process doc.

- No em dashes anywhere. Use colons, parentheses, or split sentences. Em dashes are an AI tell in informational copy and have been deliberately purged from this site.
- Semicolons sparingly. They read as an LLM tic in informational copy. Prefer splitting into separate sentences or a comma plus a conjunction, and reserve semicolons for cases where nothing else reads as cleanly. The production page was deliberately de-semicoloned in a June 2026 copy-quality pass.
- Prose over bullets unless content is genuinely list-shaped (specific cost figures, enrollment windows, eligibility lists).
- Target length for the main page: roughly 2,000 to 2,500 words. Tighter is better when there's a choice.
- Voice: warm, plain-English, anti-jargon. Educate first, sell second.
- The CMS compliance disclaimer and the no-endorsement notice live in the site-wide footer, not on individual pages.
- The educational disclaimer at the bottom of the page stays.
- When the page changes, bump `lastUpdated` in the front matter to the current ISO 8601 datetime, format `YYYY-MM-DDThh:mm` (e.g., `2026-05-26T21:54`).

### Recurring task frequency at a glance

| Task | Frequency | Effort per pass |
|------|-----------|-----------------|
| URL spot-check | Quarterly | 15 to 30 minutes |
| CMS cost figure update | Annual (November) | 15 to 30 minutes |
| Pending legislation review | Twice yearly (after each tracked state's session) | 20 to 30 minutes |
| Birthday rule state count | Reactive (when materially off) | 5 minutes |

### Quarterly: URL spot-check

The page has roughly 30 inline links. Federal links (medicare.gov, cms.gov, ssa.gov, medicaid.gov) are stable and rarely need attention. State agency links are where breakage happens, usually because an agency reorganizes or renames.

Historical examples in this space: Tennessee's SHIP moved from the Commission on Aging to the new Department of Disability and Aging in 2024. California's HICAP page has moved within `aging.ca.gov` more than once. Oregon's SHIBA program moved from the Department of Consumer and Business Services (DCBS) to the Department of Human Services (ODHS), confirmed in May 2026; the public URL (`shiba.oregon.gov`) is unchanged, but the administering-agency attribution on the page had to be corrected. DCBS still regulates Oregon insurance carriers through its Division of Financial Regulation, so the page's separate reference to DFR for insurance complaints remains accurate.

**Priority order when spot-checking:**

1. State SHIP URLs (TN, GA, OR, WA, CA). The TN one in particular is post-reorganization.
2. State Medicaid program URLs, especially deep links to specific MSP sub-pages.
3. State insurance department URLs.
4. The Washington OIC's annual approved Medigap plans list, which is updated each plan year and could shift paths.

**Action trigger:** Any URL that 404s, redirects to a generic landing page, or now resolves to noticeably different content than what the page is citing. Each is a one-line fix.

**Method:** A simple script that hits each URL and flags non-200 responses works best. Manual click-through is fine too.

### Annual: CMS cost figure update

The page contains nine specific dollar figures that all reset on January 1 each year. CMS releases new figures across fall on a predictable schedule:

- **Spring (April or May):** Part D structural figures (OOP cap, max deductible, insulin cap, vaccine cost-sharing) in the Final Part D Redesign Program Instructions.
- **October:** Medigap high-deductible Plan F/G deductible (not currently on the page).
- **Mid-November:** Part A and B premiums, deductibles, coinsurance in the CMS Parts A & B fact sheet.
- **November (Federal Register):** IRMAA brackets.

Batch the update after the November release lands. **Fields to update on the page:**

- Part A inpatient hospital deductible per benefit period
- Hospital coinsurance (days 61 to 90, lifetime reserve days)
- Skilled nursing facility coinsurance (days 21 to 100)
- Part B standard monthly premium
- Part B annual deductible
- Part D maximum annual deductible
- Part D annual out-of-pocket cap
- IRMAA individual and couple thresholds
- The two-year lookback year reference (e.g., "2026 premiums look at your 2024 income" becomes "2027 premiums look at your 2025 income")

Also update the closing disclaimer: "Costs and figures cited reflect 2026 amounts" becomes "2027 amounts." Bump `lastUpdated`.

### Reactive: Birthday rule state count

The "About 16 states" line in the All Other States section is a moving target. The existing "and the count keeps growing" language is intentionally forgiving and absorbs small changes without needing edits.

**Trigger to actually update the count:** when it has been off by 2 or more for several months, or when a tracked state (Tennessee especially) enacts a birthday rule, since that would also change its own state section.

**Authoritative source for current count:** medicareresources.org "The 'birthday rule': a gift to Medigap enrollees?" (updated periodically by Tanya Feke, M.D.), corroborated by Boomer Benefits and The Big 65 state-by-state guides.

### Triggers for unscheduled review

The calendar in Part 1 covers expected events. The following are unexpected events that should prompt a page review whenever they occur, regardless of where you are in the maintenance cycle:

- Any federal CMS announcement affecting Part D structure (OOP cap, MPPP operation, insulin cap), IRMAA brackets, or premium calculation methodology outside the normal annual cycle.
- Any state legislation listed in the active tracker (Part 3) advancing past committee.
- Any DHCS guidance materially modifying the January 1, 2026 Medi-Cal asset-test reinstatement (e.g., clarifications on countable vs. exempt assets, the 90-day cure period, or spousal impoverishment thresholds).
- Any federal legislation expanding Medigap guaranteed-issue rights or eliminating ESRD exclusions, both of which have been introduced in past Congresses.
- Any major Medicare program change announced in a White House or HHS proposed rule.

When any of these fires, prioritize over scheduled tasks. Update the page first, then update this maintenance doc with whatever new tracking the change creates.

### Anytime: Using Claude to help

Claude is well-suited to URL verification, cost-figure cross-checks against CMS releases, and drafting replacement copy that matches the page's voice. It is less reliable for definitively confirming pending legislation status: bill trackers update faster than training data and sometimes faster than retrieval. For legislation, always click through to the state legislature's own bill page as the final authority.

To kick off a maintenance pass, paste the project bootloader prompt first (per the [existing project workflow](medicare-101-content-generation-process.md)), wait for acknowledgment, then paste a request along these lines together with the current production markdown:

```
I'm doing a [URL audit / legislation status check / annual cost figure update / general]
maintenance pass on the Medicare 101 page per the maintenance checklist.

Here is the current production markdown:
[paste medicare-101-page.md]

And here is the relevant section of the maintenance doc:
[paste the relevant section from this file]

Please verify each item, flag anything that has drifted or broken, and propose specific
edits with sources and reasoning. Don't expand scope beyond what's listed in the section.
```

For the cost-figure pass specifically, also paste the CMS fact-sheet URL(s) for the new plan year so Claude can verify against them directly rather than relying on secondary aggregators.

---

## Part 3: Active Legislation Tracker

Update as bills move, die, or new ones emerge. Status reflects what was last verified in late May 2026, not necessarily the last-modified date above. Always click through to the official source before relying on it.

### Tracker

| State | Bill(s) | What it would change | Status (as of late May 2026) | Official source |
|-------|---------|----------------------|-------------------------------|-----------------|
| WA | HB 1603 | Guaranteed-issue Medigap for MA-to-Original-Medicare voluntary switches | Reintroduced and retained in House Health Care & Wellness Committee (Jan 12, 2026); WA's 2026 supplemental session adjourned without floor action; would need to be picked up again in the 2027 session to advance | app.leg.wa.gov |
| GA | HB 323 | Cap under-65 Medigap premiums (Plans A/B/D at age-65 rate; others at 200%) | Passed Georgia House 174-2 (Mar 6, 2025); placed on Senate Rules Calendar (Mar 31, 2026); actively moving | legis.ga.gov |

### Action triggers

- **Bill is signed into law:** Update the relevant state section on the page. Bump `lastUpdated`. Remove the bill from this tracker.
- **Bill passes one chamber and is actively moving:** Update the tracker status; no page change yet.
- **Bill dies, fails to advance, or session ends without action:** Confirm the death, remove from this tracker, no page change unless the same bill is reintroduced in a later session.

### Scope of the tracker

Only state bills affecting WA, OR, CA, GA, and TN are tracked here, since those are the agency's currently licensed states. Pennsylvania, Michigan, and other states have pending Medigap bills, but those only affect the "About 16 states" count line, which has its own (reactive) trigger in Part 2.
