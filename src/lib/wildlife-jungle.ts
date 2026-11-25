function wildlifeImage(filename: string) {
  return encodeURI(`/images/wildlife and jungle/${filename}`);
}

function chooseJungleSafariImage(filename: string) {
  return encodeURI(`/images/wildlife and jungle/choosejunglesafari/${filename}`);
}

function nationalParkImage(filename: string) {
  return encodeURI(`/images/wildlife and jungle/national park/${filename}`);
}

function nepalWildlifeImage(filename: string) {
  return encodeURI(`/images/wildlife and jungle/nepal wildlifes/${filename}`);
}

function wildlifeExploreByRegionImage(filename: string) {
  return encodeURI(`/images/wildlife and jungle/explorebyregion/${filename}`);
}

function categoryImage(filename: string) {
  return encodeURI(`/images/home page/categories/${filename}`);
}

export const WILDLIFE_JUNGLE_HERO = {
  headline: "Explore Wildlife & Jungle in Nepal",
  subtext:
    "Track rhinos and tigers in lush national parks, glide along jungle rivers, and discover the Terai's incredible biodiversity.",
  imageSrc: categoryImage("wildlife and jungle.jpg"),
  videoSrc: wildlifeImage("13190213_3840_2160_32fps.mp4"),
  useVideo: true,
  badge: "Wildlife · Safari · Jungle",
  ctas: {
    explore: { label: "Explore Safaris", href: "#choose-jungle-adventure" },
    plan: { label: "Plan Your Trip", href: "/plan-trip/planner" },
  },
} as const;

export const CHOOSE_JUNGLE_ADVENTURE_SECTION = {
  eyebrow: "Choose Your",
  title: "Jungle Adventure",
  subtitle:
    "From jeep safaris to river canoes — pick the wildlife experience that fits your style of adventure.",
} as const;

export interface JungleAdventureActivity {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  href: string;
  image: string;
}

export const JUNGLE_ADVENTURE_ACTIVITIES: readonly JungleAdventureActivity[] = [
  {
    slug: "jungle-safari",
    title: "Jungle Safari",
    tagline: "Jeep · Wildlife",
    description: "Track tigers, deer, and wildlife from an open-top jeep through Nepal's national parks.",
    href: "/explore/wildlife-jungle/jungle-safari",
    image: chooseJungleSafariImage("Jungle Safari.jpg"),
  },
  {
    slug: "rhino-tracking",
    title: "Rhino Tracking",
    tagline: "On Foot · Guided",
    description: "Walk alongside expert guides to observe one-horned rhinos in Chitwan's grasslands.",
    href: "/explore/wildlife-jungle/rhino-tracking",
    image: chooseJungleSafariImage("Rhino Tracking.jpg"),
  },
  {
    slug: "elephant-safari",
    title: "Elephant Safari",
    tagline: "Elephant Back · Forest",
    description: "Rise above the tall grass on an elephant-back safari through dense jungle trails.",
    href: "/explore/wildlife-jungle/elephant-safari",
    image: chooseJungleSafariImage("Elephant Safari.jpg"),
  },
  {
    slug: "bird-watching",
    title: "Bird Watching",
    tagline: "Birding · Nature",
    description: "Spot hornbills, storks, and over 500 bird species with experienced naturalist guides.",
    href: "/explore/wildlife-jungle/bird-watching",
    image: chooseJungleSafariImage("Bird Watching.jpg"),
  },
  {
    slug: "canoe-ride",
    title: "Canoe Ride",
    tagline: "River · Dawn",
    description: "Glide silently along jungle rivers at sunrise to watch crocodiles, birds, and river life.",
    href: "/explore/wildlife-jungle/canoe-ride",
    image: chooseJungleSafariImage("Canoe Ride.jpg"),
  },
  {
    slug: "nature-walk",
    title: "Nature Walk",
    tagline: "Trail · Forest",
    description: "Explore forest paths on foot with naturalists through pristine jungle habitats.",
    href: "/explore/wildlife-jungle/nature-walk",
    image: chooseJungleSafariImage("Nature Walk.jpg"),
  },
] as const;

export const NEPAL_NATIONAL_PARKS_SECTION = {
  titlePrefix: "Nepal's",
  titleHighlight: "National Parks",
  subtitle:
    "Explore the rich wildlife, diverse landscapes, and natural beauty of Nepal's protected areas.",
} as const;

export interface NationalPark {
  slug: string;
  name: string;
  province: string;
  wildlife: readonly string[];
  bestTime: string;
  href: string;
  image?: string;
}

