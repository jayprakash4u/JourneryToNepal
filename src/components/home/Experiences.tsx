import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { EXPERIENCES } from "@/lib/experiences";
import { HOME_CARD_GRID_CLASS, HOME_CARD_LIMIT } from "@/lib/home-cards";
import ExperienceCard from "./ExperienceCard";
import HomeSectionHeader from "./HomeSectionHeader";
import ViewAllLink from "./ViewAllLink";

export default function Experiences() {
  const experiences = EXPERIENCES.slice(0, HOME_CARD_LIMIT);

  return (
    <Section variant="surface" aria-labelledby="experiences-heading">
      <Container>
        <HomeSectionHeader
          id="experiences-heading"
          eyebrow="Things to do"
          title="Experiences"
          subtitle="Trekking, paragliding, jungle safaris, and cultural tours — find your adventure."
          action={
            <ViewAllLink href="/explore/adventure-trekking">View all experiences</ViewAllLink>
          }
        />

        <div className={HOME_CARD_GRID_CLASS}>
          {experiences.map((experience) => (
            <ExperienceCard key={experience.slug} experience={experience} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
