import type { LucideIcon } from "lucide-react";
import { Compass, Globe, Hotel, MapPin } from "lucide-react";

export interface TrustPoint {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const TRUST_POINTS: TrustPoint[] = [
  {
    icon: Globe,
    title: "All 77 Districts Covered",
    description: "From iconic landmarks to remote corners of Nepal.",
  },
  {
    icon: Compass,
    title: "Complete Trip Planning",
    description: "Routes, budgets, and itineraries in one place.",
  },
  {
    icon: Hotel,
    title: "Verified Stays",
    description: "Hand-picked hotels and lodges you can trust.",
  },
  {
    icon: MapPin,
    title: "Local Insights",
    description: "Authentic tips from people who know Nepal best.",
  },
];
