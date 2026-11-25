import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Landmark, MapPin } from "lucide-react";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import {
  SACRED_DESTINATIONS,
  SACRED_DESTINATIONS_SECTION,
} from "@/lib/spiritual-places";

export default function SacredDestinations() {
  const { title, subtitle } = SACRED_DESTINATIONS_SECTION;

  return (
    <Section
      id="sacred-destinations"
      aria-labelledby="sacred-destinations-heading"
    >
      <Container>
        <div className="mx-auto mb-8 max-w-2xl text-center md:mb-10">
          <h2
            id="sacred-destinations-heading"
            className="text-2xl font-bold tracking-tight text-primary md:text-3xl lg:text-4xl"
          >
            {title}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-text-secondary md:text-lg">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SACRED_DESTINATIONS.map((destination) => (
            <Link
              key={destination.slug}
              href={destination.href}
              className="group flex flex-col overflow-hidden rounded-md border border-border bg-surface shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-primary/5">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  quality={95}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                {destination.unesco && (
                  <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-md border border-accent/30 bg-accent/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                    <Landmark className="h-3 w-3" aria-hidden />
                    UNESCO
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-bold text-primary">{destination.name}</h3>

                <p className="mt-1.5 flex items-center gap-1.5 text-sm text-text-secondary">
                  <MapPin className="h-3.5 w-3.5 shrink-0 text-primary-light" aria-hidden />
                  {destination.province}
                </p>

                <dl className="mt-4 space-y-2 border-t border-border-light pt-4 text-sm">
                  <div className="flex justify-between gap-3">
                    <dt className="text-text-muted">Religion</dt>
                    <dd className="font-medium text-text-primary">{destination.religion}</dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt className="text-text-muted">Best Time</dt>
                    <dd className="font-medium text-secondary">{destination.bestTime}</dd>
                  </div>
                </dl>

                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors group-hover:text-accent">
                  Explore
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
