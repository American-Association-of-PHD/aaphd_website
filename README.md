# Website Design — Iteration 06

**Date:** 2026-05-03 (updated 2026-05-04)
**Files:** all 50 pages from iter 05 + 1 new hub page (`get-involved.html`) = 51 HTML pages

## What changed vs. Iteration 05

The single theme of iter 06: **navigation IA overhaul.** Iter 05 introduced dropdown behavior on the existing 9-item nav. Iter 06 redesigns the menu itself for more intuitive navigation, consistent naming, and reduced cognitive load.

### Top-level menu: 9 items → 7 items

| Iter 05 | Iter 06 |
|---|---|
| About | About |
| Dental Public Health | Dental Public Health |
| Join | **Membership** |
| Attend | **Events** |
| Learn | **Resources** |
| Lead | *merged* ↘ |
| Recognize | *merged* ↘ |
| Students | *merged* ↘ |
| — | **Get Involved** *(new — combines Lead + Recognize + Students)* |
| Foundation | Foundation |

All labels are now nouns (was: 5 verbs + 4 nouns mixed).

### Submenu changes — naming conventions

Redundant prefixes dropped now that the parent menu carries the context:

- AAPHD DPH Curriculum → **Curriculum**
- DPH Residencies → **Residencies**
- DPH Code of Ethics → **Code of Ethics**
- AAPHD Merit Awards → **Merit Awards**
- AAPHD Councils → **Councils**
- AAPHD Foundation General Fund → **General Fund**
- Contact AAPHD → **Contact**
- Resources (under DPH) → **Practice Resources**

Clarified ambiguous labels:

- EDI Corner → **EDI Hub**
- Policies & Publications → **Position Statements & Publications**
- Sample By-Laws → **Sample Bylaws**
- Student Chapter Handbook → **Chapter Handbook**

Long memorial-fund titles trimmed to fit a dropdown:

- Dr. R. Gary Rozier Memorial Fund → **Rozier Memorial Fund**
- Brian Burt Memorial Fund → **Burt Memorial Fund**

### Year-specific items removed from nav (evergreen)

These pages still exist as files; they just don't take up nav real estate:

- 2026 Merit Award Winners — now lives on the Merit Awards parent page
- 2026 Student Award Winners — now lives on the Student Awards parent page
- 2025 Annual Report → **Annual Report** (label is generic; always points to latest)

### Submenu organization — mega menus

Two menus now use a grouped, multi-column "mega menu" layout:

**Get Involved** (3 groups, consolidates 11 sub-items)
- *Volunteer Leadership* — Councils, Standing Committees, EDI Committee, Trainer & Speaker Network
- *Awards* — Merit Awards, Student Awards
- *Student Chapters* — Starting a Chapter, Chapter Approval Process, Chapter Handbook, Sample Bylaws, Student Symposium

**Foundation** (4 groups, consolidates 10 sub-items)
- *About the Foundation* — Foundation Committee, Annual Report, Pledge Drive↗
- *Scholarships* — Horowitz Scholarship, Doherty Scholarship
- *Memorial Funds* — Burt Memorial Fund, Lotzkar Fund, Rozier Memorial Fund
- *Other Funds* — General Fund, Small Grants Program

On desktop these render as multi-column grids inside the dropdown panel; on mobile they stack with their group headings as section dividers.

### About menu — reordered for user intent

Past sequence: Mission · Board · Past Presidents · Executive Director · Sponsors · Partners · Contact AAPHD
New sequence: Mission · Board · **Executive Director** · Past Presidents · **Institutional Partners** · National Sponsors · Contact

(ED moved up next to the Board — current operational leadership before historical figures. Institutional Partners moved ahead of National Sponsors.)

### Terminology updates (2026-05-04)

A round of label refinements after first review:

