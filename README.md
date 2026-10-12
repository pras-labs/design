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
  ConsultCTA, Nav, Footer (`.jsx` + `.d.ts` + `.prompt.md` each); `core.css` (hit areas, syntax token
  classes, Nav, Footer and panel rules, hero cursor); `theme.js` (theme helpers, the no-flash script
  and the no-JavaScript rule)
- `guidelines/`: foundation specimen cards (Colors, Type, Spacing, Brand)
- `ui_kits/blog-post/`: full article page (primary surface)
- `ui_kits/homepage/`: hero + writing feed
- `ui_kits/search/`: search form + results
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

## Naming

One site, two written forms, and they are not interchangeable.

- **Plain text: "Pras' Labs".** Everywhere the name is read or parsed as text: the browser tab, the RSS channel title, `og:site_name`, structured data, alt text. Page titles are "Page title | Pras' Labs".
- **Long form: "Pras' Labs: The Hands-On Engineer".** On the home page only: its `<title>`, `og:title` and `twitter:title`, which are kept identical so a link preview matches the tab. In structured data it is the `WebSite` `alternateName`; the `name` stays "Pras' Labs". On every other page `og:title` and `twitter:title` are the page's own title without the " | Pras' Labs" suffix, because `og:site_name` already puts the site name next to it in the preview. That is the one place a preview differs from the tab, and the reason is the site name appearing twice. The long form is used nowhere else.
- **Wordmark: `~/pras-labs`.** A visual mark: set in `mono`, with the `~/` in `accent`. It appears in the Nav and nowhere in plain text. The `~/` is typography, and it reads badly in a tab, a feed reader or a screen reader's list of links, so it never goes into a title, feed or preview.
- **Copyright holder: the author.** "© 2026 Prasetiyo Hadi Purwoko", in the Footer. The holder is a person, not the site name.

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
- **Hover/press states.** Links and buttons shift color only (`accent` to `accent-strong` on hover), with no scale/shrink transforms and no shadow pop on press. Transitions stay fast (120–200ms) and limited to color/border-color properties. Press shows the same shift as hover. The hover shift is limited to devices that can hover (`@media (hover: hover)`), so a tap never leaves a sticky hover color; press (`:active`) is not limited. Inline styles cannot express `:hover`, so the shifts live in `components/core/core.css`. This covers Buttons, Tags, the CTA link, post titles, Nav items, Footer links and the wordmark. The current Nav or Footer item (`aria-current="page"`) is the exception: it keeps `text-primary` on hover and press and shows its state with the `accent` underline. The global link rule in `styles.css` (links in running prose) has zero specificity (`:where`), so a component's own colors always win over it. Do not write a plain `a:hover` color rule: it out-ranks a single class and, on a primary Button link, painted the label the same color as the fill.
- **Focus.** Every link, button and Tag link shows a 2px solid `focus-ring` outline with a 2px offset on `:focus-visible`. Never set `outline: none` without this replacement. The ring clears 3:1 against `bg` in both themes (9.66:1 dark, 5.75:1 light).
- **Contrast.** Every text token meets 4.5:1 on the grounds named in its note, in both themes (checked with alpha compositing, including tinted fills and hover fills). `text-tertiary` is for `bg`, `bg-raised`, `surface` and `code-bg` only: on dark `surface-hover` and `surface-2` it falls to 4.2 and 4.4:1. `code-comment` is for `code-bg` only (4.3:1 on dark `code-bg-inline`, which holds single-color inline code). `accent-warm` clears 4.5:1 on `bg`, `surface` and its own tint (5.0:1 on light). Interactive boundaries (`border-control`, `accent-border`) clear 3:1 on every ground they sit on. By design, `border-hairline`, `border-strong` and `code-border` do not (1.2–1.8:1): they only frame containers, so never use them as the sole marker of a control, and render the `/` separators in `ArticleMeta` as decorative (`aria-hidden`). The ui_kits pass axe-core (WCAG 2.0 to 2.2 AA plus best practice) with no violations in both themes at 320 and 1200px. That is an automated check, not a screen reader test.
- **Transparency.** `accent-dim` and `accent-warm-dim` (accent at low opacity) are for tinted fills only. No backdrop-blur anywhere; nothing floats over content. The Nav is never fixed, and a floating back-to-top button is outside this system: it covers text, it can hide a focused element (WCAG 2.4.11), and it needs a hidden state. The in-system way is a static "Back to top" text link (`href="#top"`, a 44px item like the Footer links) at the end of an article or in the Footer. A site that keeps a floating button records it as a deviation and, at minimum: 44px target, solid `surface` fill with a `border-control` boundary and no shadow, shown only after scrolling, hidden under print, instant jump (or smooth scrolling only without `prefers-reduced-motion`), focusable with the shared focus ring, offset `space-4` from the edges, and never covering the Footer links.

