import Image from "next/image";
import Link from "next/link";
import { Tag } from "lucide-react";
import type { BlogPost } from "@/data/types";
import { formatDate } from "@/lib/utils";
import { BlogCategoryBadge } from "./CategoryBadge";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-brand-100 bg-white shadow-sm transition-shadow hover:shadow-md">
      <Link
        href={`/blog/${post.slug}`}
        className="relative block aspect-[16/9] overflow-hidden"
      >
        <Image
          src={post.imageUrl}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {post.affiliate && (
          <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-accent-500 px-2.5 py-0.5 text-xs font-semibold text-white">
            <Tag className="h-3 w-3" aria-hidden="true" />
            Aanrader
          </span>
        )}
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-center gap-2">
          <time
            dateTime={post.publishedAt}
            className="text-xs font-medium text-brand-500"
          >
            {formatDate(post.publishedAt)}
          </time>
          <BlogCategoryBadge category={post.category} />
        </div>
        <h3 className="text-lg font-semibold leading-snug text-brand-950">
          <Link
            href={`/blog/${post.slug}`}
            className="hover:text-brand-700 focus:outline-none focus:underline"
          >
            {post.title}
          </Link>
        </h3>
        <p className="mt-1 text-xs text-brand-500">door {post.author}</p>
        <p className="mt-2 flex-1 text-sm text-brand-700">{post.excerpt}</p>
        <Link
          href={`/blog/${post.slug}`}
          className="mt-4 inline-flex text-sm font-semibold text-accent-600 hover:text-accent-700 hover:underline"
        >
          Lees blog →
        </Link>
      </div>
    </article>
  );
}
