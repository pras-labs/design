export interface ButtonProps {
  /** @default 'primary' */
  variant?: 'primary' | 'secondary' | 'ghost';
  /** @default 'md' */
  size?: 'sm' | 'md';
  /** Renders as <a> when set, else <button>. */
  href?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  /** Not clickable: aria-disabled, surface-2 fill, never navigates. Say why in text next to it if it is not obvious. @default false */
  disabled?: boolean;
  /** Disabled, aria-busy, and the label swaps to `loadingLabel`. The width does not change. @default false */
  loading?: boolean;
  /** Present participle of the action, e.g. "Sending". @default 'Loading' */
  loadingLabel?: string;
  children: React.ReactNode;
}

/**
 * @startingPoint section="Buttons" subtitle="Primary, secondary, ghost CTAs" viewport="700x140"
 */
export declare function Button(props: ButtonProps): JSX.Element;
