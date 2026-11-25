import ExploreCard from "@/components/ui/ExploreCard";
import type { Experience } from "@/lib/experiences";

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <ExploreCard
      href={experience.href}
      title={experience.title}
      eyebrow={experience.highlights[0]}
      description={experience.tagline}
      image={experience.image}
      imageAlt={experience.title}
    />
  );
}
