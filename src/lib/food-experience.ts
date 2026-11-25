function foodImage(filename: string) {
  return encodeURI(`/images/home page/categories/${filename}`);
}

function foodVideo(filename: string) {
  return encodeURI(`/images/food and experience/${filename}`);
}

function featuredExperienceImage(filename: string) {
  return encodeURI(`/images/food and experience/featured experience/${filename}`);
}

function mustTryDishImage(filename: string) {
  return encodeURI(`/images/food and experience/must try nepalidish/${filename}`);
}

export type SpiceLevel = "Mild" | "Medium" | "Hot";

export interface FeaturedFoodExperience {
  slug: string;
  title: string;
  imageLabel: string;
  href: string;
  image?: string;
}

export const FOOD_EXPERIENCE_HERO = {
  headline: "Explore Food & Experience in Nepal",
  subtext:
    "Discover local cuisine, street food, cooking traditions, and unforgettable culinary journeys across Nepal.",
  imageSrc: foodImage("food and experience.jpg"),
  videoSrc: foodVideo("7424474-uhd_3840_2160_30fps.mp4"),
  useVideo: true,
  badge: "Cuisine · Street Food · Cooking",
  ctas: {
    explore: { label: "Explore Places", href: "#featured-experiences" },
    plan: { label: "Plan Your Trip", href: "/plan-trip/planner" },
  },
} as const;

export const FEATURED_EXPERIENCES_SECTION = {
  title: "Experience Nepal Through Food",
  subtitle:
    "From family kitchens to street corners and mountain tea houses — taste the stories behind every meal.",
} as const;

export const FEATURED_FOOD_EXPERIENCES: readonly FeaturedFoodExperience[] = [
  {
    slug: "cooking-classes",
    title: "Cooking Classes",
    imageLabel: "Local family cooking",
    href: "/food-experience/cooking-classes",
    image: featuredExperienceImage("cooking class.jpg"),
  },
  {
    slug: "newari-cuisine",
    title: "Newari Cuisine",
    imageLabel: "Traditional feast",
    href: "/food-experience/newari-cuisine",
    image: featuredExperienceImage("newari causine.jpg"),
  },
  {
    slug: "tea-experiences",
    title: "Tea Experiences",
    imageLabel: "Himalayan tea",
    href: "/food-experience/tea-experiences",
    image: featuredExperienceImage("tea.jpg"),
  },
  {
    slug: "street-food-tours",
    title: "Street Food Tours",
    imageLabel: "Street food",
    href: "/food-experience/street-food-tours",
    image: featuredExperienceImage("street food.jpg"),
  },
  {
    slug: "homestay-meals",
    title: "Homestay Meals",
    imageLabel: "Village dining",
    href: "/food-experience/homestay-meals",
    image: featuredExperienceImage("home stay.jpg"),
  },
  {
    slug: "farm-to-table",
    title: "Farm-to-Table",
    imageLabel: "Organic farm",
    href: "/food-experience/farm-to-table",
    image: featuredExperienceImage("farmto table.jpg"),
  },
] as const;

export const MUST_TRY_DISHES_SECTION = {
  title: "Must-Try Nepali Dishes",
  subtitle:
    "From everyday staples to festival specialties — iconic flavors every traveler should taste in Nepal.",
} as const;

export interface MustTryDish {
  slug: string;
  name: string;
  description: string;
  region: string;
  spiceLevel: SpiceLevel;
  href: string;
  image: string;
}

