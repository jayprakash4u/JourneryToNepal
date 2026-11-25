import type { Metadata } from "next";
import { Header, Footer } from "@/components";
import FoodExperienceHero from "@/components/food-experience/FoodExperienceHero";
import FeaturedExperiences from "@/components/food-experience/FeaturedExperiences";
import MustTryNepaliDishes from "@/components/food-experience/MustTryNepaliDishes";
import ExploreByRegion from "@/components/food-experience/ExploreByRegion";
import SignatureFoodTrails from "@/components/food-experience/SignatureFoodTrails";
import DiningWithCulture from "@/components/food-experience/DiningWithCulture";
import { FOOD_EXPERIENCE_HERO } from "@/lib/food-experience";

export const metadata: Metadata = {
  title: "Food & Experience | Journey to Nepal",
  description: FOOD_EXPERIENCE_HERO.subtext,
};

export default function FoodExperiencePage() {
  return (
    <div className="flex min-h-full flex-col">
      <Header />
      <main className="flex-1">
        <FoodExperienceHero />
        <FeaturedExperiences />
        <MustTryNepaliDishes />
        <ExploreByRegion />
        <SignatureFoodTrails />
        <DiningWithCulture />
      </main>
      <Footer />
    </div>
  );
}
