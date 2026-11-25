import { RECOMMEND_COPY, RECOMMEND_PLACE_PATH } from "@/lib/recommend";
import { SITE } from "@/lib/navigation";

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Explore",
    links: [
      { label: "Adventure & Trekking", href: "/explore/adventure-trekking" },
      { label: "Culture & Heritage", href: "/explore/culture-heritage" },
      { label: "Himalayan Villages", href: "/explore/villages" },
      { label: "Food & Experience", href: "/explore/food-experience" },
      { label: "Wildlife & Jungle", href: "/explore/wildlife-jungle" },
      { label: "Spiritual Places", href: "/explore/spiritual-places" },
      { label: "All 77 Districts", href: "/explore/districts" },
    ],
  },
  {
    title: "Plan Your Trip",
    links: [
      { label: "Trip Planner", href: "/plan-trip/planner" },
      { label: "3-Day Itinerary", href: "/plan-trip/itineraries/3-days" },
      { label: "7-Day Adventure", href: "/plan-trip/itineraries/7-days" },
      { label: "10-Day Cultural Tour", href: "/plan-trip/itineraries/10-days" },
      { label: "1-Month Grand Tour", href: "/plan-trip/itineraries/1-month" },
      { label: "Travel Routes", href: "/plan-trip/routes" },
      { label: "Budget Guide", href: "/plan-trip/budget" },
    ],
  },
  {
    title: "Discover",
    links: [
      { label: "Featured Destinations", href: "/destinations/featured" },
      { label: "Community Picks", href: "/community" },
      { label: RECOMMEND_COPY.navLabel, href: RECOMMEND_PLACE_PATH },
      { label: "Travel Guides", href: "/blog/guides" },
      { label: "Travel Tips", href: "/blog/tips" },
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export const FOOTER_LEGAL_LINKS: FooterLink[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
];

export const FOOTER_SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: "instagram" as const,
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: "facebook" as const,
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    icon: "youtube" as const,
  },
  {
    label: "X (Twitter)",
    href: "https://x.com",
    icon: "x" as const,
  },
] as const;

export const FOOTER_COPY = {
  brandDescription: SITE.description,
  ctaHeading: "Know a hidden gem?",
  ctaSubtext: "Help fellow travelers discover places across all 77 districts of Nepal.",
  ctaLabel: RECOMMEND_COPY.homepageCta,
  ctaHref: RECOMMEND_PLACE_PATH,
} as const;
