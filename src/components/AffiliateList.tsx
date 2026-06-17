import { ExternalLink, Info } from "lucide-react";
import type { AffiliateProduct } from "@/data/types";

// Toont een genummerde productlijst met affiliate-links (bv. bol.com) plus een
// verplichte, eerlijke disclosure.
export default function AffiliateList({
  products,
}: {
  products: AffiliateProduct[];
}) {
  return (
    <div className="not-prose my-8">
      <div className="mb-4 flex items-start gap-2 rounded-lg border border-brand-200 bg-brand-50 p-3 text-xs text-brand-700">
        <Info className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" aria-hidden="true" />
        <p>
          <strong>Advertentie / affiliate:</strong> deze lijst bevat partnerlinks
          (o.a. bol.com). Koop je via een link, dan ontvangen wij een kleine
          vergoeding waarmee we de kanosport steunen — jij betaalt niets extra.
        </p>
      </div>

      <ol className="space-y-3">
        {products.map((p) => (
          <li
            key={p.rank}
            className="flex items-start gap-4 rounded-xl border border-brand-100 bg-white p-4 shadow-sm"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
              {p.rank}
            </span>
            <div className="flex-1">
              <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                <h3 className="text-base font-semibold text-brand-950">
                  {p.name}
                </h3>
                {p.price && (
                  <span className="text-sm font-semibold text-brand-600">
                    {p.price}
                  </span>
                )}
              </div>
              <p className="mt-1 text-sm text-brand-700">{p.blurb}</p>
              <a
                href={p.url}
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-600 hover:text-accent-700 hover:underline"
              >
                Bekijk op bol.com
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
