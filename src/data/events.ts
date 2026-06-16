import type { KanoEvent } from "./types";

// Mock-evenementen. Chronologisch sorteren gebeurt in de UI/lib.
export const events: KanoEvent[] = [
  {
    id: "e1",
    title: "Nationale Kanopolo Competitie – Speelronde 3",
    type: "wedstrijd",
    date: "2026-06-27",
    time: "10:00",
    location: "Sportpark De Waterkant, Amsterdam",
    description:
      "De derde speelronde van de nationale kanopolocompetitie. Acht teams strijden om kostbare punten in de race naar de play-offs. Toegang gratis.",
    discipline: "kanopolo",
  },
  {
    id: "e2",
    title: "Slalom Clinic voor Beginners",
    type: "clinic",
    date: "2026-07-05",
    time: "13:30",
    location: "Wildwaterbaan Zoetermeer",
    description:
      "Maak onder begeleiding van ervaren instructeurs kennis met kanoslalom. Materiaal en zwemvest worden verzorgd. Geschikt vanaf 12 jaar.",
    discipline: "kanoslalom",
  },
  {
    id: "e3",
    title: "Open Nederlandse Kampioenschappen Kanosprint",
    type: "wedstrijd",
    date: "2026-07-18",
    time: "09:00",
    location: "Bosbaan, Amstelveen",
    description:
      "Het hoogtepunt van het sprintseizoen. Wedstrijden op de 200, 500 en 1000 meter in diverse boottypes en leeftijdscategorieën.",
    discipline: "kanosprint",
  },
  {
    id: "e4",
    title: "Demonstratie Kanopolo op het Stadsfestival",
    type: "demonstratie",
    date: "2026-08-02",
    time: "14:00",
    location: "Stadsgracht, Utrecht",
    description:
      "Topspelers laten midden in de stad zien hoe spectaculair kanopolo is. Een aanrader voor iedereen die de sport van dichtbij wil ervaren.",
    discipline: "kanopolo",
  },
  {
    id: "e5",
    title: "Zomerclinic Kanosprint – Techniek & Conditie",
    type: "clinic",
    date: "2026-08-15",
    time: "10:30",
    location: "Sloterplas, Amsterdam",
    description:
      "Een intensieve dagclinic gericht op peddeltechniek, startversnelling en uithoudingsvermogen. Voor sporters met enige ervaring.",
    discipline: "kanosprint",
  },
  {
    id: "e6",
    title: "Najaars-demonstratie Wildwaterslalom",
    type: "demonstratie",
    date: "2026-09-06",
    time: "11:00",
    location: "Wildwaterbaan Zoetermeer",
    description:
      "Nationale selectieleden demonstreren de finesses van het slalomvaren door de poorten. Met uitleg voor publiek en gelegenheid tot vragen stellen.",
    discipline: "kanoslalom",
  },
];
