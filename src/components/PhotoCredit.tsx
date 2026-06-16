import type { Photo } from "@/data/types";

// Toont de verplichte bronvermelding bij CC-gelicentieerde foto's.
// `overlay` plaatst het subtiel in de hoek van een beeld; anders inline tekst.
export default function PhotoCredit({
  photo,
  overlay = false,
}: {
  photo: Pick<Photo, "credit" | "license" | "sourceUrl">;
  overlay?: boolean;
}) {
  if (!photo.credit && !photo.license) return null;

  const text = (
    <>
      Foto: {photo.credit}
      {photo.license ? ` · ${photo.license}` : ""}
      {photo.sourceUrl ? (
        <>
          {" · "}
          <a
            href={photo.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:no-underline"
          >
            Wikimedia Commons
          </a>
        </>
      ) : (
        " · Wikimedia Commons"
      )}
    </>
  );

  if (overlay) {
    return (
      <p className="absolute bottom-0 right-0 max-w-full rounded-tl-md bg-black/55 px-2 py-0.5 text-[10px] leading-tight text-white/90">
        {text}
      </p>
    );
  }

  return <p className="mt-2 text-xs text-brand-500">{text}</p>;
}
