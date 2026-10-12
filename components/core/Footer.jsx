import React from 'react';

/**
 * Footer: secondary links and the copyright line, at the end of every page.
 * Links are the same 44px text items as the Nav, in text-secondary at label size.
 * The copyright holder is the author, not the site name. Static, never sticky or fixed.
 * Pages the site does not have are left out of `links`, never shown as dead links.
 */
const defaultLinks = [
  { key: 'archive', label: 'Archive', href: '/archive' },
  { key: 'tags', label: 'Tags', href: '/tags' },
  { key: 'rss', label: 'RSS', href: '/index.xml' },
];

export function Footer({
  active = null,
  links = defaultLinks,
  owner = 'Prasetiyo Hadi Purwoko',
  year = new Date().getFullYear(),
}) {
  return (
    <footer className="pl-footer">
      <nav className="pl-footer-links" aria-label="Footer">
        {links.map((it) => (
          <a key={it.key} href={it.href} className="pl-nav-item" aria-current={active === it.key ? 'page' : undefined}>
            <span>{it.label}</span>
          </a>
        ))}
      </nav>
      <p className="pl-footer-copy">&copy; {year} {owner}</p>
    </footer>
  );
}
