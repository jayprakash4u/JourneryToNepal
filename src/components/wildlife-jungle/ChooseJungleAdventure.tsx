import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import {
  CHOOSE_JUNGLE_ADVENTURE_SECTION,
  JUNGLE_ADVENTURE_ACTIVITIES,
} from "@/lib/wildlife-jungle";

export default function ChooseJungleAdventure() {
  const { eyebrow, title, subtitle } = CHOOSE_JUNGLE_ADVENTURE_SECTION;

  return (
    <Section
      id="choose-jungle-adventure"
      variant="surface"
      aria-labelledby="choose-jungle-adventure-heading"
    >
      <Container>
        <div className="mx-auto mb-8 max-w-2xl text-center md:mb-10">
          <p className="text-sm font-medium tracking-wide text-accent">{eyebrow}</p>
          <h2
            id="choose-jungle-adventure-heading"
            className="mt-2 text-2xl font-bold tracking-tight text-primary md:text-3xl lg:text-4xl"
          >
            {title}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-text-secondary md:text-lg">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {JUNGLE_ADVENTURE_ACTIVITIES.map((activity) => (
            <Link
              key={activity.slug}
              href={activity.href}
              className="group flex flex-col overflow-hidden rounded-md border border-border bg-surface shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-primary/5">
                <Image
                  src={activity.image}
                  alt={activity.title}
                  fill
                  quality={95}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-xs font-medium uppercase tracking-wider text-text-muted">
                      {activity.tagline}
                    </p>
                    <h3 className="mt-1 text-lg font-semibold text-primary">{activity.title}</h3>
                  </div>
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border bg-background text-primary transition-all duration-300 group-hover:border-primary/30 group-hover:bg-primary/5">
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  </span>
                </div>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-text-secondary">
                  {activity.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
