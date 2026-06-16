import { ExternalLink } from "lucide-react";
import type { ExternalNews } from "@/lib/news-feed";
import { formatDate } from "@/lib/utils";
import DisciplineBadge from "./DisciplineBadge";

// Kaart voor echt, extern nieuws: kop + korte samenvatting + bronlink.
// We tonen bewust niet de volledige tekst (auteursrecht) maar linken door.
export default function ExternalNewsCard({ article }: { article: ExternalNews }) {
  return (
    <article className="flex flex-col rounded-xl border border-brand-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-2 flex flex-wrap items-center gap-2">
        <time
          dateTime={article.publishedAt}
          className="text-xs font-medium text-brand-500"
        >
          {formatDate(article.publishedAt)}
        </time>
        {article.discipline && <DisciplineBadge discipline={article.discipline} />}
      </div>
      <h3 className="text-lg font-semibold leading-snug text-brand-950">
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-brand-700 focus:underline focus:outline-none"
        >
          {article.title}
        </a>
      </h3>
      <p className="mt-2 flex-1 text-sm text-brand-700">{article.excerpt}</p>
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent-600 hover:text-accent-700 hover:underline"
      >
        Lees op {article.source}
        <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
      </a>
    </article>
  );
}
