import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { ADVENTURE_CATEGORIES } from "@/lib/adventure-trekking";

export default function AdventureCategories() {
  return (
    <Section variant="surface" aria-labelledby="adventure-categories-heading">
      <Container>
        <h2
          id="adventure-categories-heading"
          className="mb-8 text-2xl font-bold tracking-tight text-primary md:mb-10 md:text-3xl"
        >
          Adventure Categories
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {ADVENTURE_CATEGORIES.map((category) => {
            const Icon = category.icon;

            return (
              <Link
                key={category.slug}
                href={`/explore/adventure-trekking?category=${category.slug}`}
                className="group relative block overflow-hidden rounded-md"
              >
                <div className="relative aspect-[4/3] bg-primary/10">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 p-5">
                  <span className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-md bg-white/15 text-white backdrop-blur-sm">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                  <p className="mt-1 text-sm text-white/80">{category.description}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
