import type { Metadata } from "next";
import { CalendarDays, PlayCircle, Radio } from "lucide-react";
import { competitions } from "@/data/competitions";
import { watchBackVideos } from "@/data/media";
import type { MediaItem } from "@/data/types";
import { fetchYouTubeVideos } from "@/lib/youtube";
import PageHero from "@/components/PageHero";
import CompetitionSchedule from "@/components/CompetitionSchedule";
import LiveSection from "@/components/LiveSection";
import WatchBack from "@/components/WatchBack";

export const metadata: Metadata = {
  title: "Wedstrijden",
  description:
    "Kanopolo-wedstrijden: schema van NK, EK en WK, de live stream en wedstrijden terugkijken.",
};

// Iedere 30 minuten verversen we de live YouTube-data.
export const revalidate = 1800;

export default async function WedstrijdenPage() {
  // Laatste ICF-video als "live/uitgelicht"; valt terug op null bij een fout.
  let featured: MediaItem | null = null;
  try {
    const videos = await fetchYouTubeVideos(1);
    featured = videos[0] ?? null;
  } catch {
    featured = null;
  }

  return (
    <>
      <PageHero
        title="Wedstrijden"
        description="Het schema van toernooien, NK, EK en WK, de live stream en alle wedstrijden om terug te kijken."
      />
      <div className="container-page py-12">
        {/* Schema */}
        <section className="mb-16">
          <div className="mb-6 flex items-center gap-2">
            <CalendarDays className="h-5 w-5 text-brand-500" aria-hidden="true" />
            <h2 className="text-2xl font-bold tracking-tight text-brand-950">
              Schema
            </h2>
          </div>
          <p className="mb-6 max-w-2xl text-sm text-brand-600">
            Filter op niveau. WK en EK zijn extra uitgelicht. Klik door voor meer
            info of om een afgelopen wedstrijd terug te kijken.
          </p>
          <CompetitionSchedule competitions={competitions} />
        </section>

        {/* Live stream */}
        <section className="mb-16">
          <div className="mb-6 flex items-center gap-2">
            <Radio className="h-5 w-5 text-brand-500" aria-hidden="true" />
            <h2 className="text-2xl font-bold tracking-tight text-brand-950">
              Live stream
            </h2>
          </div>
          <p className="mb-6 max-w-2xl text-sm text-brand-600">
            Bekijk de laatste beelden van het officiële ICF-kanaal. Volledige
            live-uitzendingen van EK&apos;s en WK&apos;s lopen via de organisatie
            van het toernooi.
          </p>
          <LiveSection featured={featured} isLive={false} />
        </section>

        {/* Terugkijken */}
        <section>
          <div className="mb-6 flex items-center gap-2">
            <PlayCircle className="h-5 w-5 text-brand-500" aria-hidden="true" />
            <h2 className="text-2xl font-bold tracking-tight text-brand-950">
              Terugkijken
            </h2>
          </div>
          <p className="mb-6 max-w-2xl text-sm text-brand-600">
            Mis je een wedstrijd? Kijk highlights en sfeerimpressies van eerdere
            toernooien terug. Klik op een tegel om de video te starten.
          </p>
          <WatchBack videos={watchBackVideos} />
          <p className="mt-8 text-xs text-brand-500">
            Video&apos;s: officiële YouTube-kanalen (o.a. via kanopolo.nl),
            automatisch ingesloten.
          </p>
        </section>
      </div>
    </>
  );
}
