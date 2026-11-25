import { Star } from "lucide-react";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { TREK_SEASONS } from "@/lib/adventure-trekking";

export default function BestTimeToVisit() {
  return (
    <Section variant="muted" aria-labelledby="best-time-heading">
      <Container>
        <h2
          id="best-time-heading"
          className="mb-8 text-2xl font-bold tracking-tight text-primary md:text-3xl"
        >
          Best Time to Visit
        </h2>

        <div className="grid grid-cols-1 gap-0 divide-y divide-border rounded-md border border-border bg-surface shadow-sm md:grid-cols-4 md:divide-x md:divide-y-0">
          {TREK_SEASONS.map((season) => (
            <article key={season.name} className="p-6">
              <h3 className="text-lg font-bold text-primary">{season.name}</h3>
              <p className="mt-1 text-sm text-text-muted">{season.months}</p>

              <div className="mt-3 flex items-center gap-0.5" aria-label={`${season.rating} out of 5`}>
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className={`h-3.5 w-3.5 ${
                      index < season.rating
                        ? "fill-accent text-accent"
                        : "fill-border text-border"
                    }`}
                    aria-hidden
                  />
                ))}
              </div>

              <ul className="mt-4 space-y-1.5">
                {season.highlights.map((highlight) => (
                  <li key={highlight} className="text-sm text-text-secondary">
                    {highlight}
                  </li>
                ))}
              </ul>

              {season.note && (
                <p className="mt-3 text-xs font-medium text-text-muted">{season.note}</p>
              )}
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
