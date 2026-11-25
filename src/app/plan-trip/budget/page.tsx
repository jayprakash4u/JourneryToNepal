"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Header, Footer, Container } from "@/components";
import Button from "@/components/ui/Button";

type BudgetStyle = "low" | "medium" | "luxury";
type Region = "kathmandu" | "pokhara" | "chitwan" | "trekking";

const DAILY_RATES: Record<Region, Record<BudgetStyle, number>> = {
  kathmandu: { low: 35, medium: 65, luxury: 120 },
  pokhara: { low: 30, medium: 55, luxury: 100 },
  chitwan: { low: 40, medium: 75, luxury: 140 },
  trekking: { low: 45, medium: 80, luxury: 150 },
};

const REGION_LABELS: Record<Region, string> = {
  kathmandu: "Kathmandu Valley",
  pokhara: "Pokhara & Lakeside",
  chitwan: "Chitwan & Terai",
  trekking: "Trekking Routes",
};

export default function PlanTripBudgetPage() {
  const [days, setDays] = useState(7);
  const [style, setStyle] = useState<BudgetStyle>("medium");
  const [region, setRegion] = useState<Region>("pokhara");

  const estimate = useMemo(() => {
    const daily = DAILY_RATES[region][style];
    const total = daily * days;
    const buffer = Math.round(total * 0.15);
    return { daily, total, min: total, max: total + buffer };
  }, [days, style, region]);

  return (
    <div className="flex min-h-full flex-col">
      <Header />
      <main className="flex-1">
        <Container className="py-10 lg:py-14">
          <Link
            href="/plan-trip/planner"
            className="mb-6 inline-block text-sm font-medium text-text-secondary hover:text-primary"
          >
            ← Trip planner
          </Link>

          <h1 className="mb-3 text-2xl font-bold text-primary md:text-3xl">Budget Calculator</h1>
          <p className="mb-8 max-w-2xl text-text-secondary">
            Rough daily cost estimates per person — accommodation, food, and local transport.
            Flights and activities are extra.
          </p>

          <div className="mx-auto max-w-xl rounded-md border border-border bg-surface p-6 shadow-sm md:p-8">
            <div className="space-y-6">
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-text-primary">
                  Trip duration: {days} days
                </span>
                <input
                  type="range"
                  min={3}
                  max={14}
                  value={days}
                  onChange={(event) => setDays(Number(event.target.value))}
                  className="w-full accent-primary"
                />
              </label>

              <fieldset>
                <legend className="mb-2 text-sm font-semibold text-text-primary">Budget style</legend>
                <div className="flex flex-wrap gap-2">
                  {(["low", "medium", "luxury"] as const).map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setStyle(option)}
                      className={`rounded-md border px-4 py-2 text-sm font-medium capitalize transition-colors ${
                        style === option
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border text-text-secondary hover:border-primary/30"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </fieldset>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-text-primary">Region</span>
                <select
                  value={region}
                  onChange={(event) => setRegion(event.target.value as Region)}
                  className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-text-primary focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/10"
                >
                  {(Object.keys(REGION_LABELS) as Region[]).map((key) => (
                    <option key={key} value={key}>
                      {REGION_LABELS[key]}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="mt-8 rounded-md bg-primary/5 p-5 text-center">
              <p className="text-sm text-text-muted">Estimated total</p>
              <p className="mt-1 text-3xl font-bold text-primary">
                ${estimate.min}–${estimate.max}
              </p>
              <p className="mt-2 text-sm text-text-secondary">
                ~${estimate.daily}/day in {REGION_LABELS[region]} ({style} budget)
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Button href="/plan-trip/planner#trip-planner-tool" size="lg">
              Generate Full Itinerary
            </Button>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
