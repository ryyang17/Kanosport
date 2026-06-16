import type { Metadata } from "next";
import { media } from "@/data/media";
import type { MediaItem } from "@/data/types";
import { fetchYouTubeVideos } from "@/lib/youtube";
import PageHero from "@/components/PageHero";
import Gallery from "@/components/Gallery";
import LiveSection from "@/components/LiveSection";

export const metadata: Metadata = {
  title: "Galerij",
  description:
    "Echte foto's (Wikimedia Commons) en live video's van het officiële ICF-kanaal over kanopolo, kanoslalom en kanosprint.",
};

// Iedere 30 minuten vernieuwt de pagina zijn live YouTube-data.
export const revalidate = 1800;

export default async function GalleryPage() {
  // Echte foto's komen uit de (gecureerde) mock-data; video's halen we live op.
  const photos = media.filter((m) => m.type === "foto");

  let videos: MediaItem[];
  try {
    videos = await fetchYouTubeVideos(9);
  } catch {
    // Fallback: gebruik de video('s) uit de mock-data als de feed onbereikbaar is.
    videos = media.filter((m) => m.type === "video");
  }

  const featured = videos[0] ?? null;
  const restVideos = videos.slice(1);

  // Galerij-grid: overige video's + alle echte foto's.
  const items: MediaItem[] = [...restVideos, ...photos];

  return (
    <>
      <PageHero
        title="Galerij"
        description="Echte beelden uit de kanosport: live video's van het officiële ICF-kanaal en vrij gelicentieerde foto's. Klik op een tegel voor een grote weergave."
      />
      <div className="container-page py-12">
        <LiveSection featured={featured} isLive={false} />
        <Gallery items={items} />
        <p className="mt-8 text-xs text-brand-500">
          Video&apos;s: officieel YouTube-kanaal Planet Canoe (ICF), automatisch
          opgehaald. Foto&apos;s: Wikimedia Commons (Creative Commons /
          publiek domein) — maker en licentie staan bij elke foto vermeld.
        </p>
      </div>
    </>
  );
}
