// Gedeelde datamodellen voor de hele site (kanopolo-only).

// ---- Nieuws ----
export type NewsCategory =
  | "wedstrijden"
  | "oranje"
  | "verenigingen"
  | "veiligheid"
  | "internationaal";

export const NEWS_CATEGORY_LABELS: Record<NewsCategory, string> = {
  wedstrijden: "Wedstrijden",
  oranje: "Oranje",
  verenigingen: "Verenigingen",
  veiligheid: "Veiligheid",
  internationaal: "Internationaal",
};

export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  publishedAt: string; // ISO-datum
  imageUrl: string;
  category: NewsCategory;
}

// ---- Blogs ----
export type BlogCategory = "materiaal" | "techniek" | "achtergrond" | "reviews";

export const BLOG_CATEGORY_LABELS: Record<BlogCategory, string> = {
  materiaal: "Materiaal",
  techniek: "Techniek",
  achtergrond: "Achtergrond",
  reviews: "Reviews",
};

// Een product in een affiliate-lijst (bv. "top 10 beste peddels" via bol.com).
export interface AffiliateProduct {
  rank: number;
  name: string;
  blurb: string;
  price?: string;
  url: string; // bol.com-partnerlink (placeholder partner-tag)
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  publishedAt: string; // ISO-datum
  imageUrl: string;
  author: string;
  category: BlogCategory;
  // Affiliate-posts tonen een productlijst met partnerlinks + disclosure.
  affiliate?: boolean;
  products?: AffiliateProduct[];
}

// ---- Wedstrijden ----
export type CompetitionLevel = "WK" | "EK" | "NK" | "toernooi";
export type CompetitionStatus = "aankomend" | "live" | "afgelopen";

export const COMPETITION_LEVEL_LABELS: Record<CompetitionLevel, string> = {
  WK: "Wereldkampioenschap",
  EK: "Europees kampioenschap",
  NK: "Nederlands kampioenschap",
  toernooi: "Toernooi",
};

export interface Competition {
  id: string;
  title: string;
  level: CompetitionLevel;
  date: string; // ISO-datum (YYYY-MM-DD)
  location: string;
  status: CompetitionStatus;
  description: string;
  infoUrl?: string; // meer informatie (bv. kanopolo.nl)
  watchBackUrl?: string; // terugkijken (YouTube), leeg = nog niet beschikbaar
}

// ---- Media (foto's + video's) ----
// Een echte, vrij gelicentieerde afbeelding met bronvermelding (bv. Wikimedia Commons).
export interface Photo {
  src: string;
  alt: string;
  credit?: string; // maker, bv. "MOs810"
  license?: string; // bv. "CC BY-SA 4.0"
  sourceUrl?: string; // link naar de bronpagina
}

export interface MediaItem {
  id: string;
  type: "foto" | "video";
  title: string;
  src: string; // foto: afbeeldings-URL, video: YouTube embed-URL
  thumbnail: string;
  // Bronvermelding (verplicht bij CC-gelicentieerde foto's, optioneel bij video's).
  credit?: string;
  license?: string;
  sourceUrl?: string;
}
