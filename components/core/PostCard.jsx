import React from 'react';

/**
 * PostCard: article preview used on homepage and index/list pages.
 * The whole row is one link. Hashtags inside it are static labels, not links.
 */
export function PostCard({ title, excerpt, date, readTime, tags = [] }) {
  return (
    <a href="#" className="pl-post" style={{
      display: 'block', padding: 'var(--space-6) 0', borderBottom: '1px solid var(--border-hairline)',
      textDecoration: 'none', color: 'inherit',
    }}>
      <div className="pl-post-title" style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-h3)', fontWeight: 600, marginBottom: 8, letterSpacing: 'var(--tracking-tight)', overflowWrap: 'anywhere' }}>
        {title}
      </div>
      <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-body)', margin: '0 0 14px', maxWidth: '62ch' }}>
        {excerpt}
      </p>
      <div style={{ display: 'flex', gap: '4px 12px', alignItems: 'center', flexWrap: 'wrap' }}>
        <span style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)', letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase' }}>{date} · {readTime}</span>
        {tags.map((t) => (
          <span key={t} style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--text-secondary)' }}>#{t}</span>
        ))}
      </div>
    </a>
  );
}
