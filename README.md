# AAPHD Website

This repository holds the source files for the AAPHD website.

## Live site

**Current (temporary):** https://factorup.github.io/aaphd_website/
Hosted on GitHub Pages, deployed from this repository.

**Planned final home:** **https://aaphd.org**
The site will migrate to Netlify (under AAPHD's own workspace) and replace the current WordPress site at aaphd.org. Timing is TBD.

## Where the source files live

**This GitHub repository is the source of truth. There is no other copy that matters.**

Any file changes committed to the `main` branch auto-deploy to the live site within about a minute. There is no manual publish step.

### What is *not* the website source

- **The AAPHD Google Shared Drive** is for board materials, financial records, meeting notes, and other organizational documents. **Editing files in the Shared Drive will not change the website.** Please do not copy website files into the Shared Drive — a stale duplicate creates confusion and drifts out of sync with what's actually live.
- **Any downloaded copy** of the site on someone's local computer is a snapshot in time and should be treated as read-only.
- **The WordPress site currently at aaphd.org** is a separate legacy site being replaced by this one during the migration.

## How changes reach the live site

1. A developer edits the files in a local working copy of this repository.
2. The changes are committed and pushed to the `main` branch on GitHub.
3. GitHub Pages auto-deploys within about a minute.

Any commit to `main` is live. There is no staging site (yet).

### A note for non-developers

The GitHub website has an edit button (pencil icon) on every file. Clicking it and then "Commit changes" publishes the edit to the live site immediately. Please do not use this unless you know exactly what you're changing and have coordinated with whoever maintains the site.

## Planned migration to Netlify + aaphd.org

When the redesign is approved and ready for launch, three things move at once:

1. **Hosting:** GitHub Pages → **Netlify** (AAPHD-owned workspace)
2. **Domain:** `factorup.github.io/aaphd_website/` → **`aaphd.org`** (replacing the WordPress site currently there)
3. ✅ **Repository ownership** (completed August 2026): moved from `FactorUp/aaphd_website` to `American-Association-of-PHD/aaphd_website`, with all 113 commits of history preserved.

The edit → commit → auto-deploy workflow stays the same; only where the deploy runs changes. Netlify offers additional features (form handling, redirects, cache-control headers) that we can adopt post-migration.

## Who to contact

- **For content questions and priorities:** Julie Reynolds (AAPHD President, through April 2027), then AAPHD's Executive Director office.
- **For technical/code changes:** FactorUp (the current developer) until handoff is complete, then whoever AAPHD engages as the successor developer.

## Technical notes for developers

This is a **static HTML site** — no build tool, no framework, no server-side code. Any text editor works. Every page is standalone HTML that references shared CSS (`css/styles.css`) and JS (`js/main.js`).

**Structure:**
- ~50 top-level pages at the repository root
- 21 additional pages for EDI Hub articles (`learn-edi-*.html`)
- Every page carries its own copy of the nav, footer, favicon link, and head metadata — there is no shared template. Global changes (nav, footer, favicon) must be applied to every HTML file. Use `grep -L "<new-thing>" *.html` after any global change to confirm zero misses.

**Fonts:**
- Inter (via Google Fonts) — body, UI, and H2/H3/H4
- Fraunces (via Google Fonts) — H1 headings only

**Colors:**
- Defined once as CSS custom properties at the top of `css/styles.css`. Any palette change is a one-place edit that cascades to every element.

**Cache-busting:**
- CSS, JS, and the favicon are referenced with a `?v=YYYYMMDDHHMM` query string on every page (68 total references).
- Any commit that modifies `css/styles.css`, `js/main.js`, or `assets/logo.svg` should bump this version across all HTML pages in one pass. GitHub Pages caches assets for 10 minutes, and mobile browsers cache more aggressively; without the version bump, users see stale content until their cache expires.
- Bump script (from repository root):
  ```bash
  python3 -c "
  import re, glob, time
  v = time.strftime('%Y%m%d%H%M')
  for f in glob.glob('*.html'):
      c = open(f).read()
      c = re.sub(r'styles\.css\?v=[^\"]*', f'styles.css?v={v}', c)
      c = re.sub(r'main\.js\?v=[^\"]*',    f'main.js?v={v}',    c)
      c = re.sub(r'logo\.svg\?v=[^\"]*',   f'logo.svg?v={v}',   c)
      open(f, 'w').write(c)
  "
  ```
- Once we're on Netlify, this whole system can be replaced with a proper `Cache-Control` header. It's fine to leave in the meantime.

**Deploy:**
- GitHub Pages watches the `main` branch. There is no `.github/workflows/` folder and no build step. Push to `main`, done.

**Historical design notes:**
- See `docs/iteration-06-design-notes.md` for the record of the last major redesign iteration (navigation IA overhaul, May 2026). Useful context for a successor developer.
