import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Neem contact op met Kanopolo Community via het formulier of onze contactgegevens.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact"
        description="Heb je een vraag of opmerking? Vul het formulier in of gebruik onze contactgegevens."
      />
      <div className="container-page py-12">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <h2 className="text-xl font-bold text-brand-950">Contactgegevens</h2>
            <ul className="mt-4 space-y-4 text-sm text-brand-700">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" aria-hidden="true" />
                <span>
                  Kanopolo Community
                  <br />
                  Waterkade 12
                  <br />
                  1011 AB Amsterdam
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-brand-500" aria-hidden="true" />
                <a
                  href="mailto:info@kanopolocommunity.nl"
                  className="hover:text-brand-900 hover:underline"
                >
                  info@kanopolocommunity.nl
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-brand-500" aria-hidden="true" />
                <a href="tel:+31201234567" className="hover:text-brand-900 hover:underline">
                  020-1234567
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" aria-hidden="true" />
                <span>
                  Bereikbaar op werkdagen
                  <br />
                  van 9:00 tot 17:00 uur
                </span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-brand-950">Stuur ons een bericht</h2>
            <p className="mt-1 text-sm text-brand-700">
              Velden met <span className="text-accent-600">*</span> zijn verplicht.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
