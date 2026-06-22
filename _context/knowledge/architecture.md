# J&R Website Architecture — Condensed

```
status: PLAN / seed draft, Rev 2026-06-10. Author: web designer/dev lane.
scope: hosting + delivery + build/deploy + content-authoring + account-security for the static brochure site.
out-of-scope: page content, legal-doc drafting, disclaimers → gate on counsel + FMO sign-off.
  Host choice is NOT a legal-sign-off item; the consent/privacy/cookie CLAIMS the site makes ARE.
precedence: complements working-doc <company-facts>"Web" + <website-partner-legal-canonical-sources>.
  On any vendor-fact conflict, those blocks win — flag the drift.
disclaimer: engineering/architecture rec, not legal advice. PHI/PII conclusions are fact-specific and
  rest on §2 invariants holding; confirm with counsel before any formal determination.
```

## 1. Guiding principle
- Start at a hello-world that is defensible line-by-line; add layers only on concrete need.
- Every layer a visitor touches (cookie, 3rd-party font, analytics beacon, anti-bot widget) = a new data-flow-map entry + a new public claim that must stay true.
- Architecture itself = the primary compliance control, not bolted on.
- "Which host is most HIPAA-compliant" is misframed (§2). Driver = small footprint + short vendor map, NOT buying compliance infra for data that never arrives.

## 2. Load-bearing fact: no PHI/PII touches the host
- Lead form POSTs directly to AgencyBloc (`action="https://app.agencybloc.com/..."`, `method="post"`).
- Host/CDN only serves flat HTML/CSS/JS + observes ordinary public request metadata (IP, path, UA, referrer) on marketing pages.
- Lead payload (name, contact, coverage interest): browser → AgencyBloc; never transits J&R's CDN-fronted origin.
- ⇒ Host choice is low-stakes: sensitive data confined to AgencyBloc + downstream recipients = where the BAA/processor-contract obligation sits. Plan depends on working-doc PHI/PII data-flow conclusion.

**Invariants (re-check on ANY site change):**
- Form `action` = absolute URL to AgencyBloc's own domain. Never relative; never a J&R subdomain CNAME'd to AgencyBloc + proxied through CDN.
- Form keeps `method="post"` + `https://` action. No field values in URLs/query strings, including the `/thanks` redirect.
- No server-side lead handling behind the CDN (no Worker/Function reading or relaying payload) without redoing the data-flow analysis.
- Any new embedded 3rd-party tool (chat, scheduler, quoting iframe) reviewed for whether it routes identifiable data through J&R's zone.
- Form `action` lives in source ⇒ its integrity = only as good as the GitHub account (§8).

## 3. Launch stack

| Layer | Choice | Notes |
|---|---|---|
| Source repo | GitHub, **private** | Repo + CI only; NOT served from Pages (§4.1). Crown jewel (§8). |
| CI / build | GitHub Actions → `bundle exec jekyll build` | Ephemeral runner; build/serve separation. |
| Deploy | `wrangler pages deploy ./_site` (Direct Upload) | Recommended; pushes compiled output only (§6 Opt A). |
| Serve / CDN | **Cloudflare Pages** | Free tier sufficient for brochure (§4.4). |
| DNS + registrar | Cloudflare | IONOS → Cloudflare Registrar migration in progress (§4.3). Crown jewel (§8). |
| Email + docs | Google Workspace (info@) | Inbound lead/consumer email + rights/accessibility intake. Crown jewel (§8). |
| Web fonts | **Self-hosted** (drop Bunny) | Removes 3rd-party request + IP transmission (§5). |
| Lead form | POST to AgencyBloc | Keeps PHI off host (§2). |
| Anti-bot | Turnstile **OFF** | On ≈ SMS go-live; one disclosure line when on. |
| Analytics | **None at launch** | If wanted: Cloudflare Web Analytics (cookieless). No GA/GTM/Pixel. |
| VoIP / SMS | Intulse | Separate from web layer; SMS dark until A2P 10DLC + verbiage land. |

## 4. Rationale

**4.1 GitHub Pages out as HOST, not as REPO.** Free Pages AUP restricts presence "primarily directed at facilitating commercial transactions"; a lead-gen brokerage brochure plausibly trips that → serving from Pages is wrong. AUP does NOT touch private repo + CI. Keep source + Actions on GitHub, deploy built output elsewhere.

