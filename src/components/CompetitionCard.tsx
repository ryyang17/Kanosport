import { CalendarDays, ExternalLink, Info, MapPin, PlayCircle } from "lucide-react";
import {
  COMPETITION_LEVEL_LABELS,
  type Competition,
} from "@/data/types";
import { competitionLevelClasses, formatDate } from "@/lib/utils";

const statusLabels: Record<Competition["status"], string> = {
  aankomend: "Aankomend",
  live: "Nu live",
  afgelopen: "Afgelopen",
};

const statusClasses: Record<Competition["status"], string> = {
  aankomend: "bg-emerald-100 text-emerald-700",
  live: "bg-accent-500 text-white",
  afgelopen: "bg-brand-100 text-brand-600",
};

export default function CompetitionCard({
  competition,
}: {
  competition: Competition;
}) {
  const highlight = competition.level === "WK" || competition.level === "EK";

  return (
    <article
      className={`flex flex-col rounded-xl border bg-white p-5 shadow-sm ${
        highlight ? "border-accent-300 ring-1 ring-accent-200" : "border-brand-100"
      }`}
    >
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <span
          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${competitionLevelClasses[competition.level]}`}
          title={COMPETITION_LEVEL_LABELS[competition.level]}
        >
          {competition.level}
        </span>
        <span
          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${statusClasses[competition.status]}`}
        >
          {statusLabels[competition.status]}
        </span>
      </div>

      <h3 className="text-lg font-semibold leading-snug text-brand-950">
        {competition.title}
      </h3>

      <dl className="mt-3 space-y-1.5 text-sm text-brand-700">
        <div className="flex items-center gap-2">
          <CalendarDays className="h-4 w-4 text-brand-500" aria-hidden="true" />
          <dt className="sr-only">Datum</dt>
          <dd>
            <time dateTime={competition.date}>{formatDate(competition.date)}</time>
          </dd>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-brand-500" aria-hidden="true" />
          <dt className="sr-only">Locatie</dt>
          <dd>{competition.location}</dd>
        </div>
      </dl>

      <p className="mt-3 flex-1 text-sm text-brand-700">{competition.description}</p>

      <div className="mt-4 flex flex-wrap gap-3">
        {competition.watchBackUrl && (
          <a
            href={competition.watchBackUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-600 hover:text-accent-700 hover:underline"
          >
            <PlayCircle className="h-4 w-4" aria-hidden="true" />
            Terugkijken
          </a>
        )}
        {competition.infoUrl && (
          <a
            href={competition.infoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-900 hover:underline"
          >
            <Info className="h-4 w-4" aria-hidden="true" />
            Meer info
            <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        )}
      </div>
    </article>
  );
}