export const MUST_TRY_NEPALI_DISHES: readonly MustTryDish[] = [
  {
    slug: "momo",
    name: "Momo",
    description: "Steamed or fried dumplings filled with meat or vegetables, served with tangy tomato chutney.",
    region: "Kathmandu Valley",
    spiceLevel: "Medium",
    href: "/food-experience/dishes/momo",
    image: mustTryDishImage("momo.jpg"),
  },
  {
    slug: "dal-bhat",
    name: "Dal Bhat",
    description: "Nepal's beloved daily meal — lentil soup, rice, seasonal vegetables, pickles, and curry.",
    region: "Nationwide",
    spiceLevel: "Mild",
    href: "/food-experience/dishes/dal-bhat",
    image: mustTryDishImage("dalbhat.jpg"),
  },
  {
    slug: "thakali-set",
    name: "Thakali Set",
    description: "A hearty Thakali platter with rice, lentils, meat, greens, pickles, and ghee.",
    region: "Mustang · Thak Khola",
    spiceLevel: "Medium",
    href: "/food-experience/dishes/thakali-set",
    image: mustTryDishImage("Thakali set.jpg"),
  },
  {
    slug: "sel-roti",
    name: "Sel Roti",
    description: "Crispy ring-shaped rice bread, soft inside — a festival favorite during Dashain and Tihar.",
    region: "Kathmandu Valley",
    spiceLevel: "Mild",
    href: "/food-experience/dishes/sel-roti",
    image: mustTryDishImage("sellroti.jpg"),
  },
  {
    slug: "yomari",
    name: "Yomari",
    description: "Sweet steamed dumpling filled with molasses and sesame, treasured during Yomari Punhi.",
    region: "Newar communities",
    spiceLevel: "Mild",
    href: "/food-experience/dishes/yomari",
    image: mustTryDishImage("yemari.jpg"),
  },
  {
    slug: "chatamari",
    name: "Chatamari",
    description: "Thin rice-flour crepe topped with egg, minced meat, and herbs — often called Nepali pizza.",
    region: "Kathmandu Valley",
    spiceLevel: "Mild",
    href: "/food-experience/dishes/chatamari",
    image: mustTryDishImage("chatamari.jpg"),
  },
  {
    slug: "dhido",
    name: "Dhido",
    description: "Traditional thick porridge from buckwheat or millet flour, paired with gundruk or meat curry.",
    region: "Hills · Western Nepal",
    spiceLevel: "Mild",
    href: "/food-experience/dishes/dhido",
    image: mustTryDishImage("dhido.jpg"),
  },
  {
    slug: "gundruk",
    name: "Gundruk",
    description: "Fermented leafy greens with a tangy depth — a staple side across Nepali home cooking.",
    region: "Hills nationwide",
    spiceLevel: "Medium",
    href: "/food-experience/dishes/gundruk",
    image: mustTryDishImage("gundruk.jpg"),
  },
  {
    slug: "choila",
    name: "Choila",
    description: "Spicy grilled buffalo marinated in chili, fenugreek, and mustard oil — a Newari classic.",
    region: "Kathmandu Valley",
    spiceLevel: "Hot",
    href: "/food-experience/dishes/choila",
    image: mustTryDishImage("choila.jpg"),
  },
  {
    slug: "bara",
    name: "Bara",
    description: "Savory lentil pancake served at rituals and feasts, crisp edges with a soft center.",
    region: "Newar communities",
    spiceLevel: "Mild",
    href: "/food-experience/dishes/bara",
    image: mustTryDishImage("bara.jpg"),
  },
] as const;

function exploreByRegionImage(filename: string) {
  return encodeURI(`/images/food and experience/Explore by Region/${filename}`);
}

function signatureFoodTrailImage(filename: string) {
  return encodeURI(`/images/food and experience/signature food trail/${filename}`);
}

function foodWithCultureImage(filename: string) {
  return encodeURI(`/images/food and experience/food with culture/${filename}`);
}

export const EXPLORE_BY_REGION_SECTION = {
  title: "Explore by Region",
  subtitle:
    "Every corner of Nepal has its own flavors — from Newari feasts in the valley to Sherpa meals in the high Himalaya.",
} as const;

export interface ExploreByRegionCard {
  slug: string;
  region: string;
  highlight: string;
  description: string;
  href: string;
  image: string;
}

