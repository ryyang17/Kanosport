// Gedeelde datamodellen voor de hele site.

export type Discipline = "kanopolo" | "kanoslalom" | "kanosprint";

export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  publishedAt: string; // ISO-datum
  imageUrl: string;
  discipline?: Discipline;
}

export interface KanoEvent {
  id: string;
  title: string;
  type: "wedstrijd" | "demonstratie" | "clinic";
  date: string; // ISO-datum (YYYY-MM-DD)
  time: string; // HH:MM
  location: string;
  description: string;
  discipline?: Discipline;
}

export interface Vereniging {
  id: string;
  name: string;
  city: string;
  email: string;
  phone: string;
  website?: string;
  disciplines: Discipline[];
}

export interface MediaItem {
  id: string;
  type: "foto" | "video";
  title: string;
  src: string; // foto: afbeeldings-URL, video: YouTube embed-URL
  thumbnail: string;
  discipline?: Discipline;
}

// Gestructureerde content voor een disciplinepagina.
export interface DisciplineSection {
  heading: string;
  paragraphs: string[];
}

export interface DisciplineContent {
  slug: Discipline;
  name: string;
  tagline: string;
  intro: string;
  heroImage: string;
  galleryImage: string;
  sections: DisciplineSection[];
}

// Hulplabels voor weergave van disciplines in de UI.
export const DISCIPLINE_LABELS: Record<Discipline, string> = {
  kanopolo: "Kanopolo",
  kanoslalom: "Kanoslalom",
  kanosprint: "Kanosprint",
};
