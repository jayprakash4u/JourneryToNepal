import Container from "@/components/layout/Container";
import { getItinerariesByDuration } from "@/lib/plan-trip-itineraries";
import ItineraryPreviewCard from "./ItineraryPreviewCard";

interface ItineraryDurationHubProps {
  durationDays: 3 | 7 | 10;
}

export default function ItineraryDurationHub({ durationDays }: ItineraryDurationHubProps) {
  const items = getItinerariesByDuration(durationDays);

  return (
    <div>
      <p className="mb-2 text-sm font-medium text-accent">{durationDays}-day itineraries</p>
      <h1 className="mb-3 text-2xl font-bold text-primary md:text-3xl">
        {durationDays}-Day Nepal Trips
      </h1>
      <p className="mb-8 max-w-2xl text-text-secondary">
        Proven routes with day-by-day plans — pick one and start exploring.
      </p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <ItineraryPreviewCard key={item.slug} itinerary={item} />
        ))}
      </div>
    </div>
  );
}
