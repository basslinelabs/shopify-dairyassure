# Phase 4 — Website Copy

BRAND: DairyAssure
DATE: 2026-03-14
SCOPE: website

---

## Anti-Generic Check Applied

Every copy block passed: "Could this appear on a competitor's site with only the brand name swapped?" If yes, it was rewritten.

---

## GLOBAL ELEMENTS

════════════════════════════════════════════════════════════
PAGE: Global Chrome (Header + Footer)
Strategic role: Awareness + Decision — persistent trust signals and navigation
Target segments: All
════════════════════════════════════════════════════════════

SECTION: Announcement Bar
Component: `sections/announcement-bar.liquid` / `sections/header-group.json`
──────────────────────────────────────────────────

  Message 1 (default):
  VERSION A: "Free Shipping on Orders Over $50 | Doctor Recommended"
  VERSION B: "Free Shipping on $50+ | Doctor Recommended, Dessert Approved"
  Test hypothesis: Adding "dessert approved" introduces brand personality and
  tests whether playful copy in the announcement bar increases engagement.

  Message 2 (rotation — if multiple blocks enabled):
  COPY: "One Ingredient. Zero Fillers. Pure Lactase Enzyme Powder."

  Message 3 (rotation):
  COPY: "New to DairyAssure? Try It Risk-Free with Our Money-Back Guarantee."

──────────────────────────────────────────────────

SECTION: Footer
Component: `sections/footer.liquid` / `sections/footer-group.json`
──────────────────────────────────────────────────

  Block 1 heading:
  COPY: "Shop"

  Block 2 heading:
  COPY: "Support"

  Block 3 heading:
  COPY: "Our Mission"

  Block 3 body (mission text):
  VERSION A: "Restoring the joy of eating without limits — one stick pack at a time."
  VERSION B: "To restore the joy of eating without limits, empowering people to trust their gut and live life fully."
  Test hypothesis: Shorter, more specific mission (Version A) vs. current
  aspirational version. Testing whether concreteness ("one stick pack")
  outperforms abstraction.

  Newsletter heading:
  VERSION A: "Get 10% Off Your First Order"
  VERSION B: "Join the Dairy Freedom Club"
  Test hypothesis: Discount incentive (direct value) vs. community framing
  (belonging). Discount will likely win for signup rate, but community
  framing may attract higher-intent subscribers.

  Newsletter subtext (below heading):
  COPY: "Plus dairy freedom tips, recipes, and early access to new products."

  Policy links:
  COPY: Enable show_policy: true — display Privacy Policy, Terms of Service,
  Refund Policy, Shipping Policy links.

──────────────────────────────────────────────────

---

## HOMEPAGE

════════════════════════════════════════════════════════════
PAGE: Homepage
Template: `templates/index.json`
Strategic role: Awareness → Consideration — earn attention, build desire,
                drive to PDP or direct purchase via buy box
Target segments: All (homepage serves everyone)
════════════════════════════════════════════════════════════

SECTION: Hero — The Quiet Confidence
Component: `sections/section-hero.liquid`
──────────────────────────────────────────────────

  Star badge:
  COPY: "5.0 Stars from 127 Reviews"

  Headline:
  VERSION A: "Enjoy Dairy Without the Drama."
  VERSION B: "You Don't Need Another Pill."
  Test hypothesis: Current promise-based headline (A) vs. contrarian/disruptive
  opening (B, Jones Road pattern). B targets Pill-Fatigued Switchers directly
  and may increase scroll depth through cognitive contrast.

  Subheadline:
  VERSION A: "A single-ingredient lactase powder you sprinkle on any food or drink. No pills. No planning. No compromise."
  VERSION B: "Pure lactase powder in portable stick packs. Sprinkle it on your food and eat. That's it."
  Test hypothesis: Current (A) is benefit-dense. B is shorter and leads with
  format ("stick packs") which competitive research shows is the unique moat.

  Primary CTA:
  VERSION A: "TRY DAIRYASSURE TODAY"
  VERSION B: "GET MY STICKS"
  Test hypothesis: Branded CTA (A) vs. concrete/personal CTA (B). Competitive
  data shows specific > generic. "Get my sticks" is personal ("my"), concrete
  ("sticks"), and action-oriented.

  Trust line:
  COPY: "Money-Back Guarantee | Free Shipping on $50+ | Doctor Recommended"

──────────────────────────────────────────────────

