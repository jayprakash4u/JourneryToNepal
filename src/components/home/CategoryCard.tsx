import ExploreCard from "@/components/ui/ExploreCard";
import type { ExploreCategory } from "@/lib/categories";

interface CategoryCardProps {
  category: ExploreCategory;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <ExploreCard
      href={category.href}
      title={category.title}
      eyebrow={category.highlights[0]}
      description={category.highlights.slice(1).join(" · ")}
      image={category.image}
      imageAlt={category.title}
    />
  );
}
