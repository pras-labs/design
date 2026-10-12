export interface FooterLink {
  /** Matched against `active`. */
  key: string;
  label: string;
  href: string;
}

export interface FooterProps {
  /** The `key` of the current page's link, if it is one of them. @default null */
  active?: string | null;
  /** Secondary links, in order. Primary sections stay in the Nav. @default Archive, Tags, RSS */
  links?: FooterLink[];
  /** Copyright holder: the author, not the site name. @default 'Prasetiyo Hadi Purwoko' */
  owner?: string;
  /** @default the current year */
  year?: number;
  /** Adds a static "Back to top" link (href="#top") as the last link. No script. Use on long pages. @default false */
  backToTop?: boolean;
}

/**
 * @startingPoint section="Navigation" subtitle="Secondary links and copyright" viewport="700x120"
 */
export declare function Footer(props: FooterProps): JSX.Element;
