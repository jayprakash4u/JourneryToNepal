import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import {
  FEATURED_SPIRITUAL_EXPERIENCES,
  FEATURED_SPIRITUAL_EXPERIENCES_SECTION,
} from "@/lib/spiritual-places";

export default function FeaturedSpiritualExperiences() {
  const { title } = FEATURED_SPIRITUAL_EXPERIENCES_SECTION;

  return (
    <Section
      id="featured-spiritual-experiences"
      variant="surface"
      aria-labelledby="featured-spiritual-experiences-heading"
    >
      <Container>
        <div className="mx-auto mb-8 max-w-3xl text-center md:mb-10">
          <h2
            id="featured-spiritual-experiences-heading"
            className="text-2xl font-bold tracking-tight text-primary md:text-3xl lg:text-4xl xl:text-5xl"
          >
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_SPIRITUAL_EXPERIENCES.map((experience) => (
            <Link
              key={experience.slug}
              href={experience.href}
              className="group relative block aspect-[4/5] overflow-hidden rounded-md border border-border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-xl sm:aspect-[3/4]"
            >
              <Image
                src={experience.image}
                alt={experience.title}
                fill
                quality={95}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              />

              <div
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/10 transition-opacity duration-300 group-hover:opacity-70"
                aria-hidden
              />

              <div
                className="absolute inset-0 bg-accent/0 transition-all duration-300 group-hover:bg-accent/35"
                aria-hidden
              />

              <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6">
                <span className="text-2xl md:text-3xl" aria-hidden>
                  {experience.icon}
                </span>
                <h3 className="mt-2 text-xl font-bold tracking-tight text-white md:text-2xl">
                  {experience.title}
                </h3>

                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white/90 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  Explore
                  <ArrowRight
                    className="h-4 w-4 -translate-x-2 transition-transform duration-300 group-hover:translate-x-0"
                    aria-hidden
                  />
                </span>
              </div>

              <span className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/20 bg-black/30 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                <ArrowRight
                  className="h-4 w-4 translate-x-0 transition-transform duration-300 group-hover:translate-x-0.5"
                  aria-hidden
                />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
