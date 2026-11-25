import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import CommunityPlaceCard from "@/components/community/CommunityPlaceCard";
import { getSubmissionsByStatus } from "@/lib/submissions-store";
import { HOME_CARD_GRID_CLASS, HOME_CARD_LIMIT } from "@/lib/home-cards";
import HomeSectionHeader from "./HomeSectionHeader";
import ViewAllLink from "./ViewAllLink";

export default async function CommunityPicks() {
  const places = (await getSubmissionsByStatus("approved")).slice(0, HOME_CARD_LIMIT);

  if (places.length === 0) return null;

  return (
    <Section variant="surface" aria-labelledby="community-picks-heading">
      <Container>
        <HomeSectionHeader
          id="community-picks-heading"
          eyebrow="Community"
          title="Community Picks"
          subtitle="Real places recommended by travelers who have been there."
          action={<ViewAllLink href="/community">View all picks</ViewAllLink>}
        />

        <div className={HOME_CARD_GRID_CLASS}>
          {places.map((place) => (
            <CommunityPlaceCard key={place.id} place={place} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
