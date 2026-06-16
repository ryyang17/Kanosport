import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { news } from "@/data/news";
import { formatDate } from "@/lib/utils";
import DisciplineBadge from "@/components/DisciplineBadge";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return news.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = news.find((a) => a.slug === slug);
  if (!article) return { title: "Artikel niet gevonden" };
  return { title: article.title, description: article.excerpt };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const article = news.find((a) => a.slug === slug);
  if (!article) notFound();

  return (
    <article className="container-page max-w-3xl py-12">
      <Link
        href="/nieuws"
        className="inline-flex items-center gap-1 text-sm font-semibold text-brand-700 hover:text-brand-900"
      >
        <ArrowLeft className="h-4 w-4" /> Terug naar nieuws
      </Link>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <time
          dateTime={article.publishedAt}
          className="text-sm font-medium text-brand-500"
        >
          {formatDate(article.publishedAt)}
        </time>
        {article.discipline && (
          <DisciplineBadge discipline={article.discipline} />
        )}
      </div>

      <h1 className="mt-3 text-3xl font-bold tracking-tight text-brand-950 sm:text-4xl">
        {article.title}
      </h1>
      <p className="mt-4 text-lg text-brand-700">{article.excerpt}</p>

      <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-xl">
        <Image
          src={article.imageUrl}
          alt={article.title}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 768px"
          className="object-cover"
        />
      </div>

      <div className="prose-body mt-8">
        {article.body.split("\n\n").map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}
