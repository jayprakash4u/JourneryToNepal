import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import {
  EXPLORE_BY_REGION_CARDS,
  EXPLORE_BY_REGION_SECTION,
} from "@/lib/food-experience";

export default function ExploreByRegion() {
  const { title, subtitle } = EXPLORE_BY_REGION_SECTION;

  return (
    <Section variant="surface" aria-labelledby="explore-by-region-heading">
      <Container>
        <div className="mx-auto mb-8 max-w-2xl text-center md:mb-10">
          <h2
            id="explore-by-region-heading"
            className="text-2xl font-bold tracking-tight text-primary md:text-3xl lg:text-4xl"
          >
            {title}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-text-secondary md:text-lg">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {EXPLORE_BY_REGION_CARDS.map((card) => (
            <Link
              key={card.slug}
              href={card.href}
              className="group relative block h-[320px] overflow-hidden rounded-3xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <Image
                src={card.image}
                alt={`${card.region} — ${card.highlight}`}
                fill
                quality={95}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />

              <div
                className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent transition-all duration-300 group-hover:from-black/90 group-hover:via-black/45"
                aria-hidden
              />

              <div className="absolute inset-x-0 bottom-0 z-10 p-6">
                <h3 className="text-2xl font-bold tracking-tight text-white">
                  {card.region}
                </h3>

                <p className="mt-1.5 text-sm font-medium text-white/90">
                  {card.highlight}
                </p>

                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-white/75">
                  {card.description}
                </p>

                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-white">
                  Learn More
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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
