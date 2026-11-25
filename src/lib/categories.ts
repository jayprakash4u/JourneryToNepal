export interface ExploreCategory {
  slug: string;
  title: string;
  highlights: string[];
  href: string;
  image: string;
}

function categoryImage(filename: string) {
  return encodeURI(`/images/home page/categories/${filename}`);
}

export const EXPLORE_CATEGORIES: ExploreCategory[] = [
  {
    slug: "adventure-trekking",
    title: "Adventure & Trekking",
    highlights: ["Himalayan trails", "Peak viewpoints", "Remote villages"],
    href: "/explore/adventure-trekking",
    image: categoryImage("Adventure and Trekking.jpg"),
  },
  {
    slug: "culture-heritage",
    title: "Culture & Heritage",
    highlights: ["Durbar squares", "Living traditions", "Ancient temples"],
    href: "/explore/culture-heritage",
    image: categoryImage("culture and heritage.jpg"),
  },
  {
    slug: "food-experience",
    title: "Food & Experience",
    highlights: ["Local cuisine", "Street food tours", "Cooking classes"],
    href: "/explore/food-experience",
    image: categoryImage("food and experience.jpg"),
  },
  {
    slug: "wildlife-jungle",
    title: "Wildlife & Jungle",
    highlights: ["Jungle safaris", "Rhino spotting", "National parks"],
    href: "/explore/wildlife-jungle",
    image: categoryImage("wildlife and jungle.jpg"),
  },
  {
    slug: "spiritual-places",
    title: "Spiritual Places",
    highlights: ["Sacred temples", "Meditation retreats", "Pilgrimage routes"],
    href: "/explore/spiritual-places",
    image: categoryImage("spritual places.jpg"),
  },
  {
    slug: "scenic-escapes",
    title: "Scenic Escapes",
    highlights: ["Mountain lakes", "Sunrise viewpoints", "Quiet getaways"],
    href: "/explore/scenic-escapes",
    image: categoryImage("Escanic escapes.jpg"),
  },
  {
    slug: "all-districts",
    title: "All 77 Districts",
    highlights: ["Browse by province", "Filter by interest", "Map & grid view"],
    href: "/explore/districts",
    image: categoryImage("wildlife and jungle.jpg"),
  },
  {
    slug: "community-picks",
    title: "Community Picks",
    highlights: ["Traveler recommended", "Hidden gems", "Local favorites"],
    href: "/community",
    image: categoryImage("food and experience.jpg"),
  },
];
