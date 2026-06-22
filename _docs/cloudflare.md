# PHI / PII Data-Flow Rationale

**Subject:** Why the marketing-site architecture keeps protected health information (PHI) and personally identifiable information (PII) out of Cloudflare's scope
**Architecture:** Static (Jamstack) site fronted by Cloudflare + a single web-to-lead form posting directly to AgencyBloc
**Prepared:** June 9, 2026
**Status:** Internal rationale — see "Scope and disclaimer" before relying on this for a formal compliance determination.

---

## 1. Conclusion

Under this architecture, no PHI or PII is created, received, maintained, or transmitted by the company's Cloudflare account. The only data subjects ever submit — the lead form — is sent by the visitor's browser **directly to AgencyBloc**, a separate vendor on a separate domain, and never passes through the company's Cloudflare-proxied origin.

Because Cloudflare's services (registrar, DNS, CDN, reverse proxy, analytics, and a possible future Turnstile widget) are never in the path of the sensitive payload, Cloudflare is **not a HIPAA business associate** for that data, and no Business Associate Agreement (BAA) with Cloudflare is required for this flow. The Cloudflare **Pro** plan is therefore sufficient from a PHI/PII standpoint. The BAA obligation sits with **AgencyBloc**, the system that actually receives and stores the lead.

---

## 2. The mechanism that does the work

The entire form configuration in production is:

```html
<form class="form"
      action="https://app.agencybloc.com/fp/webToLead/v1/FORM_ID_REDACTED/"
      method="post">
```

Two attributes carry the whole argument:

**`action` is an absolute URL to a third-party domain (`app.agencybloc.com`).** When a visitor submits the form, the browser resolves `app.agencybloc.com` via AgencyBloc's DNS, opens a TLS connection to AgencyBloc, and delivers the request there. The company's origin server and the company's Cloudflare reverse proxy are not intermediaries in that connection. The field values the visitor typed — name, contact details, Medicare interest — travel from the browser straight to AgencyBloc. Cloudflare (on the company's side) never sees them.

**`method="post"` puts the field values in the HTTP request body, not the URL.** Nothing the visitor enters is ever placed in a query string. That matters because URLs are the part of a request that tends to leak into logs, browser history, and `Referer` headers. With a POST to a third-party domain, the sensitive data is doubly insulated: it does not traverse Cloudflare at all, and it never exists as URL text anywhere on the Cloudflare-served site.

The form **page** is static and is served through Cloudflare, but a blank form contains no PHI. PHI only comes into existence after the visitor fills the fields, and at that instant it is bound for AgencyBloc, not the company origin.

---

## 3. Component-by-component walkthrough

Each Cloudflare role was checked against the question "does this put Cloudflare in the path of the lead payload?"

**Domain registrar.** Registrar status is administrative ownership of the domain name. It does not intercept or inspect site traffic. No PHI exposure.

**Authoritative DNS.** Cloudflare answers DNS queries for the company's own zone (mapping its hostnames to IP addresses). It is not authoritative for `app.agencybloc.com`; that resolution is handled by AgencyBloc's DNS. DNS responses contain IP addresses, never form contents. No PHI exposure.

**CDN and reverse proxy.** Cloudflare serves and proxies the static assets and pages of the company's domain. It sees inbound requests *to the company's site* — chiefly the GET that loads the form page — including the visitor's IP, the requested path, user agent, and referrer. It does **not** see the outbound POST to AgencyBloc, because that request is addressed to a different origin. The proxy handles the empty form page, not the filled submission.

**Web Analytics.** Cloudflare's analytics beacon fires on page load and records page views and request metadata (page, IP, referrer, user agent). It does not capture form field values. A pageview of a public marketing page is not the lead payload.

**Turnstile (planned).** If a Turnstile challenge is added to the form, the challenge runs client-side and Cloudflare receives a verification token plus bot-scoring signals (such as the visitor IP and interaction data). It does **not** receive the form's PHI/PII fields. The token is submitted alongside the form to AgencyBloc and verified there. Adding Turnstile does not change the conclusion.

The only data Cloudflare observes across all of these is ordinary public-web request metadata for the marketing pages — never the submitted lead.

---

## 4. HIPAA business-associate analysis

A business associate, under HIPAA, is a party that **creates, receives, maintains, or transmits PHI** on behalf of a covered entity. The test is whether the party touches the protected data, not whether it is technically capable of doing so.

Because the company's Cloudflare services never receive, transmit, or store the lead payload, Cloudflare is not acting as a business associate for that data. This is a stronger position than the "mere conduit" exception, which applies to parties that transiently transport PHI: here the data does not pass through Cloudflare at all. No BAA with Cloudflare is needed for this flow, and the absence of BAA availability below Cloudflare's Enterprise tier is not a blocker.

