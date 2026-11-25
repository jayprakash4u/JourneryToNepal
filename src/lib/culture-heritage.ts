function cultureImage(filename: string) {
  return encodeURI(`/images/home page/categories/${filename}`);
}

function cultureVideo(filename: string) {
  return encodeURI(`/images/culture and heritage/${filename}`);
}

function featuredHeritageImage(filename: string) {
  return encodeURI(`/images/culture and heritage/featured heritage/${filename}`);
}

export function peopleCultureImage(filename: string) {
  return encodeURI(`/images/culture and heritage/culture images/${filename}`);
}

export type HeritageTag = "UNESCO" | "Spiritual" | "Historic";

export interface FeaturedHeritagePlace {
  slug: string;
  name: string;
  location: string;
  description: string;
  tags: readonly HeritageTag[];
  href: string;
  image?: string;
}

export const CULTURE_HERO = {
  headline: "Explore Culture & Heritage of Nepal",
  subtext:
    "Discover ancient temples, traditions, and timeless history across Nepal.",
  imageSrc: cultureImage("culture and heritage.jpg"),
  videoSrc: cultureVideo("herosectiondroneshot.mp4"),
  useVideo: true,
  ctas: {
    explore: { label: "Explore Places", href: "#explore-places" },
    plan: { label: "Plan Your Trip", href: "/plan-trip/planner" },
  },
} as const;

export const FEATURED_HERITAGE_PLACES: readonly FeaturedHeritagePlace[] = [
  {
    slug: "pashupatinath-temple",
    name: "Pashupatinath Temple",
    location: "Kathmandu",
    description:
      "One of Nepal's most sacred Hindu temples, set on the banks of the Bagmati River and revered for centuries of spiritual devotion.",
    tags: ["UNESCO", "Spiritual", "Historic"],
    href: "/explore/culture-heritage/pashupatinath-temple",
    image: featuredHeritageImage("pashupatinath temple.jpg"),
  },
  {
    slug: "bhaktapur-durbar-square",
    name: "Bhaktapur Durbar Square",
    location: "Bhaktapur",
    description:
      "A beautifully preserved medieval city square with palaces, courtyards, and Newari architecture from the Malla era.",
    tags: ["UNESCO", "Historic"],
    href: "/explore/culture-heritage/bhaktapur-durbar-square",
    image: featuredHeritageImage("Bhaktapur Durbar Square.jpg"),
  },
  {
    slug: "lumbini",
    name: "Lumbini",
    location: "Birthplace of Buddha",
    description:
      "The sacred birthplace of Siddhartha Gautama, featuring monasteries, the Maya Devi Temple, and peaceful pilgrimage gardens.",
    tags: ["UNESCO", "Spiritual"],
    href: "/explore/culture-heritage/lumbini",
    image: featuredHeritageImage("Lumbini (Birthplace of Buddha).jpg"),
  },
  {
    slug: "swayambhunath-stupa",
    name: "Swayambhunath Stupa",
    location: "Monkey Temple, Kathmandu",
    description:
      "An ancient hilltop stupa overlooking the Kathmandu Valley, blending Buddhist symbolism with living local tradition.",
    tags: ["UNESCO", "Spiritual"],
    href: "/explore/culture-heritage/swayambhunath-stupa",
    image: featuredHeritageImage("Swayambhunath Stupa (Monkey Temple).jpg"),
  },
  {
    slug: "boudhanath-stupa",
    name: "Boudhanath Stupa",
    location: "Kathmandu",
    description:
      "One of the largest spherical stupas in Nepal and a vibrant center of Tibetan Buddhist culture and prayer.",
    tags: ["UNESCO", "Spiritual"],
    href: "/explore/culture-heritage/boudhanath-stupa",
    image: featuredHeritageImage("Boudhanath Stupa.jpg"),
  },
  {
    slug: "patan-durbar-square",
    name: "Patan Durbar Square",
    location: "Lalitpur",
    description:
      "A historic royal square known for exquisite stone carvings, temples, and the artistic legacy of the Kathmandu Valley.",
    tags: ["UNESCO", "Historic"],
    href: "/explore/culture-heritage/patan-durbar-square",
    image: featuredHeritageImage("Patan Durbar Square.jpg"),
  },
] as const;

