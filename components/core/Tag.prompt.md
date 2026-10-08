Tag: small mono-font chip for infrastructure topics (kubernetes, gitops, networking, platform-engineering).

```jsx
<Tag>kubernetes</Tag>
<Tag active onClick={clearFilter}>gitops</Tag>
<Tag href="/tags/networking">networking</Tag>
```

`active` marks the currently-filtered tag (accent text, accent-dim fill, accent-border, and `font-weight: 600`, so selection does not depend on hue). With `onClick` the chip is a `<button aria-pressed>`; with `href` it is an `<a>` that gets `aria-current="true"` when active. The chip is 32px tall with a 44px hit area, so chips wrap in a `flex; flex-wrap: wrap; gap: var(--space-3)` row (12px, not 8px) and are never stacked vertically. A chip that would filter to zero posts is not rendered.
