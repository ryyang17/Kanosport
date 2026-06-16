import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { disciplines } from "@/data/disciplines";
import { news } from "@/data/news";
import { events } from "@/data/events";
import { clubs } from "@/data/clubs";
import type { Discipline } from "@/data/types";
import { byDateAsc, byNewest } from "@/lib/utils";
import NewsCard from "@/components/NewsCard";
import EventCard from "@/components/EventCard";
import ClubCard from "@/components/ClubCard";
import PhotoCredit from "@/components/PhotoCredit";

type Params = { discipline: string };

const validSlugs: Discipline[] = ["kanopolo", "kanoslalom", "kanosprint"];

export function generateStaticParams(): Params[] {
  return validSlugs.map((discipline) => ({ discipline }));
}

function getContent(slug: string) {
  if (!validSlugs.includes(slug as Discipline)) return null;
  return disciplines[slug as Discipline];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { discipline } = await params;
  const content = getContent(discipline);
  if (!content) return { title: "Discipline niet gevonden" };
  return {
    title: content.name,
    description: content.intro,
  };
}

export default async function DisciplinePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { discipline } = await params;
  const content = getContent(discipline);
  if (!content) notFound();

  const slug = content.slug;
  const relatedNews = byNewest(
    news.filter((n) => n.discipline === slug)
  ).slice(0, 3);
  const relatedEvents = byDateAsc(
    events.filter((e) => e.discipline === slug)
  ).slice(0, 3);
  const relatedClubs = clubs
    .filter((c) => c.disciplines.includes(slug))
    .slice(0, 3);

  return (
    <>
      {/* Hero met beeld */}
      <section className="relative overflow-hidden bg-brand-950 text-white">
        <Image
          src={content.heroImage.src}
          alt={content.heroImage.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <PhotoCredit photo={content.heroImage} overlay />
        <div className="relative container-page py-20 sm:py-24">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-300">
            Discipline
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            {content.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-brand-100">
            {content.tagline}
          </p>
        </div>
      </section>

      <div className="container-page py-12">
        <div className="grid gap-10 lg:grid-cols-3">
          {/* Tekstblokken */}
          <div className="lg:col-span-2">
            <p className="text-lg leading-relaxed text-brand-800">
              {content.intro}
            </p>

            <div className="mt-8 space-y-8">
              {content.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="text-xl font-bold text-brand-950">
                    {section.heading}
                  </h2>
                  <div className="prose-body mt-3">
                    {section.paragraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>

          {/* Beeld + zijbalk */}
          <aside className="lg:col-span-1">
            <figure className="relative aspect-[4/3] overflow-hidden rounded-xl border border-brand-100">
              <Image
                src={content.galleryImage.src}
                alt={content.galleryImage.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover"
              />
              <PhotoCredit photo={content.galleryImage} overlay />
            </figure>
            {relatedClubs.length > 0 && (
              <div className="mt-6 rounded-xl border border-brand-100 bg-brand-50 p-5">
                <h2 className="text-base font-semibold text-brand-950">
                  Verenigingen met {content.name}
                </h2>
                <ul className="mt-3 space-y-2 text-sm">
                  {relatedClubs.map((c) => (
                    <li key={c.id} className="text-brand-700">
                      {c.name} <span className="text-brand-500">({c.city})</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/verenigingen"
                  className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-accent-600 hover:text-accent-700"
                >
                  Alle verenigingen <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            )}
          </aside>
        </div>

        {/* Gerelateerde evenementen */}
        {relatedEvents.length > 0 && (
          <section className="mt-14">
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-brand-950">
              Evenementen rond {content.name}
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {relatedEvents.map((e) => (
                <EventCard key={e.id} event={e} />
              ))}
            </div>
          </section>
        )}

        {/* Gerelateerd nieuws */}
        {relatedNews.length > 0 && (
          <section className="mt-14">
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-brand-950">
              Nieuws over {content.name}
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {relatedNews.map((n) => (
                <NewsCard key={n.id} article={n} />
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
