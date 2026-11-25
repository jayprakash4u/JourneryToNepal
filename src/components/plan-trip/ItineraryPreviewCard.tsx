import { CalendarDays } from "lucide-react";
import type { ItineraryPreview } from "@/lib/plan-trip-itineraries";
import { PLAN_TRIP_PAGE_COPY } from "@/lib/plan-trip-copy";
import Button from "@/components/ui/Button";

interface ItineraryPreviewCardProps {
  itinerary: ItineraryPreview;
}

export default function ItineraryPreviewCard({ itinerary }: ItineraryPreviewCardProps) {
  const { itineraries } = PLAN_TRIP_PAGE_COPY;

  return (
    <article className="flex h-full flex-col rounded-md border border-border bg-surface p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-md">
      <div className="mb-4 flex items-start gap-3">
        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
          <CalendarDays className="h-5 w-5" aria-hidden />
        </span>
        <div>
          <h3 className="font-semibold text-primary">{itinerary.title}</h3>
          <p className="text-xs text-text-muted">{itinerary.durationDays} days</p>
        </div>
      </div>

      <ul className="mb-5 flex-1 space-y-1.5">
        {itinerary.highlights.map((highlight) => (
          <li key={highlight} className="flex gap-2 text-sm text-text-secondary">
            <span className="text-accent" aria-hidden>
              •
            </span>
            {highlight}
          </li>
        ))}
      </ul>

      <Button href={itinerary.href} variant="outline" className="w-full">
        {itineraries.viewPlan}
      </Button>
    </article>
  );
}
