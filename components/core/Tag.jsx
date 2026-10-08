import React from 'react';

/**
 * Tag: topic/category chip. Used on posts, in filters, and in the tag index.
 *
 * Interactive chips are 32px tall with a 44px hit area (core.css, [data-hit]), so a
 * wrapping row needs a 12px (space-3) row gap. Selected state does not rely on hue:
 * font-weight 600, plus aria-pressed on a button chip or aria-current on a link chip.
 */
export function Tag({ children, active = false, href, onClick }) {
  const style = {
    display: 'inline-flex',
    alignItems: 'center',
    minHeight: 32,
    fontFamily: 'var(--font-mono)',
    fontSize: 'var(--text-xs)',
    fontWeight: active ? 600 : 400,
    letterSpacing: 'var(--tracking-normal)',
    padding: '0 12px',
    borderRadius: 'var(--radius-full)',
    border: `1px solid ${active ? 'var(--accent-border)' : 'var(--border-control)'}`,
    background: active ? 'var(--accent-dim)' : 'transparent',
    color: active ? 'var(--accent)' : 'var(--text-secondary)',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    cursor: href || onClick ? 'pointer' : undefined,
  };
  if (onClick) {
    return <button type="button" onClick={onClick} aria-pressed={active} data-hit="" style={style}>{children}</button>;
  }
  if (href) {
    return <a href={href} aria-current={active ? 'true' : undefined} data-hit="" style={style}>{children}</a>;
  }
  return <span style={style}>{children}</span>;
}
