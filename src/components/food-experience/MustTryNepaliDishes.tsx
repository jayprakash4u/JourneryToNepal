import Image from "next/image";
import { Flame, MapPin } from "lucide-react";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button";
import {
  MUST_TRY_DISHES_SECTION,
  MUST_TRY_NEPALI_DISHES,
  type SpiceLevel,
} from "@/lib/food-experience";
import { classNames } from "@/utils";

const spiceStyles: Record<SpiceLevel, string> = {
  Mild: "border-emerald-200 bg-emerald-50 text-emerald-700",
  Medium: "border-amber-200 bg-amber-50 text-amber-700",
  Hot: "border-red-200 bg-red-50 text-red-700",
};

export default function MustTryNepaliDishes() {
  const { title, subtitle } = MUST_TRY_DISHES_SECTION;

  return (
    <Section aria-labelledby="must-try-dishes-heading">
      <Container>
        <div className="mx-auto mb-8 max-w-2xl text-center md:mb-10">
          <h2
            id="must-try-dishes-heading"
            className="text-2xl font-bold tracking-tight text-primary md:text-3xl lg:text-4xl"
          >
            {title}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-text-secondary md:text-lg">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {MUST_TRY_NEPALI_DISHES.map((dish) => (
            <article
              key={dish.slug}
              className="group flex flex-col overflow-hidden rounded-md border border-border bg-surface shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-md"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-primary/5">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  quality={95}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <span
                  className={classNames(
                    "absolute right-3 top-3 inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-xs font-semibold backdrop-blur-sm",
                    spiceStyles[dish.spiceLevel]
                  )}
                >
                  <Flame className="h-3 w-3" aria-hidden />
                  {dish.spiceLevel}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-bold text-primary">{dish.name}</h3>

                <p className="mt-1 flex items-center gap-1.5 text-xs font-medium text-text-muted">
                  <MapPin className="h-3.5 w-3.5 shrink-0 text-primary-light" aria-hidden />
                  {dish.region}
                </p>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-text-secondary">
                  {dish.description}
                </p>

                <Button href={dish.href} variant="outline" className="mt-4 w-full">
                  Learn More
                </Button>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
