import Image from "next/image";
import { Landmark, MapPin } from "lucide-react";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button";
import {
  FEATURED_HERITAGE_PLACES,
  type HeritageTag,
} from "@/lib/culture-heritage";
import { classNames } from "@/utils";

const tagStyles: Record<HeritageTag, string> = {
  UNESCO: "border-accent/30 bg-accent/10 text-accent",
  Spiritual: "border-primary/20 bg-primary/10 text-primary",
  Historic: "border-border bg-surface text-text-secondary",
};

function HeritageImagePlaceholder({ name }: { name: string }) {
  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-primary/15 via-primary/5 to-primary/20"
      aria-hidden
    >
      <Landmark className="h-10 w-10 text-primary/35" />
      <span className="px-4 text-center text-xs font-medium text-primary/45">
        Image coming soon
      </span>
      <span className="sr-only">{name}</span>
    </div>
  );
}

export default function FeaturedHeritagePlaces() {
  return (
    <Section
      id="explore-places"
      variant="surface"
      aria-labelledby="featured-heritage-heading"
    >
      <Container>
        <div className="mx-auto mb-8 max-w-2xl text-center md:mb-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-light">
            Highlight Section
          </p>
          <h2
            id="featured-heritage-heading"
            className="mt-2 text-2xl font-bold tracking-tight text-primary md:text-3xl"
          >
            Featured Heritage Places
          </h2>
          <p className="mt-3 text-base leading-relaxed text-text-secondary">
            Explore Nepal&apos;s most iconic temples, stupas, and historic squares
            — each a window into the country&apos;s living culture and heritage.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_HERITAGE_PLACES.map((place) => (
            <article
              key={place.slug}
              className="group flex flex-col overflow-hidden rounded-md border border-border bg-background shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="relative aspect-[4/3] bg-primary/10">
                {place.image ? (
                  <Image
                    src={place.image}
                    alt={place.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <HeritageImagePlaceholder name={place.name} />
                )}
              </div>

              <div className="flex flex-1 flex-col p-5">
                <div className="flex flex-wrap gap-2">
                  {place.tags.map((tag) => (
                    <span
                      key={tag}
                      className={classNames(
                        "rounded-md border px-2 py-0.5 text-xs font-semibold",
                        tagStyles[tag],
                      )}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="mt-3 text-lg font-bold tracking-tight text-primary">
                  {place.name}
                </h3>

                <p className="mt-1 flex items-center gap-1.5 text-sm text-text-secondary">
                  <MapPin
                    className="h-3.5 w-3.5 shrink-0 text-primary-light"
                    aria-hidden
                  />
                  {place.location}
                </p>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-text-secondary">
                  {place.description}
                </p>

                <Button href={place.href} variant="outline" className="mt-4 w-full">
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
