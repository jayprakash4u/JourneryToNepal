export interface BlogArticle {
  slug: string;
  title: string;
  excerpt: string;
  href: string;
  readTime: string;
  image?: string;
}

function blogImage(filename: string) {
  return encodeURI(`/images/home page/blog/${filename}`);
}

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    slug: "hidden-gems",
    title: "Hidden Gems in Nepal",
    excerpt: "Off-the-beaten-path places most travelers miss.",
    href: "/blog/guides/hidden-gems",
    readTime: "5 min read",
  },
  {
    slug: "best-time-to-visit",
    title: "Best Time to Visit",
    excerpt: "Seasons, weather, and the ideal months for every region.",
    href: "/blog/tips/best-time-to-visit",
    readTime: "4 min read",
  },
  {
    slug: "budget-travel-guide",
    title: "Budget Travel Guide",
    excerpt: "Smart tips to explore Nepal without breaking the bank.",
    href: "/blog/guides/budget-travel",
    readTime: "6 min read",
  },
];

export { blogImage };
