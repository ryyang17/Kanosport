import type { MediaItem } from "@/data/types";
import Gallery from "./Gallery";

// "Terugkijken"-sectie: grid met de laatste kanopolo-video's. Hergebruikt de
// Gallery-lightbox zodat video's direct op de pagina afspelen.
export default function WatchBack({ videos }: { videos: MediaItem[] }) {
  if (videos.length === 0) {
    return (
      <p className="rounded-lg border border-dashed border-brand-300 bg-brand-50 p-6 text-sm text-brand-700">
        Er zijn nog geen terugkijk-video&apos;s beschikbaar. Kom snel terug!
      </p>
    );
  }
  return <Gallery items={videos} />;
}
