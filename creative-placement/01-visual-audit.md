# Creative Placement — Phase 1: Visual Audit

**Date:** 2026-03-15
**Source:** Codebase analysis (store password-protected; no live screenshot)
**Page:** Homepage (`templates/index.json`)
**Brand:** DairyAssure — lactase powder stick packs

---

## 1. Visual DNA

Extracted from CSS design tokens (`da-global.css`), brand creatives (packaging mockups), and brand identity docs.

```
VISUAL DNA
─────────────────────────────────────────
Palette:
  dominant:    #E8E0F0 — Light lavender (page background)
  secondary:   #D0C6E0 — Mid lavender (cards, panels, marquee)
  accent:      #5FC0D4 — Teal (CTA buttons, active states)
  neutral:     #FFFFFF — White (card fills, product intro container)
  text:        #2B2A8C — Blue-indigo (headings, body, icons, dark bg)
  star:        #FFD321 — Gold (star ratings)
  muted:       #7A7494 — Muted indigo (disclaimers, citations)
  subtle:      #A8A0C2 — Mid lavender (borders, dividers)

Lighting:
  direction:   back-lit / side-lit (golden hour preferred)
  temperature: warm 3200K (lifestyle) / neutral 5600K (product shots)
  quality:     soft/diffused — natural window light, no harsh shadows
  mood:        golden hour, candlelight, warm nostalgic glow

Photography Style:
  type:        lifestyle + product
  subjects:    food moments, people enjoying dairy, product in context
  treatment:   candid, documentary, natural — never posed or staged
  grain:       slight (Kodak Gold 200 warmth)
  film_stock:  Kodak Gold 200 (lifestyle), Fujifilm Pro 400H (mornings)

Textures & Surfaces:
  primary:     sun-warmed wood, butcher block, checkered tablecloths
  secondary:   ceramic plates, glass, natural linen
  finish:      matte / natural grain — never glossy or clinical

Composition Patterns:
  alignment:   rule-of-thirds (hero split layout), centered (product)
  density:     moderate — generous whitespace, not cramped
  whitespace:  generous

Brand Feeling:
  adjectives:  joyful, nostalgic, warm, approachable, playful
  anti-adjectives: clinical, sterile, stock-photo, cold, corporate
─────────────────────────────────────────
```

### Visual DNA Anchor (for all prompts)

```
VISUAL DNA ANCHOR:
"Back-lit soft diffused lighting at warm 3200K golden hour.
Sun-warmed wood and natural linen surfaces with matte natural finish.
Lifestyle candid documentary photography with Kodak Gold 200 warmth.
Color temperature matching lavender #E8E0F0 and blue-indigo #2B2A8C with teal #5FC0D4 accents.
Mood: joyful, nostalgic, warm, approachable, playful. AVOID: clinical, sterile, stock_photo_aesthetic, cold, corporate.
No text, no logos, no watermarks."
```

---

## 2. Image Slot Inventory

