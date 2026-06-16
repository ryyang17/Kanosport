import { Globe, Mail, MapPin, Phone } from "lucide-react";
import type { Vereniging } from "@/data/types";
import DisciplineBadge from "./DisciplineBadge";

export default function ClubCard({ club }: { club: Vereniging }) {
  return (
    <article className="flex flex-col rounded-xl border border-brand-100 bg-white p-5 shadow-sm">
      <h3 className="text-lg font-semibold leading-snug text-brand-950">
        {club.name}
      </h3>
      <p className="mt-1 flex items-center gap-1.5 text-sm text-brand-700">
        <MapPin className="h-4 w-4 text-brand-500" aria-hidden="true" />
        {club.city}
      </p>

      <ul className="mt-3 space-y-1.5 text-sm text-brand-700">
        <li className="flex items-center gap-2">
          <Mail className="h-4 w-4 text-brand-500" aria-hidden="true" />
          <a
            href={`mailto:${club.email}`}
            className="hover:text-brand-900 hover:underline"
          >
            {club.email}
          </a>
        </li>
        <li className="flex items-center gap-2">
          <Phone className="h-4 w-4 text-brand-500" aria-hidden="true" />
          <a
            href={`tel:${club.phone.replace(/[^+\d]/g, "")}`}
            className="hover:text-brand-900 hover:underline"
          >
            {club.phone}
          </a>
        </li>
        {club.website && (
          <li className="flex items-center gap-2">
            <Globe className="h-4 w-4 text-brand-500" aria-hidden="true" />
            <a
              href={club.website}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-900 hover:underline"
            >
              Website bezoeken
            </a>
          </li>
        )}
      </ul>

      <div className="mt-4 flex flex-wrap gap-2">
        {club.disciplines.map((d) => (
          <DisciplineBadge key={d} discipline={d} />
        ))}
      </div>
    </article>
  );
}
