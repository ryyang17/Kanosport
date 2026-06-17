import type { AffiliateProduct, BlogPost } from "./types";

// PLACEHOLDER: vervang dit door je eigen bol.com Partnerprogramma-ID.
// Alle affiliate-links hieronder hangen deze tag eraan, zodat aankopen via de
// site een (kleine) vergoeding opleveren waarmee de kanosport gesteund wordt.
export const BOL_PARTNER_TAG = "JOUW-BOL-PARTNER-ID";

// Bouwt een bol.com-zoeklink met de partner-tag (placeholder t/m echte
// product-URL's bekend zijn).
function bol(searchText: string): string {
  const q = encodeURIComponent(searchText);
  return `https://www.bol.com/nl/nl/s/?searchtext=${q}&partner=${BOL_PARTNER_TAG}`;
}

// Top 10 kanopeddels — affiliate-lijst voor de blogpost hieronder.
const beste_peddels: AffiliateProduct[] = [
  { rank: 1, name: "Aquabound Stingray Hybrid", blurb: "Lichtgewicht allrounder met glasvezel steel — ideaal voor beginners.", price: "€ 139,-", url: bol("Aquabound Stingray kajakpeddel") },
  { rank: 2, name: "Werner Camano Premium", blurb: "Comfortabele toerpeddel met warme, soepele slag.", price: "€ 329,-", url: bol("Werner Camano peddel") },
  { rank: 3, name: "Galasport Polo Carbon", blurb: "Stugge carbonpeddel speciaal voor kanopolo en korte explosieve slagen.", price: "€ 279,-", url: bol("Galasport kanopolo peddel carbon") },
  { rank: 4, name: "Robson Roll Glass", blurb: "Betaalbare en duurzame peddel voor de fanatieke clubspeler.", price: "€ 99,-", url: bol("Robson kajakpeddel glasvezel") },
  { rank: 5, name: "Prijon Sport Vario", blurb: "Verstelbare steel — handig als meerdere spelers dezelfde peddel delen.", price: "€ 119,-", url: bol("Prijon kajakpeddel verstelbaar") },
  { rank: 6, name: "Lettmann Mystic", blurb: "Premium carbon met uitstekende grip en weinig flutter.", price: "€ 359,-", url: bol("Lettmann kajakpeddel carbon") },
  { rank: 7, name: "Select Kayak Polo", blurb: "Compact blad, ontworpen voor snelle richtingveranderingen.", price: "€ 189,-", url: bol("Select kanopolo peddel") },
  { rank: 8, name: "TNP Voyager", blurb: "Robuuste instappeddel die tegen een stootje kan in de wedstrijd.", price: "€ 79,-", url: bol("TNP kajakpeddel") },
  { rank: 9, name: "Carlisle Magic Plus", blurb: "Lichte aluminium/nylon-peddel, prima voor de jeugd.", price: "€ 69,-", url: bol("Carlisle kajakpeddel") },
  { rank: 10, name: "Gara Marathon Wing", blurb: "Voor wie ook op snelheid traint: efficiënte wing-blade.", price: "€ 249,-", url: bol("Gara wing peddel") },
];

