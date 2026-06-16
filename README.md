# Watersport Community

Een **werkend prototype** van een publieke informatiewebsite over drie kanodisciplines: **Kanopolo**, **Kanoslalom** en **Kanosprint**.

De site is volledig statisch / mock-gedreven: er zijn geen accounts, geen login, geen echte backend en geen database. Alle dynamische content komt uit getypeerde mock-data in `src/data/`, zodat het prototype direct draait en demonstreerbaar is.

## Tech stack

- **Next.js (App Router)** met **TypeScript**
- **Tailwind CSS** voor styling
- **lucide-react** voor iconen
- Mock-data als getypeerde TypeScript-bestanden in `src/data/`
- Client-side zoekfunctie (geen server nodig)
- Contactformulier met client-side validatie + nep-submit (console-log, geen echte e-mail)
- Klaar om te deployen op **Vercel**

## Installatie & starten

Vereist: Node.js 18+ (getest met Node 22).

```bash
npm install
npm run dev
```

De site draait daarna op [http://localhost:3000](http://localhost:3000).

Overige scripts:

```bash
npm run build   # productie-build
npm run start   # productie-build serveren
npm run lint    # linten
```

## Deployen op Vercel

1. Push dit project naar een Git-repository (GitHub/GitLab/Bitbucket).
2. Importeer het project in [Vercel](https://vercel.com/new) — Next.js wordt automatisch herkend.
3. Geen environment variables nodig. Vercel verzorgt HTTPS automatisch (NFR5).

> `next/image` gebruikt externe placeholder-afbeeldingen van `picsum.photos`. Deze host is geconfigureerd in `next.config.mjs`.

## Projectstructuur

```
src/
  app/                       # Routes (App Router)
    layout.tsx               # Gedeelde layout: header + footer + skip-link
    page.tsx                 # / (Home)
    over-ons/page.tsx        # /over-ons
    disciplines/[discipline]/page.tsx   # /disciplines/kanopolo|kanoslalom|kanosprint (één template)
    nieuws/page.tsx          # /nieuws (overzicht + zoeken)
    nieuws/[slug]/page.tsx   # /nieuws/[slug] (artikel)
    evenementen/page.tsx     # /evenementen (filter op type)
    verenigingen/page.tsx    # /verenigingen (zoeken + filter)
    galerij/page.tsx         # /galerij (lightbox + video-embed)
    faq/page.tsx             # /faq
    contact/page.tsx         # /contact (formulier)
    zoeken/page.tsx          # /zoeken?q=... (resultaten gegroepeerd per type)
    not-found.tsx            # 404
    globals.css
  components/                # Header, Footer, SearchBar, kaarten, lijsten, Gallery, ContactForm, ...
  data/                      # types.ts + news, events, clubs, media, disciplines
  lib/                       # search.ts (zoeklogica) + utils.ts (datum/sortering/badges)
```

## Datamodellen

Gedefinieerd in [`src/data/types.ts`](src/data/types.ts): `Discipline`, `NewsArticle`, `KanoEvent`, `Vereniging`, `MediaItem` en de content-types voor disciplinepagina's.

## Mock-data

- **Nieuws** — 6 artikelen met verschillende publicatiedatums (`src/data/news.ts`)
- **Evenementen** — 6 (mix van wedstrijd/demonstratie/clinic) (`src/data/events.ts`)
- **Verenigingen** — 6 met contactgegevens en disciplines (`src/data/clubs.ts`)
- **Galerij** — 8 media-items (foto's via picsum + YouTube-embed-placeholders) (`src/data/media.ts`)
- **Disciplines** — gestructureerde content per discipline (`src/data/disciplines.ts`)

## Live data & echte bronnen

Naast de mock-data haalt het prototype op enkele plekken **echte, openbare data** op
(server-side, met ISR-caching en automatische fallback naar de mock-data als een
bron onbereikbaar is). Er zijn géén API-keys nodig.

| Onderdeel | Bron | Implementatie |
| --- | --- | --- |
| **Video's & "live"** | Officieel ICF-kanaal *Planet Canoe* op YouTube, via de publieke RSS-feed (geen API-key) | `src/lib/youtube.ts`, `src/components/LiveSection.tsx`, `src/app/galerij/page.tsx` |
| **Internationaal nieuws** | Nieuws-RSS van de International Canoe Federation (`canoeicf.com/rss.xml`) — kop + samenvatting + bronlink (link-stijl i.v.m. auteursrecht) | `src/lib/news-feed.ts`, `src/components/ExternalNewsCard.tsx`, `src/app/nieuws/page.tsx` |
| **Foto's** | Wikimedia Commons — Creative Commons / publiek domein, mét verplichte bronvermelding | `src/data/photos.ts`, `src/components/PhotoCredit.tsx` |
| **Evenementen** | Bewust ongewijzigd (mock-data) | `src/data/events.ts` |

Feed-parsing gebeurt zonder externe libraries (`src/lib/feed-utils.ts`). Externe
afbeeldingshosts staan in `next.config.mjs`. Alle CC-foto's tonen maker + licentie
via de `PhotoCredit`-component, zoals de licenties vereisen.

## Waar zijn de requirements geïmplementeerd?

### Functionele requirements

| Req | Omschrijving | Locatie |
| --- | --- | --- |
| **FR1** | Home: 3 disciplines, 3 nieuwste artikelen, 3 komende evenementen, CTA's | `src/app/page.tsx` |
| **FR2** | Eén disciplinetemplate, drie pagina's met tekst + beeld | `src/app/disciplines/[discipline]/page.tsx`, `src/data/disciplines.ts` |
| **FR3** | Nieuws gesorteerd op datum + zoekveld; detailpagina per artikel | `src/app/nieuws/page.tsx`, `src/components/NewsList.tsx`, `src/app/nieuws/[slug]/page.tsx` |
| **FR4** | Evenementen chronologisch + filter op type, type-badge | `src/app/evenementen/page.tsx`, `src/components/EventList.tsx`, `EventCard.tsx` |
| **FR5** | Verenigingen: zoeken op naam/plaats + filter op discipline, badges | `src/app/verenigingen/page.tsx`, `src/components/ClubList.tsx` |
| **FR6** | Galerij: responsive grid, lazy-loading, lightbox voor foto's, embed voor video | `src/app/galerij/page.tsx`, `src/components/Gallery.tsx` |
| **FR7** | Zoekbalk in header → `/zoeken?q=...`, client-side, resultaten per type gegroepeerd | `src/components/SearchBar.tsx`, `src/app/zoeken/page.tsx`, `src/lib/search.ts` |
| **FR8** | Contact: gegevens + formulier met validatie + honeypot + nep-submit | `src/app/contact/page.tsx`, `src/components/ContactForm.tsx` |

### Niet-functionele requirements

| Req | Omschrijving | Hoe |
| --- | --- | --- |
| **NFR1** | Gebruiksvriendelijkheid | Vaste, altijd zichtbare hoofdnavigatie in `Header.tsx`; heldere sectie-indeling |
| **NFR2** | Responsive (mobile-first) | Tailwind-breakpoints overal; mobiel hamburgermenu; responsive grids |
| **NFR3** | Prestaties | `next/image` met `sizes`, lazy-loading in de galerij, lichte pagina's |
| **NFR4** | Toegankelijkheid | Semantische HTML, `alt`-teksten, labels, `aria-*`, zichtbare focus-states, skip-link, keyboard-bedienbare lightbox (Esc) |
| **NFR5** | Veiligheid | HTTPS via Vercel; honeypot-veld in het contactformulier tegen spam |

## Disclaimer

Dit is een prototype voor demonstratiedoeleinden. Alle verenigingen, evenementen, nieuwsberichten en afbeeldingen zijn fictieve voorbeeldgegevens.
