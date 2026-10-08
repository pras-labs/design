import React from 'react';

/** ArticleMeta: byline row: date, read time, tags. Precise, no relative dates.
 *  Hashtags are static labels. The "/" separators are decorative. */
export function ArticleMeta({ date, readTime, tags = [] }) {
  const metaStyle = {
    fontFamily: 'var(--font-heading)', fontSize: 'var(--text-xs)',
    color: 'var(--text-tertiary)', letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase',
  };
  const sep = <span aria-hidden="true" style={{ color: 'var(--border-strong)' }}>/</span>;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '4px 12px', flexWrap: 'wrap' }}>
      {/* Date and read time stay together; the tags drop to their own line when there is no room. */}
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 12, whiteSpace: 'nowrap' }}>
        <span style={metaStyle}>{date}</span>
        {sep}
        <span style={metaStyle}>{readTime}</span>
      </span>
      {tags.length > 0 && sep}
      <div style={{ display: 'flex', gap: '4px 8px', flexWrap: 'wrap' }}>
        {tags.map((t) => (
          <span key={t} style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--text-secondary)' }}>#{t}</span>
        ))}
      </div>
    </div>
  );
}
