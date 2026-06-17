"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import {
  NEWS_CATEGORY_LABELS,
  type NewsArticle,
  type NewsCategory,
} from "@/data/types";
import { byNewest } from "@/lib/utils";
import NewsCard from "./NewsCard";

type Filter = "alle" | NewsCategory;

const filters: { value: Filter; label: string }[] = [
  { value: "alle", label: "Alle" },
  ...(Object.keys(NEWS_CATEGORY_LABELS) as NewsCategory[]).map((c) => ({
    value: c,
    label: NEWS_CATEGORY_LABELS[c],
  })),
];

// Aantal kolommen is instelbaar zodat de lijst ook in een smalle kolom past
// (bv. naast de blogs op de Nieuws & Blogs-pagina).
export default function NewsList({
  articles,
  columns = 3,
}: {
  articles: NewsArticle[];
  columns?: 1 | 2 | 3;
}) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("alle");

  const filtered = useMemo(() => {
    const sorted = byNewest(articles);
    const q = query.trim().toLowerCase();
    return sorted.filter((a) => {
      const matchesFilter = filter === "alle" || a.category === filter;
      const matchesQuery =
        !q ||
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        a.body.toLowerCase().includes(q);
      return matchesFilter && matchesQuery;
    });
  }, [articles, query, filter]);

  const gridCols =
    columns === 1
      ? "grid-cols-1"
      : columns === 2
        ? "sm:grid-cols-2"
        : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div>
      <div className="mb-6 space-y-4">
        <div className="relative max-w-md">
          <label htmlFor="news-search" className="sr-only">
            Zoek in nieuws
          </label>
          <Search
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-500"
            aria-hidden="true"
          />
          <input
            id="news-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Zoek in nieuws…"
            className="w-full rounded-full border border-brand-200 bg-white py-2 pl-9 pr-4 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/40"
          />
        </div>
        <div
          role="group"
          aria-label="Filter nieuws op categorie"
          className="flex flex-wrap gap-2"
        >
          {filters.map((f) => (
            <button
              key={f.value}
              type="button"
              onClick={() => setFilter(f.value)}
              aria-pressed={filter === f.value}
              className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 ${
                filter === f.value
                  ? "bg-brand-600 text-white"
                  : "border border-brand-200 bg-white text-brand-700 hover:bg-brand-50"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {filtered.length > 0 ? (
        <div className={`grid gap-6 ${gridCols}`}>
          {filtered.map((a) => (
            <NewsCard key={a.id} article={a} />
          ))}
        </div>
      ) : (
        <p className="rounded-lg border border-brand-100 bg-brand-50 p-6 text-brand-700">
          Geen nieuwsartikelen gevonden voor deze filters.
        </p>
      )}
    </div>
  );
}
