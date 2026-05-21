# Photography & Imagery Plan v2 — "Best" Tier ($5K–$12K / yr)

You picked the **Best** tier. This document expands the iter-02 plan into a concrete, executable program at that budget.

## What "Best" buys you

| Component | Annual investment | What it produces |
|---|---|---|
| Premium stock subscription (Stocksy or Adobe Stock Premium) | $500–$1,200 | ~50–100 high-quality stock images / yr; covers gaps and quick turnaround needs |
| NOHC commissioned photographer | $1,500–$2,500 | 200–400 editorial photos at the annual conference, full release |
| 2 regional commissioned shoots / yr | $2,000–$3,500 | Community / clinic / faculty environments at member universities |
| Illustration system (commissioned, one-time refreshed annually) | $1,500–$3,000 | 12–18 custom illustrations covering the abstract concepts (equity, workforce, advocacy) |
| Misc: model releases, file storage, contingency | $500–$1,000 | Legal + ops |
| **Total** | **$6,000–$11,200** | Full editorial coverage of AAPHD's work |

## Concrete shot list — iter 04 priority

| Slot | Image needed | Source | Action |
|---|---|---|---|
| Home spotlight (hero) | Editorial moment of dental-public-health work | Stocksy curated buy | Search: "dental hygienist community", "school dental program", "public health classroom" — pick 1 hero, 2 alts |
| Home news strip — webinar | On-camera webinar host | Capture from May 2026 webinar | Record a still / b-roll grab; design crop ratio 16:9 |
| Home news strip — committee | Researcher / educator portrait | Stocksy or commission | Search: "diverse academic researcher", "dental public health educator" |
| Home news strip — Symposium | Student / classroom moment | Boston University event photographer (Oct 17, 2026) | Plan ahead: brief BU photographer for editorial style; AAPHD owns release |
| About — board portraits | 14 board member headshots | Existing member-supplied + retouch | Request high-res from each member; standardize on neutral background |
| Dental Public Health hub | Mobile clinic / community visit | Commissioned regional shoot | Partner with member-led FQHC for half-day session |
| Membership hub | "Join us" — diverse member group | Commissioned at NOHC | Plan a 30-min posed session with willing volunteers at NOHC 2026 |
| Attend / NOHC | Audience / plenary moment | NOHC photographer | Already on site at NOHC; brief them for editorial style |
| Learn (webinars) | Person in front of computer w/ webinar | Stocksy | Search: "person watching webinar", "dental professional learning" |
| Learn (publications) | Policy / advocacy moment | CDC PHIL or commission | Free first; commission if quality insufficient |
| Lead (councils) | Group meeting / discussion | NOHC photographer (council meeting at conference) | Photo doesn't need staging — just brief them to capture |
| Recognize / Awards | Award presentation | NOHC photographer | Already happens; just need release for web use |
| Students | Student panel / poster session | NOHC photographer or BU symposium photographer | Same plan as above |
| Foundation | Donor / impact moment | Stocksy curated or member-submitted | "Recognition", "scholarship recipient" search; or use real recipient photos with release |
| Contact | Albany office or building | Local photographer in Albany — half day | $300–$500; one-time |

## Recommended stock platforms

### Primary
**Stocksy** — premium, more authentic moments. Best for the editorial style we want. ~$15–$200 per image; subscription not needed for this volume.
- URL: https://www.stocksy.com/
- Best searches: `dental hygienist community`, `mobile clinic`, `health worker portrait`, `lecture hall diverse`

### Secondary
**Adobe Stock Premium** — broader library + design integration if anyone uses Adobe tools. ~$30/mo for 10 standard + 2 premium per month.
- URL: https://stock.adobe.com/
- Use for: quick-turnaround needs, abstract concepts, supplementary shots

### Free (use for fillers, not heroes)
- **Unsplash** — https://unsplash.com/ — editorial-quality, no attribution required commercially
- **Pexels** — https://pexels.com/ — similar license
- **CDC PHIL** — https://phil.cdc.gov/ — public-health-specific, US government released

## Illustrator commission — criteria

For the abstract-concept illustration system, hire one of:

1. **An independent editorial illustrator** with a portfolio in non-profit / health space. Look on:
   - Working Not Working (https://workingnotworking.com/)
   - Dribbble (filter for "editorial illustration", "healthcare")
   - It's Nice That (interviews + portfolios)
   - Behance
2. **Style brief:** Modern editorial. Geometric. Warm color use of AAPHD palette (navy + coral + gold). Diverse human figures. Avoid clipart, avoid heavy gradients. References to share with the illustrator: Slack's brand illustrations, Stripe's Sigma docs illustrations, Spotify's editorial style.
3. **Scope:** 12–18 illustrations covering: education, research, policy, advocacy, workforce, equity, partnership, conference / community, mentorship, journal, scholarship, awards.
4. **Budget:** $1,500–$3,000 one-time for the set; refresh of 6 illustrations annually for $750–$1,500.

## NOHC photography brief (template)

Every year at NOHC, the on-site photographer should be briefed for:

> "Editorial style — capture genuine moments, not posed group shots. Look for: speakers in mid-presentation, candid hallway conversations, attendees engaging with posters, diverse audiences listening, coffee-break interactions. Avoid: stiff group photos, logo-heavy backgrounds, anything that looks like a corporate stock photo. We want photos that show what dental public health actually looks like as a community of people. AAPHD owns the release for any photo featuring an identifiable person."

## Asset workflow

1. Photographer / stock platform → original full-resolution file in `assets/_originals/`
2. Ops creates 3 web sizes: `@1x` natural width, `@1.5x`, `@2x` for retina via `srcset`
3. Save as **AVIF** (preferred) or **WebP**, with **JPEG fallback**
4. Filename pattern: `hero-spotlight-2026-may.avif` (descriptive + year-month)
5. Track in `assets/IMAGES.csv`:

```
filename,source,license,photographer,subject,release_status,date_acquired
hero-spotlight-2026-may.avif,stocksy,licensed,Jane Doe,community-clinic,N/A-stock,2026-05-12
nohc-2026-plenary.avif,commission,owned,John Roe,plenary-audience,signed-2026-04-12,2026-04-12
```

## Iteration 04 — first photography sprint

Once you greenlight the budget, the first sprint produces:
1. **Home hero spotlight image** (Stocksy curated buy — 1 image, 2 alts)
2. **5 hub-page hero images** (About, Dental Public Health, Join, Attend, Learn) — mix of commissioned + Stocksy
3. **News strip placeholders** replaced with at least 3 real images
4. **Board headshots** standardized (request from members; light retouch)

This first sprint can land in 4–6 weeks if you give the green light.
