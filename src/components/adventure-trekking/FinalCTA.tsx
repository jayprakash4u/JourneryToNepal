import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button";
import { ADVENTURE_FINAL_CTA } from "@/lib/adventure-trekking";

export default function FinalCTA() {
  return (
    <Section variant="primary" aria-labelledby="adventure-final-cta-heading">
      <div className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light/60 to-secondary/80 opacity-90"
          aria-hidden
        />

        <Container className="relative py-section-y">
          <div className="text-center">
            <h2
              id="adventure-final-cta-heading"
              className="text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl"
            >
              {ADVENTURE_FINAL_CTA.title}
            </h2>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                size="lg"
                variant="hero"
                href={ADVENTURE_FINAL_CTA.explore.href}
              >
                {ADVENTURE_FINAL_CTA.explore.label}
              </Button>
              <Button
                size="lg"
                variant="heroOutline"
                href={ADVENTURE_FINAL_CTA.plan.href}
              >
                {ADVENTURE_FINAL_CTA.plan.label}
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </Section>
  );
}
