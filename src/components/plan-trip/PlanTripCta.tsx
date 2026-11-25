import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button";
import { PLAN_TRIP_PAGE_COPY } from "@/lib/plan-trip-copy";
import { BEST_TIME_TO_VISIT } from "@/lib/plan-trip-tools";

export default function PlanTripCta() {
  const { cta } = PLAN_TRIP_PAGE_COPY;

  return (
    <>
      <Section id="best-time" variant="muted" aria-labelledby="best-time-heading">
        <Container narrow>
          <div className="mb-6 text-center">
            <h2
              id="best-time-heading"
              className="text-xl font-bold text-primary md:text-2xl"
            >
              Best Time to Visit Nepal
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {BEST_TIME_TO_VISIT.map((item) => (
              <article
                key={item.season}
                className="rounded-md border border-border bg-surface p-4 shadow-sm"
              >
                <h3 className="font-semibold text-primary">{item.season}</h3>
                <p className="mt-1 text-sm text-text-secondary">{item.detail}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section variant="primary" aria-labelledby="plan-trip-cta-heading">
        <Container>
          <div className="text-center">
            <h2
              id="plan-trip-cta-heading"
              className="text-2xl font-bold tracking-tight md:text-3xl"
            >
              {cta.title}
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-white/85">{cta.subtitle}</p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                size="lg"
                variant="hero"
                href="#trip-planner-tool"
              >
                {cta.primary}
              </Button>
              <Button
                size="lg"
                variant="heroOutline"
                href={`/sign-in?redirect=${encodeURIComponent("/plan-trip/planner#trip-planner-tool")}`}
              >
                {cta.save}
              </Button>
              <Button
                size="lg"
                variant="heroOutline"
                href="/plan-trip/routes"
              >
                {cta.book}
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
