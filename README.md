# Pras' Labs Design System

Personal design system for **Prasetiyo Hadi Purwoko**, Platform/Infrastructure
Architect and technical writer, Bandung, Indonesia. Powers the blog **"Pras' Labs:
The Hands-On Engineer"** and his professional/consulting site.

Built from scratch from a written brief (no existing codebase, Figma file, or
brand assets were attached). Brand identity, palette direction, type direction,
component priorities, and voice guidelines were all specified directly by the user.

**Tagline:** Practitioner-grade infrastructure writing. Built from real systems,
real failures, real scale.

**Personality:** Quiet authority. Precise without being cold. Technically rigorous
but human. Terminal-meets-editorial. Not flashy.

## Index

- `styles.css`: root stylesheet, `@import`s everything below, plus the global focus rule
- `tokens/`: `colors.css` (both themes, `prefers-color-scheme`, `data-theme`), `typography.css`
  (desktop sizes plus the fluid heading sizes), `spacing.css` (scale, widths, breakpoints,
  `--touch-target`), `fonts.css` (Google Fonts import)
- `components/core/`: Button, Tag, CodeBlock, ArticleMeta, PostCard, AuthorBio,
  ConsultCTA, Nav (`.jsx` + `.d.ts` + `.prompt.md` each); `core.css` (hit areas, syntax token
  classes, Nav and panel rules, hero cursor); `theme.js` (theme helpers and the no-flash script)
- `guidelines/`: foundation specimen cards (Colors, Type, Spacing, Brand)
- `ui_kits/blog-post/`: full article page (primary surface)
- `ui_kits/homepage/`: hero + writing feed
- `ui_kits/about-consulting/`: bio, services, consulting CTA
- `SKILL.md`: portable skill file for Claude Code

## Content fundamentals (voice)

- Direct, no filler words, no exclamation marks. "Written from production experience," never "Check out my latest posts!"
- No em dashes. Use a comma, period, colon or parentheses instead.
- Exact calendar dates always, never relative time: "Jul 18, 2026," never "2 days ago." `ArticleMeta.date` and `PostCard.date` must be exact-date strings.
- Microcopy describes what a thing *is*, not sells it.
- First person, understated. Consulting CTAs read as availability, not a pitch: "I take on a small number of engagements each quarter," never "Hire me today!" That availability line is example copy only, not a current claim. Publish availability wording only when it is true on the day.
- Post titles are specific and technical (sample: "Reconciling drift across a 40-cluster GitOps fleet"), never listicle-style.
- All article content in this README and in the specimen cards and ui_kits (titles, excerpts, dates, read times, tags, code) is sample text, not a published article. Replace it with real content when building pages.
- No emoji anywhere in the system.

## Visual foundations

