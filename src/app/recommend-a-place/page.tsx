import { Suspense } from "react";
import { Header, Footer, Container } from "@/components";
import SharePlaceGate from "@/components/share/SharePlaceGate";
import { RECOMMEND_COPY } from "@/lib/recommend";

export default function RecommendAPlacePage() {
  return (
    <div className="flex min-h-full flex-col">
      <Header />
      <main className="flex-1 py-12 lg:py-16">
        <Container className="max-w-3xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
              {RECOMMEND_COPY.pageTitle}
            </h1>
            <p className="mt-3 text-text-secondary">{RECOMMEND_COPY.pageSubtext}</p>
            <p className="mt-2 text-sm text-text-muted">
              Submissions are reviewed before publishing.
            </p>
          </div>
          <Suspense fallback={<p className="text-text-secondary">Loading...</p>}>
            <SharePlaceGate />
          </Suspense>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
