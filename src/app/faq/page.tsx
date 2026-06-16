import type { Metadata } from "next";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Veelgestelde vragen",
  description: "Antwoorden op de meestgestelde vragen over de kanosport en deze website.",
};

const faqs: { question: string; answer: string }[] = [
  {
    question: "Heb ik ervaring nodig om met de kanosport te beginnen?",
    answer:
      "Nee, voor alle drie de disciplines geldt dat beginners welkom zijn. De meeste verenigingen bieden introductietrainingen waarbij je onder begeleiding kennismaakt met de sport. Materiaal wordt vrijwel altijd door de vereniging verzorgd.",
  },
  {
    question: "Wat is het verschil tussen kanopolo, kanoslalom en kanosprint?",
    answer:
      "Kanopolo is een teamsport met een bal op een afgebakend speelveld. Kanoslalom draait om het zo snel en precies mogelijk afleggen van een poortenparcours in wildwater. Kanosprint is een snelheidsrace over vlak water op vaste afstanden.",
  },
  {
    question: "Vanaf welke leeftijd kan ik beginnen?",
    answer:
      "Veel verenigingen hebben jeugdafdelingen vanaf ongeveer 10 tot 12 jaar, maar ook volwassenen kunnen op elk moment instappen. Neem contact op met een vereniging bij jou in de buurt voor de exacte leeftijdsgrenzen.",
  },
  {
    question: "Welke uitrusting heb ik nodig?",
    answer:
      "Voor een proeftraining heb je meestal alleen sportkleding nodig die nat mag worden. De boot, peddel en een zwemvest worden door de vereniging beschikbaar gesteld. Bij kanopolo en kanoslalom hoort daar ook een helm bij.",
  },
  {
    question: "Hoe vind ik een vereniging bij mij in de buurt?",
    answer:
      "Op de pagina Verenigingen vind je een overzicht dat je kunt doorzoeken op naam of plaats en filteren op discipline. Zo zie je snel welke club bij jou past.",
  },
  {
    question: "Is deze website een officiële bond?",
    answer:
      "Nee. Deze website is een prototype voor demonstratiedoeleinden. De getoonde verenigingen, evenementen en nieuwsberichten zijn fictieve voorbeeldgegevens.",
  },
];

export default function FaqPage() {
  return (
    <>
      <PageHero
        title="Veelgestelde vragen"
        description="De antwoorden op de vragen die we het vaakst krijgen over de kanosport."
      />
      <div className="container-page max-w-3xl py-12">
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group rounded-xl border border-brand-100 bg-white p-5 open:shadow-sm [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-semibold text-brand-950">
                {faq.question}
                <ChevronDown
                  className="h-5 w-5 shrink-0 text-brand-500 transition-transform group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="mt-3 text-brand-700">{faq.answer}</p>
            </details>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-brand-100 bg-brand-50 p-6">
          <h2 className="text-lg font-semibold text-brand-950">
            Staat je vraag er niet bij?
          </h2>
          <p className="mt-1 text-sm text-brand-700">
            Neem gerust contact met ons op — we helpen je graag verder.
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-flex rounded-full bg-brand-600 px-5 py-2 text-sm font-semibold text-white hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
          >
            Naar contact
          </Link>
        </div>
      </div>
    </>
  );
}
