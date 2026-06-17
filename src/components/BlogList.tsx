"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import {
  BLOG_CATEGORY_LABELS,
  type BlogCategory,
  type BlogPost,
} from "@/data/types";
import { byNewest } from "@/lib/utils";
import BlogCard from "./BlogCard";

type Filter = "alle" | BlogCategory;

const filters: { value: Filter; label: string }[] = [
  { value: "alle", label: "Alle" },
  ...(Object.keys(BLOG_CATEGORY_LABELS) as BlogCategory[]).map((c) => ({
    value: c,
    label: BLOG_CATEGORY_LABELS[c],
  })),
];

export default function BlogList({
  posts,
  columns = 3,
}: {
  posts: BlogPost[];
  columns?: 1 | 2 | 3;
}) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("alle");

  const filtered = useMemo(() => {
    const sorted = byNewest(posts);
    const q = query.trim().toLowerCase();
    return sorted.filter((p) => {
      const matchesFilter = filter === "alle" || p.category === filter;
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.body.toLowerCase().includes(q) ||
        p.author.toLowerCase().includes(q);
      return matchesFilter && matchesQuery;
    });
  }, [posts, query, filter]);

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
          <label htmlFor="blog-search" className="sr-only">
            Zoek in blogs
          </label>
          <Search
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-500"
            aria-hidden="true"
          />
          <input
            id="blog-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Zoek in blogs…"
            className="w-full rounded-full border border-brand-200 bg-white py-2 pl-9 pr-4 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/40"
          />
        </div>
        <div
          role="group"
          aria-label="Filter blogs op categorie"
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
          {filtered.map((p) => (
            <BlogCard key={p.id} post={p} />
          ))}
        </div>
      ) : (
        <p className="rounded-lg border border-brand-100 bg-brand-50 p-6 text-brand-700">
          Geen blogs gevonden voor deze filters.
        </p>
      )}
    </div>
  );
}
