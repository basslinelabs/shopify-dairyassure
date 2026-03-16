# DairyAssure Design Playbook

**Last updated:** 2026-03-15
**Status:** Initial playbook — no winners/losers recorded yet

---

## Comprehensive Improvement Hit List

Synthesized from: Site audit (52/100), 5 competitor analyses, DTC design best practices.

### How to Read This List

Each item has:
- **Priority:** P0 (do today) → P1 (this week) → P2 (this sprint) → P3 (future)
- **Impact:** 1-10 conversion impact estimate
- **Effort:** Low (< 1hr) / Medium (2-4hr) / High (1-2 days)
- **Inspiration:** Which competitor pattern informed this recommendation
- **Section:** Which section(s) this affects

---

## P0 — Fix Today (Conversion Blockers)

| # | Improvement | Impact | Effort | Section | Status |
|---|-------------|--------|--------|---------|--------|
| 1 | **Fix hero CTA link** — link to product page | 10/10 | Low | Hero | DONE |
| 2 | **Fix product intro CTA links** — both primary + secondary | 10/10 | Low | Product Intro | DONE |
| 3 | **Add CTA after every 2-3 sections** — "TRY DAIRYASSURE" inline CTAs after empathy anchor, after comparison, in guarantee | 9/10 | Medium | Multiple | TODO |

---

## P1 — High Impact (This Week)

### 1.1 Visual Rhythm Overhaul
**Problem:** Nearly every section uses the same light lavender background, creating visual monotony.
**Inspiration:** AG1 (dark/light alternation), Ritual (yellow/white contrast), Seed (white + gray)
**Fix:** Assign distinct background treatments:

