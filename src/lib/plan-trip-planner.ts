export type TripInterest = "adventure" | "culture" | "food" | "wildlife";
export type TripDuration = 3 | 7 | 10;
export type TripBudget = "low" | "medium" | "luxury";
export type TravelStyle = "solo" | "couple" | "group";

export interface PlannerDay {
  day: number;
  title: string;
  travel?: string;
  stay?: string;
  activities: string[];
}

export interface GeneratedPlan {
  title: string;
  summary: string;
  days: PlannerDay[];
  budgetRange: string;
  travelStyleNote: string;
}

export interface PlannerChoice<T extends string | number> {
  value: T;
  label: string;
}

export const INTEREST_OPTIONS: PlannerChoice<TripInterest>[] = [
  { value: "adventure", label: "Adventure" },
  { value: "culture", label: "Culture" },
  { value: "food", label: "Food" },
  { value: "wildlife", label: "Wildlife" },
];

export const DURATION_OPTIONS: PlannerChoice<TripDuration>[] = [
  { value: 3, label: "3 Days" },
  { value: 7, label: "7 Days" },
  { value: 10, label: "10 Days" },
];

export const BUDGET_OPTIONS: PlannerChoice<TripBudget>[] = [
  { value: "low", label: "Low" },
  { value: "medium", label: "Medium" },
  { value: "luxury", label: "Luxury" },
];

export const STYLE_OPTIONS: PlannerChoice<TravelStyle>[] = [
  { value: "solo", label: "Solo" },
  { value: "couple", label: "Couple" },
  { value: "group", label: "Group" },
];

const BUDGET_RANGES: Record<TripDuration, Record<TripBudget, string>> = {
  3: {
    low: "$120–$180",
    medium: "$180–$280",
    luxury: "$280–$450",
  },
  7: {
    low: "$400–$550",
    medium: "$550–$750",
    luxury: "$750–$1,200",
  },
  10: {
    low: "$520–$700",
    medium: "$700–$950",
    luxury: "$950–$1,500",
  },
};

const STYLE_NOTES: Record<TravelStyle, string> = {
  solo: "Solo-friendly guesthouses, shared jeeps, and flexible daily pacing.",
  couple: "Romantic lakeside stays, private tours, and relaxed mornings.",
  group: "Group transport discounts, shared activities, and easy coordination.",
};

type PlanTemplate = Pick<GeneratedPlan, "title" | "summary" | "days">;

