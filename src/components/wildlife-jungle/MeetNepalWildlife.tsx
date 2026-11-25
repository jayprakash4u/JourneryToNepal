import Image from "next/image";
import Link from "next/link";
import { ArrowRight, PawPrint, Shield } from "lucide-react";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import {
  MEET_NEPAL_WILDLIFE_SECTION,
  NEPAL_WILDLIFE_SPECIES,
  type ConservationStatus,
  type NepalWildlifeSpecies,
} from "@/lib/wildlife-jungle";
import { classNames } from "@/utils";

const conservationStyles: Record<ConservationStatus, string> = {
  "Critically Endangered": "text-red-700",
  Endangered: "text-orange-700",
  Vulnerable: "text-amber-700",
  "Least Concern": "text-emerald-700",
};

function WildlifeCard({ species }: { species: NepalWildlifeSpecies }) {
  return (
    <Link
      href={species.href}
      className="group flex flex-col overflow-hidden rounded-md border border-border bg-surface shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-secondary/30 hover:shadow-lg"
    >
      <div className="relative aspect-square overflow-hidden bg-primary/5">
        <Image
          src={species.image}
          alt={species.name}
          fill
          quality={95}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-base font-bold text-primary">{species.name}</h3>

        <div className="mt-3 flex items-center justify-between gap-2">
          <div className="flex min-w-0 flex-wrap items-center gap-x-3 gap-y-1 text-xs text-text-secondary">
            <span className="inline-flex items-center gap-1">
              <PawPrint className="h-3 w-3 shrink-0 text-text-muted" aria-hidden />
              {species.rarity}
            </span>
            <span
              className={classNames(
                "inline-flex items-center gap-1 font-medium",
                conservationStyles[species.conservationStatus]
              )}
            >
              <Shield className="h-3 w-3 shrink-0" aria-hidden />
              {species.conservationStatus}
            </span>
          </div>

          <span className="inline-flex shrink-0 items-center gap-0.5 text-xs font-semibold text-secondary">
            Learn More
            <ArrowRight
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
              aria-hidden
            />
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function MeetNepalWildlife() {
  const { titlePrefix, titleHighlight, subtitle } = MEET_NEPAL_WILDLIFE_SECTION;

  return (
    <Section
      variant="muted"
      aria-labelledby="meet-nepal-wildlife-heading"
    >
      <Container>
        <div className="mx-auto mb-8 max-w-2xl text-center md:mb-10">
          <h2
            id="meet-nepal-wildlife-heading"
            className="text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl"
          >
            <span className="text-primary">{titlePrefix} </span>
            <span className="text-secondary">{titleHighlight}</span>
          </h2>

          <div className="mt-5 flex items-center justify-center gap-3" aria-hidden>
            <span className="h-px w-10 bg-border md:w-16" />
            <PawPrint className="h-4 w-4 text-secondary" />
            <span className="h-px w-10 bg-border md:w-16" />
          </div>

          <p className="mt-5 text-base leading-relaxed text-text-secondary md:text-lg">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {NEPAL_WILDLIFE_SPECIES.map((species) => (
            <WildlifeCard key={species.slug} species={species} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
