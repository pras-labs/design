export interface NavProps {
  /** @default 'writing' */
  active?: 'writing' | 'about' | 'consulting';
  // The nav is labeled "Main". The theme button is built in: it reads and writes the theme through ./theme.js.
}

/**
 * @startingPoint section="Navigation" subtitle="Minimal top nav" viewport="700x70"
 */
export declare function Nav(props: NavProps): JSX.Element;
