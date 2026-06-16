import type { MediaItem } from "./types";

// Mock-galerij: foto's (picsum placeholders) en video's (YouTube embed-placeholders).
export const media: MediaItem[] = [
  {
    id: "m1",
    type: "foto",
    title: "Aanval tijdens een kanopolowedstrijd",
    src: "https://picsum.photos/seed/gallery-polo-1/1200/800",
    thumbnail: "https://picsum.photos/seed/gallery-polo-1/600/400",
    discipline: "kanopolo",
  },
  {
    id: "m2",
    type: "foto",
    title: "Slalomvaarder door de poorten",
    src: "https://picsum.photos/seed/gallery-slalom-1/1200/800",
    thumbnail: "https://picsum.photos/seed/gallery-slalom-1/600/400",
    discipline: "kanoslalom",
  },
  {
    id: "m3",
    type: "foto",
    title: "Start van een sprintrace op de Bosbaan",
    src: "https://picsum.photos/seed/gallery-sprint-1/1200/800",
    thumbnail: "https://picsum.photos/seed/gallery-sprint-1/600/400",
    discipline: "kanosprint",
  },
  {
    id: "m4",
    type: "video",
    title: "Sfeerimpressie kanopolocompetitie",
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://picsum.photos/seed/gallery-polo-video/600/400",
    discipline: "kanopolo",
  },
  {
    id: "m5",
    type: "foto",
    title: "Wildwater spat op tijdens de afdaling",
    src: "https://picsum.photos/seed/gallery-slalom-2/1200/800",
    thumbnail: "https://picsum.photos/seed/gallery-slalom-2/600/400",
    discipline: "kanoslalom",
  },
  {
    id: "m6",
    type: "foto",
    title: "K2-duo in volle vaart",
    src: "https://picsum.photos/seed/gallery-sprint-2/1200/800",
    thumbnail: "https://picsum.photos/seed/gallery-sprint-2/600/400",
    discipline: "kanosprint",
  },
  {
    id: "m7",
    type: "video",
    title: "Techniekanalyse kanoslalom",
    src: "https://www.youtube.com/embed/aqz-KE-bpKQ",
    thumbnail: "https://picsum.photos/seed/gallery-slalom-video/600/400",
    discipline: "kanoslalom",
  },
  {
    id: "m8",
    type: "foto",
    title: "Jeugdteam poseert na de training",
    src: "https://picsum.photos/seed/gallery-jeugd/1200/800",
    thumbnail: "https://picsum.photos/seed/gallery-jeugd/600/400",
  },
];