## Design Read and dials

Reading this as: a long-form technical blog and consulting site for infrastructure engineers, in a quiet terminal-meets-editorial language, dial ENERGY 1 / RHYTHM 2 / MOTION 1.

- **ENERGY 1.** The writing is the loud part. One accent, flat surfaces, hairline borders, no gradients, glow or shadows beyond hover lift.
- **RHYTHM 2.** One reading column with deliberate variation: wide breakouts for diagrams and tables, a code surface that differs from the page, and an author block and a consulting block at the end. Section spacing comes from the scale, not one repeated value. It is not a repeating template and not a poster.
- **MOTION 1.** Color and border-color transitions of 120 to 200ms. The hero cursor's three blinks are the one stated exception.

## Theme switching

- **Order.** The reader's stored choice, then `prefers-color-scheme`. Dark is the fallback only where the browser reports no color scheme at all. In practice browsers answer "light" when the operating system states nothing, so a first-time visitor on a default system gets light, and a visitor whose system is set to dark gets dark. A dark default for everyone who has not chosen would need a different mechanism (ignoring the system setting and defaulting to `data-theme="dark"`), which overrides what a light-mode reader asked their device for. This system does not do that.
- **Required.** These parts are the contract: (1) the token names and values in each theme; (2) an explicit choice is expressed as `data-theme="dark"` or `data-theme="light"` on `<html>`, and wins over the system setting; (3) the choice is stored (`localStorage`, in try/catch) and applied by an inline script in `<head>` before first paint, so there is no flash (`themeInitScript` in `components/core/theme.js`); (4) `color-scheme` matches the theme, so native controls and scrollbars follow; (5) print always uses the light tokens; (6) without JavaScript the page still follows the system setting.
- **One way to do it, not required.** `tokens/colors.css` puts dark on `:root` and `[data-theme="dark"]`, light under `@media (prefers-color-scheme: light) { :root:not([data-theme]) { ... } }` and under `[data-theme="light"]`. A site whose theme layer uses only `:root[data-theme="dark"]` and `:root[data-theme="light"]` can follow the contract by having its head script always set `data-theme`, from the stored choice and otherwise from `matchMedia('(prefers-color-scheme: light)')`. If it does, keep a `prefers-color-scheme` rule in the CSS as well, so point (6) still holds when the script cannot run.
- **No flash.** The inline script in `<head>` reads the stored choice and sets `data-theme`. Without JavaScript the `prefers-color-scheme` rule decides the styles.
- **Control.** One text button, the last item in the Nav links, labeled with the current theme ("Theme: Dark", "Theme: Light"). It has no icon, follows the Nav target, state and focus rules, and its label changes when the theme changes. Its accessible name adds the action ("Theme: Dark. Switch to light."), so a screen reader user hears what pressing it does; the visible text stays at the start of the name. Activating it switches the theme and stores the choice in `localStorage`, read and written inside try/catch so the page works without storage.
- **Without JavaScript the button is hidden.** It would do nothing. Put `themeNoScriptCss` (`.pl-theme-toggle{display:none}`) in `<head>` inside `<noscript><style>`, next to the init script. The link group is one item shorter in that case.
- **Everything switches together:** syntax colors, `accent`, `accent-strong`, `focus-ring`, and borders. Print always uses the light tokens (a `@media print` block at the end of `tokens/colors.css`), and the theme button is hidden on paper.
- **Both themes are checked** at 4.5:1 for text and 3:1 for interactive boundaries.

