import React from 'react';

/**
 * CodeBlock: the most frequent surface on the site. Filename/lang header bar,
 * monospace body, and a copy affordance. No line-number gutter noise by default.
 *
 * Long lines scroll inside the block, never the page. The scrolling element is a
 * keyboard-focusable region with a name, so a keyboard user can scroll it.
 * Color the spans with the .tok-* classes in core.css (comments are italic).
 */
export function CodeBlock({ filename, language = 'bash', children }) {
  const r = 'calc(var(--radius-md) - 1px)';
  return (
    <div style={{
      background: 'var(--code-bg)',
      border: '1px solid var(--code-border)',
      borderRadius: 'var(--radius-md)',
      maxWidth: '100%',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-sm)',
    }}>
      {filename && (
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12,
          padding: '8px 14px', borderBottom: '1px solid var(--code-border)',
          borderRadius: `${r} ${r} 0 0`,
          color: 'var(--text-tertiary)', fontSize: 'var(--text-xs)',
        }}>
          <span style={{ overflowWrap: 'anywhere', minWidth: 0 }}>{filename}</span>
          <span style={{ textTransform: 'uppercase', letterSpacing: 'var(--tracking-wide)' }}>{language}</span>
        </div>
      )}
      <pre
        tabIndex={0}
        role="region"
        aria-label={filename || `${language} code`}
        style={{
          margin: 0, padding: '16px 18px', overflowX: 'auto', maxWidth: '100%',
          color: 'var(--code-fg)', lineHeight: 1.6,
          borderRadius: filename ? `0 0 ${r} ${r}` : r,
        }}
      >
        <code>{children}</code>
      </pre>
    </div>
  );
}
