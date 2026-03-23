# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**DairyAssure** — a Shopify storefront for a single-product lactase powder brand. Forked from the Dawn theme (Shopify's open-source reference theme).

Store identifier: `fpdjxw-jh`

The previous Divide theme is archived on the `archive/divide-theme` branch for reference.

## Development Commands

```bash
# Serve theme locally (requires Shopify CLI 3.x)
shopify theme dev --store fpdjxw-jh

# Push theme to store
shopify theme push

# Pull latest theme from store
shopify theme pull

# Lint/validate theme
shopify theme check
```

No build step — assets (JS/CSS) are plain files served by Shopify CDN.

## Architecture (Dawn-based)

### Layout
- `layout/theme.liquid` — Main layout wrapper. Loads base CSS/JS, defines CSS custom properties.
- `layout/password.liquid` — Password page layout.

### Templates (JSON, Online Store 2.0)
JSON files in `templates/` define which sections appear on each page type. Each template references sections by type and configures them via settings.

### Sections
- `main-*` — Primary content for specific page types (e.g., `main-product.liquid`)
- `header.liquid`, `footer.liquid` — Global chrome
- Custom sections will be added as `section-*.liquid` for DairyAssure-specific content

### Snippets
Reusable Liquid partials in `snippets/`. Key Dawn snippets: `card-product.liquid`, `price.liquid`, `header-drawer.liquid`.

### Assets
Plain JS/CSS. Key files:
- `global.js` — Core web components and utilities
- `base.css` — Foundation styles
- Feature JS: `product-form.js`, `cart.js`, `predictive-search.js`

### Config
- `config/settings_schema.json` — Theme customizer setting definitions
- `config/settings_data.json` — Current store setting values

## Brand Messaging (Primary Source)

- `brand/brand-messaging.md` — **Hawke Media brand strategy doc (Nov 2025).** This is the foundational brand document. All copy, voice, and messaging decisions must anchor to this file. Key elements: Core Essence ("Taste Joy"), Brand Personality ("Your Best Backup"), Voice & Tone matrix, Brand Story, Purpose/Vision/Mission, Values, and Supernova content topics.
- `copy/brand-voice-bible.md` — Operational voice guide derived from the brand messaging doc + competitive research. Use for day-to-day copy decisions.

## Brand Reference

- **Brand colors** (from stick pack packaging): Periwinkle `#9A8DB7` (primary bg), Light Periwinkle `#B8AFD0` (secondary bg), Blue-Indigo `#2B2A8C` (text/logo/icons), Light Cyan/Teal `#5FC0D4` (accents/CTA buttons), Mid Lavender `#A8A0C2` (subtle accents)
- **Fonts**: Mechta (logotype/wordmark only), Helvetica Neue (headings, body, buttons, UI)
- **Product**: DairyAssure Lactase Powder Sticks (Single Strength 10K FCC, Extra Strength 20K FCC)
- **Key copy**: "Enjoy Dairy Without the Drama", "Doctor recommended, dessert approved"
- **USPs**: Fast Relief, 90+ Mins, Grab & Go, Flavorless, Single Ingredient, Packaged in the USA
- **Free shipping threshold**: $50
- **Social**: X, Facebook, Instagram, TikTok, LinkedIn, YouTube

## Self-Correcting Rules Engine

This file contains a growing ruleset that improves over time. **At session start, read the entire "Learned Rules" section before doing anything.**

### How it works

1. When the user corrects you or you make a mistake, **immediately append a new rule** to the "Learned Rules" section at the bottom of this file.
2. Rules are numbered sequentially and written as clear, imperative instructions.
3. Format: `N. [CATEGORY] Never/Always do X — because Y.`
4. Categories: `[STYLE]`, `[CODE]`, `[ARCH]`, `[TOOL]`, `[PROCESS]`, `[DATA]`, `[UX]`, `[OTHER]`
5. Before starting any task, scan all rules below for relevant constraints.
6. If two rules conflict, the higher-numbered (newer) rule wins.
7. Never delete rules. If a rule becomes obsolete, append a new rule that supersedes it.

### When to add a rule

- User explicitly corrects your output ("no, do it this way")
- User rejects a file, approach, or pattern
- You hit a bug caused by a wrong assumption about this codebase
- User states a preference ("always use X", "never do Y")

### Rule format example

```
14. [CODE] Always use `bun` instead of `npm` — user preference, bun is installed globally.
15. [STYLE] Never add emojis to commit messages — project convention.
16. [ARCH] API routes live in `src/server/routes/`, not `src/api/` — existing codebase pattern.
```

---

## Learned Rules

<!-- New rules are appended below this line. Do not edit above this section. -->
