import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, ExternalLink, Newspaper, Users } from "lucide-react";
import { news } from "@/data/news";
import { events } from "@/data/events";
import { disciplineList } from "@/data/disciplines";
import { byDateAsc, byNewest, disciplineBadgeClasses } from "@/lib/utils";
import { photos } from "@/data/photos";
import { fetchCanoeNews, type ExternalNews } from "@/lib/news-feed";
import NewsCard from "@/components/NewsCard";
import EventCard from "@/components/EventCard";
import ExternalNewsCard from "@/components/ExternalNewsCard";
import PhotoCredit from "@/components/PhotoCredit";

export default async function HomePage() {
  const latestNews = byNewest(news).slice(0, 3);
  const upcomingEvents = byDateAsc(events).slice(0, 3);

  let internationalNews: ExternalNews[] = [];
  try {
    internationalNews = await fetchCanoeNews(3);
  } catch {
    // Feed niet beschikbaar — sectie weggelaten
  }

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-950 text-white">
        <Image
          src={photos.sprintPan.src}
          alt={photos.sprintPan.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <PhotoCredit photo={photos.sprintPan} overlay />
        <div className="relative container-page py-20 sm:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-300">
              Kanopolo · Kanoslalom · Kanosprint
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              Ontdek de wereld van de kanosport
            </h1>
            <p className="mt-5 text-lg text-brand-100">
              Welkom bij Kanosport Community, hét informatieplatform over drie
              fascinerende kanosportsoorten. Of je nu wilt scoren in kanopolo,
              precies door het wildwater wilt slalommen of vol gas wilt op de
              sprintbaan — ontdek hier alles over de sport, vind een vereniging
              bij jou in de buurt en blijf op de hoogte van het laatste nieuws.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/disciplines/kanopolo"
                className="inline-flex items-center gap-2 rounded-full bg-accent-500 px-6 py-3 text-sm font-semibold text-white hover:bg-accent-600 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2 focus:ring-offset-brand-950"
              >
                Verken de sporten <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/verenigingen"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white ring-1 ring-inset ring-white/30 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
              >
                Vind een vereniging
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sporten */}
      <section className="container-page py-16">
        <div className="mb-8 max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-brand-950 sm:text-3xl">
            De drie sporten
          </h2>
          <p className="mt-2 text-brand-700">
            Elke sport heeft een eigen karakter. Klik door voor uitleg,
            regels, materiaal en meer.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {disciplineList.map((d) => (
            <Link
              key={d.slug}
              href={`/disciplines/${d.slug}`}
              className="group flex flex-col overflow-hidden rounded-xl border border-brand-100 bg-white shadow-sm transition-shadow hover:shadow-md focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={d.heroImage.src}
                  alt={d.heroImage.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <span
                  className={`mb-2 inline-flex w-fit items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${disciplineBadgeClasses[d.slug]}`}
                >
                  {d.name}
                </span>
                <h3 className="text-lg font-semibold text-brand-950">
                  {d.tagline}
                </h3>
                <p className="mt-2 flex-1 text-sm text-brand-700">{d.intro}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent-600 group-hover:text-accent-700">
                  Meer over {d.name} <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Laatste nieuws */}
      <section className="bg-brand-50 py-16">
        <div className="container-page">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-brand-950 sm:text-3xl">
                Laatste nieuws
              </h2>
              <p className="mt-2 text-brand-700">
                De drie nieuwste artikelen uit de kanosport.
              </p>
            </div>
            <Link
              href="/nieuws"
              className="hidden shrink-0 items-center gap-1 text-sm font-semibold text-brand-700 hover:text-brand-900 sm:inline-flex"
            >
              Alle nieuws <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {latestNews.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* Internationaal nieuws (ICF live feed) */}
      {internationalNews.length > 0 && (
        <section className="container-page py-16">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-brand-950 sm:text-3xl">
                Internationaal nieuws
              </h2>
              <p className="mt-2 text-brand-700">
                Actueel nieuws van de International Canoe Federation (ICF).
              </p>
            </div>
            <a
              href="https://www.canoeicf.com/news"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden shrink-0 items-center gap-1 text-sm font-semibold text-brand-700 hover:text-brand-900 sm:inline-flex"
            >
              Naar ICF <ExternalLink className="h-4 w-4" />
            </a>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {internationalNews.map((article) => (
              <ExternalNewsCard key={article.id} article={article} />
            ))}
          </div>
        </section>
      )}

      {/* Komende evenementen */}
      <section className="container-page py-16">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-brand-950 sm:text-3xl">
              Komende evenementen
            </h2>
            <p className="mt-2 text-brand-700">
              De eerstvolgende wedstrijden, clinics en demonstraties.
            </p>
          </div>
          <Link
            href="/evenementen"
            className="hidden shrink-0 items-center gap-1 text-sm font-semibold text-brand-700 hover:text-brand-900 sm:inline-flex"
          >
            Alle evenementen <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {upcomingEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>

      {/* Snelle navigatie / CTA */}
      <section className="bg-brand-50 py-16">
        <div className="container-page">
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-brand-950 sm:text-3xl">
            Snel naar
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              {
                href: "/nieuws",
                icon: Newspaper,
                title: "Nieuws",
                text: "Het laatste uit de kanowereld.",
              },
              {
                href: "/evenementen",
                icon: CalendarDays,
                title: "Evenementen",
                text: "Wedstrijden, clinics en demo's.",
              },
              {
                href: "/verenigingen",
                icon: Users,
                title: "Verenigingen",
                text: "Vind een club bij jou in de buurt.",
              },
            ].map(({ href, icon: Icon, title, text }) => (
              <Link
                key={href}
                href={href}
                className="flex items-start gap-4 rounded-xl border border-brand-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-lg font-semibold text-brand-950">
                    {title}
                  </span>
                  <span className="mt-1 block text-sm text-brand-700">
                    {text}
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
