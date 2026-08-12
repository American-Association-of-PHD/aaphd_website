# Design Standards

A living reference for the visual conventions used across the site, so new
pages and sections stay consistent with what's already built. All values are
defined once as CSS custom properties at the top of `css/styles.css` (the
`:root` block) — change a value there and it cascades everywhere.

## Colors

| Token | Value | Used for |
|---|---|---|
| `--navy-900` | `#0a1d3a` | Darkest navy — footer, stripe gradient start |
| `--navy-700` | `#0f2a4e` | Primary navy — headings, nav links, ghost buttons |
| `--navy-500` | `#1d3d6b` | Lighter navy — gradient endpoints |
| `--ink` | `#1a1f2e` | Body text |
| `--slate` | `#5a6b82` | Secondary/muted text (ledes, captions, metadata) |
| `--mist` | `#e9ecf2` | Light neutral backgrounds (hover states, chips) |
| `--paper` | `#faf7f2` | Page background |
| `--cream` | `#f1ece3` | Alternate section background (`.section--tint`) — pulled from the hero gradient's end stop |
| `--white` | `#ffffff` | Card backgrounds |
| `--coral` | `#e85d3a` | Primary accent — solid buttons, tags |
| `--coral-700` | `#c44a2c` | Coral hover/darker state, links |
| `--gold` | `#d4a437` | Focus outlines, tertiary accent |

Cards, stripes, and gradients reuse these tokens rather than introducing new
one-off colors — e.g. the homepage news cards use `--coral-700`/`--coral`,
`--navy-700`/`--navy-500`, and `--gold` as their three accent-bar gradients.

## Typography

Two font families:
- **Inter** — body text, UI, and all headings except H1 (`--font-sans`)
- **Fraunces** — H1 headings only (`--font-display`), serif, gives the page
  its editorial feel

Type scale (all `clamp()`-based, so they shrink slightly on small screens):

| Token | Range | Used for |
|---|---|---|
| `--fs-xs` | 0.78–0.86rem | Kickers, tags, breadcrumbs, uppercase labels |
| `--fs-sm` | 0.88–0.96rem | Secondary text, nav links |
| `--fs-base` | 1–1.08rem | Body copy (default) |
| `--fs-lg` | 1.12–1.25rem | Card H3s, lede paragraphs |
| `--fs-xl` | 1.4–1.75rem | H3 / section sub-headings |
| `--fs-2xl` | 1.85–2.5rem | H2 / section headings |
| `--fs-3xl` | 2.3–3.5rem | H1 on inner pages, big stat numbers |
| `--fs-hero` | 2.6–4.5rem | H1 on the homepage hero only |

Heading rules:
- `h1` uses Fraunces, `h2`–`h4` use Inter at `font-weight: 800`
- All headings: `line-height: 1.15`, `color: var(--navy-900)`, tight letter-spacing (`-.015em` on h2–h4)
- A section's H2 gets `margin-bottom: 1rem`; an optional `.section-lede` paragraph below it is `--fs-lg`, `--slate`, capped at `60ch` width

## Section-heading pattern

Nearly every content section on the site follows the same three-part header:

1. **`.section-tag`** — small uppercase eyebrow label in coral, with a short 28×2px coral dash before it (e.g. "WHAT'S NEW", "BY THE NUMBERS")
2. **`<h2>`** — the section's real heading
3. **`.section-lede`** *(optional)* — one sentence of supporting context in slate gray

```html
<span class="section-tag">What's new</span>
<h2>Programs &amp; announcements</h2>
<p class="section-lede">Recent highlights from across the AAPHD community.</p>
```

## Spacing & layout

- **Container:** max width `1200px`, centered, with a responsive side gutter (`clamp(1rem, 2vw, 1.75rem)`)
- **Section padding:** every `<section>` gets `clamp(2rem, 4vw, 4rem)` top/bottom — sections breathe more on large screens, less on mobile, automatically
- **Card/grid gaps:** `1.25rem` is the standard gap for card grids (`.cards`, `.news`, `.stat-grid`)
- **Border radius:** `--radius: 14px` for cards/buttons-as-blocks, `--radius-lg: 22px` for large feature panels (spotlight card, CTA band)
- **Shadows:** three tiers — `--shadow-sm` (resting card), `--shadow-md` (hover state), `--shadow-lg` (the homepage spotlight card)
- **Motion:** all hover/transition effects use the same `--dur: 220ms` / `--ease` curve, and cards that lift on hover move `translateY(-3px)`

## Section background treatment

Sections alternate background treatment to create visual rhythm without needing a hard divider line — **no two consecutive sections should share the same background.**

