import Link from "next/link";
import { Megaphone } from "lucide-react";

// Plaatshouder voor een adverteerder. In een echte site zou hier een banner of
// een ingekochte advertentie staan; nu een nette CTA richting de sponsorpagina.
export default function AdSlot({
  label = "Advertentie",
}: {
  label?: string;
}) {
  return (
    <aside
      aria-label="Advertentieruimte"
      className="flex flex-col items-center justify-center rounded-xl border border-dashed border-brand-300 bg-brand-50 p-6 text-center"
    >
      <span className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-brand-500 ring-1 ring-inset ring-brand-200">
        <Megaphone className="h-3 w-3" aria-hidden="true" />
        {label}
      </span>
      <p className="text-sm font-semibold text-brand-900">
        Jouw advertentie hier?
      </p>
      <p className="mt-1 text-xs text-brand-600">
        Bereik de kanopolocommunity op de site én in de livestream.
      </p>
      <Link
        href="/sponsors"
        className="mt-3 inline-flex rounded-full bg-accent-500 px-4 py-1.5 text-xs font-semibold text-white hover:bg-accent-600"
      >
        Adverteren
      </Link>
    </aside>
  );
}