export const NEPAL_NATIONAL_PARKS: readonly NationalPark[] = [
  {
    slug: "chitwan",
    name: "Chitwan National Park",
    province: "Bagmati Province",
    wildlife: ["Tiger", "One-horned Rhino", "Crocodile"],
    bestTime: "Oct – Mar",
    href: "/explore/wildlife-jungle/parks/chitwan",
    image: nationalParkImage("chitwan national park.jpg"),
  },
  {
    slug: "bardia",
    name: "Bardia National Park",
    province: "Karnali Province",
    wildlife: ["Tiger", "Elephant", "Leopard"],
    bestTime: "Oct – Apr",
    href: "/explore/wildlife-jungle/parks/bardia",
    image: nationalParkImage("2. Bardia National Park.jpg"),
  },
  {
    slug: "koshi-tappu",
    name: "Koshi Tappu Wildlife Reserve",
    province: "Province 1",
    wildlife: ["Birds", "Wild Buffalo", "Wetlands"],
    bestTime: "Sept – Mar",
    href: "/explore/wildlife-jungle/parks/koshi-tappu",
    image: nationalParkImage("3. Koshi Tappu Wildlife Reserve.jpg"),
  },
  {
    slug: "shuklaphanta",
    name: "Shuklaphanta National Park",
    province: "Sudurpashchim Province",
    wildlife: ["Swamp Deer", "Tiger", "Birds"],
    bestTime: "Oct – Apr",
    href: "/explore/wildlife-jungle/parks/shuklaphanta",
  },
  {
    slug: "parsa",
    name: "Parsa National Park",
    province: "Madhesh Province",
    wildlife: ["Elephant", "Tiger", "Leopard"],
    bestTime: "Oct – Mar",
    href: "/explore/wildlife-jungle/parks/parsa",
    image: nationalParkImage("5. Parsa National Park.jpg"),
  },
  {
    slug: "banke",
    name: "Banke National Park",
    province: "Lumbini Province",
    wildlife: ["Tiger", "Sloth Bear", "Leopard"],
    bestTime: "Oct – May",
    href: "/explore/wildlife-jungle/parks/banke",
    image: nationalParkImage(". Banke National Park.jpg"),
  },
] as const;

export const MEET_NEPAL_WILDLIFE_SECTION = {
  titlePrefix: "Meet Nepal's",
  titleHighlight: "Wildlife",
  subtitle: "Discover the incredible wildlife that calls Nepal home.",
} as const;

export type WildlifeRarity = "Rare" | "Common";

export type ConservationStatus =
  | "Critically Endangered"
  | "Endangered"
  | "Vulnerable"
  | "Least Concern";

export interface NepalWildlifeSpecies {
  slug: string;
  name: string;
  rarity: WildlifeRarity;
  conservationStatus: ConservationStatus;
  href: string;
  image: string;
}

