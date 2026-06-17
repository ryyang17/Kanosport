import type {
  BlogCategory,
  CompetitionLevel,
  NewsCategory,
} from "@/data/types";

// Datum (ISO) naar leesbaar Nederlands formaat.
export function formatDate(iso: string): string {
  const date = new Date(iso);
  return date.toLocaleDateString("nl-NL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

// Korte datum, bv. voor compacte kaarten.
export function formatDateShort(iso: string): string {
  const date = new Date(iso);
  return date.toLocaleDateString("nl-NL", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

// Sorteer nieuwsachtige items op publishedAt, nieuwste eerst.
export function byNewest<T extends { publishedAt: string }>(items: T[]): T[] {
  return [...items].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

// Sorteer evenement-achtige items op datum, chronologisch (vroegste eerst).
export function byDateAsc<T extends { date: string; time?: string }>(
  items: T[]
): T[] {
  return [...items].sort((a, b) => {
    const da = new Date(`${a.date}T${a.time ?? "00:00"}`).getTime();
    const db = new Date(`${b.date}T${b.time ?? "00:00"}`).getTime();
    return da - db;
  });
}

// Tailwind-klassen per nieuwscategorie-badge.
export const newsCategoryClasses: Record<NewsCategory, string> = {
  wedstrijden: "bg-accent-100 text-accent-700 ring-1 ring-inset ring-accent-300",
  oranje: "bg-amber-100 text-amber-700 ring-1 ring-inset ring-amber-300",
  verenigingen: "bg-brand-100 text-brand-700 ring-1 ring-inset ring-brand-300",
  veiligheid: "bg-rose-100 text-rose-700 ring-1 ring-inset ring-rose-300",
  internationaal: "bg-sky-100 text-sky-700 ring-1 ring-inset ring-sky-300",
};

// Tailwind-klassen per blogcategorie-badge.
export const blogCategoryClasses: Record<BlogCategory, string> = {
  materiaal: "bg-brand-100 text-brand-700 ring-1 ring-inset ring-brand-300",
  techniek: "bg-emerald-100 text-emerald-700 ring-1 ring-inset ring-emerald-300",
  achtergrond: "bg-violet-100 text-violet-700 ring-1 ring-inset ring-violet-300",
  reviews: "bg-accent-100 text-accent-700 ring-1 ring-inset ring-accent-300",
};

// Tailwind-klassen per wedstrijdniveau. WK/EK krijgen een opvallende stijl.
export const competitionLevelClasses: Record<CompetitionLevel, string> = {
  WK: "bg-accent-500 text-white",
  EK: "bg-brand-600 text-white",
  NK: "bg-brand-100 text-brand-700 ring-1 ring-inset ring-brand-300",
  toernooi: "bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-200",
};
