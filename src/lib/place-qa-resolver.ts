import { FEATURED_DESTINATIONS, getDestinationBySlug } from "@/lib/destinations";
import { getSubmissionById } from "@/lib/submissions-store";
import type { QaPlaceOption } from "@/lib/place-qa";

export function getPlaceHref(placeId: string) {
  if (getDestinationBySlug(placeId)) {
    return `/destinations/${placeId}`;
  }
  return `/places/${placeId}`;
}

export async function getPlaceName(placeId: string) {
  const destination = getDestinationBySlug(placeId);
  if (destination) return destination.name;

  const submission = await getSubmissionById(placeId);
  if (submission) return submission.title;

  return placeId;
}

export async function getQaPlaceOptions(): Promise<QaPlaceOption[]> {
  const destinations: QaPlaceOption[] = FEATURED_DESTINATIONS.map((destination) => ({
    id: destination.slug,
    name: destination.name,
    href: destination.href,
  }));

  const { getSubmissionsByStatus } = await import("@/lib/submissions-store");
  const communityPlaces: QaPlaceOption[] = (await getSubmissionsByStatus("approved")).map(
    (place) => ({
      id: place.id,
      name: place.title,
      href: `/places/${place.id}`,
    })
  );

  const seen = new Set<string>();
  return [...destinations, ...communityPlaces].filter((place) => {
    if (seen.has(place.id)) return false;
    seen.add(place.id);
    return true;
  });
}
