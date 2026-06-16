import { news } from "@/data/news";
import { events } from "@/data/events";
import { clubs } from "@/data/clubs";
import { disciplineList } from "@/data/disciplines";

export type SearchResultType =
  | "discipline"
  | "nieuws"
  | "evenement"
  | "vereniging";

export interface SearchResult {
  type: SearchResultType;
  title: string;
  description: string;
  href: string;
}

export interface GroupedResults {
  discipline: SearchResult[];
  nieuws: SearchResult[];
  evenement: SearchResult[];
  vereniging: SearchResult[];
}

function matches(query: string, ...fields: (string | undefined)[]): boolean {
  const q = query.trim().toLowerCase();
  if (!q) return false;
  return fields.some((field) => field?.toLowerCase().includes(q));
}

// Client-side zoeken over disciplines, nieuws, evenementen en verenigingen.
export function search(query: string): GroupedResults {
  const results: GroupedResults = {
    discipline: [],
    nieuws: [],
    evenement: [],
    vereniging: [],
  };

  if (!query.trim()) return results;

  for (const d of disciplineList) {
    if (matches(query, d.name, d.tagline, d.intro)) {
      results.discipline.push({
        type: "discipline",
        title: d.name,
        description: d.tagline,
        href: `/disciplines/${d.slug}`,
      });
    }
  }

  for (const a of news) {
    if (matches(query, a.title, a.excerpt, a.body, a.discipline)) {
      results.nieuws.push({
        type: "nieuws",
        title: a.title,
        description: a.excerpt,
        href: `/nieuws/${a.slug}`,
      });
    }
  }

  for (const e of events) {
    if (matches(query, e.title, e.description, e.location, e.type, e.discipline)) {
      results.evenement.push({
        type: "evenement",
        title: e.title,
        description: `${e.location} — ${e.description}`,
        href: "/evenementen",
      });
    }
  }

  for (const c of clubs) {
    if (matches(query, c.name, c.city, ...c.disciplines)) {
      results.vereniging.push({
        type: "vereniging",
        title: c.name,
        description: `${c.city} — ${c.disciplines.join(", ")}`,
        href: "/verenigingen",
      });
    }
  }

  return results;
}

export function countResults(results: GroupedResults): number {
  return (
    results.discipline.length +
    results.nieuws.length +
    results.evenement.length +
    results.vereniging.length
  );
}
