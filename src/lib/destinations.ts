export interface FeaturedDestination {
  slug: string;
  name: string;
  hook: string;
  highlights: string[];
  href: string;
  image: string;
}

function destinationImage(filename: string) {
  return encodeURI(`/images/home page/destinations/${filename}`);
}

export const FEATURED_DESTINATIONS: FeaturedDestination[] = [
  {
    slug: "pokhara",
    name: "Pokhara",
    hook: "Lakes, peaks, and the gateway to the Annapurnas.",
    highlights: ["Phewa Lake", "Sarangkot sunrise", "Paragliding"],
    href: "/destinations/pokhara",
    image: destinationImage("pokhara.jpg"),
  },
  {
    slug: "everest-base-camp",
    name: "Everest Base Camp",
    hook: "Stand at the foot of the world's highest mountain.",
    highlights: ["Everest panoramas", "Sherpa villages", "High-altitude trekking"],
    href: "/destinations/everest-base-camp",
    image: destinationImage("everestbasecamp.jpg"),
  },
  {
    slug: "lumbini",
    name: "Lumbini",
    hook: "The sacred birthplace of Lord Buddha.",
    highlights: ["Maya Devi Temple", "Peace pagodas", "Buddhist heritage"],
    href: "/destinations/lumbini",
    image: destinationImage("lumbini.jpg"),
  },
  {
    slug: "rara-lake",
    name: "Rara Lake",
    hook: "Nepal's largest lake, tucked in remote wilderness.",
    highlights: ["Alpine lake views", "Remote trails", "Pine forests"],
    href: "/destinations/rara-lake",
    image: destinationImage("raralake.jpg"),
  },
  {
    slug: "bandipur",
    name: "Bandipur",
    hook: "A living museum of Newari hill-town charm.",
    highlights: ["Newari architecture", "Hill-town walks", "Himalayan views"],
    href: "/destinations/bandipur",
    image: destinationImage("bandipur.jpg"),
  },
  {
    slug: "kathmandu",
    name: "Kathmandu",
    hook: "Nepal's vibrant capital of temples, culture, and cuisine.",
    highlights: ["Durbar Square", "Swayambhunath", "Thamel"],
    href: "/explore/districts/kathmandu",
    image: destinationImage("lumbini.jpg"),
  },
  {
    slug: "chitwan",
    name: "Chitwan",
    hook: "Jungle safaris and wildlife in the Terai lowlands.",
    highlights: ["Rhino spotting", "National park", "Tharu culture"],
    href: "/explore/districts/chitwan",
    image: destinationImage("pokhara.jpg"),
  },
  {
    slug: "mustang",
    name: "Mustang",
    hook: "Desert valleys and ancient Tibetan kingdom culture.",
    highlights: ["Lo Manthang", "Desert landscape", "Monasteries"],
    href: "/explore/districts/mustang",
    image: destinationImage("everestbasecamp.jpg"),
  },
];

export const FEATURED_DESTINATIONS_VIEW_ALL = "/destinations/featured";

export function getDestinationBySlug(slug: string) {
  return FEATURED_DESTINATIONS.find((destination) => destination.slug === slug);
}

export { destinationImage };
