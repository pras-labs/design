export interface TagProps {
  children: React.ReactNode;
  /** @default false */
  active?: boolean;
  /** Renders as <a>. When active it gets aria-current="true". */
  href?: string;
  /** Renders as <button> with aria-pressed (a filter toggle). Takes precedence over href. */
  onClick?: () => void;
}

/**
 * @startingPoint section="Tags" subtitle="Topic chips: kubernetes, gitops, networking…" viewport="700x100"
 */
export declare function Tag(props: TagProps): JSX.Element;
