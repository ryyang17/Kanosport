import type { Metadata } from "next";
import Link from "next/link";
import { CalendarDays, Newspaper, Users, Waves } from "lucide-react";
import PageHero from "@/components/PageHero";
import SearchBar from "@/components/SearchBar";
import { countResults, search, type SearchResult } from "@/lib/search";

export const metadata: Metadata = {
  title: "Zoeken",
  description: "Doorzoek de hele site: disciplines, nieuws, evenementen en verenigingen.",
};

const groups: {
  key: keyof ReturnType<typeof search>;
  label: string;
  icon: typeof Waves;
}[] = [
  { key: "discipline", label: "Disciplines", icon: Waves },
  { key: "nieuws", label: "Nieuws", icon: Newspaper },
  { key: "evenement", label: "Evenementen", icon: CalendarDays },
  { key: "vereniging", label: "Verenigingen", icon: Users },
];

function ResultItem({ result }: { result: SearchResult }) {
  return (
    <li>
      <Link
        href={result.href}
        className="block rounded-lg border border-brand-100 bg-white p-4 transition-shadow hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
      >
        <p className="font-semibold text-brand-950">{result.title}</p>
        <p className="mt-1 line-clamp-2 text-sm text-brand-700">
          {result.description}
        </p>
      </Link>
    </li>
  );
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const query = (q ?? "").trim();
  const results = search(query);
  const total = countResults(results);

  return (
    <>
      <PageHero
        title="Zoeken"
        description="Doorzoek disciplines, nieuws, evenementen en verenigingen."
      />
      <div className="container-page py-12">
        <SearchBar className="max-w-xl" autoFocus initialQuery={query} />

        <div className="mt-8">
          {!query ? (
            <p className="text-brand-700">
              Typ hierboven een zoekterm om te beginnen.
            </p>
          ) : total === 0 ? (
            <p className="rounded-lg border border-brand-100 bg-brand-50 p-6 text-brand-700">
              Geen resultaten gevonden voor &ldquo;{query}&rdquo;. Probeer een
              andere zoekterm.
            </p>
          ) : (
            <>
              <p className="mb-8 text-sm text-brand-600">
                {total} {total === 1 ? "resultaat" : "resultaten"} voor &ldquo;
                {query}&rdquo;.
              </p>
              <div className="space-y-10">
                {groups.map(({ key, label, icon: Icon }) => {
                  const items = results[key];
                  if (items.length === 0) return null;
                  return (
                    <section key={key}>
                      <h2 className="mb-4 flex items-center gap-2 text-lg font-bold text-brand-950">
                        <Icon className="h-5 w-5 text-brand-500" aria-hidden="true" />
                        {label}
                        <span className="text-sm font-normal text-brand-500">
                          ({items.length})
                        </span>
                      </h2>
                      <ul className="grid gap-3 sm:grid-cols-2">
                        {items.map((r, i) => (
                          <ResultItem key={`${key}-${i}`} result={r} />
                        ))}
                      </ul>
                    </section>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
