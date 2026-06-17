import type { MediaItem } from "./types";
import { photos } from "./photos";

// Een hulpfunctie voor echte YouTube-video's (kanopolo).
const yt = (
  id: string,
  title: string,
  credit = "kanopolo.nl"
): MediaItem => ({
  id: `yt-${id}`,
  type: "video",
  title,
  src: `https://www.youtube-nocookie.com/embed/${id}`,
  thumbnail: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
  credit,
  sourceUrl: `https://www.youtube.com/watch?v=${id}`,
});

// Echte kanopolo-foto's (Wikimedia Commons, CC) met bronvermelding.
export const photoMedia: MediaItem[] = [
  {
    id: "m1",
    type: "foto",
    title: "EK kanopolo in Poznań",
    src: photos.poloAction.src,
    thumbnail: photos.poloAction.src,
    credit: photos.poloAction.credit,
    license: photos.poloAction.license,
    sourceUrl: photos.poloAction.sourceUrl,
  },
  {
    id: "m2",
    type: "foto",
    title: "Kanopoloteam in actie",
    src: photos.poloTeam.src,
    thumbnail: photos.poloTeam.src,
    credit: photos.poloTeam.credit,
    license: photos.poloTeam.license,
    sourceUrl: photos.poloTeam.sourceUrl,
  },
];

// Echte kanopolo terugkijk-video's (gevonden via kanopolo.nl/filmpjes).
// Gebruikt voor de "Terugkijken"-sectie op de Wedstrijden-pagina.
export const watchBackVideos: MediaItem[] = [
  yt("Eo007bXT5cI", "Highlights WK 2024"),
  yt("4wvwTyJeCpE", "Aftermovie Amsterdam Open 2025"),
  yt("EU3ErTzHNIc", "Voorbeschouwing World Games 2025 — Nederlandse Dames"),
  yt("5_3e5Fx9BHE", "Sfeerimpressie NK kanopolo 2023"),
  yt("8ZtALr5ZfnE", "WK 2016 — voorbereiding in Italië"),
];

// De uitgelichte highlight-video (om bezoekers te trekken).
export const highlightVideo: MediaItem = watchBackVideos[0];

// Alle media samen (fallback / algemeen gebruik).
export const media: MediaItem[] = [...photoMedia, ...watchBackVideos];
