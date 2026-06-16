// Kleine helpers voor het verwerken van RSS/Atom-feeds (zonder externe libs).

import type { Discipline } from "@/data/types";

// Decodeer veelvoorkomende HTML-entiteiten naar leesbare tekst.
export function decodeEntities(input: string): string {
  return input
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;/g, "'")
    .replace(/&#x27;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&");
}

// Verwijder HTML-tags en normaliseer witruimte → platte tekst.
export function stripHtml(input: string): string {
  return decodeEntities(input.replace(/<[^>]*>/g, " "))
    .replace(/\s+/g, " ")
    .trim();
}

// Pak de inhoud van het eerste voorkomen van een tag uit een XML-blok.
export function tag(block: string, name: string): string | undefined {
  // Ondersteunt zowel <name>..</name> als CDATA.
  const re = new RegExp(`<${name}[^>]*>([\\s\\S]*?)<\\/${name}>`, "i");
  const m = block.match(re);
  if (!m) return undefined;
  return m[1].replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1").trim();
}

// Herken de discipline op basis van trefwoorden in een titel/tekst.
export function detectDiscipline(text: string): Discipline | undefined {
  const t = text.toLowerCase();
  if (t.includes("polo")) return "kanopolo";
  if (t.includes("slalom") || t.includes("wildwater") || t.includes("wild water"))
    return "kanoslalom";
  if (t.includes("sprint") || t.includes("marathon")) return "kanosprint";
  return undefined;
}

// Maak een korte samenvatting van een (mogelijk lange) tekst.
export function excerpt(text: string, max = 180): string {
  const clean = stripHtml(text);
  if (clean.length <= max) return clean;
  return clean.slice(0, max).replace(/\s+\S*$/, "") + "…";
}
