import Link from "next/link";
import { Clock } from "lucide-react";
import type { BlogArticle } from "@/lib/blog";

interface BlogCardProps {
  article: BlogArticle;
}

export default function BlogCard({ article }: BlogCardProps) {
  return (
    <Link
      href={article.href}
      className="group flex flex-col rounded-md border border-border bg-surface p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
    >
      <h3 className="mb-2 text-lg font-semibold text-primary transition-colors group-hover:text-primary-light sm:text-xl">
        {article.title}
      </h3>
      <p className="mb-4 flex-1 text-sm leading-relaxed text-text-secondary">
        {article.excerpt}
      </p>
      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-text-muted">
        <Clock className="h-3.5 w-3.5" aria-hidden />
        {article.readTime}
      </span>
    </Link>
  );
}
