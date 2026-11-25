import { Header, Footer } from "@/components";
import HeroSection from "@/components/home/HeroSection";
import QuickExplore from "@/components/home/QuickExplore";
import FeaturedDestinations from "@/components/home/FeaturedDestinations";
import HimalayanVillages from "@/components/home/HimalayanVillages";
import PlanYourTrip from "@/components/home/PlanYourTrip";
import Experiences from "@/components/home/Experiences";
import BlogPreview from "@/components/home/BlogPreview";
import WhyJourneyToNepal from "@/components/home/WhyJourneyToNepal";
import CommunityPicks from "@/components/home/CommunityPicks";
import TravelerQuestions from "@/components/home/TravelerQuestions";
import RecommendAPlaceSection from "@/components/home/RecommendAPlaceSection";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <QuickExplore />
        <FeaturedDestinations />
        <HimalayanVillages />
        <PlanYourTrip />
        <Experiences />
        <BlogPreview />
        <WhyJourneyToNepal />
        <CommunityPicks />
        <TravelerQuestions />
        <RecommendAPlaceSection />
      </main>
      <Footer />
    </div>
  );
}
