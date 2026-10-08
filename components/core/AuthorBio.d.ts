export interface AuthorBioProps {
  name: string;
  role: string;
  blurb: string;
  /** Headshot path, e.g. "assets/pras.jpg". If it fails to load, an empty disc with the ring stays. */
  avatarSrc: string;
  /** Compact strips padding/border/background: use inline mid-article. @default false */
  compact?: boolean;
}

/**
 * @startingPoint section="Author Bio" subtitle="Warm, brief human block" viewport="700x140"
 */
export declare function AuthorBio(props: AuthorBioProps): JSX.Element;
