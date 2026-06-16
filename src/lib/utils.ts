import type { Discipline } from "@/data/types";

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

// Tailwind-klassen per discipline-accentkleur.
export const disciplineBadgeClasses: Record<Discipline, string> = {
  kanopolo: "bg-polo/10 text-polo ring-1 ring-inset ring-polo/30",
  kanoslalom: "bg-slalom/10 text-slalom ring-1 ring-inset ring-slalom/30",
  kanosprint: "bg-sprint/10 text-sprint ring-1 ring-inset ring-sprint/30",
};

// Tailwind-klassen per evenementtype-badge.
export const eventTypeClasses: Record<string, string> = {
  wedstrijd: "bg-accent-100 text-accent-700 ring-1 ring-inset ring-accent-300",
  demonstratie: "bg-brand-100 text-brand-700 ring-1 ring-inset ring-brand-300",
  clinic: "bg-amber-100 text-amber-700 ring-1 ring-inset ring-amber-300",
};
