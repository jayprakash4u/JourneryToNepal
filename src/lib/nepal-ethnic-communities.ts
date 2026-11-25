export type EthnicCategoryId =
  | "khas-arya"
  | "janajati-hill"
  | "janajati-terai"
  | "madhesi"
  | "dalit-hill"
  | "dalit-terai"
  | "religious-minority"
  | "others";

export type EthnicRegionId =
  | "hill"
  | "mountain"
  | "terai"
  | "kathmandu-valley"
  | "throughout";

export interface EthnicCommunity {
  slug: string;
  name: string;
  category: EthnicCategoryId;
  region: EthnicRegionId;
  regionLabel: string;
  language?: string;
}

export const ETHNIC_CATEGORY_OPTIONS: {
  id: EthnicCategoryId | "all";
  label: string;
}[] = [
  { id: "all", label: "All Categories" },
  { id: "khas-arya", label: "Khas Arya & Hill Castes" },
  { id: "janajati-hill", label: "Janajati — Hill & Mountain" },
  { id: "janajati-terai", label: "Janajati — Terai" },
  { id: "madhesi", label: "Madhesi Castes" },
  { id: "dalit-hill", label: "Dalit — Hill" },
  { id: "dalit-terai", label: "Dalit — Terai" },
  { id: "religious-minority", label: "Religious & Minority" },
  { id: "others", label: "Others" },
];

export const ETHNIC_REGION_OPTIONS: {
  id: EthnicRegionId | "all";
  label: string;
}[] = [
  { id: "all", label: "All Regions" },
  { id: "hill", label: "Hill" },
  { id: "mountain", label: "Mountain" },
  { id: "terai", label: "Terai" },
  { id: "kathmandu-valley", label: "Kathmandu Valley" },
  { id: "throughout", label: "Throughout Nepal" },
];

