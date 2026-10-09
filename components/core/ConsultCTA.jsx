import React from 'react';

/** ConsultCTA: understated consulting-inquiry prompt. Not a marketing banner.
 *  Write availability language only when it is true on the day you publish. */
export function ConsultCTA({ heading = 'Working on something similar?', body, buttonLabel = 'Get in touch', href = '/contact' }) {
  return (
    <div className="pl-cta" style={{
      display: 'flex', flexWrap: 'wrap', gap: 20, alignItems: 'center', justifyContent: 'space-between',
      border: '1px solid var(--border-strong)', borderRadius: 'var(--radius-md)',
      background: 'var(--bg-raised)',
    }}>
      <div style={{ maxWidth: '48ch' }}>
        <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 'var(--text-lg)', color: 'var(--text-primary)', marginBottom: 6 }}>{heading}</div>
        {body && <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', margin: 0, lineHeight: 'var(--leading-body)' }}>{body}</p>}
      </div>
      <a href={href} className="pl-cta-link" style={{
        display: 'inline-flex', alignItems: 'center', minHeight: 'var(--touch-target)',
        fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 'var(--text-sm)',
        padding: '0 18px',
        borderRadius: 'var(--radius-sm)', textDecoration: 'none', whiteSpace: 'nowrap',
      }}>{buttonLabel}</a>
    </div>
  );
}
