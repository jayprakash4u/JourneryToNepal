import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { POPULAR_REGIONS } from "@/lib/adventure-trekking";

export default function PopularRegions() {
  return (
    <Section variant="surface" aria-labelledby="popular-regions-heading">
      <Container>
        <h2
          id="popular-regions-heading"
          className="mb-8 text-2xl font-bold tracking-tight text-primary md:mb-10 md:text-3xl"
        >
          Popular Regions
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {POPULAR_REGIONS.map((region) => (
            <Link
              key={region.slug}
              href={region.href}
              className="group relative overflow-hidden rounded-md border border-border shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="relative aspect-[16/10] bg-primary/10">
                <Image
                  src={region.image}
                  alt={region.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-5">
                <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-white/70">
                  {region.trekCount} treks
                </p>
                <h3 className="text-xl font-semibold text-white">{region.title}</h3>
                <p className="mt-1 text-sm text-white/80">{region.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
