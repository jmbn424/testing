# Security practices — a plain-language guide for the J&R team

Working ops doc (NOT canon, not legal advice). Written for Rowena + Jasmine. It complements the
account-security *architecture* in `_context/architecture/hosting-decisions.md` §8 (the crown-jewel
accounts, MFA, least privilege) — that doc says *what the controls are*; this one says *what to actually
do day to day, and what to do if something goes wrong*.

**The one idea to keep.** There is no server for an attacker to break into — the website is just flat
files. So the realistic attacks are not "hacking the website." They are **tricking a person** (phishing,
social engineering) and **stealing a device**. That means your logins and your phones/laptops *are* the
security perimeter. Protecting them is the whole game.

---

## 1. The accounts that matter most

A handful of logins control the entire business. If someone gets into one of these, the damage is real:

- **Google Workspace (info@jrhealthins.org)** — the most important one. It receives consumer email (which
  can contain health details), it's the intake for privacy and accessibility requests, **and** it's the
  password-reset channel for almost everything else. Whoever controls this inbox can reset the other
  accounts. Harden it hardest.
- **AgencyBloc** — holds every lead and client record. A compromise here is a data breach.
- **Cloudflare** — the domain, DNS, and website host. A compromise could redirect or deface the site, or
  hand over the domain.
- **GitHub** — the website's source code. A compromise could quietly change where the contact form sends
  leads (the one realistic way to steal leads), or deface the site.
- **Intulse** — the phone and texting system.
- **Your personal "work cell" phones** — these hold client text threads, so a lost or stolen phone is a
  client-data problem, not just an inconvenience (see §4).

## 2. Lock the accounts down (do this once)

- **Turn on two-factor authentication (2FA) everywhere**, and prefer the strongest kind:
  - Best: a **passkey** or a **hardware security key** (e.g. a YubiKey) — these can't be phished.
  - Good: an **authenticator app** (Google Authenticator, Authy, 1Password).
  - Avoid relying on **text-message codes** as your only 2FA — they're the weakest (SIM-swap attacks), though
    SMS codes are still far better than no 2FA.
- **Use a password manager** (1Password, Bitpass, or the one built into Google/Apple). One strong, unique
  password per account. Never reuse the info@ password anywhere else.
- **Keep the number of admins/owners tiny.** A two-person shop needs very few. Don't give anyone more access
  than they need.
- **Lock the domain.** In Cloudflare, turn on the registrar transfer lock so the domain can't be moved.
- **Protect the recovery paths.** Keep your account-recovery phone numbers and backup email current, and
  guard them — they're how an attacker gets in the back door.

## 3. Spotting phishing and social engineering (the day-to-day risk)

Most break-ins start with a convincing message or phone call. The attacker's goal is to get you to click a
link, type a password, approve a 2FA prompt, or hand over information.

**Red flags — slow down when you see these:**
- Urgency or fear: "Your account will be closed in 24 hours," "suspicious login detected, verify now."
- A link that wants you to log in. Don't click it — open a new tab and go to the site yourself.
- A login page that looks right but the web address is slightly off (`g00gle`, `agencybloc-secure.com`).
- A 2FA prompt or code you **didn't** just trigger. **Never approve it; never read the code to anyone.** A
  real company will never ask you for your 2FA code.
- A caller claiming to be Medicare, a carrier, Microsoft, Google, or "IT support" asking you to install
  something, read a code, or "verify" your password.
- An email that looks like it's from Rowena/Jasmine/Advocate asking for an urgent wire, gift cards, a
  password, or a client list — confirm by a *different* channel (call the person) before acting.

**The simple rules:**
- Type web addresses yourself or use your own bookmarks; don't log in from links in email/text.
- No one legitimate needs your password or your 2FA code — ever.
- When in doubt, stop and verify through a channel you trust. A two-minute phone call beats a breach.

## 4. If a laptop or phone is lost or stolen

Because the work cells hold client text threads and the laptops can open info@ and AgencyBloc, a lost device
is a potential data exposure. Prepare now so it's a shrug, not a crisis.

**Set up now (one time):**
- **Lock every device** with a PIN/passcode, fingerprint, or face unlock — phones *and* laptops. Set it to
  auto-lock after a couple of minutes.
- **Turn on encryption** — iPhone/Android are encrypted when you set a passcode; on a Mac turn on FileVault,
  on Windows turn on BitLocker. This makes the data unreadable to a thief.
- **Turn on Find My / device location + remote wipe** — Apple "Find My," Google "Find My Device." This lets
  you locate, lock, or erase a lost device remotely.

**If a device goes missing:**
1. From another device, use Find My to **lock and locate** it; if you can't recover it quickly, **erase it
   remotely.**
2. **Change the passwords** for anything that was logged in on it (start with info@ / Google, then AgencyBloc,
   then the rest) and sign that device out of those accounts.
3. **Report a stolen phone** to your carrier so they can disable it.
4. **Tell each other** and write down what happened (when, which device, what was on it). If client personal
   or health information may have been exposed, that can trigger breach-notification duties — loop in counsel
   promptly. (Six-state breach matrix is a tracked compliance item; see `canon.md`.)

## 5. Everyday habits

- Install operating-system and browser updates promptly — most fixes are security fixes.
- Lock your screen when you step away.
- Don't do account-sensitive work on public Wi-Fi without care; your home/office network is fine.
- Keep work and personal accounts separate where you can.
- The info@ inbox is a promise — privacy and accessibility requests come there and have legal deadlines, so
  give it an owner and a same-week habit. (Also a compliance point in `canon.md`.)

## 6. If something feels wrong

Pause and ask. Forward a suspicious email (don't click anything) and check with each other or Aaron before
acting. The question is free; the assumption is not. This is the same instinct that already runs the
business well — applied to the inbox and the phone.
