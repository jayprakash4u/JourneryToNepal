import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, PawPrint, Trees } from "lucide-react";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import {
  NEPAL_NATIONAL_PARKS,
  NEPAL_NATIONAL_PARKS_SECTION,
  type NationalPark,
} from "@/lib/wildlife-jungle";

const wildlifeEmojis: Record<string, string> = {
  Tiger: "🐅",
  "One-horned Rhino": "🦏",
  Crocodile: "🐊",
  Elephant: "🐘",
  Leopard: "🐆",
  Birds: "🐦",
  "Wild Buffalo": "🐃",
  Wetlands: "🌿",
  "Swamp Deer": "🦌",
  "Sloth Bear": "🐻",
};

function ParkImage({ park }: { park: NationalPark }) {
  if (park.image) {
    return (
      <Image
        src={park.image}
        alt={park.name}
        fill
        quality={95}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
      />
    );
  }

  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-secondary/20 via-primary/10 to-accent/10"
      aria-hidden
    >
      <Trees className="h-10 w-10 text-secondary/50" />
      <span className="px-4 text-center text-xs font-medium text-primary/45">
        Image coming soon
      </span>
    </div>
  );
}

export default function NepalNationalParks() {
  const { titlePrefix, titleHighlight, subtitle } = NEPAL_NATIONAL_PARKS_SECTION;

  return (
    <Section id="national-parks" aria-labelledby="national-parks-heading">
      <Container>
        <div className="mx-auto mb-8 max-w-2xl text-center md:mb-10">
          <h2
            id="national-parks-heading"
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

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {NEPAL_NATIONAL_PARKS.map((park) => (
            <Link
              key={park.slug}
              href={park.href}
              className="group flex flex-col overflow-hidden rounded-md border border-border bg-surface shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-secondary/30 hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-primary/5">
                <ParkImage park={park} />
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-bold text-primary">{park.name}</h3>

                <p className="mt-1.5 flex items-center gap-1.5 text-sm text-text-secondary">
                  <MapPin className="h-3.5 w-3.5 shrink-0 text-secondary" aria-hidden />
                  {park.province}
                </p>

                <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                  {park.wildlife.map((species) => (
                    <li
                      key={species}
                      className="inline-flex items-center gap-1.5 text-xs text-text-secondary"
                    >
                      <span aria-hidden>{wildlifeEmojis[species] ?? "🌿"}</span>
                      {species}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex items-end justify-between gap-3 border-t border-border-light pt-4">
                  <p className="text-sm">
                    <span className="text-text-muted">Best Time: </span>
                    <span className="font-semibold text-secondary">{park.bestTime}</span>
                  </p>
                  <span className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-secondary transition-colors group-hover:text-secondary/80">
                    Explore
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