export const EXPLORE_BY_REGION_CARDS: readonly ExploreByRegionCard[] = [
  {
    slug: "kathmandu-valley",
    region: "Kathmandu Valley",
    highlight: "Newari Cuisine",
    description: "Feast on choila, bara, and yomari in centuries-old courtyards and family kitchens.",
    href: "/food-experience/regions/kathmandu-valley",
    image: exploreByRegionImage("Kathmandu Valley – Newari Cuisine.jpg"),
  },
  {
    slug: "pokhara",
    region: "Pokhara",
    highlight: "Lakeside Cafés",
    description: "Relaxed lakeside dining with fresh trout, international fare, and mountain views.",
    href: "/food-experience/regions/pokhara",
    image: exploreByRegionImage("Pokhara – Lakeside Cafés.jpg"),
  },
  {
    slug: "everest-region",
    region: "Everest Region",
    highlight: "Sherpa Cuisine",
    description: "Warm dal bhat, butter tea, and hearty meals in teahouses along the trail.",
    href: "/food-experience/regions/everest",
    image: exploreByRegionImage("Everest Region – Sherpa Cuisine.jpg"),
  },
  {
    slug: "mustang",
    region: "Mustang",
    highlight: "Apple Products",
    description: "Tart apple cider, dried fruit, and Thakali flavors in the rain-shadow highlands.",
    href: "/food-experience/regions/mustang",
    image: exploreByRegionImage("Mustang – Apple Products.jpg"),
  },
  {
    slug: "terai",
    region: "Terai",
    highlight: "Mithila Dishes",
    description: "Rich curries, fish, and festival sweets from the plains of southern Nepal.",
    href: "/food-experience/regions/terai",
    image: exploreByRegionImage("Terai – Mithila Dishes.jpg"),
  },
  {
    slug: "ilam",
    region: "Ilam",
    highlight: "Tea Experience",
    description: "Walk rolling tea gardens and taste fresh Himalayan brews at the source.",
    href: "/food-experience/regions/ilam",
    image: exploreByRegionImage("Ilam – Tea Experience.jpg"),
  },
] as const;

export const SIGNATURE_FOOD_TRAILS_SECTION = {
  eyebrow: "Taste. Explore. Experience.",
  title: "Signature Food Trails",
  subtitle:
    "Curated culinary journeys that connect markets, kitchens, and local communities across Nepal.",
} as const;

export interface FoodTrailStop {
  label: string;
  detail: string;
}

export interface FoodTrail {
  slug: string;
  title: string;
  description: string;
  badge: string;
  href: string;
  image: string;
  buttonVariant: "primary" | "outline";
  stops: readonly FoodTrailStop[];
  stats: {
    duration: string;
    distance: string;
    budget: string;
    stops: string;
  };
}

export const SIGNATURE_FOOD_TRAILS: readonly FoodTrail[] = [
  {
    slug: "kathmandu-street-food",
    title: "Kathmandu Street Food Trail",
    description:
      "Taste your way through alleyways and markets — momo, chatamari, and hidden local favorites.",
    badge: "Urban",
    href: "/food-experience/trails/kathmandu-street-food",
    image: signatureFoodTrailImage("image1.png"),
    buttonVariant: "primary",
    stops: [
      { label: "Asan Bazaar", detail: "Spices & street snacks" },
      { label: "Indra Chowk", detail: "Momo stalls" },
      { label: "Patan Durbar", detail: "Newari sweets" },
    ],
    stats: {
      duration: "4–5 hrs",
      distance: "3 km walk",
      budget: "$15–25",
      stops: "6 tastings",
    },
  },
  {
    slug: "thakali-highway",
    title: "Thakali Highway Trail",
    description:
      "Follow the ancient trade route and savor Thakali set meals in mountain lodges.",
    badge: "Himalaya",
    href: "/food-experience/trails/thakali-highway",
    image: signatureFoodTrailImage("image2.png"),
    buttonVariant: "outline",
    stops: [
      { label: "Beni", detail: "Local market" },
      { label: "Tatopani", detail: "Hot spring stop" },
      { label: "Jomsom", detail: "Thakali kitchen" },
    ],
    stats: {
      duration: "2 days",
      distance: "85 km",
      budget: "$40–60",
      stops: "5 meals",
    },
  },
  {
    slug: "terai-village-feast",
    title: "Terai Village Feast",
    description:
      "Experience Mithila hospitality with home-cooked curries, fish, and festival sweets.",
    badge: "Plains",
    href: "/food-experience/trails/terai-village-feast",
    image: signatureFoodTrailImage("image3.png"),
    buttonVariant: "primary",
    stops: [
      { label: "Janakpur", detail: "Market visit" },
      { label: "Village home", detail: "Cooking demo" },
      { label: "Community hall", detail: "Shared feast" },
    ],
    stats: {
      duration: "1 day",
      distance: "12 km",
      budget: "$20–35",
      stops: "4 courses",
    },
  },
] as const;

