# Loop 2 — Homepage QA + Design Critique

**Date:** 2026-03-15
**URL:** https://fpdjxw-jh.myshopify.com/?preview_theme_id=138029793374
**Viewports tested:** Desktop 1440x900, Mobile 375x812
**Screenshots:** `loop2-desktop-full.png`, `loop2-mobile-full.png`

---

## Loop 1 Fix Verification

| Fix | Expected | Actual | Status |
|-----|----------|--------|--------|
| Empathy anchor background | White (`#FFFFFF`) | `rgb(255, 255, 255)` | PASS |
| FAQ background | Gray (`#F5F5F5`) | `rgb(245, 245, 245)` | PASS |
| Hero heading size (desktop) | 52-56px | 56px at 1440w | PASS |
| Hero heading size (mobile) | 32px base | 32px at 375w | PASS |
| Hero letter-spacing | Increased | `-0.6px` (desktop) | PASS |
| Three Pillars borders removed | No solid borders | `border: 0px none` | PASS |
| Three Pillars subtle shadows | Soft shadow | `rgba(43,42,140, 0.08) 0px 2px 12px` | PASS |
| Enjoy card (step 3) dark indigo bg | `#2B2A8C` | `rgb(43, 42, 140)` | PASS |
| Enjoy card white text | White | `rgb(255, 255, 255)` | PASS |
| Newsletter dark indigo bg | `#2B2A8C` | `rgb(43, 42, 140)` | PASS |
| Newsletter white heading text | White | `rgb(255, 255, 255)` | PASS |
| Origin story trimmed | 1 paragraph | 1 body paragraph + 1 closing tagline | PASS |

**All 12 Loop 1 fixes verified. No regressions.**

---

## Background Rhythm Audit (top to bottom)

| Section | Background | Color |
|---------|-----------|-------|
| Announcement bar | Dark indigo | `#2B2A8C` |
| Header | Warm white | `#FAF7F2` |
| Hero | Warm white | `#FAF7F2` |
| Marquee bar | Dark indigo | `#2B2A8C` |
| Empathy anchor | White | `#FFFFFF` |
| Product intro | White | `#FFFFFF` |
| Three Pillars | Warm white | `#FAF7F2` |
| Comparison | Dark indigo | `#2B2A8C` |
| Inline CTA | Warm white | `#FAF7F2` |
| Trust/Testimonials | White | `#FFFFFF` |
| Buy Box (featured product) | Lavender | `#E8E0F0` |
| Promise | Dark indigo | `#2B2A8C` |
| Origin Story | Warm white | `#FAF7F2` |
| FAQ | Gray | `#F5F5F5` |
| Reviews | White | `#FFFFFF` |
| Inline CTA (after reviews) | -- | -- |
| Newsletter | Dark indigo | `#2B2A8C` |
| Footer | Dark indigo | `#2B2A8C` |

**Verdict:** The rhythm is significantly improved. Dark indigo sections punctuate the page at regular intervals (marquee, comparison, promise, newsletter, footer). There is one issue: the **Empathy anchor and Product intro** sections are both pure white back-to-back with no visible divider, making them feel like one undifferentiated block on desktop. The warm white vs. pure white distinction is subtle enough to work elsewhere but these two adjacent white sections need a visual break.

---

## Section-by-Section Scoring

### 1. Hero
| Criterion | Score | Notes |
|-----------|-------|-------|
| Visual Impact | 8/10 | 56px heading is strong. Product image + text split layout works well. Star rating badge above headline adds credibility. |
| Brand | 9/10 | Warm white bg, teal CTA, brand copy all on-point. "Enjoy Dairy Without the Drama" is clean. |
| Mobile | 7/10 | 32px heading is adequate but could be bolder. Text-first stacking works. Trust bar below CTA is good. |
| CRO | 8/10 | Star rating + review count above fold, clear CTA, money-back guarantee mention. Solid. |

### 2. Marquee / Benefits Bar
| Criterion | Score | Notes |
|-----------|-------|-------|
| Visual Impact | 8/10 | Dark indigo scrolling bar creates a strong visual break. All 9 USPs visible. |
| Brand | 8/10 | On-brand color, all key USPs present. |
| Mobile | 8/10 | Horizontal scroll works. |
| CRO | 7/10 | Passive reinforcement -- good but not clickable. |

### 3. Empathy Anchor ("Life's Best Moments")
| Criterion | Score | Notes |
|-----------|-------|-------|
| Visual Impact | 6/10 | White background is correct (no more lavender). Stats are readable. But the section feels flat -- three stat cards with no visual differentiation from the product intro below it. |
| Brand | 8/10 | Emotional copy anchors the problem well. Stats add authority. |
| Mobile | 7/10 | Stats stack vertically, readable. |
| CRO | 7/10 | Problem-agitation is effective. Could benefit from a subtle visual treatment to separate it from what follows. |

