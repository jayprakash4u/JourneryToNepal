import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Clock,
  Footprints,
  Leaf,
  ShieldCheck,
  Users,
  UtensilsCrossed,
  Wallet,
} from "lucide-react";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import {
  SIGNATURE_FOOD_TRAIL_FEATURES,
  SIGNATURE_FOOD_TRAILS,
  SIGNATURE_FOOD_TRAILS_SECTION,
  type FoodTrail,
} from "@/lib/food-experience";
import { classNames } from "@/utils";

const featureIcons = {
  leaf: Leaf,
  users: Users,
  book: BookOpen,
  shield: ShieldCheck,
} as const;

const featureIconColors = [
  "text-emerald-600 bg-emerald-50",
  "text-blue-600 bg-blue-50",
  "text-amber-600 bg-amber-50",
  "text-violet-600 bg-violet-50",
] as const;

function FoodTrailCard({ trail }: { trail: FoodTrail }) {
  const isOutline = trail.buttonVariant === "outline";

  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-border bg-surface shadow-sm">
      <div className="relative aspect-[16/10] overflow-hidden bg-primary/5">
        <Image
          src={trail.image}
          alt={trail.title}
          fill
          quality={95}
          sizes="(max-width: 1024px) 100vw, 33vw"
          className="object-cover"
        />
        <span className="absolute left-4 top-4 rounded-md bg-accent px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
          {trail.badge}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 md:p-6">
        <h3 className="text-xl font-bold tracking-tight text-primary">{trail.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-text-secondary">{trail.description}</p>

        <ol className="mt-5 space-y-0">
          {trail.stops.map((stop, index) => (
            <li key={stop.label} className="flex gap-3">
              <div className="flex flex-col items-center pt-1.5">
                <span
                  className="h-2.5 w-2.5 shrink-0 rounded-full bg-accent"
                  aria-hidden
                />
                {index < trail.stops.length - 1 && (
                  <span
                    className="my-1 w-px flex-1 border-l border-dashed border-border"
                    aria-hidden
                  />
                )}
              </div>
              <div
                className={classNames(
                  "flex flex-1 items-start justify-between gap-3 pb-4",
                  index === trail.stops.length - 1 && "pb-0"
                )}
              >
                <span className="text-sm font-semibold text-primary">{stop.label}</span>
                <span className="text-right text-xs leading-relaxed text-text-secondary">
                  {stop.detail}
                </span>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-5 grid grid-cols-2 gap-3 border-t border-border-light pt-5 sm:grid-cols-4">
          <StatItem icon={Clock} label={trail.stats.duration} />
          <StatItem icon={Footprints} label={trail.stats.distance} />
          <StatItem icon={Wallet} label={trail.stats.budget} />
          <StatItem icon={UtensilsCrossed} label={trail.stats.stops} />
        </div>

        <Link
          href={trail.href}
          className={classNames(
            "mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold transition-colors",
            isOutline
              ? "border-2 border-accent bg-surface text-accent hover:bg-accent/5"
              : "bg-accent text-white hover:bg-accent/90"
          )}
        >
          View Food Trail
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </article>
  );
}

function StatItem({
  icon: Icon,
  label,
}: {
  icon: typeof Clock;
  label: string;
}) {
  return (
    <div className="flex items-center gap-1.5 text-xs text-text-secondary">
      <Icon className="h-3.5 w-3.5 shrink-0 text-text-muted" aria-hidden />
      <span>{label}</span>
    </div>
  );
}

export default function SignatureFoodTrails() {
  const { eyebrow, title, subtitle } = SIGNATURE_FOOD_TRAILS_SECTION;

  return (
    <Section aria-labelledby="signature-food-trails-heading">
      <Container>
        <div className="mx-auto mb-8 max-w-2xl text-center md:mb-10">
          <p className="text-sm font-medium tracking-wide text-accent">{eyebrow}</p>
          <h2
            id="signature-food-trails-heading"
            className="mt-2 text-2xl font-bold tracking-tight text-primary md:text-3xl lg:text-4xl"
          >
            {title}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-text-secondary md:text-lg">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {SIGNATURE_FOOD_TRAILS.map((trail) => (
            <FoodTrailCard key={trail.slug} trail={trail} />
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 border-t border-border-light pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {SIGNATURE_FOOD_TRAIL_FEATURES.map((feature, index) => {
            const Icon = featureIcons[feature.icon];

            return (
              <div key={feature.title} className="flex items-start gap-3">
                <span
                  className={classNames(
                    "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md",
                    featureIconColors[index]
                  )}
                >
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <p className="text-sm font-semibold text-primary">{feature.title}</p>
                  <p className="mt-0.5 text-xs text-text-secondary">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
