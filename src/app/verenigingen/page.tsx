import type { Metadata } from "next";
import { clubs } from "@/data/clubs";
import PageHero from "@/components/PageHero";
import ClubList from "@/components/ClubList";

export const metadata: Metadata = {
  title: "Verenigingen",
  description:
    "Vind een kanovereniging bij jou in de buurt. Zoek op naam of plaats en filter op discipline.",
};

export default function ClubsPage() {
  return (
    <>
      <PageHero
        title="Verenigingen"
        description="Op zoek naar een club? Doorzoek de verenigingen op naam of plaats en filter op discipline."
      />
      <div className="container-page py-12">
        <ClubList clubs={clubs} />
      </div>
    </>
  );
}
