import Link from "next/link";
import { ArrowRight } from "lucide-react";
import DistrictCard from "@/components/districts/DistrictCard";
import { getPopularDistricts } from "@/lib/districts-catalog";
import { DISTRICTS_COPY } from "@/lib/districts-copy";

export default function PopularDistricts() {
  const districts = getPopularDistricts();

  return (
    <section id="popular-districts" aria-labelledby="popular-districts-heading" className="mb-10">
      <div className="mb-5 flex items-end justify-between gap-4">
        <h2 id="popular-districts-heading" className="text-xl font-bold text-primary md:text-2xl">
          {DISTRICTS_COPY.popularTitle}
        </h2>
      </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {districts.map((district) => (
          <DistrictCard key={district.slug} district={district} />
        ))}
      </div>

      <p className="mt-4 text-sm text-text-muted">
        Or browse all 77 below with filters{" "}
        <Link href="#district-filters" className="font-medium text-primary hover:text-primary-light">
          jump to filters
          <ArrowRight className="ml-1 inline h-3.5 w-3.5" aria-hidden />
        </Link>
      </p>
    </section>
  );
}
