import Image from "next/image";
import { MapPin, Star } from "lucide-react";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button";
import { FEATURED_ADVENTURES } from "@/lib/adventure-trekking";

export default function FeaturedAdventures() {
  return (
    <Section id="featured-adventures" aria-labelledby="featured-adventures-heading">
      <Container>
        <h2
          id="featured-adventures-heading"
          className="mb-8 text-2xl font-bold tracking-tight text-primary md:mb-10 md:text-3xl"
        >
          Featured Adventures
        </h2>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {FEATURED_ADVENTURES.map((adventure) => (
            <article
              key={adventure.slug}
              className="group flex flex-col overflow-hidden rounded-md border border-border bg-surface shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="relative aspect-[4/3] bg-primary/10">
                <Image
                  src={adventure.image}
                  alt={adventure.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-md bg-black/50 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                  {adventure.difficulty}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-bold uppercase tracking-wide text-primary">
                  {adventure.title}
                </h3>

                <div className="mt-2 flex items-center gap-0.5" aria-label={`${adventure.rating} out of 5 stars`}>
                  {Array.from({ length: adventure.rating }).map((_, index) => (
                    <Star
                      key={index}
                      className="h-3.5 w-3.5 fill-accent text-accent"
                      aria-hidden
                    />
                  ))}
                </div>

                <dl className="mt-3 space-y-1.5 text-sm">
                  <div className="flex justify-between gap-2">
                    <dt className="text-text-muted">Duration</dt>
                    <dd className="font-medium text-text-primary">{adventure.duration}</dd>
                  </div>
                  <div className="flex justify-between gap-2">
                    <dt className="text-text-muted">Season</dt>
                    <dd className="text-text-primary">{adventure.season}</dd>
                  </div>
                  <div className="flex items-center gap-1.5 text-text-secondary">
                    <MapPin className="h-3.5 w-3.5 shrink-0 text-primary-light" aria-hidden />
                    {adventure.region}
                  </div>
                </dl>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-text-secondary">
                  {adventure.description}
                </p>

                <Button href={adventure.href} variant="outline" className="mt-4 w-full">
                  View Details
                </Button>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
