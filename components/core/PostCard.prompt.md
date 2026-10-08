PostCard: the repeating unit on the homepage feed and archive/index pages. No thumbnail image, no card border/shadow. A plain divider-separated row, editorial rather than "blog grid."

```jsx
<PostCard
  title="Reconciling drift across a 40-cluster GitOps fleet"
  excerpt="The cluster didn't page us because it failed. It paged us because it succeeded, quietly."
  date="Jul 18, 2026"
  readTime="11 min read"
  tags={['gitops', 'kubernetes']}
/>
```

The whole row is one link. Hashtags inside it are static `text-secondary` labels, not links. All of the above is sample text, not a published article. A feed of rows also needs loading, empty, filtered-to-nothing and error states: see "States" in the README for the wording.
