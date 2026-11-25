import {
  BookOpen,
  BookText,
  Bookmark,
  Building2,
  Calendar,
  CalendarDays,
  Compass,
  Footprints,
  Gem,
  Home,
  Info,
  Lightbulb,
  Mail,
  Map,
  MapPin,
  Mountain,
  PawPrint,
  Plane,
  Route,
  Sandwich,
  Star,
  Target,
  TrendingUp,
  UtensilsCrossed,
  Wallet,
} from "lucide-react";
import type { NavConfig } from "@/types/navigation";

export const MAIN_NAV: NavConfig[] = [
  {
    type: "mega",
    label: "Explore",
    categories: [
      { name: "Adventure & Trekking", href: "/explore/adventure-trekking", icon: Mountain },
      { name: "Culture & Heritage", href: "/explore/culture-heritage", icon: Building2 },
      { name: "Himalayan Villages", href: "/explore/villages", icon: Home },
      { name: "Food & Experience", href: "/explore/food-experience", icon: Sandwich },
      { name: "Wildlife & Jungle", href: "/explore/wildlife-jungle", icon: PawPrint },
      { name: "Spiritual Places", href: "/explore/spiritual-places", icon: Compass },
    ],
    sidebar: {
      title: "By District",
      description: "All 77 districts of Nepal",
      href: "/explore/districts",
      linkLabel: "View All Districts",
    },
    highlight: {
      title: "Map View",
      description: "Explore Nepal visually",
      href: "/explore/map",
      linkLabel: "Open Interactive Map",
      icon: Map,
    },
  },
  {
    type: "dropdown",
    label: "Destinations",
    items: [
      { name: "Featured Places", href: "/destinations/featured", icon: Star },
      { name: "Popular Destinations", href: "/destinations/popular", icon: MapPin },
      { name: "Trending Locations", href: "/destinations/trending", icon: TrendingUp },
      { name: "Hidden Gems", href: "/destinations/hidden-gems", icon: Gem },
    ],
  },
  {
    type: "dropdown",
    label: "Plan Trip",
    sections: [
      {
        title: "Itineraries",
        items: [
          { name: "3-Day Itineraries", href: "/plan-trip/itineraries/3-days", icon: CalendarDays },
          { name: "7-Day Itineraries", href: "/plan-trip/itineraries/7-days", icon: CalendarDays },
          { name: "10-Day Itineraries", href: "/plan-trip/itineraries/10-days", icon: CalendarDays },
          { name: "Trip Planner Tool", href: "/plan-trip/planner", icon: CalendarDays },
        ],
      },
      {
        title: "Tools",
        items: [
          { name: "Travel Routes", href: "/plan-trip/routes", icon: Route },
          { name: "Budget Guide", href: "/plan-trip/budget", icon: Wallet },
        ],
      },
    ],
  },
  {
    type: "dropdown",
    label: "Experiences",
    panelWidth: "md",
    items: [
      { name: "Trekking", href: "/experiences/trekking", icon: Footprints },
      { name: "Paragliding", href: "/experiences/paragliding", icon: Plane },
      { name: "Jungle Safari", href: "/experiences/jungle-safari", icon: PawPrint },
      { name: "Cultural Tours", href: "/experiences/cultural-tours", icon: Building2 },
      { name: "Food Tours", href: "/experiences/food-tours", icon: UtensilsCrossed },
    ],
  },
  {
    type: "dropdown",
    label: "Blog",
    sections: [
      {
        title: "Categories",
        items: [
          { name: "Guides", href: "/blog/guides", icon: BookOpen },
          { name: "Travel Tips", href: "/blog/tips", icon: Lightbulb },
          { name: "Stories", href: "/blog/stories", icon: BookText },
        ],
      },
    ],
  },
  {
    type: "dropdown",
    label: "About",
    items: [
      { name: "About JourneyToNepal", href: "/about", icon: Info },
      { name: "Contact", href: "/contact", icon: Mail },
      { name: "Mission", href: "/mission", icon: Target },
    ],
  },
];

export const PROFILE_LINKS = [
  { name: "My Trips", href: "/my-trips", icon: MapPin },
  { name: "Saved Places", href: "/saved-places", icon: Bookmark },
  { name: "Bookings", href: "/bookings", icon: Calendar },
];

export const SITE = {
  name: "Journey to Nepal",
  tagline: "Your guide to the Himalayan Kingdom",
  description:
    "Explore Nepal's mountains, culture, and adventure. Your trusted guide for trekking, temples, and authentic experiences.",
} as const;
