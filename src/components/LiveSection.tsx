import { ExternalLink, Radio } from "lucide-react";
import type { MediaItem } from "@/data/types";
import { ICF_CHANNEL_URL } from "@/lib/youtube";

// Toont de meest recente video van het officiële ICF-kanaal als "uitgelicht",
// met een verwijzing naar de live-uitzendingen van kanopolowedstrijden.
export default function LiveSection({
  featured,
  isLive,
}: {
  featured: MediaItem | null;
  isLive: boolean;
}) {
  // Geen video beschikbaar → duidelijke placeholder tonen.
  if (!featured) {
    return (
      <section className="mb-12 rounded-2xl border border-dashed border-brand-300 bg-brand-50 p-8 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-accent-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-700">
          <Radio className="h-3.5 w-3.5" aria-hidden="true" />
          Live stream
        </span>
        <p className="mx-auto mt-4 max-w-xl text-sm text-brand-700">
          Er is op dit moment geen live uitzending beschikbaar. Kanopolo­wedstrijden
          worden meestal live uitgezonden via de organisatie van het toernooi en via
          het officiële ICF-kanaal.
        </p>
        <a
          href={ICF_CHANNEL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
        >
          Naar het ICF-kanaal (Planet Canoe)
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
        </a>
      </section>
    );
  }

  return (
    <section className="mb-12 overflow-hidden rounded-2xl border border-brand-100 bg-brand-950 text-white">
      <div className="grid gap-0 lg:grid-cols-2">
        <div className="relative aspect-video w-full bg-black">
          <iframe
            src={featured.src}
            title={featured.title}
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        </div>
        <div className="flex flex-col justify-center gap-4 p-6 sm:p-8">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-accent-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-200">
            <Radio className="h-3.5 w-3.5" aria-hidden="true" />
            {isLive ? "Nu live" : "Laatste video"} · Planet Canoe (ICF)
          </span>
          <h2 className="text-2xl font-bold leading-tight">{featured.title}</h2>
          <p className="text-sm text-brand-200">
            Beelden van het officiële ICF-kanaal. Volledige live-uitzendingen van
            EK&apos;s en WK&apos;s lopen via de organisatie van het toernooi en het
            Planet Canoe-kanaal.
          </p>
          {/* PLAATSHOUDER: vul hier een vaste kanopolo-livestream-URL in zodra die
              beschikbaar is (bv. een YouTube-live van het toernooi). */}
          <a
            href={ICF_CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-accent-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent-600 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2 focus:ring-offset-brand-950"
          >
            Bekijk live op Planet Canoe
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
