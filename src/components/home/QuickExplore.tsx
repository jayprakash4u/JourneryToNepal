import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { EXPLORE_CATEGORIES } from "@/lib/categories";
import { HOME_CARD_GRID_CLASS, HOME_CARD_LIMIT } from "@/lib/home-cards";
import CategoryCard from "./CategoryCard";
import HomeSectionHeader from "./HomeSectionHeader";
import ViewAllLink from "./ViewAllLink";

export default function QuickExplore() {
  const categories = EXPLORE_CATEGORIES.slice(0, HOME_CARD_LIMIT);

  return (
    <Section aria-labelledby="quick-explore-heading">
      <Container>
        <HomeSectionHeader
          id="quick-explore-heading"
          eyebrow="Start exploring"
          title="Quick Explore"
          subtitle="Jump into Nepal by theme — adventure, culture, food, wildlife, and more."
          action={<ViewAllLink href="/explore/districts">Browse all districts</ViewAllLink>}
        />

        <div className={HOME_CARD_GRID_CLASS}>
          {categories.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
