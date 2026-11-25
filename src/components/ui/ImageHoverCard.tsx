import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { classNames } from "@/utils";

interface ImageHoverCardProps {
  href: string;
  title: string;
  bullets: string[];
  image?: string;
  imageAlt?: string;
  badge?: ReactNode;
  ctaLabel?: string;
  aspectClassName?: string;
  sizes?: string;
  className?: string;
}

export default function ImageHoverCard({
  href,
  title,
  bullets,
  image,
  imageAlt,
  badge,
  ctaLabel = "View details",
  aspectClassName = "aspect-[4/5] sm:aspect-[3/4]",
  sizes = "(max-width: 640px) 50vw, (max-width: 1280px) 33vw, 20vw",
  className,
}: ImageHoverCardProps) {
  return (
    <Link
      href={href}
      className={classNames(
        "group relative block overflow-hidden rounded-md border border-border bg-primary/10 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md",
        aspectClassName,
        className
      )}
    >
      {image ? (
        <Image
          src={image}
          alt={imageAlt ?? title}
          fill
          sizes={sizes}
          className="object-cover transition-all duration-500 ease-out group-hover:scale-105 group-hover:brightness-[0.4]"
        />
      ) : (
        <div
          className="absolute inset-0 bg-gradient-to-br from-primary/35 via-primary-light/25 to-secondary/30 transition-all duration-500 group-hover:brightness-75"
          aria-hidden
        />
      )}

      {badge && (
        <div className="absolute left-3 top-3 z-10 transition-opacity duration-300 group-hover:opacity-0">
          {badge}
        </div>
      )}

      {/* Default: name on image */}
      <div
        className="absolute inset-0 z-10 bg-gradient-to-t from-black/75 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-0"
        aria-hidden
      />
      <div className="absolute inset-x-0 bottom-0 z-10 p-4 transition-all duration-300 group-hover:translate-y-2 group-hover:opacity-0">
        <h3 className="text-base font-semibold text-white sm:text-lg">{title}</h3>
      </div>

      {/* Hover: centered bullets + CTA */}
      <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/30 p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
        <div className="flex w-full max-w-[14rem] flex-col items-center text-center sm:max-w-[16rem]">
          <h3 className="mb-3 text-base font-semibold text-white sm:text-lg">{title}</h3>

          <ul className="mb-4 w-full space-y-1.5 text-left">
            {bullets.slice(0, 4).map((bullet) => (
              <li
                key={bullet}
                className="flex gap-2 text-xs leading-snug text-white/90 sm:text-sm"
              >
                <span className="shrink-0 text-accent" aria-hidden>
                  •
                </span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          <span className="inline-flex items-center justify-center rounded-md bg-accent px-5 py-2 text-sm font-medium text-white shadow-sm transition-colors group-hover:bg-accent/90">
            {ctaLabel}
          </span>
        </div>
      </div>
    </Link>
  );
}
