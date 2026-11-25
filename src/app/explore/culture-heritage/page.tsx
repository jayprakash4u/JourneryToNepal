import type { Metadata } from "next";
import { Header, Footer } from "@/components";
import CultureHeritageHero from "@/components/culture-heritage/CultureHeritageHero";
import FeaturedHeritagePlaces from "@/components/culture-heritage/FeaturedHeritagePlaces";
import PeopleCultureTraditions from "@/components/culture-heritage/PeopleCultureTraditions";
import { CULTURE_HERO } from "@/lib/culture-heritage";

export const metadata: Metadata = {
  title: "Culture & Heritage | Journey to Nepal",
  description: CULTURE_HERO.subtext,
};

export default function CultureHeritagePage() {
  return (
    <div className="flex min-h-full flex-col">
      <Header />
      <main className="flex-1">
        <CultureHeritageHero />
        <FeaturedHeritagePlaces />
        <PeopleCultureTraditions />
      </main>
      <Footer />
    </div>
  );
}
