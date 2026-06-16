import type { Vereniging } from "./types";

// Mock-verenigingen.
export const clubs: Vereniging[] = [
  {
    id: "c1",
    name: "Kano- en Kajakvereniging De Amstelpeddel",
    city: "Amsterdam",
    email: "info@amstelpeddel.nl",
    phone: "020-1234567",
    website: "https://www.amstelpeddel.nl",
    disciplines: ["kanopolo", "kanosprint"],
  },
  {
    id: "c2",
    name: "Wildwater Watersport Zoetermeer",
    city: "Zoetermeer",
    email: "contact@wwzoetermeer.nl",
    phone: "079-7654321",
    website: "https://www.wwzoetermeer.nl",
    disciplines: ["kanoslalom"],
  },
  {
    id: "c3",
    name: "Kanovereniging De Sprinters Utrecht",
    city: "Utrecht",
    email: "bestuur@sprintersutrecht.nl",
    phone: "030-2345678",
    website: "https://www.sprintersutrecht.nl",
    disciplines: ["kanosprint", "kanopolo"],
  },
  {
    id: "c4",
    name: "Watersportvereniging Het Roer Rotterdam",
    city: "Rotterdam",
    email: "info@hetroer.nl",
    phone: "010-3456789",
    disciplines: ["kanopolo", "kanoslalom", "kanosprint"],
  },
  {
    id: "c5",
    name: "Kanoclub De Vechtstroom",
    city: "Maarssen",
    email: "secretariaat@vechtstroom.nl",
    phone: "0346-456789",
    website: "https://www.vechtstroom.nl",
    disciplines: ["kanoslalom", "kanosprint"],
  },
  {
    id: "c6",
    name: "Peddelsport Vereniging Het Friese Meer",
    city: "Leeuwarden",
    email: "info@frieschemeer-kano.nl",
    phone: "058-5678901",
    disciplines: ["kanopolo"],
  },
];
