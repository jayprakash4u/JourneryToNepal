import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { classNames } from "@/utils";

interface ExploreCardProps {
  href: string;
  title: string;
  description?: string;
  eyebrow?: string;
  image?: string;
  imageAlt?: string;
  badge?: ReactNode;
  ctaLabel?: string;
  sizes?: string;
  className?: string;
}

export default function ExploreCard({
  href,
  title,
  description,
  eyebrow,
  image,
  imageAlt,
  badge,
  ctaLabel = "Explore",
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw",
  className,
}: ExploreCardProps) {
  return (
    <Link
      href={href}
      className={classNames(
        "group flex flex-col overflow-hidden rounded-md border border-border bg-surface shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg",
        className
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-primary/5">
        {image ? (
          <Image
            src={image}
            alt={imageAlt ?? title}
            fill
            quality={90}
            sizes={sizes}
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        ) : (
          <div
            className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-secondary/15"
            aria-hidden
          />
        )}
        {badge && <div className="absolute left-3 top-3 z-10">{badge}</div>}
      </div>

      <div className="flex flex-1 flex-col p-4 md:p-5">
        {eyebrow && (
          <p className="text-xs font-medium uppercase tracking-wider text-text-muted">
            {eyebrow}
          </p>
        )}
        <h3 className="mt-1 text-base font-bold text-primary md:text-lg">{title}</h3>
        {description && (
          <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-text-secondary">
            {description}
          </p>
        )}
        <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors group-hover:text-accent">
          {ctaLabel}
          <ArrowRight
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
            aria-hidden
          />
        </span>
      </div>
    </Link>
  );
}
