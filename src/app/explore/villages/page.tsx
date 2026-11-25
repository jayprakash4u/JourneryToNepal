import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ImageIcon, MapPin, Mountain } from "lucide-react";
import { Header, Footer } from "@/components";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button";
import { HIMALAYAN_VILLAGES } from "@/lib/himalayan-villages";

export const metadata: Metadata = {
  title: "Himalayan Villages | Journey to Nepal",
  description:
    "Explore beautiful Himalayan villages of Nepal including Marpha, Ghandruk, Namche Bazaar, Bandipur, Kagbeni, and more.",
};

function VillageImagePlaceholder({ name }: { name: string }) {
  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-primary/20 via-primary-light/10 to-secondary/20"
      aria-hidden
    >
      <ImageIcon className="h-9 w-9 text-primary/35" />
      <span className="px-4 text-center text-xs font-medium text-primary/45">
        Image coming soon
      </span>
      <span className="sr-only">{name}</span>
    </div>
  );
}

export default function HimalayanVillagesPage() {
  return (
    <div className="flex min-h-full flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative flex min-h-[70vh] items-end overflow-hidden">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster={HIMALAYAN_VILLAGES.find((v) => v.image)?.image}
          >
            <source
              src={encodeURI("/images/Villages/13091628_3840_2160_30fps.mp4")}
              type="video/mp4"
            />
          </video>
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30"
            aria-hidden
          />

          <Container className="relative z-10 pb-14 pt-28 sm:pb-20 sm:pt-32">
            <Link
              href="/#himalayan-villages"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/90 hover:text-white hover:underline"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              Back to Homepage
            </Link>

            <div className="mt-6 max-w-3xl">
              <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-white/80">
                <Mountain className="h-4 w-4" aria-hidden />
                Mountain Life
              </p>
              <h1 className="mt-3 text-3xl font-bold tracking-tight text-white drop-shadow-md sm:text-4xl md:text-5xl">
                Beautiful Himalayan Villages of Nepal
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
                Discover peaceful mountain settlements, cultural towns, and trekking
                villages where local life, Himalayan views, and heritage come together.
              </p>
            </div>
          </Container>
        </section>

        <Section variant="surface">
          <Container>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {HIMALAYAN_VILLAGES.map((village, index) => (
                <article
                  id={village.slug}
                  key={village.slug}
                  className="group scroll-mt-28 overflow-hidden rounded-xl border border-border bg-background shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="relative aspect-[4/3] bg-primary/10">
                    {village.image ? (
                      <Image
                        src={village.image}
                        alt={village.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <VillageImagePlaceholder name={village.name} />
                    )}
                    <span className="absolute left-3 top-3 z-10 rounded-md bg-white/90 px-2.5 py-1 text-xs font-bold text-primary shadow-sm backdrop-blur-sm">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="flex h-full flex-col p-5">
                    <h2 className="text-lg font-bold tracking-tight text-primary">
                      {village.name}
                    </h2>
                    <p className="mt-1 flex items-center gap-1.5 text-sm text-text-secondary">
                      <MapPin className="h-3.5 w-3.5 shrink-0 text-primary-light" aria-hidden />
                      {village.region}
                    </p>

                    <div className="mt-4">
                      <p className="text-sm font-semibold text-text-primary">
                        Famous for:
                      </p>
                      <ul className="mt-2 space-y-1.5">
                        {village.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex gap-2 text-sm leading-relaxed text-text-secondary"
                          >
                            <span className="shrink-0 text-accent" aria-hidden>
                              •
                            </span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button href={village.href} variant="outline" className="mt-5 w-full">
                      View Details
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
