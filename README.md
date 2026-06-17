# Kanopolo Community

Een **werkend prototype** van een publieke informatiewebsite over **kanopolo**.

De site is volledig statisch / mock-gedreven: er zijn geen accounts, geen login, geen echte backend en geen database. De meeste content komt uit getypeerde mock-data in `src/data/`, aangevuld met enkele echte, openbare bronnen (zie *Live data*). Het prototype draait direct en is demonstreerbaar.

## Pagina's (topnavigatie)

De site heeft een vaste topbalk met vijf pagina's:

1. **Home** — algemene samenvatting van kanopolo, uitgelichte YouTube-highlight, eerstvolgende wedstrijd en het laatste nieuws.
2. **Wedstrijden** — schema (toernooien, NK, EK, WK met WK/EK uitgelicht), live stream (ICF *Planet Canoe*) en **terugkijken** (echte kanopolo-video's).
3. **Nieuws & Blogs** — nieuws en blogs náást elkaar, beide met filterfunctie; live internationaal ICF-nieuws; affiliate-blogs (bol.com), plus adverteerder- en crowdfunding-blokken.
4. **Sponsors** — sponsorpakketten (logo op site, advertentie in de livestream, vermelding bij wedstrijden), adverteren en crowdfunding.
5. **Contact** — contactgegevens + formulier met client-side validatie.

## Tech stack

- **Next.js (App Router)** met **TypeScript**
- **Tailwind CSS** voor styling
- **lucide-react** voor iconen
- Mock-data als getypeerde TypeScript-bestanden in `src/data/`
- Per-sectie filters (nieuws, blogs, wedstrijdschema) — geen server nodig
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
3. Geen environment variables nodig. Vercel verzorgt HTTPS automatisch.

> `next/image` gebruikt externe afbeeldingen (picsum.photos, Wikimedia Commons, YouTube-thumbnails). Deze hosts staan in `next.config.mjs`.

## Projectstructuur

```
src/
  app/                       # Routes (App Router)
    layout.tsx               # Gedeelde layout: header + footer + skip-link
    page.tsx                 # / (Home)
    wedstrijden/page.tsx     # /wedstrijden (schema + live + terugkijken)
    nieuws/page.tsx          # /nieuws (Nieuws & Blogs naast elkaar)
    nieuws/[slug]/page.tsx   # /nieuws/[slug] (nieuwsartikel)
    blog/[slug]/page.tsx     # /blog/[slug] (blog, incl. affiliate-lijst)
    sponsors/page.tsx        # /sponsors (pakketten + adverteren + crowdfunding)
    contact/page.tsx         # /contact (formulier)
    not-found.tsx            # 404
    globals.css
  components/                # Header, Footer, kaarten/lijsten, Gallery, LiveSection,
                             # CompetitionSchedule, BlogList, AffiliateList, AdSlot, ...
  data/                      # types.ts + news, blogs, competitions, media, kanopolo, photos
  lib/                       # utils.ts (datum/sortering/badges), youtube.ts, news-feed.ts, feed-utils.ts
```

## Datamodellen

Gedefinieerd in [`src/data/types.ts`](src/data/types.ts): `NewsArticle` (+ `NewsCategory`), `BlogPost` (+ `BlogCategory`, `AffiliateProduct`), `Competition` (+ `CompetitionLevel`/`-Status`), `Photo` en `MediaItem`.

## Mock-data

- **Nieuws** — kanopolo-artikelen met categorie (`src/data/news.ts`)
- **Blogs** — incl. affiliate-post "Top 10 beste kanopeddels" met bol.com-partnerlinks (`src/data/blogs.ts`)
- **Wedstrijden** — toernooien/NK/EK/WK met status + terugkijk-links (`src/data/competitions.ts`)
- **Kanopolo-samenvatting** — intro + secties voor de homepage (`src/data/kanopolo.ts`)
- **Media** — kanopolo-foto's + echte terugkijk-video's (`src/data/media.ts`)

> **Affiliate / sponsoring:** de bol.com-partnertag (`BOL_PARTNER_TAG` in `src/data/blogs.ts`), de sponsortarieven en de crowdfunding-bedragen zijn **placeholders** — vervang ze door echte waarden.

## Live data & echte bronnen

Op enkele plekken haalt het prototype **echte, openbare data** op (server-side, met ISR-caching en automatische fallback naar mock-data als een bron onbereikbaar is). Er zijn géén API-keys nodig.

| Onderdeel | Bron | Implementatie |
| --- | --- | --- |
| **Live stream & terugkijken** | Officieel ICF-kanaal *Planet Canoe* (YouTube RSS) + echte kanopolo-video's (via kanopolo.nl) | `src/lib/youtube.ts`, `src/components/LiveSection.tsx`, `WatchBack.tsx`, `src/app/wedstrijden/page.tsx` |
| **Internationaal nieuws** | Nieuws-RSS van de International Canoe Federation (`canoeicf.com/rss.xml`) — kop + samenvatting + bronlink | `src/lib/news-feed.ts`, `src/components/ExternalNewsCard.tsx`, `src/app/nieuws/page.tsx` |
| **Foto's** | Wikimedia Commons — Creative Commons, mét verplichte bronvermelding | `src/data/photos.ts`, `src/components/PhotoCredit.tsx` |

Feed-parsing gebeurt zonder externe libraries (`src/lib/feed-utils.ts`). Entity-encoded HTML in feeds wordt correct ontdaan van tags zodat samenvattingen schone tekst tonen. Externe afbeeldingshosts staan in `next.config.mjs`.

## Toegankelijkheid & responsive

Semantische HTML, `alt`-teksten, labels en `aria-*`, zichtbare focus-states, skip-link en een keyboard-bedienbare lightbox (Esc). Mobile-first met Tailwind-breakpoints en een hamburgermenu; `next/image` met `sizes` en lazy-loading.

## Disclaimer

Dit is een prototype voor demonstratiedoeleinden. Verenigingen, sponsortarieven, crowdfunding-bedragen en (een deel van) de nieuwsberichten zijn fictieve voorbeeldgegevens; affiliate- en partnerlinks bevatten placeholder-id's.
