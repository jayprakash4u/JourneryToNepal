import type { LucideIcon } from "lucide-react";
import {
  Backpack,
  Bike,
  Binoculars,
  CircleDot,
  FileText,
  Flame,
  HeartPulse,
  Mountain,
  Shield,
  Snowflake,
  Tent,
  TreePine,
  Waves,
  Wind,
  Zap,
} from "lucide-react";

function adventureCategoryImage(filename: string) {
  return encodeURI(`/images/adventure-trekking/Adventure Categories/${filename}`);
}

function featuredAdventureImage(filename: string) {
  return encodeURI(`/images/adventure-trekking/Featured Adventures/${filename}`);
}

function adventureActivityImage(filename: string) {
  return encodeURI(`/images/adventure-trekking/Adventure activites/${filename}`);
}

function popularRegionImage(filename: string) {
  return encodeURI(`/images/adventure-trekking/popular region/${filename}`);
}


export type AdventureFilter =
  | "trekking"
  | "mountains"
  | "adventure"
  | "camping"
  | "easy"
  | "popular";

export interface AdventureQuickFilter {
  id: AdventureFilter;
  label: string;
}

export interface AdventureCategory {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
}

export interface FeaturedAdventure {
  slug: string;
  title: string;
  rating: number;
  duration: string;
  difficulty: string;
  season: string;
  region: string;
  description: string;
  href: string;
  image: string;
}

export interface AdventureRegion {
  slug: string;
  title: string;
  trekCount: number;
  description: string;
  href: string;
  image: string;
}

export interface AdventureActivity {
  slug: string;
  title: string;
  description: string;
  location: string;
  href: string;
  image: string;
}

export interface TrekSeason {
  name: string;
  months: string;
  rating: number;
  highlights: string[];
  note?: string;
}

export interface WhyTrekPoint {
  title: string;
  icon: LucideIcon;
}

