import type { Metadata } from "next";
import { events } from "@/data/events";
import PageHero from "@/components/PageHero";
import EventList from "@/components/EventList";

export const metadata: Metadata = {
  title: "Evenementen",
  description:
    "Overzicht van komende kano-evenementen: wedstrijden, clinics en demonstraties.",
};

export default function EventsPage() {
  return (
    <>
      <PageHero
        title="Evenementen"
        description="Alle komende wedstrijden, clinics en demonstraties op een rij — chronologisch en filterbaar op type."
      />
      <div className="container-page py-12">
        <EventList events={events} />
      </div>
    </>
  );
}
