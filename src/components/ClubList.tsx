"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { DISCIPLINE_LABELS, type Discipline, type Vereniging } from "@/data/types";
import ClubCard from "./ClubCard";

type Filter = "alle" | Discipline;

const filters: { value: Filter; label: string }[] = [
  { value: "alle", label: "Alle disciplines" },
  { value: "kanopolo", label: DISCIPLINE_LABELS.kanopolo },
  { value: "kanoslalom", label: DISCIPLINE_LABELS.kanoslalom },
  { value: "kanosprint", label: DISCIPLINE_LABELS.kanosprint },
];

export default function ClubList({ clubs }: { clubs: Vereniging[] }) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("alle");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return clubs.filter((c) => {
      const matchesQuery =
        !q ||
        c.name.toLowerCase().includes(q) ||
        c.city.toLowerCase().includes(q);
      const matchesFilter =
        filter === "alle" || c.disciplines.includes(filter);
      return matchesQuery && matchesFilter;
    });
  }, [clubs, query, filter]);

  return (
    <div>
      <div className="mb-8 space-y-4">
        <div className="relative max-w-md">
          <label htmlFor="club-search" className="sr-only">
            Zoek op naam of plaats
          </label>
          <Search
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-500"
            aria-hidden="true"
          />
          <input
            id="club-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Zoek op naam of plaats…"
            className="w-full rounded-full border border-brand-200 bg-white py-2 pl-9 pr-4 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/40"
          />
        </div>

        <div
          role="group"
          aria-label="Filter op discipline"
          className="flex flex-wrap gap-2"
        >
          {filters.map((f) => (
            <button
              key={f.value}
              type="button"
              onClick={() => setFilter(f.value)}
              aria-pressed={filter === f.value}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 ${
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
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((c) => (
            <ClubCard key={c.id} club={c} />
          ))}
        </div>
      ) : (
        <p className="rounded-lg border border-brand-100 bg-brand-50 p-6 text-brand-700">
          Geen verenigingen gevonden voor deze zoekopdracht.
        </p>
      )}
    </div>
  );
}
