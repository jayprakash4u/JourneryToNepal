import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin } from "lucide-react";
import { Header, Footer, Container } from "@/components";
import AskAboutPlace from "@/components/place-qa/AskAboutPlace";
import Button from "@/components/ui/Button";
import {
  DISTRICT_CATEGORIES,
  getDistrictBySlug,
  getProvinceLabel,
} from "@/lib/districts-catalog";
import { DISTRICTS_COPY } from "@/lib/districts-copy";
import { getQuestionsByPlaceId } from "@/lib/qa-store";

interface DistrictDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function DistrictDetailPage({ params }: DistrictDetailPageProps) {
  const { slug } = await params;
  const district = getDistrictBySlug(slug);

  if (!district) {
    notFound();
  }

  const questions = await getQuestionsByPlaceId(slug);

  return (
    <div className="flex min-h-full flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden bg-primary text-white">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light/80 to-secondary/60" />
          {district.image && (
            <div
              className="absolute inset-0 bg-cover bg-center opacity-30"
              style={{ backgroundImage: `url(${district.image})` }}
              aria-hidden
            />
          )}
          <Container className="relative py-14 md:py-18">
            <Link
              href="/explore/districts"
              className="mb-6 inline-block text-sm font-medium text-white/85 hover:text-white"
            >
              {DISTRICTS_COPY.backToDistricts}
            </Link>
            <div className="flex flex-wrap items-center gap-3">
              {district.badge && (
                <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
                  {DISTRICTS_COPY.badges[district.badge]}
                </span>
              )}
              <span className="inline-flex items-center gap-1.5 text-sm text-white/85">
                <MapPin className="h-4 w-4" aria-hidden />
                {getProvinceLabel(district.province)}
              </span>
            </div>
            <h1 className="mt-4 text-3xl font-bold md:text-5xl">{district.name}</h1>
            <p className="mt-4 max-w-2xl text-lg text-white/90">{district.summary}</p>
          </Container>
        </section>

        <Container className="max-w-4xl py-10 lg:py-14">
          <section className="mb-8 border border-border bg-surface p-6 shadow-sm md:p-8">
            <h2 className="mb-4 text-xl font-bold text-primary">{DISTRICTS_COPY.highlights}</h2>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {district.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="rounded-xl bg-background px-4 py-3 text-sm text-text-primary"
                >
                  {highlight}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              {district.categories.map((category) => {
                const label = DISTRICT_CATEGORIES.find((item) => item.id === category)?.label;
                return (
                  <span
                    key={category}
                    className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary"
                  >
                    {label}
                  </span>
                );
              })}
            </div>

            <div className="mt-6">
              <Button variant="outline" href="/saved-places">
                {DISTRICTS_COPY.saveDistrict}
              </Button>
            </div>
          </section>

          <AskAboutPlace placeId={slug} initialQuestions={questions} />
        </Container>
      </main>
      <Footer />
    </div>
  );
}
