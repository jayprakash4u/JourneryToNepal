import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import ExploreCard from "@/components/ui/ExploreCard";
import {
  HIMALAYAN_VILLAGES,
  HIMALAYAN_VILLAGES_PREVIEW_LIMIT,
  HIMALAYAN_VILLAGES_VIEW_ALL,
} from "@/lib/himalayan-villages";
import { HOME_CARD_GRID_CLASS } from "@/lib/home-cards";
import HomeSectionHeader from "./HomeSectionHeader";
import ViewAllLink from "./ViewAllLink";

export default function HimalayanVillages() {
  const villages = HIMALAYAN_VILLAGES.slice(0, HIMALAYAN_VILLAGES_PREVIEW_LIMIT);

  return (
    <Section id="himalayan-villages" aria-labelledby="himalayan-villages-heading">
      <Container>
        <HomeSectionHeader
          id="himalayan-villages-heading"
          eyebrow="Mountain life"
          title="Explore Himalayan Villages"
          subtitle="Stone lanes, prayer flags, and warm hospitality in Nepal's highland communities."
          action={<ViewAllLink href={HIMALAYAN_VILLAGES_VIEW_ALL}>View all villages</ViewAllLink>}
        />

        <div className={HOME_CARD_GRID_CLASS}>
          {villages.map((village) => (
            <ExploreCard
              key={village.slug}
              href={village.href}
              title={village.name}
              eyebrow={village.highlights[0]}
              description={village.highlights.slice(1).join(" · ")}
              image={village.image}
              imageAlt={village.name}
              ctaLabel="Explore village"
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
