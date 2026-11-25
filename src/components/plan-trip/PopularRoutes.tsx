import { ArrowRight } from "lucide-react";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { PLAN_TRIP_PAGE_COPY } from "@/lib/plan-trip-copy";
import { POPULAR_ROUTES } from "@/lib/plan-trip-routes";

export default function PopularRoutes() {
  const { routes } = PLAN_TRIP_PAGE_COPY;

  return (
    <Section variant="surface" aria-labelledby="popular-routes-heading">
      <Container>
        <div className="mb-8 text-center md:mb-10">
          <h2
            id="popular-routes-heading"
            className="text-2xl font-bold tracking-tight text-primary md:text-3xl"
          >
            {routes.title}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-text-secondary">{routes.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {POPULAR_ROUTES.map((route) => (
            <article
              key={`${route.from}-${route.to}`}
              className="rounded-md border border-border bg-background p-5 shadow-sm"
            >
              <div className="mb-3 flex items-center gap-2 text-lg font-semibold text-primary">
                <span>{route.from}</span>
                <ArrowRight className="h-4 w-4 text-accent" aria-hidden />
                <span>{route.to}</span>
              </div>
              <dl className="space-y-2 text-sm">
                <div>
                  <dt className="font-medium text-text-muted">Duration</dt>
                  <dd className="text-text-primary">{route.duration}</dd>
                </div>
                <div>
                  <dt className="font-medium text-text-muted">Transport</dt>
                  <dd className="text-text-primary">{route.transport}</dd>
                </div>
                <div>
                  <dt className="font-medium text-text-muted">Why go</dt>
                  <dd className="text-text-secondary">{route.note}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