export const PEOPLE_CULTURE_SECTION = {
  eyebrow: "People, Culture & Traditions",
  title: "Discover Nepal's Diverse Cultures",
  subtitle:
    "Nepal is home to many ethnic groups, languages, and traditions — each with its own unique identity and heritage.",
  viewAllHref: "/explore/culture",
} as const;

export interface NepalEthnicCulture {
  slug: string;
  name: string;
  tagline: string;
  region: string;
  href: string;
  image?: string;
}

export const NEPAL_ETHNIC_CULTURES: readonly NepalEthnicCulture[] = [
  {
    slug: "newar",
    name: "Newar Community",
    tagline: "Rich in festivals, architecture, and cuisine.",
    region: "Kathmandu Valley",
    href: "/explore/culture#newar",
    image: peopleCultureImage("newar.jpg"),
  },
  {
    slug: "gurung",
    name: "Gurung Community",
    tagline: "Known for mountain hospitality and folk traditions.",
    region: "Western & Mid-Hills",
    href: "/explore/culture#gurung",
    image: peopleCultureImage("Gurung Culture.jpg"),
  },
  {
    slug: "magar",
    name: "Magar Community",
    tagline: "Known for bravery, unique dances, and rich traditions.",
    region: "Western Nepal",
    href: "/explore/culture#magar",
    image: peopleCultureImage("magar.jpg"),
  },
  {
    slug: "tharu",
    name: "Tharu Community",
    tagline: "Indigenous Terai culture with distinctive art and dance.",
    region: "Terai Region",
    href: "/explore/culture#tharu",
    image: peopleCultureImage("Tharu.jpg"),
  },
  {
    slug: "tamang",
    name: "Tamang Community",
    tagline: "Hill communities with Buddhist roots and vibrant dress.",
    region: "Central Hills",
    href: "/explore/culture#tamang",
    image: peopleCultureImage("Tamang.jpg"),
  },
  {
    slug: "sherpa",
    name: "Sherpa Community",
    tagline: "Guardians of Himalayan Buddhist culture and mountaineering.",
    region: "Eastern Himalayas",
    href: "/explore/culture#sherpa",
    image: peopleCultureImage("sherpa.jpg"),
  },
  {
    slug: "brahman-hill",
    name: "Brahmin Community",
    tagline: "Keepers of Vedic traditions and spiritual practices.",
    region: "Throughout Nepal",
    href: "/explore/culture#brahman-hill",
    image: peopleCultureImage("brahmin.jpg"),
  },
  {
    slug: "chhetri",
    name: "Chhetri Community",
    tagline: "A major community shaping Nepal's festivals and rural life.",
    region: "Hills & Terai",
    href: "/explore/culture#chhetri",
    image: peopleCultureImage("chhetri.jpg"),
  },
] as const;

export const NEPAL_RELIGIONS = [
  "Hinduism",
  "Buddhism",
  "Kirat",
  "Islam",
] as const;

export const NEPAL_LANGUAGES = [
  "Nepali",
  "Maithili",
  "Bhojpuri",
  "Tamang",
  "Newari",
] as const;

export interface NepalTradition {
  slug: string;
  title: string;
  description: string;
  image?: string;
}

export const NEPAL_TRADITIONS: readonly NepalTradition[] = [
  {
    slug: "festivals",
    title: "Festivals — Dashain & Tihar",
    description:
      "Nepal's grandest celebrations bring families together with blessings, feasts, lights, and rituals that span generations.",
  },
  {
    slug: "marriage-rituals",
    title: "Marriage Rituals",
    description:
      "Weddings blend sacred customs, community gatherings, and regional traditions — from hill ceremonies to Newari janti processions.",
  },
  {
    slug: "daily-life",
    title: "Daily Life & Hospitality",
    description:
      "From morning tea in mountain homes to Terai village courtyards, Nepali life is rooted in warmth, respect, and shared meals.",
  },
] as const;
