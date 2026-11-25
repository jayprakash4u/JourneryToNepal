import ExploreCard from "@/components/ui/ExploreCard";
import { getCategoryLabel } from "@/lib/submission-categories";
import type { PlaceSubmission } from "@/types/submission";

interface CommunityPlaceCardProps {
  place: PlaceSubmission;
}

export default function CommunityPlaceCard({ place }: CommunityPlaceCardProps) {
  const coverImage = place.images[0];

  return (
    <ExploreCard
      href={`/places/${place.id}`}
      title={place.title}
      eyebrow={place.district}
      description={place.reasonToVisit}
      image={coverImage}
      imageAlt={place.title}
      ctaLabel="View place"
      badge={
        <span className="rounded-md bg-surface/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary shadow-sm">
          {getCategoryLabel(place.category)}
        </span>
      }
    />
  );
}
