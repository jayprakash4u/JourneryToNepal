import Link from "next/link";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { PLAN_TRIP_PAGE_COPY } from "@/lib/plan-trip-copy";
import { TRAVEL_TOOLS } from "@/lib/plan-trip-tools";

export default function TravelTools() {
  const { tools } = PLAN_TRIP_PAGE_COPY;

  return (
    <Section aria-labelledby="travel-tools-heading">
      <Container>
        <div className="mb-8 text-center md:mb-10">
          <h2
            id="travel-tools-heading"
            className="text-2xl font-bold tracking-tight text-primary md:text-3xl"
          >
            {tools.title}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-text-secondary">{tools.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TRAVEL_TOOLS.map((tool) => {
            const Icon = tool.icon;

            return (
              <Link
                key={tool.href}
                href={tool.href}
                className="group flex flex-col rounded-md border border-border bg-surface p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-md"
              >
                <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-md bg-accent/10 text-accent transition-colors group-hover:bg-accent/15">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mb-2 font-semibold text-primary">{tool.title}</h3>
                <p className="text-sm leading-relaxed text-text-secondary">{tool.description}</p>
              </Link>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
