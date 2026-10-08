Nav: three links (Writing / About / Consulting), a terminal-style wordmark and one text button that switches the theme ("Theme: Dark" / "Theme: Light", always the last item). No dropdowns, no search bar in v1, no icons.

```jsx
<Nav active="writing" />
```

Static, never sticky or fixed. Every item is at least 44px tall and wide. The current page has `aria-current="page"`. If the row does not fit it wraps under the wordmark, and the link group wraps too; with the real fonts the row is one line from about 428px up. No hamburger. The theme button reads and stores the choice through `theme.js`; put `themeInitScript` inline in `<head>` so there is no flash.
