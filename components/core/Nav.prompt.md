Nav: a terminal-style wordmark, a search field, three links (Writing / About / Consulting) and one text button that switches the theme ("Theme: Dark" / "Theme: Light", always the last item of the link group). No dropdowns, no icons.

```jsx
<Nav active="writing" />
<Nav active={null} query="gitops" />  {/* the /search page: no current link, text kept in the field */}
```

Static, never sticky or fixed. Every item is at least 44px tall and wide. The current page has `aria-current="page"`. If the row does not fit it wraps under the wordmark, and the link group wraps too; with the real fonts the row is one line from 609px up, two rows from 332px, and three rows below 332px. No hamburger. The `<nav>` is labeled "Main". The theme button shows the current theme ("Theme: Dark") and its accessible name adds the action ("Theme: Dark. Switch to light."); the visible text stays at the start of the name. It reads and stores the choice through `theme.js`; put `themeInitScript` inline in `<head>` so there is no flash.

Search: a `<form role="search" action="/search">` with one `type="search"` field named `q` (`aria-label="Search the writing"`, placeholder "Search"), placed right after the wordmark. It is narrow at rest. While it has focus it grows to the right; from 609px up the link group is hidden while it has focus (the Nav keeps its height), and below that the links stay so the page does not shift. Escape or leaving the field restores the links. The change is instant, with no animation. The rules live in `core.css` (`.pl-search`, `.pl-field`). See the README, Search.
