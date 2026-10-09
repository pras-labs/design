import React from 'react';
import { getTheme, setTheme } from './theme.js';

/**
 * Nav: minimal top navigation. Stays out of the way of the reading column.
 * Three links, the wordmark and one text button that switches the theme (the last item).
 * Static, never sticky or fixed. If the row does not fit, the links wrap under the wordmark.
 */
export function Nav({ active = 'writing' }) {
  const items = [
    { key: 'writing', label: 'Writing', href: '/' },
    { key: 'about', label: 'About', href: '/about' },
    { key: 'consulting', label: 'Consulting', href: '/consulting' },
  ];
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