## Responsive behavior

Mobile is a designed state, not the desktop layout squeezed. The system is one column by design, so reflow is about the width of that column, the spacing around it, and the type. Breakpoints sit where those rules change, not at device widths. Check by dragging the viewport from 320px to 1440px.

- **Four width ranges.** Below `bp-sm` (480px): page padding `space-4`, Nav gap `space-3`, section spacing one register down (see Section rhythm). `bp-sm` to `bp-md` (748px): page padding `space-5`, everything fluid. `bp-md` to `bp-lg` (1104px): the reading column is centered at `content-width` (700px) and wide content fills the width. From `bp-lg`: wide content is centered at `content-width-wide` (1040px), page padding `space-6`, outer container capped at `page-max-width`.
- **Type scale.** Set sizes in rem (px divided by 16) so a user's font-size setting and 200% zoom apply. Display sizes are fluid, body does not shrink: `hero` clamp(40px, 6vw + 16px, 80px); `h1` clamp(32px, 3vw + 20px, 48px); `h2` clamp(26px, 2vw + 18px, 36px); `h3` clamp(22px, 1vw + 18px, 28px). `lede` is 18px below `bp-sm` and 19px above. `body` stays 17px at every width, never below 16px. UI text (`label`, `caption`, `tag`, `code`) is fixed. `tokens/typography.css` holds the desktop sizes and the four fluid heading sizes as `--text-hero`, `--text-h1`, `--text-h2` and `--text-h3`.
- **Nav and Footer width.** Nav and Footer share one width: `content-width-wide` (1040px), centered, from `bp-lg`; below that they fill the page width less the page padding. The wordmark, wide content and the Footer's copyright line then share left and right edges, and the 700px reading column sits centered inside them. `page-max-width` (1280px) caps the outer shell only and is wider than all three, so neither the Nav nor the Footer stretches to it. A site whose Nav is a little narrower (PaperMod's 1024px) is close enough to match with a one-line change; a Footer that follows the 700px column instead is a deviation to record. `core.css` sets this on `.pl-nav` and `.pl-footer`.
- **Section rhythm.** Below `bp-md`, step spacing down: `space-7` (48px) becomes `space-6` (this includes the space below the Footer), `space-8` becomes `space-7`, `space-9` becomes `space-7`, `space-10` becomes `space-8`. No section is sized with `100vh`. Hero and sections size to their content plus these spacing tokens.
- **Tap targets.** Every interactive element has a hit area of at least `touch-target` (44px) in both directions, using padding or a pseudo-element when the visual is smaller. Adjacent hit areas may touch but never overlap. Links inside running prose are exempt.
- **Overflow.** The page never scrolls sideways, checked at 320px. `CodeBlock` and tables scroll inside their own box (`max-width: 100%`), and that box is keyboard-focusable. Titles, filenames and long tokens use `overflow-wrap: anywhere`. Images are `max-width: 100%`. Never put `overflow: hidden` on a container that holds text.
- **No hover-only interactions.** Nothing in this system is revealed or opened by hover. Every hover color shift has the same shift on press.
- **Nav.** The wordmark, a search field, up to three text links and a theme button, no menu. It is static, never sticky or fixed, so it cannot cover content. The Nav has no horizontal padding of its own: it sits inside the page shell, so the page padding above applies to it and the one-row width depends on it. If the row does not fit, the items wrap onto a second row under the wordmark, and the link group wraps too, so a wider font setting or the longer "Theme: Light" label never pushes it past the page edge. The widths depend on the links. Measured for this system's own Nav (Writing, About, Consulting, the longer "Theme: Light" label, the real fonts, 24px page padding): one row from 609px up (`core.css` uses 616px, see Search), two rows from 332px to 608px (wordmark and field on the first row, links and theme on the second), three rows below 332px. A site with two links fits one row at a smaller width; measure your own and use that. A hamburger would hide three links to save one row.
- **Nav links.** The site supplies up to three links, one word each, as nouns. This system's examples are Writing, About and Consulting, and they are examples: a site that calls its section "Posts" uses "Posts". A page the site does not have is left out, never shown as a dead link, so a site with no Consulting page has two links. A fourth link means measuring the Nav again, because the one-row and wrap widths change. Secondary lists (Archive, Tags, RSS) belong in the Footer, not the Nav.

