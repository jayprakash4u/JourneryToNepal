import Image from "next/image";
import {
  Camera,
  Cake,
  ChefHat,
  Clock,
  Heart,
  Landmark,
  Leaf,
  MapPin,
  Music,
  ShieldCheck,
  Sparkles,
  User,
  Users,
  UtensilsCrossed,
  Home,
} from "lucide-react";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import {
  DINING_WITH_CULTURE_EXPERIENCES,
  DINING_WITH_CULTURE_SECTION,
  DINING_WITH_CULTURE_TRUST_ITEMS,
  type DiningCultureExperience,
  type DiningCultureFeatureIcon,
} from "@/lib/food-experience";

const cardIcons = {
  dance: Music,
  monastery: Landmark,
  village: Home,
  festival: Sparkles,
  homestay: User,
} as const;

const featureIcons: Record<DiningCultureFeatureIcon, typeof Music> = {
  music: Music,
  utensils: UtensilsCrossed,
  leaf: Leaf,
  heart: Heart,
  users: Users,
  chef: ChefHat,
  sparkles: Sparkles,
  cake: Cake,
};

const trustIcons = {
  users: Users,
  leaf: Leaf,
  shield: ShieldCheck,
  camera: Camera,
} as const;

function CultureDiningCard({ experience }: { experience: DiningCultureExperience }) {
  const CardIcon = cardIcons[experience.cardIcon];

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-surface shadow-sm">
      <div className="relative">
        <div className="relative aspect-[4/3] overflow-hidden bg-primary/5">
          <Image
            src={experience.image}
            alt={experience.title}
            fill
            quality={95}
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 33vw, 20vw"
            className="object-cover"
          />
        </div>
        <span
          className="absolute -bottom-5 left-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white shadow-md"
          aria-hidden
        >
          <CardIcon className="h-4.5 w-4.5" />
        </span>
      </div>

      <div className="flex flex-1 flex-col px-4 pb-5 pt-8">
        <h3 className="text-base font-bold leading-snug text-primary">{experience.title}</h3>
        <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-text-secondary">
          {experience.description}
        </p>

        <ul className="mt-4 space-y-2.5 border-t border-border-light pt-4">
          <li className="flex items-center gap-2 text-xs text-text-secondary">
            <Clock className="h-3.5 w-3.5 shrink-0 text-text-muted" aria-hidden />
            <span>{experience.duration}</span>
          </li>
          {experience.features.map((feature) => {
            const FeatureIcon = featureIcons[feature.icon];

            return (
              <li
                key={feature.label}
                className="flex items-center gap-2 text-xs text-text-secondary"
              >
                <FeatureIcon className="h-3.5 w-3.5 shrink-0 text-text-muted" aria-hidden />
                <span>{feature.label}</span>
              </li>
            );
          })}
          <li className="flex items-start gap-2 text-xs text-text-secondary">
            <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-text-muted" aria-hidden />
            <span>{experience.location}</span>
          </li>
        </ul>
      </div>
    </article>
  );
}

export default function DiningWithCulture() {
  const { eyebrow, title, subtitle } = DINING_WITH_CULTURE_SECTION;

  return (
    <Section
      className="bg-stone-50"
      variant="default"
      aria-labelledby="dining-with-culture-heading"
    >
      <Container>
        <div className="mx-auto mb-8 max-w-2xl text-center md:mb-10">
          <div className="mb-4 flex items-center justify-center gap-3" aria-hidden>
            <span className="h-px w-10 bg-border md:w-14" />
            <span className="h-2 w-2 rotate-45 bg-accent" />
            <span className="h-px w-10 bg-border md:w-14" />
          </div>
          <p className="text-sm font-medium tracking-wide text-accent">{eyebrow}</p>
          <h2
            id="dining-with-culture-heading"
            className="mt-2 text-2xl font-bold tracking-tight text-primary md:text-3xl lg:text-4xl"
          >
            {title}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-text-secondary md:text-lg">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {DINING_WITH_CULTURE_EXPERIENCES.map((experience) => (
            <CultureDiningCard key={experience.slug} experience={experience} />
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-border/60 bg-surface p-5 shadow-sm md:p-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {DINING_WITH_CULTURE_TRUST_ITEMS.map((item) => {
              const Icon = trustIcons[item.icon];

              return (
                <div key={item.title} className="flex items-start gap-3">
                  <Icon
                    className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                  <div>
                    <p className="text-sm font-semibold text-primary">{item.title}</p>
                    <p className="mt-0.5 text-xs text-text-secondary">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
