"use client";

import { useRef, useState } from "react";
import { Sparkles } from "lucide-react";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button";
import { PLAN_TRIP_PAGE_COPY } from "@/lib/plan-trip-copy";
import {
  BUDGET_OPTIONS,
  DURATION_OPTIONS,
  INTEREST_OPTIONS,
  STYLE_OPTIONS,
  generateTripPlan,
  type TripBudget,
  type TripDuration,
  type TripInterest,
  type TravelStyle,
} from "@/lib/plan-trip-planner";
import GeneratedPlanDisplay from "./GeneratedPlanDisplay";
import PlanStepOptions from "./PlanStepOptions";

export default function TripPlannerTool() {
  const resultRef = useRef<HTMLDivElement>(null);
  const [interest, setInterest] = useState<TripInterest | null>(null);
  const [duration, setDuration] = useState<TripDuration | null>(null);
  const [budget, setBudget] = useState<TripBudget | null>(null);
  const [style, setStyle] = useState<TravelStyle | null>(null);
  const [plan, setPlan] = useState<ReturnType<typeof generateTripPlan> | null>(null);

  const input = { interest, duration, budget, style };
  const canGenerate =
    interest !== null &&
    duration !== null &&
    budget !== null &&
    style !== null;

  const handleGenerate = () => {
    if (
      interest === null ||
      duration === null ||
      budget === null ||
      style === null
    ) {
      return;
    }

    const generated = generateTripPlan({ interest, duration, budget, style });
    setPlan(generated);

    requestAnimationFrame(() => {
      resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  const handleReset = () => {
    setInterest(null);
    setDuration(null);
    setBudget(null);
    setStyle(null);
    setPlan(null);
  };

  const { planner } = PLAN_TRIP_PAGE_COPY;

  return (
    <Section id="trip-planner-tool" variant="surface" aria-labelledby="trip-planner-heading">
      <Container>
        <div className="mb-8 text-center md:mb-10">
          <p className="mb-2 inline-flex items-center gap-2 text-sm font-medium text-accent">
            <Sparkles className="h-4 w-4" aria-hidden />
            Main feature
          </p>
          <h2
            id="trip-planner-heading"
            className="text-2xl font-bold tracking-tight text-primary md:text-3xl"
          >
            {planner.title}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-text-secondary">{planner.subtitle}</p>
        </div>

        <div className="mx-auto max-w-3xl rounded-md border border-border bg-background p-6 shadow-sm md:p-8">
          <div className="space-y-8">
            <PlanStepOptions
              label={`Step 1 — ${planner.steps.interest}`}
              options={INTEREST_OPTIONS}
              value={interest}
              onChange={setInterest}
            />
            <PlanStepOptions
              label={`Step 2 — ${planner.steps.duration}`}
              options={DURATION_OPTIONS}
              value={duration}
              onChange={setDuration}
            />
            <PlanStepOptions
              label={`Step 3 — ${planner.steps.budget}`}
              options={BUDGET_OPTIONS}
              value={budget}
              onChange={setBudget}
            />
            <PlanStepOptions
              label={`Step 4 — ${planner.steps.style}`}
              options={STYLE_OPTIONS}
              value={style}
              onChange={setStyle}
            />
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              type="button"
              size="lg"
              className="sm:flex-1"
              disabled={!canGenerate}
              onClick={handleGenerate}
            >
              {planner.generate}
            </Button>
            {plan && (
              <Button type="button" variant="outline" size="lg" onClick={handleReset}>
                {planner.reset}
              </Button>
            )}
          </div>
        </div>

        {plan && (
          <div ref={resultRef} className="mx-auto mt-8 max-w-3xl scroll-mt-24">
            <GeneratedPlanDisplay plan={plan} onReset={handleReset} />
          </div>
        )}
      </Container>
    </Section>
  );
}
