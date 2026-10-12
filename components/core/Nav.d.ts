export interface NavLink {
  /** Matched against `active`. */
  key: string;
  label: string;
  href: string;
}

export interface NavProps {
  /** The `key` of the current page's link. Pass null on pages that are none of them, such as /search. @default 'writing' */
  active?: string | null;
  /** Value shown in the search field, for the results page. @default '' */
  query?: string;
  /** Up to three text links, in order. A page the site does not have is left out, never shown as a dead link.
   *  @default Writing (/), About (/about), Consulting (/consulting) */
  links?: NavLink[];
  // The nav is labeled "Main". The theme button is built in: it reads and writes the theme through ./theme.js.
}

/**
 * @startingPoint section="Navigation" subtitle="Minimal top nav" viewport="700x70"
 */
export declare function Nav(props: NavProps): JSX.Element;
