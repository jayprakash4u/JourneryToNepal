export interface PlanTripOption {
  slug: string;
  title: string;
  href: string;
  route: string;
  budget: string;
  highlights: string[];
}

export const PLAN_TRIP_OPTIONS: PlanTripOption[] = [
  {
    slug: "3-days",
    title: "3-Day Trip",
    href: "/plan-trip/itineraries/3-days",
    route: "Kathmandu → Nagarkot → Dhulikhel",
    budget: "From $180 / person",
    highlights: ["Sunrise over the Himalayas", "Short hill hikes", "Heritage hill towns"],
  },
  {
    slug: "7-days",
    title: "7-Day Adventure",
    href: "/plan-trip/itineraries/7-days",
    route: "Kathmandu → Pokhara → Ghandruk Trek",
    budget: "From $650 / person",
    highlights: ["Annapurna panoramas", "Phewa Lake & Pokhara", "Village trekking trails"],
  },
  {
    slug: "10-days",
    title: "10-Day Cultural Tour",
    href: "/plan-trip/itineraries/10-days",
    route: "Kathmandu → Lumbini → Chitwan → Bhaktapur",
    budget: "From $520 / person",
    highlights: ["Birthplace of Buddha", "Jungle safari", "Ancient durbar squares"],
  },
  {
    slug: "1-month",
    title: "1-Month Grand Tour",
    href: "/plan-trip/itineraries/1-month",
    route: "Kathmandu → Annapurna → Everest → Chitwan → Lumbini",
    budget: "From $2,400 / person",
    highlights: ["Everest Base Camp trek", "Annapurna Circuit", "Culture, jungle & lakes"],
  },
];

export const PLAN_TRIP_CTA = {
  label: "Start Planning",
  href: "/plan-trip/planner",
} as const;
