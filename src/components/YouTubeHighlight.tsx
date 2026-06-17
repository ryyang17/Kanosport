import { ExternalLink, Youtube } from "lucide-react";
import type { MediaItem } from "@/data/types";

// Uitgelichte YouTube-video om bezoekers naar de site te trekken.
export default function YouTubeHighlight({
  video,
  title = "Uitgelicht",
  subtitle,
}: {
  video: MediaItem;
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="overflow-hidden rounded-2xl border border-brand-100 bg-brand-950 text-white">
      <div className="grid gap-0 lg:grid-cols-5">
        <div className="relative aspect-video w-full bg-black lg:col-span-3">
          <iframe
            src={video.src}
            title={video.title}
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        </div>
        <div className="flex flex-col justify-center gap-3 p-6 sm:p-8 lg:col-span-2">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-accent-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-200">
            <Youtube className="h-3.5 w-3.5" aria-hidden="true" />
            {title}
          </span>
          <h2 className="text-xl font-bold leading-tight sm:text-2xl">
            {video.title}
          </h2>
          {subtitle && <p className="text-sm text-brand-200">{subtitle}</p>}
          {video.sourceUrl && (
            <a
              href={video.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-accent-300 hover:text-accent-200 hover:underline"
            >
              Bekijk op YouTube
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