export const blogs: BlogPost[] = [
  {
    id: "b1",
    slug: "top-10-beste-kanopeddels",
    title: "Top 10 beste kanopeddels (2026)",
    excerpt:
      "Op zoek naar een nieuwe peddel voor kanopolo? Dit zijn onze tien favorieten voor elk budget — met directe links.",
    body: "Een goede peddel is in kanopolo het verschil tussen net wél of net níét bij die bal. We hebben tien populaire peddels op een rij gezet, van betaalbare instapmodellen tot stijve carbonpeddels voor de wedstrijdspeler.\n\nLet bij je keuze vooral op gewicht, bladvorm en de stijfheid van de steel: een stuggere peddel geeft meer directe kracht, terwijl een soepelere steel je polsen ontlast tijdens lange trainingen. Twijfel je tussen maten? Kies in kanopolo liever iets korter — dat geeft meer wendbaarheid in het spel.\n\nHieronder vind je onze top 10. De links gaan via ons bol.com-partnerprogramma; koop je via zo'n link, dan steun je dit platform zonder dat je meer betaalt.",
    publishedAt: "2026-06-12",
    imageUrl: "https://picsum.photos/seed/kanopeddels/1200/675",
    author: "Redactie Kanopolo Community",
    category: "reviews",
    affiliate: true,
    products: beste_peddels,
  },
  {
    id: "b2",
    slug: "kanopolo-helm-kopen-waar-let-je-op",
    title: "Een kanopolohelm kopen: waar let je op?",
    excerpt:
      "De helm met gezichtsbescherming is verplicht in kanopolo. We leggen uit waar je op moet letten bij de aanschaf.",
    body: "In kanopolo is een helm met gezichtsbescherming verplicht — en niet voor niets. Ballen en peddels komen razendsnel jouw kant op. Een goede helm moet stevig vastzitten, niet kantelen en een traliewerk hebben dat het gezicht beschermt zonder het zicht te beperken.\n\nLet op de pasvorm: de helm mag niet schuiven als je je hoofd schudt. Veel modellen hebben verstelbare kussentjes. Kies daarnaast voor een snel afwaterend ontwerp, zodat je na een duik in het water meteen weer scherp ziet.\n\nVeel verenigingen hebben leenmateriaal voor beginners. Wil je een eigen helm, vraag dan ervaren clubgenoten om advies — zij weten welke merken in de praktijk fijn zitten.",
    publishedAt: "2026-05-22",
    imageUrl: "https://picsum.photos/seed/kanopolo-helm/1200/675",
    author: "Tom Verhoeven",
    category: "materiaal",
  },
  {
    id: "b3",
    slug: "balcontrole-de-basis-van-kanopolo",
    title: "Balcontrole: de basis van goed kanopolo",
    excerpt:
      "Zonder goede balcontrole geen spel. Vijf oefeningen waarmee je je techniek snel verbetert.",
    body: "Balcontrole is in kanopolo misschien wel de belangrijkste vaardigheid. Wie de bal soepel kan oppakken, vasthouden en passen, houdt het spel in handen. Gelukkig kun je het goed trainen — ook in je eentje.\n\nBegin met het oppakken van de bal vanaf het water, eerst stilliggend en daarna varend. Oefen vervolgens het gooien met één hand naar een vast punt, en bouw afstand op naarmate het beter gaat. Combineer dit met korte sprintjes zodat je leert passen terwijl je in beweging bent.\n\nDoe deze oefeningen elke training een paar minuten en je zult merken dat de bal als vanzelf 'aan je hand blijft plakken'. Vraag je trainer om feedback op je houding: kracht komt uit je romp, niet alleen uit je arm.",
    publishedAt: "2026-04-28",
    imageUrl: "https://picsum.photos/seed/balcontrole/1200/675",
    author: "Marlies de Vries",
    category: "techniek",
  },
  {
    id: "b4",
    slug: "crowdfunding-nieuwe-boten-vereniging",
    title: "Hoe onze vereniging via crowdfunding nieuwe boten kocht",
    excerpt:
      "Een lege clubkas en versleten boten? Met een slimme crowdfundingactie kreeg onze club een nieuwe vloot.",
    body: "Veel verenigingen worstelen met verouderd materiaal en een krappe begroting. Onze club ook — tot we het over een andere boeg gooiden en een crowdfundingcampagne opzetten.\n\nWe maakten een korte video met de jeugd, stelden een helder doelbedrag en concrete tegenprestaties op (van een bedankje op de site tot een logo op de boot) en deelden de actie volop op social media. Binnen zes weken haalden we genoeg op voor vijf nieuwe polokano's.\n\nDe belangrijkste les: maak het persoonlijk en laat zien wat het oplevert. Mensen geven niet aan 'een vereniging', maar aan een verhaal en aan kinderen die kunnen blijven sporten. Wil je ons steunen of zelf adverteren? Kijk op de sponsorpagina.",
    publishedAt: "2026-04-05",
    imageUrl: "https://picsum.photos/seed/crowdfunding-boten/1200/675",
    author: "Bestuur KV De Waterkant",
    category: "achtergrond",
  },
];