### 4. Product Intro ("Meet the Simplest...")
| Criterion | Score | Notes |
|-----------|-------|-------|
| Visual Impact | 7/10 | Image + text card layout is clean. Inline testimonial snippets are a nice touch. Feature bullets are well-formatted. |
| Brand | 8/10 | Copy is concise and benefit-driven. Two CTAs (primary + secondary). |
| Mobile | 7/10 | Image stacks above text. Readable. |
| CRO | 8/10 | Dual CTA, social proof snippets inline, benefit bullets -- strong conversion section. |

### 5. Three Pillars ("How It Works")
| Criterion | Score | Notes |
|-----------|-------|-------|
| Visual Impact | 8/10 | Major improvement. Shadow cards look clean. The dark indigo "Enjoy" card creates a visual focal point drawing the eye to the final step. Arrow connectors between cards on desktop are a nice touch. |
| Brand | 9/10 | Perfectly on-brand. Icons, numbered steps, concise copy. |
| Mobile | 7/10 | Cards stack vertically. The arrow connectors likely disappear which is fine. |
| CRO | 8/10 | Clear 3-step process reduces perceived complexity. "Enjoy" as the highlighted endpoint is smart. |

### 6. Comparison ("One Ingredient. Zero Compromise.")
| Criterion | Score | Notes |
|-----------|-------|-------|
| Visual Impact | 8/10 | Dark indigo background makes this section pop. Horizontal bar chart format is scannable. DairyAssure at 95 vs competitors in the 15-52 range is visually compelling. |
| Brand | 8/10 | Confident without being aggressive. Tag descriptors (PURE, SIMPLE, EFFORTLESS) reinforce positioning. |
| Mobile | 7/10 | Bars should stack well at 375px. |
| CRO | 9/10 | This is a high-conversion section. Comparison kills objections. CTA at bottom. |

### 7. Trust / Social Proof Carousel
| Criterion | Score | Notes |
|-----------|-------|-------|
| Visual Impact | 7/10 | Testimonial cards with star ratings. Photo grid below adds lifestyle context. |
| Brand | 8/10 | Real-feeling testimonials aligned with brand voice. |
| Mobile | 7/10 | Carousel swipes well. Photos grid may be small. |
| CRO | 8/10 | Strong social proof block. |

