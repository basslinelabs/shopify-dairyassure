# DairyAssure Site Audit — Combined Report

DATE: 2026-03-15
SOURCES: Visual QA (browser screenshots), Lighthouse audit, Code audit (codebase scan)

---

## Executive Summary

The DairyAssure storefront has **strong copy and section architecture** but is blocked from launch by three categories of issues: (1) invisible text from a CSS contrast bug, (2) missing product photography across most sections, and (3) the product is marked "Sold Out" with no inventory. The code layer has solid foundations but needs accessibility fixes before launch — 4 critical ARIA issues and several contrast failures.

**Lighthouse scores:** Accessibility 88/100, Best Practices 100/100, SEO 100/100, LCP 468ms (excellent), CLS 0.00 (excellent).

---

## CRITICAL — Blocks Launch

### C1. Product Intro section text is invisible
- **Source:** Lighthouse
- **File:** [assets/section-product-intro.css](assets/section-product-intro.css)
- **Issue:** `.da-pi__heading`, `.da-pi__body`, `.da-pi__split-quote`, `.da-pi__split-author` use text color `#e6deef` on background `#e8e0f0` — contrast ratio **1.01:1**. Text is effectively invisible.
- **Fix:** Change all `.da-pi__*` text colors to brand navy `#2D2A5E`.

### C2. No product photography — placeholder SVGs everywhere
- **Source:** Visual QA
- **Issue:** Hero shows Dawn backpack SVG. Product intro, origin story, and buy box sections have placeholder outlines. ~60% of the homepage is empty lavender space where images should be.
- **Fix:** Add real product photography (stick pack bag, individual stick, lifestyle shots). This is the single highest-impact visual fix.

### C3. Product is "Sold Out" — purchase funnel is broken
- **Source:** Visual QA (PDP)
- **Issue:** "DairyAssure Lactase Powder Sticks — 50 Pack" shows "Sold out" badge with grayed-out Add to Cart.
- **Fix:** Add inventory in Shopify admin, or add "Coming Soon" messaging if intentional.

### C4. Missing focus-visible styles on all custom buttons
- **Source:** Code audit
- **File:** [assets/da-global.css](assets/da-global.css) lines 58-116
- **Issue:** `.da-btn`, `.da-btn-secondary`, `.da-reviews__tab`, `.da-reviews__show-more-btn` have no `:focus-visible` styles. Keyboard users can't see focus.
- **Fix:** Add `outline: 3px solid var(--da-color-accent); outline-offset: 3px;` on `:focus-visible`.

### C5. Review filter tabs missing ARIA tab semantics
- **Source:** Code audit
- **File:** [sections/section-reviews.liquid](sections/section-reviews.liquid) lines 58-62
- **Issue:** Tab buttons lack `role="tablist"`, `role="tab"`, `aria-selected`, `aria-controls`. Screen readers can't understand the UI.
- **Fix:** Add proper ARIA tab pattern. Update JS to toggle `aria-selected`.

### C6. Invalid `role="marquee"` on USP section
- **Source:** Code audit
- **File:** [sections/section-usp-marquee.liquid](sections/section-usp-marquee.liquid) line 5
- **Issue:** `role="marquee"` causes screen readers to continuously announce scrolling content.
- **Fix:** Replace with `role="region" aria-label="Product benefits"`.

### C7. Comparison chart bars lack accessible values
- **Source:** Code audit
- **File:** [sections/section-comparison.liquid](sections/section-comparison.liquid) lines 31-43
- **Issue:** Scores are communicated purely visually via CSS width. No ARIA attributes.
- **Fix:** Add `role="meter"`, `aria-valuenow`, `aria-valuemin="0"`, `aria-valuemax="100"`, `aria-label`.

---

## HIGH — Fix Before Deploy

### H1. Muted text fails contrast on lavender background
- **Source:** Code audit + Lighthouse
- **Files:** [assets/da-global.css](assets/da-global.css) line 35, [assets/section-empathy-anchor.css](assets/section-empathy-anchor.css)
- **Issue:** `--da-color-muted-text: #7A7494` on `--da-color-primary-bg: #E8E0F0` = 3.5:1 (needs 4.5:1). Affects source citations, disclaimers.
- **Fix:** Darken to at least `#5E586E`.

### H2. Google Fonts loaded as render-blocking resource
- **Source:** Code audit
- **File:** [layout/theme.liquid](layout/theme.liquid) line 47
- **Issue:** Plus Jakarta Sans CSS blocks first paint.
- **Fix:** Defer with `media="print" onload="this.media='all'"` or self-host.

### H3. Swiper loaded from CDN — single point of failure
- **Source:** Code audit
- **File:** [layout/theme.liquid](layout/theme.liquid) lines 51-53
- **Issue:** Trust chorus carousel depends on `cdnjs.cloudflare.com`. CDN down = broken carousel.
- **Fix:** Self-host Swiper in assets/ or replace with CSS scroll-snap.

### H4. Both mobile and desktop hero images always downloaded
- **Source:** Code audit
- **File:** [sections/section-hero.liquid](sections/section-hero.liquid) lines 40-63
- **Issue:** Both image sets in DOM with `loading="eager"`. CSS hides one but both download.
- **Fix:** Use `<picture>` with `<source media>` so browser downloads only one.

