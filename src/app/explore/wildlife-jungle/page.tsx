import type { Metadata } from "next";
import { Header, Footer } from "@/components";
import WildlifeJungleHero from "@/components/wildlife-jungle/WildlifeJungleHero";
import ChooseJungleAdventure from "@/components/wildlife-jungle/ChooseJungleAdventure";
import NepalNationalParks from "@/components/wildlife-jungle/NepalNationalParks";
import MeetNepalWildlife from "@/components/wildlife-jungle/MeetNepalWildlife";
import WildlifeExploreByRegion from "@/components/wildlife-jungle/WildlifeExploreByRegion";
import { WILDLIFE_JUNGLE_HERO } from "@/lib/wildlife-jungle";

export const metadata: Metadata = {
  title: "Wildlife & Jungle | Journey to Nepal",
  description: WILDLIFE_JUNGLE_HERO.subtext,
};

export default function WildlifeJunglePage() {
  return (
    <div className="flex min-h-full flex-col">
      <Header />
      <main className="flex-1">
        <WildlifeJungleHero />
        <ChooseJungleAdventure />
        <NepalNationalParks />
        <MeetNepalWildlife />
        <WildlifeExploreByRegion />
      </main>
      <Footer />
    </div>
  );
}
