import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import {
  getProvinceLabel,
  type District,
  type DistrictBadge,
} from "@/lib/districts-catalog";
import { DISTRICTS_COPY } from "@/lib/districts-copy";
import { classNames } from "@/utils";

interface DistrictCardProps {
  district: District;
}

const badgeStyles: Record<DistrictBadge, string> = {
  popular: "bg-accent text-white",
  trending: "bg-primary text-white",
  peaceful: "bg-secondary text-white",
};

export default function DistrictCard({ district }: DistrictCardProps) {
  const provinceLabel = getProvinceLabel(district.province);

  return (
    <Link
      href={`/explore/districts/${district.slug}`}
      className="group flex flex-col overflow-hidden rounded-md border border-border bg-surface shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-primary/5">
        {district.image ? (
          <Image
            src={district.image}
            alt={district.name}
            fill
            quality={90}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        ) : (
          <div
            className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-secondary/15"
            aria-hidden
          />
        )}

        {district.badge && (
          <span
            className={classNames(
              "absolute left-3 top-3 rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider shadow-sm",
              badgeStyles[district.badge]
            )}
          >
            {DISTRICTS_COPY.badges[district.badge]}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-base font-bold text-primary md:text-lg">{district.name}</h3>

        <p className="mt-1 flex items-center gap-1.5 text-xs text-text-secondary">
          <MapPin className="h-3.5 w-3.5 shrink-0 text-primary-light" aria-hidden />
          {provinceLabel}
        </p>

        <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-text-secondary">
          {district.summary}
        </p>

        <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors group-hover:text-accent">
          {DISTRICTS_COPY.explore}
          <ArrowRight
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
            aria-hidden
          />
        </span>
      </div>
    </Link>
  );
}
