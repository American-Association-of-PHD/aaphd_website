# Content Sources — Iteration 03

## URLs fetched (2026-04-24)

| Page | URL | Status | Used in |
|---|---|---|---|
| Home | https://www.aaphd.org/ | ✅ | `index.html` (hero, spotlight, news, footer) |
| Mission | https://www.aaphd.org/mission | ✅ | `about.html` (mission, vision, history) |
| Board of Directors | https://www.aaphd.org/board-of-directors | ✅ | `about.html` (2026–27 leadership grid — verbatim) |
| Membership | https://www.aaphd.org/membership | ✅ | `join.html` (all tiers, prices, eligibility) |
| Institutional Membership | https://www.aaphd.org/institutional-membership | ✅ | `join.html` (Tier One/Two/Three with real prices and seat counts) |
| Dental Public Health (Resources) | https://www.aaphd.org/dental-public-health | ✅ | `dph.html` (videos, fluoridation, journals lists) |
| Policies & Publications | https://www.aaphd.org/policies-publications | ✅ | `learn.html` (statements, white papers, briefs, journal card) |
| AAPHD Councils | https://www.aaphd.org/aaphd-councils | ✅ | `lead.html` (verbatim purpose statements for 4 councils) |
| NOHC 2027 | https://www.aaphd.org/nohc2027 | ⚠️ minimal | `attend.html` — page links out to nationaloralhealthconference.com; no in-depth NOHC copy on AAPHD site |
| Sitemap | https://www.aaphd.org/sitemap.xml | ⚠️ empty | redirected to Joomla XMap; XML returned no URLs |
| Journal | /journal, /journal-of-public-health-dentistry, /jphd | ❌ all 404 | **No standalone Journal page exists.** Journal info integrated into `learn.html` "Policies & Publications" with link to Wiley |

## Live navigation tree (extracted from home page)

```
About:
  Mission · Board of Directors · Past Presidents · Executive Director ·
  National Sponsors · Institutional Partners · Contact AAPHD

Dental Public Health:
  AAPHD DPH Curriculum · Resources · Dental Public Health Residencies ·
  American Board of Dental Public Health (external) · DPH Code of Ethics ·
  AAPHD Job Board (external)

Join:
  Membership Categories · Join or Renew · Institutional Membership

Attend:
  NOHC

Learn:
  Policies & Publications · Webinars · EDI Corner · Health Equity Glossary

Lead:
  AAPHD Councils · Standing Committees · EDI Committee · Trainer and Speaker Network

Recognize:
  AAPHD Merit Awards · 2026 Merit Award Winners ·
  Student Award Programs · 2026 Student Award Winners

Students:
  Starting a New Student Chapter · Initial Process for Chapter Approval ·
  Student Chapter Handbook · Sample By-Laws · Student Symposium

Foundation:
  AAPHD Foundation Committee · Foundation Pledge Drive (external) ·
  2025 Foundation Annual Report · Horowitz Scholarship · Small Grants Program ·
  AAPHD Foundation General Fund · Doherty Scholarship · Lotzkar Fund ·
  Dr. R. Gary Rozier Memorial Fund · Brian Burt Memorial Fund
```

## Verbatim quotes used in iter 03

### Home — hero / mission-of-record
> "AAPHD accepts the challenge to improve total health for all citizens through the development and support of effective programs of oral health promotion and disease prevention."

### About — mission / vision
> "To advance oral health for all by uniting and empowering dental public health professionals and partners through education, research, policy, practice and advocacy."

> "A future where oral health is recognized as essential to overall health and achieved equitably by all people."

### Membership intro
> "Membership in AAPHD is open to all individuals concerned with improving the oral health of the public. There are several membership categories based upon affiliation in dental public health."

> "All membership categories are on a calendar year basis, January 1-December 31. While AAPHD does not prorate membership dues, anyone who joins/renews after October 1 will receive the remainder of the calendar year as well as the next calendar year for the same membership fee."

### Lead — council purpose statements (all four)
Pulled verbatim (truncated) from `/aaphd-councils`. Each card preserves the opening clause.

### Spotlight (home)
> "AAPHD is pleased to highlight the launch of its Dental Public Health Reference Materials Committee, a newly created standing committee."

## Numbers used (and their sources)

| Number | Source |
|---|---|
| 522 members | March 2026 BOD minutes (knowledge base) |
| 10 webinars in 2026 | April 11–12 BOD minutes (knowledge base) |
| 7 institutional partners | April 11–12 BOD minutes (knowledge base) |
| 89 years | Calculation: 2026 − 1937 (founding year per /mission) |
| Tier One $1,500 / 5 faculty / up to 20 students / 1 post | /institutional-membership (verbatim) |
| Tier Two $2,500 / 10 faculty / 21–50 students / 2 posts | /institutional-membership (verbatim) |
| Tier Three $3,500 / 15 faculty / 50+ students / 3 posts | /institutional-membership (verbatim) |
| Dentist $275 / Associate $200 / Student $55 / Life $0 | /membership (verbatim) |
| Dentist optional levels: $305 / $330 / $385 | /membership (verbatim) |

## Items still needing sources

- **Specific 2026 Merit Award winners** — current page `/2026-award-winners` not fetched. Iter 04 should pull and replace placeholder card content.
- **Specific 2026 Student Award winners** — same.
- **DPH Code of Ethics text** — page not fetched yet.
- **Past Presidents list** — page not fetched yet.
- **National Sponsors list** — page not fetched yet.
- **Institutional Partners list** (which universities are current partners) — page not fetched yet.