const REGION_LABELS: Record<EthnicRegionId, string> = {
  hill: "Hill",
  mountain: "Mountain",
  terai: "Terai",
  "kathmandu-valley": "Kathmandu Valley",
  throughout: "Throughout Nepal",
};

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[()]/g, "")
    .replace(/:\s*/g, "")
    .replace(/\//g, "-")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

type RawCommunity = {
  name: string;
  region: EthnicRegionId;
  language?: string;
};

function buildCommunities(
  category: EthnicCategoryId,
  items: readonly RawCommunity[],
): EthnicCommunity[] {
  return items.map((item) => ({
    slug: slugify(item.name),
    name: item.name,
    category,
    region: item.region,
    regionLabel: REGION_LABELS[item.region],
    language: item.language,
  }));
}

const KHAS_ARYA: RawCommunity[] = [
  { name: "Chhetri", region: "throughout", language: "Nepali" },
  { name: "Brahman (Hill)", region: "hill", language: "Nepali" },
  { name: "Thakuri", region: "hill", language: "Nepali" },
  { name: "Sanyasi/Dasnami", region: "hill", language: "Nepali" },
];

const JANAJATI_HILL: RawCommunity[] = [
  { name: "Magar", region: "hill", language: "Magar" },
  { name: "Tamang", region: "hill", language: "Tamang" },
  { name: "Newar", region: "kathmandu-valley", language: "Nepal Bhasa (Newari)" },
  { name: "Rai", region: "hill", language: "Rai" },
  { name: "Gurung", region: "hill", language: "Gurung" },
  { name: "Yakthung (Limbu)", region: "hill", language: "Limbu" },
  { name: "Sherpa", region: "mountain", language: "Sherpa" },
  { name: "Gharti/Bhujel", region: "hill", language: "Gharti" },
  { name: "Chepang/Praja", region: "hill", language: "Chepang" },
  { name: "Sunuwar", region: "hill", language: "Sunuwar" },
  { name: "Ghale", region: "hill", language: "Ghale" },
  { name: "Kulung", region: "hill", language: "Kulung" },
  { name: "Thami", region: "hill", language: "Thami" },
  { name: "Chamling", region: "hill", language: "Chamling" },
  { name: "Chhantyal/Chhantel", region: "hill", language: "Chhantyal" },
  { name: "Thakali", region: "mountain", language: "Thakali" },
  { name: "Bote", region: "hill", language: "Bote" },
  { name: "Pun", region: "hill", language: "Pun" },
  { name: "Hyolmo/Yholmopa", region: "hill", language: "Hyolmo" },
  { name: "Kumal", region: "hill", language: "Kumal" },
  { name: "Majhi", region: "hill", language: "Majhi" },
  { name: "Pahari", region: "hill", language: "Pahari" },
  { name: "Yakkha", region: "hill", language: "Yakkha" },
  { name: "Bhote", region: "mountain", language: "Bhote" },
  { name: "Bantawa", region: "hill", language: "Bantawa" },
  { name: "Baram/Baramu", region: "hill", language: "Baram" },
  { name: "Nachhiring", region: "hill", language: "Nachhiring" },
  { name: "Jirel", region: "hill", language: "Jirel" },
  { name: "Dura", region: "hill", language: "Dura" },
  { name: "Mewahang", region: "hill", language: "Mewahang" },
  { name: "Lepcha", region: "hill", language: "Lepcha" },
  { name: "Byansi/Sauka", region: "mountain", language: "Byansi" },
  { name: "Raute", region: "hill", language: "Raute" },
  { name: "Walung", region: "mountain", language: "Walung" },
  { name: "Khaling", region: "hill", language: "Khaling" },
  { name: "Sampang", region: "hill", language: "Sampang" },
  { name: "Lhopa", region: "mountain", language: "Lhopa" },
  { name: "Chumba/Nubri", region: "mountain", language: "Nubri" },
  { name: "Phree", region: "mountain" },
  { name: "Mugal/Mugum", region: "mountain", language: "Mugum" },
  { name: "Karmarong", region: "mountain", language: "Karmarong" },
  { name: "Done", region: "hill" },
  { name: "Sangpang", region: "hill", language: "Sangpang" },
  { name: "Dumi", region: "hill", language: "Dumi" },
  { name: "Puma", region: "hill", language: "Puma" },
  { name: "Athpahariya", region: "hill", language: "Athpahariya" },
  { name: "Dungmali", region: "hill", language: "Dungmali" },
  { name: "Chhintang", region: "hill", language: "Chhintang" },
  { name: "Yamphu", region: "hill", language: "Yamphu" },
  { name: "Koyee", region: "hill", language: "Koyee" },
  { name: "Lohorung", region: "hill", language: "Lohorung" },
  { name: "Bahing", region: "hill", language: "Bahing" },
  { name: "Hayu", region: "hill", language: "Hayu" },
  { name: "Lhomi", region: "mountain", language: "Lhomi" },
  { name: "Topkegola", region: "mountain", language: "Topkegola" },
];

const JANAJATI_TERAI: RawCommunity[] = [
  { name: "Tharu", region: "terai", language: "Tharu" },
  { name: "Ranatharu", region: "terai", language: "Tharu" },
  { name: "Rajbanshi", region: "terai", language: "Rajbanshi" },
  { name: "Danuwar", region: "terai", language: "Danuwar" },
  { name: "Dhimal", region: "terai", language: "Dhimal" },
  { name: "Tajpuriya", region: "terai", language: "Tajpuriya" },
  { name: "Darai", region: "terai", language: "Darai" },
  { name: "Santhal", region: "terai", language: "Santhal" },
  { name: "Meche", region: "terai", language: "Meche" },
  { name: "Kisan", region: "terai", language: "Kisan" },
  { name: "Munda/Mudiyari", region: "terai", language: "Munda" },
  { name: "Koche", region: "terai", language: "Koche" },
];

const MADHESI: RawCommunity[] = [
  { name: "Yadav", region: "terai", language: "Maithili" },
  { name: "Teli", region: "terai", language: "Bhojpuri" },
  { name: "Koiri/Kushwaha", region: "terai", language: "Bhojpuri" },
  { name: "Kurmi", region: "terai", language: "Maithili" },
  { name: "Dhanuk", region: "terai", language: "Maithili" },
  { name: "Brahman (Tarai)", region: "terai", language: "Nepali" },
  { name: "Mallaha", region: "terai", language: "Maithili" },
  { name: "Kewat", region: "terai", language: "Maithili" },
  { name: "Kanu", region: "terai", language: "Maithili" },
  { name: "Hajam/Thakur", region: "terai", language: "Maithili" },
  { name: "Kalwar", region: "terai", language: "Bhojpuri" },
  { name: "Tatma/Tatwa", region: "terai", language: "Maithili" },
  { name: "Khatwe", region: "terai", language: "Maithili" },
  { name: "Nuniya", region: "terai", language: "Bhojpuri" },
  { name: "Sundi", region: "terai", language: "Maithili" },
  { name: "Lohar", region: "terai", language: "Maithili" },
  { name: "Bin", region: "terai", language: "Maithili" },
  { name: "Kumhar", region: "terai", language: "Maithili" },
  { name: "Sonar", region: "terai", language: "Maithili" },
  { name: "Haluwai", region: "terai", language: "Maithili" },
  { name: "Baraee", region: "terai", language: "Maithili" },
  { name: "Kahar", region: "terai", language: "Maithili" },
  { name: "Baniyan", region: "terai", language: "Maithili" },
  { name: "Kathabaniyan", region: "terai", language: "Maithili" },
  { name: "Badhaee/Badhee", region: "terai", language: "Maithili" },
  { name: "Rajput", region: "terai", language: "Maithili" },
  { name: "Amat", region: "terai", language: "Maithili" },
  { name: "Lodh", region: "terai", language: "Maithili" },
  { name: "Gaderi/Bhediyar", region: "terai", language: "Maithili" },
  { name: "Kayastha", region: "terai", language: "Maithili" },
  { name: "Bhumihar", region: "terai", language: "Maithili" },
  { name: "Rajbhar", region: "terai", language: "Bhojpuri" },
  { name: "Rauniyar", region: "terai", language: "Maithili" },
  { name: "Khawas", region: "terai", language: "Maithili" },
  { name: "Mali", region: "terai", language: "Maithili" },
  { name: "Rajdhob", region: "terai", language: "Maithili" },
  { name: "Dhunia", region: "terai", language: "Maithili" },
  { name: "Gondh/Gond", region: "terai", language: "Maithili" },
  { name: "Beldar", region: "terai", language: "Maithili" },
  { name: "Chai/Khulaut", region: "terai", language: "Maithili" },
  { name: "Kewarat", region: "terai", language: "Maithili" },
  { name: "Dev", region: "terai", language: "Maithili" },
  { name: "Kamar", region: "terai", language: "Maithili" },
];

const DALIT_HILL: RawCommunity[] = [
  { name: "Bishwokarma (Kami)", region: "hill", language: "Nepali" },
  { name: "Pariyar (Damai/Dholi)", region: "hill", language: "Nepali" },
  { name: "Mijar (Sarki)", region: "hill", language: "Nepali" },
  { name: "Gaine", region: "hill", language: "Nepali" },
  { name: "Badi", region: "hill", language: "Nepali" },
];

const DALIT_TERAI: RawCommunity[] = [
  { name: "Chamar/Harijan/Ram", region: "terai", language: "Maithili" },
  { name: "Musahar", region: "terai", language: "Maithili" },
  { name: "Dusadh/Pasawan/Pasi", region: "terai", language: "Maithili" },
  { name: "Bantar/Sardar", region: "terai", language: "Maithili" },
  { name: "Kori", region: "terai", language: "Maithili" },
  { name: "Dom", region: "terai", language: "Maithili" },
  { name: "Tatma", region: "terai", language: "Maithili" },
  { name: "Khatik", region: "terai", language: "Maithili" },
  { name: "Halkhor", region: "terai", language: "Maithili" },
  { name: "Dhobi", region: "terai", language: "Maithili" },
  { name: "Kakaihiya", region: "terai", language: "Maithili" },
  { name: "Kalar", region: "terai", language: "Maithili" },
  { name: "Natuwa", region: "terai", language: "Maithili" },
  { name: "Patharkatta/Kushwadiya", region: "terai", language: "Maithili" },
  { name: "Dhankar/Dharikar", region: "terai", language: "Maithili" },
  { name: "Khang", region: "terai", language: "Maithili" },
  { name: "Sarbhang", region: "terai", language: "Maithili" },
  { name: "Marwar", region: "terai", language: "Maithili" },
  { name: "Jhangad", region: "terai", language: "Maithili" },
  { name: "Pasi", region: "terai", language: "Maithili" },
  { name: "Lalbegi", region: "terai", language: "Maithili" },
];

const RELIGIOUS_MINORITY: RawCommunity[] = [
  { name: "Musalman (Muslim)", region: "throughout", language: "Urdu" },
  { name: "Churaute (Hill Muslim)", region: "hill", language: "Nepali" },
];

const OTHERS: RawCommunity[] = [
  { name: "Marwadi", region: "throughout", language: "Marwari" },
  { name: "Bangali", region: "terai", language: "Bengali" },
  { name: "Punjabi/Sikh", region: "throughout", language: "Punjabi" },
];

export const ALL_ETHNIC_COMMUNITIES: readonly EthnicCommunity[] = [
  ...buildCommunities("khas-arya", KHAS_ARYA),
  ...buildCommunities("janajati-hill", JANAJATI_HILL),
  ...buildCommunities("janajati-terai", JANAJATI_TERAI),
  ...buildCommunities("madhesi", MADHESI),
  ...buildCommunities("dalit-hill", DALIT_HILL),
  ...buildCommunities("dalit-terai", DALIT_TERAI),
  ...buildCommunities("religious-minority", RELIGIOUS_MINORITY),
  ...buildCommunities("others", OTHERS),
];

export const TOTAL_ETHNIC_COMMUNITIES = ALL_ETHNIC_COMMUNITIES.length;

export const FEATURED_COMMUNITY_SLUGS = [
  "newar",
  "gurung",
  "magar",
  "tharu",
  "tamang",
  "sherpa",
  "brahman-hill",
  "chhetri",
] as const;

export function getCommunityBySlug(slug: string) {
  return ALL_ETHNIC_COMMUNITIES.find((community) => community.slug === slug);
}
