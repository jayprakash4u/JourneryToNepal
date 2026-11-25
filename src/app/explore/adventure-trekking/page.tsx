import type { Metadata } from "next";
import { Header, Footer } from "@/components";
import AdventureTrekkingHero from "@/components/adventure-trekking/AdventureTrekkingHero";
import AdventureCategories from "@/components/adventure-trekking/AdventureCategories";
import FeaturedAdventures from "@/components/adventure-trekking/FeaturedAdventures";
import PopularRegions from "@/components/adventure-trekking/PopularRegions";
import AdventureActivities from "@/components/adventure-trekking/AdventureActivities";
import BestTimeToVisit from "@/components/adventure-trekking/BestTimeToVisit";
import WhyTrekInNepal from "@/components/adventure-trekking/WhyTrekInNepal";
import TravelTips from "@/components/adventure-trekking/TravelTips";
import InspirationalGallery from "@/components/adventure-trekking/InspirationalGallery";
import AdventureBlog from "@/components/adventure-trekking/AdventureBlog";
import AdventureFAQ from "@/components/adventure-trekking/AdventureFAQ";
import FinalCTA from "@/components/adventure-trekking/FinalCTA";
import { ADVENTURE_HERO } from "@/lib/adventure-trekking";

export const metadata: Metadata = {
  title: "Adventure & Trekking | Journey to Nepal",
  description: ADVENTURE_HERO.subtext,
};

export default function AdventureTrekkingPage() {
  return (
    <div className="flex min-h-full flex-col">
      <Header />
      <main className="flex-1">
        <AdventureTrekkingHero />
        <AdventureCategories />
        <FeaturedAdventures />
        <PopularRegions />
        <AdventureActivities />
        <BestTimeToVisit />
        <WhyTrekInNepal />
        <TravelTips />
        <InspirationalGallery />
        <AdventureBlog />
        <AdventureFAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}