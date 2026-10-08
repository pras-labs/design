import React from 'react';

/** AuthorBio: warm, brief human block. Appears at end of posts and on the about page.
 *  If the headshot fails to load, the empty surface-2 disc and its ring stay. */
export function AuthorBio({ name, role, blurb, avatarSrc, compact = false }) {
  const [failed, setFailed] = React.useState(false);
  const avatar = {
    width: 44, height: 44, borderRadius: 'var(--radius-full)', flexShrink: 0,
    border: '1px solid var(--accent-warm-border)', background: 'var(--surface-2)',
  };
  return (
    <div className={compact ? undefined : 'pl-panel'} style={{
      display: 'flex', gap: 16, alignItems: 'flex-start',
      padding: compact ? 0 : undefined,
      background: compact ? 'transparent' : 'var(--surface)',
      border: compact ? 'none' : '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-md)',
    }}>
      {failed
        ? <div aria-hidden="true" style={avatar} />
        : <img src={avatarSrc} alt={name} onError={() => setFailed(true)} style={{ ...avatar, objectFit: 'cover' }} />}
      <div style={{ minWidth: 0 }}>
        <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 'var(--text-base)', color: 'var(--text-primary)' }}>{name}</div>
        <div style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-xs)', color: 'var(--accent-warm)', letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', margin: '2px 0 8px' }}>{role}</div>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)', margin: 0, maxWidth: '56ch' }}>{blurb}</p>
      </div>
    </div>
  );
}
