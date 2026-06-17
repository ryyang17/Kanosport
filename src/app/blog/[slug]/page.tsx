import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { blogs } from "@/data/blogs";
import { formatDate } from "@/lib/utils";
import { BlogCategoryBadge } from "@/components/CategoryBadge";
import AffiliateList from "@/components/AffiliateList";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return blogs.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogs.find((b) => b.slug === slug);
  if (!post) return { title: "Blog niet gevonden" };
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = blogs.find((b) => b.slug === slug);
  if (!post) notFound();

  // De body splitsen we op dubbele newlines; de affiliate-lijst tonen we na de
  // eerste alinea zodat de context er al staat.
  const paragraphs = post.body.split("\n\n");

  return (
    <article className="container-page max-w-3xl py-12">
      <Link
        href="/nieuws"
        className="inline-flex items-center gap-1 text-sm font-semibold text-brand-700 hover:text-brand-900"
      >
        <ArrowLeft className="h-4 w-4" /> Terug naar nieuws &amp; blogs
      </Link>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <time
          dateTime={post.publishedAt}
          className="text-sm font-medium text-brand-500"
        >
          {formatDate(post.publishedAt)}
        </time>
        <BlogCategoryBadge category={post.category} />
        <span className="text-sm text-brand-500">door {post.author}</span>
      </div>

      <h1 className="mt-3 text-3xl font-bold tracking-tight text-brand-950 sm:text-4xl">
        {post.title}
      </h1>
      <p className="mt-4 text-lg text-brand-700">{post.excerpt}</p>

      <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-xl">
        <Image
          src={post.imageUrl}
          alt={post.title}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 768px"
          className="object-cover"
        />
      </div>

      <div className="prose-body mt-8">
        {paragraphs.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      {post.affiliate && post.products && post.products.length > 0 && (
        <AffiliateList products={post.products} />
      )}
    </article>
  );
}
