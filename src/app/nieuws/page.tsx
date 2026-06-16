import type { Metadata } from "next";
import { Globe } from "lucide-react";
import { news } from "@/data/news";
import { fetchCanoeNews, type ExternalNews } from "@/lib/news-feed";
import PageHero from "@/components/PageHero";
import NewsList from "@/components/NewsList";
import ExternalNewsCard from "@/components/ExternalNewsCard";

export const metadata: Metadata = {
  title: "Nieuws",
  description:
    "Actueel internationaal kanonieuws (ICF) plus nieuws uit de community over kanopolo, kanoslalom en kanosprint.",
};

// Iedere 30 minuten ververst de pagina het live nieuws.
export const revalidate = 1800;

export default async function NewsPage() {
  let liveNews: ExternalNews[] = [];
  try {
    liveNews = await fetchCanoeNews(6);
  } catch {
    // Lukt het niet, dan tonen we alleen de community-artikelen hieronder.
    liveNews = [];
  }

  return (
    <>
      <PageHero
        title="Nieuws"
        description="Actueel internationaal kanonieuws en berichten uit de community. Zoek op trefwoord of discipline."
      />
      <div className="container-page py-12">
        {liveNews.length > 0 && (
          <section className="mb-14">
            <div className="mb-6 flex items-center gap-2">
              <Globe className="h-5 w-5 text-brand-500" aria-hidden="true" />
              <h2 className="text-2xl font-bold tracking-tight text-brand-950">
                Actueel internationaal nieuws
              </h2>
            </div>
            <p className="mb-6 max-w-2xl text-sm text-brand-600">
              Live opgehaald van de International Canoe Federation. We tonen de
              kop en een korte samenvatting; klik door naar de bron voor het
              volledige artikel.
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {liveNews.map((article) => (
                <ExternalNewsCard key={article.id} article={article} />
              ))}
            </div>
          </section>
        )}

        <section>
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-brand-950">
            Uit de community
          </h2>
          <p className="mb-6 max-w-2xl text-sm text-brand-600">
            Voorbeeldberichten uit de (fictieve) community van dit platform, met
            volledige artikelen.
          </p>
          <NewsList articles={news} />
        </section>
      </div>
    </>
  );
}
