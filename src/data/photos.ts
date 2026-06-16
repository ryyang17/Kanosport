import type { Photo } from "./types";

// Echte, vrij gelicentieerde foto's van Wikimedia Commons.
// Alle beelden zijn Creative Commons of publiek domein; de maker en licentie
// staan vermeld zoals vereist door de licentievoorwaarden (zie credit/license).
//
// Bron: https://commons.wikimedia.org — categorieën Canoe polo / slalom / sprint.

const file = (name: string) =>
  `https://commons.wikimedia.org/wiki/File:${name}`;

export const photos = {
  // ---- Kanopolo ----
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

  // ---- Kanoslalom ----
  slalomAthlete: {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/2019_ICF_Canoe_slalom_World_Championships_017_-_Monica_Doria_Vilarrubla.jpg/960px-2019_ICF_Canoe_slalom_World_Championships_017_-_Monica_Doria_Vilarrubla.jpg",
    alt: "Slalomvaarster Mònica Dòria Vilarrubla tijdens het WK kanoslalom 2019",
    credit: "Antoine Lamielle",
    license: "CC BY-SA 4.0",
    sourceUrl: file(
      "2019 ICF Canoe slalom World Championships 017 - Monica Doria Vilarrubla.jpg"
    ),
  },
  slalomGates: {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/2019-09_canoe_slalom_gates.jpg/960px-2019-09_canoe_slalom_gates.jpg",
    alt: "Slalompoorten boven stromend wildwater",
    credit: "Antoine Lamielle",
    license: "CC BY-SA 4.0",
    sourceUrl: file("2019-09 canoe slalom gates.jpg"),
  },
  slalomRace: {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Herv%C3%A9_Delamarre_sur_les_Championnats_de_France_slalom_2010.jpg/960px-Herv%C3%A9_Delamarre_sur_les_Championnats_de_France_slalom_2010.jpg",
    alt: "Slalomvaarder door een poort tijdens de Franse kampioenschappen 2010",
    credit: "SKGV",
    license: "CC BY-SA 4.0",
    sourceUrl: file(
      "Hervé Delamarre sur les Championnats de France slalom 2010.jpg"
    ),
  },

  // ---- Kanosprint ----
  sprintK4: {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/2014_ICF_Canoe_Sprint_World_Championships_-_Race_173_-_K4_W_500_-_VC.jpg/960px-2014_ICF_Canoe_Sprint_World_Championships_-_Race_173_-_K4_W_500_-_VC.jpg",
    alt: "K4 500 meter dames tijdens het WK kanosprint 2014",
    credit: "Voltmetro",
    license: "CC BY-SA 4.0",
    sourceUrl: file(
      "2014 ICF Canoe Sprint World Championships - Race 173 - K4 W 500 - VC.jpg"
    ),
  },
  sprintRace: {
    src: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Mohammad_Abubakar_Durrani_in_Asian_Canoe_Sprint_Championship_Samarqand_2013.jpg",
    alt: "Sprintkajakker tijdens het Aziatisch kampioenschap kanosprint 2013",
    credit: "Simon KB",
    license: "CC BY-SA 3.0",
    sourceUrl: file(
      "Mohammad Abubakar Durrani in Asian Canoe Sprint Championship Samarqand 2013.jpg"
    ),
  },
  sprintPan: {
    src: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Canoeing2015pan.jpg",
    alt: "Sprintkanoërs in volle vaart over vlak water",
    credit: "Somxho",
    license: "CC BY-SA 4.0",
    sourceUrl: file("Canoeing2015pan.jpg"),
  },
  sprintOlympic: {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/RIAN_archive_492649_Olympic_champion_Sergei_Postrekhin.jpg/960px-RIAN_archive_492649_Olympic_champion_Sergei_Postrekhin.jpg",
    alt: "Olympisch kampioen kanosprint in zijn boot",
    credit: "A. Solomonov / RIA Novosti",
    license: "CC BY-SA 3.0",
    sourceUrl: file("RIAN archive 492649 Olympic champion Sergei Postrekhin.jpg"),
  },
} satisfies Record<string, Photo>;