export const SIGNATURE_FOOD_TRAIL_FEATURES = [
  {
    title: "Local Ingredients",
    description: "Seasonal produce sourced from nearby farms and markets.",
    icon: "leaf" as const,
  },
  {
    title: "Community-Led",
    description: "Experiences hosted by families and local guides.",
    icon: "users" as const,
  },
  {
    title: "Cultural Stories",
    description: "Learn the history behind every dish and tradition.",
    icon: "book" as const,
  },
  {
    title: "Safe & Curated",
    description: "Handpicked routes with trusted local partners.",
    icon: "shield" as const,
  },
] as const;

export const DINING_WITH_CULTURE_SECTION = {
  eyebrow: "Eat. Connect. Experience.",
  title: "Dining with Culture",
  subtitle:
    "Share meals where food and tradition meet — dance, ritual, and hospitality in one unforgettable evening.",
} as const;

export type DiningCultureCardIcon = "dance" | "monastery" | "village" | "festival" | "homestay";

export type DiningCultureFeatureIcon =
  | "music"
  | "utensils"
  | "leaf"
  | "heart"
  | "users"
  | "chef"
  | "sparkles"
  | "cake";

export interface DiningCultureExperience {
  slug: string;
  title: string;
  description: string;
  duration: string;
  location: string;
  image: string;
  cardIcon: DiningCultureCardIcon;
  features: readonly { icon: DiningCultureFeatureIcon; label: string }[];
}

export const DINING_WITH_CULTURE_EXPERIENCES: readonly DiningCultureExperience[] = [
  {
    slug: "newari-feast",
    title: "Newari Feast with Dance",
    description:
      "A traditional lapte bhoye feast accompanied by live Newari folk music and dance.",
    duration: "3 hours",
    location: "Patan, Kathmandu Valley",
    image: foodWithCultureImage("image1.png"),
    cardIcon: "dance",
    features: [
      { icon: "music", label: "Live folk performance" },
      { icon: "utensils", label: "Multi-course feast" },
    ],
  },
  {
    slug: "monastery-meal",
    title: "Monastery Meal Experience",
    description:
      "Share a simple vegetarian meal with monks and learn about Buddhist food traditions.",
    duration: "2 hours",
    location: "Boudhanath, Kathmandu",
    image: foodWithCultureImage("image2.png"),
    cardIcon: "monastery",
    features: [
      { icon: "leaf", label: "Vegetarian cuisine" },
      { icon: "heart", label: "Mindful dining" },
    ],
  },
  {
    slug: "village-homestay-dinner",
    title: "Village Homestay Dinner",
    description:
      "Eat dal bhat by candlelight in a hillside home and hear stories from your host family.",
    duration: "Evening",
    location: "Nuwakot hills",
    image: foodWithCultureImage("image3.png"),
    cardIcon: "homestay",
    features: [
      { icon: "users", label: "Family-hosted" },
      { icon: "chef", label: "Home cooking" },
    ],
  },
  {
    slug: "festival-food",
    title: "Festival Food Celebration",
    description:
      "Taste seasonal festival dishes like sel roti and yomari during Dashain or Tihar.",
    duration: "Half day",
    location: "Bhaktapur",
    image: foodWithCultureImage("image4.png"),
    cardIcon: "festival",
    features: [
      { icon: "sparkles", label: "Festival specialties" },
      { icon: "cake", label: "Traditional sweets" },
    ],
  },
  {
    slug: "rural-community-lunch",
    title: "Rural Community Lunch",
    description:
      "Join a village community for a shared lunch of local grains, greens, and gundruk.",
    duration: "3 hours",
    location: "Gorkha district",
    image: foodWithCultureImage("image5.png"),
    cardIcon: "village",
    features: [
      { icon: "users", label: "Community dining" },
      { icon: "leaf", label: "Farm-fresh produce" },
    ],
  },
] as const;

export const DINING_WITH_CULTURE_TRUST_ITEMS = [
  {
    title: "Local Hosts",
    description: "Verified families and community groups",
    icon: "users" as const,
  },
  {
    title: "Authentic Recipes",
    description: "Traditional methods and ingredients",
    icon: "leaf" as const,
  },
  {
    title: "Safe & Curated",
    description: "Handpicked experiences",
    icon: "shield" as const,
  },
  {
    title: "Memorable Moments",
    description: "Photo-friendly cultural settings",
    icon: "camera" as const,
  },
] as const;
