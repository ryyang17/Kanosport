import type { Competition } from "./types";

// Kanopolo-wedstrijden en -kampioenschappen. Structuur en namen volgen kanopolo.nl
// (NK, toernooien, Oranje/EK/WK). Sorteren gebeurt in de UI/lib.
//
// `watchBackUrl` verwijst naar een echte terugkijk-video op YouTube waar die
// beschikbaar is; bij aankomende wedstrijden blijft die bewust leeg.
export const competitions: Competition[] = [
  {
    id: "comp-amsterdam-open-2026",
    title: "Amsterdam Open 2026",
    level: "toernooi",
    date: "2026-06-27",
    location: "Sloterplas, Amsterdam",
    status: "aankomend",
    description:
      "Internationaal kanopolotoernooi met sterke clubteams uit binnen- en buitenland. Vrij toegankelijk voor publiek langs het water.",
    infoUrl: "https://www.kanopolo.nl/breedtesport/toernooien/",
  },
  {
    id: "comp-nk-2026",
    title: "Nederlands Kampioenschap Kanopolo 2026",
    level: "NK",
    date: "2026-07-04",
    location: "Nederland",
    status: "aankomend",
    description:
      "Het hoogtepunt van het Nederlandse kanopoloseizoen: de finalerondes van de nationale competitie strijden om de titel in heren, dames en jeugd.",
    infoUrl: "https://www.kanopolo.nl/nk/",
  },
  {
    id: "comp-ek-2026",
    title: "EK Kanopolo 2026 — Frankrijk",
    level: "EK",
    date: "2026-08-20",
    location: "Frankrijk",
    status: "aankomend",
    description:
      "Europees kampioenschap waar Oranje uitkomt in vier klassen: heren, dames, heren U21 en dames U21. Volg de uitslagen en de livestream via de organisatie en de ICF.",
    infoUrl: "https://www.kanopolo.nl/oranje/",
  },
  {
    id: "comp-deutschland-cup-2026",
    title: "Deutschland Cup 2026",
    level: "toernooi",
    date: "2026-09-12",
    location: "Essen, Duitsland",
    status: "aankomend",
    description:
      "Traditierijk internationaal toernooi waar topteams zich meten als voorbereiding op de kampioenschappen.",
    infoUrl: "https://www.kanopolo.nl/breedtesport/toernooien/",
  },
  {
    id: "comp-world-games-2025",
    title: "World Games 2025",
    level: "toernooi",
    date: "2025-08-10",
    location: "Chengdu, China",
    status: "afgelopen",
    description:
      "Kanopolo op de mondiale multisportgames. Bekijk de voorbeschouwing van de Nederlandse dames terug.",
    infoUrl: "https://www.kanopolo.nl/oranje/",
    watchBackUrl: "https://www.youtube.com/watch?v=EU3ErTzHNIc",
  },
  {
    id: "comp-amsterdam-open-2025",
    title: "Amsterdam Open 2025",
    level: "toernooi",
    date: "2025-06-21",
    location: "Sloterplas, Amsterdam",
    status: "afgelopen",
    description:
      "Een geslaagde editie van het Amsterdam Open. Herbeleef de sfeer in de officiële aftermovie.",
    infoUrl: "https://www.kanopolo.nl/breedtesport/toernooien/",
    watchBackUrl: "https://www.youtube.com/watch?v=4wvwTyJeCpE",
  },
  {
    id: "comp-wk-2024",
    title: "WK Kanopolo 2024 — China",
    level: "WK",
    date: "2024-09-22",
    location: "China",
    status: "afgelopen",
    description:
      "Wereldkampioenschap kanopolo. Bekijk de highlights van het toernooi terug.",
    infoUrl: "https://www.kanopolo.nl/oranje/",
    watchBackUrl: "https://www.youtube.com/watch?v=Eo007bXT5cI",
  },
  {
    id: "comp-nk-2023",
    title: "Nederlands Kampioenschap Kanopolo 2023",
    level: "NK",
    date: "2023-09-16",
    location: "Nederland",
    status: "afgelopen",
    description:
      "Een sfeervol NK met spannende finales. Herbeleef het in de sfeerimpressie.",
    infoUrl: "https://www.kanopolo.nl/nk/",
    watchBackUrl: "https://www.youtube.com/watch?v=5_3e5Fx9BHE",
  },
];