| # | Slot ID | Section Type | Current State | Max Width | Aspect Ratio | Text Overlay? | Gap Score |
|---|---------|-------------|---------------|-----------|-------------|--------------|-----------|
| 1 | `hero-image` | Hero split | Empty — placeholder SVG | 800px | ~1:1 (contained in flex column) | Yes (text left, image right) | 10 |
| 2 | `hero-image-mobile` | Hero split | Empty — no image set | 750px | ~1:1 | Yes (text above) | 9 |
| 3 | `product-intro-image` | Image-with-text | Empty — placeholder SVG | 800px | ~1:1 (product showcase) | No (image left, text right) | 10 |
| 4 | `origin-story-image-1` | About/story | Empty — placeholder SVG | 600px | ~3:4 (editorial portrait) | No | 9 |
| 5 | `origin-story-image-2` | About/story | Empty — placeholder SVG | 600px | ~3:4 (editorial portrait) | No | 9 |
| 6 | `three-pillars-icon-1` | Icon/badge | Empty — no icon | 96px | 1:1 | No | 6 |
| 7 | `three-pillars-icon-2` | Icon/badge | Empty — no icon | 96px | 1:1 | No | 6 |
| 8 | `three-pillars-icon-3` | Icon/badge | Empty — no icon | 96px | 1:1 | No | 6 |
| 9 | `faq-decorative-icon` | Icon/badge | Empty — no icon | 160px | 1:1 | No | 4 |
| 10 | `trust-chorus-photo-1` | Testimonial lifestyle | Empty — not configured | 400px | 1:1 (grid) | No | 8 |
| 11 | `trust-chorus-photo-2` | Testimonial lifestyle | Empty — not configured | 400px | 1:1 (grid) | No | 8 |
| 12 | `trust-chorus-photo-3` | Testimonial lifestyle | Empty — not configured | 400px | 1:1 (grid) | No | 8 |
| 13 | `trust-chorus-photo-4` | Testimonial lifestyle | Empty — not configured | 400px | 1:1 (grid) | No | 8 |
| 14 | `global-logo` | Header logo | Empty — text fallback | varies | brand aspect | No | 7 |
| 15 | `global-favicon` | Favicon | Empty | 32px | 1:1 | No | 5 |
| 16 | `buy-box-product-media` | Product showcase | From Shopify product data | varies | 1:1 | No | N/A (managed by product admin) |

**Notes:**
- Slots 10-13 (trust-chorus photos) are block-type `photo` — currently NO photo blocks are configured in `templates/index.json` (only 3 `quote` blocks exist). These need to be ADDED as blocks.
- Slot 16 (buy-box) uses `featured-product` section which pulls images from the Shopify product. This is managed through the product admin, not theme files.
- The guarantee section has NO image slots (uses CSS cow-print pattern overlay).
- USP marquee, empathy anchor, comparison, and reviews sections have NO image slots.

---

## 3. Slot Classifications

### SLOT: `hero-image` (Score: 10)
```
SLOT CLASSIFICATION: hero-image
─────────────────────────────────────────
Section type:    Hero split
Image behavior:  Contained product image (right column of flex layout)
Composition:     Product showcase — product centered on brand-palette bg
                 No negative space needed for text (text is in separate column)
Text overlay:    None on image (text is left column)
Consistency group: hero (hero-image + hero-image-mobile)
Recommended category: B (AI + brand creative anchor)
Notes:           Use pouch mockup as reference image.
                 Lavender #D8D0E8 background (from CSS .da-hero__media).
                 Max 800px, responsive down to 375px.
                 Eager loading, high fetch priority.
─────────────────────────────────────────
```

### SLOT: `hero-image-mobile` (Score: 9)
```
SLOT CLASSIFICATION: hero-image-mobile
─────────────────────────────────────────
Section type:    Hero split (mobile variant)
Image behavior:  Contained product image (below text on mobile)
Composition:     Product showcase — tighter crop, mobile-optimized
Text overlay:    None on image
Consistency group: hero
Recommended category: B (AI + brand creative anchor)
Notes:           Optional — if not set, desktop image used for both.
                 Max 750px. Can be a tighter crop of hero-image.
─────────────────────────────────────────
```

### SLOT: `product-intro-image` (Score: 10)
```
SLOT CLASSIFICATION: product-intro-image
─────────────────────────────────────────
Section type:    Image-with-text (product showcase)
Image behavior:  Contained image in left column of 2-column grid
Composition:     Product as hero — pouch centered, clean background
                 Inside white card container (.da-pi__card)
Text overlay:    None (text in right column)
Consistency group: standalone
Recommended category: B (AI + brand creative anchor)
Notes:           Use pouch + stick pack as reference.
                 White card background context.
                 Lifestyle-product hybrid: product on warm surface.
─────────────────────────────────────────
```

### SLOT: `origin-story-image-1` (Score: 9)
```
SLOT CLASSIFICATION: origin-story-image-1
─────────────────────────────────────────
Section type:    About/story (editorial portrait)
Image behavior:  Stacked portrait image (top of 2-image column)
Composition:     Documentary/editorial — candid food moment
                 3:4 portrait orientation preferred
Text overlay:    None (text in right column)
Consistency group: origin-story (image-1 + image-2 must match)
Recommended category: C (pure AI — mood/context, no product)
Notes:           Should show food/dairy moments — family dinner,
                 pizza night, ice cream, coffee.
                 Warm, nostalgic, Kodak Gold 200 grain.
─────────────────────────────────────────
```

