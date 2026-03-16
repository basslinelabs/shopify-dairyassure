# PDP QA + Design Critique — Loop 1

**Date:** 2026-03-15
**URL:** `https://dairyassure.com/products/dairyassure-lactase-powder-sticks`
**Theme:** Development (8e3541), preview_theme_id=138029793374
**Template:** `templates/product.json` (uses `main-product` section + `section-guarantee`)

---

## QA Checklist

| Check | Status | Notes |
|-------|--------|-------|
| ATC button says "Try DairyAssure"? | FAIL | Button says **"Sold out"** (product has zero inventory). When in stock, the default Dawn text "Add to cart" would display — no customization to "Try DairyAssure" has been applied to `main-product.liquid`. |
| Trust bullets have teal checkmark circles? | PASS | Four trust bullets use `::before` pseudo-element with `content: "checkmark"`, `background-color: rgb(95, 192, 212)` (teal `#5FC0D4`), `color: white`, `border-radius: 50%`, `display: flex`. Class: `.da-trust-bullet`. |
| "As low as $0.35/stick" price frame? | PARTIAL | Text "As low as $0.35/stick" is present in the DOM (visible in a11y tree) but renders as plain gray text below the price badge — no visible "frame" or styled container around it. |
| Guarantee section below product info? | PASS | `section-guarantee` renders correctly with 5-star image, heading "The DairyAssure Promise", body copy, and subtext. Visible on both desktop and mobile. |
| FAQ tabs expand/collapse? | PASS | Five collapsible tabs (Dawn `collapsible_tab` blocks) expand on click and reveal answer content. Uses native `<details>/<summary>` elements. Tested "What exactly is DairyAssure?" — expanded correctly. |
| Console errors? | FAIL | `Uncaught TypeError: Cannot read properties of undefined (reading 'dataset')` at `media-gallery.js:26`. The `onSlideChanged` handler fires when `event.detail.currentElement` is undefined. This is a Dawn slider/gallery bug triggered during initialization. |
| Product image gallery works? | PARTIAL | 7 product media items are present. Gallery renders on both desktop (stacked layout) and mobile (slider with thumbnail strip). The `media-gallery.js` console error suggests the slide-change listener may misfire. Desktop uses stacked layout so thumbnails don't apply; mobile slider has left/right arrows and thumbnail buttons. |
| Variant picker functional? | N/A | No `variant-radios` or `variant-selects` component rendered. The `product.json` template configures a `variant_picker` block with `picker_type: "button"`, but the product likely has only one variant (50 Pack), so Shopify hides the picker. This is expected behavior. |

### Critical Bug: Product URL Intermittently Redirects to Homepage

The product URL (`/products/dairyassure-lactase-powder-sticks`) intermittently redirects to `/` (the homepage). This was reproduced multiple times during testing:

- **Server response:** Returns `200 OK` with `pageType: product` (no server-side redirect).
- **Behavior:** The product page loads correctly on the first navigation but on page reload or subsequent visits in the same tab, it redirects to the homepage.
- **Mobile vs Desktop:** More reliably stays on the product page when using mobile viewport. Desktop viewport redirects more frequently.
- **Likely cause:** Shopify's speculative navigation / prefetch (`speculation-rules` header present) or a browser-level cache issue with the preview theme. Could also be related to the `media-gallery.js` error causing a navigation side effect.
- **Impact:** HIGH — users clicking "Shop" or any product link may land on the homepage instead of the PDP.

---

## Design Critique Scores

### Visual Impact: 6/10
The PDP is clean and functional but lacks visual punch. The left side is dominated by a single large product pouch image on a plain white background. There is no lifestyle context, no hero banner, no color to draw the eye. The page feels like a default Shopify template rather than a branded experience. Compare with the homepage which has a compelling hero section, photography, and brand storytelling. The PDP has none of that richness.

### Brand Consistency: 7/10
The periwinkle page background (`#F5F2FA` or similar light lavender) is on-brand. The indigo text color (`#2B2A8C`) is correctly applied to headings and trust bullets. The teal checkmark circles use the brand accent (`#5FC0D4`). However, the "SOLD OUT" button uses a muted lavender (`#A8A0C2`) which blends too much with the background. The "Buy it now" button is teal, which is correct. The guarantee section has a strong indigo background. Overall, colors are correct but the page lacks the warmth and approachability of the brand — it feels sterile.

### Typography: 7/10
Clear hierarchy: H1 title (large, bold), price (prominent with "Sold out" badge), description (body text), trust bullets (smaller with checkmark icons), quantity/CTA, then FAQ accordions. The "As low as $0.35/stick" text is subtle gray and could be more prominent. The guarantee section heading and body are well-styled. One issue: the title "DairyAssure Lactase Powder Sticks -- 50 Pack" is long and functional rather than emotional. On mobile the heading stack is solid.

