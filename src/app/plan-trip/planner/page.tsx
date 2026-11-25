import type { Metadata } from "next";
import { Header, Footer } from "@/components";
import PlanTripHero from "@/components/plan-trip/PlanTripHero";
import TripPlannerTool from "@/components/plan-trip/TripPlannerTool";
import ReadyMadeItineraries from "@/components/plan-trip/ReadyMadeItineraries";
import TravelTools from "@/components/plan-trip/TravelTools";
import PopularRoutes from "@/components/plan-trip/PopularRoutes";
import PlanTripCta from "@/components/plan-trip/PlanTripCta";
import { PLAN_TRIP_PAGE_COPY } from "@/lib/plan-trip-copy";

export const metadata: Metadata = {
  title: "Plan Your Trip | Journey to Nepal",
  description: PLAN_TRIP_PAGE_COPY.hero.subtitle,
};

export default function PlanTripPlannerPage() {
  return (
    <div className="flex min-h-full flex-col">
      <Header />
      <main className="flex-1">
        <PlanTripHero />
        <TripPlannerTool />
        <ReadyMadeItineraries />
        <TravelTools />
        <PopularRoutes />
        <PlanTripCta />
      </main>
      <Footer />
    </div>
  );
}
