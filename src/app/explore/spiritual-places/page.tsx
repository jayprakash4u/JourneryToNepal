import type { Metadata } from "next";
import { Header, Footer } from "@/components";
import SpiritualPlacesHero from "@/components/spiritual-places/SpiritualPlacesHero";
import FeaturedSpiritualExperiences from "@/components/spiritual-places/FeaturedSpiritualExperiences";
import SacredDestinations from "@/components/spiritual-places/SacredDestinations";
import { SPIRITUAL_PLACES_HERO } from "@/lib/spiritual-places";

export const metadata: Metadata = {
  title: "Spiritual Places | Journey to Nepal",
  description: SPIRITUAL_PLACES_HERO.subtext,
};

export default function SpiritualPlacesPage() {
  return (
    <div className="flex min-h-full flex-col">
      <Header />
      <main className="flex-1">
        <SpiritualPlacesHero />
        <FeaturedSpiritualExperiences />
        <SacredDestinations />
      </main>
      <Footer />
    </div>
  );
}
