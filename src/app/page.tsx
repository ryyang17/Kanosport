import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  HeartHandshake,
  Newspaper,
} from "lucide-react";
import { news } from "@/data/news";
import { competitions } from "@/data/competitions";
import { kanopolo } from "@/data/kanopolo";
import { highlightVideo } from "@/data/media";
import type { Competition } from "@/data/types";
import { byNewest } from "@/lib/utils";
import NewsCard from "@/components/NewsCard";
import CompetitionCard from "@/components/CompetitionCard";
import YouTubeHighlight from "@/components/YouTubeHighlight";
import PhotoCredit from "@/components/PhotoCredit";

function nextCompetition(): Competition | null {
  const upcoming = competitions
    .filter((c) => c.status !== "afgelopen")
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  return upcoming[0] ?? null;
}

export default function HomePage() {
  const latestNews = byNewest(news).slice(0, 3);
  const volgende = nextCompetition();
  // De korte "wat is kanopolo"-samenvatting (eerste twee secties).
  const summary = kanopolo.sections.slice(0, 2);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-950 text-white">
        <Image
          src={kanopolo.heroImage.src}
          alt={kanopolo.heroImage.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <PhotoCredit photo={kanopolo.heroImage} overlay />
        <div className="relative container-page py-20 sm:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-300">
              Hét platform over kanopolo
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              Kanopolo: snelheid, balgevoel en teamspel op het water
            </h1>
            <p className="mt-5 text-lg text-brand-100">
              Welkom bij Kanopolo Community. Volg de wedstrijden, kijk live of
              terug, lees het laatste nieuws en de blogs, en ontdek hoe je de
              sport kunt steunen.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/wedstrijden"
                className="inline-flex items-center gap-2 rounded-full bg-accent-500 px-6 py-3 text-sm font-semibold text-white hover:bg-accent-600 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2 focus:ring-offset-brand-950"
              >
                Bekijk wedstrijden <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/nieuws"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white ring-1 ring-inset ring-white/30 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
              >
                Nieuws & blogs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Algemene samenvatting van kanopolo */}
      <section className="container-page py-16">
        <div className="grid items-start gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold tracking-tight text-brand-950 sm:text-3xl">
              Wat is kanopolo?
            </h2>
            <p className="mt-3 text-lg leading-relaxed text-brand-800">
              {kanopolo.intro}
            </p>
            <div className="mt-6 space-y-6">
              {summary.map((section) => (
                <div key={section.heading}>
                  <h3 className="text-lg font-semibold text-brand-950">
                    {section.heading}
                  </h3>
                  <div className="prose-body mt-2">
                    {section.paragraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <figure className="relative aspect-[4/3] overflow-hidden rounded-xl border border-brand-100">
            <Image
              src={kanopolo.galleryImage.src}
              alt={kanopolo.galleryImage.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover"
            />
            <PhotoCredit photo={kanopolo.galleryImage} overlay />
          </figure>
        </div>
      </section>

      {/* Uitgelichte YouTube-highlight */}
      <section className="bg-brand-50 py-16">
        <div className="container-page">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-brand-950 sm:text-3xl">
            Uitgelicht
          </h2>
          <YouTubeHighlight
            video={highlightVideo}
            title="Highlights"
            subtitle="Proef de sfeer van internationale kanopolowedstrijden en raak geïnspireerd."
          />
        </div>
      </section>

      {/* Eerstvolgende wedstrijd + laatste nieuws */}
      <section className="container-page py-16">
        <div className="grid gap-10 lg:grid-cols-3">
          {volgende && (
            <div className="lg:col-span-1">
              <div className="mb-6 flex items-center justify-between gap-4">
                <h2 className="text-2xl font-bold tracking-tight text-brand-950">
                  Eerstvolgende wedstrijd
                </h2>
              </div>
              <CompetitionCard competition={volgende} />
              <Link
                href="/wedstrijden"
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 hover:text-brand-900"
              >
                Volledig schema <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          )}

          <div className={volgende ? "lg:col-span-2" : "lg:col-span-3"}>
            <div className="mb-6 flex items-end justify-between gap-4">
              <h2 className="text-2xl font-bold tracking-tight text-brand-950">
                Laatste nieuws
              </h2>
              <Link
                href="/nieuws"
                className="hidden shrink-0 items-center gap-1 text-sm font-semibold text-brand-700 hover:text-brand-900 sm:inline-flex"
              >
                Alle nieuws & blogs <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {latestNews.map((article) => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>
          </div>
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
                href: "/wedstrijden",
                icon: CalendarDays,
                title: "Wedstrijden",
                text: "Schema, live stream en terugkijken.",
              },
              {
                href: "/nieuws",
                icon: Newspaper,
                title: "Nieuws & Blogs",
                text: "Het laatste nieuws en handige blogs.",
              },
              {
                href: "/sponsors",
                icon: HeartHandshake,
                title: "Sponsors",
                text: "Steun de kanosport of adverteer.",
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
