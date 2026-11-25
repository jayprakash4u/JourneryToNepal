import { Calculator, Calendar, MapPin, Route } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface TravelTool {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
}

export const TRAVEL_TOOLS: TravelTool[] = [
  {
    title: "Travel Routes",
    description: "Bus, flight, and road options between major destinations.",
    href: "/plan-trip/routes",
    icon: Route,
  },
  {
    title: "Budget Calculator",
    description: "Estimate daily costs by travel style and region.",
    href: "/plan-trip/budget",
    icon: Calculator,
  },
  {
    title: "Distance Between Places",
    description: "Driving times and distances across Nepal.",
    href: "/plan-trip/routes#distances",
    icon: MapPin,
  },
  {
    title: "Best Time to Visit",
    description: "Season guide for trekking, cities, and jungle trips.",
    href: "/plan-trip/planner#best-time",
    icon: Calendar,
  },
];

export const BEST_TIME_TO_VISIT = [
  {
    season: "Spring (Mar–May)",
    detail: "Clear skies, rhododendron blooms, ideal for trekking and city tours.",
  },
  {
    season: "Autumn (Sep–Nov)",
    detail: "Peak season — stable weather, best mountain views, festivals.",
  },
  {
    season: "Winter (Dec–Feb)",
    detail: "Cool and dry in valleys; great for low-altitude culture trips.",
  },
  {
    season: "Monsoon (Jun–Aug)",
    detail: "Lush landscapes, fewer crowds; jungle regions can be rewarding.",
  },
];
