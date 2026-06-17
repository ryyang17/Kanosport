import type { Photo } from "./types";

// Echte, vrij gelicentieerde foto's van Wikimedia Commons (categorie Canoe polo).
// Alle beelden zijn Creative Commons; de maker en licentie staan vermeld zoals
// vereist door de licentievoorwaarden (zie credit/license).
//
// Bron: https://commons.wikimedia.org

const file = (name: string) =>
  `https://commons.wikimedia.org/wiki/File:${name}`;

export const photos = {
  poloAction: {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/European_Canoe_Polo_Championship_2013%2C_Poznan_%287%29.JPG/960px-European_Canoe_Polo_Championship_2013%2C_Poznan_%287%29.JPG",
    alt: "Wedstrijd tijdens het Europees Kampioenschap kanopolo 2013 in Poznań",
    credit: "MOs810",
    license: "CC BY-SA 3.0",
    sourceUrl: file("European Canoe Polo Championship 2013, Poznan (7).JPG"),
  },
  poloTeam: {
    src: "https://upload.wikimedia.org/wikipedia/commons/9/97/Seleccion_Argentina_de_Kayak_Polo%2C_MerLe_fotograf%C3%ADa.jpg",
    alt: "Spelers van een kanopoloteam in actie op het water",
    credit: "MerLe fotografía",
    license: "CC BY-SA 4.0",
    sourceUrl: file("Seleccion Argentina de Kayak Polo, MerLe fotografía.jpg"),
  },
} satisfies Record<string, Photo>;
