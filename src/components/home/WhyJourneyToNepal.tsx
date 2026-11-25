import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { TRUST_POINTS } from "@/lib/trust";
import HomeSectionHeader from "./HomeSectionHeader";
import TrustPointCard from "./TrustPointCard";

export default function WhyJourneyToNepal() {
  return (
    <Section variant="muted" aria-labelledby="why-journey-heading">
      <Container>
        <HomeSectionHeader
          id="why-journey-heading"
          align="center"
          eyebrow="Why us"
          title="Why JourneyToNepal"
          subtitle="Built for travelers who want authentic discovery — not just another generic travel list."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST_POINTS.map((point) => (
            <TrustPointCard key={point.title} point={point} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
