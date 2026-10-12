/* Theme helpers. Order of choice: stored choice, then prefers-color-scheme, then dark (only where the
 * browser reports no color scheme at all; see README, Theme switching).
 * Storage is read and written inside try/catch so the page works without it. */

const KEY = 'pras-labs-theme';

/** Inline this string in <head>, before first paint, so there is no flash.
 *  Without JavaScript the prefers-color-scheme rule in tokens/colors.css decides. */
export const themeInitScript =
  "try{var t=localStorage.getItem('" + KEY + "');if(t==='light'||t==='dark')document.documentElement.setAttribute('data-theme',t)}catch(e){}";

/** Inline this in <head> inside <noscript><style>...</style></noscript>. Without JavaScript the theme button
 *  does nothing, so it is not shown. */
export const themeNoScriptCss = '.pl-theme-toggle{display:none}';

/** The theme that is showing now. */
export function getTheme() {
  if (typeof document === 'undefined') return 'dark';
  const set = document.documentElement.getAttribute('data-theme');
  if (set === 'light' || set === 'dark') return set;
  try {
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  } catch (e) {
    return 'dark';
  }
}

/** Switch the theme and store the choice. */
export function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  try { localStorage.setItem(KEY, theme); } catch (e) { /* storage unavailable: the choice lasts for this page only */ }
}
