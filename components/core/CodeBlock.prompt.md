CodeBlock: wraps every code sample on the blog. Distinct near-black background from the surrounding warm surfaces, for clear figure/ground separation.

```jsx
<CodeBlock filename="reconcile.sh" language="bash">
{`kubectl apply -f manifests/ --context prod-apse1`}
</CodeBlock>
```

Omit `filename` for a bare snippet (no header bar). Syntax colors come from the `--code-*` tokens: wrap spans in the `.tok-keyword`, `.tok-string`, `.tok-function`, `.tok-number`, `.tok-tag`, `.tok-punct` and `.tok-comment` classes from `core.css` (comments are italic), or use a highlighter that maps to the tokens. Long lines scroll inside the block; the scrolling region is keyboard-focusable and named after the filename. The code above is sample text.
