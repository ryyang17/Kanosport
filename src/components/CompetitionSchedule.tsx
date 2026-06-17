"use client";

import { useMemo, useState } from "react";
import type { Competition, CompetitionLevel } from "@/data/types";
import CompetitionCard from "./CompetitionCard";

type Filter = "alle" | CompetitionLevel;

const filters: { value: Filter; label: string }[] = [
  { value: "alle", label: "Alle" },
  { value: "WK", label: "WK" },
  { value: "EK", label: "EK" },
  { value: "NK", label: "NK" },
  { value: "toernooi", label: "Toernooien" },
];

// Sorteervolgorde: eerst live, dan aankomend (vroegste eerst), dan afgelopen
// (recentste eerst).
function sortCompetitions(items: Competition[]): Competition[] {
  const rank: Record<Competition["status"], number> = {
    live: 0,
    aankomend: 1,
    afgelopen: 2,
  };
  return [...items].sort((a, b) => {
    if (rank[a.status] !== rank[b.status]) return rank[a.status] - rank[b.status];
    const ta = new Date(a.date).getTime();
    const tb = new Date(b.date).getTime();
    // Aankomend chronologisch, afgelopen omgekeerd.
    return a.status === "afgelopen" ? tb - ta : ta - tb;
  });
}

export default function CompetitionSchedule({
  competitions,
}: {
  competitions: Competition[];
}) {
  const [filter, setFilter] = useState<Filter>("alle");

  const filtered = useMemo(() => {
    const sorted = sortCompetitions(competitions);
    if (filter === "alle") return sorted;
    return sorted.filter((c) => c.level === filter);
  }, [competitions, filter]);

  return (
    <div>
      <div
        role="group"
        aria-label="Filter wedstrijden op niveau"
        className="mb-8 flex flex-wrap gap-2"
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

      {filtered.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((c) => (
            <CompetitionCard key={c.id} competition={c} />
          ))}
        </div>
      ) : (
        <p className="rounded-lg border border-brand-100 bg-brand-50 p-6 text-brand-700">
          Geen wedstrijden gevonden voor dit filter.
        </p>
      )}
    </div>
  );
}
