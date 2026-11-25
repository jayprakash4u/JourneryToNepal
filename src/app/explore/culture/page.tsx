import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Header, Footer } from "@/components";
import AllCommunitiesExplorer from "@/components/culture/AllCommunitiesExplorer";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { TOTAL_ETHNIC_COMMUNITIES } from "@/lib/nepal-ethnic-communities";

export const metadata: Metadata = {
  title: "All Ethnic Communities | Journey to Nepal",
  description: `Explore ${TOTAL_ETHNIC_COMMUNITIES} ethnic and caste communities across Nepal — search by category, region, and language.`,
};

export default function AllCommunitiesPage() {
  return (
    <div className="flex min-h-full flex-col">
      <Header />
      <main className="flex-1">
        <Section className="border-b border-border-light bg-[#faf6f0]">
          <Container>
            <Link
              href="/explore/culture-heritage#people-culture"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              Back to Culture &amp; Heritage
            </Link>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-primary md:text-4xl">
              All Ethnic Communities of Nepal
            </h1>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-text-secondary">
              Browse every officially recognized socio-cultural community in Nepal.
              Use search and filters to explore Janajati, Madhesi, Khas Arya, Dalit,
              and other groups across the hills, mountains, and Terai.
            </p>
          </Container>
        </Section>

        <Section variant="surface" compact>
          <AllCommunitiesExplorer />
        </Section>
      </main>
      <Footer />
    </div>
  );
}
