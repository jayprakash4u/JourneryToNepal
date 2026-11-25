import { Bus, Home, Sparkles } from "lucide-react";
import type { GeneratedPlan } from "@/lib/plan-trip-planner";
import { PLAN_TRIP_PAGE_COPY } from "@/lib/plan-trip-copy";
import SaveTripPrompt from "./SaveTripPrompt";

interface GeneratedPlanDisplayProps {
  plan: GeneratedPlan;
  onReset: () => void;
}

export default function GeneratedPlanDisplay({ plan, onReset }: GeneratedPlanDisplayProps) {
  const { planner } = PLAN_TRIP_PAGE_COPY;

  return (
    <div className="rounded-md border border-primary/20 bg-surface p-6 shadow-sm md:p-8">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-accent">
            {planner.resultTitle}
          </p>
          <h3 className="text-xl font-bold text-primary md:text-2xl">{plan.title}</h3>
          <p className="mt-2 text-sm text-text-secondary">{plan.summary}</p>
        </div>
        <button
          type="button"
          onClick={onReset}
          className="shrink-0 text-sm font-medium text-text-muted transition-colors hover:text-primary"
        >
          {planner.reset}
        </button>
      </div>

      <div className="space-y-4">
        {plan.days.map((day) => (
          <article
            key={day.day}
            className="rounded-md border border-border-light bg-background p-4 md:p-5"
          >
            <h4 className="mb-3 font-semibold text-text-primary">
              Day {day.day}: {day.title}
            </h4>

            <dl className="mb-3 space-y-2 text-sm">
              {day.travel && (
                <div className="flex gap-2 text-text-secondary">
                  <Bus className="mt-0.5 h-4 w-4 shrink-0 text-primary-light" aria-hidden />
                  <div>
                    <dt className="sr-only">Travel</dt>
                    <dd>{day.travel}</dd>
                  </div>
                </div>
              )}
              {day.stay && (
                <div className="flex gap-2 text-text-secondary">
                  <Home className="mt-0.5 h-4 w-4 shrink-0 text-primary-light" aria-hidden />
                  <div>
                    <dt className="sr-only">Stay</dt>
                    <dd>{day.stay}</dd>
                  </div>
                </div>
              )}
            </dl>

            <ul className="space-y-1.5">
              {day.activities.map((activity) => (
                <li
                  key={activity}
                  className="flex gap-2 text-sm text-text-primary"
                >
                  <Sparkles className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" aria-hidden />
                  {activity}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="mt-6 grid gap-4 border-t border-border-light pt-6 sm:grid-cols-2">
        <div className="rounded-md bg-primary/5 p-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
            {planner.budgetLabel}
          </p>
          <p className="mt-1 text-lg font-bold text-primary">{plan.budgetRange}</p>
        </div>
        <div className="rounded-md bg-accent/5 p-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
            {planner.styleNoteLabel}
          </p>
          <p className="mt-1 text-sm text-text-primary">{plan.travelStyleNote}</p>
        </div>
      </div>

      <div className="mt-6">
        <SaveTripPrompt planTitle={plan.title} />
      </div>
    </div>
  );
}
