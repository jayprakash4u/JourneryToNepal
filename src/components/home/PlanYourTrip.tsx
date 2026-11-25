import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button";
import { PLAN_TRIP_CTA, PLAN_TRIP_OPTIONS } from "@/lib/plan-trips";
import { HOME_CARD_GRID_CLASS, HOME_CARD_LIMIT } from "@/lib/home-cards";
import HomeSectionHeader from "./HomeSectionHeader";
import PlanTripCard from "./PlanTripCard";

export default function PlanYourTrip() {
  const trips = PLAN_TRIP_OPTIONS.slice(0, HOME_CARD_LIMIT);

  return (
    <Section variant="muted" aria-labelledby="plan-your-trip-heading">
      <Container>
        <HomeSectionHeader
          id="plan-your-trip-heading"
          align="center"
          eyebrow="Trip planning"
          title="Plan Your Trip"
          subtitle="Ready-made itineraries with routes, budgets, and highlights — start here and customize."
        />

        <div className={HOME_CARD_GRID_CLASS}>
          {trips.map((trip) => (
            <PlanTripCard key={trip.slug} trip={trip} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button size="lg" href={PLAN_TRIP_CTA.href}>
            {PLAN_TRIP_CTA.label}
          </Button>
        </div>
      </Container>
    </Section>
  );
}