| Section | Current BG | New BG | Rationale |
|---------|-----------|--------|-----------|
| Hero | Cream + cow print | Keep | Hero is fine |
| USP Marquee | Dark indigo | Keep | Already provides contrast |
| Empathy Anchor | Lavender | **White** | Clean break after marquee |
| Product Intro | Lavender | **Cream (#FAF7F2)** | Warm, product-forward |
| Three Pillars | Cream | **White** | Clean, instructional |
| Comparison | Lavender | **Blue-Indigo (#2B2A8C) dark** | High-impact competitive section |
| Trust Chorus | White | Keep white | Clean social proof |
| Buy Box | Default Dawn | **Cream** | Warm purchase environment |
| Guarantee | Indigo + cow print | **Blue-Indigo solid** (remove cow print) | Strong, clean, no pattern noise |
| Origin Story | Cream + cow print | **White** (remove cow print) | Let the story breathe |
| FAQ | Lavender | **Light gray (#F5F5F5)** | Neutral, scannable |
| Reviews | White | Keep white | Clean |
| Newsletter | Default Dawn | **Blue-Indigo** | Strong closer |

**Impact:** 8/10 | **Effort:** Medium (CSS changes only)

### 1.2 Sticky Mobile CTA Bar
**Problem:** No purchase opportunity until section #8. Mobile users (80%+ of DTC traffic) scroll past 7 sections with no way to act.
**Inspiration:** AG1 (CTA every 2-3 sections), standard DTC practice
**Fix:** Add a sticky bottom bar on mobile that appears after scrolling past the hero:
```
[  TRY DAIRYASSURE — $17.50  |  ★★★★★ 127 Reviews  ]
```
**Impact:** 9/10 | **Effort:** Medium (new snippet + CSS + JS for scroll trigger)

### 1.3 Consolidate Social Proof Sections
**Problem:** Trust Chorus (#7) and Reviews (#12) show the same testimonials (Maria L., James T., Rachel S.). Redundant = incredible.
**Inspiration:** Seed (one "1 million transformations" section), Ritual (one featured review)
**Fix:** Merge into one strong social proof section positioned after the buy box:
- Rating summary (stars + count)
- 3-5 review cards with unique testimonials
- Photo grid from trust chorus (if real photos available)
- "SEE MORE REVIEWS" link to dedicated reviews page
**Impact:** 7/10 | **Effort:** Medium

### 1.4 Replace Comparison Bar Chart with Feature Table
**Problem:** "Relief Convenience Score" is a made-up metric that damages credibility. Arbitrary scores (95, 52, 38) look manufactured.
**Inspiration:** AG1 (cost comparison table with real numbers)
**Fix:** Feature comparison table:

| Feature | DairyAssure | Lactase Pills | Dairy Alternatives | Avoiding Dairy |
|---------|-------------|---------------|--------------------|----------------|
| Ingredients | 1 (pure lactase) | 5-15 (fillers, binders) | Varies | N/A |
| Format | Sprinkle on food | Swallow before eating | Replace dairy | Skip it |
| Timing | No planning | 30 min before | Always | Always |
| Taste change | None (flavorless) | N/A | Yes | Yes (no dairy) |
| Portability | Stick pack fits anywhere | Bottle required | N/A | N/A |
| Duration | 90+ minutes | 30-45 minutes | Permanent | Permanent |

Keep headline: "One Ingredient. Zero Compromise."
**Impact:** 7/10 | **Effort:** Medium (new section Liquid/CSS)

### 1.5 Fix Review Distribution Visualization
**Problem:** Shows equal-length bars despite claiming 5.00 average. Hardcoded as 92%, 6%, 2%, 0%, 0%. Looks fake.
**Fix:** If all reviews are 5-star, show only the 5-star bar at 100%. Or adjust to a more believable distribution (4.8 average: 85% five-star, 12% four-star, 3% three-star).
**Impact:** 6/10 | **Effort:** Low (update hardcoded percentages in Liquid)

---

## P2 — Design Polish (This Sprint)

### 2.1 Replace Emojis with Custom SVG Icons
**Problem:** Emoji icons (USP marquee + product intro badges) feel informal for a health/wellness brand. Every competitor uses custom icons.
**Inspiration:** Ritual (monoline icons), AG1 (category icons), Seed (minimal icons)
**Fix:** Create 9 monoline SVG icons in brand teal (#5FC0D4) or indigo (#2B2A8C): single ingredient, flavorless, no preservatives, fast relief, 90+ minutes, grab & go, kosher, non-GMO, made in USA.
**Impact:** 6/10 | **Effort:** Medium (icon design + implementation)

### 2.2 Redesign Three Pillars Section
**Problem:** Dashed borders look like wireframes. Tiny icons are invisible. Step numbers dominate visually but are the least important information.
**Inspiration:** AG1 (clean 3-step with step images), Seed (technology explainer with visuals)
**Fix:**
- Remove dashed borders — use solid cards with subtle shadow or no borders
- Replace tiny icons with larger illustrations or product photography
- Make step 3 ("Enjoy") visually distinct — it's the emotional payoff
- Add a CTA after step 3: "Ready to try it?"
- Consider horizontal timeline on desktop instead of equal cards
**Impact:** 5/10 | **Effort:** Medium

### 2.3 Trim Origin Story
**Problem:** Three dense paragraphs = wall of text. On mobile, 1654px tall. Duplicates content from hero and empathy anchor.
**Inspiration:** Olipop (no origin story on homepage — deferred to About page), Ritual (lean brand story with "For Skeptics, By Skeptics" — just one line)
**Fix:**
- Cut to 1 paragraph max
- Pull closing line "Welcome to DairyAssure. Welcome back to dairy." as standalone large-type moment
- Link to dedicated About page for full story
- Remove cow print background (3rd usage)
- Make photo larger, text smaller
**Impact:** 5/10 | **Effort:** Low

### 2.4 Cut FAQ to Top 5
**Problem:** 10 FAQs creates visual overwhelm. 1000px tall even collapsed.
**Inspiration:** AG1 (8 FAQs but on a much longer page), Seed (FAQs on PDP not homepage)
**Fix:**
- Keep top 5: "What is DairyAssure?", "How is it different from pills?", "How do I use it?", "Is it safe for children?", "What if it doesn't work?"
- Link to full FAQ page for remaining 5
- Consider 2-column layout on desktop
- Open #1 by default
**Impact:** 5/10 | **Effort:** Low

### 2.5 Style Newsletter Section
**Problem:** Uses Dawn's default `newsletter` section — doesn't match brand at all.
**Inspiration:** AG1 (dark section, "Start Your Journey"), Seed (mission-driven footer signup)
**Fix:**
- Blue-Indigo (#2B2A8C) background, white text
- Brand-styled input + teal CTA button
- Keep copy: "Join the Dairy Freedom Movement" + "10% off first order"
- Add "Trust your gut." sign-off
**Impact:** 5/10 | **Effort:** Medium

### 2.6 Style Buy Box to Match Brand
**Problem:** Uses Dawn's default `featured-product` styling, creating a visual break from the custom brand sections.
**Fix:**
- Match typography, button styles, and color scheme to brand system
- Add trust signals adjacent to buy button: guarantee badge, free shipping threshold, doctor recommended
- Remove share button — replace with urgency/scarcity element or trust badges
**Impact:** 6/10 | **Effort:** Medium

### 2.7 Hardcoded CSS Colors → Variables
**Problem:** `section-product-intro.css` uses hardcoded `#2B2A8C` instead of `var(--da-color-text)` in 4 places.
**Fix:** Replace all 4 instances with CSS variable references.
**Impact:** 2/10 | **Effort:** Low

---

## P3 — Future Enhancements

| # | Improvement | Impact | Effort | Inspiration | Notes |
|---|-------------|--------|--------|-------------|-------|
| 3.1 | Get real customer photos for trust section (replace AI) | 7/10 | High | All competitors use real imagery | Requires actual UGC collection |
| 3.2 | Add video testimonials | 7/10 | High | AG1, Seed | Requires video content creation |
| 3.3 | Add authority/press section ("As seen in...") | 6/10 | Medium | AG1 (NYT, Forbes), Ritual (press logos) | Requires press coverage |
| 3.4 | Add subscription option to buy box | 6/10 | Medium | AG1, Seed, Olipop all subscription-first | Requires Shopify subscription app |
| 3.5 | Build "Which strength?" quiz/comparison | 5/10 | Medium | Seed (quiz funnel), AG1 (taste quiz) | 10K vs 20K FCC comparison |
| 3.6 | Add `<noscript>` fallback for scroll animations | 4/10 | Low | Best practice | Ensures content visible without JS |
| 3.7 | Add cost-per-day comparison section | 5/10 | Medium | AG1 ($79/mo vs $225/mo table) | "$0.35/day vs buying 3 separate supplements" |
| 3.8 | Campaign hero rotation (seasonal) | 4/10 | Medium | AG1 (4-slide hero), Olipop (campaign hero) | After brand matures |
| 3.9 | Recipe/content section | 5/10 | High | Lactaid (recipe carousel) | Requires content library |
| 3.10 | Reduce total CSS/JS file count | 3/10 | Medium | Performance best practice | 58 CSS + 80 JS files currently |

---

## Recommended Build Sequence

If tackling improvements in order:

1. **P0 items** (CTA links — DONE, inline CTAs — next)
2. **1.1 Visual rhythm overhaul** (CSS-only, highest visual impact)
3. **1.2 Sticky mobile CTA bar** (conversion mechanic)
4. **1.4 Comparison table** (credibility upgrade)
5. **1.5 Fix review distribution** (quick win)
6. **1.3 Consolidate social proof** (reduce page length + remove redundancy)
7. **2.1 Custom SVG icons** (polish)
8. **2.3 Trim origin story** (reduce page length)
9. **2.4 Cut FAQ to 5** (reduce page length)
10. **2.5 Style newsletter** (brand consistency)
11. **2.2 Redesign three pillars** (design upgrade)
12. **2.6 Style buy box** (brand consistency)

This sequence prioritizes: broken things → visual impact → conversion mechanics → credibility → page length → polish.

---

## Winners & Losers (Updated After Each Build/Review)

### Winners
*No builds completed yet. This section grows with each session.*

### Losers
*No builds completed yet. This section grows with each session.*

### User Preferences
*None recorded yet.*

---

*This playbook compounds with every session. After each build or user feedback, extract the lesson and append here.*
