import Link from "next/link";
import { HeartHandshake } from "lucide-react";

// PLAATSHOUDER-waarden voor een crowdfundingactie. Vervang doel/opgehaald door
// echte cijfers (of koppel aan een crowdfundingplatform).
const RAISED = 3200;
const GOAL = 5000;

export default function CrowdfundingCard() {
  const pct = Math.min(100, Math.round((RAISED / GOAL) * 100));

  return (
    <aside className="rounded-xl border border-brand-100 bg-white p-6 shadow-sm">
      <span className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700">
        <HeartHandshake className="h-3.5 w-3.5" aria-hidden="true" />
        Crowdfunding
      </span>
      <h3 className="mt-3 text-lg font-semibold text-brand-950">
        Steun nieuwe jeugdboten
      </h3>
      <p className="mt-1 text-sm text-brand-700">
        Help mee om de jeugd van nieuw materiaal te voorzien. Elke bijdrage telt.
      </p>

      <div className="mt-4">
        <div
          className="h-2.5 w-full overflow-hidden rounded-full bg-brand-100"
          role="progressbar"
          aria-valuenow={pct}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Voortgang crowdfunding"
        >
          <div
            className="h-full rounded-full bg-accent-500"
            style={{ width: `${pct}%` }}
          />
        </div>
        <p className="mt-2 text-sm text-brand-700">
          <span className="font-semibold text-brand-950">€ {RAISED.toLocaleString("nl-NL")}</span>{" "}
          opgehaald van € {GOAL.toLocaleString("nl-NL")} ({pct}%)
        </p>
      </div>

      <Link
        href="/sponsors"
        className="mt-4 inline-flex w-full justify-center rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700"
      >
        Doneer of steun ons
      </Link>
    </aside>
  );
}
