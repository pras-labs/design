export interface NavProps {
  /** Pass null on pages that are none of the three, such as /search. @default 'writing' */
  active?: 'writing' | 'about' | 'consulting' | null;
  /** Value shown in the search field, for the results page. @default '' */
  query?: string;
  // The nav is labeled "Main". The theme button is built in: it reads and writes the theme through ./theme.js.
}

/**
 * @startingPoint section="Navigation" subtitle="Minimal top nav" viewport="700x70"
 */
export declare function Nav(props: NavProps): JSX.Element;
