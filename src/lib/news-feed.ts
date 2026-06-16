import type { Discipline } from "@/data/types";
import { detectDiscipline, excerpt, tag } from "./feed-utils";

// Officiële nieuws-RSS van de International Canoe Federation (ICF).
const ICF_NEWS_FEED = "https://www.canoeicf.com/rss.xml";

export interface ExternalNews {
  id: string;
  title: string;
  excerpt: string;
  url: string; // externe bronlink (we tonen kop + samenvatting, geen volledige tekst)
  publishedAt: string; // ISO-datum
  discipline?: Discipline;
  source: string;
}

/**
 * Haalt actueel internationaal kanonieuws op (ICF). Volgens auteursrecht tonen
 * we alleen de kop + een korte samenvatting en linken we door naar de bron.
 * Server-side met ISR-caching; gooit bij fouten zodat de aanroeper kan
 * terugvallen op de eigen (voorbeeld)artikelen.
 */
export async function fetchCanoeNews(limit = 6): Promise<ExternalNews[]> {
  const res = await fetch(ICF_NEWS_FEED, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    throw new Error(`Nieuws-feed gaf status ${res.status}`);
  }
  const xml = await res.text();

  const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)];
  const articles: ExternalNews[] = [];

  for (const match of items) {
    const block = match[1];
    const title = tag(block, "title");
    const link = tag(block, "link");
    if (!title || !link) continue;

    const description = tag(block, "description") ?? "";
    const pubDate = tag(block, "pubDate");
    const iso = pubDate ? new Date(pubDate).toISOString() : new Date().toISOString();

    articles.push({
      id: `icf-${articles.length}-${iso.slice(0, 10)}`,
      title: title.replace(/<!\[CDATA\[|\]\]>/g, "").trim(),
      excerpt: excerpt(description, 200),
      url: link,
      publishedAt: iso,
      discipline: detectDiscipline(title),
      source: "International Canoe Federation",
    });

    if (articles.length >= limit) break;
  }

  if (articles.length === 0) {
    throw new Error("Geen artikelen gevonden in de nieuws-feed");
  }
  return articles;
}
