import type { Metadata } from "next";
import { Globe, Newspaper, PenLine } from "lucide-react";
import { news } from "@/data/news";
import { blogs } from "@/data/blogs";
import { highlightVideo } from "@/data/media";
import { fetchCanoeNews, type ExternalNews } from "@/lib/news-feed";
import PageHero from "@/components/PageHero";
import NewsList from "@/components/NewsList";
import BlogList from "@/components/BlogList";
import ExternalNewsCard from "@/components/ExternalNewsCard";
import YouTubeHighlight from "@/components/YouTubeHighlight";
import AdSlot from "@/components/AdSlot";
import CrowdfundingCard from "@/components/CrowdfundingCard";

export const metadata: Metadata = {
  title: "Nieuws & Blogs",
  description:
    "Actueel internationaal kanonieuws (ICF), community-nieuws en blogs over kanopolo — met filters, tips en reviews.",
};

// Iedere 30 minuten ververst de pagina het live nieuws.
export const revalidate = 1800;

export default async function NewsPage() {
  let liveNews: ExternalNews[] = [];
  try {
    liveNews = await fetchCanoeNews(4);
  } catch {
    liveNews = [];
  }

  return (
    <>
      <PageHero
        title="Nieuws & Blogs"
        description="Het laatste kanopolonieuws en handige blogs naast elkaar — filter op categorie en blijf op de hoogte."
      />
      <div className="container-page py-12">
        {/* YouTube-highlight om bezoekers te trekken */}
        <section className="mb-12">
          <YouTubeHighlight
            video={highlightVideo}
            title="Uitgelicht op YouTube"
            subtitle="Bekijk de mooiste momenten uit de kanopolo en deel ze met je vrienden."
          />
        </section>

        {/* Nieuws en blogs naast elkaar */}
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Kolom: Nieuws */}
          <section>
            <div className="mb-6 flex items-center gap-2">
              <Newspaper className="h-5 w-5 text-brand-500" aria-hidden="true" />
              <h2 className="text-2xl font-bold tracking-tight text-brand-950">
                Nieuws
              </h2>
            </div>

            {liveNews.length > 0 && (
              <div className="mb-8">
                <div className="mb-3 flex items-center gap-2">
                  <Globe className="h-4 w-4 text-brand-500" aria-hidden="true" />
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-600">
                    Internationaal (live · ICF)
                  </h3>
                </div>
                <div className="grid gap-4">
                  {liveNews.map((article) => (
                    <ExternalNewsCard key={article.id} article={article} />
                  ))}
                </div>
              </div>
            )}

            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-600">
              Uit de community
            </h3>
            <NewsList articles={news} columns={1} />
          </section>

          {/* Kolom: Blogs */}
          <section>
            <div className="mb-6 flex items-center gap-2">
              <PenLine className="h-5 w-5 text-brand-500" aria-hidden="true" />
              <h2 className="text-2xl font-bold tracking-tight text-brand-950">
                Blogs
              </h2>
            </div>
            <BlogList posts={blogs} columns={1} />
          </section>
        </div>

        {/* Adverteerders & crowdfunding */}
        <section className="mt-16">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-brand-950">
            Steun &amp; adverteer
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <CrowdfundingCard />
            <AdSlot />
          </div>
        </section>
      </div>
    </>
  );
}
