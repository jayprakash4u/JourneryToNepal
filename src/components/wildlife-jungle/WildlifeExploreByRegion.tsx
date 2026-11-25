import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, PawPrint } from "lucide-react";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import {
  WILDLIFE_EXPLORE_BY_REGION,
  WILDLIFE_EXPLORE_BY_REGION_SECTION,
  type WildlifeRegion,
} from "@/lib/wildlife-jungle";

const wildlifeEmojis: Record<string, string> = {
  Tiger: "🐅",
  Rhino: "🦏",
  Elephant: "🐘",
  Crocodile: "🐊",
  Leopard: "🐆",
  Birds: "🐦",
  "Wild Buffalo": "🐃",
  Wetlands: "🌿",
  "Swamp Deer": "🦌",
  "Snow Leopard": "🐆",
  "Musk Deer": "🦌",
  "Blue Sheep": "🐑",
  "Red Panda": "🐼",
};

function RegionCard({ region }: { region: WildlifeRegion }) {
  return (
    <Link
      href={region.href}
      className="group relative block min-h-[260px] overflow-hidden rounded-md border border-border shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-secondary/40 hover:shadow-lg md:min-h-[220px]"
    >
      <Image
        src={region.image}
        alt={region.region}
        fill
        quality={95}
        sizes="100vw"
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
      />

      <div
        className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/75 transition-all duration-300 group-hover:from-black/90 group-hover:via-black/60"
        aria-hidden
      />

      <div className="relative z-10 flex h-full min-h-[260px] flex-col justify-between gap-6 p-6 md:min-h-[220px] md:flex-row md:items-center">
        <div className="max-w-xl">
          <h3 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
            {region.region}
          </h3>
          <p className="mt-2 flex items-center gap-1.5 text-sm font-medium text-secondary">
            <MapPin className="h-4 w-4 shrink-0" aria-hidden />
            {region.location}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-white/85 md:text-base">
            {region.description}
          </p>
        </div>

        <div className="flex shrink-0 flex-col items-start gap-5 md:items-end">
          <ul className="space-y-2">
            {region.wildlife.map((species) => (
              <li
                key={species}
                className="flex items-center gap-2 text-sm text-white/90"
              >
                <span aria-hidden>{wildlifeEmojis[species] ?? "🌿"}</span>
                {species}
              </li>
            ))}
          </ul>

          <span className="inline-flex items-center gap-2 rounded-md bg-secondary px-5 py-2.5 text-sm font-semibold text-white transition-colors group-hover:bg-secondary/90">
            Explore Region
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
              aria-hidden
            />
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function WildlifeExploreByRegion() {
  const { titlePrefix, titleHighlight, subtitle } = WILDLIFE_EXPLORE_BY_REGION_SECTION;

  return (
    <Section aria-labelledby="wildlife-explore-by-region-heading">
      <Container>
        <div className="mx-auto mb-8 max-w-2xl text-center md:mb-10">
          <h2
            id="wildlife-explore-by-region-heading"
            className="text-2xl font-bold uppercase tracking-tight md:text-3xl lg:text-4xl"
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

        <div className="flex flex-col gap-5">
          {WILDLIFE_EXPLORE_BY_REGION.map((region) => (
            <RegionCard key={region.slug} region={region} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
