# Pras' Labs Design System

Personal design system for **Prasetiyo Hadi Purwoko** — Platform/Infrastructure
Architect and technical writer, Bandung, Indonesia. Powers the blog **"Pras' Labs:
The Hands-On Engineer"** and his professional/consulting site.

Built from scratch from a written brief (no existing codebase, Figma file, or
brand assets were attached) — brand identity, palette direction, type direction,
component priorities, and voice guidelines were all specified directly by the user.

**Tagline:** Practitioner-grade infrastructure writing. Built from real systems,
real failures, real scale.

**Personality:** Quiet authority. Precise without being cold. Technically rigorous
but human. Dark-mode-first, terminal-meets-editorial. Not flashy.

## Index

- `styles.css` — root stylesheet, `@import`s everything below
- `tokens/` — `colors.css` (dark default + light override), `typography.css`,
  `spacing.css`, `fonts.css` (Google Fonts import)
- `components/core/` — Button, Tag, CodeBlock, ArticleMeta, PostCard, AuthorBio,
  ConsultCTA, Nav (`.jsx` + `.d.ts` + `.prompt.md` each)
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand)
- `ui_kits/blog-post/` — full article page (primary surface)
- `ui_kits/homepage/` — hero + writing feed
- `ui_kits/about-consulting/` — bio, services, consulting CTA
- `SKILL.md` — portable skill file for Claude Code

## Content fundamentals (voice)

- Direct, no filler words, no exclamation marks.
- Exact calendar dates always — never relative time ("2 days ago" → "Jul 18, 2026").
- Microcopy describes what a thing *is*, not sells it: "Written from production
  experience," not "Check out my latest posts!"
- First person, understated. Consulting CTAs read as availability, not a pitch:
  "I take on a small number of engagements each quarter," not "Hire me today!"
- Post titles are specific and technical ("Reconciling drift across a 40-cluster
  GitOps fleet"), never listicle-style.
- No emoji anywhere in the system.

## Visual foundations

- **Color:** Dark mode is the default and primary theme (`:root` / `[data-theme="dark"]`),
  with a full light-mode override (`[data-theme="light"]`) on the same token names —
  toggle by setting `data-theme` on `<html>`. Base is a warm near-black (`#15130F`),
  never pure black. One accent (`--accent`, teal/electric-blue, `#35D0C0`) carries all
  primary actions and active states; a muted warm terracotta (`--accent-warm`,
  `#E0995B`) is reserved for human/author moments (bio blocks, personal asides) and
  never used for UI chrome. No gradients anywhere in the system.
- **Type:** Three families — `Plus Jakarta Sans` (headings, UI labels), `Source
  Serif 4` (long-form body — this is a writing-heavy site), `JetBrains Mono` (code,
  metadata, terminal chrome). Generous line-height on body copy (1.7–1.8) for
  long technical reading. See "Fonts" below.
- **Spacing:** 4px base scale (4 → 128). Prose column caps at 700px
  (`--content-width`); diagrams/tables/comparison layouts use a wider 1040px
  column (`--content-width-wide`).
- **Corners & elevation:** Small radii only (4/8/12px) — never pill-shaped
  containers except tags/chips. Shadows are subtle and reserved for genuinely
  raised surfaces (hover states, floating CTAs); most surfaces are distinguished
  by a 1px hairline border, not a shadow.
- **Borders:** Hairline (`--border-hairline`, ~10% opacity) separates content
  sections (post list dividers, nav underline); stronger borders (`--border-strong`,
  ~20%) frame discrete components (cards, code blocks, CTAs).
- **No decorative motifs:** no rounded-card-with-colored-left-border pattern, no
  bluish-purple gradients, no illustration/photography — this is a text-and-code
  site. The one "decorative" element is the terminal prompt line in the homepage
  hero (`prasetiyo@bandung:~$`) with a blinking-cursor `@keyframes` — used once,
  not as a recurring gimmick.
- **Hover/press states:** Links and buttons shift color (accent → accent-strong)
  on hover, no scale/shrink effects, no shadow pop. Transitions are fast (120–200ms,
  `--ease-standard`) and limited to color/border-color.
- **Transparency/blur:** Used only for tinted fills (`--accent-dim`,
  `--accent-warm-dim` are the accent color at low opacity) — no backdrop-blur
  anywhere; nothing floats over content.

## Fonts

The three typefaces are loaded live from Google Fonts in `tokens/fonts.css`:
Plus Jakarta Sans (headings), Source Serif 4 (body), JetBrains Mono (code).
The user has confirmed these read correctly for the brand. Switch to local
`@font-face` only if self-hosting becomes a requirement.

## Iconography

No icon set or icon font was provided. None of the three UI kits currently
require icons (the design leans on typography, mono-font glyphs like `~/` and
`#tag`, and simple border/box diagrams instead). If icons become necessary
(e.g. a copy-code button, external-link glyph), the recommended substitute is
[Lucide](https://lucide.dev) via CDN — thin 1.5px stroke weight matches the
system's hairline-border language. No icon has been invented or hand-drawn here.

## Assets

No logo was provided — the wordmark is set in type (`~/pras-labs` in JetBrains
Mono) wherever a mark would normally go. No other visual assets (photos,
illustrations) exist in this system; the brand is intentionally text/code-first.

## Notes / open questions for iteration

- Tag taxonomy (kubernetes, gitops, networking, platform-engineering, etc.) was
  inferred from the brief — confirm the full list before wiring up a real tag index.
