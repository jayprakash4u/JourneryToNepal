function spiritualImage(filename: string) {
  return encodeURI(`/images/Spiritual Places/${filename}`);
}

function spiritualSoulImage(filename: string) {
  return encodeURI(`/images/Spiritual Places/sprituslsouls/${filename}`);
}

function sacredDestinationImage(filename: string) {
  return encodeURI(`/images/Spiritual Places/Scared distinations/${filename}`);
}

function categoryImage(filename: string) {
  return encodeURI(`/images/home page/categories/${filename}`);
}

export const SPIRITUAL_PLACES_HERO = {
  headline: "Explore Spiritual Places in Nepal",
  subtext:
    "Walk ancient pilgrimage routes, visit sacred temples, and find peace in monasteries nestled across the Himalayas and the Terai.",
  imageSrc: categoryImage("spritual places.jpg"),
  videoSrc: spiritualImage("16291204_3840_2160_30fps.mp4"),
  useVideo: true,
  badge: "Temples · Pilgrimage · Meditation",
  ctas: {
    explore: { label: "Explore Sacred Sites", href: "#sacred-destinations" },
    plan: { label: "Plan Your Trip", href: "/plan-trip/planner" },
  },
} as const;

export const FEATURED_SPIRITUAL_EXPERIENCES_SECTION = {
  title: "Experience Nepal's Spiritual Soul",
} as const;

export interface SpiritualExperience {
  slug: string;
  title: string;
  icon: string;
  href: string;
  image: string;
}

export const FEATURED_SPIRITUAL_EXPERIENCES: readonly SpiritualExperience[] = [
  {
    slug: "temple-visits",
    title: "Temple Visits",
    icon: "🛕",
    href: "/explore/spiritual-places/temple-visits",
    image: spiritualSoulImage("Temple visit.jpg"),
  },
  {
    slug: "buddhist-monasteries",
    title: "Buddhist Monasteries",
    icon: "☸",
    href: "/explore/spiritual-places/buddhist-monasteries",
    image: spiritualSoulImage("Buddhist Monasteries.jpg"),
  },
  {
    slug: "pilgrimage-tours",
    title: "Pilgrimage Tours",
    icon: "🙏",
    href: "/explore/spiritual-places/pilgrimage-tours",
    image: spiritualSoulImage("Pilgrimage Tours.jpg"),
  },
  {
    slug: "meditation-retreats",
    title: "Meditation Retreats",
    icon: "🧘",
    href: "/explore/spiritual-places/meditation-retreats",
    image: spiritualSoulImage("Meditation Retreats.jpg"),
  },
  {
    slug: "evening-aarati",
    title: "Evening Aarati",
    icon: "🔥",
    href: "/explore/spiritual-places/evening-aarati",
    image: spiritualSoulImage("Evening Aarati.jpg"),
  },
  {
    slug: "sunrise-spiritual-journey",
    title: "Sunrise Spiritual Journey",
    icon: "🌄",
    href: "/explore/spiritual-places/sunrise-spiritual-journey",
    image: spiritualSoulImage("Sunrise Spiritual Journey.jpg"),
  },
] as const;

export const SACRED_DESTINATIONS_SECTION = {
  title: "Sacred Destinations",
  subtitle:
    "From ancient stupas in the Kathmandu Valley to Himalayan pilgrimage sites — Nepal's most revered spiritual landmarks.",
} as const;

export interface SacredDestination {
  slug: string;
  name: string;
  province: string;
  religion: string;
  bestTime: string;
  unesco?: boolean;
  href: string;
  image: string;
}

export const SACRED_DESTINATIONS: readonly SacredDestination[] = [
  {
    slug: "pashupatinath",
    name: "Pashupatinath",
    province: "Bagmati Province",
    religion: "Hindu",
    bestTime: "Oct – Mar",
    unesco: true,
    href: "/explore/spiritual-places/pashupatinath",
    image: sacredDestinationImage("pashupatinath.jpg"),
  },
  {
    slug: "boudhanath",
    name: "Boudhanath",
    province: "Bagmati Province",
    religion: "Buddhist",
    bestTime: "Oct – Apr",
    unesco: true,
    href: "/explore/spiritual-places/boudhanath",
    image: sacredDestinationImage("Boudhanath Stupa.jpg"),
  },
  {
    slug: "swayambhunath",
    name: "Swayambhunath",
    province: "Bagmati Province",
    religion: "Buddhist",
    bestTime: "Sep – May",
    unesco: true,
    href: "/explore/spiritual-places/swayambhunath",
    image: sacredDestinationImage("Swayambhunath (Monkey Temple).jpg"),
  },
  {
    slug: "lumbini",
    name: "Lumbini",
    province: "Lumbini Province",
    religion: "Buddhist",
    bestTime: "Oct – Mar",
    unesco: true,
    href: "/explore/spiritual-places/lumbini",
    image: sacredDestinationImage("Lumbini.jpg"),
  },
  {
    slug: "muktinath",
    name: "Muktinath",
    province: "Gandaki Province",
    religion: "Hindu & Buddhist",
    bestTime: "May – Oct",
    href: "/explore/spiritual-places/muktinath",
    image: sacredDestinationImage("Muktinath Temple.jpg"),
  },
  {
    slug: "janaki-temple",
    name: "Janaki Temple",
    province: "Madhesh Province",
    religion: "Hindu",
    bestTime: "Oct – Mar",
    href: "/explore/spiritual-places/janaki-temple",
    image: sacredDestinationImage("janaki temple.jpg"),
  },
  {
    slug: "manakamana-temple",
    name: "Manakamana Temple",
    province: "Gandaki Province",
    religion: "Hindu",
    bestTime: "Year-round",
    href: "/explore/spiritual-places/manakamana-temple",
    image: sacredDestinationImage("Manakamana Temple.jpg"),
  },
  {
    slug: "gosaikunda",
    name: "Gosaikunda",
    province: "Bagmati Province",
    religion: "Hindu",
    bestTime: "Aug – Oct",
    href: "/explore/spiritual-places/gosaikunda",
    image: sacredDestinationImage("Gosainkunda.jpg"),
  },
  {
    slug: "tengboche-monastery",
    name: "Tengboche Monastery",
    province: "Koshi Province",
    religion: "Buddhist",
    bestTime: "Oct – May",
    href: "/explore/spiritual-places/tengboche-monastery",
    image: sacredDestinationImage("Tengboche Monastery.jpg"),
  },
  {
    slug: "kopan-monastery",
    name: "Kopan Monastery",
    province: "Bagmati Province",
    religion: "Buddhist",
    bestTime: "Oct – Apr",
    href: "/explore/spiritual-places/kopan-monastery",
    image: sacredDestinationImage("Kopan Monastery.jpg"),
  },
  {
    slug: "pathibhara-temple",
    name: "Pathibhara Temple",
    province: "Koshi Province",
    religion: "Hindu",
    bestTime: "Mar – May · Oct – Nov",
    href: "/explore/spiritual-places/pathibhara-temple",
    image: sacredDestinationImage("Pathibhara Temple.jpg"),
  },
  {
    slug: "budhanilkantha",
    name: "Budhanilkantha",
    province: "Bagmati Province",
    religion: "Hindu",
    bestTime: "Oct – Mar",
    href: "/explore/spiritual-places/budhanilkantha",
    image: sacredDestinationImage("Budhanilkantha Temple.jpg"),
  },
] as const;
