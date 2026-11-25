import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import {
  FEATURED_DESTINATIONS,
  FEATURED_DESTINATIONS_VIEW_ALL,
} from "@/lib/destinations";
import { HOME_CARD_GRID_CLASS, HOME_CARD_LIMIT } from "@/lib/home-cards";
import DestinationCard from "./DestinationCard";
import HomeSectionHeader from "./HomeSectionHeader";
import ViewAllLink from "./ViewAllLink";

export default function FeaturedDestinations() {
  const destinations = FEATURED_DESTINATIONS.slice(0, HOME_CARD_LIMIT);

  return (
    <Section variant="surface" aria-labelledby="featured-destinations-heading">
      <Container>
        <HomeSectionHeader
          id="featured-destinations-heading"
          eyebrow="Top picks"
          title="Featured Destinations"
          subtitle="Iconic places every traveler should see — from lakeside Pokhara to sacred Lumbini."
          action={<ViewAllLink href={FEATURED_DESTINATIONS_VIEW_ALL}>View all destinations</ViewAllLink>}
        />

        <div className={HOME_CARD_GRID_CLASS}>
          {destinations.map((destination) => (
            <DestinationCard key={destination.slug} destination={destination} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