- **"The Specialty" → "Dental Public Health"** in the main menu bar. The shorter label was ambiguous to non-DPH visitors; the full name is what the field is actually called.
- **"Institutional Partners" → "Institutional Members"** site-wide. These organizations *are* AAPHD members through the institutional program — the prior label undersold the relationship. The page filename was renamed accordingly (`about-institutional-partners.html` → `about-institutional-members.html`) and all 51 nav references updated.
- **Home hero lede rewritten** to lead with the "why" (oral health is essential to overall health; equity is the imperative) instead of describing what the organization does. The old copy described programs and activities; the new copy describes purpose.

### Landing-page CTA refresh

A new **Donate** button now lives in the primary nav alongside *Become a Member*. It uses a coral ghost style (transparent with coral border) so it pairs visually with the solid coral *Join* CTA without competing.

| | Color | Treatment | Links to |
|---|---|---|---|
| **Donate** | Coral (ghost) | Outlined button | Foundation Pledge Drive ↗ |
| **Become a Member** | Coral (solid) | Filled button | join-renew.html |

The home-page hero secondary CTA also changed from *About AAPHD* (informational) to **Support the Foundation** (action), pairing membership and giving as the two primary calls-to-action above the fold.

### New page: `get-involved.html`

A hub page for the merged Get Involved section. Lays out three tracks:
1. **Volunteer Leadership** — links to the four councils, standing committees, EDI Committee, and Trainer & Speaker Network
2. **Awards** — Merit Awards, Student Awards
3. **Student Chapters** — five chapter resources

Includes a "not sure where you fit?" CTA pointing to Contact.

## Implementation files

- **`css/styles.css`** — added `.submenu--mega` (desktop CSS Grid, mobile stacked), `.submenu__group`, `.submenu__heading`, `.cta--ghost` (Donate). Updated right-edge alignment rule from last-4 to last-5 children to catch the wider Get Involved mega menu.
- **`js/main.js`** — **unchanged.** The existing dropdown logic operates on `.has-dropdown[data-open]` regardless of submenu structure, so mega menus work without JS changes.
- **All 50 carried-over HTML files** — nav block + footer Get Involved/Programs columns updated.
- **`get-involved.html`** — new hub page.
- **`index.html`** — hero secondary CTA updated.

## Try it

1. Open `index.html`. Note the new **Donate** button in the nav and the **Support the Foundation** secondary CTA in the hero.
2. Hover **Get Involved** → see a 3-column dropdown with grouped headings.
3. Hover **Foundation** → see a 4-column dropdown with grouped headings.
4. Resize to phone width → both mega menus collapse into stacked accordion sections; group headings stay visible as section dividers.
5. Compare iter 05 and iter 06 nav side-by-side: 9 items → 7, all-nouns, no year-specific items, scholarships and memorial funds grouped.

## What's next (carry-over from prior iterations)

- Logo direction (still on hold)
- Photography sourcing — Best tier, awaiting greenlight
- Astro / static-site scaffold translation — even more compelling now with two mega menus duplicated across 51 files
- Real forms (contact, partnership inquiry, speaker request)
- Site search (Pagefind)
- Awards parent pages: surface "Recent Winners" in-page now that year-specific items are out of nav
- Optional: promote `join.html#institutional` to its own `join-institutional.html` page (consistency with sibling pages)
- Long-term: AAPD-style separation of the Foundation onto its own subdomain — would drop the main nav from 7 to 6 items

## Decision log

- **Option B chosen** over a full 6-item consolidation (Option A) and a labels-only refresh (Option C). Foundation kept as a top-level slot to preserve its branded identity.
- AAPD navigation pattern was evaluated and explicitly **not adopted** — AAPHD's content profile (heavy Foundation, less advocacy/PAC presence) didn't map cleanly to AAPD's 6-bucket structure.
- Year-specific labels removed from nav, but the underlying pages (`recognize-2026-merit-winners.html`, `recognize-2026-student-winners.html`, `foundation-annual-report.html`) remain as files. The nav points at parent pages; year-specific content moves into in-page sections in a follow-up iteration.
