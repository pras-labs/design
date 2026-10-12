Footer: secondary links (default Archive / Tags / RSS) and one copyright line, at the end of every page. Primary sections stay in the Nav, which is the wordmark, search, links and theme button only, so Archive, Tags and similar lists live here.

```jsx
<Footer />
<Footer active="archive" links={[{ key: 'archive', label: 'Archive', href: '/archive' }]} />
```

The links are the same text items as the Nav (`pl-nav-item`): `label` size, `text-secondary`, accent-strong on hover (hover devices only) and on press, `aria-current="page"` for the current one, at least 44px tall and wide with no icons. The link row is a `<nav aria-label="Footer">` inside `<footer>`, so the page has one `contentinfo` landmark. The copyright line is `caption` size in `text-tertiary`: "© 2026 Prasetiyo Hadi Purwoko". The copyright holder is the author, not the site name. A `border-hairline` rule separates the footer from the content, with `space-7` below it (`space-6` below 748px, like every other `space-7`). It is as wide as the Nav (`content-width-wide`, 1040px, centered). On narrow screens the line wraps under the links. Never sticky or fixed. Leave out a page the site does not have, never a dead link.
