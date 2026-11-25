import Link from "next/link";
import { Header, Footer, Container } from "@/components";
import CommunityPlaceCard from "@/components/community/CommunityPlaceCard";
import Button from "@/components/ui/Button";
import { getSubmissionsByStatus } from "@/lib/submissions-store";
import { RECOMMEND_COPY, RECOMMEND_PLACE_PATH } from "@/lib/recommend";

export default async function CommunityPage() {
  const places = await getSubmissionsByStatus("approved");

  return (
    <div className="flex min-h-full flex-col">
      <Header />
      <main className="flex-1 py-12 lg:py-16">
        <Container>
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
                Community Picks
              </h1>
              <p className="mt-3 max-w-2xl text-text-secondary">
                Authentic places recommended by travelers — reviewed and published by our team.
              </p>
            </div>
            <Button href={RECOMMEND_PLACE_PATH}>{RECOMMEND_COPY.navLabel}</Button>
          </div>

          {places.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
              {places.map((place) => (
                <CommunityPlaceCard key={place.id} place={place} />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-border bg-surface p-10 text-center">
              <p className="mb-4 text-text-secondary">
                No community places yet. Be the first to recommend one!
              </p>
              <Link
                href={RECOMMEND_PLACE_PATH}
                className="font-semibold text-primary hover:text-primary-light"
              >
                {RECOMMEND_COPY.navLabel} →
              </Link>
            </div>
          )}
        </Container>
      </main>
      <Footer />
    </div>
  );
}
