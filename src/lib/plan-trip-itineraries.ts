import type { PlannerDay } from "@/lib/plan-trip-planner";

export interface ItineraryPreview {
  slug: string;
  title: string;
  durationDays: number;
  highlights: string[];
  href: string;
}

export interface ItineraryDetail extends ItineraryPreview {
  route: string;
  budget: string;
  description: string;
  days: PlannerDay[];
}

export const ITINERARY_GROUPS = [
  { key: 3 as const, label: "3-Day Trips" },
  { key: 7 as const, label: "7-Day Trips" },
  { key: 10 as const, label: "10-Day Trips" },
];

export const READY_MADE_ITINERARIES: ItineraryDetail[] = [
  {
    slug: "pokhara-adventure-3",
    title: "Pokhara Quick Adventure",
    durationDays: 3,
    highlights: ["Paragliding", "Sarangkot sunrise", "Lakeside walk"],
    href: "/plan-trip/itineraries/pokhara-adventure-3",
    route: "Kathmandu → Pokhara → Kathmandu",
    budget: "$180–$350 / person",
    description: "A fast-paced lakeside escape with mountain views and adventure sports.",
    days: [
      {
        day: 1,
        title: "Kathmandu → Pokhara",
        travel: "Tourist bus (6–7 hrs)",
        stay: "Lakeside hotel",
        activities: ["Lakeside walk", "Sunset by Phewa Lake"],
      },
      {
        day: 2,
        title: "Adventure Day",
        stay: "Lakeside hotel",
        activities: ["Sarangkot sunrise", "Paragliding", "Boating"],
      },
      {
        day: 3,
        title: "Return to Kathmandu",
        travel: "Morning bus or flight",
        activities: ["Souvenir stop", "Departure"],
      },
    ],
  },
  {
    slug: "kathmandu-heritage-3",
    title: "Kathmandu Heritage Loop",
    durationDays: 3,
    highlights: ["Durbar Squares", "Living culture", "Nagarkot sunrise"],
    href: "/plan-trip/itineraries/kathmandu-heritage-3",
    route: "Kathmandu → Bhaktapur → Nagarkot",
    budget: "$120–$220 / person",
    description: "UNESCO heritage, artisan towns, and a Himalayan sunrise without leaving the valley.",
    days: [
      {
        day: 1,
        title: "Kathmandu Old City",
        stay: "Thamel hotel",
        activities: ["Durbar Square", "Swayambhunath", "Asan market"],
      },
      {
        day: 2,
        title: "Bhaktapur & Patan",
        stay: "Thamel hotel",
        activities: ["Bhaktapur squares", "Patan Museum", "Pottery lane"],
      },
      {
        day: 3,
        title: "Nagarkot Sunrise",
        travel: "Early drive to Nagarkot",
        activities: ["Himalaya views", "Return via valley"],
      },
    ],
  },
  {
    slug: "chitwan-safari-3",
    title: "Chitwan Safari Escape",
    durationDays: 3,
    highlights: ["Jeep safari", "River canoe", "Tharu culture"],
    href: "/plan-trip/itineraries/chitwan-safari-3",
    route: "Kathmandu → Chitwan → Kathmandu",
    budget: "$150–$280 / person",
    description: "A compact jungle trip with wildlife, river time, and local culture.",
    days: [
      {
        day: 1,
        title: "Kathmandu → Chitwan",
        travel: "Drive (5–6 hrs)",
        stay: "Jungle lodge",
        activities: ["Tharu dance", "River sunset"],
      },
      {
        day: 2,
        title: "Safari Day",
        stay: "Jungle lodge",
        activities: ["Jeep safari", "Canoe ride", "Elephant center"],
      },
      {
        day: 3,
        title: "Return Kathmandu",
        travel: "Morning drive",
        activities: ["Bird walk", "Departure"],
      },
    ],
  },
  {
    slug: "pokhara-adventure-7",
    title: "Pokhara Adventure",
    durationDays: 7,
    highlights: ["Paragliding", "Boating", "Sunrise view"],
    href: "/plan-trip/itineraries/pokhara-adventure-7",
    route: "Kathmandu → Pokhara → Ghandruk → Pokhara",
    budget: "$550–$850 / person",
    description: "The classic adventure week — lake city fun plus short Annapurna foothills trekking.",
    days: [
      {
        day: 1,
        title: "Arrive Kathmandu",
        stay: "Thamel hotel",
        activities: ["Briefing", "Thamel explore"],
      },
      {
        day: 2,
        title: "Kathmandu → Pokhara",
        travel: "Scenic drive or flight",
        stay: "Lakeside hotel",
        activities: ["Lakeside evening"],
      },
      {
        day: 3,
        title: "Sarangkot & Paragliding",
        stay: "Lakeside hotel",
        activities: ["Sunrise", "Paragliding", "Boating"],
      },
      {
        day: 4,
        title: "Trek to Ghandruk",
        travel: "Drive to Nayapul + trek",
        stay: "Tea house",
        activities: ["Village walk", "Mountain views"],
      },
      {
        day: 5,
        title: "Trek Return",
        stay: "Lakeside hotel",
        activities: ["Descend to Nayapul", "Lake sunset"],
      },
      {
        day: 6,
        title: "Pokhara Free Day",
        stay: "Lakeside hotel",
        activities: ["Peace Pagoda", "Caves & falls"],
      },
      {
        day: 7,
        title: "Return Kathmandu",
        activities: ["Shopping", "Departure"],
      },
    ],
  },
  {
    slug: "cultural-trail-7",
    title: "Cultural Golden Trail",
    durationDays: 7,
    highlights: ["UNESCO sites", "Hill towns", "Local crafts"],
    href: "/plan-trip/itineraries/cultural-trail-7",
    route: "Kathmandu → Nagarkot → Pokhara",
    budget: "$480–$720 / person",
    description: "Heritage cities, hilltop panoramas, and lakeside culture in one balanced week.",
    days: [
      {
        day: 1,
        title: "Kathmandu Heritage",
        stay: "Thamel hotel",
        activities: ["Durbar Square", "Boudhanath"],
      },
      {
        day: 2,
        title: "Bhaktapur & Patan",
        stay: "Thamel hotel",
        activities: ["Artisan workshops", "Durbar squares"],
      },
      {
        day: 3,
        title: "Nagarkot & Dhulikhel",
        stay: "Hill resort",
        activities: ["Sunrise", "Old town walk"],
      },
      {
        day: 4,
        title: "To Pokhara",
        travel: "Drive or flight",
        stay: "Lakeside hotel",
        activities: ["Lake evening"],
      },
      {
        day: 5,
        title: "Pokhara Culture",
        stay: "Lakeside hotel",
        activities: ["Mountain Museum", "Old bazaar"],
      },
      {
        day: 6,
        title: "Village Visit",
        stay: "Lakeside hotel",
        activities: ["Gurung village", "Traditional lunch"],
      },
      {
        day: 7,
        title: "Return Kathmandu",
        activities: ["Final explore", "Departure"],
      },
    ],
  },
  {
    slug: "annapurna-foothills-7",
    title: "Annapurna Foothills Trek",
    durationDays: 7,
    highlights: ["Tea house trek", "Village life", "Panoramas"],
    href: "/plan-trip/itineraries/annapurna-foothills-7",
    route: "Pokhara → Ghandruk → Pokhara",
    budget: "$600–$900 / person",
    description: "A gentle trek with big mountain views — ideal for first-time trekkers.",
    days: [
      {
        day: 1,
        title: "Kathmandu → Pokhara",
        stay: "Lakeside hotel",
        activities: ["Rest", "Gear check"],
      },
      {
        day: 2,
        title: "Nayapul to Tikhedhunga",
        travel: "Drive + trek",
        stay: "Tea house",
        activities: ["Trail intro", "Waterfall views"],
      },
      {
        day: 3,
        title: "Tikhedhunga → Ghorepani",
        stay: "Tea house",
        activities: ["Rhododendron forest", "Uphill trek"],
      },
      {
        day: 4,
        title: "Poon Hill Sunrise",
        stay: "Tea house",
        activities: ["Poon Hill", "Descend to Tadapani"],
      },
      {
        day: 5,
        title: "Tadapani → Ghandruk",
        stay: "Tea house",
        activities: ["Gurung village", "Annapurna views"],
      },
      {
        day: 6,
        title: "Ghandruk → Pokhara",
        stay: "Lakeside hotel",
        activities: ["Trek out", "Celebration dinner"],
      },
      {
        day: 7,
        title: "Return Kathmandu",
        activities: ["Departure"],
      },
    ],
  },
  {
    slug: "nepal-highlights-10",
    title: "Nepal Highlights",
    durationDays: 10,
    highlights: ["Cities", "Jungle", "Mountains"],
    href: "/plan-trip/itineraries/nepal-highlights-10",
    route: "Kathmandu → Pokhara → Chitwan → Kathmandu",
    budget: "$700–$1,100 / person",
    description: "The essential Nepal triangle — culture, lakes, and jungle in ten days.",
    days: [
      {
        day: 1,
        title: "Kathmandu Arrival",
        stay: "Thamel hotel",
        activities: ["Welcome dinner"],
      },
      {
        day: 2,
        title: "Kathmandu Sites",
        stay: "Thamel hotel",
        activities: ["Swayambhunath", "Pashupatinath", "Boudhanath"],
      },
      {
        day: 3,
        title: "Bhaktapur Day",
        stay: "Thamel hotel",
        activities: ["Bhaktapur squares", "Pottery square"],
      },
      {
        day: 4,
        title: "Kathmandu → Pokhara",
        stay: "Lakeside hotel",
        activities: ["Lakeside walk"],
      },
      {
        day: 5,
        title: "Pokhara Adventures",
        stay: "Lakeside hotel",
        activities: ["Sarangkot", "Boating"],
      },
      {
        day: 6,
        title: "Pokhara → Chitwan",
        stay: "Jungle lodge",
        activities: ["Tharu program"],
      },
      {
        day: 7,
        title: "Chitwan Safari",
        stay: "Jungle lodge",
        activities: ["Jeep safari", "Canoe"],
      },
      {
        day: 8,
        title: "Chitwan → Bandipur",
        stay: "Hill guesthouse",
        activities: ["Old town walk"],
      },
      {
        day: 9,
        title: "Bandipur → Kathmandu",
        stay: "Thamel hotel",
        activities: ["Rest", "Shopping"],
      },
      {
        day: 10,
        title: "Departure",
        activities: ["Airport transfer"],
      },
    ],
  },
  {
    slug: "buddha-jungle-10",
    title: "Buddha & Jungle Trail",
    durationDays: 10,
    highlights: ["Lumbini", "Safari", "Spiritual sites"],
    href: "/plan-trip/itineraries/buddha-jungle-10",
    route: "Kathmandu → Lumbini → Chitwan → Kathmandu",
    budget: "$650–$980 / person",
    description: "Spiritual roots in Lumbini paired with Chitwan's wildlife and Terai culture.",
    days: [
      {
        day: 1,
        title: "Kathmandu Arrival",
        stay: "Thamel hotel",
        activities: ["Briefing"],
      },
      {
        day: 2,
        title: "Kathmandu Heritage",
        stay: "Thamel hotel",
        activities: ["Durbar Square", "Living goddess courtyard"],
      },
      {
        day: 3,
        title: "To Lumbini",
        travel: "Flight or drive",
        stay: "Lumbini guesthouse",
        activities: ["Maya Devi Temple"],
      },
      {
        day: 4,
        title: "Lumbini Monasteries",
        stay: "Lumbini guesthouse",
        activities: ["Monastery zone", "Meditation gardens"],
      },
      {
        day: 5,
        title: "Lumbini → Chitwan",
        stay: "Jungle lodge",
        activities: ["Village walk"],
      },
      {
        day: 6,
        title: "Chitwan Safari",
        stay: "Jungle lodge",
        activities: ["Jeep safari", "River time"],
      },
      {
        day: 7,
        title: "Chitwan Activities",
        stay: "Jungle lodge",
        activities: ["Birding", "Elephant briefing"],
      },
      {
        day: 8,
        title: "Chitwan → Kathmandu",
        stay: "Thamel hotel",
        activities: ["Rest evening"],
      },
      {
        day: 9,
        title: "Patan & Patan Museum",
        stay: "Thamel hotel",
        activities: ["Art & architecture"],
      },
      {
        day: 10,
        title: "Departure",
        activities: ["Free morning", "Transfer"],
      },
    ],
  },
  {
    slug: "himalayan-circuit-10",
    title: "Himalayan Circuit",
    durationDays: 10,
    highlights: ["Trekking", "Lakes", "Mountain flights"],
    href: "/plan-trip/itineraries/himalayan-circuit-10",
    route: "Kathmandu → Pokhara → Australian Camp → Chitwan",
    budget: "$800–$1,300 / person",
    description: "Adventure-heavy route linking treks, lakeside fun, and a jungle finish.",
    days: [
      {
        day: 1,
        title: "Kathmandu Arrival",
        stay: "Thamel hotel",
        activities: ["Gear check"],
      },
      {
        day: 2,
        title: "To Pokhara",
        stay: "Lakeside hotel",
        activities: ["Lake evening"],
      },
      {
        day: 3,
        title: "Pokhara Adventures",
        stay: "Lakeside hotel",
        activities: ["Paragliding", "Sarangkot"],
      },
      {
        day: 4,
        title: "Trek to Australian Camp",
        stay: "Mountain lodge",
        activities: ["Short trek", "Sunset panorama"],
      },
      {
        day: 5,
        title: "Trek Return",
        stay: "Lakeside hotel",
        activities: ["Descend", "Rest"],
      },
      {
        day: 6,
        title: "Pokhara → Chitwan",
        stay: "Jungle lodge",
        activities: ["Tharu culture"],
      },
      {
        day: 7,
        title: "Safari Day",
        stay: "Jungle lodge",
        activities: ["Jeep safari", "Canoe"],
      },
      {
        day: 8,
        title: "Chitwan → Bandipur",
        stay: "Hill guesthouse",
        activities: ["Heritage walk"],
      },
      {
        day: 9,
        title: "Bandipur → Kathmandu",
        stay: "Thamel hotel",
        activities: ["Shopping"],
      },
      {
        day: 10,
        title: "Departure",
        activities: ["Optional mountain flight", "Transfer"],
      },
    ],
  },
];

export function getItinerariesByDuration(days: 3 | 7 | 10): ItineraryPreview[] {
  return READY_MADE_ITINERARIES.filter((item) => item.durationDays === days);
}

export function getItineraryBySlug(slug: string): ItineraryDetail | undefined {
  const aliases: Record<string, string> = {
    "3-days": "pokhara-adventure-3",
    "7-days": "pokhara-adventure-7",
    "10-days": "nepal-highlights-10",
  };

  const resolvedSlug = aliases[slug] ?? slug;
  return READY_MADE_ITINERARIES.find((item) => item.slug === resolvedSlug);
}

export function isDurationHubSlug(slug: string): slug is "3-days" | "7-days" | "10-days" {
  return slug === "3-days" || slug === "7-days" || slug === "10-days";
}

export function getDurationFromHubSlug(slug: "3-days" | "7-days" | "10-days"): 3 | 7 | 10 {
  return Number.parseInt(slug, 10) as 3 | 7 | 10;
}
