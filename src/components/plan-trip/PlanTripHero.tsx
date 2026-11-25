import { Compass } from "lucide-react";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { PLAN_TRIP_PAGE_COPY } from "@/lib/plan-trip-copy";

export default function PlanTripHero() {
  const { hero } = PLAN_TRIP_PAGE_COPY;

  return (
    <section className="relative overflow-hidden bg-primary text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light/80 to-secondary/70" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, white 1px, transparent 1px), radial-gradient(circle at 80% 60%, white 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden
      />

      <Container className="relative py-16 md:py-20 lg:py-24">
        <div className="max-w-3xl">
          <p className="mb-3 inline-flex items-center gap-2 text-sm font-medium text-white/80">
            <Compass className="h-4 w-4" aria-hidden />
            Trip planning made simple
          </p>
          <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            {hero.title}
          </h1>
          <p className="mb-8 text-lg text-white/85 md:text-xl">{hero.subtitle}</p>
          <Button
            size="lg"
            variant="hero"
            href="#trip-planner-tool"
          >
            {hero.cta}
          </Button>
        </div>
      </Container>
    </section>
  );
}
