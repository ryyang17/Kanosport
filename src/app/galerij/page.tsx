import type { Metadata } from "next";
import { media } from "@/data/media";
import PageHero from "@/components/PageHero";
import Gallery from "@/components/Gallery";

export const metadata: Metadata = {
  title: "Galerij",
  description: "Foto's en video's uit de wereld van kanopolo, kanoslalom en kanosprint.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Galerij"
        description="Beelden uit de kanosport. Klik op een foto voor een grote weergave of op een video om af te spelen."
      />
      <div className="container-page py-12">
        <Gallery items={media} />
      </div>
    </>
  );
}
