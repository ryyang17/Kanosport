import type { Metadata } from "next";
import Link from "next/link";
import {
  Check,
  HeartHandshake,
  Megaphone,
  Radio,
  Trophy,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import CrowdfundingCard from "@/components/CrowdfundingCard";

export const metadata: Metadata = {
  title: "Sponsors",
  description:
    "Steun de kanopolosport: word sponsor of adverteerder en krijg een vermelding op de site en in de livestream.",
};

// PLAATSHOUDER-prijzen: vervang door je eigen tarieven.
const tiers: {
  name: string;
  price: string;
  icon: typeof Trophy;
  highlight?: boolean;
  benefits: string[];
}[] = [
  {
    name: "Brons",
    price: "vanaf € 150 / jaar",
    icon: HeartHandshake,
    benefits: [
      "Logo op de sponsorpagina",
      "Vermelding in onze nieuwsbrief",
      "Bedankje op social media",
    ],
  },
  {
    name: "Zilver",
    price: "vanaf € 500 / jaar",
    icon: Megaphone,
    highlight: true,
    benefits: [
      "Alles uit Brons",
      "Logo in de footer van de hele site",
      "Advertentieblok op de Nieuws & Blogs-pagina",
      "Naamsvermelding bij wedstrijdverslagen",
    ],
  },
  {
    name: "Goud",
    price: "vanaf € 1.500 / jaar",
    icon: Radio,
    benefits: [
      "Alles uit Zilver",
      "Advertentie in de livestream van wedstrijden",
      "Logo op de homepage",
      "Gezamenlijke contentactie (blog of video)",
    ],
  },
];

export default function SponsorsPage() {
  return (
    <>
      <PageHero
        title="Sponsors"
        description="Wil jij de kanopolosport helpen groeien? Word sponsor of adverteerder en bereik een betrokken community — op de site én in de livestream."
      />

      <div className="container-page py-12">
        {/* Intro / waarom */}
        <section className="max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-brand-950">
            Help mee de kanosport vooruit
          </h2>
          <p className="mt-3 text-brand-700">
            Kanopolo draait op vrijwilligers en een beperkt budget. Met jouw
            steun kunnen we wedstrijden uitzenden, nieuwe jeugdboten aanschaffen
            en de sport bij een groter publiek brengen. In ruil daarvoor krijg
            jij een advertentie op de site en in de stream, plus een warm gevoel
            dat je de sport steunt.
          </p>
        </section>

        {/* Sponsorpakketten */}
        <section className="mt-12">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-brand-950">
            Sponsorpakketten
          </h2>
          <div className="grid gap-6 lg:grid-cols-3">
            {tiers.map(({ name, price, icon: Icon, highlight, benefits }) => (
              <div
                key={name}
                className={`flex flex-col rounded-2xl border bg-white p-6 shadow-sm ${
                  highlight
                    ? "border-accent-300 ring-2 ring-accent-200"
                    : "border-brand-100"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-brand-950">{name}</h3>
                    {highlight && (
                      <span className="text-xs font-semibold uppercase tracking-wider text-accent-600">
                        Populair
                      </span>
                    )}
                  </div>
                </div>
                <p className="mt-4 text-sm font-semibold text-brand-700">
                  {price}
                </p>
                <ul className="mt-4 flex-1 space-y-2 text-sm text-brand-700">
                  {benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-brand-500"
                        aria-hidden="true"
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`mt-6 inline-flex justify-center rounded-full px-5 py-2.5 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                    highlight
                      ? "bg-accent-500 text-white hover:bg-accent-600 focus:ring-accent-400"
                      : "bg-brand-600 text-white hover:bg-brand-700 focus:ring-brand-500"
                  }`}
                >
                  Word {name}-sponsor
                </Link>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-brand-500">
            Genoemde bedragen zijn voorbeeldtarieven. Maatwerk is altijd
            bespreekbaar — neem contact op voor de mogelijkheden.
          </p>
        </section>

        {/* Adverteren + crowdfunding */}
        <section className="mt-16 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl bg-brand-950 p-8 text-white">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-200">
              <Megaphone className="h-3.5 w-3.5" aria-hidden="true" />
              Adverteren
            </span>
            <h2 className="mt-3 text-2xl font-bold">Liever losse advertentie?</h2>
            <p className="mt-2 text-brand-100">
              Je kunt ook losstaand adverteren met een banner op de site of een
              spot in de livestream van een toernooi. We denken graag mee over
              een pakket dat bij je past.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-full bg-accent-500 px-6 py-2.5 text-sm font-semibold text-white hover:bg-accent-600 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2 focus:ring-offset-brand-950"
            >
              Vraag de mogelijkheden aan
            </Link>
          </div>

          <CrowdfundingCard />
        </section>
      </div>
    </>
  );
}
