import { photos } from "./photos";

// Eén bron voor de algemene kanopolo-samenvatting (gebruikt op de homepagina).
export interface KanopoloSection {
  heading: string;
  paragraphs: string[];
}

export const kanopolo = {
  name: "Kanopolo",
  tagline: "Snelheid, balgevoel en teamspel op het water",
  intro:
    "Kanopolo is een dynamische balsport die wordt gespeeld in speciale, wendbare kano's. Twee teams van vijf spelers proberen de bal in het doel van de tegenstander te krijgen. Het is een snelle, fysieke sport waarin techniek, tactiek en samenspel samenkomen.",
  heroImage: photos.poloAction,
  galleryImage: photos.poloTeam,
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
        "In Nederland wordt een nationale competitie gespeeld met meerdere speelrondes door het seizoen heen. Daarnaast zijn er regionale toernooien en internationale kampioenschappen (EK en WK).",
        "Kanopolo kent een sterke clubcultuur waarin recreatieve en competitieve teams naast elkaar trainen. Beginners zijn vrijwel altijd welkom om mee te doen aan introductietrainingen.",
      ],
    },
  ] satisfies KanopoloSection[],
};
