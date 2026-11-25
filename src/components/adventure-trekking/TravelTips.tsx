import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { TRAVEL_TIPS } from "@/lib/adventure-trekking";

export default function TravelTips() {
  return (
    <Section aria-labelledby="travel-tips-heading">
      <Container>
        <h2
          id="travel-tips-heading"
          className="mb-8 text-2xl font-bold tracking-tight text-primary md:text-3xl"
        >
          Travel Tips
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TRAVEL_TIPS.map((tip) => {
            const Icon = tip.icon;

            return (
              <article
                key={tip.title}
                className="rounded-md border border-border bg-surface p-5 shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-md bg-accent/10 text-accent">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="font-semibold text-primary">{tip.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {tip.description}
                </p>
              </article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
