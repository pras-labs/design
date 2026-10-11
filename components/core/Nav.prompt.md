Nav: four links (Writing / About / Consulting / Search), a terminal-style wordmark and one text button that switches the theme ("Theme: Dark" / "Theme: Light", always the last item). No dropdowns, no icons. Search is a plain text link to `/search`, a page with its own form (see the README, Search), not a field in the nav.

```jsx
<Nav active="writing" />
```

Static, never sticky or fixed. Every item is at least 44px tall and wide. The current page has `aria-current="page"`. If the row does not fit it wraps under the wordmark, and the link group wraps too; with the real fonts the row is one line from 540px up, two rows from 394px, and three rows below 394px. No hamburger. The `<nav>` is labeled "Main". The theme button shows the current theme ("Theme: Dark") and its accessible name adds the action ("Theme: Dark. Switch to light."); the visible text stays at the start of the name. It reads and stores the choice through `theme.js`; put `themeInitScript` inline in `<head>` so there is no flash.
