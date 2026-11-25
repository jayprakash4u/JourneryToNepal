"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import DistrictCard from "@/components/districts/DistrictCard";
import DistrictFiltersBar from "@/components/districts/DistrictFiltersBar";
import DistrictMapView from "@/components/districts/DistrictMapView";
import Button from "@/components/ui/Button";
import {
  ALL_DISTRICTS,
  PAGE_SIZE,
  filterDistricts,
  type DistrictCategory,
  type DistrictPopularity,
  type ProvinceId,
} from "@/lib/districts-catalog";
import { DISTRICTS_COPY } from "@/lib/districts-copy";

type ViewMode = "grid" | "map";

export default function DistrictsExplorer() {
  const searchParams = useSearchParams();
  const urlSearch = searchParams.get("search") || searchParams.get("q") || "";
  const [search, setSearch] = useState(urlSearch);

  useEffect(() => {
    if (urlSearch) {
      setSearch(urlSearch);
    }
  }, [urlSearch]);
  const [province, setProvince] = useState<ProvinceId | "all">("all");
  const [category, setCategory] = useState<DistrictCategory | "all">("all");
  const [popularity, setPopularity] = useState<DistrictPopularity | "all">("all");
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filtered = useMemo(
    () =>
      filterDistricts({
        search,
        province,
        category,
        popularity,
      }),
    [search, province, category, popularity]
  );

  const visibleDistricts = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  const resetPagination = () => setVisibleCount(PAGE_SIZE);

  const handleClearFilters = () => {
    setSearch("");
    setProvince("all");
    setCategory("all");
    setPopularity("all");
    resetPagination();
  };

  return (
    <div>
      <DistrictFiltersBar
        search={search}
        province={province}
        category={category}
        popularity={popularity}
        viewMode={viewMode}
        resultCount={filtered.length}
        visibleCount={viewMode === "grid" ? visibleDistricts.length : filtered.length}
        onSearchChange={(value) => {
          setSearch(value);
          resetPagination();
        }}
        onProvinceChange={(value) => {
          setProvince(value);
          resetPagination();
        }}
        onCategoryChange={(value) => {
          setCategory(value);
          resetPagination();
        }}
        onPopularityChange={(value) => {
          setPopularity(value);
          resetPagination();
        }}
        onViewModeChange={setViewMode}
        onClearFilters={handleClearFilters}
      />

      {viewMode === "grid" ? (
        <>
          {visibleDistricts.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {visibleDistricts.map((district) => (
                <DistrictCard key={district.slug} district={district} />
              ))}
            </div>
          ) : (
            <p className="rounded-2xl border border-dashed border-border bg-surface px-6 py-12 text-center text-sm text-text-secondary">
              {DISTRICTS_COPY.noResults}
            </p>
          )}

          {hasMore && (
            <div className="mt-8 text-center">
              <Button
                variant="outline"
                onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
              >
                {DISTRICTS_COPY.loadMore}
              </Button>
            </div>
          )}
        </>
      ) : (
        <DistrictMapView districts={filtered} />
      )}

      <p className="sr-only">{ALL_DISTRICTS.length} districts in Nepal</p>
    </div>
  );
}
