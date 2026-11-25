function districtsMedia(path: string) {
  return encodeURI(path);
}

export const DISTRICTS_HERO = {
  headline: "Explore All Districts of Nepal",
  subtext: "Discover hidden beauty across 77 districts and 7 provinces.",
  badge: "77 Districts · 7 Provinces",
  imageSrc: districtsMedia("/images/district in map.png"),
  videoSrc: districtsMedia("/images/77 districts/14862479-hd_1920_1080_60fps.mp4"),
  useVideo: true,
  ctas: {
    explore: { label: "Explore Districts", href: "#popular-districts" },
    plan: { label: "Plan Your Trip", href: "/plan-trip/planner" },
  },
} as const;

export const DISTRICTS_COPY = {
  heroTitle: DISTRICTS_HERO.headline,
  heroSubtitle: "Discover hidden beauty across 77 districts",
  searchPlaceholder: "Search districts…",
  popularTitle: "Popular Districts",
  provinceLabel: "Province",
  categoryLabel: "Category",
  popularityLabel: "Type",
  all: "All",
  popular: "Popular",
  lessExplored: "Hidden gems",
  clearFilters: "Clear all",
  gridView: "Grid view",
  mapView: "Map view",
  loadMore: "Load more",
  showing: (visible: number, total: number) =>
    `Showing ${visible} of ${total} districts`,
  noResults: "No districts match your filters. Try adjusting your search.",
  explore: "Explore",
  highlights: "Top highlights",
  badges: {
    popular: "Popular",
    trending: "Trending",
    peaceful: "Peaceful",
  } as const,
  saveDistrict: "Save district",
  backToDistricts: "← All districts",
} as const;