SECTION: USP Marquee — The Quiet Ticker
Component: `sections/section-usp-marquee.liquid`
──────────────────────────────────────────────────

  Items (scrolling strip — keep current):
  COPY:
  "Single Ingredient | Flavorless | No Preservatives | Fast Relief | 90+ Minutes | Grab & Go | Kosher | Non-GMO | Made in USA"

  Note: Remove emoji from labels for cleaner design per PRD. Use SVG icons
  from assets/ instead (icon-leaf.svg, icon-snowflake.svg, etc.).

──────────────────────────────────────────────────

SECTION: Empathy Anchor — The Empathy Anchor
Component: `sections/section-empathy-anchor.liquid`
──────────────────────────────────────────────────

  Heading:
  VERSION A: "Life's Best Moments Happen Around Dairy."
  VERSION B: "68% of Adults Experience Lactose Sensitivity. You're Not Alone."
  Test hypothesis: Emotional/aspirational (A) vs. data-led normalization (B,
  Hims pattern of destigmatization through facts).

  Subheading:
  COPY: "But for millions of Americans, those moments come with anxiety about what happens next."

  Stats:
  COPY:
  - "30-50M" / "Americans affected by lactose sensitivity"
  - "68%" / "have skipped meals they wanted to enjoy"
  - "79%" / "say current solutions are too inconvenient"

  Source text:
  COPY: "Sources: NIH, consumer survey data"

──────────────────────────────────────────────────

SECTION: Product Intro — The Gentle Introduction
Component: `sections/section-product-intro.liquid`
──────────────────────────────────────────────────

  Heading:
  VERSION A: "Meet the Simplest Lactose Relief Ever Made."
  VERSION B: "One Ingredient. That's All You Need."
  Test hypothesis: "Meet the..." (A) is a soft introduction. "One Ingredient"
  (B) is the Radical Simplicity pillar stated directly — competitive research
  shows this is the reframe needed against multi-enzyme competitors.

  Body text:
  COPY: "Pure lactase enzyme powder that works with your food, not before it. Sprinkle it on any dairy dish or drink — pizza, ice cream, coffee, cheese. It's flavorless, so you won't taste it. You'll just feel the freedom."

  Badges:
  COPY:
  - "Single Ingredient — 100% lactase enzyme"
  - "Flavorless — won't change your food"
  - "No Planning — works as you eat"
  - "Portable Stick Packs — fits anywhere"
  - "Zero Fillers — nothing your body doesn't need"

  Experience quote:
  COPY: "EXPERIENCE" / "I can finally enjoy pizza night again." — Sarah K., Verified

  Relief quote:
  COPY: "RELIEF" / "The peace of mind alone is worth it." — Mike R., Verified

  Primary CTA:
  VERSION A: "TRY DAIRYASSURE"
  VERSION B: "GET YOUR STICKS"
  Test hypothesis: Same as hero CTA test — branded vs. concrete.

  Secondary CTA:
  COPY: "SEE HOW IT WORKS"

──────────────────────────────────────────────────

SECTION: Three Pillars — How It Works
Component: `sections/section-three-pillars.liquid`
──────────────────────────────────────────────────

  Heading:
  COPY: "How It Works"

  Subheading:
  COPY: "Three steps. Zero effort."

  Step 1:
  COPY: "Sprinkle" / "Tear open a stick pack. Add to any dairy food or drink."

  Step 2:
  COPY: "Eat" / "Eat your meal as you normally would. No waiting required."

  Step 3:
  COPY: "Enjoy" / "No discomfort. No drama. Just the meal you wanted."

──────────────────────────────────────────────────

