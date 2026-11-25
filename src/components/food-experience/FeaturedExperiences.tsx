import Image from "next/image";
import Link from "next/link";
import { ArrowRight, UtensilsCrossed } from "lucide-react";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import {
  FEATURED_EXPERIENCES_SECTION,
  FEATURED_FOOD_EXPERIENCES,
} from "@/lib/food-experience";

function ExperienceImagePlaceholder({ label }: { label: string }) {
  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-primary/15 via-primary/5 to-accent/10"
      aria-hidden
    >
      <UtensilsCrossed className="h-10 w-10 text-primary/35" />
      <span className="px-4 text-center text-xs font-medium text-primary/45">
        Image coming soon
      </span>
      <span className="sr-only">{label}</span>
    </div>
  );
}

export default function FeaturedExperiences() {
  const { title, subtitle } = FEATURED_EXPERIENCES_SECTION;

  return (
    <Section
      id="featured-experiences"
      variant="surface"
      aria-labelledby="featured-experiences-heading"
    >
      <Container>
        <div className="mx-auto mb-8 max-w-2xl text-center md:mb-10">
          <h2
            id="featured-experiences-heading"
            className="text-2xl font-bold tracking-tight text-primary md:text-3xl lg:text-4xl"
          >
            {title}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-text-secondary md:text-lg">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_FOOD_EXPERIENCES.map((experience) => (
            <Link
              key={experience.slug}
              href={experience.href}
              className="group flex flex-col overflow-hidden rounded-md border border-border bg-surface shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-primary/5">
                {experience.image ? (
                  <Image
                    src={experience.image}
                    alt={experience.imageLabel}
                    fill
                    quality={95}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                ) : (
                  <ExperienceImagePlaceholder label={experience.imageLabel} />
                )}
              </div>

              <div className="flex items-center justify-between gap-3 p-5">
                <div className="min-w-0">
                  <p className="text-xs font-medium uppercase tracking-wider text-text-muted">
                    {experience.imageLabel}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-primary">
                    {experience.title}
                  </h3>
                </div>
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border bg-background text-primary transition-all duration-300 group-hover:border-primary/30 group-hover:bg-primary/5">
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
