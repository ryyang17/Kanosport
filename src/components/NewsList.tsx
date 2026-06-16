"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import type { NewsArticle } from "@/data/types";
import { byNewest } from "@/lib/utils";
import NewsCard from "./NewsCard";

export default function NewsList({ articles }: { articles: NewsArticle[] }) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const sorted = byNewest(articles);
    const q = query.trim().toLowerCase();
    if (!q) return sorted;
    return sorted.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        a.body.toLowerCase().includes(q) ||
        a.discipline?.toLowerCase().includes(q)
    );
  }, [articles, query]);

  return (
    <div>
      <div className="relative mb-8 max-w-md">
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

      {filtered.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((a) => (
            <NewsCard key={a.id} article={a} />
          ))}
        </div>
      ) : (
        <p className="rounded-lg border border-brand-100 bg-brand-50 p-6 text-brand-700">
          Geen nieuwsartikelen gevonden voor &ldquo;{query}&rdquo;.
        </p>
      )}
    </div>
  );
}
