"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Play, X } from "lucide-react";
import type { MediaItem } from "@/data/types";
import DisciplineBadge from "./DisciplineBadge";

export default function Gallery({ items }: { items: MediaItem[] }) {
  const [active, setActive] = useState<MediaItem | null>(null);

  // Sluiten met Escape + scroll-lock terwijl de lightbox open is.
  useEffect(() => {
    if (!active) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setActive(null);
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <>
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {items.map((item) => (
          <li key={item.id}>
            <button
              type="button"
              onClick={() => setActive(item)}
              className="group relative block aspect-[3/2] w-full overflow-hidden rounded-xl border border-brand-100 bg-brand-50 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
              aria-label={`${item.type === "video" ? "Video afspelen" : "Foto bekijken"}: ${item.title}`}
            >
              <Image
                src={item.thumbnail}
                alt={item.title}
                fill
                loading="lazy"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {item.type === "video" && (
                <span
                  className="absolute inset-0 flex items-center justify-center bg-black/30"
                  aria-hidden="true"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-brand-700 shadow">
                    <Play className="h-6 w-6 translate-x-0.5" />
                  </span>
                </span>
              )}
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-left text-xs font-medium text-white">
                {item.title}
              </span>
            </button>
          </li>
        ))}
      </ul>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Sluiten"
          >
            <X className="h-6 w-6" />
          </button>

          <figure
            className="max-h-full w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            {active.type === "foto" ? (
              <div className="relative mx-auto aspect-[3/2] w-full">
                <Image
                  src={active.src}
                  alt={active.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  className="rounded-lg object-contain"
                />
              </div>
            ) : (
              <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                <iframe
                  src={active.src}
                  title={active.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
            )}
            <figcaption className="mt-3 flex items-center justify-center gap-3 text-center text-sm text-white">
              {active.title}
              {active.discipline && (
                <DisciplineBadge discipline={active.discipline} />
              )}
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
