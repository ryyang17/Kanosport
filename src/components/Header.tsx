"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, Waves, X } from "lucide-react";
import SearchBar from "./SearchBar";

// Hoofdmenu-items. Altijd zichtbaar (NFR1).
const navItems = [
  { href: "/", label: "Home" },
  { href: "/galerij", label: "Galerij" },
  { href: "/nieuws", label: "Nieuws" },
  { href: "/disciplines/kanopolo", label: "Kanopolo" },
  { href: "/disciplines/kanoslalom", label: "Kanoslalom" },
  { href: "/disciplines/kanosprint", label: "Kanosprint" },
  { href: "/evenementen", label: "Evenementen" },
  { href: "/verenigingen", label: "Verenigingen" },
  { href: "/faq", label: "FAQ" },
  { href: "/over-ons", label: "Over ons" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-brand-100 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/75">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2 text-brand-700"
            aria-label="Kanosport Community home"
          >
            <Waves className="h-7 w-7 text-brand-500" aria-hidden="true" />
            <span className="text-lg font-bold tracking-tight">
              Kanosport<span className="text-accent-500">Community</span>
            </span>
          </Link>

          <div className="hidden flex-1 justify-end lg:flex">
            <SearchBar className="w-64" />
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-md p-2 text-brand-700 hover:bg-brand-50 focus:outline-none focus:ring-2 focus:ring-brand-500 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Menu sluiten" : "Menu openen"}
          >
            {open ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Desktop navigatie */}
        <nav
          aria-label="Hoofdnavigatie"
          className="hidden flex-wrap gap-x-1 gap-y-1 pb-3 lg:flex"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                isActive(item.href)
                  ? "bg-brand-100 text-brand-800"
                  : "text-brand-700 hover:bg-brand-50 hover:text-brand-900"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobiel menu */}
      {open && (
        <div
          id="mobile-menu"
          className="border-t border-brand-100 bg-white lg:hidden"
        >
          <div className="space-y-3 px-4 py-4">
            <SearchBar />
            <nav aria-label="Mobiele navigatie" className="grid gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`rounded-md px-3 py-2 text-sm font-medium ${
                    isActive(item.href)
                      ? "bg-brand-100 text-brand-800"
                      : "text-brand-700 hover:bg-brand-50"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
