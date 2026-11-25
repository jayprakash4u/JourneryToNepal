import Link from "next/link";
import { CalendarDays, MapPin, Wallet } from "lucide-react";
import type { PlanTripOption } from "@/lib/plan-trips";

interface PlanTripCardProps {
  trip: PlanTripOption;
}

export default function PlanTripCard({ trip }: PlanTripCardProps) {
  return (
    <Link
      href={trip.href}
      className="group flex h-full flex-col rounded-md border border-border bg-surface p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-md"
    >
      <div className="mb-5 flex items-center gap-3">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-accent/10 text-accent">
          <CalendarDays className="h-5 w-5" aria-hidden />
        </span>
        <h3 className="text-xl font-semibold text-primary">{trip.title}</h3>
      </div>

      <dl className="mb-5 space-y-3 text-sm">
        <div>
          <dt className="mb-1 flex items-center gap-1.5 font-medium text-text-muted">
            <MapPin className="h-3.5 w-3.5" aria-hidden />
            Route
          </dt>
          <dd className="text-text-primary">{trip.route}</dd>
        </div>
        <div>
          <dt className="mb-1 flex items-center gap-1.5 font-medium text-text-muted">
            <Wallet className="h-3.5 w-3.5" aria-hidden />
            Budget
          </dt>
          <dd className="font-medium text-primary">{trip.budget}</dd>
        </div>
      </dl>

      <div className="mt-auto border-t border-border-light pt-4">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-text-muted">
          Key highlights
        </p>
        <ul className="space-y-1.5">
          {trip.highlights.map((highlight) => (
            <li
              key={highlight}
              className="flex items-start gap-2 text-sm text-text-secondary"
            >
              <span
                className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                aria-hidden
              />
              {highlight}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}
