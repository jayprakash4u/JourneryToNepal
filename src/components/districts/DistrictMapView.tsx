"use client";

import Link from "next/link";
import { MapPin } from "lucide-react";
import {
  groupDistrictsByProvince,
  type District,
} from "@/lib/districts-catalog";
import { DISTRICTS_COPY } from "@/lib/districts-copy";

interface DistrictMapViewProps {
  districts: District[];
}

export default function DistrictMapView({ districts }: DistrictMapViewProps) {
  const groups = groupDistrictsByProvince(districts);

  return (
    <div className="space-y-4">
      <p className="rounded-xl border border-dashed border-border bg-surface px-4 py-3 text-sm text-text-secondary">
        Interactive map coming soon. Browse districts by province below — click any name to
        open details.
      </p>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {groups.map(({ province, districts: provinceDistricts }) => (
          <section
            key={province.id}
            className="rounded-md border border-border bg-surface p-5 shadow-sm"
          >
            <h3 className="mb-3 flex items-center gap-2 text-base font-semibold text-primary">
              <MapPin className="h-4 w-4 text-accent" aria-hidden />
              {province.label}
              <span className="text-xs font-normal text-text-muted">
                ({provinceDistricts.length})
              </span>
            </h3>
            <ul className="flex flex-wrap gap-2">
              {provinceDistricts.map((district) => (
                <li key={district.slug}>
                  <Link
                    href={`/explore/districts/${district.slug}`}
                    className="inline-flex rounded-md border border-border-light bg-background px-3 py-1.5 text-sm text-text-primary transition-colors hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
                  >
                    {district.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      {districts.length === 0 && (
        <p className="py-8 text-center text-sm text-text-secondary">{DISTRICTS_COPY.noResults}</p>
      )}
    </div>
  );
}
