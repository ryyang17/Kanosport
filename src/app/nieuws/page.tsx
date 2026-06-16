import type { Metadata } from "next";
import { news } from "@/data/news";
import PageHero from "@/components/PageHero";
import NewsList from "@/components/NewsList";

export const metadata: Metadata = {
  title: "Nieuws",
  description:
    "Het laatste nieuws over kanopolo, kanoslalom en kanosprint in Nederland.",
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        title="Nieuws"
        description="Blijf op de hoogte van het laatste nieuws uit de kanosport. Zoek op trefwoord of discipline."
      />
      <div className="container-page py-12">
        <NewsList articles={news} />
      </div>
    </>
  );
}