### H5. `document.activeElement.blur()` in cart updates
- **Source:** Code audit
- **File:** [assets/cart.js](assets/cart.js) line 260
- **Issue:** Forcibly removes focus during cart update, disorienting keyboard users.
- **Fix:** Remove the line. Focus is already managed in the callback.

### H6. Hardcoded review distribution percentages
- **Source:** Code audit
- **File:** [sections/section-reviews.liquid](sections/section-reviews.liquid) lines 36-52
- **Issue:** 92%, 6%, 2% bars are hardcoded, not driven by data.
- **Fix:** Add section settings for each star percentage.

### H7. PDP below-fold sections use unstyled Dawn defaults
- **Source:** Visual QA
- **Issue:** "Image with text" and "Multicolumn" sections on PDP clash with custom brand design.
- **Fix:** Style to match DairyAssure design system or remove until built.

### H8. No star rating on PDP near buy button
- **Source:** Copy QA
- **Issue:** No social proof above the fold on PDP.
- **Fix:** Enable Dawn's product rating block.

### H9. Guarantee section subtext fails contrast
- **Source:** Code audit
- **File:** [assets/section-guarantee.css](assets/section-guarantee.css) line 57
- **Issue:** `rgba(255,255,255,0.6)` on `#2B2A8C` = ~3.8:1 (needs 4.5:1).
- **Fix:** Increase opacity to 0.75+.

---

## MEDIUM — Fix Next Sprint

### M1. Footer nav too sparse — only "Search" and "Privacy Choices"
- **Source:** Visual QA
- **Fix:** Add FAQ, Contact, Shipping & Returns links to the Support menu.

### M2. Swiper pagination dots too small for touch (8px)
- **Source:** Code audit
- **File:** [assets/section-trust-chorus.css](assets/section-trust-chorus.css) lines 73-81
- **Fix:** Add `min-width: 44px; min-height: 44px;` with padding.

### M3. Hero animation ignores `prefers-reduced-motion`
- **Source:** Code audit
- **File:** [assets/section-hero.css](assets/section-hero.css) lines 114-127
- **Fix:** Wrap in `@media (prefers-reduced-motion: no-preference)`.

### M4. `da-animate-in` utility ignores `prefers-reduced-motion`
- **Source:** Code audit
- **File:** [assets/da-global.css](assets/da-global.css) lines 268-278
- **Fix:** Add `@media (prefers-reduced-motion: reduce) { .da-animate-in { opacity:1; transform:none; transition:none; } }`

### M5. Scroll listeners missing `{ passive: true }`
- **Source:** Code audit
- **File:** [assets/global.js](assets/global.js) lines 745, 846
- **Fix:** Add `{ passive: true }` to scroll event listeners.

### M6. Mobile: empathy stats too small horizontally
- **Source:** Visual QA
- **Fix:** Stack vertically on mobile or use 2+1 grid.

### M7. Section CSS loaded synchronously (render-blocking)
- **Source:** Code audit + Lighthouse
- **Issue:** 36 render-blocking CSS files. Custom section CSS uses `stylesheet_tag` instead of deferred pattern.
- **Fix:** Use `media="print" onload` for below-fold section CSS.

### M8. Review cards cached at DOMContentLoaded — stale in theme editor
- **Source:** Code audit
- **File:** [assets/section-reviews.js](assets/section-reviews.js) lines 6-7
- **Fix:** Query inside click handler + add `shopify:section:load` listener.

### M9. Missing `<noscript>` fallback for reviews and carousel
- **Source:** Code audit
- **Fix:** Show all cards by default, hide tabs, use CSS scroll-snap fallback.

---

## LOW — Backlog

- Replace emoji with SVG icons in USP marquee
- Add `tabindex="-1"` to duplicate marquee track items
- Filter empty social links from JSON-LD `sameAs` array
- Consistent `ease-out` timing across all transitions
- Replace cow-print radial gradients with SVG for performance
- Conditionally load `cart-notification.js` only when cart type is "notification"

---

## Positive Findings

- LCP 468ms and CLS 0.00 — excellent core web vitals
- SEO 100/100 and Best Practices 100/100
- Skip-to-content link properly implemented
- Star rating snippet uses correct `role="img"` + `aria-label` pattern
- Marquee duplicate track correctly `aria-hidden="true"`
- `prefers-reduced-motion` respected on marquee animation
- `font-display: swap` on all font declarations
- Cart live regions use `aria-live="polite"` for screen reader announcements
- FAQ uses native `<details>/<summary>` for built-in keyboard support
- Swiper initialized with a11y options (role descriptions, slide labels)
- Copy is strong, consistent, and strategically placed across all sections

---

## Top 5 Actions (Priority Order)

1. **Fix Product Intro contrast bug** — text is literally invisible. One CSS change.
2. **Add product photography** — hero, product intro, origin story, buy box. Use `/generate-images` or `/creative-placement` to fill these slots.
3. **Add product inventory** — enable purchases.
4. **Fix 4 ARIA issues** (C4-C7) — button focus, review tabs, marquee role, comparison bars.
5. **Fix contrast issues** (H1, H9) — muted text and guarantee subtext.