export const NEPAL_WILDLIFE_SPECIES: readonly NepalWildlifeSpecies[] = [
  {
    slug: "bengal-tiger",
    name: "Bengal Tiger",
    rarity: "Rare",
    conservationStatus: "Endangered",
    href: "/explore/wildlife-jungle/wildlife/bengal-tiger",
    image: nepalWildlifeImage("bengal tiger.jpg"),
  },
  {
    slug: "one-horned-rhino",
    name: "One-horned Rhino",
    rarity: "Rare",
    conservationStatus: "Vulnerable",
    href: "/explore/wildlife-jungle/wildlife/one-horned-rhino",
    image: nepalWildlifeImage("rhino.jpg"),
  },
  {
    slug: "red-panda",
    name: "Red Panda",
    rarity: "Rare",
    conservationStatus: "Endangered",
    href: "/explore/wildlife-jungle/wildlife/red-panda",
    image: nepalWildlifeImage("redpanda.jpg"),
  },
  {
    slug: "snow-leopard",
    name: "Snow Leopard",
    rarity: "Rare",
    conservationStatus: "Endangered",
    href: "/explore/wildlife-jungle/wildlife/snow-leopard",
    image: nepalWildlifeImage("snow leaopard.jpg"),
  },
  {
    slug: "wild-elephant",
    name: "Wild Elephant",
    rarity: "Common",
    conservationStatus: "Vulnerable",
    href: "/explore/wildlife-jungle/wildlife/wild-elephant",
    image: nepalWildlifeImage("wildelephant.jpg"),
  },
  {
    slug: "gharial-crocodile",
    name: "Gharial Crocodile",
    rarity: "Rare",
    conservationStatus: "Critically Endangered",
    href: "/explore/wildlife-jungle/wildlife/gharial-crocodile",
    image: nepalWildlifeImage("crocodile.jpg"),
  },
  {
    slug: "sloth-bear",
    name: "Sloth Bear",
    rarity: "Rare",
    conservationStatus: "Vulnerable",
    href: "/explore/wildlife-jungle/wildlife/sloth-bear",
    image: nepalWildlifeImage("beer.jpg"),
  },
  {
    slug: "musk-deer",
    name: "Musk Deer",
    rarity: "Rare",
    conservationStatus: "Endangered",
    href: "/explore/wildlife-jungle/wildlife/musk-deer",
    image: nepalWildlifeImage("deer.jpg"),
  },
  {
    slug: "himalayan-monal",
    name: "Himalayan Monal",
    rarity: "Common",
    conservationStatus: "Least Concern",
    href: "/explore/wildlife-jungle/wildlife/himalayan-monal",
    image: nepalWildlifeImage("daphe.jpg"),
  },
  {
    slug: "black-bear",
    name: "Black Bear",
    rarity: "Common",
    conservationStatus: "Vulnerable",
    href: "/explore/wildlife-jungle/wildlife/black-bear",
    image: nepalWildlifeImage("bear.jpg"),
  },
  {
    slug: "blue-sheep",
    name: "Blue Sheep",
    rarity: "Common",
    conservationStatus: "Least Concern",
    href: "/explore/wildlife-jungle/wildlife/blue-sheep",
    image: nepalWildlifeImage("sheep.jpg"),
  },
  {
    slug: "langur-monkey",
    name: "Langur Monkey",
    rarity: "Common",
    conservationStatus: "Least Concern",
    href: "/explore/wildlife-jungle/wildlife/langur-monkey",
    image: nepalWildlifeImage("monkey.jpg"),
  },
] as const;

export const WILDLIFE_EXPLORE_BY_REGION_SECTION = {
  titlePrefix: "Explore",
  titleHighlight: "By Region",
  subtitle:
    "Discover diverse landscapes, incredible wildlife, and unique experiences across Nepal.",
} as const;

export interface WildlifeRegion {
  slug: string;
  region: string;
  location: string;
  description: string;
  wildlife: readonly string[];
  href: string;
  image: string;
}

export const WILDLIFE_EXPLORE_BY_REGION: readonly WildlifeRegion[] = [
  {
    slug: "chitwan",
    region: "Chitwan Region",
    location: "Chitwan National Park",
    description:
      "Home to the one-horned rhino, Bengal tiger and rich subtropical jungles.",
    wildlife: ["Tiger", "Rhino", "Elephant", "Crocodile"],
    href: "/explore/wildlife-jungle/regions/chitwan",
    image: wildlifeExploreByRegionImage("Chitwan Region.jpg"),
  },
  {
    slug: "bardia",
    region: "Bardia Region",
    location: "Bardia National Park",
    description:
      "Explore untouched wilderness and the best place to spot wild Bengal tigers.",
    wildlife: ["Tiger", "Elephant", "Leopard"],
    href: "/explore/wildlife-jungle/regions/bardia",
    image: wildlifeExploreByRegionImage("Bardia Region.jpg"),
  },
  {
    slug: "koshi",
    region: "Koshi Region",
    location: "Koshi Tappu Wildlife Reserve",
    description:
      "A paradise for bird watchers and home to rare migratory birds and wild buffalo.",
    wildlife: ["Birds", "Wild Buffalo", "Wetlands"],
    href: "/explore/wildlife-jungle/regions/koshi",
    image: wildlifeExploreByRegionImage("Koshi Region.jpg"),
  },
  {
    slug: "far-west",
    region: "Far West Region",
    location: "Shuklaphanta National Park",
    description:
      "Vast grasslands, rare swamp deer and a haven for wildlife and nature lovers.",
    wildlife: ["Swamp Deer", "Tiger", "Birds"],
    href: "/explore/wildlife-jungle/regions/far-west",
    image: wildlifeExploreByRegionImage("Far West Region.jpg"),
  },
  {
    slug: "himalayan",
    region: "Himalayan Region",
    location: "Himalayan National Parks",
    description:
      "The habitat of snow leopards, red pandas, musk deer and blue sheep.",
    wildlife: ["Snow Leopard", "Musk Deer", "Blue Sheep", "Red Panda"],
    href: "/explore/wildlife-jungle/regions/himalayan",
    image: wildlifeExploreByRegionImage("Himalayan Region.jpg"),
  },
] as const;
