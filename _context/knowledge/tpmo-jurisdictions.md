# TPMO/FMO Jurisdiction Lookup (PY2026)

Last updated: 2026-06-20 (rev. 7) — see Change log

Verified against primary sources — CMS State-based Exchanges list + 2026 OEP snapshot, Census ANSI, Wikidata, NAIC directory, state agency sites (see Change log for dates). Scope: **56 jurisdictions = 50 states + DC + 5 territories.** CMS Medicare (Parts A/B, C, D) **applies in all 56.** ACA split: **21 SBM + 3 SBM-FP + 27 FFM = 51** (states+DC); 5 territories = NONE. Confidence **High** for all states + DC; **Med** for the 5 territories (regulator pages + wiretap class need verification).

## 1. Jurisdiction index

*Columns `state_privacy_laws`, `state_mini_tcpa`, `state_telemarketer_registration` — see Change log for revision history. Cells are terse to match the existing format — full citations/links + conflicts live in Appendices A–B; open controversies & deferred-verification register in Appendix C. "verify" = confirm before relying; only the privacy anchors (CA/OR/WA/NV/TN/GA) and TN/OR/TX/OK telemarketer registration are independently cross-checked. Effective dates shown for enacted-but-not-yet-in-force laws (AR 7/1/2026, LA 1/1/2027, OK 1/1/2027, AL 5/1/2027, VT 1/1/2028). `state_mini_tcpa` is solicitation calling-hours and is distinct from the `call_recording` wiretap-consent class.*

