import React from 'react';
import { getTheme, setTheme } from './theme.js';

/**
 * Nav: minimal top navigation. Stays out of the way of the reading column.
 * In order: the wordmark, a search field, up to three text links the site supplies, and one text button
 * that switches the theme (the last item in the link group). The field is narrow until it has focus; while
 * it has focus it grows, and from the one-row width up the link group is visually hidden but stays
 * focusable (core.css, .pl-nav:has(...)). Tab from the field reaches the first link and the links come back.
 * Escape leaves the field and changes nothing else. Static, never sticky or fixed. If the row does not fit,
 * the items wrap under the wordmark.
 */
const defaultLinks = [
  { key: 'writing', label: 'Writing', href: '/' },
  { key: 'about', label: 'About', href: '/about' },
  { key: 'consulting', label: 'Consulting', href: '/consulting' },
];

export function Nav({ active = 'writing', query = '', links = defaultLinks }) {
  const items = links;
  // Server render and first client render both show dark, then the effect reads the real theme.
  const [theme, setThemeState] = React.useState('dark');
  React.useEffect(() => { setThemeState(getTheme()); }, []);
  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    setThemeState(next);
  };
  return (
    <nav className="pl-nav" aria-label="Main">
      <a href="/" className="pl-wordmark"><span>~/</span>pras-labs</a>
      <form className="pl-search" role="search" action="/search" method="get">
        <input
          className="pl-field"
          type="search"
          name="q"
          defaultValue={query}
          placeholder="Search"
          aria-label="Search the writing"
          autoComplete="off"
          enterKeyHint="search"
          onKeyDown={(e) => { if (e.key === 'Escape') { e.preventDefault(); e.currentTarget.blur(); } }}
        />
      </form>
      <div className="pl-nav-links">
        {items.map((it) => (
          <a key={it.key} href={it.href} className="pl-nav-item" aria-current={active === it.key ? 'page' : undefined}>
            <span>{it.label}</span>
          </a>
        ))}
        <button
          type="button"
          className="pl-nav-item pl-theme-toggle"
          onClick={toggle}
          aria-label={`Theme: ${theme === 'dark' ? 'Dark' : 'Light'}. Switch to ${theme === 'dark' ? 'light' : 'dark'}.`}
        >
          <span>Theme: {theme === 'dark' ? 'Dark' : 'Light'}</span>
        </button>
      </div>
    </nav>
  );
}
