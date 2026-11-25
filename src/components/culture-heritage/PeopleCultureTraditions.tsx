import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Church,
  Heart,
  Languages,
  MapPin,
  Sparkles,
  Users,
} from "lucide-react";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button";
import {
  NEPAL_ETHNIC_CULTURES,
  NEPAL_LANGUAGES,
  NEPAL_RELIGIONS,
  NEPAL_TRADITIONS,
  PEOPLE_CULTURE_SECTION,
  type NepalEthnicCulture,
  type NepalTradition,
} from "@/lib/culture-heritage";
import { TOTAL_ETHNIC_COMMUNITIES } from "@/lib/nepal-ethnic-communities";
import { classNames } from "@/utils";

function CultureImagePlaceholder({ name }: { name: string }) {
  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-accent/20 via-[#f5ebe0] to-primary/10"
      aria-hidden
    >
      <Users className="h-9 w-9 text-primary/30" />
      <span className="px-3 text-center text-xs font-medium text-primary/40">
        Image coming soon
      </span>
      <span className="sr-only">{name}</span>
    </div>
  );
}

function PreviewCultureCard({ culture }: { culture: NepalEthnicCulture }) {
  return (
    <article
      className={classNames(
        "group flex w-[85vw] max-w-[18rem] shrink-0 snap-center flex-col overflow-hidden rounded-xl",
        "border border-[#e8dfd3] bg-white shadow-sm transition-all duration-300",
        "hover:-translate-y-1 hover:shadow-md",
        "sm:w-auto sm:max-w-none",
      )}
    >
      <div className="relative aspect-[4/3] bg-[#f5ebe0]">
        {culture.image ? (
          <Image
            src={culture.image}
            alt={culture.name}
            fill
            sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <CultureImagePlaceholder name={culture.name} />
        )}
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="text-base font-bold tracking-tight text-primary sm:text-lg">
          {culture.name}
        </h3>

        <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-text-secondary">
          {culture.tagline}
        </p>

        <p className="mt-3 flex items-center gap-1.5 text-sm text-text-secondary">
          <MapPin className="h-3.5 w-3.5 shrink-0 text-accent" aria-hidden />
          {culture.region}
        </p>

        <Link
          href={culture.href}
          className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-accent"
        >
          Explore
          <ArrowRight className="h-3.5 w-3.5" aria-hidden />
        </Link>
      </div>
    </article>
  );
}

function ReligionLanguageStrip() {
  return (
    <div className="mt-10 rounded-xl border border-[#e8dfd3] bg-white/80 p-5 shadow-sm backdrop-blur-sm sm:p-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <Church className="h-4 w-4 text-accent" aria-hidden />
            <h3 className="text-sm font-bold uppercase tracking-wider text-primary">
              Religions
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {NEPAL_RELIGIONS.map((religion) => (
              <span
                key={religion}
                className="rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-sm font-medium text-primary"
              >
                {religion}
              </span>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-3 flex items-center gap-2">
            <Languages className="h-4 w-4 text-accent" aria-hidden />
            <h3 className="text-sm font-bold uppercase tracking-wider text-primary">
              Languages
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {NEPAL_LANGUAGES.map((language) => (
              <span
                key={language}
                className="rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-sm font-medium text-primary"
              >
                {language}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function TraditionImagePlaceholder({ title }: { title: string }) {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#f5ebe0] via-white to-primary/5"
      aria-hidden
    >
      <Sparkles className="h-8 w-8 text-accent/35" />
      <span className="sr-only">{title}</span>
    </div>
  );
}

function TraditionCard({ tradition }: { tradition: NepalTradition }) {
  return (
    <article className="group overflow-hidden rounded-xl border border-[#e8dfd3] bg-white shadow-sm transition-all duration-300 hover:shadow-md">
      <div className="grid md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div className="relative min-h-[12rem] bg-[#f5ebe0] md:min-h-full">
          {tradition.image ? (
            <Image
              src={tradition.image}
              alt={tradition.title}
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <TraditionImagePlaceholder title={tradition.title} />
          )}
        </div>

        <div className="flex flex-col justify-center p-5 sm:p-6">
          <div className="mb-2 flex items-center gap-2">
            <Heart className="h-4 w-4 text-accent" aria-hidden />
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">
              Tradition
            </span>
          </div>
          <h4 className="text-lg font-bold text-primary">{tradition.title}</h4>
          <p className="mt-2 text-sm leading-relaxed text-text-secondary">
            {tradition.description}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function PeopleCultureTraditions() {
  return (
    <Section
      id="people-culture"
      aria-labelledby="people-culture-heading"
      className="border-t border-[#e8dfd3] bg-[#faf6f0]"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent">
            <BookOpen className="h-4 w-4" aria-hidden />
            {PEOPLE_CULTURE_SECTION.eyebrow}
          </p>
          <h2
            id="people-culture-heading"
            className="mt-3 text-2xl font-bold tracking-tight text-primary md:text-3xl"
          >
            {PEOPLE_CULTURE_SECTION.title}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-text-secondary">
            {PEOPLE_CULTURE_SECTION.subtitle}
          </p>
        </div>

        <div className="mt-8 md:mt-10">
          <div
            className={classNames(
              "flex gap-4 overflow-x-auto pb-2",
              "snap-x snap-mandatory scroll-smooth",
              "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
              "sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:pb-0",
              "lg:grid-cols-4",
            )}
          >
            {NEPAL_ETHNIC_CULTURES.map((culture) => (
              <PreviewCultureCard key={culture.slug} culture={culture} />
            ))}
          </div>

          <p className="mt-3 text-center text-xs text-text-muted sm:hidden">
            Swipe to explore cultures →
          </p>
        </div>

        <div className="mt-8 flex flex-col items-center text-center">
          <p className="text-sm text-text-secondary">
            Explore {TOTAL_ETHNIC_COMMUNITIES}+ ethnic communities across Nepal
          </p>
          <Button
            href={PEOPLE_CULTURE_SECTION.viewAllHref}
            size="lg"
            className="mt-4 inline-flex items-center gap-2"
          >
            View All Communities
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Button>
        </div>

        <ReligionLanguageStrip />

        <div className="mt-12 md:mt-14">
          <div className="mb-6 text-center md:mb-8">
            <h3 className="text-xl font-bold text-primary md:text-2xl">
              Traditions &amp; Lifestyle
            </h3>
            <p className="mt-2 text-sm text-text-secondary">
              The rhythms of daily life, celebration, and community across Nepal.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            {NEPAL_TRADITIONS.map((tradition) => (
              <TraditionCard key={tradition.slug} tradition={tradition} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
