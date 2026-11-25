export const HERO_VIDEOS = [
  {
    src: "/videos/hero/hero-1.mp4",
    label: "Nepal aerial drone footage",
  },
  {
    src: "/videos/hero/hero-2.mp4",
    label: "Nepal landscape drone footage",
  },
] as const;

export const HERO_FADE_MS = 1200;

export const HERO_CONTENT = {
  headline: "Discover Nepal, One Journey at a Time",
  subtext:
    "Explore 77 districts, plan your trip, and experience Nepal like never before.",
  searchPlaceholder: "Search places, districts, or experiences…",
  ctas: [
    { label: "Explore Nepal", href: "/explore/map" },
    { label: "Plan Your Trip", href: "/plan-trip/planner" },
  ],
} as const;
