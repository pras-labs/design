Button: the single CTA primitive for links, form submits, and consulting inquiry prompts.

```jsx
<Button variant="primary">Read the postmortem</Button>
<Button variant="secondary" href="/tags/kubernetes">Kubernetes</Button>
<Button variant="ghost" size="sm" href="/source">View source</Button>
<Button variant="primary" disabled>Send</Button>
<Button variant="primary" loading loadingLabel="Sending">Send</Button>
```

Variants: `primary` (accent fill, use once per view for the main action), `secondary` (outline in `border-control`, use for secondary nav-like actions), `ghost` (text-only, use inline or in dense lists). Sizes: `sm` (32px tall, 44px hit area), `md` (44px tall).

Labels say what happens. No arrow glyphs. `disabled` and `loading` look the same (`surface-2` fill, `text-secondary` label), never navigate, and set `aria-disabled`; `loading` also sets `aria-busy` and swaps the label to the present participle without changing the width. No spinner. If the reason for `disabled` is not obvious, say it in text next to the button. The sample labels are sample text.
