import Link from "next/link";
import { ArrowLeft, Bus, Home, Sparkles, Wallet } from "lucide-react";
import type { ItineraryDetail } from "@/lib/plan-trip-itineraries";
import Button from "@/components/ui/Button";
import SaveTripPrompt from "./SaveTripPrompt";

interface ItineraryDetailViewProps {
  itinerary: ItineraryDetail;
}

export default function ItineraryDetailView({ itinerary }: ItineraryDetailViewProps) {
  return (
    <div>
      <Link
        href="/plan-trip/planner"
        className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-text-secondary transition-colors hover:text-primary"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden />
        Back to trip planner
      </Link>

      <header className="mb-8 rounded-md border border-border bg-surface p-6 shadow-sm md:p-8">
        <p className="mb-2 text-sm font-medium text-accent">{itinerary.durationDays}-day itinerary</p>
        <h1 className="text-2xl font-bold text-primary md:text-3xl">{itinerary.title}</h1>
        <p className="mt-3 max-w-2xl text-text-secondary">{itinerary.description}</p>

        <dl className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-md bg-background p-4">
            <dt className="text-xs font-semibold uppercase tracking-wider text-text-muted">Route</dt>
            <dd className="mt-1 text-sm font-medium text-text-primary">{itinerary.route}</dd>
          </div>
          <div className="rounded-md bg-background p-4">
            <dt className="mb-1 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-text-muted">
              <Wallet className="h-3.5 w-3.5" aria-hidden />
              Budget
            </dt>
            <dd className="text-sm font-medium text-primary">{itinerary.budget}</dd>
          </div>
        </dl>
      </header>

      <div className="space-y-4">
        {itinerary.days.map((day) => (
          <article
            key={day.day}
            className="rounded-md border border-border bg-surface p-5 shadow-sm"
          >
            <h2 className="mb-3 text-lg font-semibold text-primary">
              Day {day.day}: {day.title}
            </h2>

            <dl className="mb-3 space-y-2 text-sm">
              {day.travel && (
                <div className="flex gap-2 text-text-secondary">
                  <Bus className="mt-0.5 h-4 w-4 shrink-0 text-primary-light" aria-hidden />
                  <dd>{day.travel}</dd>
                </div>
              )}
              {day.stay && (
                <div className="flex gap-2 text-text-secondary">
                  <Home className="mt-0.5 h-4 w-4 shrink-0 text-primary-light" aria-hidden />
                  <dd>{day.stay}</dd>
                </div>
              )}
            </dl>

            <ul className="space-y-1.5">
              {day.activities.map((activity) => (
                <li key={activity} className="flex gap-2 text-sm text-text-primary">
                  <Sparkles className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" aria-hidden />
                  {activity}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="mt-8 space-y-4">
        <SaveTripPrompt planTitle={itinerary.title} />
        <div className="text-center">
          <Button href="/plan-trip/planner#trip-planner-tool" size="lg">
            Customize This Plan
          </Button>
        </div>
      </div>
    </div>
  );
}
