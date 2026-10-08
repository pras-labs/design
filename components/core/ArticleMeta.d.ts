export interface ArticleMetaProps {
  /** Precise date string, e.g. "Jul 18, 2026", never relative ("2 days ago"). */
  date: string;
  /** e.g. "11 min read" */
  readTime: string;
  tags?: string[];
}

/**
 * @startingPoint section="Article Meta" subtitle="Precise date, read time, tags" viewport="700x70"
 */
export declare function ArticleMeta(props: ArticleMetaProps): JSX.Element;
