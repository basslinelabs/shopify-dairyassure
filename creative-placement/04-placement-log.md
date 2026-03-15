# Creative Placement — Phase 4: Placement Log

**Date:** 2026-03-15
**Theme:** Development (#138029793374)
**Iterations:** 3 (v1 warm/Kodak → v2 soft pastel → v3 no changes needed)

---

## Homepage Images Placed

| Asset File | Section | Placement | Size |
|-----------|---------|-----------|------|
| `da-hero-product.jpg` | Hero (desktop) | Asset fallback in Liquid | 160KB |
| `da-hero-product-mobile.jpg` | Hero (mobile) | Asset fallback in Liquid | 62KB |
| `da-product-intro.jpg` | Product Intro | Asset fallback in Liquid | 129KB |
| `da-origin-story-1.jpg` | Origin Story (top) | Asset fallback in Liquid | 106KB |
| `da-origin-story-2.jpg` | Origin Story (bottom) | Asset fallback in Liquid | 114KB |
| `da-trust-photo-1.jpg` | Trust Chorus grid | Asset fallback + photo blocks | 46KB |
| `da-trust-photo-2.jpg` | Trust Chorus grid | Asset fallback + photo blocks | 97KB |
| `da-trust-photo-3.jpg` | Trust Chorus grid | Asset fallback + photo blocks | 68KB |
| `da-trust-photo-4.jpg` | Trust Chorus grid | Asset fallback + photo blocks | 73KB |
| `da-icon-sprinkle.png` | Three Pillars step 1 | Asset fallback in Liquid | 29KB |
| `da-icon-eat.png` | Three Pillars step 2 | Asset fallback in Liquid | 31KB |
| `da-icon-enjoy.png` | Three Pillars step 3 | Asset fallback in Liquid | 23KB |

**Total homepage: 938KB** (12 images)

## PDP Images Generated (for Shopify Product Admin)

| Asset File | Purpose | Size |
|-----------|---------|------|
| `da-pdp-hero.jpg` | Product hero — pouch + sticks on cream bg | 171KB |
| `da-pdp-stick-closeup.jpg` | Single stick pack close-up | 75KB |
| `da-pdp-scale-reference.jpg` | Size reference — stick vs phone vs keys | 315KB |
| `da-pdp-latte-pour.jpg` | Lifestyle — sprinkling into latte | 204KB |
| `da-pdp-ice-cream.jpg` | Lifestyle — sprinkling onto ice cream | 162KB |
| `da-pdp-on-the-go.jpg` | Lifestyle — stick pack in crossbody bag | 273KB |
| `da-pdp-cheese-board.jpg` | Lifestyle — cheese board with stick pack | 295KB |

**Total PDP: 1,495KB** (7 images)

## Files Modified

- `sections/section-hero.liquid` — Asset fallback for desktop/mobile hero images
- `sections/section-product-intro.liquid` — Asset fallback for product image
- `sections/section-origin-story.liquid` — Asset fallback for 2 story images
- `sections/section-trust-chorus.liquid` — Asset fallback for 4 photo blocks
- `sections/section-three-pillars.liquid` — Asset fallback for 3 step icons
- `templates/index.json` — Added 4 photo blocks to trust_chorus section

## Iteration History

### v1 (Kodak Gold 200 / Warm)
- Problem: Warm golden/amber tones clashed with soft pastel lavender site
- Images felt "harsh" and like they were dropped from a different visual world

### v2 (Soft Pastel / Neutral Daylight)
- Fix: Shifted to 5200K neutral daylight, desaturated pastels, lifted shadows
- Surfaces changed from honey butcher block to light whitewashed wood + white
- Film stock removed — clean modern digital aesthetic
- Result: Images now feel native to the lavender #E8E0F0 site environment

### v3 (Final QA Pass)
- Reviewed all images on live dev preview
- All pass — no regeneration needed
- Family dinner has natural food warmth (from mac & cheese) but lighting is neutral