### SLOT: `origin-story-image-2` (Score: 9)
```
SLOT CLASSIFICATION: origin-story-image-2
─────────────────────────────────────────
Section type:    About/story (editorial portrait)
Image behavior:  Stacked portrait image (bottom of 2-image column)
Composition:     Documentary/editorial — candid people enjoying dairy
                 3:4 portrait orientation preferred
Text overlay:    None
Consistency group: origin-story
Recommended category: C (pure AI — mood/context, no product)
Notes:           Complement image-1 — if image-1 is food close-up,
                 image-2 should be people. Same lighting/grain.
─────────────────────────────────────────
```

### SLOTS: `three-pillars-icon-1/2/3` (Score: 6 each)
```
SLOT CLASSIFICATION: three-pillars-icons
─────────────────────────────────────────
Section type:    Icon/badge
Image behavior:  Small decorative icon above step number
Composition:     96x96px, isolated subject on transparent/clean bg
Text overlay:    None
Consistency group: three-pillars (all 3 must match style)
Recommended category: C (pure AI)
Notes:           Step 1 = "Sprinkle" (stick pack / sprinkling action)
                 Step 2 = "Eat" (fork/plate / eating)
                 Step 3 = "Enjoy" (happy face / celebration)
                 Simple, friendly illustration style preferred.
                 Could also use emojis (already in badges elsewhere).
─────────────────────────────────────────
```

### SLOTS: `trust-chorus-photo-1/2/3/4` (Score: 8 each)
```
SLOT CLASSIFICATION: trust-chorus-photos
─────────────────────────────────────────
Section type:    Testimonial lifestyle grid
Image behavior:  4-column photo grid below testimonial cards
Composition:     1:1 square, consistent style across all 4
                 Candid lifestyle moments with dairy
Text overlay:    None
Consistency group: trust-chorus (all 4 MUST match)
Recommended category: C (pure AI — mood shots, no product required)
Notes:           Scenes: pizza night, ice cream, latte, cheese board.
                 Match the testimonial themes (Italy/gelato, dinner
                 party, birthday party, pizza night).
                 MUST be generated as a batch for consistency.
                 Requires adding "photo" blocks to index.json.
─────────────────────────────────────────
```

### SLOT: `faq-decorative-icon` (Score: 4)
```
SLOT CLASSIFICATION: faq-decorative-icon
─────────────────────────────────────────
Section type:    Icon/badge (decorative)
Image behavior:  Small decorative element positioned top-right
Composition:     160px, decorative only
Text overlay:    None
Consistency group: standalone
Recommended category: C (pure AI)
Notes:           Optional decorative element. Low priority.
                 Could be a small cow illustration, question mark,
                 or brand-themed decorative element.
─────────────────────────────────────────
```

### SLOT: `global-logo` (Score: 7)
```
SLOT CLASSIFICATION: global-logo
─────────────────────────────────────────
Section type:    Header logo
Image behavior:  Logo image in header
Composition:     Brand aspect ratio, transparent background
Text overlay:    None
Consistency group: standalone
Recommended category: A (real brand asset — use existing Logo_Black.png)
Notes:           Logo files exist in brand/creatives/Logo_Black.png
                 and Logo_White.png. Just needs to be uploaded to
                 Shopify and configured in theme settings.
                 NOT an AI generation task.
─────────────────────────────────────────
```

---

## 4. Priority Ranking