## Search

Search is a field in the Nav, beside the wordmark, and a results page at `/search`. The earlier rule "no dropdowns, no search bar in v1" is replaced for search only; dropdowns are still out. The reason for the change: a reader looking for one post on a long-running blog has no other way to find it.

- **At rest.** A narrow field (`7rem` wide, 44px tall) with the placeholder "Search", right after the wordmark. The form comes before the link list in the DOM as well as on screen, so tab order is wordmark, field, links, theme button.
- **On focus.** The field grows to the right, up to `26rem`. From the one-row width up, the link group (links and theme button) is visually hidden while the field has focus, so the wordmark and the field are all that is left. It is hidden by clipping, never `display: none` or `visibility: hidden`: those remove the links from the tab order, and Tab from the field would skip them and land in the page. Clipped (`position: absolute`, a 1px box, `overflow: hidden`, `clip-path: inset(50%)`), the links stay focusable: Tab from the field reaches the first link, the field loses focus, the links come back, and Shift+Tab from that link returns to the field. Screen reader users keep the links too.
- **The one-row width is a rule, not a number.** The rule: the smallest width W such that every width from W up fits on one row. Find it by scanning from wide to narrow and stopping at the first width that needs two rows, then round up by about 8px for font rendering differences between platforms. Do not take the first width that fits when scanning upward or downward: page padding steps from `space-5` to `space-4` at `bp-sm` (480px), so a Nav can fit one row just below 480px, need two rows just above it, and fit again further up (a two-link Nav with a narrow field measured one row at 458 to 479px, two rows at 480 and 481px, and one row from 482px up; a scan upward would say 458px, which is wrong). Measure with the real fonts and the longer "Theme: Light" label. For this system's own Nav (three links) W is 609px and `core.css` uses 616px; both are examples, not constants to copy. The media query holds the value in one place. Too high is harmless: the links just stay visible a little longer. Too low is a bug: the group is clipped while it sits on its own row, the Nav shrinks by a row on focus, the page shifts up, and the first tap on a link below the Nav is lost, because focus leaves the field on the press and the Nav grows back before the finger lifts (reproduced at 375px). Below the one-row width the links stay and only the field grows, filling the rest of the wordmark's row.
- **Resting size is the floor.** The focused field keeps its resting `flex-basis` (`7rem`) and `min-width`, and only grows from there. With a basis of 0 the link group could fit up onto the wordmark's row below the one-row width, and the Nav would change height.
- **No animation.** The change is instant. Width is not one of the properties this system lets move (color and border-color only); animating it would be an explicit exception to make later, with `prefers-reduced-motion` honored. Without `:has()` support the field stays narrow and the links stay.
- **Escape.** Escape leaves the field and does nothing else: the text stays, results on the page stay, and the links come back. It exists to restore the menu, so it does not also clear a search; the field's own clear button does that.
- **Form.** A `<form role="search" method="get" action="/search">` with one `<input type="search" name="q">`. The query lives in the URL (`/search?q=gitops`), so a result page can be linked, bookmarked and reached with Back. Enter submits. No search-as-you-type, no suggestion dropdown, nothing that opens on hover or typing.
- **One field.** The Nav field is the only search field on a page, the results page included. The results page has no second box: the Nav field carries the query (`query` on `Nav`), and the site's search script is wired to that field. Two fields would also mean two `role="search"` landmarks with the same purpose. If a search script insists on its own on-page input, that is a deviation to record in the site, and then Escape in either field still only leaves the field.
- **Name.** The field has `aria-label="Search the writing"` and the visible placeholder "Search", which is contained in the name. The placeholder is `text-secondary` and disappears when typing starts, so the Nav field has no persistent visible label. That is a trade made for the narrow field; anything larger than the Nav field gets a visible `<label>`.
- **Field.** `.pl-field` in `core.css`: at least 44px tall, `surface` fill, 1px `border-control` boundary (3:1 or better), `text-base` text (never below 16px, so mobile browsers do not zoom on focus). Focus shows the shared `focus-ring` outline plus an `accent` border, so focus never rests on the outline alone. Radius `radius-sm` (4px).
- **Results page.** An `h1` ("Search results"), then the count in `text-secondary` as `role="status"` so it is announced after a search (`2 posts match "gitops"`), then `PostCard` rows with the same footprint as the feed. Result titles are `h2`. The Nav on this page uses `active={null}` (none of the links is current) and `query` to put the search text back in the field. No pagination until a result set is long enough to need it.
- **States.** Empty query, no results and error are written under States. Loading reuses "Loading posts".
- **Preview.** `ui_kits/search/` shows the results state with a sample query and sample posts. The text in it is a placeholder.