### Trust Signals: 7/10
Four trust bullets with teal checkmarks are positioned correctly between the description and the buy button. The guarantee section below is effective with 5-star imagery. The FAQ tabs add credibility. Missing: no payment trust badges (Visa, MC, etc.), no "Doctor Recommended" badge near the buy button (only in the announcement bar), no social proof (review count/stars) near the price. The "127 reviews" and "5 stars" badge visible on the mobile sticky bar is good but not present in the main product info area.

### Mobile Experience: 7/10
The mobile layout works well. The sticky bottom bar with "TRY DAIRYASSURE" CTA, star rating, review count, and price is an excellent CRO element. The image gallery slider with thumbnails functions properly. Trust bullets stack nicely. FAQ tabs are full-width and easy to tap. One issue: the Shopify preview bar obscures the price area on mobile. The guarantee section scrolls naturally below the product info. Footer is properly simplified.

### CRO Effectiveness: 5/10
Several friction points reduce conversion potential:
1. **Product is "Sold out"** — the primary CTA is disabled. No "Notify Me" or waitlist option exists. This is the biggest conversion killer.
2. **No variant selection visible** — if there are two strengths (Single 10K FCC, Extra 20K FCC), they should be selectable here. Currently only "50 Pack" shows.
3. **No urgency or scarcity signals** — no stock count, no "selling fast", no limited-time offer.
4. **No social proof near the buy button** — reviews/stars should appear right below the title or price.
5. **"As low as $0.35/stick"** lacks visual emphasis — this is a strong value prop that should be in a styled callout box.
6. **No subscription/auto-ship option** — for a consumable product, this is a missed recurring revenue opportunity.
7. **The mobile sticky bar is excellent** — this is the one strong CRO element.

---

## Top 3 Issues to Fix

### 1. CRITICAL: Product URL Redirects to Homepage (Bug)
**Severity:** P0
**Impact:** Users cannot reliably access the product page. Any CTA, ad, or link pointing to the product URL may dump users on the homepage, destroying conversion.
**Fix:** Investigate the client-side redirect cause. Check if `media-gallery.js` error triggers a navigation fallback. Test with the preview theme parameter removed. Check Shopify URL redirects in admin (`Settings > Navigation > URL Redirects`). Consider adding inventory to the product to see if the "sold out" state triggers different behavior.

### 2. ATC Button Shows "Sold Out" — No Waitlist/Notify Option (CRO)
**Severity:** P1
**Impact:** Zero conversion possible. Visitors who arrive ready to buy have no way to transact or express interest. No email capture for restock notifications.
**Fix:** Either (a) add inventory to enable purchasing, or (b) replace the disabled "Sold Out" button with a "Notify Me When Available" email capture form. Shopify apps like "Back in Stock" or Klaviyo's back-in-stock flow can handle this. At minimum, customize the button text from "Sold out" to "Coming Soon — Get Notified" and wire it to the existing Klaviyo integration.

### 3. PDP Lacks Visual Richness Compared to Homepage (Design)
**Severity:** P2
**Impact:** The homepage is a beautiful, immersive brand experience with lifestyle photography, social proof, comparison charts, and storytelling. The PDP is a barebones Dawn product template. Users arriving directly on the PDP (from ads, emails, or social) miss all the persuasion built into the homepage.
**Fix:** Either (a) add more sections to `product.json` (social proof carousel, comparison snippet, "How It Works" mini-section, lifestyle image band), or (b) since this is a single-product store, consider making the homepage the primary purchase destination and ensuring the "TRY DAIRYASSURE TODAY" hero CTA adds to cart directly (ajax ATC) rather than linking to a separate product page. The homepage already has a `buy_box` featured product section — enhance it with the trust bullets and FAQ tabs from the PDP template.

---

## Additional Observations

- The `media-gallery.js:26` console error should be patched. The fix is a null check: `if (!event.detail?.currentElement) return;` at the top of `onSlideChanged()`.
- The `product.json` template has `gallery_layout: "stacked"` which shows all images vertically on desktop. Consider switching to `"thumbnail"` or `"thumbnail_slider"` for a more compact above-the-fold layout.
- The product title "DairyAssure Lactase Powder Sticks -- 50 Pack" is SEO-functional but not emotionally engaging. Consider a custom heading block with a shorter, punchier title and using the full name only in the `<title>` tag.
- Payment trust icons (Visa, Mastercard, PayPal, etc.) should be added near the buy button via a custom block or the Dawn `icon-list` pattern.
- The "As low as $0.35/stick" price-per-unit callout should be styled in a bordered/shaded frame to draw attention to the value proposition.

---

## Screenshots Captured

- `pdp-desktop-above-fold.png` — Desktop 1440x900, above the fold
- `pdp-desktop-fullpage.png` — Desktop full page
- `pdp-desktop-viewport.png` — Desktop viewport (confirmed PDP template)
- `pdp-desktop-guarantee.png` — Desktop guarantee section visible
- `pdp-mobile-viewport.png` — Mobile 375x812, above the fold
- `pdp-mobile-full.png` — Mobile full page
- `pdp-mobile-faq-expanded.png` — Mobile with FAQ expanded
