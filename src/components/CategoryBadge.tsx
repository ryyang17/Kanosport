import {
  BLOG_CATEGORY_LABELS,
  NEWS_CATEGORY_LABELS,
  type BlogCategory,
  type NewsCategory,
} from "@/data/types";
import { blogCategoryClasses, newsCategoryClasses } from "@/lib/utils";

// Badge voor een nieuws- of blogcategorie.
export function NewsCategoryBadge({ category }: { category: NewsCategory }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${newsCategoryClasses[category]}`}
    >
      {NEWS_CATEGORY_LABELS[category]}
    </span>
  );
}

export function BlogCategoryBadge({ category }: { category: BlogCategory }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${blogCategoryClasses[category]}`}
    >
      {BLOG_CATEGORY_LABELS[category]}
    </span>
  );
}
