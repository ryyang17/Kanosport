import { CalendarDays, Clock, MapPin } from "lucide-react";
import type { KanoEvent } from "@/data/types";
import { formatDate, eventTypeClasses } from "@/lib/utils";
import DisciplineBadge from "./DisciplineBadge";

const typeLabels: Record<KanoEvent["type"], string> = {
  wedstrijd: "Wedstrijd",
  demonstratie: "Demonstratie",
  clinic: "Clinic",
};

export default function EventCard({ event }: { event: KanoEvent }) {
  return (
    <article className="flex flex-col rounded-xl border border-brand-100 bg-white p-5 shadow-sm">
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <span
          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${eventTypeClasses[event.type]}`}
        >
          {typeLabels[event.type]}
        </span>
        {event.discipline && <DisciplineBadge discipline={event.discipline} />}
      </div>
      <h3 className="text-lg font-semibold leading-snug text-brand-950">
        {event.title}
      </h3>
      <dl className="mt-3 space-y-1.5 text-sm text-brand-700">
        <div className="flex items-center gap-2">
          <CalendarDays className="h-4 w-4 text-brand-500" aria-hidden="true" />
          <dt className="sr-only">Datum</dt>
          <dd>
            <time dateTime={event.date}>{formatDate(event.date)}</time>
          </dd>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-brand-500" aria-hidden="true" />
          <dt className="sr-only">Tijd</dt>
          <dd>{event.time} uur</dd>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-brand-500" aria-hidden="true" />
          <dt className="sr-only">Locatie</dt>
          <dd>{event.location}</dd>
        </div>
      </dl>
      <p className="mt-3 text-sm text-brand-700">{event.description}</p>
    </article>
  );
}