| jurisdiction | type | usps | fips | wikidata_url | official_website | aca_tier | aca_platform | aca_enrollment_url | broker_pathway | call_recording | state_privacy_laws | state_mini_tcpa | state_telemarketer_registration |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Alabama | State | AL | 01 | https://www.wikidata.org/wiki/Q173 | https://www.alabama.gov/ | FFM | HealthCare.gov | healthcare.gov | Federal (MLMS/RCL) | One-party | AL Personal Data Protection Act (HB 351/Act 2026-552, eff. 5/1/2027) | Ala. Code §8-19A; 8a–8p, no Sun/holiday | Yes (AL AG); verify producer exempt |
| Alaska | State | AK | 02 | https://www.wikidata.org/wiki/Q797 | https://alaska.gov/ | FFM | HealthCare.gov | healthcare.gov | Federal (MLMS/RCL) | One-party | N/A (breach only) | Federal only (8a–9p) | Yes (no renewal); verify |
| Arizona | State | AZ | 04 | https://www.wikidata.org/wiki/Q816 | https://az.gov/ | FFM | HealthCare.gov | healthcare.gov | Federal (MLMS/RCL) | One-party | N/A | HB 2498 (texts/DNC); 8a–9p | Yes; verify |
| Arkansas | State | AR | 05 | https://www.wikidata.org/wiki/Q1612 | https://arkansas.gov/ | SBM-FP | My Arkansas Health Insurance Marketplace | healthcare.gov | Federal (MLMS/RCL) | One-party | Children & Teens' OPPA (HB 1717/Act 952, eff. 7/1/2026; Ark. Code tit. 4 ch. 88 subch. 15) | Federal only (8a–9p) | Yes; insurers reportedly exempt — verify |
| California | State | CA | 06 | https://www.wikidata.org/wiki/Q99 | https://www.ca.gov/ | SBM | Covered California | coveredca.com | State-specific | All-party | CCPA/CPRA (Civ. Code §1798.100; ADMT regs phasing fr. 1/1/2026); CalOPPA (B&P §22575, no threshold); AB 45 health (eff. 1/1/2026) | Pub. Util. Code §2875 (ADAD); no live-call hours statute | Yes (B&P §17511); insurance-licensed exempt (§17511.1(e)); self-executing |
| Colorado | State | CO | 08 | https://www.wikidata.org/wiki/Q1261 | https://www.colorado.gov/ | SBM | Connect for Health Colorado | connectforhealthco.com | State-specific | One-party | CO Privacy Act (C.R.S. §6-1-1301; biometric 7/1/2025; minors/geo 10/1/2025) | Federal only (8a–9p) | Yes; fin-inst exempt |
| Connecticut | State | CT | 09 | https://www.wikidata.org/wiki/Q779 | https://portal.ct.gov/ | SBM | Access Health CT | accesshealthct.com | State-specific | Mixed | CT Data Privacy Act (Gen. Stat. §42-515; consumer health-data; thresh. drop 7/1/2026, SB 1295/PA 25-153); precise-geolocation-sale ban + data-broker registration + surveillance-pricing limits (SB 4/PA 26-64, eff. 10/1/2026; data-broker reg 1/1/2027) | SB 1058 PEWC; ~9a–8p | None identified |
| Delaware | State | DE | 10 | https://www.wikidata.org/wiki/Q1393 | https://delaware.gov/ | FFM | HealthCare.gov | healthcare.gov | Federal (MLMS/RCL) | All-party | DE Personal Data Privacy Act (6 Del. C. §12D-101); DOPPA online (6 Del. C. ch. 12C) | Federal only (8a–9p) | Yes; verify |
| District of Columbia | Federal District | DC | 11 | https://www.wikidata.org/wiki/Q3551781 | https://dc.gov/ | SBM | DC Health Link | dchealthlink.com | State-specific | One-party | N/A (breach+UDAP only) | Federal only (8a–9p) | Yes; EBR exemption — verify |
| Florida | State | FL | 12 | https://www.wikidata.org/wiki/Q812 | https://www.myflorida.gov/ | FFM | HealthCare.gov | healthcare.gov | Federal (MLMS/RCL) | All-party | FL Digital Bill of Rights (Fla. Stat. §501.701; narrow, $1B+ rev) | FTSA (§501.059); 8a–8p, ≤3/24h, texts, PRA | Yes (seller+rep+bond); insurance agents exempt (§501.604(8)) — file FDACS Affidavit of Exemption first (see App. A) |
| Georgia | State | GA | 13 | https://www.wikidata.org/wiki/Q1428 | https://georgia.gov/ | SBM | Georgia Access | georgiaaccess.gov | State-specific | One-party | N/A (breach+UDAP only) | SB 73 (Title 46) + PSC no-call; 8a–9p | None identified |
| Hawaii | State | HI | 15 | https://www.wikidata.org/wiki/Q782 | https://portal.ehawaii.gov/ | FFM | HealthCare.gov | healthcare.gov | Federal (MLMS/RCL) | Mixed | N/A | Federal only (8a–9p) | None identified |
| Idaho | State | ID | 16 | https://www.wikidata.org/wiki/Q1221 | https://www.idaho.gov/ | SBM | Your Health Idaho | yourhealthidaho.org | State-specific | One-party | N/A | Federal only (8a–9p) | Yes; verify |
| Illinois | State | IL | 17 | https://www.wikidata.org/wiki/Q1204 | https://illinois.gov/ | SBM | Get Covered Illinois | getcovered.illinois.gov | State-specific | All-party | N/A omnibus; BIPA (740 ILCS 14) biometric, PRA | Live 8a–9p (815 ILCS 413/15); autodialer 9a–9p (815 ILCS 305/15) | None gen. identified |
| Indiana | State | IN | 18 | https://www.wikidata.org/wiki/Q1415 | https://www.in.gov/ | FFM | HealthCare.gov | healthcare.gov | Federal (MLMS/RCL) | One-party | IN Consumer Data Protection Act (Ind. Code §24-15, eff. 1/1/2026) | Federal only (8a–9p) | Yes; verify |
| Iowa | State | IA | 19 | https://www.wikidata.org/wiki/Q1546 | https://www.iowa.gov/ | FFM | HealthCare.gov | healthcare.gov | Federal (MLMS/RCL) | One-party | IA Consumer Data Protection Act (Iowa Code ch. 715D, eff. 1/1/2025) | Federal only (8a–9p) | None identified |
| Kansas | State | KS | 20 | https://www.wikidata.org/wiki/Q1558 | https://www.kansas.gov/ | FFM | HealthCare.gov | healthcare.gov | Federal (MLMS/RCL) | One-party | N/A | Federal only (8a–9p) | None identified |
| Kentucky | State | KY | 21 | https://www.wikidata.org/wiki/Q1603 | https://kentucky.gov/ | SBM | kynect | kynect.ky.gov | State-specific | One-party | KY Consumer Data Protection Act (KRS §367.3611, eff. 1/1/2026) | 10a–9p (KRS 367.46955(16)); ID goods/services in first 30 sec (KRS 367.46953) | Yes; verify |
| Louisiana | State | LA | 22 | https://www.wikidata.org/wiki/Q1588 | https://www.louisiana.gov/ | FFM | HealthCare.gov | healthcare.gov | Federal (MLMS/RCL) | One-party | LA Data Privacy Act (SB 386/Act 502, eff. 1/1/2027; La. R.S. 51:1780.1–.5) | 8a–8p, no Sun/holiday | Yes (AG); verify |
| Maine | State | ME | 23 | https://www.wikidata.org/wiki/Q724 | https://www.maine.gov/ | SBM | CoverME.gov | coverme.gov | State-specific | One-party | N/A omnibus (35-A M.R.S. §9301 = ISP-only) | ADAD limits; 8a–9p live; reassigned-numbers DB scrub required pre-dial (LD 2234/PL 2023 ch. 570; 10 M.R.S. §1499-B; eff. 8/9/2024; safe harbor §1499-B(6)(E-1)) | Yes (individual); verify |
| Maryland | State | MD | 24 | https://www.wikidata.org/wiki/Q1391 | https://www.maryland.gov/ | SBM | Maryland Health Connection | marylandhealthconnection.gov | State-specific | All-party | MD Online Data Privacy Act (Com. Law §14-4701, eff. 10/1/2025; applies 4/1/2026) | Stop the Spam Calls Act (§14-4501); 8a–8p, written consent, PRA | None identified |
| Massachusetts | State | MA | 25 | https://www.wikidata.org/wiki/Q771 | https://www.mass.gov/ | SBM | MA Health Connector | mahealthconnector.org | State-specific | All-party | N/A (bills pending) | AG regs; 8a–8p | None identified |
| Michigan | State | MI | 26 | https://www.wikidata.org/wiki/Q1166 | https://www.michigan.gov/ | FFM | HealthCare.gov | healthcare.gov | Federal (MLMS/RCL) | Mixed | N/A | Telecomm/solicitation law; from 9a | None identified |
| Minnesota | State | MN | 27 | https://www.wikidata.org/wiki/Q1527 | https://mn.gov/ | SBM | MNsure | mnsure.org | State-specific | One-party | MN Consumer Data Privacy Act (Minn. Stat. ch. 325O, eff. 7/31/2025) | From 9a to ~9p | None identified |
| Mississippi | State | MS | 28 | https://www.wikidata.org/wiki/Q1494 | https://www.ms.gov/ | FFM | HealthCare.gov | healthcare.gov | Federal (MLMS/RCL) | One-party | N/A | Miss. Code §77-3-723; 8a–8p, no Sun; HB 1350 bars outbound Medicare Advantage solicitation unless consumer-initiated (Miss. Code §77-3-707(4), eff. 7/1/2024) | Yes; verify |
| Missouri | State | MO | 29 | https://www.wikidata.org/wiki/Q1581 | https://www.mo.gov/ | FFM | HealthCare.gov | healthcare.gov | Federal (MLMS/RCL) | One-party | N/A | Federal only (8a–9p) | None identified |
| Montana | State | MT | 30 | https://www.wikidata.org/wiki/Q1212 | https://www.mt.gov/ | FFM | HealthCare.gov | healthcare.gov | Federal (MLMS/RCL) | All-party | MT Consumer Data Privacy Act (§30-14-2801, eff. 10/1/2024; cure sunset 4/1/2026) | Federal only (8a–9p) | Yes; verify |
| Nebraska | State | NE | 31 | https://www.wikidata.org/wiki/Q1553 | https://www.nebraska.gov/ | FFM | HealthCare.gov | healthcare.gov | Federal (MLMS/RCL) | One-party | NE Data Privacy Act (§87-1101, eff. 1/1/2025) | Federal only (8a–9p) | Yes; verify |
| Nevada | State | NV | 32 | https://www.wikidata.org/wiki/Q1227 | https://www.nv.gov/ | SBM | Nevada Health Link | nevadahealthlink.com | State-specific | All-party (phone; NRS 200.620); one-party in person | NRS 603A (SB220 opt-out; online §603A.300–.360; SB370 health §603A.400–.595) | NRS 598.0918(3); 8p–9a barred, texts | Yes; verify |
| New Hampshire | State | NH | 33 | https://www.wikidata.org/wiki/Q759 | https://www.nh.gov/ | FFM | HealthCare.gov | healthcare.gov | Federal (MLMS/RCL) | All-party | NH Privacy Act (RSA ch. 507-H, eff. 1/1/2025) | Federal only (8a–9p) | None identified |
| New Jersey | State | NJ | 34 | https://www.wikidata.org/wiki/Q1408 | https://nj.gov/ | SBM | Get Covered NJ | nj.gov/getcoverednj | State-specific | One-party | NJ Data Privacy Act (N.J.S.A. §56:8-166.4, eff. 1/15/2025) | Federal only (8a–9p) | Yes; verify |
| New Mexico | State | NM | 35 | https://www.wikidata.org/wiki/Q1522 | https://www.newmexico.gov/ | SBM | beWellnm | bewellnm.com | State-specific | One-party | N/A | Federal only (8a–9p) | None identified |
| New York | State | NY | 36 | https://www.wikidata.org/wiki/Q1384 | https://www.ny.gov/ | SBM | NY State of Health | nystateofhealth.ny.gov | State-specific | One-party | N/A omnibus (SHIELD = breach/security); NY HIPA (S929) VETOED 12/19/2025; successor S9269 pending 2026, not enacted | GBL §399-z (Gen. Bus. Law); 8a–9p; start-of-call/≤30-sec disclosure (ID, purpose, recording, DNC opt-out) | Yes; verify |
| North Carolina | State | NC | 37 | https://www.wikidata.org/wiki/Q1454 | https://www.nc.gov/ | FFM | HealthCare.gov | healthcare.gov | Federal (MLMS/RCL) | One-party | N/A (HB 462 pending — comprehensive privacy; also SB 757) | Federal only (8a–9p); HB 936 (robocall) pending | Yes (NC SoS); insurance agents/brokers exempt |
| North Dakota | State | ND | 38 | https://www.wikidata.org/wiki/Q1207 | https://www.nd.gov/ | FFM | HealthCare.gov | healthcare.gov | Federal (MLMS/RCL) | One-party | N/A | Federal only (8a–9p) | None identified |
| Ohio | State | OH | 39 | https://www.wikidata.org/wiki/Q1397 | https://ohio.gov/ | FFM | HealthCare.gov | healthcare.gov | Federal (MLMS/RCL) | One-party | N/A (OPPA not enacted) | Federal only (8a–9p) | Yes; verify |
| Oklahoma | State | OK | 40 | https://www.wikidata.org/wiki/Q1649 | https://oklahoma.gov/ | SBM-FP | Oklahoma SBE-FP | healthcare.gov | Federal (MLMS/RCL) | One-party | OK Consumer Data Privacy Act (SB 546, 75A Okla. Stat. §§300 et seq., eff. 1/1/2027; GLBA/HIPAA exempt) | OK Tel. Solicitation Act (15 O.S. §775C.1); 8a–8p, ≤3/24h; insurance agents exempt | Yes (15 O.S. §775A.3); ≤$250 |
| Oregon | State | OR | 41 | https://www.wikidata.org/wiki/Q824 | https://www.oregon.gov/ | SBM-FP | Oregon Health Insurance Marketplace | healthcare.gov | Federal (MLMS/RCL) | Mixed | OR Consumer Privacy Act (ORS 646A.570–589, eff. 7/1/2024; UOOM/geo 1/1/2026) | HB 3865 (ORS 646.561); 8a–8p, ≤3/24h, texts | Yes (OR DOJ) |
| Pennsylvania | State | PA | 42 | https://www.wikidata.org/wiki/Q1400 | https://www.pa.gov/ | SBM | Pennie | pennie.com | State-specific | All-party | N/A (bills pending) | Telemarketer Reg. Act (73 P.S. §2245); 8a–9p; legal holidays barred (§2245(a)(10)) | Yes (PA AG); verify |
| Rhode Island | State | RI | 44 | https://www.wikidata.org/wiki/Q1387 | https://www.ri.gov/ | SBM | HealthSource RI | healthsourceri.com | State-specific | One-party | RI Data Transparency & Privacy Protection Act (R.I. Gen. Laws ch. 6-48.1, eff. 1/1/2026; no cure) | 9a–6p M–F, 10a–5p Sat, no Sun/holiday (R.I. Gen. Laws §5-61-3.6) | Yes; verify |
| South Carolina | State | SC | 45 | https://www.wikidata.org/wiki/Q1456 | https://sc.gov/ | FFM | HealthCare.gov | healthcare.gov | Federal (MLMS/RCL) | One-party | N/A (bill pending) | Tel. Privacy Protection Act; 8a–9p | None identified |
| South Dakota | State | SD | 46 | https://www.wikidata.org/wiki/Q1211 | https://sd.gov/ | FFM | HealthCare.gov | healthcare.gov | Federal (MLMS/RCL) | One-party | N/A | Federal only (8a–9p) | Yes; verify |
| Tennessee | State | TN | 47 | https://www.wikidata.org/wiki/Q1509 | https://www.tn.gov/ | FFM | HealthCare.gov | healthcare.gov | Federal (MLMS/RCL) | One-party | TN Information Protection Act (T.C.A. §47-18-3301; insurers exempt) | §47-18-1526 + TN DNC (TPUC); 8a–9p | TPUC $500, due May 1 (§65-4-401) |
| Texas | State | TX | 48 | https://www.wikidata.org/wiki/Q1439 | https://www.texas.gov/ | FFM | HealthCare.gov | healthcare.gov | Federal (MLMS/RCL) | One-party | TX Data Privacy & Security Act (Bus. & Com. ch. 541, eff. 7/1/2024) | chs. 301–305 (SB 140, texts, DTPA PRA); 9a–9p M–Sa, 12–9p Su | Yes (Form 3401); $200 + $10k bond; opt-in/consent texts exempt from Ch. 302 reg (see App. A) |
| Utah | State | UT | 49 | https://www.wikidata.org/wiki/Q829 | https://www.utah.gov/ | FFM | HealthCare.gov | healthcare.gov | Federal (MLMS/RCL) | One-party | UT Consumer Privacy Act (Utah Code §13-61-101, eff. 12/31/2023; HB 418 7/1/2026) | No Sun; 8a–9p | Yes; verify |
| Vermont | State | VT | 50 | https://www.wikidata.org/wiki/Q16551 | https://vermont.gov/ | SBM | Vermont Health Connect | healthconnect.vermont.gov | State-specific | One-party | VT Data Privacy & Online Surveillance Act (S.71, eff. 1/1/2028; replaces vetoed H.121) | Federal only (8a–9p) | Yes (no renewal); verify |
| Virginia | State | VA | 51 | https://www.wikidata.org/wiki/Q1370 | https://www.virginia.gov/ | SBM | Virginia's Insurance Marketplace | marketplace.virginia.gov | State-specific | One-party | VA Consumer Data Protection Act (Va. Code §59.1-575, eff. 1/1/2023; health amend. 7/1/2025; geo-sale ban 7/1/2026, SB 338 (2026 sess.)/Ch. 820, amends §59.1-578) | Federal only (8a–9p) | None identified |
| Washington | State | WA | 53 | https://www.wikidata.org/wiki/Q1223 | https://www.wa.gov/ | SBM | Washington Healthplanfinder | wahealthplanfinder.org | State-specific | All-party | My Health My Data Act (RCW 19.373) health; biometric RCW 19.375; NO omnibus | CEMA (RCW 19.190) + RCW 19.158.110(4); <8a/>8p barred | Yes (RCW 19.158) + bond; verify exempt |
| West Virginia | State | WV | 54 | https://www.wikidata.org/wiki/Q1371 | https://www.wv.gov/ | FFM | HealthCare.gov | healthcare.gov | Federal (MLMS/RCL) | One-party | N/A | Federal only (8a–9p) | Yes; verify |
| Wisconsin | State | WI | 55 | https://www.wikidata.org/wiki/Q1537 | https://www.wisconsin.gov/ | FFM | HealthCare.gov | healthcare.gov | Federal (MLMS/RCL) | One-party | N/A (bills pending) | Caller-ID law (2025); 8a–9p | Yes; verify |
| Wyoming | State | WY | 56 | https://www.wikidata.org/wiki/Q1214 | https://www.wyo.gov/ | FFM | HealthCare.gov | healthcare.gov | Federal (MLMS/RCL) | One-party | N/A | 8a–8p | Yes (no renewal); verify |
| Puerto Rico | Territory | PR | 72 | https://www.wikidata.org/wiki/Q1183 | https://www.pr.gov/ | NONE | — | N/A | N/A | All-party (33 L.P.R.A. §5235; Const. Art. II §10) | N/A (HB/PC 1548 & SB 822 failed; Act 40-2024 = cybersecurity, govt + contractors) | Act 210-2003 (10 L.P.R.A. §§4031–4038); residential 9a–9p | No reg.; recordkeeping registry §4034; insurers exempt §4035(d) (registry-only; still bound by §4033 abusive-practice rules + 9a–9p hours) |
| US Virgin Islands | Territory | VI | 78 | https://www.wikidata.org/wiki/Q11703 | https://www.vi.gov/ | NONE | — | N/A | N/A | Needs verification | N/A (breach + ID-theft only) | 12A V.I.C. ch. 6 (§§303,310); no calling-hours provision (federal 8a–9p default) | Needs verification |
| Guam | Territory | GU | 66 | https://www.wikidata.org/wiki/Q16635 | https://www.guam.gov/ | NONE | — | N/A | N/A | Needs verification | N/A (breach 9 GCA ch. 48 only) | 5 GCA ch. 32 (§§32301–32308) — no calling-hours provision (federal 8a–9p default) | Yes (5 GCA §§32301–32308); verify |
| American Samoa | Territory | AS | 60 | https://www.wikidata.org/wiki/Q16641 | https://www.americansamoa.gov/ | NONE | — | N/A | N/A | Needs verification | N/A | Federal TSR/TCPA + DNC only | None identified |
| Northern Mariana Islands | Territory | MP | 69 | https://www.wikidata.org/wiki/Q16644 | https://governor.cnmi.gov/ | NONE | — | N/A | N/A | Needs verification | N/A (CNMI Const. art. I §10 only) | Federal TSR/TCPA + DNC only | None identified |