```
GENERATION PRIORITY
─────────────────────────────────────────
CRITICAL (generate first — above-fold, highest impact):
  1. hero-image         — Score: 10 — First thing visitors see, currently placeholder SVG
  2. product-intro-image — Score: 10 — Key product showcase, placeholder SVG

HIGH (generate in main batch — visible, conversion-impacting):
  3. origin-story-image-1 — Score: 9 — Brand story section, placeholder SVG
  4. origin-story-image-2 — Score: 9 — Brand story section, placeholder SVG
  5. hero-image-mobile    — Score: 9 — Mobile hero variant (optional, desktop used as fallback)
  6. trust-chorus-photo-1 — Score: 8 — Social proof lifestyle grid (blocks need adding)
  7. trust-chorus-photo-2 — Score: 8 — Social proof lifestyle grid
  8. trust-chorus-photo-3 — Score: 8 — Social proof lifestyle grid
  9. trust-chorus-photo-4 — Score: 8 — Social proof lifestyle grid

MEDIUM (functional but lower impact):
  10. global-logo          — Score: 7 — Use existing brand asset (Logo_Black.png), NOT AI
  11. three-pillars-icon-1 — Score: 6 — "Sprinkle" step icon
  12. three-pillars-icon-2 — Score: 6 — "Eat" step icon
  13. three-pillars-icon-3 — Score: 6 — "Enjoy" step icon
  14. global-favicon        — Score: 5 — Use brand asset, NOT AI

OPTIONAL (low priority):
  15. faq-decorative-icon  — Score: 4 — Small decorative, minimal impact

SKIP (not managed through theme files):
  16. buy-box-product-media — N/A — Managed via Shopify product admin
─────────────────────────────────────────
```

---

## 5. Cost Estimate

Excluding non-AI slots (logo, favicon = existing brand assets):

```
COST ESTIMATE
─────────────────────────────────────────
CRITICAL (2 images):
  hero-image              — 4K ($0.09) — high-visibility hero
  product-intro-image     — 2K ($0.06) — product showcase
  Subtotal: $0.15

HIGH (7 images):
  origin-story-image-1    — 2K ($0.06) — editorial portrait
  origin-story-image-2    — 2K ($0.06) — editorial portrait
  hero-image-mobile       — 2K ($0.06) — mobile hero
  trust-chorus-photo-1    — 2K ($0.06) — lifestyle grid
  trust-chorus-photo-2    — 2K ($0.06) — lifestyle grid
  trust-chorus-photo-3    — 2K ($0.06) — lifestyle grid
  trust-chorus-photo-4    — 2K ($0.06) — lifestyle grid
  Subtotal: $0.42

MEDIUM (3 icons):
  three-pillars-icon-1    — 1K ($0.04) — small icon
  three-pillars-icon-2    — 1K ($0.04) — small icon
  three-pillars-icon-3    — 1K ($0.04) — small icon
  Subtotal: $0.12

OPTIONAL (1 icon):
  faq-decorative-icon     — 1K ($0.04)
  Subtotal: $0.04

                    Base total: $0.73
  Estimated with verification retries (~40%): $1.02
─────────────────────────────────────────
```

---

## 6. Brand Creatives Available (for reference images)

| File | Description | Use As |
|------|------------|--------|
| `brand/creatives/Stick Pack_Pouch.png` | Pouch mockup — lavender with cow print, "DairyAssure" wordmark | `image_input[0]` for hero, product-intro |
| `brand/creatives/Single Stick_Flat.png` | Single stick pack flat layout — front/back views | `image_input[1]` for stick pack scenes |
| `brand/creatives/Stick Pack_Flat.png` | Stick pack dieline — production layout | Reference only |
| `brand/creatives/Stick Pack_Mockup Sheet.png` | Mockup variations sheet | Reference only |
| `brand/creatives/Single Stick_Sample.png` | Single stick sample | Alternative stick reference |
| `brand/creatives/Logo_Black.png` | Logo (dark) | Upload to Shopify as header logo |
| `brand/creatives/Logo_White.png` | Logo (white) | Footer / dark bg contexts |

---

## 7. Implementation Notes

### Template Changes Required
- **Trust chorus photos:** The `templates/index.json` `trust_chorus` section currently only has `quote` blocks. To use the photo grid, 4 `photo` blocks must be added to the section configuration after images are generated.

### Non-AI Tasks (do separately)
- Upload `Logo_Black.png` to Shopify as theme logo setting
- Upload `Logo_White.png` for footer brand image
- Create favicon from logo (crop to 32x32)
- Upload product images via Shopify product admin (separate from theme)
