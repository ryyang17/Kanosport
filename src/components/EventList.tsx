"use client";

import { useMemo, useState } from "react";
import type { KanoEvent } from "@/data/types";
import { byDateAsc } from "@/lib/utils";
import EventCard from "./EventCard";

type Filter = "alle" | KanoEvent["type"];

const filters: { value: Filter; label: string }[] = [
  { value: "alle", label: "Alle" },
  { value: "wedstrijd", label: "Wedstrijd" },
  { value: "demonstratie", label: "Demonstratie" },
  { value: "clinic", label: "Clinic" },
];

export default function EventList({ events }: { events: KanoEvent[] }) {
  const [filter, setFilter] = useState<Filter>("alle");

  const filtered = useMemo(() => {
    const sorted = byDateAsc(events);
    if (filter === "alle") return sorted;
    return sorted.filter((e) => e.type === filter);
  }, [events, filter]);

  return (
    <div>
      <div
        role="group"
        aria-label="Filter op type evenement"
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
          {filtered.map((e) => (
            <EventCard key={e.id} event={e} />
          ))}
        </div>
      ) : (
        <p className="rounded-lg border border-brand-100 bg-brand-50 p-6 text-brand-700">
          Geen evenementen gevonden voor dit filter.
        </p>
      )}
    </div>
  );
}
