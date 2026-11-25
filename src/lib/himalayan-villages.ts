export interface HimalayanVillage {
  slug: string;
  name: string;
  region: string;
  highlights: string[];
  href: string;
  image?: string;
}

function villageImage(filename: string) {
  return encodeURI(`/images/Villages/${filename}`);
}

export const HIMALAYAN_VILLAGES: HimalayanVillage[] = [
  {
    slug: "marpha",
    name: "Marpha",
    region: "Mustang",
    highlights: ["Whitewashed houses", "Apple orchards", "Cleanest village vibe"],
    href: "/explore/villages#marpha",
    image: villageImage("marpha village.jpg"),
  },
  {
    slug: "ghandruk",
    name: "Ghandruk",
    region: "Annapurna Region",
    highlights: ["Gurung culture", "Annapurna mountain views", "Traditional stone houses"],
    href: "/explore/villages#ghandruk",
    image: villageImage("Ghandruk.jpg"),
  },
  {
    slug: "ghalegaun",
    name: "Ghalegaun",
    region: "Lamjung",
    highlights: ["Homestay experience", "Gurung traditions", "Panoramic Himalaya view"],
    href: "/explore/villages#ghalegaun",
    image: villageImage("Ghalegaun.jpg"),
  },
  {
    slug: "langtang-village",
    name: "Langtang Village",
    region: "Langtang Valley",
    highlights: ["Tibetan-influenced culture", "Mountain lifestyle", "Yak grazing fields"],
    href: "/explore/villages#langtang-village",
    image: villageImage("Langtang Village.jpg"),
  },
  {
    slug: "namche",
    name: "Namche Bazaar",
    region: "Everest Region",
    highlights: ["Gateway to Everest", "Sherpa culture", "Vibrant mountain town"],
    href: "/explore/villages#namche",
    image: villageImage("Namche Bazaar.jpg"),
  },
  {
    slug: "tansen",
    name: "Tansen",
    region: "Palpa",
    highlights: ["Newari architecture", "Hilltop views", "Cultural heritage"],
    href: "/explore/villages#tansen",
    image: villageImage("Tansen.jpg"),
  },
  {
    slug: "kagbeni",
    name: "Kagbeni",
    region: "Upper Mustang",
    highlights: ["Desert-like landscape", "Ancient monastery", "Gateway to Upper Mustang"],
    href: "/explore/villages#kagbeni",
    image: villageImage("Kagbeni.jpg"),
  },
  {
    slug: "bandipur",
    name: "Bandipur",
    region: "Tanahun",
    highlights: ["Preserved cultural town", "Car-free streets", "Sunset views"],
    href: "/explore/villages#bandipur",
    image: villageImage("Bandipur.jpg"),
  },
  {
    slug: "chhomrong",
    name: "Chhomrong",
    region: "Annapurna Trek",
    highlights: ["Trekking stop", "Mountain views", "Peaceful environment"],
    href: "/explore/villages#chhomrong",
    image: villageImage("Chhomrong.jpg"),
  },
  {
    slug: "dhampus",
    name: "Dhampus",
    region: "Near Pokhara",
    highlights: ["Easy access from Pokhara", "Sunrise views", "Gurung culture"],
    href: "/explore/villages#dhampus",
    image: villageImage("Dhampus.jpg"),
  },
];

/** Preview count on homepage (4–6). */
export const HIMALAYAN_VILLAGES_PREVIEW_LIMIT = 4;

export const HIMALAYAN_VILLAGES_VIEW_ALL = "/explore/villages";

export { villageImage };
