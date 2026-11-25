import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin } from "lucide-react";
import { Header, Footer, Container } from "@/components";
import ContributorBadge from "@/components/community/ContributorBadge";
import AskAboutPlace from "@/components/place-qa/AskAboutPlace";
import { getCategoryLabel } from "@/lib/submission-categories";
import { getQuestionsByPlaceId } from "@/lib/qa-store";
import { getSubmissionById } from "@/lib/submissions-store";

interface PlaceDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function PlaceDetailPage({ params }: PlaceDetailPageProps) {
  const { id } = await params;
  const place = await getSubmissionById(id);

  if (!place || place.status !== "approved") {
    notFound();
  }

  const coverImage = place.images[0];
  const questions = await getQuestionsByPlaceId(id);

  return (
    <div className="flex min-h-full flex-col">
      <Header />
      <main className="flex-1 py-10 lg:py-14">
        <Container className="max-w-4xl">
          <Link
            href="/community"
            className="mb-6 inline-block text-sm font-medium text-primary hover:text-primary-light"
          >
            ← Back to Community Picks
          </Link>

          <div className="overflow-hidden rounded-md border border-border bg-surface shadow-sm">
            <div className="relative aspect-[16/9] bg-primary/10">
              {coverImage ? (
                <Image
                  src={coverImage}
                  alt={place.title}
                  fill
                  priority
                  className="object-cover"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
              )}
            </div>

            <div className="p-6 md:p-8">
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  {getCategoryLabel(place.category)}
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm text-text-muted">
                  <MapPin className="h-4 w-4" aria-hidden />
                  {place.district}
                </span>
              </div>

              <h1 className="mb-4 text-3xl font-bold text-primary md:text-4xl">
                {place.title}
              </h1>

              <p className="mb-6 text-lg leading-relaxed text-text-secondary">
                {place.description}
              </p>

              <div className="mb-8 bg-primary/5 p-5">
                <h2 className="mb-2 text-sm font-semibold uppercase tracking-wider text-text-muted">
                  Why visit
                </h2>
                <p className="text-text-primary">{place.reasonToVisit}</p>
              </div>

              {place.images.length > 1 && (
                <div className="mb-8 grid grid-cols-2 gap-3 md:grid-cols-3">
                  {place.images.slice(1).map((image) => (
                    <div key={image} className="relative aspect-[4/3] overflow-hidden">
                      <Image src={image} alt={place.title} fill className="object-cover" />
                    </div>
                  ))}
                </div>
              )}

              <ContributorBadge submission={place} variant="detail" />
            </div>
          </div>

          <AskAboutPlace placeId={place.id} initialQuestions={questions} />
        </Container>
      </main>
      <Footer />
    </div>
  );
}
