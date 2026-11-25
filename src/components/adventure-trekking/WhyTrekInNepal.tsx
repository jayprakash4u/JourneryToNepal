import { Check } from "lucide-react";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { WHY_TREK_POINTS } from "@/lib/adventure-trekking";

export default function WhyTrekInNepal() {
  return (
    <Section variant="surface" aria-labelledby="why-trek-heading">
      <Container>
        <h2
          id="why-trek-heading"
          className="mb-8 text-center text-2xl font-bold tracking-tight text-primary md:text-3xl"
        >
          Why Trek in Nepal?
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_TREK_POINTS.map((point) => {
            const Icon = point.icon;

            return (
              <article
                key={point.title}
                className="flex flex-col items-center rounded-md border border-border bg-background p-6 text-center shadow-sm"
              >
                <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <div className="mb-2 flex items-center gap-2">
                  <Check className="h-4 w-4 text-accent" aria-hidden />
                  <h3 className="font-semibold text-text-primary">{point.title}</h3>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
