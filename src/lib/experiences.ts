export interface Experience {
  slug: string;
  title: string;
  tagline: string;
  highlights: string[];
  href: string;
  image: string;
}

function experienceImage(filename: string) {
  return encodeURI(`/images/home page/experiences/${filename}`);
}

export const EXPERIENCES: Experience[] = [
  {
    slug: "trekking",
    title: "Trekking",
    tagline: "Hike Himalayan trails and remote mountain villages.",
    highlights: ["Annapurna & Everest regions", "Teahouse trails", "Mountain guides"],
    href: "/experiences/trekking",
    image: experienceImage("trekking.jpg"),
  },
  {
    slug: "paragliding",
    title: "Paragliding",
    tagline: "Soar above Pokhara with breathtaking aerial views.",
    highlights: ["Sarangkot launches", "Lake & peak views", "Tandem flights"],
    href: "/experiences/paragliding",
    image: experienceImage("paragliding.jpg"),
  },
  {
    slug: "jungle-safari",
    title: "Jungle Safari",
    tagline: "Track rhinos and wildlife in Nepal's national parks.",
    highlights: ["Chitwan & Bardiya", "Jeep & canoe safaris", "Bird watching"],
    href: "/experiences/jungle-safari",
    image: experienceImage("jungle safari.jpg"),
  },
  {
    slug: "cultural-tours",
    title: "Cultural Tours",
    tagline: "Explore temples, durbar squares, and living traditions.",
    highlights: ["UNESCO heritage sites", "Local festivals", "Guided walks"],
    href: "/experiences/cultural-tours",
    image: experienceImage("culture tour.jpg"),
  },
  {
    slug: "food-tours",
    title: "Food Tours",
    tagline: "Savor momos, dal bhat, and authentic local flavors.",
    highlights: ["Street food trails", "Newari feasts", "Tea house stops"],
    href: "/experiences/food-tours",
    image: experienceImage("food tour.jpg"),
  },
  {
    slug: "rafting",
    title: "River Rafting",
    tagline: "White-water adventures on Nepal's mountain rivers.",
    highlights: ["Trishuli & Bhote Koshi", "Half & full-day trips", "All skill levels"],
    href: "/experiences/rafting",
    image: experienceImage("trekking.jpg"),
  },
  {
    slug: "mountain-biking",
    title: "Mountain Biking",
    tagline: "Trail rides through hills, villages, and valley routes.",
    highlights: ["Kathmandu Valley loops", "Pokhara lakeside", "Guided routes"],
    href: "/experiences/mountain-biking",
    image: experienceImage("paragliding.jpg"),
  },
  {
    slug: "yoga-wellness",
    title: "Yoga & Wellness",
    tagline: "Retreats and meditation in serene Himalayan settings.",
    highlights: ["Pokhara retreats", "Meditation centers", "Wellness lodges"],
    href: "/experiences/yoga-wellness",
    image: experienceImage("culture tour.jpg"),
  },
];

export { experienceImage };
