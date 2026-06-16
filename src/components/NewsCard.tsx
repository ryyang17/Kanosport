import Image from "next/image";
import Link from "next/link";
import type { NewsArticle } from "@/data/types";
import { formatDate } from "@/lib/utils";
import DisciplineBadge from "./DisciplineBadge";

export default function NewsCard({ article }: { article: NewsArticle }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-brand-100 bg-white shadow-sm transition-shadow hover:shadow-md">
      <Link
        href={`/nieuws/${article.slug}`}
        className="relative block aspect-[16/9] overflow-hidden"
      >
        <Image
          src={article.imageUrl}
          alt={article.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-center gap-2">
          <time
            dateTime={article.publishedAt}
            className="text-xs font-medium text-brand-500"
          >
            {formatDate(article.publishedAt)}
          </time>
          {article.discipline && (
            <DisciplineBadge discipline={article.discipline} />
          )}
        </div>
        <h3 className="text-lg font-semibold leading-snug text-brand-950">
          <Link
            href={`/nieuws/${article.slug}`}
            className="hover:text-brand-700 focus:outline-none focus:underline"
          >
            {article.title}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm text-brand-700">{article.excerpt}</p>
        <Link
          href={`/nieuws/${article.slug}`}
          className="mt-4 inline-flex text-sm font-semibold text-accent-600 hover:text-accent-700 hover:underline"
        >
          Lees meer →
        </Link>
      </div>
    </article>
  );
}