export interface TravelTip {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface AdventureArticle {
  slug: string;
  title: string;
  excerpt: string;
  href: string;
  readTime: string;
}

export interface AdventureFaqItem {
  question: string;
  answer: string;
}

export const ADVENTURE_HERO = {
  headline: "Adventure & Trekking in Nepal",
  subtext:
    "Discover world-famous trekking routes, thrilling adventures, and unforgettable journeys through the Himalayas.",
  searchLabel: "Where do you want to go?",
  searchPlaceholder: "Search trekking routes, destinations...",
  videoSrc: "/images/adventure-trekking/herosectionvideo.mp4",
  cta: { label: "Explore Adventures", href: "#featured-adventures" },
} as const;

export const ADVENTURE_QUICK_FILTERS: AdventureQuickFilter[] = [
  { id: "trekking", label: "Trekking" },
  { id: "mountains", label: "Mountains" },
  { id: "adventure", label: "Adventure" },
  { id: "camping", label: "Camping" },
  { id: "easy", label: "Easy Treks" },
  { id: "popular", label: "Popular" },
];

export const ADVENTURE_CATEGORIES: AdventureCategory[] = [
  {
    slug: "trekking",
    title: "Trekking",
    description: "Himalayan trekking routes",
    icon: Backpack,
    image: adventureCategoryImage("Trekking.jpg"),
  },
  {
    slug: "paragliding",
    title: "Paragliding",
    description: "Soar above lakes and peaks",
    icon: Wind,
    image: adventureCategoryImage("paraglading.jpg"),
  },
  {
    slug: "rafting",
    title: "White Water Rafting",
    description: "Rapids on Nepal's mountain rivers",
    icon: Waves,
    image: adventureCategoryImage("rafting.jpg"),
  },
  {
    slug: "bungee-jump",
    title: "Bungee Jump",
    description: "World-class canyon jumps",
    icon: Zap,
    image: adventureCategoryImage("bunji jumping.jpg"),
  },
  {
    slug: "camping",
    title: "Camping",
    description: "Overnight nature experiences",
    icon: Tent,
    image: adventureCategoryImage("camping.jpg"),
  },
  {
    slug: "peak-climbing",
    title: "Peak Climbing",
    description: "Summit iconic Himalayan peaks",
    icon: Mountain,
    image: adventureCategoryImage("peak climbing.jpg"),
  },
  {
    slug: "mountain-biking",
    title: "Mountain Biking",
    description: "Trail rides through hills and valleys",
    icon: Bike,
    image: adventureCategoryImage("mountain biking.jpg"),
  },
  {
    slug: "rock-climbing",
    title: "Rock Climbing",
    description: "Climb natural rock formations",
    icon: CircleDot,
    image: adventureCategoryImage("rock climbing.jpg"),
  },
];

export const FEATURED_ADVENTURES: FeaturedAdventure[] = [
  {
    slug: "everest-base-camp",
    title: "Everest Base Camp",
    rating: 5,
    duration: "14 Days",
    difficulty: "Hard",
    season: "Spring • Autumn",
    region: "Everest Region",
    description: "The world's most iconic trekking destination.",
    href: "/treks/everest-base-camp",
    image: featuredAdventureImage("everest base camp.jpg"),
  },
  {
    slug: "annapurna-circuit",
    title: "Annapurna Circuit",
    rating: 5,
    duration: "12 Days",
    difficulty: "Moderate",
    season: "Spring • Autumn",
    region: "Annapurna Region",
    description: "Classic loop with diverse landscapes and cultures.",
    href: "/treks/annapurna-circuit",
    image: featuredAdventureImage("annapurna trek.jpg"),
  },
  {
    slug: "langtang-valley",
    title: "Langtang Valley",
    rating: 4,
    duration: "7 Days",
    difficulty: "Moderate",
    season: "Spring • Autumn",
    region: "Langtang",
    description: "Close to Kathmandu with stunning valley views.",
    href: "/treks/langtang-valley",
    image: featuredAdventureImage("langtang valley.jpg"),
  },
  {
    slug: "gokyo-lakes",
    title: "Gokyo Lakes Trek",
    rating: 5,
    duration: "12 Days",
    difficulty: "Hard",
    season: "Spring • Autumn",
    region: "Everest Region",
    description: "Turquoise alpine lakes and Gokyo Ri panoramas.",
    href: "/treks/gokyo-lakes",
    image: featuredAdventureImage("gokyo lakes.jpg"),
  },
  {
    slug: "poon-hill",
    title: "Poon Hill Trek",
    rating: 4,
    duration: "5 Days",
    difficulty: "Easy",
    season: "Year-round",
    region: "Annapurna Region",
    description: "Short trek with famous sunrise mountain views.",
    href: "/treks/poon-hill",
    image: featuredAdventureImage("poon hill trek.jpg"),
  },
  {
    slug: "upper-mustang",
    title: "Upper Mustang",
    rating: 5,
    duration: "10 Days",
    difficulty: "Moderate",
    season: "Spring • Autumn",
    region: "Mustang",
    description: "Forbidden kingdom of desert canyons and monasteries.",
    href: "/treks/upper-mustang",
    image: featuredAdventureImage("upper mustang.jpg"),
  },
  {
    slug: "manaslu-circuit",
    title: "Manaslu Circuit",
    rating: 5,
    duration: "14 Days",
    difficulty: "Challenging",
    season: "Spring • Autumn",
    region: "Manaslu",
    description: "Remote circuit around the eighth-highest peak.",
    href: "/treks/manaslu-circuit",
    image: featuredAdventureImage("manaslu circuit.jpg"),
  },
  {
    slug: "everest-view",
    title: "Everest View Trek",
    rating: 4,
    duration: "8 Days",
    difficulty: "Moderate",
    season: "Spring • Autumn",
    region: "Everest Region",
    description: "See Everest without the full base camp commitment.",
    href: "/treks/everest-view",
    image: featuredAdventureImage("everest view trek.jpg"),
  },
];

export const POPULAR_REGIONS: AdventureRegion[] = [
  {
    slug: "everest",
    title: "Everest Region",
    trekCount: 12,
    description: "Home to the world's highest peak and legendary trails.",
    href: "/regions/everest",
    image: popularRegionImage("Everest region.jpg"),
  },
  {
    slug: "annapurna",
    title: "Annapurna Region",
    trekCount: 15,
    description: "Nepal's most diverse trekking area with varied routes.",
    href: "/regions/annapurna",
    image: popularRegionImage("Annapurna region.jpg"),
  },
  {
    slug: "langtang",
    title: "Langtang",
    trekCount: 8,
    description: "Accessible from Kathmandu with Tamang culture and peaks.",
    href: "/regions/langtang",
    image: popularRegionImage("Langtang region.jpg"),
  },
  {
    slug: "mustang",
    title: "Mustang",
    trekCount: 6,
    description: "Rain-shadow desert landscapes and ancient kingdoms.",
    href: "/regions/mustang",
    image: popularRegionImage("mustang region.jpg"),
  },
  {
    slug: "manaslu",
    title: "Manaslu",
    trekCount: 5,
    description: "Remote trails circling a majestic 8,000m peak.",
    href: "/regions/manaslu",
    image: popularRegionImage("manaslu region.jpg"),
  },
  {
    slug: "dolpo",
    title: "Dolpo",
    trekCount: 4,
    description: "Wild west Nepal — isolated villages and crystal lakes.",
    href: "/regions/dolpo",
    image: popularRegionImage("Dolpo region.jpg"),
  },
];

export const ADVENTURE_ACTIVITIES: AdventureActivity[] = [
  {
    slug: "paragliding",
    title: "Paragliding",
    description: "Soar above Pokhara with tandem flights and stunning lake views.",
    location: "Pokhara",
    href: "/activities/paragliding",
    image: adventureActivityImage("parafliding.jpg"),
  },
  {
    slug: "bungee",
    title: "Bungee Jump",
    description: "Leap from suspension bridges over deep Himalayan river gorges.",
    location: "Kushma · Pokhara",
    href: "/activities/bungee",
    image: adventureActivityImage("Bungee jump.jpg"),
  },
  {
    slug: "rafting",
    title: "White Water Rafting",
    description: "Class III–IV rapids on Trishuli, Bhote Koshi, and Seti rivers.",
    location: "Multiple regions",
    href: "/activities/rafting",
    image: adventureActivityImage("white water rafting.jpg"),
  },
  {
    slug: "zipline",
    title: "Zipline",
    description: "Fly through valleys with panoramic mountain backdrops.",
    location: "Pokhara · Dhulikhel",
    href: "/activities/zipline",
    image: adventureActivityImage("zipline.jpg"),
  },
  {
    slug: "mountain-flight",
    title: "Mountain Flight",
    description: "One-hour scenic flight along the Everest massif from Kathmandu.",
    location: "Kathmandu",
    href: "/activities/mountain-flight",
    image: adventureActivityImage("Mountain flight.jpg"),
  },
  {
    slug: "atv",
    title: "ATV Ride",
    description: "Off-road trails through hills, rivers, and rural villages.",
    location: "Pokhara",
    href: "/activities/atv",
    image: adventureActivityImage("Atv ride.jpg"),
  },
  {
    slug: "canyoning",
    title: "Canyoning",
    description: "Rappel waterfalls and navigate narrow canyon gorges.",
    location: "Sundarijal · Pokhara",
    href: "/activities/canyoning",
    image: adventureActivityImage("Canyoning.jpg"),
  },
  {
    slug: "rock-climbing",
    title: "Rock Climbing",
    description: "Natural rock walls and guided routes for every skill level.",
    location: "Kathmandu · Nagarjun",
    href: "/activities/rock-climbing",
    image: adventureActivityImage("Rock climbing.jpg"),
  },
];

export const TREK_SEASONS: TrekSeason[] = [
  {
    name: "Spring",
    months: "March–May",
    rating: 5,
    highlights: ["Excellent visibility", "Flowers bloom", "Perfect trekking"],
  },
  {
    name: "Summer",
    months: "June–August",
    rating: 3,
    highlights: ["Rainy season", "Lower region treks", "Lush green valleys"],
    note: "Monsoon rains in most regions",
  },
  {
    name: "Autumn",
    months: "September–November",
    rating: 5,
    highlights: ["Peak trekking season", "Crystal clear skies", "Stable weather"],
  },
  {
    name: "Winter",
    months: "December–February",
    rating: 3,
    highlights: ["Snow at altitude", "Limited high routes", "Quiet trails"],
    note: "Best for low-altitude treks",
  },
];

export const WHY_TREK_POINTS: WhyTrekPoint[] = [
  { title: "World's highest mountains", icon: Mountain },
  { title: "Rich local culture", icon: TreePine },
  { title: "Experienced guides", icon: Binoculars },
  { title: "Incredible biodiversity", icon: Flame },
];

export const TRAVEL_TIPS: TravelTip[] = [
  { title: "Packing checklist", description: "Layers, boots, sleeping bag, and rain gear essentials.", icon: Backpack },
  { title: "Permits", description: "TIMS, national park entry, and restricted area permits.", icon: FileText },
  { title: "Safety", description: "Trek with licensed guides and registered agencies.", icon: Shield },
  { title: "Insurance", description: "Get coverage that includes helicopter evacuation.", icon: HeartPulse },
  { title: "Altitude sickness", description: "Ascend slowly, stay hydrated, know the symptoms.", icon: Mountain },
  { title: "Weather", description: "Check forecasts and plan buffer days for delays.", icon: Snowflake },
];

export const GALLERY_PLACEHOLDERS = Array.from({ length: 8 }, (_, index) => ({
  id: `gallery-${index + 1}`,
  gradient: [
    "from-primary via-primary-light/60 to-secondary/80",
    "from-slate-800 via-primary/50 to-blue-900",
    "from-emerald-800 via-teal-700/60 to-primary",
    "from-amber-800 via-orange-700/50 to-red-900",
    "from-indigo-900 via-primary-light/40 to-slate-900",
    "from-cyan-900 via-blue-800/50 to-primary",
    "from-stone-800 via-amber-900/40 to-orange-900",
    "from-green-900 via-emerald-800/50 to-teal-900",
  ][index % 8],
  aspect: ["aspect-[4/5]", "aspect-square", "aspect-[3/4]", "aspect-[5/4]"][index % 4],
}));

export const ADVENTURE_ARTICLES: AdventureArticle[] = [
  {
    slug: "first-trek-guide",
    title: "Your First Trek in Nepal",
    excerpt: "Everything beginners need to know before hitting the trail.",
    href: "/blog/guides/first-trek",
    readTime: "7 min read",
  },
  {
    slug: "everest-permits",
    title: "Permits for Everest Region",
    excerpt: "TIMS, Sagarmatha National Park, and what you'll need.",
    href: "/blog/guides/everest-permits",
    readTime: "5 min read",
  },
  {
    slug: "trekking-seasons",
    title: "Best Seasons for Trekking",
    excerpt: "When to go for clear skies, flowers, or fewer crowds.",
    href: "/blog/tips/trekking-seasons",
    readTime: "4 min read",
  },
];

export const ADVENTURE_FAQ: AdventureFaqItem[] = [
  {
    question: "Do I need permits to trek in Nepal?",
    answer:
      "Yes. Most treks require a TIMS card and national park entry permit. Restricted areas like Upper Mustang and Manaslu need special permits through a registered agency.",
  },
  {
    question: "What's the best season for trekking?",
    answer:
      "Spring (March–May) and autumn (September–November) offer the best weather and mountain views. Winter works for lower trails; summer is monsoon season.",
  },
  {
    question: "Can beginners trek in Nepal?",
    answer:
      "Absolutely. Routes like Poon Hill, Ghorepani, and short Langtang trips are ideal for first-timers. Start with 5–7 day easy treks and acclimatize properly.",
  },
  {
    question: "How expensive is trekking in Nepal?",
    answer:
      "Budget treks run $30–50/day (teahouse, meals, guide). Mid-range is $50–80/day. Luxury or peak climbing costs significantly more. Flights and permits are extra.",
  },
  {
    question: "Do I need a guide?",
    answer:
      "Some restricted areas require a licensed guide. For popular routes, guides are optional but strongly recommended for safety, navigation, and cultural insight.",
  },
  {
    question: "How do I prepare for altitude?",
    answer:
      "Ascend gradually, drink plenty of water, avoid alcohol at altitude, and include rest days. Learn AMS symptoms and descend immediately if they worsen.",
  },
];

export const ADVENTURE_FINAL_CTA = {
  title: "Ready for Your Himalayan Adventure?",
  explore: { label: "Explore Treks", href: "#featured-adventures" },
  plan: { label: "Plan My Trip", href: "/plan-trip/planner" },
} as const;