**4.2 Not AWS (S3 + CloudFront).** Prior research favored AWS for HIPAA-eligible services + self-service BAA — moot here: no PHI reaches host (§2), so BAA = for data that can't arrive. AWS adds a 2nd hyperscaler, an IAM surface, and a CloudFront Functions URL-rewrite shim for Jekyll's extensionless permalinks on S3 = MORE footprint. Revisit only if data flow changes (server-side form handler or PHI ingestion).

**4.3 Cloudflare Pages fits:**
1. No PHI ⇒ BAA edge irrelevant; neutralizes AWS's main differentiator.
2. Vendor consolidation — CF = single provider for registrar, DNS, CDN, Pages, Turnstile, cookieless Web Analytics, WAF; one account, one DPA, one bill. J&R already mostly there ⇒ consolidates, not adds. Concentration risk → handled §8 (price of admission).
3. Simplicity — Direct Upload preserves build/serve separation; stack stays boring.

**4.4 "Pro" clarification.** ⚠ FLAG: every `$` figure and build/file count below is approximate + drift-prone (carried from source, unverified). Confirm against Cloudflare's live plans page before budgeting or treating any as fact.
- **Pages Free** — ~500 builds/mo, ≤20,000 files, unmetered bandwidth. ~12-page brochure ≪ limits ⇒ serves launch on its own.
- **Workers Paid (~$5/mo)** — raises Pages build/file limits (thousands of builds, 100,000 files). Not needed.
- **Zone Pro (~$20/mo per domain)** — enhanced WAF (OWASP rules), image optimization, more page rules. Security/perf upgrade, NOT a serving requirement.
- **Business (~$200/mo)** — custom WAF rules, PCI, uptime SLA. Not needed.
- **Rec:** launch on free Pages + free zone. Zone Pro = optional reversible add if form-spam/bot pressure warrants; not a launch dependency.

## 5. Minimal-footprint specifics
- **Cookie/tracker-claim accuracy = the live exposure.** CF Web Analytics is cookieless, BUT Turnstile pre-clearance can set `cf_clearance` and bot-management can set `__cf_bm`. Asserting "no cookies / no tracking" without verifying the *rendered* config = a UDAP / CalOPPA problem. State only what's true after checking live config. (Cross-ref working-doc privacy-accuracy item.)
- **Self-host fonts.** Even a "no-log" 3rd-party font request ships visitor IP to the font host by technical necessity. Self-hosting deletes the request, drops a vendor (and an EU subprocessor). Resolves Bunny decision → self-host.
- **Turnstile off until needed.** When on: covered by existing Cloudflare DPA + one disclosure line.
- **No analytics/ad tech at launch.** If later: cookieless CF Web Analytics = zero cookies.

## 6. Build / deploy pipeline
Both options: change lands on `main` → site auto-updates; repo stays private. They differ only in *where Jekyll runs*.

**Option A — Direct Upload via GitHub Actions (recommended).** Actions builds Jekyll (you pin/control exact Ruby version), then `wrangler` uploads only compiled `_site/` to CF Pages; CF never sees source. Cleanest separation + most reliable — owning the Ruby toolchain avoids the most common CF-Jekyll build failure. Cost: small workflow file + scoped CF deploy token in Actions secrets (§8).

```
merge to main (private GitHub repo, protected branch)
  └─ GitHub Actions (ephemeral runner)
       ├─ install pinned Ruby + bundle install
       ├─ bundle exec jekyll build → _site/
       ├─ (optional) HTML/link/a11y checks
       └─ wrangler pages deploy ./_site --project-name=jr-health
            └─ Cloudflare Pages (global edge) → jrhealthins.org
```
Source + build credentials live only in private repo + Actions secrets. Serving layer runs zero app code, holds only compiled output (= GitHub Pages security model, minus the hosting-AUP problem).

**Option B — CF Pages native Git integration (fallback).** Connect private repo via CF GitHub App; CF builds Jekyll each push. Most literal GitHub-Pages recreation, fewest moving parts. Tradeoffs: CF build env pulls source; its Ruby/Jekyll builder is historically fussy about Ruby versions → pin explicitly (`.ruby-version` or build env var) + check current CF framework guide.

**Rec:** A for build reliability + purest separation; B = fine lower-maintenance fallback. Owners can't tell the difference either way.

