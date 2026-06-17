import type { MediaItem } from "@/data/types";
import { decodeEntities, tag } from "./feed-utils";

// Officieel YouTube-kanaal van de International Canoe Federation (ICF): "Planet Canoe".
// We gebruiken de publieke RSS-feed van het kanaal — dat vereist géén API-key.
export const ICF_CHANNEL_ID = "UCVagCjubko2x50KpYhnLsCQ";
export const ICF_CHANNEL_URL = "https://www.youtube.com/@planetcanoe";

const FEED_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${ICF_CHANNEL_ID}`;

/**
 * Haalt de nieuwste video's van het officiële ICF-kanaal op en zet ze om naar
 * MediaItem's. Server-side aangeroepen met ISR-caching (revalidate).
 * Gooit bij fouten — de aanroeper vangt dit op en valt terug op mock-data.
 */
export async function fetchYouTubeVideos(limit = 8): Promise<MediaItem[]> {
  const res = await fetch(FEED_URL, {
    // Eén uur cachen; daarna op de achtergrond verversen.
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    throw new Error(`YouTube-feed gaf status ${res.status}`);
  }
  const xml = await res.text();

  const entries = [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)];
  const videos: MediaItem[] = [];

  for (const match of entries) {
    const block = match[1];
    const videoId = tag(block, "yt:videoId");
    const rawTitle = tag(block, "title");
    if (!videoId || !rawTitle) continue;

    const title = decodeEntities(rawTitle);
    videos.push({
      id: `yt-${videoId}`,
      type: "video",
      title,
      src: `https://www.youtube-nocookie.com/embed/${videoId}`,
      thumbnail: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
      credit: "Planet Canoe (ICF)",
      sourceUrl: `https://www.youtube.com/watch?v=${videoId}`,
    });

    if (videos.length >= limit) break;
  }

  if (videos.length === 0) {
    throw new Error("Geen video's gevonden in de YouTube-feed");
  }
  return videos;
}