- **Default section:** no background class — sits on the page's `--paper` background
- **`.section--tint`:** sets `background: var(--cream)` — use this on every other plain section so it doesn't sit directly against another `--paper` section. `--cream` is pulled from the homepage hero gradient's end stop, so the alternate background reads as a continuation of the hero's warm tone rather than an unrelated gray. Never stack two `.section--tint` sections back to back either.
- **`.stripe`:** a full-bleed navy gradient (`--navy-900` → `--navy-500`) with white text — used sparingly, for a single high-contrast section per page (e.g. "By the numbers" stats). Already visually distinct from both `--paper` and `--cream`, so it doesn't need special-casing in the alternation — just don't stack two dark sections back to back.
- **`.page-hero` / `.hero`:** a soft paper-to-cream gradient with subtle radial color washes (coral top-right, gold bottom-left) — used once, at the top of a page. This is where `--cream` comes from.
- **`.cta-band`:** solid coral block with rounded corners, used as a single bounded CTA panel rather than a full-width section

**Homepage order (reference example):** hero (gradient) → Programs & Announcements (`--paper`) → What We Do (`.section--tint`) → By The Numbers (`.stripe`, dark navy) → footer (dark navy). Each section in the sequence reads distinctly from the one before it.

This alternation is applied sitewide (not just the homepage) — as of 2026-08-12, every page's section sequence was audited and fixed so no two consecutive sections share a background (`about-us.html`, `dph.html`, `learn-edi-corner.html`, `learn-jphd.html`, `learn-policies-publications.html`, and `students-starting-chapter.html` needed a `.section--tint` added; every other page already alternated correctly, usually because a `.stripe` section already broke up the sequence).

Rule of thumb: at most one `.stripe` (dark) section per page, placed for emphasis (usually numbers/proof points), never back-to-back with another dark section.

## Accent-bar height standard (card/spotlight placeholders)

Colored gradient blocks used as lightweight visual accents (in place of a
real photo) follow a two-tier height standard, set via CSS variables:

```css
--accent-h-sm: 30px;  /* sections with NO overlaid badge */
--accent-h-lg: 65px;  /* sections where a pill-shaped badge sits on top */
```

- **30px (`--accent-h-sm`)** — used when the colored bar is purely decorative, with no text/badge overlaid on it. Example: the three "Programs & Announcements" news cards (`.news__media`) — their kicker text lives in the card body below the bar, not on top of it.
- **65px (`--accent-h-lg`)** — used when a pill-shaped badge (like `.spotlight__kicker`, "Now launching") is positioned on top of the bar and needs room to sit comfortably inside it. Example: the homepage spotlight card (`.spotlight__media`).

When adding a new card/section with this kind of placeholder accent, use
`var(--accent-h-sm)` by default, and `var(--accent-h-lg)` only if a badge/pill
sits on top of it.

## Cards & components

| Component | Class | Notes |
|---|---|---|
| Generic content card | `.card` | White bg, `--radius`, `--shadow-sm`, lifts on hover |
| Static card (non-clickable) | `.card--static` | Same as `.card` but no hover lift — signals it's not a link |
| Bio card (board/committee/staff) | `.cards--bio` / `.bio-card__*` | 1:1 photo, no hover lift |
| News card | `.news article` | White bg card with `--accent-h-sm` top bar |
| Spotlight card | `.spotlight` | Larger feature card, `--shadow-lg`, `--accent-h-lg` top bar with overlaid kicker badge |
| Hub list row | `.hub-list li a` | Full-width row card for hub/index pages |
| Membership tier | `.tier` / `.tier--feature` | `--tier--feature` is the highlighted/recommended tier (navy gradient bg) |
| Stat tile | `.stat` | Used inside `.stripe` sections only |

## Buttons & CTAs

| Class | Style |
|---|---|
| `.btn--primary` | Solid coral, white text — the primary action |
| `.btn--ghost` | Transparent with navy border — secondary action |
| `.cta--ghost` (nav) | Transparent with coral border — pairs with solid coral "Join" CTA without competing |
| `.card__link` / `.news a` / `.spotlight__link` / `.hub-list__arrow` | Text link with a trailing `→` that animates on hover — used instead of a boxed button when a card/row is already the clickable unit |

All buttons are fully rounded (`border-radius: 999px`) except plain text
links, which never get a background.

## Cache-busting (see also README)

Any change to `css/styles.css`, `js/main.js`, or `assets/logo.svg` requires
bumping the `?v=YYYYMMDDHHMM` query string across all HTML pages in the same
commit — see the README's bump script. This doc only covers visual/design
conventions; see the README for that and other technical/deploy notes.
