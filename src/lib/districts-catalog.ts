import { NEPAL_DISTRICTS, type NepalDistrict } from "@/lib/districts";
import { getDistrictImage } from "@/lib/district-images";

export type ProvinceId =
  | "koshi"
  | "madhesh"
  | "bagmati"
  | "gandaki"
  | "lumbini"
  | "karnali"
  | "sudurpashchim";

export type DistrictCategory = "adventure" | "culture" | "wildlife" | "food" | "scenic";

export type DistrictBadge = "popular" | "trending" | "peaceful";

export type DistrictPopularity = "popular" | "less-explored";

export interface Province {
  id: ProvinceId;
  label: string;
  shortLabel: string;
}

export interface District {
  slug: string;
  name: NepalDistrict;
  province: ProvinceId;
  categories: DistrictCategory[];
  popularity: DistrictPopularity;
  badge?: DistrictBadge;
  highlights: string[];
  image?: string;
  summary: string;
}

export const PROVINCES: Province[] = [
  { id: "koshi", label: "Koshi Province", shortLabel: "Koshi" },
  { id: "madhesh", label: "Madhesh Province", shortLabel: "Madhesh" },
  { id: "bagmati", label: "Bagmati Province", shortLabel: "Bagmati" },
  { id: "gandaki", label: "Gandaki Province", shortLabel: "Gandaki" },
  { id: "lumbini", label: "Lumbini Province", shortLabel: "Lumbini" },
  { id: "karnali", label: "Karnali Province", shortLabel: "Karnali" },
  { id: "sudurpashchim", label: "Sudurpashchim Province", shortLabel: "Sudurpashchim" },
];

export const DISTRICT_CATEGORIES: { id: DistrictCategory; label: string }[] = [
  { id: "adventure", label: "Adventure" },
  { id: "culture", label: "Culture" },
  { id: "wildlife", label: "Wildlife" },
  { id: "food", label: "Food" },
  { id: "scenic", label: "Scenic" },
];

export const POPULAR_DISTRICT_SLUGS = [
  "kathmandu",
  "kaski",
  "chitwan",
  "mustang",
] as const;

const DISTRICT_PROVINCE: Record<NepalDistrict, ProvinceId> = {
  Achham: "sudurpashchim",
  Arghakhanchi: "lumbini",
  Baglung: "gandaki",
  Baitadi: "sudurpashchim",
  Bajhang: "sudurpashchim",
  Bajura: "sudurpashchim",
  Banke: "lumbini",
  Bara: "madhesh",
  Bardiya: "lumbini",
  Bhaktapur: "bagmati",
  Bhojpur: "koshi",
  Chitwan: "bagmati",
  Dadeldhura: "sudurpashchim",
  Dailekh: "karnali",
  Dang: "lumbini",
  Darchula: "sudurpashchim",
  Dhading: "bagmati",
  Dhankuta: "koshi",
  Dhanusa: "madhesh",
  Dolakha: "bagmati",
  Dolpa: "karnali",
  Doti: "sudurpashchim",
  Gorkha: "gandaki",
  Gulmi: "lumbini",
  Humla: "karnali",
  Ilam: "koshi",
  Jajarkot: "karnali",
  Jhapa: "koshi",
  Jumla: "karnali",
  Kailali: "sudurpashchim",
  Kalikot: "karnali",
  Kanchanpur: "sudurpashchim",
  Kapilvastu: "lumbini",
  Kaski: "gandaki",
  Kathmandu: "bagmati",
  Kavrepalanchok: "bagmati",
  Khotang: "koshi",
  Lalitpur: "bagmati",
  Lamjung: "gandaki",
  Mahottari: "madhesh",
  Makwanpur: "bagmati",
  Manang: "gandaki",
  Morang: "koshi",
  Mugu: "karnali",
  Mustang: "gandaki",
  Myagdi: "gandaki",
  Nawalpur: "gandaki",
  Nuwakot: "bagmati",
  Okhaldhunga: "koshi",
  Palpa: "lumbini",
  Panchthar: "koshi",
  Parasi: "lumbini",
  Parbat: "gandaki",
  Parsa: "madhesh",
  Pyuthan: "lumbini",
  Ramechhap: "bagmati",
  Rasuwa: "bagmati",
  Rautahat: "madhesh",
  Rolpa: "lumbini",
  "Rukum East": "lumbini",
  "Rukum West": "karnali",
  Rupandehi: "lumbini",
  Salyan: "karnali",
  Sankhuwasabha: "koshi",
  Saptari: "madhesh",
  Sarlahi: "madhesh",
  Sindhuli: "bagmati",
  Sindhupalchok: "bagmati",
  Siraha: "madhesh",
  Solukhumbu: "koshi",
  Sunsari: "koshi",
  Surkhet: "karnali",
  Syangja: "gandaki",
  Tanahun: "gandaki",
  Taplejung: "koshi",
  Terhathum: "koshi",
  Udayapur: "koshi",
};

const FEATURED_DETAILS: Partial<
  Record<
    NepalDistrict,
    Pick<District, "categories" | "popularity" | "badge" | "highlights" | "summary">
  >
