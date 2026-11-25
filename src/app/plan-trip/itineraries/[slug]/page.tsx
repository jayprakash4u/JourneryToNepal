import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Header, Footer, Container } from "@/components";
import ItineraryDetailView from "@/components/plan-trip/ItineraryDetailView";
import ItineraryDurationHub from "@/components/plan-trip/ItineraryDurationHub";
import {
  getDurationFromHubSlug,
  getItineraryBySlug,
  isDurationHubSlug,
} from "@/lib/plan-trip-itineraries";

interface ItineraryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ItineraryPageProps): Promise<Metadata> {
  const { slug } = await params;

  if (isDurationHubSlug(slug)) {
    const days = getDurationFromHubSlug(slug);
    return {
      title: `${days}-Day Itineraries | Journey to Nepal`,
      description: `Ready-made ${days}-day Nepal trip plans with routes, budget, and activities.`,
    };
  }

  const itinerary = getItineraryBySlug(slug);
  if (!itinerary) {
    return { title: "Itinerary Not Found | Journey to Nepal" };
  }

  return {
    title: `${itinerary.title} | Journey to Nepal`,
    description: itinerary.description,
  };
}

export default async function ItineraryPage({ params }: ItineraryPageProps) {
  const { slug } = await params;

  if (isDurationHubSlug(slug)) {
    const durationDays = getDurationFromHubSlug(slug);

    return (
      <div className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">
          <Container className="py-10 lg:py-14">
            <Link
              href="/plan-trip/planner"
              className="mb-6 inline-block text-sm font-medium text-text-secondary hover:text-primary"
            >
              ← Trip planner
            </Link>
            <ItineraryDurationHub durationDays={durationDays} />
          </Container>
        </main>
        <Footer />
      </div>
    );
  }

  const itinerary = getItineraryBySlug(slug);
  if (!itinerary) notFound();

  return (
    <div className="flex min-h-full flex-col">
      <Header />
      <main className="flex-1">
        <Container className="py-10 lg:py-14">
          <ItineraryDetailView itinerary={itinerary} />
        </Container>
      </main>
      <Footer />
    </div>
  );
}