### Nav checks

Run these on the real site, at 375px and at the one-row width and above, in both themes:

1. Tab from the field reaches the first link, and the links are visible again.
2. Shift+Tab from the first link returns to the field.
3. Escape in the field leaves it, keeps the text and any results, and restores the links.
4. The Nav is the same height with the field focused and not focused, at every width. Check just below and just at the one-row width.
5. With the field focused at 375px, one tap on a link below the Nav registers.
6. Every item is at least 44px tall and wide, and no two hit areas overlap.
7. With JavaScript off, the theme button is hidden and the rest of the Nav works.
8. The field shows the focus ring and the `accent` border.

## Footer

The Footer holds the secondary lists that the Nav does not: Archive, Tags and RSS in this system's examples, supplied by the site. It ends every page.

- **Structure.** A `<footer>` (the page's one `contentinfo`) holding a `<nav aria-label="Footer">` of links and one copyright line. No second wordmark, no theme button, no search.
- **Links.** The same text items as the Nav (`pl-nav-item`): `label` size (14px), `text-secondary`, `accent-strong` on hover and press, `aria-current="page"` on the current one with the `accent` underline, and the shared focus ring. No icons. Each link is at least 44px tall and wide with `space-4` between them (`space-3` below `bp-sm`), so hit areas touch but never overlap. A page the site does not have is left out, never shown dead.
- **Copyright.** "© 2026 Prasetiyo Hadi Purwoko": `caption` size (13px) in `text-tertiary` (5.0:1 on `bg` in dark, 5.3:1 in light, and only on `bg`). The holder is the author, not the site name (see Naming). It sits at the far end of the row from the links and wraps under them on narrow screens.
- **Frame.** A `border-hairline` rule on top, `space-4` above the content and `space-7` below it, stepping down to `space-6` below `bp-md` like every other `space-7` (see Section rhythm). The same width as the Nav (see Nav and Footer width). Never sticky or fixed.
- **Sample note.** In the ui_kits the "sample content" note sits at the end of `<main>`, above the footer, so the footer stays the only `contentinfo`.

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
- **Search, empty query.** The page shows "Type a word or a tag in the search field." and no results list. The empty field is the one in the Nav.
- **Search, no results.** `role="status"` text: `No posts match "kuberentes". Check the spelling or try a shorter word.` (the query is a sample) with a ghost `Button` labeled "Clear search". Never "Oops", never a blank page.
- **Search, error.** Reuses the post feed error: "Could not load posts. Check your connection, then try again." with "Try again". The field keeps what the reader typed.
- **Forms.** The only form is the Nav search (see Search above). When another is added: errors are text first and tied to their field, and a focused field scrolls into view above the on-screen keyboard.

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