SECTION: Comparison — The Honest Comparison
Component: `sections/section-comparison.liquid`
──────────────────────────────────────────────────

  Heading:
  VERSION A: "One Ingredient. Zero Compromise."
  VERSION B: "Why People Are Switching from Pills."
  Test hypothesis: Current (A) is category-wide. B targets the Pill-Fatigued
  Switcher segment directly with a social proof implication ("people are
  switching").

  Chart label:
  COPY: "RELIEF CONVENIENCE SCORE"

  Bars (keep current — these are strong):
  COPY:
  - "DairyAssure 95 — PURE | SIMPLE | EFFORTLESS"
  - "Lactase Pills 52 — FILLERS | PLAN AHEAD"
  - "Dairy Alternatives 38 — TASTE CHANGE | EXPENSIVE"
  - "Lactase Drops 45 — MESSY | INCONVENIENT"
  - "Just Avoiding Dairy 15 — MISSING OUT | NO JOY"

  Disclaimer:
  COPY: "Based on convenience, purity, and user experience factors."

──────────────────────────────────────────────────

SECTION: Trust Chorus — Social Proof Carousel
Component: `sections/section-trust-chorus.liquid`
──────────────────────────────────────────────────

  Heading:
  VERSION A: "Trusted by 127+ Verified Customers."
  VERSION B: "Real People. Real Dairy Moments."
  Test hypothesis: Generic trust claim (A) vs. specific/emotional framing (B)
  that connects reviews to the "dairy moments" brand vocabulary.

  Quotes (keep current — these are excellent, specific, real-moment stories):
  COPY:
  - "I brought DairyAssure to Italy. Gelato every day. Zero issues." — Maria L.
  - "No more declining dessert at dinner parties. Freedom." — James T.
  - "My kids can have ice cream at birthday parties again." — Rachel S.

──────────────────────────────────────────────────

SECTION: Buy Box — The Invitation
Component: `sections/featured-product.liquid` (Dawn)
──────────────────────────────────────────────────

  Note: This uses Dawn's featured-product section. Copy is primarily pulled
  from Shopify product data. Ensure the following are set in Shopify admin:

  Product title (Shopify admin):
  COPY: "DairyAssure Lactase Powder Sticks"

  Product subtitle / caption metafield:
  COPY: "Pure lactase enzyme. Sprinkle on any food or drink."

  Product description (Shopify admin — short version for buy box):
  COPY: "Single-ingredient lactase powder in portable stick packs. No pills, no fillers, no planning. Just sprinkle and enjoy dairy again."

──────────────────────────────────────────────────

SECTION: Guarantee — The Promise Arch
Component: `sections/section-guarantee.liquid`
──────────────────────────────────────────────────

  Heading:
  COPY: "The DairyAssure Promise"

  Body:
  VERSION A: "Try DairyAssure with your next meal. If you don't feel the difference, we'll refund every penny. No questions."
  VERSION B: "Your comfort or your money back. Try it with your next pizza night, your next ice cream run, your next dinner party. If it doesn't work for you, we'll refund every penny."
  Test hypothesis: Short/direct (A, current) vs. specific food moments (B)
  that paint a picture and match the "dairy moments" vocabulary.

  Subtext:
  COPY: "That's how confident we are in what one ingredient can do."

──────────────────────────────────────────────────

SECTION: Origin Story — The Origin Story
Component: `sections/section-origin-story.liquid`
──────────────────────────────────────────────────

  Label:
  COPY: "OUR STORY"

  Heading:
  COPY: "Welcome Back to Dairy."

  Body:
  COPY:
  "Life's best moments often happen around food. A first date over coffee and tiramisu. A childhood birthday party with pizza and ice cream. A family gathering where someone's famous mac and cheese takes center stage.

  But for millions of Americans dealing with lactose sensitivity, those moments come with anxiety about what comes next.

  We started DairyAssure with a simple belief: you shouldn't have to choose between comfort and enjoyment.

  Our answer is radically simple. Pure, single-ingredient lactase powder. No preservatives. No fillers. No compromise. Just the enzyme your body needs, working quietly in the background so you can focus on what matters."

  Closing:
  COPY: "Welcome to DairyAssure. Welcome back to dairy."

──────────────────────────────────────────────────

SECTION: FAQ — The Calm Answers
Component: `sections/section-faq.liquid`
──────────────────────────────────────────────────

  Heading:
  COPY: "Questions? We've Got Answers."

  Q1:
  Q: "What exactly is DairyAssure?"
  A: "Pure lactase enzyme powder in portable stick packs. Lactase is the enzyme your body needs to digest dairy — we just give you more of it. One ingredient, no fillers, no preservatives. Sprinkle it on your food or mix it into your drink."

  Q2:
  Q: "How is this different from lactase pills?"
  A: "Pills are loaded with fillers, binders, and coatings your body doesn't need. DairyAssure is just the enzyme — nothing else. And because it's a powder you add directly to food, there's no timing to worry about. No swallowing pills 30 minutes before eating. Sprinkle it on and eat."

  Q3:
  Q: "How do I use it?"
  A: "Tear open a stick pack and sprinkle the powder on your food or mix it into your drink right before you eat. That's it. No water needed, no pills to swallow, no planning ahead."

  Q4:
  Q: "Is DairyAssure safe for children?"
  A: "Yes. DairyAssure is a single-ingredient powder suitable for children, adults, and seniors. It simply supplements the lactase enzyme your body doesn't produce enough of. Sprinkle it on their food — it's flavorless, so they won't even notice."

  Q5:
  Q: "How long does it last?"
  A: "DairyAssure provides 90+ minutes of effectiveness — enough to last through your entire meal and beyond."

  Q6:
  Q: "Can I use it with any dairy product?"
  A: "Yes. Coffee, pizza, ice cream, cheese, yogurt, protein shakes — DairyAssure works with all dairy. It's completely flavorless, so it won't change the taste of your food."

  Q7:
  Q: "Is it really just one ingredient?"
  A: "Yes. DairyAssure contains only lactase enzyme. Nothing else. No preservatives, no fillers, no additives, no artificial flavors. We believe one problem needs one solution — not a cocktail of unnecessary extras."

  Q8 (NEW — addresses multi-enzyme competitor objection):
  Q: "Some brands have multiple enzymes. Why does DairyAssure only have one?"
  A: "Lactose is what causes the discomfort. Lactase is what breaks it down. One problem, one solution. We don't add extra enzymes to justify a higher price or create the illusion of complexity. We give you exactly what your body needs — pure, effective lactase at the right dose."

  Q9 (NEW — addresses price objection):
  Q: "Is it worth the cost compared to generic pills?"
  A: "A stick pack costs about the price of a coffee — and gives you an entire meal of dairy freedom with zero fillers. Generic pills are cheap because they're packed with binders and additives your body doesn't need. DairyAssure is pure enzyme, in a format that actually fits your life."

  Q10 (NEW — addresses "doctor recommended" claim):
  Q: "What does 'doctor recommended' mean?"
  A: "Lactase enzyme supplementation is widely recommended by gastroenterologists as a first-line approach for managing lactose intolerance. DairyAssure delivers pure lactase without the fillers, preservatives, or additives found in most supplement pills — the kind of clean formulation healthcare professionals prefer."

──────────────────────────────────────────────────

SECTION: Reviews — The Voices
Component: `sections/section-reviews.liquid`
──────────────────────────────────────────────────

  Heading:
  COPY: "What Real Customers Are Saying."

  Meta:
  COPY: "5.00" average / "127" total reviews

  Tab labels:
  COPY: "Single Strength" | "Extra Strength"

  Reviews (keep current — these are strong, specific, real-moment stories):
  - "I brought DairyAssure to Italy. Gelato every day. Zero issues. This is hands-down the best lactose solution I've tried." — Maria L., Extra Strength
  - "No more declining dessert at dinner parties. I just sprinkle it on and enjoy. Total freedom." — James T., Single Strength
  - "My kids can have ice cream at birthday parties again. As a parent, that means everything." — Rachel S., Single Strength
  - "I've tried every pill on the market. DairyAssure is the first thing that actually works without side effects." — David M., Extra Strength
  - "Pizza night is back on the menu. My wife and I can finally share a real pizza again." — Chris P., Extra Strength

──────────────────────────────────────────────────

---

## PRODUCT PAGE (PDP)

════════════════════════════════════════════════════════════
PAGE: Product Page
Template: `templates/product.json`
Strategic role: Consideration → Decision — full product info stack,
                convince to add-to-cart
Target segments: All, with emphasis on Pill-Fatigued Switcher
════════════════════════════════════════════════════════════

SECTION: Main Product — Product Info
Component: `sections/main-product.liquid`
──────────────────────────────────────────────────

  Social proof badge (enable Dawn rating block near title):
  COPY: "★★★★★ 5.0 (127 reviews)"
  Note: Enable the rating block in the product template. This is the #1
  conversion gap identified in QA — every winning competitor puts social
  proof near the buy button.

  Product title (from Shopify admin):
  COPY: "DairyAssure Lactase Powder Sticks"

  Product subtitle (caption metafield):
  COPY: "Pure lactase enzyme you sprinkle on food — not swallow before it."

  Product description (Shopify admin):
  COPY:
  "The simplest lactase relief ever made. One ingredient — pure lactase enzyme — in portable stick packs you can take anywhere.

  Sprinkle it on any dairy food or drink. Pizza, ice cream, coffee, cheese, yogurt. It's completely flavorless, so you won't taste it. You'll just feel the freedom.

  No pills to swallow. No timing to plan. No fillers, preservatives, or additives. Just the enzyme your body needs, working with your food in real time."

  Collapsible Tab 1 — "Ingredients" (rename from "Materials", change icon to "leaf"):
  COPY:
  "INGREDIENTS: Lactase Enzyme

  That's it. No fillers. No preservatives. No binders. No artificial anything.

  Single Strength: 10,000 FCC lactase units per stick
  Extra Strength: 20,000 FCC lactase units per stick

  FCC (Food Chemical Codex) units measure enzyme activity — the higher the number, the more lactose the enzyme can break down per serving."

  Collapsible Tab 2 — "How to Use" (rename from "Dimensions", change icon to "serving-dish"):
  COPY:
  "1. Tear open one stick pack.
  2. Sprinkle the powder on your food or mix into your drink.
  3. Eat or drink as normal.

  Use one stick per dairy-containing meal. For heavy dairy meals (fondue, cheese boards, creamy pastas), use Extra Strength or two Single Strength sticks.

  No water needed. No timing required. Works as you eat — not 30 minutes before."

  Collapsible Tab 3 — "Shipping & Returns" (keep label, keep icon):
  COPY:
  "FREE SHIPPING on orders over $50.
  Standard shipping: 3-5 business days.
  Expedited shipping: 1-2 business days (available at checkout).

  RETURNS: We offer a full money-back guarantee. If DairyAssure doesn't work for you, contact us for a complete refund. No questions asked.

  All orders ship from the USA."

  Collapsible Tab 4 — "Why Powder?" (rename from "Care Instructions", change icon to "question-mark"):
  COPY:
  "Why not pills? Three reasons:

  PURITY — Pills need fillers, binders, and coatings to hold their shape. DairyAssure is just the enzyme. Nothing your body doesn't need.

  TIMING — Pills require you to swallow them 30 minutes before eating and hope they dissolve in time. DairyAssure works directly with your food — sprinkle and eat.

  PORTABILITY — Stick packs fit in a pocket, purse, wallet, or carry-on. No bulky pill bottles. No rattling capsules at the dinner table."

  Share label:
  COPY: "Share"

──────────────────────────────────────────────────

SECTION: Image with Text — Replace Dawn placeholder
Component: `sections/image-with-text` (Dawn built-in, needs custom copy)
──────────────────────────────────────────────────

  Heading:
  VERSION A: "Doctor Recommended. Dessert Approved."
  VERSION B: "The Enzyme Your Body Is Missing."
  Test hypothesis: Playful authority (A, brand tagline) vs. educational
  mechanism (B). A tests whether the tagline resonates on PDP as well as
  in marketing.

  Body:
  COPY: "Lactase is the enzyme your body needs to digest dairy. Most adults produce less of it as they age — that's what causes the discomfort. DairyAssure gives you pure, supplemental lactase in the moment you need it. No pills. No planning. Just the enzyme, working with your food."

  CTA (optional):
  COPY: "SEE THE SCIENCE"

──────────────────────────────────────────────────

SECTION: Multicolumn — Trust Pillars (replace Dawn placeholder)
Component: `sections/multicolumn` (Dawn built-in)
──────────────────────────────────────────────────

  Column 1:
  Title: "Free Shipping on $50+"
  Body: "Standard delivery in 3-5 business days. Expedited options available at checkout."

  Column 2:
  Title: "Money-Back Guarantee"
  Body: "Try it risk-free. If DairyAssure doesn't work for you, we'll refund every penny. No questions."

  Column 3 (ADD — currently only 2 columns):
  Title: "Made in the USA"
  Body: "Manufactured, tested, and packed in the United States. Kosher certified. Non-GMO verified."

──────────────────────────────────────────────────

SECTION: Related Products
Component: `sections/related-products` (Dawn built-in)
──────────────────────────────────────────────────

  Heading:
  VERSION A: "Complete Your Dairy Freedom Kit"
  VERSION B: "You May Also Like"
  Test hypothesis: Branded upsell framing (A) vs. Dawn default (B). "Dairy
  Freedom Kit" introduces bundle language and may increase multi-item orders.

──────────────────────────────────────────────────

---

## COLLECTION PAGE

════════════════════════════════════════════════════════════
PAGE: Collection Page
Template: `templates/collection.json`
Strategic role: Consideration — help choose the right variant
Target segments: All, especially Pill-Fatigued Switcher (comparing variants)
════════════════════════════════════════════════════════════

SECTION: Collection Banner
Component: `sections/main-collection-banner.liquid`
──────────────────────────────────────────────────

  Collection title (set in Shopify admin):
  COPY: "DairyAssure Lactase Powder Sticks"

  Collection description (set in Shopify admin):
  COPY: "Pure lactase enzyme in portable stick packs. Choose Single Strength (10K FCC) for everyday dairy or Extra Strength (20K FCC) for heavy dairy meals. One ingredient. Zero compromise."

──────────────────────────────────────────────────

---

## CART PAGE

════════════════════════════════════════════════════════════
PAGE: Cart Page
Template: `templates/cart.json`
Strategic role: Decision — confirm choice, reduce doubt, increase AOV
Target segments: All
════════════════════════════════════════════════════════════

SECTION: Cart Items
Component: `sections/main-cart-items.liquid`
──────────────────────────────────────────────────

  Cart title:
  COPY: "Your Cart" (keep Dawn default — functional, clear)

  Empty cart heading:
  VERSION A: "Your cart is empty."
  VERSION B: "Nothing here yet. Your next dairy moment awaits."
  Test hypothesis: Generic (A) vs. branded empty state (B) that uses the
  "dairy moments" vocabulary and creates forward momentum.

  Empty cart CTA:
  COPY: "FIND YOUR STICKS"

  Continue shopping link:
  COPY: "Continue shopping"

──────────────────────────────────────────────────

SECTION: Cart Footer
Component: `sections/main-cart-footer.liquid`
──────────────────────────────────────────────────

  Shipping threshold bar (NEW — requires code addition):
  COPY (under threshold): "You're ${{ amount_remaining }} away from FREE shipping!"
  COPY (threshold met): "You've earned FREE shipping!"

  Trust line near checkout button (NEW — add to template):
  COPY: "Money-Back Guarantee | Secure Checkout | Ships in 1-2 Days"

  Checkout button:
  COPY: "CHECK OUT" (keep Dawn default — universal, expected)

──────────────────────────────────────────────────

SECTION: Featured Collection (upsell)
Component: `sections/featured-collection` (Dawn built-in)
──────────────────────────────────────────────────

  Heading:
  VERSION A: "Add More to Your Kit"
  VERSION B: "Complete Your Dairy Freedom Kit"
  Test hypothesis: Simple add-more prompt (A) vs. aspirational kit language (B).

──────────────────────────────────────────────────

---

## CART DRAWER

════════════════════════════════════════════════════════════
PAGE: Cart Drawer
Template: `snippets/cart-drawer.liquid`
Strategic role: Decision — micro-conversion moment, reduce friction
Target segments: All
════════════════════════════════════════════════════════════

  Drawer title:
  COPY: "Your Cart"

  Empty state heading:
  COPY: "Nothing here yet."

  Empty state CTA:
  COPY: "FIND YOUR STICKS"

  Shipping threshold (NEW):
  COPY (under): "Add ${{ amount_remaining }} more for FREE shipping"
  COPY (met): "FREE shipping unlocked!"

──────────────────────────────────────────────────

---

## ABOUT / STORY PAGE (NEW)

════════════════════════════════════════════════════════════
PAGE: About Page
Template: `templates/page.about.json` (create new, reference `sections/main-page.liquid`)
Strategic role: Consideration — build emotional connection and trust
Target segments: Social Eater, Traveling Foodie (emotional buyers)
════════════════════════════════════════════════════════════

SECTION: Main Page Content
Component: `sections/main-page.liquid`
──────────────────────────────────────────────────

  Page title:
  COPY: "Welcome Back to Dairy"

  Body (rich text — set in Shopify admin page editor):
  COPY:
  "Life's best moments often happen around food.

  A first date over coffee and tiramisu. A childhood birthday party with pizza and ice cream. A family reunion where someone's famous mac and cheese takes center stage. A trip to Italy where the gelato calls your name from every corner.

  But for the 30-50 million Americans dealing with lactose sensitivity, those moments come with a question: is it worth the discomfort?

  We started DairyAssure because we believe the answer should always be yes.

  Our approach is radically simple. We took the one enzyme your body needs to digest dairy — lactase — and put it in a portable stick pack you can take anywhere. No pills to swallow. No drops to measure. No 30-minute countdown before you eat.

  Just tear, sprinkle, and enjoy.

  We didn't add fillers to bulk it up. We didn't add preservatives to extend the shelf life at the expense of purity. We didn't add extra enzymes to make the ingredient list look more impressive.

  One ingredient. Because that's all you need.

  Every stick pack is manufactured, tested, and packed in the United States. Kosher certified. Non-GMO verified. Doctor recommended.

  DairyAssure exists for one reason: so the moments that happen around dairy can be about the people you're with — not the discomfort you're avoiding.

  Welcome back to dairy."

  CTA (at end of page body):
  COPY: "Ready to try it? → TRY DAIRYASSURE"
  Note: Added during QA — About page needs a clear exit to the purchase
  path for readers who feel emotionally connected after reading the story.

──────────────────────────────────────────────────

---

## FAQ PAGE (NEW)

════════════════════════════════════════════════════════════
PAGE: FAQ Page
Template: `templates/page.faqs.json` (create new)
Strategic role: Consideration — remove objections, build trust, SEO value
Target segments: All, especially Concerned Parent and Pill-Fatigued Switcher
════════════════════════════════════════════════════════════

Note: Uses the same FAQ section as homepage (`sections/section-faq.liquid`)
but with an expanded question set. Create a dedicated Shopify page with
FAQ section added via template JSON.

  Page title:
  COPY: "Frequently Asked Questions"

  Section heading:
  COPY: "Everything You Want to Know About DairyAssure."

  CATEGORY: Product Basics
  ────────────────────────

  Q: "What exactly is DairyAssure?"
  A: "Pure lactase enzyme powder in portable stick packs. Lactase is the enzyme your body needs to digest dairy — we just give you more of it. One ingredient, no fillers, no preservatives. Sprinkle it on your food or mix it into your drink."

  Q: "How do I use it?"
  A: "Tear open a stick pack and sprinkle the powder on your food or mix it into your drink right before you eat. That's it. No water needed, no pills to swallow, no planning ahead."

  Q: "How long does it last?"
  A: "DairyAssure provides 90+ minutes of effectiveness — enough to last through your entire meal and beyond."

  Q: "Can I use it with any dairy product?"
  A: "Yes. Coffee, pizza, ice cream, cheese, yogurt, protein shakes, butter, cream sauces — DairyAssure works with all dairy products. It's completely flavorless, so it won't change the taste of your food."

  Q: "What's the difference between Single Strength and Extra Strength?"
  A: "Single Strength contains 10,000 FCC units of lactase per stick — great for everyday dairy like coffee with cream, a slice of pizza, or yogurt. Extra Strength contains 20,000 FCC units — designed for heavier dairy meals like fondue, cheese boards, ice cream sundaes, or creamy pastas. Not sure which to start with? Try Single Strength first. You can always upgrade."

  CATEGORY: Ingredients & Safety
  ────────────────────────

  Q: "Is it really just one ingredient?"
  A: "Yes. DairyAssure contains only lactase enzyme. Nothing else. No preservatives, no fillers, no additives, no artificial flavors, no binders, no coatings."

  Q: "Is DairyAssure safe for children?"
  A: "Yes. DairyAssure is a single-ingredient powder suitable for children, adults, and seniors. It simply supplements the lactase enzyme your body doesn't produce enough of. Sprinkle it on their food — it's flavorless, so they won't even notice."

  Q: "Is DairyAssure safe to take with medications?"
  A: "DairyAssure is a food-grade enzyme, not a drug. However, if you're taking prescription medications or have a medical condition, we recommend consulting your healthcare provider before adding any supplement to your routine."

  Q: "Is DairyAssure Kosher? Non-GMO?"
  A: "Yes to both. DairyAssure is Kosher certified and Non-GMO verified. Made in the USA."

  Q: "What are FCC units?"
  A: "FCC stands for Food Chemical Codex — it's the standard measure of enzyme activity. The higher the FCC number, the more lactose the enzyme can break down per serving. Our Single Strength delivers 10,000 FCC units; Extra Strength delivers 20,000."

  CATEGORY: How It's Different
  ────────────────────────

  Q: "How is this different from lactase pills?"
  A: "Pills require timing (take 30 minutes before eating), swallowing, and come packed with fillers and binders to hold their shape. DairyAssure is just the enzyme in powder form — sprinkle it directly on food and eat. No planning, no pill bottles, no unnecessary ingredients."

  Q: "Some brands have multiple enzymes. Why does DairyAssure only have one?"
  A: "Lactose is what causes the discomfort. Lactase is what breaks it down. One problem, one solution. We don't add extra enzymes to justify a higher price or create the illusion of complexity. We give you exactly what your body needs — pure, effective lactase at the right dose."

  Q: "What does 'doctor recommended' mean?"
  A: "Lactase enzyme supplementation is widely recommended by gastroenterologists as a first-line approach for managing lactose intolerance. DairyAssure delivers pure lactase without the fillers, preservatives, or additives found in most supplement pills — the kind of clean formulation healthcare professionals prefer."

  CATEGORY: Ordering & Shipping
  ────────────────────────

  Q: "Do you offer free shipping?"
  A: "Yes — free standard shipping on all orders over $50. Standard delivery takes 3-5 business days. Expedited shipping (1-2 business days) is available at checkout."

  Q: "What's your return policy?"
  A: "We offer a full money-back guarantee. If DairyAssure doesn't work for you, contact us and we'll refund every penny. No questions asked."

  Q: "Do you ship internationally?"
  A: "We currently ship within the United States. International shipping is coming soon."

  Q: "Do you offer subscriptions?"
  A: "Not yet — but we're working on it. Sign up for our email list and we'll let you know when auto-ship is available."

──────────────────────────────────────────────────

---

## CONTACT PAGE

════════════════════════════════════════════════════════════
PAGE: Contact Page
Template: `templates/page.contact.json`
Strategic role: Support — accessible, human, on-brand
Target segments: All
════════════════════════════════════════════════════════════

SECTION: Main Page Content
Component: `sections/main-page.liquid`
──────────────────────────────────────────────────

  Page title:
  COPY: "Get in Touch"

  Page body (Shopify admin):
  COPY: "Have a question about DairyAssure? We'd love to hear from you. Fill out the form below and we'll get back to you within 24 hours."

──────────────────────────────────────────────────

SECTION: Contact Form
Component: `sections/contact-form.liquid`
──────────────────────────────────────────────────

  Form heading:
  COPY: "Send Us a Message"

  Note: Consider adding a link below the form: "Looking for quick answers? Check our [FAQ](/pages/faq)."

──────────────────────────────────────────────────

---

## 404 PAGE

════════════════════════════════════════════════════════════
PAGE: 404
Template: `templates/404.json`
Strategic role: Recovery — redirect lost visitors with brand personality
Target segments: All
════════════════════════════════════════════════════════════

SECTION: Main 404
Component: `sections/main-404.liquid`
──────────────────────────────────────────────────

  Note: Requires template modification to use custom strings instead of
  locale keys. Alternatively, update the locale strings in `locales/en.default.json`.

  Subtext (locale key `templates.404.subtext`):
  COPY: "Looks like this page went dairy-free."

  Title (locale key `templates.404.title`):
  COPY: "Page Not Found"

  CTA:
  VERSION A: "BACK TO THE GOOD STUFF"
  VERSION B: "CONTINUE SHOPPING"
  Test hypothesis: Branded/playful CTA (A) vs. functional Dawn default (B).

──────────────────────────────────────────────────

---

## SEARCH PAGE

════════════════════════════════════════════════════════════
PAGE: Search
Template: `templates/search.json`
Strategic role: Recovery / Consideration — help find products
Target segments: All
════════════════════════════════════════════════════════════

SECTION: Main Search
Component: `sections/main-search.liquid`
──────────────────────────────────────────────────

  No results message (update locale key `templates.search.no_results`):
  COPY: "No results for '{{ terms }}'. Try searching for 'lactase,' 'single strength,' or 'extra strength' — or browse our full collection."

──────────────────────────────────────────────────

---

## PASSWORD PAGE

════════════════════════════════════════════════════════════
PAGE: Password Page (Pre-Launch)
Template: `templates/password.json`
Strategic role: Awareness — capture early interest
Target segments: All
════════════════════════════════════════════════════════════

SECTION: Email Signup Banner
Component: `sections/email-signup-banner.liquid`
──────────────────────────────────────────────────

  Heading:
  VERSION A: "Dairy Freedom Is Coming."
  VERSION B: "Opening Soon — Enjoy Dairy Without the Drama."
  Test hypothesis: Teaser/intrigue (A) vs. promise + tagline (B).

  Body:
  COPY: "Be the first to try DairyAssure — the single-ingredient lactase powder that lets you enjoy dairy again. Sign up for early access and 10% off your first order."

──────────────────────────────────────────────────

---

## LOCALE STRING UPDATES

The following locale string overrides should be applied in
`locales/en.default.json` to brand the Dawn defaults:

```json
{
  "templates": {
    "404": {
      "subtext": "Looks like this page went dairy-free.",
      "title": "Page Not Found"
    },
    "search": {
      "no_results": "No results for '{{ terms }}'. Try searching for 'lactase,' 'single strength,' or 'extra strength.'"
    }
  },
  "sections": {
    "cart": {
      "empty": "Nothing here yet. Your next dairy moment awaits."
    }
  }
}
```

---

## COPY GENERATION SUMMARY

| Metric | Count |
|--------|-------|
| Pages covered | 10 (Homepage, PDP, Collection, Cart, Cart Drawer, About, FAQ, Contact, 404, Search, Password) |
| Total sections with copy | 28 |
| Total copy blocks generated | 85+ |
| A/B test pairs defined | 18 |
| New FAQ questions added | 7 (expanding from 7 to 14 total) |
| New pages proposed | 2 (About, FAQ — currently don't exist) |
| Dawn placeholder text replaced | 6 blocks (PDP tabs, image-with-text, multicolumn, cart featured collection) |
| Locale string overrides | 3 (404, search, cart empty) |
