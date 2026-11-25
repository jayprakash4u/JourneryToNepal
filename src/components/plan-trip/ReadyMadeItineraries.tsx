import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { PLAN_TRIP_PAGE_COPY } from "@/lib/plan-trip-copy";
import { getItinerariesByDuration, ITINERARY_GROUPS } from "@/lib/plan-trip-itineraries";
import ItineraryPreviewCard from "./ItineraryPreviewCard";

export default function ReadyMadeItineraries() {
  const { itineraries } = PLAN_TRIP_PAGE_COPY;

  return (
    <Section variant="muted" aria-labelledby="ready-itineraries-heading">
      <Container>
        <div className="mb-8 text-center md:mb-10">
          <h2
            id="ready-itineraries-heading"
            className="text-2xl font-bold tracking-tight text-primary md:text-3xl"
          >
            {itineraries.title}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-text-secondary">{itineraries.subtitle}</p>
        </div>

        <div className="space-y-10">
          {ITINERARY_GROUPS.map((group) => {
            const items = getItinerariesByDuration(group.key);

            return (
              <div key={group.key}>
                <h3 className="mb-4 text-lg font-semibold text-primary">{group.label}</h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((item) => (
                    <ItineraryPreviewCard key={item.slug} itinerary={item} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