### The one theory that could have implicated the CDN and analytics — and why it does not

The remaining concern worth documenting is the argument that a visitor's **IP address combined with a visit to a health-topic page** could itself constitute individually identifiable health information, which would have pulled the reverse proxy and analytics into scope even without form data.

That position came from HHS Office for Civil Rights guidance on online tracking technologies (the "Proscribed Combination"). On June 20, 2024, a federal district court (the Northern District of Texas, in *American Hospital Association v. Becerra*) declared that portion unlawful and vacated it — holding that connecting an IP address to a visit to an unauthenticated public webpage about health conditions or providers does not, on that basis alone, trigger HIPAA obligations. HHS filed a notice of appeal and then withdrew it about ten days later, leaving the vacatur in place. Under current federal guidance, the request metadata Cloudflare sees on the company's public marketing pages is therefore not PHI on that theory.

(The court did not address other identifier combinations, and this analysis concerns federal HIPAA guidance only — see Section 6.)

---

## 5. Where the PHI actually goes

The lead data lands at **AgencyBloc**, the system that receives the POST. AgencyBloc states that its solutions are HIPAA-compliant, audited annually for SOC 2 Type II, and HITRUST R2 certified; that data is hosted on HIPAA-compliant AWS infrastructure with encryption in transit and at rest; and that the platform is built specifically for health, Medicare, and senior-market insurance agencies. In other words, the sensitive data is routed away from a vendor that won't sign a BAA below Enterprise (Cloudflare) and into a vendor purpose-built for exactly this regulated use case.

**Action item:** Confirm that a signed BAA with AgencyBloc is actually executed and on file. A vendor describing its platform as "HIPAA-compliant" is necessary but not sufficient — the BAA is the contractual instrument that documents the business-associate relationship, and it should be in place for the company and for any downstream recipient of the lead (e.g., notification email or any integration AgencyBloc forwards to).

---

## 6. Guardrails — conditions that must stay true

This rationale holds only as long as the architecture stays as described. The following should be treated as invariants and re-checked on any site change:

1. **The form `action` remains an absolute URL to AgencyBloc's own domain.** It must never become a relative path to the company origin, nor a company subdomain (e.g., `forms.company.com`) that is CNAME'd to AgencyBloc and proxied through Cloudflare (orange-clouded). Either of those would route the payload through Cloudflare and would require a Cloudflare BAA.
2. **The form keeps `method="post"` and an `https://` action.** No field values in URLs; encrypted in transit.
3. **No PHI/PII appears in any URL or query string on the Cloudflare-served site**, including post-submit redirect or "thank-you" pages.
4. **No server-side handling of the lead is introduced behind Cloudflare** (e.g., a Cloudflare Worker or Function that reads or relays the payload) without redoing this analysis and obtaining a Cloudflare Enterprise BAA.
5. **Any new embedded third-party tool** (chat widget, scheduler, quoting iframe) is reviewed for whether it routes identifiable data through the company's Cloudflare zone.
6. **Signed BAAs are maintained** with AgencyBloc and every downstream party that receives the lead.

---

## 7. Scope and disclaimer

This document addresses **infrastructure data flow only** — specifically, whether PHI/PII passes through the company's Cloudflare account and whether a Cloudflare BAA is required. It does **not** address, and should not be read to cover:

- **Content-level compliance**, including CMS Medicare Communications and Marketing Guidelines and Third-Party Marketing Organization (TPMO) disclaimer requirements.
- **Washington Office of the Insurance Commissioner** advertising and licensing rules.
- The **Washington My Health My Data Act**, a consumer-health-privacy law that reaches beyond HIPAA-covered entities and carries a private right of action; whether and how it applies to lead data collected from Washington consumers (and how its HIPAA/GLBA exemptions interact) should be confirmed with counsel.
- **Privacy policy, consent, and cookie/tracking disclosures.**
- **State wiretap / session-replay class-action exposure**, which is litigated independently of HIPAA.
- **Accessibility** (ADA / WCAG).

This is a technical rationale prepared to support a compliance discussion. It is not legal advice. The PHI/PII determinations here are fact-specific and should be reviewed and confirmed by qualified compliance counsel before being relied upon.

---

## Sources

- HHS OCR online tracking guidance and the *American Hospital Association v. Becerra* vacatur: https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/hipaa-online-tracking/index.html
- AgencyBloc security and HIPAA posture: https://www.agencybloc.com/agency-management-system/data-and-security/ and https://www.agencybloc.com/faqs/
