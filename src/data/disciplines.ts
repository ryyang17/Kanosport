import type { Discipline, DisciplineContent } from "./types";

// Gestructureerde content per discipline. Eén bron voor de drie disciplinepagina's.
export const disciplines: Record<Discipline, DisciplineContent> = {
  kanopolo: {
    slug: "kanopolo",
    name: "Kanopolo",
    tagline: "Snelheid, balgevoel en teamspel op het water",
    intro:
      "Kanopolo is een dynamische balsport die wordt gespeeld in speciale, wendbare kano's. Twee teams van vijf spelers proberen de bal in het doel van de tegenstander te krijgen. Het is een snelle, fysieke sport waarin techniek, tactiek en samenspel samenkomen.",
    heroImage: "https://picsum.photos/seed/discipline-kanopolo-hero/1600/900",
    galleryImage: "https://picsum.photos/seed/discipline-kanopolo-gallery/1200/800",
    sections: [
      {
        heading: "Wat is kanopolo?",
        paragraphs: [
          "Kanopolo combineert elementen van waterpolo, basketbal en kanovaren. Het wordt gespeeld op een afgebakend speelveld in zwembaden of op open water, met doelen die boven het water hangen.",
          "Elk team bestaat uit vijf spelers die met hun peddel zowel varen als de bal verplaatsen. Door de combinatie van bootbeheersing en balcontrole is het een veelzijdige en toegankelijke teamsport.",
        ],
      },
      {
        heading: "Regels",
        paragraphs: [
          "Een wedstrijd bestaat uit twee helften van doorgaans tien minuten. Doel is om met de bal in het doel van de tegenstander te scoren, dat zich ongeveer twee meter boven het wateroppervlak bevindt.",
          "Spelers mogen de bal gooien, dribbelen over het water en passen. Lichamelijk contact is beperkt toegestaan, maar gevaarlijk spel wordt bestraft. Scheidsrechters letten streng op de veiligheid.",
        ],
      },
      {
        heading: "Materiaal",
        paragraphs: [
          "Er wordt gevaren in korte, wendbare polokano's met afgeronde uiteinden om botsingen veilig te houden. Spelers dragen een helm met gezichtsbescherming en een zwemvest.",
          "De dubbelbladige peddel wordt gebruikt om te varen én om de bal te onderscheppen. De bal lijkt op een waterpolobal en is goed met één hand te hanteren.",
        ],
      },
      {
        heading: "Wedstrijden",
        paragraphs: [
          "In Nederland wordt een nationale competitie gespeeld met meerdere speelrondes door het seizoen heen. Daarnaast zijn er regionale toernooien en internationale kampioenschappen.",
          "Kanopolo kent een sterke clubcultuur waarin recreatieve en competitieve teams naast elkaar trainen. Beginners zijn vrijwel altijd welkom om mee te doen aan introductietrainingen.",
        ],
      },
    ],
  },
  kanoslalom: {
    slug: "kanoslalom",
    name: "Kanoslalom",
    tagline: "Precisie en lef door wild stromend water",
    intro:
      "Kanoslalom is een technische wildwatersport waarbij peddelaars zo snel mogelijk een parcours van hangende poorten afleggen. Het draait om precisie, lichaamsbeheersing en het lezen van het water.",
    heroImage: "https://picsum.photos/seed/discipline-kanoslalom-hero/1600/900",
    galleryImage: "https://picsum.photos/seed/discipline-kanoslalom-gallery/1200/800",
    sections: [
      {
        heading: "Wat is kanoslalom?",
        paragraphs: [
          "Bij kanoslalom navigeert de sporter een kano of kajak door een reeks poorten die boven stromend water hangen. Sommige poorten moeten stroomafwaarts, andere stroomopwaarts worden genomen.",
          "De winnaar is degene met de snelste tijd, vermeerderd met eventuele strafseconden voor het raken of missen van poorten. Elke fout telt, waardoor zowel snelheid als nauwkeurigheid bepalend zijn.",
        ],
      },
      {
        heading: "Parcours",
        paragraphs: [
          "Een slalomparcours telt doorgaans 18 tot 25 poorten, waarvan een aantal tegen de stroom in genomen moet worden. Groene poorten worden stroomafwaarts gevaren, rode stroomopwaarts.",
          "Het parcours wordt uitgezet over een wildwatergedeelte met stroomversnellingen, golven en kolken. Het lezen van de waterstroming is een essentiële vaardigheid.",
        ],
      },
      {
        heading: "Technieken",
        paragraphs: [
          "Belangrijke technieken zijn de boogslag voor het sturen, de steunslag voor balans en de draaitechniek om snel van richting te wisselen rond een poort.",
          "Topvaarders gebruiken de kracht van het water in hun voordeel door slim gebruik te maken van tegenstroom en draaikolken. Veel training is gericht op het soepel verbinden van bewegingen.",
        ],
      },
      {
        heading: "Veiligheid",
        paragraphs: [
          "Veiligheid staat voorop in het wildwater. Een goed passende helm en een zwemvest zijn verplicht, en er wordt nooit alleen gevaren.",
          "Beginners leren eerst de zelfredding en eskimoteren in rustig water voordat ze het wildwater opgaan. Langs het parcours staan altijd veiligheidsmedewerkers paraat.",
        ],
      },
    ],
  },
  kanosprint: {
    slug: "kanosprint",
    name: "Kanosprint",
    tagline: "Pure explosiviteit over vlak water",
    intro:
      "Kanosprint is de olympische snelheidsdiscipline waarin peddelaars over een recht, vlak parcours zo snel mogelijk de finish proberen te bereiken. Kracht, techniek en ritme bepalen het verschil.",
    heroImage: "https://picsum.photos/seed/discipline-kanosprint-hero/1600/900",
    galleryImage: "https://picsum.photos/seed/discipline-kanosprint-gallery/1200/800",
    sections: [
      {
        heading: "Wat is kanosprint?",
        paragraphs: [
          "Kanosprint wordt gevaren op vlak, stilstaand water in rechte banen. Sporters racen individueel (K1/C1) of in teams (K2, K4) over een vaste afstand richting de finish.",
          "De sport is olympisch en kent een lange traditie. Het draait om een explosieve start, een efficiënt slagritme en het zo lang mogelijk vasthouden van topsnelheid.",
        ],
      },
      {
        heading: "Wedstrijdafstanden",
        paragraphs: [
          "De klassieke wedstrijdafstanden zijn 200, 500 en 1000 meter. De 200 meter is een pure explosietest, terwijl de 1000 meter veel meer uithoudingsvermogen vraagt.",
          "Daarnaast worden er langere marathonafstanden gevaren. Per afstand en boottype gelden aparte klassementen en kampioenschappen.",
        ],
      },
      {
        heading: "Materiaal",
        paragraphs: [
          "Sprintboten zijn lang, smal en extreem lichtgewicht, gemaakt van carbon. Ze zijn gebouwd op snelheid en vragen veel balans van de vaarder.",
          "Kajakkers gebruiken een dubbelbladige peddel, terwijl canadese kanoërs (C-boot) knielen en met een enkelbladige peddel varen. Het materiaal wordt nauwkeurig afgesteld op de sporter.",
        ],
      },
      {
        heading: "Training",
        paragraphs: [
          "Training combineert kracht, techniek en conditie. Op het water wordt gewerkt aan startversnellingen, slagfrequentie en het constant houden van een efficiënte techniek.",
          "Naast het varen besteden sprinters veel aandacht aan krachttraining en core-stabiliteit. Een goede techniek voorkomt blessures en zorgt voor een soepele krachtoverbrenging.",
        ],
      },
    ],
  },
};

export const disciplineList: DisciplineContent[] = [
  disciplines.kanopolo,
  disciplines.kanoslalom,
  disciplines.kanosprint,
];
