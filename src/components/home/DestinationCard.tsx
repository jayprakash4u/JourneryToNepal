import ExploreCard from "@/components/ui/ExploreCard";
import type { FeaturedDestination } from "@/lib/destinations";

interface DestinationCardProps {
  destination: FeaturedDestination;
}

export default function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <ExploreCard
      href={destination.href}
      title={destination.name}
      eyebrow={destination.highlights[0]}
      description={destination.hook}
      image={destination.image}
      imageAlt={destination.name}
      ctaLabel="View destination"
    />
  );
}