const PLAN_TEMPLATES: Record<`${TripInterest}-${TripDuration}`, PlanTemplate> = {
  "adventure-3": {
    title: "Pokhara Adventure Escape",
    summary: "Kathmandu to Pokhara with sunrise views and adrenaline activities.",
    days: [
      {
        day: 1,
        title: "Kathmandu → Pokhara",
        travel: "Tourist bus (6–7 hrs) or short flight (25 min)",
        stay: "Lakeside guesthouse, Pokhara",
        activities: ["Lakeside evening walk", "Dinner with Annapurna views"],
      },
      {
        day: 2,
        title: "Sarangkot & Paragliding",
        stay: "Lakeside guesthouse, Pokhara",
        activities: ["Sarangkot sunrise", "Paragliding over Phewa Lake", "Boating on Phewa Lake"],
      },
      {
        day: 3,
        title: "Return to Kathmandu",
        travel: "Morning bus or flight back",
        activities: ["Souvenir shopping in Thamel", "Farewell dinner"],
      },
    ],
  },
  "adventure-7": {
    title: "Annapurna Foothills Adventure",
    summary: "Pokhara base with trekking, viewpoints, and village trails.",
    days: [
      {
        day: 1,
        title: "Arrive Kathmandu",
        stay: "Thamel hotel",
        activities: ["Trip briefing", "Explore Thamel"],
      },
      {
        day: 2,
        title: "Kathmandu → Pokhara",
        travel: "Scenic drive or flight",
        stay: "Lakeside hotel",
        activities: ["Lakeside sunset", "Live music café"],
      },
      {
        day: 3,
        title: "Sarangkot Sunrise",
        stay: "Lakeside hotel",
        activities: ["Sunrise at Sarangkot", "Paragliding or zip-line"],
      },
      {
        day: 4,
        title: "Ghandruk Trek Day 1",
        travel: "Drive to Nayapul, trek to Ghandruk",
        stay: "Tea house, Ghandruk",
        activities: ["Village walk", "Annapurna panorama"],
      },
      {
        day: 5,
        title: "Ghandruk Trek Day 2",
        travel: "Trek down to Nayapul",
        stay: "Pokhara hotel",
        activities: ["Mountain views", "Rest by the lake"],
      },
      {
        day: 6,
        title: "Pokhara Free Day",
        stay: "Lakeside hotel",
        activities: ["World Peace Pagoda", "Caves & waterfalls", "Optional ultralight flight"],
      },
      {
        day: 7,
        title: "Return Kathmandu",
        travel: "Bus or flight",
        activities: ["Last-minute shopping", "Departure prep"],
      },
    ],
  },
  "adventure-10": {
    title: "Himalayan Circuit",
    summary: "Mountains, jungle, and rivers across Nepal's adventure belt.",
    days: [
      {
        day: 1,
        title: "Kathmandu Arrival",
        stay: "Thamel hotel",
        activities: ["Welcome dinner", "Gear check"],
      },
      {
        day: 2,
        title: "Kathmandu → Pokhara",
        travel: "Drive or flight",
        stay: "Lakeside hotel",
        activities: ["Lakeside walk"],
      },
      {
        day: 3,
        title: "Pokhara Adventures",
        stay: "Lakeside hotel",
        activities: ["Sarangkot sunrise", "Paragliding"],
      },
      {
        day: 4,
        title: "Trek to Australian Camp",
        travel: "Drive + short trek",
        stay: "Mountain lodge",
        activities: ["Panoramic sunset", "Campfire evening"],
      },
      {
        day: 5,
        title: "Trek Return & Pokhara",
        stay: "Lakeside hotel",
        activities: ["Morning views", "Free afternoon"],
      },
      {
        day: 6,
        title: "Pokhara → Chitwan",
        travel: "Drive (4–5 hrs)",
        stay: "Jungle lodge",
        activities: ["Tharu cultural show"],
      },
      {
        day: 7,
        title: "Chitwan Safari",
        stay: "Jungle lodge",
        activities: ["Jeep safari", "Canoe ride", "Elephant briefing"],
      },
      {
        day: 8,
        title: "Chitwan → Bandipur",
        travel: "Scenic drive",
        stay: "Hilltop guesthouse",
        activities: ["Bandipur old town walk"],
      },
      {
        day: 9,
        title: "Bandipur → Kathmandu",
        travel: "Drive (4 hrs)",
        stay: "Thamel hotel",
        activities: ["Rest & explore"],
      },
      {
        day: 10,
        title: "Departure",
        activities: ["Optional cycling or spa", "Airport transfer"],
      },
    ],
  },
  "culture-3": {
    title: "Kathmandu Valley Heritage",
    summary: "UNESCO sites, living culture, and hilltop views near the capital.",
    days: [
      {
        day: 1,
        title: "Kathmandu Heritage",
        stay: "Thamel boutique hotel",
        activities: ["Durbar Square", "Swayambhunath (Monkey Temple)", "Asan bazaar"],
      },
      {
        day: 2,
        title: "Bhaktapur & Patan",
        travel: "Local taxi between cities",
        stay: "Thamel boutique hotel",
        activities: ["Bhaktapur Durbar Square", "Patan Museum", "Pottery square"],
      },
      {
        day: 3,
        title: "Nagarkot Sunrise",
        travel: "Early drive to Nagarkot, return via Bhaktapur",
        activities: ["Himalaya sunrise", "Short hill walk", "Departure"],
      },
    ],
  },
  "culture-7": {
    title: "Living Traditions Trail",
    summary: "Valley heritage, hill towns, and sacred lakeside culture.",
    days: [
      {
        day: 1,
        title: "Kathmandu Old City",
        stay: "Thamel hotel",
        activities: ["Durbar Square", "Kumari Ghar", "Evening aarati at Pashupatinath"],
      },
      {
        day: 2,
        title: "Patan & Bhaktapur",
        stay: "Thamel hotel",
        activities: ["Patan Durbar Square", "Bhaktapur pottery & squares"],
      },
      {
        day: 3,
        title: "Nagarkot & Dhulikhel",
        stay: "Dhulikhel resort",
        activities: ["Sunrise views", "Old Newari town walk"],
      },
      {
        day: 4,
        title: "Dhulikhel → Pokhara",
        travel: "Scenic drive or flight",
        stay: "Lakeside hotel",
        activities: ["Phewa Lake evening"],
      },
      {
        day: 5,
        title: "Pokhara Culture",
        stay: "Lakeside hotel",
        activities: ["World Peace Pagoda", "International Mountain Museum"],
      },
      {
        day: 6,
        title: "Gurung Village Visit",
        travel: "Day trip from Pokhara",
        stay: "Lakeside hotel",
        activities: ["Village homestay lunch", "Traditional dance demo"],
      },
      {
        day: 7,
        title: "Return Kathmandu",
        activities: ["Final shopping", "Departure"],
      },
    ],
  },
  "culture-10": {
    title: "Nepal Cultural Grand Tour",
    summary: "From Buddha's birthplace to ancient kingdoms and jungle edges.",
    days: [
      {
        day: 1,
        title: "Kathmandu Arrival",
        stay: "Thamel hotel",
        activities: ["Welcome briefing", "Thamel orientation"],
      },
      {
        day: 2,
        title: "Kathmandu UNESCO Sites",
        stay: "Thamel hotel",
        activities: ["Swayambhunath", "Boudhanath", "Pashupatinath"],
      },
      {
        day: 3,
        title: "Bhaktapur & Patan",
        stay: "Thamel hotel",
        activities: ["Durbar squares", "Local artisan workshops"],
      },
      {
        day: 4,
        title: "Kathmandu → Lumbini",
        travel: "Flight or long drive",
        stay: "Lumbini guesthouse",
        activities: ["Maya Devi Temple", "Monastery circuit"],
      },
      {
        day: 5,
        title: "Lumbini Exploration",
        stay: "Lumbini guesthouse",
        activities: ["World Peace Pagoda", "Meditation gardens"],
      },
      {
        day: 6,
        title: "Lumbini → Chitwan",
        travel: "Drive (3–4 hrs)",
        stay: "Jungle lodge",
        activities: ["Tharu village walk"],
      },
      {
        day: 7,
        title: "Chitwan Culture & Nature",
        stay: "Jungle lodge",
        activities: ["Canoe ride", "Tharu cultural program"],
      },
      {
        day: 8,
        title: "Chitwan → Pokhara",
        travel: "Drive (4–5 hrs)",
        stay: "Lakeside hotel",
        activities: ["Lakeside stroll"],
      },
      {
        day: 9,
        title: "Pokhara Highlights",
        stay: "Lakeside hotel",
        activities: ["Peace Pagoda", "Old Pokhara bazaar"],
      },
      {
        day: 10,
        title: "Return Kathmandu",
        activities: ["Souvenirs", "Departure"],
      },
    ],
  },
  "food-3": {
    title: "Kathmandu Flavors",
    summary: "Street food, Newari feasts, and hands-on cooking in the valley.",
    days: [
      {
        day: 1,
        title: "Thamel Food Walk",
        stay: "Thamel hotel",
        activities: ["Momo tasting trail", "Lassi & chatpate stops", "Rooftop dinner"],
      },
      {
        day: 2,
        title: "Newari Feast in Bhaktapur",
        travel: "Day trip to Bhaktapur",
        stay: "Thamel hotel",
        activities: ["Samay baji lunch", "Juju dhau (king curd)", "Tea house stop"],
      },
      {
        day: 3,
        title: "Cooking Class & Farewell",
        stay: "Thamel hotel",
        activities: ["Dal bhat cooking class", "Spice market visit", "Farewell dinner"],
      },
    ],
  },
  "food-7": {
    title: "Taste of Nepal",
    summary: "Valley cuisine, lakeside cafés, and village meals across two regions.",
    days: [
      {
        day: 1,
        title: "Kathmandu Introduction",
        stay: "Thamel hotel",
        activities: ["Welcome dinner", "Street food orientation"],
      },
      {
        day: 2,
        title: "Old City Eats",
        stay: "Thamel hotel",
        activities: ["Asan market tour", "Newari snack crawl"],
      },
      {
        day: 3,
        title: "Bhaktapur & Patan",
        stay: "Thamel hotel",
        activities: ["Traditional lunch", "Coffee in Patan courtyards"],
      },
      {
        day: 4,
        title: "Kathmandu → Pokhara",
        travel: "Drive or flight",
        stay: "Lakeside hotel",
        activities: ["Lakeside seafood dinner"],
      },
      {
        day: 5,
        title: "Pokhara Food Day",
        stay: "Lakeside hotel",
        activities: ["Breakfast with lake view", "Thakali set lunch", "Craft beer tasting"],
      },
      {
        day: 6,
        title: "Village Meal Experience",
        travel: "Day trip from Pokhara",
        stay: "Lakeside hotel",
        activities: ["Farm-to-table lunch", "Local distillation demo"],
      },
      {
        day: 7,
        title: "Return Kathmandu",
        activities: ["Final food market stop", "Departure"],
      },
    ],
  },
  "food-10": {
    title: "Nepal Culinary Journey",
    summary: "From capital kitchens to Terai flavors and lakeside dining.",
    days: [
      {
        day: 1,
        title: "Kathmandu Arrival",
        stay: "Thamel hotel",
        activities: ["Welcome feast", "Spice intro"],
      },
      {
        day: 2,
        title: "Valley Food Tour",
        stay: "Thamel hotel",
        activities: ["Morning market", "Cooking workshop"],
      },
      {
        day: 3,
        title: "Bhaktapur Traditions",
        stay: "Thamel hotel",
        activities: ["Newari banquet", "Curd & sweets tasting"],
      },
      {
        day: 4,
        title: "Kathmandu → Chitwan",
        travel: "Drive",
        stay: "Jungle lodge",
        activities: ["Tharu-style dinner"],
      },
      {
        day: 5,
        title: "Terai Flavors",
        stay: "Jungle lodge",
        activities: ["Local fish curry lunch", "Village cooking demo"],
      },
      {
        day: 6,
        title: "Chitwan → Lumbini",
        travel: "Drive",
        stay: "Lumbini guesthouse",
        activities: ["Vegetarian monastery meal"],
      },
      {
        day: 7,
        title: "Lumbini → Pokhara",
        travel: "Drive",
        stay: "Lakeside hotel",
        activities: ["Lakeside dinner"],
      },
      {
        day: 8,
        title: "Pokhara Tastes",
        stay: "Lakeside hotel",
        activities: ["Thakali thali", "Café hopping"],
      },
      {
        day: 9,
        title: "Mountain View Lunch",
        stay: "Lakeside hotel",
        activities: ["Sarangkot breakfast", "Hill restaurant lunch"],
      },
      {
        day: 10,
        title: "Return Kathmandu",
        activities: ["Souvenir spices", "Departure"],
      },
    ],
  },
  "wildlife-3": {
    title: "Chitwan Wildlife Weekend",
    summary: "Quick jungle escape with safari, river, and Tharu culture.",
    days: [
      {
        day: 1,
        title: "Kathmandu → Chitwan",
        travel: "Tourist bus or private car (5–6 hrs)",
        stay: "Jungle lodge, Sauraha",
        activities: ["Tharu cultural dance", "Sunset by the river"],
      },
      {
        day: 2,
        title: "Jungle Safari Day",
        stay: "Jungle lodge",
        activities: ["Jeep safari", "Canoe on Rapti River", "Elephant breeding center"],
      },
      {
        day: 3,
        title: "Morning Birding & Return",
        travel: "Return to Kathmandu",
        activities: ["Early bird walk", "Breakfast", "Afternoon arrival in Kathmandu"],
      },
    ],
  },
  "wildlife-7": {
    title: "Jungle & Wetlands",
    summary: "Chitwan safari plus Koshi Tappu birding for nature lovers.",
    days: [
      {
        day: 1,
        title: "Kathmandu → Chitwan",
        travel: "Drive (5 hrs)",
        stay: "Jungle lodge",
        activities: ["Village walk", "Cultural program"],
      },
      {
        day: 2,
        title: "Full Safari Day",
        stay: "Jungle lodge",
        activities: ["Jeep safari", "Canoe", "Crocodile spotting"],
      },
      {
        day: 3,
        title: "Chitwan Activities",
        stay: "Jungle lodge",
        activities: ["Elephant briefing", "Jungle walk with guide"],
      },
      {
        day: 4,
        title: "Chitwan → Koshi Tappu",
        travel: "Drive (4 hrs)",
        stay: "Birder's lodge",
        activities: ["Wetland sunset"],
      },
      {
        day: 5,
        title: "Birding at Koshi Tappu",
        stay: "Birder's lodge",
        activities: ["Morning bird watch", "Boat on Koshi River"],
      },
      {
        day: 6,
        title: "Koshi → Kathmandu",
        travel: "Long drive or flight connection",
        stay: "Thamel hotel",
        activities: ["Rest evening"],
      },
      {
        day: 7,
        title: "Departure",
        activities: ["Optional Nagarjun forest walk", "Airport transfer"],
      },
    ],
  },
  "wildlife-10": {
    title: "Wild Nepal Expedition",
    summary: "Chitwan jungle, Bardia wilderness, and wetland birding.",
    days: [
      {
        day: 1,
        title: "Kathmandu Arrival",
        stay: "Thamel hotel",
        activities: ["Trip briefing"],
      },
      {
        day: 2,
        title: "Kathmandu → Chitwan",
        travel: "Drive",
        stay: "Jungle lodge",
        activities: ["Tharu village"],
      },
      {
        day: 3,
        title: "Chitwan Safari",
        stay: "Jungle lodge",
        activities: ["Jeep safari", "River canoe"],
      },
      {
        day: 4,
        title: "Chitwan Deep Jungle",
        stay: "Jungle lodge",
        activities: ["Guided walk", "Bird watching"],
      },
      {
        day: 5,
        title: "Chitwan → Bardia",
        travel: "Drive or flight combo",
        stay: "Bardia lodge",
        activities: ["Evening nature walk"],
      },
      {
        day: 6,
        title: "Bardia Safari",
        stay: "Bardia lodge",
        activities: ["Jeep safari", "Tiger tracking attempt"],
      },
      {
        day: 7,
        title: "Bardia Exploration",
        stay: "Bardia lodge",
        activities: ["Elephant ride or walk", "Crocodile river watch"],
      },
      {
        day: 8,
        title: "Bardia → Nepalgunj → Kathmandu",
        travel: "Flight recommended",
        stay: "Thamel hotel",
        activities: ["Rest"],
      },
      {
        day: 9,
        title: "Phulchoki Birding",
        travel: "Day trip from Kathmandu",
        stay: "Thamel hotel",
        activities: ["Forest birding", "Mountain views"],
      },
      {
        day: 10,
        title: "Departure",
        activities: ["Free morning", "Airport transfer"],
      },
    ],
  },
};

export interface PlannerInput {
  interest: TripInterest;
  duration: TripDuration;
  budget: TripBudget;
  style: TravelStyle;
}

export function generateTripPlan(input: PlannerInput): GeneratedPlan {
  const key = `${input.interest}-${input.duration}` as keyof typeof PLAN_TEMPLATES;
  const template = PLAN_TEMPLATES[key];

  return {
    ...template,
    budgetRange: BUDGET_RANGES[input.duration][input.budget],
    travelStyleNote: STYLE_NOTES[input.style],
  };
}

export function isPlannerComplete(
  input: Partial<PlannerInput>
): input is PlannerInput {
  return Boolean(input.interest && input.duration && input.budget && input.style);
}
