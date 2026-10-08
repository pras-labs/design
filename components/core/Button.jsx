import React from 'react';

/**
 * Button: primary CTA, secondary outline, and ghost text variants.
 * Terminal-adjacent: no gradients, no shadows on hover, just color + border shifts.
 *
 * Targets: md is 44px tall. sm is 32px tall with a 44px hit area (see core.css, [data-hit]).
 * States: disabled (aria-disabled, never navigates) and loading (label swaps to the
 * present participle, width does not change, no spinner).
 */
export function Button({
  variant = 'primary', size = 'md', href, onClick, children, icon,
  disabled = false, loading = false, loadingLabel = 'Loading',
}) {
  const sizes = {
    sm: { padding: '0 12px', minHeight: 32, fontSize: 'var(--text-xs)' },
    md: { padding: '0 18px', minHeight: 'var(--touch-target)', fontSize: 'var(--text-sm)' },
  };
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    fontFamily: 'var(--font-heading)',
    fontWeight: 600,
    borderRadius: 'var(--radius-sm)',
    border: '1px solid transparent',
    cursor: 'pointer',
    transition: 'background var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard), color var(--duration-fast) var(--ease-standard)',
    textDecoration: 'none',
    ...sizes[size],
  };
  const variants = {
    primary: { background: 'var(--accent)', color: 'var(--text-on-accent)' },
    secondary: { background: 'transparent', color: 'var(--text-primary)', borderColor: 'var(--border-control)' },
    ghost: { background: 'transparent', color: 'var(--accent)' },
  };
  const blocked = disabled || loading;
  // Disabled and loading look the same: surface-2 fill, text-secondary label (6.1:1 dark, 5.9:1 light), no border.
  const blockedStyle = { background: 'var(--surface-2)', color: 'var(--text-secondary)', borderColor: 'transparent', cursor: 'not-allowed' };
  // A blocked button never navigates, so it renders as <button> even when href is set.
  const Tag = href && !blocked ? 'a' : 'button';
  const extra = Tag === 'button' ? { type: 'button' } : { href };
  // Both labels share one grid cell, so the width is the wider of the two.
  const label = (
    <span style={{ display: 'inline-grid' }}>
      <span style={{ gridArea: '1 / 1', visibility: loading ? 'hidden' : 'visible' }}>{children}</span>
      <span style={{ gridArea: '1 / 1', visibility: loading ? 'visible' : 'hidden' }} aria-hidden={!loading}>{loadingLabel}</span>
    </span>
  );
  return (
    <Tag
      {...extra}
      data-hit={size === 'sm' ? '' : undefined}
      aria-disabled={blocked ? 'true' : undefined}
      aria-busy={loading ? 'true' : undefined}
      onClick={blocked ? (e) => e.preventDefault() : onClick}
      style={{ ...base, ...variants[variant], ...(blocked ? blockedStyle : null) }}
    >
      {icon}{label}
    </Tag>
  );
}