## 7. Content authoring & maintenance
- CF hosts but gives owners no copy-edit UI. Jekyll private repo ⇒ "editing content" = markdown + front matter + commit. Authoring model = separate question from hosting; it's the part that touches non-technical owners.
- **Model:** low-frequency edits as PRs, reviewed + merged by **Jasmine (website/compliance coordinator)** in the GitHub web UI. (e.g. SHIP-removal swap 2026-10-01 = pre-staged PR she merges.) Merge to `main` triggers deploy → keeps a compliance reviewer in the path before go-live.
- **No CMS (deliberate).** Decap/Tina-style editor drags in auth, cookies, another vendor/subprocessor — against minimal-footprint + §5 cookie-accuracy. GitHub web editor covers one-line tweaks. Revisit only if edit frequency outgrows PR model.
- Deliverable: plain-language "how the site gets updated" runbook for Jasmine (§10).

## 8. Account security — concentration tradeoff
- Consolidation (§4.3) ⇒ a few accounts carry the entire web presence. **Account security (not server hardening) = the dominant operational control.** No server to break into; realistic attacks target logins.

**Three crown-jewel accounts:**
- **Cloudflare** — registrar + DNS + WAF + hosting. Compromise → redirect / deface / hand over the domain. Highest-impact infra target.
- **GitHub** — source of truth = effectively the lead-integrity control. Compromise → alter form `action` to redirect leads to attacker (the one realistic lead-theft path given §2), inject malicious markup, or push a defaced deploy.
- **Google Workspace** — info@ mailbox (inbound lead/consumer email that may contain PHI; privacy-rights + accessibility intake) + docs. Compromise exposes inbound consumer data AND — since email is the password-reset/recovery channel for the other two — can cascade into CF + GitHub. Root of recovery tree → harden hardest.

**Controls (uniform across all three):**
- Phishing-resistant MFA — hardware keys / passkeys (FIDO2) preferred over SMS or app codes.
- Least privilege — minimize admins/owners (2-person team needs very few).
- Scoped automation creds — deploy uses a CF API token scoped to Pages-deploy only, stored as a GitHub Actions secret. Never a global key, never a personal login.
- Registrar transfer lock on the domain (Cloudflare Registrar).
- Recovery-channel hygiene — protect/monitor email, keep recovery contacts current.
- Owner one-liner: these 3 logins are the keys to the whole presence — hardware keys, don't share.

## 9. Future additions (each a gated switch, not free)
Anything adding a 3rd-party script/cookie/pixel/embed breaks the cookieless posture and trips change-control: update Privacy Policy, add vendor to partner-legal canonical sources w/ its DPA, re-confirm cookie claims. Route each through the **Switch registry** (one decision home).
- **Analytics / GTM / GA / Facebook Pixel** — Pixel + consumer health data = top MHMDA/FTC enforcement target → any health-data-implicating tracker needs opt-in consent *before* it fires, w/ privacy copy paired to the tracker switch so they can't drift.
- **YouTube / premium-media embeds** — add a 3rd-party request to disclose even in privacy-preserving form (`youtube-nocookie`).
- **Zone Pro / WAF** — security upgrade; flip if bot/spam pressure justifies.
- **New states (CA/NV → active)** — driven by the Supported-jurisdictions control, not this plan; host stack is known not to block it.

## 10. Open decisions / next steps
1. Confirm host decision + lock in working doc (resolves `github-host-suitability` flag → move off Pages to Cloudflare).
2. Choose build pipeline — Opt A (Direct Upload via Actions) recommended; Opt B (native Git) fallback (§6).
3. Self-host fonts — implement; delete Bunny from data-flow map.
4. Verify live cookie config BEFORE any "cookieless / no tracking" wording ships anywhere (site or Privacy Policy).
5. Decide zone Pro on its own security merits; not a launch blocker.
6. Harden the 3 crown-jewel accounts before launch (§8) — hardware keys on CF + GitHub + Workspace, scoped Pages-deploy token, registrar transfer lock.
7. Write Jasmine's "how the site gets updated" runbook (§7).
8. Confirm AgencyBloc BAA executed + on file (and for any downstream lead recipient) — the BAA that actually matters; cross-ref data-flow action item.
9. Counsel + FMO sign-off still gates go-live for legal pages + disclaimers, independent of this hosting plan.