**Same for all 56 (not columnized):** `cms_medicare` = Applies · `last_verified` = 2026-06-20 · `confidence` = High (states + DC) / Med (territories).

`wikidata_url` is the stable entity key and the ready-to-use schema.org `sameAs` value for `areaServed` (one Wikidata entity per jurisdiction; e.g., Georgia = https://www.wikidata.org/wiki/Q1428). Strip to the trailing `Q…` if a bare QID is needed elsewhere.

## 2. Insurance regulators (`doi_url`)

Florida is split (carrier regulator vs. producer-licensing authority); both captured. Join on `usps`.

| jurisdiction | usps | regulator | doi_url | producer_licensing (if split) | note |
|---|---|---|---|---|---|
| Alabama | AL | Alabama Dept. of Insurance | https://www.aldoi.gov/ | — | — |
| Alaska | AK | Division of Insurance (DCCED) | https://insurance.alaska.gov/ | — | vanity addr; content at commerce.alaska.gov/web/ins/ |
| Arizona | AZ | Dept. of Insurance & Financial Institutions | https://difi.az.gov/ | — | — |
| Arkansas | AR | Arkansas Insurance Dept. | https://insurance.arkansas.gov/ | — | — |
| California | CA | California Dept. of Insurance | https://www.insurance.ca.gov/ | — | — |
| Colorado | CO | Division of Insurance (DORA) | https://doi.colorado.gov/ | — | — |
| Connecticut | CT | Connecticut Insurance Dept. | https://portal.ct.gov/cid | — | — |
| Delaware | DE | Delaware Dept. of Insurance | https://insurance.delaware.gov/ | — | — |
| District of Columbia | DC | Dept. of Insurance, Securities & Banking | https://disb.dc.gov/ | — | — |
| Florida | FL | OIR (carriers/solvency/rates) | https://floir.gov/ | DFS/CFO, Div. of Agent & Agency Services: https://www.myfloridacfo.com/division/agents/ | legacy floir.com superseded; all agent licensing → DFS/CFO |
| Georgia | GA | Office of Commissioner of Insurance & Safety Fire | https://oci.georgia.gov/ | — | — |
| Hawaii | HI | Insurance Division (DCCA) | https://cca.hawaii.gov/ins/ | — | — |
| Idaho | ID | Idaho Dept. of Insurance | https://doi.idaho.gov/ | — | — |
| Illinois | IL | Illinois Dept. of Insurance | https://idoi.illinois.gov/ | — | insurance.illinois.gov also resolves |
| Indiana | IN | Indiana Dept. of Insurance | https://www.in.gov/idoi/ | — | — |
| Iowa | IA | Iowa Insurance Division | https://iid.iowa.gov/ | — | — |
| Kansas | KS | Kansas Dept. of Insurance | https://insurance.kansas.gov/ | — | — |
| Kentucky | KY | Kentucky Dept. of Insurance | https://insurance.ky.gov/ | — | — |
| Louisiana | LA | Louisiana Dept. of Insurance | https://www.ldi.la.gov/ | — | — |
| Maine | ME | Bureau of Insurance (PFR) | https://www.maine.gov/pfr/insurance/home | — | moved 2022; update old links |
| Maryland | MD | Maryland Insurance Administration | https://insurance.maryland.gov/ | — | — |
| Massachusetts | MA | Division of Insurance (OCABR) | https://www.mass.gov/orgs/division-of-insurance | — | — |
| Michigan | MI | Dept. of Insurance & Financial Services | https://www.michigan.gov/difs | — | — |
| Minnesota | MN | Minnesota Dept. of Commerce | https://mn.gov/commerce/ | — | insurance div: mn.gov/commerce/insurance/ |
| Mississippi | MS | Mississippi Insurance Dept. | https://www.mid.ms.gov/ | — | — |
| Missouri | MO | Dept. of Commerce & Insurance | https://insurance.mo.gov/ | — | — |
| Montana | MT | Commissioner of Securities & Insurance | https://csimt.gov/ | — | — |
| Nebraska | NE | Nebraska Dept. of Insurance | https://doi.nebraska.gov/ | — | — |
| Nevada | NV | Nevada Division of Insurance | https://doi.nv.gov/ | — | — |
| New Hampshire | NH | New Hampshire Insurance Dept. | https://www.insurance.nh.gov/ | — | nh.gov/insurance redirects here |
| New Jersey | NJ | Dept. of Banking & Insurance | https://www.nj.gov/dobi/ | — | root redirects to /dobi/index.html |
| New Mexico | NM | Office of Superintendent of Insurance | https://www.osi.state.nm.us/ | — | still osi.state.nm.us |
| New York | NY | Dept. of Financial Services | https://www.dfs.ny.gov/ | — | — |
| North Carolina | NC | North Carolina Dept. of Insurance | https://www.ncdoi.gov/ | — | — |
| North Dakota | ND | North Dakota Insurance Dept. | https://www.insurance.nd.gov/ | — | — |
| Ohio | OH | Ohio Dept. of Insurance | https://insurance.ohio.gov/ | — | — |
| Oklahoma | OK | Oklahoma Insurance Dept. | https://www.oid.ok.gov/ | — | — |
| Oregon | OR | Division of Financial Regulation (DCBS) | https://dfr.oregon.gov/ | — | — |
| Pennsylvania | PA | Pennsylvania Insurance Dept. | https://www.pa.gov/agencies/insurance | — | migrated from insurance.pa.gov (legacy still resolves) |
| Rhode Island | RI | Insurance Division (DBR) | https://dbr.ri.gov/insurance-overview | — | — |
| South Carolina | SC | South Carolina Dept. of Insurance | https://doi.sc.gov/ | — | — |
| South Dakota | SD | Division of Insurance (DLR) | https://dlr.sd.gov/insurance/ | — | — |
| Tennessee | TN | Insurance Division (Commerce & Insurance) | https://www.tn.gov/commerce/insurance-division.html | — | — |
| Texas | TX | Texas Dept. of Insurance | https://www.tdi.texas.gov/ | — | — |
| Utah | UT | Utah Insurance Dept. | https://insurance.utah.gov/ | — | — |
| Vermont | VT | Insurance Division (DFR) | https://dfr.vermont.gov/insurance | — | — |
| Virginia | VA | SCC — Bureau of Insurance | https://www.scc.virginia.gov/regulated-industries/bureau-of-insurance/ | — | — |
| Washington | WA | Office of the Insurance Commissioner | https://www.insurance.wa.gov/ | — | — |
| West Virginia | WV | Offices of the Insurance Commissioner | https://www.wvinsurance.gov/ | — | — |
| Wisconsin | WI | Office of the Commissioner of Insurance | https://oci.wi.gov/ | — | — |
| Wyoming | WY | Wyoming Dept. of Insurance | https://doi.wyo.gov/ | — | — |
| Puerto Rico | PR | Oficina del Comisionado de Seguros | https://www.ocs.pr.gov/ | — | — |
| US Virgin Islands | VI | Lt. Governor — Banking, Insurance & Financial Regulation | https://ltg.gov.vi/departments/banking-insurance-and-financial-regulation/ | — | — |
| Guam | GU | Dept. of Revenue & Taxation — Banking & Insurance Branch | https://www.guamtax.com/ | — | board page: guamtax.com/bib/ |
| American Samoa | AS | Office of the Insurance Commissioner | https://www.americansamoa.gov/insurance | — | Med — no dedicated insurance domain |
| Northern Mariana Islands | MP | Office of the Insurance Commissioner (Commerce) | https://commerce.gov.mp/ | — | — |

## 3. ACA tier groupings (QA cross-check)

- **SBM (21):** CA, CO, CT, DC, GA, ID, IL, KY, ME, MD, MA, MN, NV, NJ, NM, NY, PA, RI, VT, VA, WA
- **SBM-FP (3):** AR, OR, OK — all enroll via healthcare.gov
- **FFM (27):** AL, AK, AZ, DE, FL, HI, IN, IA, KS, LA, MI, MS, MO, MT, NE, NH, NC, ND, OH, SC, SD, TN, TX, UT, WV, WI, WY
- **NONE (5):** PR, VI, GU, AS, MP — no ACA exchange (ACA §1323 block-grant funding in lieu)
- Check: 21 + 3 + 27 = 51 (states+DC); + 5 = 56. FFM = 27 (30 healthcare.gov states − 3 SBM-FP); reject "28".

## 4. Call-recording consent (wiretap class)

- **All-party (11):** CA, DE, FL, IL, MD, MA, MT, NV, NH, PA, WA (NV = all-party for phone, one-party in person).
- **Mixed / contested (4):** CT (criminal one-party; civil all-party for phone → treat all-party) · OR (one-party phone, all-party in person) · HI (one-party unless device in a private place) · MI (one-party for participants; now settled per *Fisher v. Perron*, 6th Cir. 2022; *Sullivan v. Gray*, historically contested).
- **All other states:** One-party. **Territories:** PR = **All-party** (33 L.P.R.A. §5235); VI/GU/AS/MP still **Needs verification** (research leanings — VI/GU/AS one-party federal default, MP all-party per CNMI Const. art. I §3(b) — in Appendix C §A).
- **Operational rule:** CMS 42 CFR §422.2274(g)(2)(ii) requires recording all Medicare marketing/sales/enrollment calls in full (incl. web-based); purely administrative/coordination calls (e.g., scheduling, welcome-packet confirmations) are excluded, and scope has been limited to marketing/sales/enrollment since the CY2024 rule (88 FR 22120). Retention (CY2027 Final Rule, eff. 6/1/2026; applies to CY2027 marketing from 10/1/2026): marketing/sales calls **6 yrs** (audio yrs 1–3; audio-or-transcript yrs 4–6) per §422.2274(g)(2)(ii) / §423.2274(g)(2)(ii); enrollment records **10 yrs** (rule preamble + FDR retention, not codified in (g)(2)(ii)). CY2027 also eliminated the 48-hr SOA wait (SOA still required). Cross-border → strictest state controls. So treat **All-party + Mixed as all-party** and play a recorded-call disclosure on **every** call (one-party states included). The all-party list spans 11–12 across surveys depending on NV; MI distinction is moot under universal disclosure.

## 5. Scheduled transitions & volatility

Pre-load these with future `effective_date`s (do not apply until effective):

| usps | field | current (→ until) | next | effective_date | source |
|---|---|---|---|---|---|
| OR | aca_tier | SBM-FP (→ 2026-10-31) | SBM | 2026-11-01 | OR SB 972 — full SBM for PY2027 |
| OR | broker_pathway | Federal (MLMS/RCL) | State-specific | 2026-11-01 | OR launches own platform |
| OR | aca_enrollment_url | healthcare.gov | (OR state domain) | 2026-11-01 | confirm domain at launch |
| OK | aca_tier | SBM-FP (→ 2027-10-31) | SBM | 2027-11-01 | OK HB 1512 / OID — full SBM for PY2028 |
| OK | broker_pathway | Federal (MLMS/RCL) | State-specific | 2027-11-01 | OK launches own platform |
| OK | aca_enrollment_url | healthcare.gov | (OK state domain) | 2027-11-01 | confirm domain at launch |

Monitor for new transitions: MS, NC, WI, MO. Re-verify: CMS State-based Exchanges list + KFF marketplace types each fall; full `doi_url` table quarterly; territories monthly. Legacy URL swaps to apply if pre-existing: floir.com→floir.gov, insurance.pa.gov→pa.gov/agencies/insurance, nh.gov/insurance→insurance.nh.gov.

**Privacy/telemarketing transitions to pre-load:** AR `state_privacy_laws` → HB 1717 (Children & Teens' OPPA) in force **2026-07-01**; VA geolocation-sale ban in force **2026-07-01** (SB 338); CT `state_privacy_laws` → SB 4/PA 26-64 (precise-geolocation-sale ban + data-broker registration + surveillance-pricing limits) in force **2026-10-01** (data-broker registration **2027-01-01**); LA `state_privacy_laws` → LA Data Privacy Act in force **2027-01-01**; OK `state_privacy_laws` → OK Consumer Data Privacy Act in force **2027-01-01**; AL `state_privacy_laws` → AL Personal Data Protection Act in force **2027-05-01**; VT `state_privacy_laws` → S.71 (Data Privacy & Online Surveillance Act) in force **2028-01-01**.

## 6. Versioned data model

Treat `aca_tier`, `aca_platform`, `aca_enrollment_url`, `broker_pathway` as time-versioned (a value can flip mid-plan-year — OK did, eff. 2026-05-01). Keep static identity fields (`usps`, `fips`, `wikidata_url`, `official_website`, `type`) in a separate non-versioned table.

```
jurisdiction_state_period
  usps           TEXT   -- join key
  field          TEXT   -- 'aca_tier' | 'broker_pathway' | ...
  value          TEXT
  effective_date DATE   -- inclusive start
  end_date       DATE   -- NULL = current
  source_url     TEXT
  last_verified  DATE
```

Resolve as-of: `effective_date <= :as_of AND (end_date IS NULL OR end_date >= :as_of)`.

Note: `state_privacy_laws` is also time-versioned — AR/VA/CT/LA/OK/AL/VT carry future `effective_date`s (see §5). The other two added fields (`state_mini_tcpa`, `state_telemarketer_registration`) are treated as current-state with `last_verified` = 2026-06-20.

## 7. Data dictionary

| field | type | enum / format | definition | source |
|---|---|---|---|---|
| jurisdiction | string | — | State / federal district / territory name | — |
| type | enum | State \| Federal District \| Territory | DC = Federal District; PR/VI/GU/AS/MP = Territory | Census / statute |
| usps | string(2) | postal code | Stable join key | USPS Pub. 28 / Census ANSI |
| fips | string(2) | 2-digit, zero-padded | Stable join key | Census ANSI |
| wikidata_url | URL | https://www.wikidata.org/wiki/Q… | State/territory/district entity URL (not a same-named city/country); ready-to-use schema.org `sameAs` value for areaServed | Wikidata |
| official_website | URL | https | Canonical primary government portal | state/territory portal |
| doi_url | URL | https | Insurance-regulator homepage / division landing | NAIC + agency |
| producer_licensing | URL \| — | https | Separate producer-licensing authority where split (FL only) | agency |
| aca_tier | enum | SBM \| SBM-FP \| FFM \| NONE | PY2026 marketplace model; NONE = territories | CMS State-based Exchanges |
| aca_platform | string \| — | — | Marketplace brand; — for territories | marketplace site |
| aca_enrollment_url | URL \| N/A | https | healthcare.gov for FFM + SBM-FP; N/A territories | marketplace site |
| broker_pathway | enum | Federal (MLMS/RCL) \| State-specific \| N/A | Agent registration route | CMS MLMS / SBM |
| call_recording | enum | One-party \| All-party \| Mixed \| Needs verification | Wiretap consent class (legal class, not operational treatment) | 50-state surveys |
| state_privacy_laws | string | statute short-name(s) + cite (+ eff-date if future); "N/A …" | Consumer-facing privacy statutes only — comprehensive / online-privacy-policy / consumer-health-data; **excludes** breach-notification + federal (HIPAA/GLBA). N/A = affirmatively-verified absence | state legislatures/codes; IAPP/Foley/Mayer Brown trackers (App. B) |
| state_mini_tcpa | string | statute + calling-hours; "Federal only (8a–9p)" | State telemarketing/solicitation calling-hours statute. **Distinct from `call_recording`** (wiretap class) | state codes; mini-TCPA trackers (App. B) |
| state_telemarketer_registration | string | "Yes (cite)" \| "None identified" \| "Needs verification" | State telephonic-seller/solicitor registration requirement (separate from calling-conduct rules); note producer exemptions | state AG/SoS; DNC.com (App. B) |

## 8. Conflict log (provenance)

| field | conflicting values | primary source | chosen | why |
|---|---|---|---|---|
| DC wikidata_url | Q61 vs Q3551781 | wikidata.org/wiki/Q3551781 ("federal district…") | **Q3551781** | Q61 is the city — rejected |
| FFM count | 26 / 27 / 28 | CMS 2026 OEP snapshot (30 healthcare.gov states) − 3 SBM-FP | **27** | 30 − 3 = 27 |
| Georgia wikidata_url | Q1428 vs Q230 | wikidata.org/wiki/Q1428 ("state…") | **Q1428** | Q230 is the country |
| Territory FIPS | various | Census ANSI | **AS 60, GU 66, MP 69, PR 72, VI 78, DC 11** | matches ANSI |
| FL regulator | single vs split | floir.gov + myfloridacfo.com | **split** | OIR = carriers; DFS/CFO = producers |
| FL / WA / HI / AR / OK / PR / CNMI / WY portal | www/non-www & domain variants | live fetch | **myflorida.gov / wa.gov / portal.ehawaii.gov / arkansas.gov / oklahoma.gov / pr.gov / governor.cnmi.gov / wyo.gov** | canonical resolving form |
| PA doi_url | insurance.pa.gov vs pa.gov/agencies/insurance | live fetch | **pa.gov/agencies/insurance** | current home (legacy resolves) |
| OK tier | FFM vs SBM-FP | OID Special Notice 01-2026 / HB 1512 | **SBM-FP (eff. 2026-05-01)** | confirmed; healthcare.gov retained |
| Vermont wikidata_url | Q16551 (high numeral) | wikidata.org/wiki/Q16551 ("state…") | **Q16551** | correct, not an error |
| doi_url legacy | floir.com / insurance.pa.gov / nh.gov/insurance | live agency fetch | **floir.gov / pa.gov/agencies/insurance / insurance.nh.gov** | old domains superseded |
| PR call_recording cite | §4809 / §2160 / §5237 / §5235 | Justia 2012 Penal Code §5235 + Const. Art. II §10 | **§5235 (all-party)** | §4809 recodified to §5235; §5237 a different offense; §2160 telephone-specific, repeal status uncertain |

## 9. Sources

CMS State-based Exchanges (PY2026: 21 SBE + 3 SBE-FP) — cms.gov/cciio/resources/fact-sheets-and-faqs/state-marketplaces · CMS 2026 OEP National Snapshot (30 healthcare.gov states) — cms.gov/newsroom/fact-sheets · CMS marketplaces-by-type map — cms.gov/marketplace/in-person-assisters/training-webinars · 42 CFR §422.2274 (eCFR) · Census ANSI codes — census.gov/library/reference/code-lists/ansi · Wikidata (per-entity) · NAIC State Insurance Departments — content.naic.org/state-insurance-departments · Oklahoma OID Special Notice 01-2026 (HB 1512) — oid.ok.gov · Oregon SB 972 — dfr.oregon.gov · Florida FLOIR floir.gov + MyFloridaCFO myfloridacfo.com/division/agents · call-recording surveys (Justia 50-State, Matthiesen Wickert & Lehrer, Reporters Committee) · ACA §1323 territories — CRS R47601 / MACPAC · CMS CY2027 MA/Part D Final Rule (call-recording retention 6 yr) — federalregister.gov 2026-06600 + eCFR 42 CFR §422.2274 / §423.2274 · VT S.71 — legislature.vermont.gov · LA SB 386/Act 502 — legis.la.gov · VA SB 338 (Ch. 820) — lis.virginia.gov · AR HB 1717/Act 952 — arkleg.state.ar.us · NC HB 462 / HB 936 — ncleg.gov · NY S929 veto / S9269 — nysenate.gov · TX SB 140 / Ecommerce Marketers Alliance v. Texas (1:25-cv-01401, W.D. Tex.) + TX SoS Form-3400 FAQ — sos.state.tx.us · FL Telemarketing Act (Fla. Stat. §§501.604, 501.608) + FDACS Affidavit of Exemption — fdacs.gov · IL Telephone Solicitations Act (815 ILCS 413) + Automatic Telephone Dialers Act (815 ILCS 305) — ilga.gov · MS HB 1350 (Medicare Advantage telephone-solicitation bar, Miss. Code §77-3-707) — legislature.ms.gov · CT SB 4/Public Act 26-64 (geolocation-sale ban; data-broker registration; surveillance pricing) + SB 1295/PA 25-153 (CTDPA threshold drop) — cga.ct.gov · ME LD 2234/PL 2023 ch. 570 (reassigned-numbers DB scrub; 10 M.R.S. §1499-B; eff. 8/9/2024 per Legislative Digest) — legislature.maine.gov / lldc.mainelegislature.org · PR Penal Code §5235 (recording — all-party) + PR Const. Art. II §10 + PR Act 210-2003 §§4033–4035 (registry §4034 / insurer exemption §4035(d)) — Justia Laws of Puerto Rico · Guam Compiler of Laws 5 GCA ch. 32 §§32301–32308 (no calling-hours provision) — guamcourts.gov · KY KRS 367.46955(16) + §367.46953 (10a–9p; first-30-sec disclosure) — apps.legislature.ky.gov · PA Telemarketer Registration Act 73 P.S. §2245 (8a–9p; legal-holiday bar) — attorneygeneral.gov · CMS CY2024 MA/Part D Final Rule (TPMO recording scope limited to marketing/sales/enrollment) — federalregister.gov 88 FR 22120 · AR marketplace "My Arkansas Health Insurance Marketplace" — myarinsurance.com (informational only; eligibility/enrollment via healthcare.gov).

## Change log

Reverse-chronological record of *what changed and when*. Provenance for individual disputed values lives in §8 (Conflict log) and Appendix A; open controversies & deferred items live in Appendix C — this section is the edit history, not the dispute log. Revision scheme: `vYYYY.MM.DD[-rN]`.

| Rev | Date | Scope | Change | Basis |
|---|---|---|---|---|
| v2026.06.20-r7 | 2026-06-20 | DOC | Housekeeping: fixed stale §4 cross-ref (Appendix A → C §A); harmonized verified-registration set to **TN/OR/TX/OK** (intro + Appendix A) per §1 primary cites; removed a resolved item lingering in Appendix A open-items; minor intro/preamble polish | editorial (synthesis thread) |
| v2026.06.20-r6 | 2026-06-20 | DOC | Added **Appendix C** (open controversies & deferred-verification register) recording inter-thread disagreements + pinned next steps; condensed the r5 territory-recording & VA open items in Appendix A to Appendix-C pointers | editorial (synthesis thread) |
| v2026.06.20-r5 | 2026-06-20 | PR | `call_recording`: "Needs verification" → **All-party** (33 L.P.R.A. §5235, recodified from §4809; Const. Art. II §10) | Justia/OGP primary; 6-of-7 reports |
| v2026.06.20-r5 | 2026-06-20 | PR | `state_telemarketer_registration`: **corrected** registry §4033→**§4034**, insurer exemption §4034(d)→**§4035(d)** (registry-only) — *reverses the r4 CLIClaw value; vindicates §4035(d)* | Justia 2024 L.P.R.A. (primary) |
| v2026.06.20-r5 | 2026-06-20 | GU | `state_mini_tcpa`: "hours: needs verification" → **no calling-hours provision (federal 8a–9p default)** | Guam Compiler of Laws (primary) |
| v2026.06.20-r5 | 2026-06-20 | KY | `state_mini_tcpa`: "Quiet hours from 10a" → **10a–9p (KRS 367.46955(16))** + first-30-sec disclosure (§367.46953) | KY Legislature (primary) |
| v2026.06.20-r5 | 2026-06-20 | ME | `state_mini_tcpa`: LD 2234 effective date **7/16/2024 → 8/9/2024** (non-emergency; 131st Leg. 2nd Reg. Sess. general date) + safe harbor §1499-B(6)(E-1) | ME Legislature Digest (primary) |
| v2026.06.20-r5 | 2026-06-20 | PA | `state_mini_tcpa`: "8a–9p, no Sun a.m." → **8a–9p; legal holidays barred (73 P.S. §2245(a)(10))** | PA TRA / 73 P.S. §2245 (primary) |
| v2026.06.20-r5 | 2026-06-20 | MS | `state_mini_tcpa`: hours cite "HB 1225" → **Miss. Code §77-3-723** (HB 1225 moved enforcement to AG; §77-3-723 sets hours) | Miss. Code (primary) |
| v2026.06.20-r5 | 2026-06-20 | NY | `state_mini_tcpa`: pinned **GBL §399-z** + start-of-call/≤30-sec disclosure (was generic "Gen. Bus. Law") | NY GBL §399-z (primary) |
| v2026.06.20-r5 | 2026-06-20 | PR | `state_privacy_laws`: Act 40-2024 note "govt only" → **cybersecurity, govt + contractors** | OGP Act 40-2024 + named-firm secondary |
| v2026.06.20-r5 | 2026-06-20 | CA | `state_telemarketer_registration`: "broad exemptions" → **insurance-licensed exempt (B&P §17511.1(e)); self-executing** | Cal. B&P §17511.1 (primary) |
| v2026.06.20-r4 | 2026-06-20 | MS | `state_mini_tcpa`: added **HB 1350** — outbound Medicare Advantage solicitation barred unless consumer-initiated (Miss. Code §77-3-707(4), eff. 7/1/2024) | MS Legislature (primary) |
| v2026.06.20-r4 | 2026-06-20 | CT | `state_privacy_laws`: added **SB 4/PA 26-64** (geo-sale ban + data-broker reg + surveillance-pricing, eff. 10/1/2026; broker reg 1/1/2027); pinned threshold drop to SB 1295/PA 25-153 | Inside Privacy (tier-2) + CGA |
| v2026.06.20-r4 | 2026-06-20 | OK | `state_privacy_laws`: pinned codified section **75A Okla. Stat. §§300 et seq.** (SB 546) — closes open item | OK Legislature enrolled bill |
| v2026.06.20-r4 | 2026-06-20 | VA | `state_privacy_laws`: SB 338 reverify **resolved** (real; Ch. 820, eff. 7/1/2026); corrected to **2026 sess.**, amends §59.1-578 | VA LIS (primary) |
| v2026.06.20-r4 | 2026-06-20 | ME | `state_mini_tcpa`: added reassigned-numbers DB scrub (**LD 2234**/PL 2023 ch. 570; 10 M.R.S. §1499-B; eff. 7/16/2024) | ME Legislature summary + tier-3 |
| v2026.06.20-r4 | 2026-06-20 | VI | `state_mini_tcpa`: "hours: needs verification" → **no calling-hours provision (federal default)** — resolves open flag (secondary: Cornell LII + CLIClaw; confirm vs primary V.I. Code) | secondary converge |
| v2026.06.20-r4 | 2026-06-20 | PR | `state_telemarketer_registration`: section cite corrected — registry **§4033**, insurer exemption **§4034(d)** (was "§4034 recordkeeping"; refutes the §4035(d) claim; tier-3, confirm vs L.P.R.A.) | CLIClaw (tier-3) |
| v2026.06.20-r4 | 2026-06-20 | §4 | Recording-scope: added admin/coordination-call carve-out; noted scope narrowed in **CY2024 rule (88 FR 22120)**, not CY2027 (CY2027 changed retention only) | eCFR §422.2274 + 88 FR 22120 |
| v2026.06.20-r4 | 2026-06-20 | §4 | `call_recording` MI: added **Fisher v. Perron** (6th Cir. 2022) — one-party for participants now settled; §1 class unchanged ("Mixed") | 6th Cir. (primary) |
| v2026.06.20-r3 | 2026-06-20 | TX | `state_telemarketer_registration`: consent-based opt-in texts exempt from Ch. 302 reg (Ecommerce Marketers Alliance v. TX, 1:25-cv-01401, order 11/17/2025; SoS FAQ); `state_mini_tcpa`: added DTPA PRA | court docket + TX SoS |
| v2026.06.20-r3 | 2026-06-20 | FL | `state_telemarketer_registration`: producer exemption (§501.604(8)) not self-executing — FDACS Affidavit of Exemption required before calling | Fla. Stat. §§501.604/.608 + FDACS |
| v2026.06.20-r3 | 2026-06-20 | AR | `aca_platform` brand → **My Arkansas Health Insurance Marketplace** (myarinsurance.com informational; enrollment still healthcare.gov) | CMS |
| v2026.06.20-r3 | 2026-06-20 | IL | `state_mini_tcpa`: split live 8a–9p (815 ILCS 413/15) vs autodialer 9a–9p (815 ILCS 305/15) | Illinois Compiled Statutes |
| v2026.06.20-r3 | 2026-06-20 | AL | `state_privacy_laws`: added Act 2026-552; signing date 4/16 → 4/17 (per AL Legislature record) | ALISON |
| v2026.06.20-r2 | 2026-06-20 | AR | `state_privacy_laws`: removed ADRSTA/SB 258 (died 5/5/2025; AI bill, never enacted); retained HB 1717/Act 952 (eff. 7/1/2026) | ArkLeg (primary) |
| v2026.06.20-r2 | 2026-06-20 | §4 | Recording retention 10 yr → **6 yr** marketing/sales (audio yrs 1–3; audio/transcript yrs 4–6); enrollment 10 yr; SOA 48-hr wait removed | CMS CY2027 Final Rule; eCFR §422/§423.2274 |
| v2026.06.20-r2 | 2026-06-20 | VA | `state_privacy_laws` geo-sale ban 7/1/2027 → **7/1/2026** (SB 338/Ch. 820) | VA LIS (primary) |
| v2026.06.20-r2 | 2026-06-20 | VT | `state_privacy_laws` N/A → **S.71** (eff. 1/1/2028) | VT Legislature; Gov. release |
| v2026.06.20-r2 | 2026-06-20 | LA | `state_privacy_laws` N/A → **SB 386/Act 502** (eff. 1/1/2027) | LA Legislature (primary) |
| v2026.06.20-r2 | 2026-06-20 | NC | `state_privacy_laws` → HB 462 (privacy); HB 936 reassigned to `state_mini_tcpa` (robocall) | NCLEG (primary) |
| v2026.06.20-r2 | 2026-06-20 | NY | `state_privacy_laws` S929 "uncertain" → **VETOED 12/19/2025**; S9269 pending | validator consensus (4/4) |
| v2026.06.20-r2 | 2026-06-20 | RI | `state_mini_tcpa` "Federal only" → 9a–6p M–F, 10a–5p Sat, no Sun/holiday (§5-61-3.6) | 2 validators converge |
| v2026.06.20-r2 | 2026-06-20 | NV | `call_recording`: added statute cite (NRS 200.620); class unchanged | 2 validators |
| v2026.06.20-r1 | 2026-06-20 | §1 (all rows) | Added `state_privacy_laws`, `state_mini_tcpa`, `state_telemarketer_registration` columns | live-web verified |
| v2026.06.20-r1 | 2026-06-20 | AR / OK / AL | `state_privacy_laws` corrected from N/A → enacted-but-not-in-force (AR later refined in r2) | trackers + bill text |
| v2026.06.20-r1 | 2026-06-20 | OK | `aca_tier` FFM → SBM-FP (mid-PY flip, eff. 2026-05-01) | OID Special Notice 01-2026 |
| baseline | ≤2026-06-20 | all | Initial 56-jurisdiction compilation | CMS, Census, Wikidata, NAIC |

## Caveats

Territory rows are **Med confidence**: regulator pages sit on broad portals (AS has no dedicated insurance domain) and territory wiretap statutes aren't in 50-state surveys — both need verification; keep territory `call_recording` as a hard block on outbound calling until cleared (PR cleared r5 → all-party, §5235; VI/GU/AS/MP still pending). `official_website`: disputed portals (FL, WA, HI, AR, OK, PR, CNMI, WY) resolved via live check (see conflict log); others from source-report consensus — www/non-www variants generally both resolve. Call-recording values are the general consent class; states apply privacy/implied-consent qualifiers. The settled-law 6-state TPMO reference table is maintained separately and out of scope here.

---

## Appendix A — Privacy & telemarketing columns: conflict / uncertainty log

Scope note: covers only the three privacy/telemarketing columns in §1.

- **AR / OK / AL / LA / VT — comprehensive privacy status:** Enacted-but-not-yet-in-force — OK **Consumer Data Privacy Act** (SB 546, signed 3/20/2026, eff. 1/1/2027), AL **Personal Data Protection Act** (HB 351/Act 2026-552, signed 4/17/2026 [AL Legislature record; some sources 4/16], eff. 5/1/2027), LA **Data Privacy Act** (SB 386/Act 502, signed 5/29/2026, eff. 1/1/2027; La. R.S. 51:1780.1–.5), VT **Data Privacy & Online Surveillance Act** (S.71, signed 6/16/2026, eff. 1/1/2028; replaces vetoed H.121). **AR correction (primary-verified 2026-06-20):** SB 258 (**ADRSTA**, an AI/algorithmic-discrimination bill) **died on the Senate calendar 5/5/2025 — never enacted**; AR's only privacy law eff. 7/1/2026 is **HB 1717/Act 952** (Children & Teens' OPPA, Ark. Code tit. 4 ch. 88 subch. 15). Trackers conflate AR's **breach** law (PIPA, Ark. Code §4-110) and the dead SB 258 with the teen-privacy act — do **not** cite §4-110 or ADRSTA for AR's enacted law. AL codified section not yet pinned (Act cited); confirm at sign-off. **OK now pinned (r4):** 75A Okla. Stat. §§300 et seq. (SB 546) — enrolled bill directs codification at 75A §§300– (upper bound 306–315 unsettled per the bill's "unless a duplication in numbering is created" hedge).
- **TN:** codified **§47-18-3301 et seq.** (not the enrolled-bill 3201 series; Justia shows a stale "Vehicle Immobilization" part-heading over the TIPA sections). Matches the settled-law table's locked decision.
- **WA:** health-data-only (**MHMDA**, RCW 19.373); **no** omnibus comprehensive law — frequently mislabeled as CCPA-style. Anchor reproduced correctly.
- **FL:** FDBR is comprehensive only above a **$1B global-revenue** trigger; most TPMO lead-gen sites fall below it. **FL telemarketing exemption:** §501.604(8) exempts licensed insurance agents from the Florida Telemarketing Act license/bond, but it is **not self-executing** — an Affidavit of Exemption (FDACS-10002) must be filed with FDACS before outbound calls (§§501.608, 501.616(4); pre-call timing per FDACS guidance). Distinct from FTSA §501.059 (calling conduct).
- **TX:** SB 140 (eff. 9/1/2025) treats texts as telephone solicitations; the **DTPA private right of action survives** ($500/violation, up to $1,500 willful) and **cold/prospecting texts remain covered**. Per the **11/17/2025 stipulated dismissal** in *Ecommerce Marketers Alliance v. Texas* (1:25-cv-01401, W.D. Tex.) — reflecting the **State's litigation position**, not a contested merits ruling — and the TX SoS Form-3400 FAQ, **consent-based opt-in** text programs are exempt from Ch. 302 registration. A Texas AG Opinion confirming this was requested but **not yet issued** — monitor.
- **NY:** NY **Health Information Privacy Act (S929)** **VETOED** by Gov. Hochul **12/19/2025**; revised successor **S9269** introduced 2026 session, **not enacted** as of 2026-06-20 → NY health-data = **N/A**. SHIELD Act = breach/security (excluded).
- **Telemarketer registration:** per DNC.com, **32 states + DC** require registration; only **TN** ($500/May 1), **OR** (OR DOJ), **TX** (Form 3401), and **OK** (15 O.S. §775A.3) are independently verified here. Other "Yes" cells and uncited `state_mini_tcpa` section pins are **leads** — confirm them and the **insurance-producer exemption** per state before any outbound calling (confirmed exempt: AR, FL, OK, NC).
- **Territories:** privacy "N/A" = **affirmatively-verified** absence (PR bills HB/PC 1548 + SB 822 failed; VI/GU/AS/MP none). **VI calling-hours resolved (r4):** 12A V.I.C. ch. 6 contains no calling-hours provision → federal 8a–9p default (secondary: Cornell LII + CLIClaw; confirm vs primary V.I. Code). **GU calling-hours resolved (r5):** 5 GCA §§32301–32308 contain no calling-hours provision → federal 8a–9p default (Guam Compiler of Laws, primary). **PR telemarketer cite (r5, primary-confirmed):** registry = **§4034**, insurer exemption = **§4035(d)**, scope = **registry-only** (insurers still bound by §4033 abusive-practice rules + 9a–9p hours), per official L.P.R.A. (Justia 2024) — this **corrects the r4 §4033/§4034(d) values** (CLIClaw tier-3 error) and **vindicates the §4035(d) claim r4 had rejected**. **PR `call_recording` resolved (r5):** all-party (33 L.P.R.A. §5235, recodified from §4809; Const. Art. II §10). **VI/GU/AS/MP `call_recording` still pending** (research leanings: VI/GU/AS one-party federal §2511 default; MP all-party per CNMI Const. art. I §3(b) + *Commonwealth v. DeLeon Guerrero* — confirm before relying; hard block remains on these four).
- **Anchor check:** the six known-good seeds (CA, OR, WA, NV, TN, GA) reproduced correctly by the primary-source method.

**Open items to resolve:**
- Pin codified Ala. Code section for **AL APDPA** (HB 351/Act 2026-552) — still at Act level (Ala. Code section pending). (**OK SB 546 pinned r4:** 75A Okla. Stat. §§300 et seq. — confirm final upper-bound on publication; AR HB 1717 = Ark. Code tit. 4 ch. 88 subch. 15; LA Act 502 = La. R.S. 51:1780.1–.5 — pinned.)
- Monitor NY S9269 (2026 successor to the vetoed S929) for signing/effective date — not enacted as of 2026-06-20.
- Telemarketer registration: confirm each "Yes" cell and the insurance-producer exemption per state (independently verified exempt: AR, FL, OK, NC; independently verified required: TN, OR, TX, OK — all other registration cells are leads from the 32-state list).
- Confirm the uncited `state_mini_tcpa` section pins (states shown without a statute section).
- Confirm WA commercial telephone solicitor registration + bond (RCW 19.158) producer/exempt-seller status; same for CA/NV registration applicability.
- **(r5) CT SB 4/PA 26-64 — partially firmed:** signed 5/27/2026; geolocation-sale ban, surveillance-pricing, FRT, genetic = **10/1/2026**, data-broker registration deadline **1/1/2027** (named-firm secondary, consistent with the artifact). **Still secondary — confirm vs enrolled PA 26-64 text:** 1,750-ft precise-location radius; state deletion platform **7/1/2028**; and that HB 5222/HB 5563 didn't move dates.
- **(r5→r6) Territory `call_recording` (VI/GU/AS/MP)** — open inter-thread split + deferred primary read; full record in **Appendix C §A/§B** (meta cites rejected, §C).
- **(r5→r6) VA SB 754 vs "health amend. 7/1/2025"** — attribution unresolved (VCPA-not-VCDPA; split-vs-relabel); full record in **Appendix C §A/§B**.

## Appendix B — Privacy & telemarketing columns: sources (official first)

**Primary / official.** leginfo.legislature.ca.gov (CCPA/CPRA, CalOPPA, AB 45, B&P §17511) · leg.state.nv.us (NRS 603A; NRS 598.0918) · oregonlegislature.gov / ORS (646A.570; HB 3865) · app.leg.wa.gov (RCW 19.373, 19.190, 19.158, 19.375) · capitol.tn.gov + TPUC (TIPA §47-18-3301; §65-4-401 / Rule 1220-04-11-.04) · okhouse.gov + oklegislature.gov (SB 546; 15 O.S. §775) · arkleg.state.ar.us (HB 1717/Act 952) · alison.legislature.state.al.us (HB 351) · flsenate.gov (§501.701; FTSA §501.059) · mgaleg.maryland.gov (§14-4701; Stop the Spam Calls §14-4501) · webserver.rilegislature.gov (ch. 6-48.1) · sosnc.gov (NC seller exemption) · sos.state.tx.us (Form 3401; chs. 301–305) · plus each state legislature/code for the remaining comprehensive laws (CO §6-1-1301; VA §59.1-575; CT §42-515; UT §13-61-101; IA ch. 715D; IN §24-15; MT §30-14-2801; DE §12D-101 + DOPPA; NJ §56:8-166.4; NH ch. 507-H; KY §367.3611; NE §87-1101; MN ch. 325O) · billstatus.ls.state.ms.us (MS HB 1350; Miss. Code §77-3-707) · cga.ct.gov (CT SB 4/PA 26-64; SB 1295/PA 25-153) · legislature.maine.gov (ME LD 2234; 10 M.R.S. §1499-B) · Cornell LII (12A V.I.C. ch. 6) + Guam Compiler of Laws (5 GCA ch. 32 §§32301–32308 — no calling-hours) · Justia Laws of P.R. (Act 210-2003 §§4033–4035; Penal Code §5235; Const. Art. II §10) · DataGuidance / congress.gov (territory status).

**Secondary trackers.** IAPP US State Privacy Legislation Tracker · MultiState · Perkins Coie · Hunton · Mayer Brown · WilmerHale · Inside Privacy · Fisher Phillips · Ice Miller · Foley & Lardner · Optery, Smarsh (AR) · DNC.com, Blacklist Alliance, CompliancePoint (mini-TCPA / registration) · CLIClaw (PR/VI territory telemarketing — **tier-3**; was the source of the **erroneous** PR §4033/§4034(d) map, **corrected r5** to §4034 / §4035(d) per primary L.P.R.A.; VI hours still pending primary V.I. Code).

## Appendix C — Open controversies & deferred verification (record of doubt)

*Added r6. Records inter-thread disagreement and deliberately-deferred verification rather than forcing resolution — the point is to preserve reasonable doubt where independent LLM validation threads split, and to park the right next steps without chasing completeness. Expands the (column-scoped) Appendix A open items and captures cross-cutting items, notably `call_recording` (outside Appendix A's scope). Nothing here blocks current operation: the operational posture already covers the uncertainty conservatively (CMS — record + disclose on every call, §4; territory `call_recording` hard block, Caveats).*

### §A. Live inter-source controversies (genuine disagreement; reasonable doubt remains)
- **CNMI/MP `call_recording` class** — all-party (gemini-deep-think, gemini-deep-research: CNMI Const. art. I §3(b) warrant rule per *Commonwealth v. DeLeon Guerrero*) vs one-party (meta: 6 CMC §3101(b)) vs UNABLE-TO-CONFIRM (claude, perplexity, chatgpt, mistral). Research leans **all-party** but on an *inference* from the constitutional warrant requirement + a suppression holding read only via secondary reporting (Saipan Tribune); full opinion not retrieved. Artifact posture: "Needs verification" (hard block). Resolves with: full *DeLeon Guerrero*/*Ping Chen* opinions + any 6 CMC recording-consent provision.
- **VI/GU/AS `call_recording` pins** — one-party-leaning (federal §2511 default) per claude/perplexity/research, which read the codes and found no all-party private-recording statute (USVI Title 5 ch. 343 = LE-wiretap-only; 9 GCA §70.35 = not an audio statute; AS = none located) **vs** meta, citing specific statutes (14 V.I.C. §3004; 9 GCA §70.35(a)(5)) the others say are not recording-consent provisions; chatgpt/gemini-deep-research = UTC. Artifact posture: "Needs verification" (hard block). Resolves with: direct reads of 14 V.I.C. / 5 V.I.C. ch. 343, 9 GCA, and the American Samoa Code (AS absence is currently *unconfirmed*, not affirmatively verified).
- **VA SB 754 vs the artifact's "health amend. 7/1/2025"** — research confirms SB 754 amends the **VCPA** (§§59.1-198/200; reproductive/sexual-health; PRA + $500 floor; eff 7/1/2025), **not** the VCDPA; but could not confirm whether the artifact's "health amend. 7/1/2025" (under the VCDPA line) *is* SB 754 mis-filed or a distinct VCDPA consumer-health-data amendment. claude/perplexity/gemini-deep-think confirmed SB 754; chatgpt/gemini-deep-research/mistral = UTC. Resolves with: VA LIS SB 754 enrolled text + the VCDPA consumer-health-data amendment history (split-vs-relabel).
- **CT surveillance-pricing effective date (nuance)** — resolved to **10/1/2026** (r5 narrowed CT item); the competing **2/1/2027** is the AG-enforcement date for facial-recognition signage, and **7/1/2027** appeared in one thread. Recorded so the distinction isn't re-litigated. Resolves with: enrolled PA 26-64 text (also confirms the 1,750-ft radius + 7/1/2028 deletion-platform date, both currently named-firm secondary).
- **NY S9269 legislative stage (minor)** — "in committee" (perplexity) vs "passed both houses, awaiting delivery" (chatgpt) vs A10357 "substituted by S9269" 6/4/2026 (research); all agree **not enacted**, so the artifact's "pending … not enacted" holds. Resolves at next status check.
- **PR 33 L.P.R.A. §2160 repeal status** — all-party class is firm via the 2012 Penal Code §5235 (applied r5); §2160 (older telephone-specific provision) still appears in the compiled LPRA but its formal repeal status is uncertain (research: Medium). Caveat only — does not affect the class.

### §B. Deferred verification — pinned, not blocking ("do next, later")
- **Territory `call_recording` primary read** (VI/GU/AS/MP) — §A; would lift the Caveats hard block on cleared territories.
- **CT PA 26-64 enrolled text** — 1,750-ft radius, 7/1/2028 deletion platform, HB 5222/HB 5563 amendment scope (currently named-firm secondary).
- **VA SB 754 enrolled text** — §A (split-vs-relabel).
- **Telephonic-seller registration column** — only TN/OR/TX/OK primary-verified (+ partial GU/VI); producer exemptions verified only AR/FL/OK/NC (+ CA/PA newly indicated r5, unconfirmed at scale); remaining ~30 "Yes; verify" cells are tier-3 leads from the unresolved 32-vs-34 aggregate. (Appendix A.)
- **Unpinned `state_mini_tcpa` calling-hour cells** — AZ/SC/WI explicitly unconfirmed-from-primary; other cells shown without a statute section. (Appendix A.)
- **VI calling-hours primary** — value correct (no provision → federal default) but secondary-sourced (r4); confirm vs primary V.I. Code.
- **Mechanical columns** (FIPS, Wikidata QIDs, `doi_url`, `official_website`) — never exhaustively re-checked; only spot-checks pass (FIPS PR 72/VI 78/GU 66/AS 60/MP 69/DC 11; sample QIDs). Deferred step: a scripted 56-row liveness/validity sweep. (gemini-deep-research's "zero errors" R9 claim is not relied upon — §C.)
- **NY S9269 monitor** — at next review, tighten Appendix A's monitor note to the confirmed status (correct successor; A10357 substituted by S9269 6/4/2026; not enacted).

### §C. Rejected but recorded (so later threads don't re-import)
Checked and rejected; logged because several recur across report batches:
- **"NY Seinfeld Law"** — no such statute; the real rule is **GBL §399-z** (pinned r5). gemini-deep-think re-asserted the name; rejected.
- **MS "holiday-ban" correction** — the cell never claimed a holiday ban; §77-3-723 bars Sunday only. Recurring strawman; rejected.
- **meta territory recording cites** — 14 V.I.C. §3004 / 9 GCA §70.35(a)(5) / 6 CMC §3101(b) as one-party private-recording statutes: not borne out by the codes (§A). Do not import.
- **gemini-deep-research R9 "zero errors"** — no evidence of a run; lone claim vs 5 UTC; not used to upgrade R9.
- **gemini-deep-research R3 windows tagged "P"** — cited to calling-hour aggregators (Kixie/ActiveProspect/Convoso/lawyerinpr); its KY 8a–9p contradicts primary 10a–9p (applied r5). Not authority.
- **PR recording lead cites §4809 / §2160 / §5237 / Ley 66-1953 / "§169"** — superseded by §5235 (§4809 recodified; §5237 a different offense); see §8.