> = {
  Kathmandu: {
    categories: ["culture", "food", "scenic"],
    popularity: "popular",
    badge: "popular",
    highlights: ["Durbar Square", "Swayambhunath", "Thamel"],
    summary: "Nepal's capital — temples, markets, and gateway to the Himalayas.",
  },
  Kaski: {
    categories: ["adventure", "scenic", "food"],
    popularity: "popular",
    badge: "trending",
    highlights: ["Phewa Lake", "Sarangkot", "Paragliding"],
    summary: "Home to Pokhara — lakes, Annapurna views, and adventure sports.",
  },
  Chitwan: {
    categories: ["wildlife", "scenic", "culture"],
    popularity: "popular",
    badge: "popular",
    highlights: ["Chitwan National Park", "Jungle safari", "Tharu culture"],
    summary: "Terai lowlands famous for rhinos, elephants, and jungle safaris.",
  },
  Mustang: {
    categories: ["adventure", "culture", "scenic"],
    popularity: "popular",
    badge: "trending",
    highlights: ["Lo Manthang", "Desert landscape", "Ancient monasteries"],
    summary: "Rain-shadow kingdom with Tibetan culture and dramatic desert valleys.",
  },
  Lalitpur: {
    categories: ["culture", "food", "scenic"],
    popularity: "popular",
    badge: "peaceful",
    highlights: ["Patan Durbar Square", "Handicrafts", "Courtyard cafes"],
    summary: "City of fine arts — Newari architecture and living heritage.",
  },
  Solukhumbu: {
    categories: ["adventure", "scenic"],
    popularity: "popular",
    badge: "trending",
    highlights: ["Everest Base Camp", "Namche Bazaar", "Sherpa villages"],
    summary: "The Everest region — iconic treks and Himalayan culture.",
  },
  Ilam: {
    categories: ["scenic", "food", "culture"],
    popularity: "less-explored",
    badge: "peaceful",
    highlights: ["Tea gardens", "Antu Danda", "Mai Pokhari"],
    summary: "Rolling tea hills and misty eastern landscapes.",
  },
  Manang: {
    categories: ["adventure", "scenic"],
    popularity: "less-explored",
    badge: "peaceful",
    highlights: ["Annapurna Circuit", "Tilicho Lake", "High passes"],
    summary: "High-altitude valleys along one of the world's great treks.",
  },
  Bardiya: {
    categories: ["wildlife", "scenic"],
    popularity: "less-explored",
    highlights: ["Bardiya National Park", "Tiger tracking", "Karnali River"],
    summary: "Remote western jungle with excellent wildlife sightings.",
  },
};

const DEFAULT_HIGHLIGHTS = ["Local heritage", "Scenic viewpoints", "Traditional villages"];

function districtToSlug(name: NepalDistrict) {
  return name.toLowerCase().replace(/\s+/g, "-");
}

function defaultCategories(province: ProvinceId): DistrictCategory[] {
  if (province === "madhesh" || province === "lumbini") {
    return ["culture", "wildlife", "food"];
  }
  if (province === "karnali" || province === "sudurpashchim") {
    return ["adventure", "scenic", "culture"];
  }
  if (province === "koshi") {
    return ["adventure", "scenic", "culture"];
  }
  return ["culture", "scenic", "food"];
}

function buildDistrict(name: NepalDistrict): District {
  const province = DISTRICT_PROVINCE[name];
  const featured = FEATURED_DETAILS[name];
  const slug = districtToSlug(name);

  return {
    slug,
    name,
    province,
    categories: featured?.categories ?? defaultCategories(province),
    popularity: featured?.popularity ?? "less-explored",
    badge: featured?.badge,
    highlights: featured?.highlights ?? DEFAULT_HIGHLIGHTS,
    image: getDistrictImage(name),
    summary:
      featured?.summary ??
      `Explore ${name} — hidden trails, local culture, and landscapes across ${PROVINCES.find((p) => p.id === province)?.shortLabel ?? "Nepal"}.`,
  };
}

export const ALL_DISTRICTS: District[] = NEPAL_DISTRICTS.map(buildDistrict);

export const PAGE_SIZE = 12;

export function getProvinceLabel(id: ProvinceId) {
  return PROVINCES.find((province) => province.id === id)?.label ?? id;
}

export function getDistrictBySlug(slug: string) {
  return ALL_DISTRICTS.find((district) => district.slug === slug);
}

export function getPopularDistricts() {
  return POPULAR_DISTRICT_SLUGS.map(
    (slug) => ALL_DISTRICTS.find((district) => district.slug === slug)!
  );
}

export interface DistrictFilters {
  search: string;
  province: ProvinceId | "all";
  category: DistrictCategory | "all";
  popularity: DistrictPopularity | "all";
}

export function filterDistricts(filters: DistrictFilters) {
  const query = filters.search.trim().toLowerCase();

  return ALL_DISTRICTS.filter((district) => {
    if (filters.province !== "all" && district.province !== filters.province) {
      return false;
    }

    if (
      filters.category !== "all" &&
      !district.categories.includes(filters.category)
    ) {
      return false;
    }

    if (filters.popularity !== "all" && district.popularity !== filters.popularity) {
      return false;
    }

    if (!query) return true;

    const provinceLabel = getProvinceLabel(district.province).toLowerCase();
    return (
      district.name.toLowerCase().includes(query) ||
      district.slug.includes(query) ||
      provinceLabel.includes(query) ||
      district.highlights.some((item) => item.toLowerCase().includes(query))
    );
  });
}

export function groupDistrictsByProvince(districts: District[]) {
  return PROVINCES.map((province) => ({
    province,
    districts: districts.filter((district) => district.province === province.id),
  })).filter((group) => group.districts.length > 0);
}
