import { DISCIPLINE_LABELS, type Discipline } from "@/data/types";
import { disciplineBadgeClasses } from "@/lib/utils";

export default function DisciplineBadge({
  discipline,
}: {
  discipline: Discipline;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${disciplineBadgeClasses[discipline]}`}
    >
      {DISCIPLINE_LABELS[discipline]}
    </span>
  );
}
