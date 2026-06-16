import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Compass, HeartHandshake, Target } from "lucide-react";
import PageHero from "@/components/PageHero";
import PhotoCredit from "@/components/PhotoCredit";
import { photos } from "@/data/photos";

export const metadata: Metadata = {
  title: "Over ons",
  description:
    "Over Kanosport Community: het informatieplatform over kanopolo, kanoslalom en kanosprint.",
};

const values = [
  {
    icon: Compass,
    title: "Informeren",
    text: "We bundelen heldere, toegankelijke informatie over de drie kanosportsoorten op één plek.",
  },
  {
    icon: HeartHandshake,
    title: "Verbinden",
    text: "We brengen sporters, verenigingen en geïnteresseerden met elkaar in contact.",
  },
  {
    icon: Target,
    title: "Inspireren",
    text: "We laten zien hoe veelzijdig en toegankelijk de kanosport is — voor alle leeftijden.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Over ons"
        description="Kanosport Community is hét informatieplatform over de kanosportsoorten kanopolo, kanoslalom en kanosprint."
      />
      <div className="container-page py-12">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-brand-950">Wie we zijn</h2>
            <div className="prose-body mt-4">
              <p>
                Kanosport Community is opgericht om de kanosport in Nederland
                zichtbaarder en toegankelijker te maken. Veel mensen weten niet
                hoe leuk en veelzijdig kanovaren kan zijn — van het fanatieke
                teamspel van kanopolo tot de precisie van kanoslalom en de pure
                snelheid van kanosprint.
              </p>
              <p>
                Op dit platform vind je uitleg over elke sport, het laatste
                nieuws, een overzicht van evenementen en een gids van
                verenigingen door het hele land. Zo helpen we je op weg, of je nu
                nieuwsgierig bent of al jaren peddelt.
              </p>
            </div>
          </div>
          <figure className="relative aspect-[4/3] overflow-hidden rounded-xl border border-brand-100">
            <Image
              src={photos.slalomRace.src}
              alt={photos.slalomRace.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <PhotoCredit photo={photos.slalomRace} overlay />
          </figure>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-brand-950">Waar we voor staan</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {values.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-xl border border-brand-100 bg-white p-6 shadow-sm"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-brand-950">
                  {title}
                </h3>
                <p className="mt-2 text-sm text-brand-700">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-xl bg-brand-950 p-8 text-white sm:p-10">
          <h2 className="text-2xl font-bold">Doe mee</h2>
          <p className="mt-2 max-w-2xl text-brand-100">
            Benieuwd geworden? Ontdek de sporten, vind een vereniging of
            neem contact met ons op. We helpen je graag op weg in de kanosport.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/verenigingen"
              className="inline-flex rounded-full bg-accent-500 px-6 py-2.5 text-sm font-semibold text-white hover:bg-accent-600 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2 focus:ring-offset-brand-950"
            >
              Vind een vereniging
            </Link>
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-white/10 px-6 py-2.5 text-sm font-semibold text-white ring-1 ring-inset ring-white/30 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
            >
              Neem contact op
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