### 8. Buy Box (Featured Product)
| Criterion | Score | Notes |
|-----------|-------|-------|
| Visual Impact | 6/10 | Lavender background (#E8E0F0) feels slightly off compared to the rest of the page palette. "Sold out" state dampens impact. |
| Brand | 7/10 | Product info is clear. Lavender is on the brand palette but feels disconnected here. |
| Mobile | 6/10 | Functional but the sold-out state is discouraging mid-page. |
| CRO | 4/10 | "Sold out" with disabled buttons is a conversion killer. If inventory is actually available, this needs fixing urgently. If truly sold out, consider hiding or replacing with a waitlist/notify form. |

### 9. Promise / Guarantee
| Criterion | Score | Notes |
|-----------|-------|-------|
| Visual Impact | 8/10 | Dark indigo background, clear guarantee copy. |
| Brand | 9/10 | "That's how confident we are in what one ingredient can do" -- perfect voice. |
| Mobile | 8/10 | Clean and readable. |
| CRO | 8/10 | Risk-reversal is essential. Well-placed after the buy box. |

### 10. Origin Story ("Welcome Back to Dairy")
| Criterion | Score | Notes |
|-----------|-------|-------|
| Visual Impact | 7/10 | Two lifestyle images + trimmed copy. Much better than the previous 3-paragraph version. |
| Brand | 9/10 | Warm, personal, concise. "Welcome to DairyAssure. Welcome back to dairy." is a strong close. |
| Mobile | 7/10 | Images + text stack well. |
| CRO | 6/10 | Brand-building section, not conversion-driving. Appropriate placement lower on page. |

### 11. FAQ
| Criterion | Score | Notes |
|-----------|-------|-------|
| Visual Impact | 7/10 | Gray (#F5F5F5) background correctly differentiates from white sections. Accordion format is clean. 10 questions is comprehensive. |
| Brand | 8/10 | Questions are well-chosen and anticipate real objections. |
| Mobile | 8/10 | Accordion works well on mobile. |
| CRO | 8/10 | Objection-handling is strong. Covers safety, ingredients, comparison to pills, value, doctor recommendation. |

### 12. Reviews ("What Real Customers Are Saying")
| Criterion | Score | Notes |
|-----------|-------|-------|
| Visual Impact | 7/10 | Star histogram, tabs for product variants, individual review cards. Solid. |
| Brand | 7/10 | Consistent with trust section above. |
| Mobile | 7/10 | Readable layout. |
| CRO | 8/10 | Second social proof touchpoint near bottom of page reinforces before final CTA. |

### 13. Newsletter ("Join the Dairy Freedom Movement")
| Criterion | Score | Notes |
|-----------|-------|-------|
| Visual Impact | 8/10 | Dark indigo background with white text. Strong visual break before footer. |
| Brand | 8/10 | "Dairy Freedom Movement" is on-brand community language. 10% offer incentivizes. |
| Mobile | 7/10 | Email input and subscribe button need to be checked for touch target sizing. |
| CRO | 7/10 | Good lead capture. Incentive is clear. |

---

## Overall Score Summary

| Section | Visual Impact | Brand | Mobile | CRO | Avg |
|---------|:---:|:---:|:---:|:---:|:---:|
| Hero | 8 | 9 | 7 | 8 | 8.0 |
| Marquee | 8 | 8 | 8 | 7 | 7.8 |
| Empathy Anchor | 6 | 8 | 7 | 7 | 7.0 |
| Product Intro | 7 | 8 | 7 | 8 | 7.5 |
| Three Pillars | 8 | 9 | 7 | 8 | 8.0 |
| Comparison | 8 | 8 | 7 | 9 | 8.0 |
| Trust/Social Proof | 7 | 8 | 7 | 8 | 7.5 |
| Buy Box | 6 | 7 | 6 | 4 | 5.8 |
| Promise | 8 | 9 | 8 | 8 | 8.3 |
| Origin Story | 7 | 9 | 7 | 6 | 7.3 |
| FAQ | 7 | 8 | 8 | 8 | 7.8 |
| Reviews | 7 | 7 | 7 | 8 | 7.3 |
| Newsletter | 8 | 8 | 7 | 7 | 7.5 |
| **Page Average** | **7.3** | **8.2** | **7.2** | **7.4** | **7.5** |

---

## Top 3 Issues for Loop 3

### 1. BUY BOX "SOLD OUT" STATE (CRO: Critical)

The featured product buy box mid-page shows "Sold out" with both the Add to Cart and Buy it Now buttons disabled. This is the most damaging CRO issue on the page. Every CTA above it sends users toward a product they apparently cannot buy.

**Fix:** If inventory exists, fix the product availability. If truly out of stock, replace the buy box with a "Notify Me" email capture form, or hide the section entirely and rely on the CTA links routing to the PDP where a back-in-stock form can live.

### 2. EMPATHY + PRODUCT INTRO: NO VISUAL BREAK (Visual Impact: Medium)

The empathy anchor section (white, `#FFFFFF`) flows directly into the product intro section (also white, `#FFFFFF`) with no visible divider, background change, or spacing differentiation on desktop. They read as one giant undifferentiated white block spanning roughly 800px of vertical space.

**Fix options (pick one):**
- Give the empathy anchor section a very light warm background (`#FAF7F2`) to create a subtle alternation: warm white -> white -> warm white (pillars)
- Add a thin horizontal rule or decorative divider between the two sections
- Add more vertical padding between them (80-100px gap)

### 3. NEWSLETTER BODY TEXT COLOR INHERITANCE (Visual: Minor but Broken)

The newsletter wrapper `color` property is `rgba(43, 42, 140, 0.75)` (indigo) even though the background is dark indigo. The `<p>` subheading is correctly white (`rgba(255, 255, 255, 0.85)`) but the wrapper itself has the wrong inherited color. This means any unstyled child elements (e.g., form labels, placeholder text, error messages) will render as indigo-on-indigo (invisible).

**Fix:** Set `.newsletter__wrapper` or its color-scheme override to use `color: #FFFFFF` or `color: rgba(255, 255, 255, 0.85)` as the base text color when the dark indigo background is applied. Verify the email input placeholder text is visible (white or light teal) against the dark background.

---

## Additional Observations (Lower Priority)

- **Hero line-height on desktop is `0px`** for the `<h1>` that wraps the logo (the header `h1`, not the hero heading). This is a Dawn theme quirk and not user-visible, but worth noting.
- The **buy box lavender background** (`#E8E0F0`) is the only section using this color. Consider aligning it with the warm white or white palette used everywhere else, or lean into it as a deliberate "featured" treatment if the sold-out issue is resolved.
- The **CTA buttons are consistently teal** (`rgb(95, 192, 212)`) with white text and generous padding (`16px 32px`). This is good brand consistency.
- The **footer and newsletter both use dark indigo**, which makes them visually merge. A thin teal divider line between them would help delineate.

---

## Loop 2 Verdict

Significant improvement over Loop 1. All targeted fixes landed correctly. The page now has much better visual rhythm with alternating warm white / white / dark indigo sections. The Three Pillars "Enjoy" card treatment is a standout improvement. The main remaining issue is the sold-out buy box which undermines the entire conversion funnel.

**Overall page grade: B+ (7.5/10)**
**Priority for Loop 3: Fix buy box availability > Add visual break between empathy/product intro > Fix newsletter text color inheritance**