- **Theme.** Both themes ship as equals on the same token names, and the reader can switch (see Theme switching). First visit follows the reader's OS setting; when the OS states no preference, the fallback is dark. Dark is only the fallback: the brand is terminal-meets-editorial and its code surface is a near-black, but "dark suits tech sites" is a convention, not a reason to fix the theme for every reader. Base ground is `bg` (a warm near-black in dark, `#15130f`). Never pure black.
- **Color.** One accent (`accent`, teal) carries every primary action and active state: `Button` primary fill, the active `Nav` underline, active-`Tag` text, links (`link` aliases `accent`; `link-hover` aliases `accent-strong`). Use `accent` only for things you can act on or that mark the current state; static text such as `#hashtag` labels stays `text-secondary`. `accent-warm` is reserved for human/author moments (bio blocks, personal asides) and must never be used for UI chrome, buttons, or nav. No gradients anywhere in the system.
- **Type.** Three families, never mixed outside their lane: `heading` (Plus Jakarta Sans) for headings and UI labels, `body` (Source Serif 4) for long-form article copy only, `mono` (JetBrains Mono) for code, tags, metadata hashtags and the `~/pras-labs` wordmark, never for headings or body. Body copy runs generous line-height (the `Body` group's `lineHeight: 1.7–1.8`) for long technical reading. Never tighten it for density.
- **Why these three.** `heading`: Plus Jakarta Sans was drawn by Gumpita Rahayu with Tokotype for the +Jakarta city identity, and is open source (OFL). It is Indonesian-made, which fits an author in Bandung, and it is not one of the usual developer-site defaults (Inter, Geist, Space Grotesk). `body`: Source Serif 4 was made for reading text at small sizes and has an optical-size axis. The long article is the main product, and a serif body separates prose from code and UI (sans and mono) at a glance. `mono`: JetBrains Mono is built for reading code at small sizes, with clearly distinct look-alike characters (0/O, 1/l/I). It is a common default, so this is a functional choice, not a brand one. The wordmark is set in mono because the mark is a shell path, not because mono looks technical.
- **Code colors.** Four hues on warm neutrals, no purple. Infra code (YAML, shell, HCL) is mostly commands, keys, strings, numbers and comments, so four hues separate the roles and more would add noise. The hues are clay (keywords, tags), olive green (strings), steel blue (functions and keys) and ochre (numbers), set at matched chroma with stepped lightness so roles stay apart for color-blind readers. Comments are italic. The one cool hue, steel blue, is desaturated and about 45 degrees from the teal accent, so a command never looks like a link. Every code color is 4.5:1 or better on `code-bg` in both themes. The values are not taken from an editor theme.
- **Spacing.** 4px base scale (`space-1` through `space-10`, 4px–128px). The reading column caps at `content-width` (700px); diagrams, tables, and comparison layouts use the wider `content-width-wide` (1040px) column instead of stretching prose.
- **Corners & elevation.** Use only `radius-sm`/`radius-md`/`radius-lg` (4/8/12px) for containers. `radius-full` is reserved for `Tag` chips and the `AuthorBio` avatar. Never apply a pill radius to a card, button, or panel. Most surfaces are distinguished by a 1px hairline border, not a shadow; reserve `shadow-sm`/`shadow-md` for genuinely raised surfaces (hover lift, floating CTAs).
- **Borders.** `border-hairline` (~10% opacity) separates content sections: post-list dividers (`PostCard`), the `Nav` underline rule. `border-strong` (~20% opacity) frames non-interactive containers: cards, `CodeBlock`, `ConsultCTA`. These frames are decorative. The boundary of anything you can click uses `border-control` (40% opacity in dark, 55% in light; 3.3:1 and 3.8:1 or better): the secondary `Button` outline and the inactive `Tag` outline. The active `Tag` and the `ConsultCTA` link use `accent-border`, set to clear 3:1 as well.
- **No decorative motifs.** No rounded-card-with-colored-left-border pattern, no bluish-purple gradients, no illustration and no decorative photography (the one photograph is the author headshot in `AuthorBio`): this is a text-and-code brand. The one sanctioned decorative element is a terminal prompt line (`prasetiyo@bandung:~$`) ending in a block cursor, used once in the homepage hero. Its job is to tell an engineer reader in the first second that this is written by someone who works in terminals. The cursor blinks three times (`animation: blink 1s steps(1) 3`), then stays solid, and never blinks under `prefers-reduced-motion: reduce`. It is the one exception to the color-only motion rule below. Never repeat it as a recurring gimmick elsewhere.
- **Hover/press states.** Links and buttons shift color only (`accent` to `accent-strong` on hover), with no scale/shrink transforms and no shadow pop on press. Transitions stay fast (120–200ms) and limited to color/border-color properties. Press shows the same shift as hover. The hover shift is limited to devices that can hover (`@media (hover: hover)`), so a tap never leaves a sticky hover color. Inline styles cannot express `:hover`, so the shifts live in `components/core/core.css`.
- **Focus.** Every link, button and Tag link shows a 2px solid `focus-ring` outline with a 2px offset on `:focus-visible`. Never set `outline: none` without this replacement. The ring clears 3:1 against `bg` in both themes (9.66:1 dark, 5.75:1 light).
- **Contrast.** Every text token meets 4.5:1 on the grounds named in its note, in both themes (checked with alpha compositing, including tinted fills and hover fills). `text-tertiary` is for `bg`, `bg-raised`, `surface` and `code-bg` only: on dark `surface-hover` and `surface-2` it falls to 4.2 and 4.4:1. `code-comment` is for `code-bg` only (4.3:1 on dark `code-bg-inline`, which holds single-color inline code). `accent-warm` clears 4.5:1 on `bg`, `surface` and its own tint (5.0:1 on light). Interactive boundaries (`border-control`, `accent-border`) clear 3:1 on every ground they sit on. By design, `border-hairline`, `border-strong` and `code-border` do not (1.2–1.8:1): they only frame containers, so never use them as the sole marker of a control, and render the `/` separators in `ArticleMeta` as decorative (`aria-hidden`). The ui_kits pass axe-core (WCAG 2.0 to 2.2 AA plus best practice) with no violations in both themes at 320 and 1200px. That is an automated check, not a screen reader test.
- **Transparency.** `accent-dim` and `accent-warm-dim` (accent at low opacity) are for tinted fills only. No backdrop-blur anywhere; nothing floats over content.

## Design Read and dials

Reading this as: a long-form technical blog and consulting site for infrastructure engineers, in a quiet terminal-meets-editorial language, dial ENERGY 1 / RHYTHM 2 / MOTION 1.

- **ENERGY 1.** The writing is the loud part. One accent, flat surfaces, hairline borders, no gradients, glow or shadows beyond hover lift.
- **RHYTHM 2.** One reading column with deliberate variation: wide breakouts for diagrams and tables, a code surface that differs from the page, and an author block and a consulting block at the end. Section spacing comes from the scale, not one repeated value. It is not a repeating template and not a poster.
- **MOTION 1.** Color and border-color transitions of 120 to 200ms. The hero cursor's three blinks are the one stated exception.

## Theme switching

- **Order.** The reader's stored choice, then `prefers-color-scheme`, then dark.
- **CSS contract.** Dark values on `:root` and `[data-theme="dark"]`. Light values under `@media (prefers-color-scheme: light) { :root:not([data-theme]) { ... } }` and under `[data-theme="light"]`. `[data-theme="dark"]` restores dark for a reader whose OS is light. The attribute selectors are not limited to `:root`, so a subtree can be themed. Set `color-scheme` to match so native controls and scrollbars follow.
- **No flash.** A small inline script in `<head>`, before first paint, reads the stored choice and sets `data-theme` (`themeInitScript` in `components/core/theme.js`). Without JavaScript the `prefers-color-scheme` rule still decides.
- **Control.** One text button, the last item in the Nav links, labeled with the current theme ("Theme: Dark", "Theme: Light"). It has no icon, follows the Nav target, state and focus rules, and its label changes when the theme changes. Its accessible name adds the action ("Theme: Dark. Switch to light."), so a screen reader user hears what pressing it does; the visible text stays at the start of the name. Activating it switches the theme and stores the choice in `localStorage`, read and written inside try/catch so the page works without storage.
- **Everything switches together:** syntax colors, `accent`, `accent-strong`, `focus-ring`, and borders. Print always uses the light tokens (a `@media print` block at the end of `tokens/colors.css`), and the theme button is hidden on paper.
- **Both themes are checked** at 4.5:1 for text and 3:1 for interactive boundaries.

## Responsive behavior

Mobile is a designed state, not the desktop layout squeezed. The system is one column by design, so reflow is about the width of that column, the spacing around it, and the type. Breakpoints sit where those rules change, not at device widths. Check by dragging the viewport from 320px to 1440px.

- **Four width ranges.** Below `bp-sm` (480px): page padding `space-4`, Nav gap `space-3`, section spacing one register down (see Section rhythm). `bp-sm` to `bp-md` (748px): page padding `space-5`, everything fluid. `bp-md` to `bp-lg` (1104px): the reading column is centered at `content-width` (700px) and wide content fills the width. From `bp-lg`: wide content is centered at `content-width-wide` (1040px), page padding `space-6`, outer container capped at `page-max-width`.
- **Type scale.** Set sizes in rem (px divided by 16) so a user's font-size setting and 200% zoom apply. Display sizes are fluid, body does not shrink: `hero` clamp(40px, 6vw + 16px, 80px); `h1` clamp(32px, 3vw + 20px, 48px); `h2` clamp(26px, 2vw + 18px, 36px); `h3` clamp(22px, 1vw + 18px, 28px). `lede` is 18px below `bp-sm` and 19px above. `body` stays 17px at every width, never below 16px. UI text (`label`, `caption`, `tag`, `code`) is fixed. `tokens/typography.css` holds the desktop sizes and the four fluid heading sizes as `--text-hero`, `--text-h1`, `--text-h2` and `--text-h3`.
- **Section rhythm.** Below `bp-md`, step spacing down: `space-7` (48px) becomes `space-6`, `space-8` becomes `space-7`, `space-9` becomes `space-7`, `space-10` becomes `space-8`. No section is sized with `100vh`. Hero and sections size to their content plus these spacing tokens.
- **Tap targets.** Every interactive element has a hit area of at least `touch-target` (44px) in both directions, using padding or a pseudo-element when the visual is smaller. Adjacent hit areas may touch but never overlap. Links inside running prose are exempt.
- **Overflow.** The page never scrolls sideways, checked at 320px. `CodeBlock` and tables scroll inside their own box (`max-width: 100%`), and that box is keyboard-focusable. Titles, filenames and long tokens use `overflow-wrap: anywhere`. Images are `max-width: 100%`. Never put `overflow: hidden` on a container that holds text.
- **No hover-only interactions.** Nothing in this system is revealed or opened by hover. Every hover color shift has the same shift on press.
- **Nav.** Three links, a wordmark and a theme button, no menu. It is static, never sticky or fixed, so it cannot cover content. If the row does not fit, the links wrap onto a second row under the wordmark, and the link group wraps too, so a wider font setting or the longer "Theme: Light" label never pushes it past the page edge. Measured with the real fonts, the row is one line from 428px up and two rows below that. A hamburger would hide three links to save one row.

## States

Every interactive element has these states: default, hover (color shift only), pressed (same color as hover, nothing else), `focus-visible` (the `focus-ring` outline), and disabled where it can apply. Data views also have loading, empty and error states. No state relies on color alone.

- **Button disabled.** `aria-disabled="true"`, `surface-2` fill, `text-secondary` label (6.1:1 dark, 5.9:1 light), no border, `cursor: not-allowed`, no hover shift. If the reason is not obvious, say it in text next to the button.
- **Button loading.** The label changes to the present participle of the action ("Sending", "Loading"), the button is disabled, `aria-busy="true"`, and its width does not change. No spinner and no animation: the label carries the state.
- **Tag selected.** `aria-pressed="true"` on a button chip (`aria-current="true"` on a link chip), `accent` text on an `accent-dim` fill with an `accent-border` outline, and `font-weight: 600`, so selection does not depend on hue alone.
- **Nav current.** `aria-current="page"`, `text-primary` label and the 2px `accent` underline.
- **Post feed, loading.** Three placeholder rows built from `surface-2` bars with no shimmer, and the visible text "Loading posts" in `text-secondary`. The container has `role="status"`.
- **Post feed, empty.** "No posts yet. New posts appear here when they are published."
- **Post feed, filtered to nothing.** "No posts tagged #gitops. Clear the filter to see all writing." with a ghost `Button` labeled "Clear filter". (The tag name is a sample.)
- **Post feed, error.** "Could not load posts. Check your connection, then try again." in `danger`, with a secondary `Button` labeled "Try again".
- **State messages.** Set in the `heading` family at `label` size, left-aligned in the reading column, with `space-6` vertical padding and a `border-hairline` bottom rule, the same footprint as a `PostCard` row. Say what happened, then what to do. No exclamation marks, no emoji, no apology.
- **AuthorBio, headshot fails to load.** Show the empty `surface-2` disc with the `accent-warm-border` ring. The name and role stay.
- **Forms.** None exist yet. When one is added: errors are text first and tied to their field, and a focused field scrolls into view above the on-screen keyboard.

## Fonts

The three typefaces are loaded live from Google Fonts in `tokens/fonts.css`:
Plus Jakarta Sans (headings), Source Serif 4 (body), JetBrains Mono (code).
The reasons are written under "Why these three" above. Switch to local
`@font-face` only if self-hosting becomes a requirement.

## Iconography

No icon set or icon font is part of this system. The design leans on typography instead (mono-font glyphs like `~/` and `#tag`, and simple border/box treatments) rather than icons. Arrow glyphs are not used in link or button labels either: the label says what happens ("View source", "Discuss a project"). If icons become necessary (a copy-code button, an external-link glyph), choose the set at that point and record the reason here. A generic default set needs a written reason, and "matches the hairline language" alone is not one. No icon has been invented or hand-drawn for this system.

## Assets

No logo was provided. The wordmark is set in type (`~/pras-labs` in JetBrains
Mono, with `~/` in `accent`) wherever a mark would normally go; never draw or invent
a logotype. The author headshot lives at `assets/pras.jpg` (user-provided) and is used
only in bio blocks. No other visual assets (illustrations, diagrams-as-images) exist
in this system; the brand is intentionally text/code-first.

## Notes / open questions for iteration

- Tag taxonomy (kubernetes, gitops, networking, platform-engineering, etc.) was
  inferred from the brief. Confirm the full list before wiring up a real tag index.
- The previews, cards and ui_kits carry sample content only. Replace it with real
  content, and write availability wording only when it is true.
