import Link from "next/link";
import { Mail, MapPin, Phone, Waves } from "lucide-react";

const footerNav: { heading: string; links: { href: string; label: string }[] }[] =
  [
    {
      heading: "Disciplines",
      links: [
        { href: "/disciplines/kanopolo", label: "Kanopolo" },
        { href: "/disciplines/kanoslalom", label: "Kanoslalom" },
        { href: "/disciplines/kanosprint", label: "Kanosprint" },
      ],
    },
    {
      heading: "Ontdekken",
      links: [
        { href: "/nieuws", label: "Nieuws" },
        { href: "/evenementen", label: "Evenementen" },
        { href: "/verenigingen", label: "Verenigingen" },
        { href: "/galerij", label: "Galerij" },
      ],
    },
    {
      heading: "Informatie",
      links: [
        { href: "/over-ons", label: "Over ons" },
        { href: "/faq", label: "Veelgestelde vragen" },
        { href: "/contact", label: "Contact" },
        { href: "/zoeken", label: "Zoeken" },
      ],
    },
  ];

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-brand-100 bg-brand-950 text-brand-100">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 text-white">
              <Waves className="h-7 w-7 text-brand-300" aria-hidden="true" />
              <span className="text-lg font-bold">
                Watersport<span className="text-accent-400">Community</span>
              </span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-brand-200">
              Het informatieplatform over kanopolo, kanoslalom en kanosprint in
              Nederland.
            </p>
            <address className="mt-4 space-y-2 text-sm not-italic text-brand-200">
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-brand-300" aria-hidden="true" />
                Waterkade 12, 1011 AB Amsterdam
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-brand-300" aria-hidden="true" />
                <a
                  href="mailto:info@watersportcommunity.nl"
                  className="hover:text-white hover:underline"
                >
                  info@watersportcommunity.nl
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-brand-300" aria-hidden="true" />
                <a
                  href="tel:+31201234567"
                  className="hover:text-white hover:underline"
                >
                  020-1234567
                </a>
              </p>
            </address>
          </div>

          {footerNav.map((col) => (
            <nav key={col.heading} aria-label={col.heading}>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
                {col.heading}
              </h2>
              <ul className="mt-4 space-y-2 text-sm">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-brand-200 hover:text-white hover:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-10 border-t border-brand-800 pt-6 text-sm text-brand-300">
          <p>
            © {new Date().getFullYear()} Watersport Community. Een prototype voor
            demonstratiedoeleinden.
          </p>
        </div>
      </div>
    </footer>
  );
}
