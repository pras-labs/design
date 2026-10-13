Footer: secondary links (default Archive / Tags / RSS) and one copyright line, at the end of every page. Primary sections stay in the Nav, which is the wordmark, search, links and theme button only, so Archive, Tags and similar lists live here.

```jsx
<Footer />
<Footer active="archive" links={[{ key: 'archive', label: 'Archive', href: '/archive' }]} />
<Footer backToTop />
```

The links are the same text items as the Nav (`pl-nav-item`): `label` size, `text-secondary`, a `surface-hover` fill plus `text-primary` on hover (hover devices only) and on press with no transition on the way in, `aria-current="page"` for the current one, a 44px hit area (the box is the label plus `space-2` each side; short labels get the rest from a pseudo-element) and no icons. The link row is pulled out by `space-2` so the first label sits on the content edge.

`backToTop` adds "Back to top" (`href="#top"`) as the last item of the row, same item style. It is a plain link: do not intercept it with script, because a native `#top` jump also moves the keyboard starting point to the top, and `scrollIntoView` or `scrollTo` do not. A floating back-to-top button is outside the system (see the README). The link row is a `<nav aria-label="Footer">` inside `<footer>`, so the page has one `contentinfo` landmark. The copyright line is `caption` size in `text-tertiary`: "© 2026 Prasetiyo Hadi Purwoko". The copyright holder is the author, not the site name. A `border-hairline` rule separates the footer from the content, with `space-7` below it (`space-6` below 748px, like every other `space-7`). It is as wide as the Nav (`content-width-wide`, 1040px, centered). On narrow screens the line wraps under the links. Never sticky or fixed. Leave out a page the site does not have, never a dead link.
