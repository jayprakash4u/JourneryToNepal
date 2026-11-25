"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, LayoutGrid, Map, X } from "lucide-react";
import SearchInput from "@/components/ui/SearchInput";
import {
  DISTRICT_CATEGORIES,
  PROVINCES,
  getProvinceLabel,
  type DistrictCategory,
  type DistrictPopularity,
  type ProvinceId,
} from "@/lib/districts-catalog";
import { DISTRICTS_COPY } from "@/lib/districts-copy";
import { classNames } from "@/utils";

type ViewMode = "grid" | "map";

interface FilterOption {
  value: string;
  label: string;
}

interface DistrictFiltersBarProps {
  search: string;
  province: ProvinceId | "all";
  category: DistrictCategory | "all";
  popularity: DistrictPopularity | "all";
  viewMode: ViewMode;
  resultCount: number;
  visibleCount: number;
  onSearchChange: (value: string) => void;
  onProvinceChange: (value: ProvinceId | "all") => void;
  onCategoryChange: (value: DistrictCategory | "all") => void;
  onPopularityChange: (value: DistrictPopularity | "all") => void;
  onViewModeChange: (mode: ViewMode) => void;
  onClearFilters: () => void;
}

function FilterDropdown({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: FilterOption[];
  onChange: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const selected = options.find((option) => option.value === value);
  const isActive = value !== "all";

  useEffect(() => {
    if (!open) return;

    function handlePointerDown(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="listbox"
        onClick={() => setOpen((current) => !current)}
        className={classNames(
          "inline-flex h-10 min-w-[8.5rem] items-center justify-between gap-2 rounded-md border px-3 text-sm transition-colors",
          isActive
            ? "border-primary/40 bg-primary/[0.04] text-primary"
            : "border-border bg-surface text-text-primary hover:border-primary/25 hover:bg-background"
        )}
      >
        <span className="truncate">
          <span className="text-text-muted">{label}: </span>
          <span className="font-medium">{selected?.label ?? DISTRICTS_COPY.all}</span>
        </span>
        <ChevronDown
          className={classNames(
            "h-4 w-4 shrink-0 text-text-muted transition-transform duration-200",
            open && "rotate-180"
          )}
          aria-hidden
        />
      </button>

      {open && (
        <div
          role="listbox"
          className="absolute left-0 top-[calc(100%+0.375rem)] z-40 max-h-64 min-w-full overflow-y-auto rounded-xl border border-border bg-surface py-1 shadow-dropdown"
        >
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              role="option"
              aria-selected={value === option.value}
              onClick={() => {
                onChange(option.value);
                setOpen(false);
              }}
              className={classNames(
                "flex w-full px-3.5 py-2.5 text-left text-sm transition-colors",
                value === option.value
                  ? "bg-primary/8 font-medium text-primary"
                  : "text-text-primary hover:bg-background"
              )}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function ActiveTag({ label, onRemove }: { label: string; onRemove: () => void }) {
  return (
    <button
      type="button"
      onClick={onRemove}
      className="inline-flex items-center gap-1 rounded-md bg-primary/8 px-2.5 py-1 text-xs font-medium text-primary transition-colors hover:bg-primary/12"
    >
      {label}
      <X className="h-3 w-3" aria-hidden />
    </button>
  );
}

export default function DistrictFiltersBar({
  search,
  province,
  category,
  popularity,
  viewMode,
  resultCount,
  visibleCount,
  onSearchChange,
  onProvinceChange,
  onCategoryChange,
  onPopularityChange,
  onViewModeChange,
  onClearFilters,
}: DistrictFiltersBarProps) {
  const provinceOptions: FilterOption[] = [
    { value: "all", label: DISTRICTS_COPY.all },
    ...PROVINCES.map((item) => ({ value: item.id, label: item.shortLabel })),
  ];

  const categoryOptions: FilterOption[] = [
    { value: "all", label: DISTRICTS_COPY.all },
    ...DISTRICT_CATEGORIES.map((item) => ({ value: item.id, label: item.label })),
  ];

  const popularityOptions: FilterOption[] = [
    { value: "all", label: DISTRICTS_COPY.all },
    { value: "popular", label: DISTRICTS_COPY.popular },
    { value: "less-explored", label: DISTRICTS_COPY.lessExplored },
  ];

  const activeTags: { key: string; label: string; onRemove: () => void }[] = [];

  if (search.trim()) {
    activeTags.push({
      key: "search",
      label: `"${search.trim()}"`,
      onRemove: () => onSearchChange(""),
    });
  }
  if (province !== "all") {
    activeTags.push({
      key: "province",
      label: getProvinceLabel(province),
      onRemove: () => onProvinceChange("all"),
    });
  }
  if (category !== "all") {
    const label = DISTRICT_CATEGORIES.find((item) => item.id === category)?.label ?? category;
    activeTags.push({
      key: "category",
      label,
      onRemove: () => onCategoryChange("all"),
    });
  }
  if (popularity !== "all") {
    const label =
      popularity === "popular" ? DISTRICTS_COPY.popular : DISTRICTS_COPY.lessExplored;
    activeTags.push({
      key: "popularity",
      label,
      onRemove: () => onPopularityChange("all"),
    });
  }

  return (
    <section id="district-filters" className="mb-8">
      <div className="rounded-xl border border-border bg-surface p-3 shadow-sm md:p-4">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
          <div className="lg:w-72 lg:shrink-0 xl:w-80">
            <SearchInput
              value={search}
              onChange={onSearchChange}
              placeholder={DISTRICTS_COPY.searchPlaceholder}
              aria-label={DISTRICTS_COPY.searchPlaceholder}
            />
          </div>

          <div className="flex flex-1 flex-wrap items-center gap-2">
            <FilterDropdown
              label={DISTRICTS_COPY.provinceLabel}
              value={province}
              options={provinceOptions}
              onChange={(value) => onProvinceChange(value as ProvinceId | "all")}
            />
            <FilterDropdown
              label={DISTRICTS_COPY.categoryLabel}
              value={category}
              options={categoryOptions}
              onChange={(value) => onCategoryChange(value as DistrictCategory | "all")}
            />
            <FilterDropdown
              label={DISTRICTS_COPY.popularityLabel}
              value={popularity}
              options={popularityOptions}
              onChange={(value) => onPopularityChange(value as DistrictPopularity | "all")}
            />
          </div>

          <div
            className="flex shrink-0 items-center gap-1 self-end rounded-md border border-border bg-background p-1 lg:self-auto"
            role="group"
            aria-label="View mode"
          >
            <button
              type="button"
              onClick={() => onViewModeChange("grid")}
              aria-pressed={viewMode === "grid"}
              className={classNames(
                "inline-flex h-8 w-8 items-center justify-center rounded-md transition-colors",
                viewMode === "grid"
                  ? "bg-primary text-white"
                  : "text-text-muted hover:bg-surface hover:text-primary"
              )}
            >
              <LayoutGrid className="h-4 w-4" aria-hidden />
              <span className="sr-only">{DISTRICTS_COPY.gridView}</span>
            </button>
            <button
              type="button"
              onClick={() => onViewModeChange("map")}
              aria-pressed={viewMode === "map"}
              className={classNames(
                "inline-flex h-8 w-8 items-center justify-center rounded-md transition-colors",
                viewMode === "map"
                  ? "bg-primary text-white"
                  : "text-text-muted hover:bg-surface hover:text-primary"
              )}
            >
              <Map className="h-4 w-4" aria-hidden />
              <span className="sr-only">{DISTRICTS_COPY.mapView}</span>
            </button>
          </div>
        </div>

        {activeTags.length > 0 && (
          <div className="mt-3 flex flex-wrap items-center gap-2 border-t border-border-light pt-3">
            {activeTags.map((tag) => (
              <ActiveTag key={tag.key} label={tag.label} onRemove={tag.onRemove} />
            ))}
            <button
              type="button"
              onClick={onClearFilters}
              className="text-xs font-medium text-text-muted transition-colors hover:text-primary"
            >
              {DISTRICTS_COPY.clearFilters}
            </button>
          </div>
        )}
      </div>

      <div className="mt-4 flex items-center justify-between gap-3">
        <p className="text-sm text-text-secondary">
          {DISTRICTS_COPY.showing(visibleCount, resultCount)}
        </p>
      </div>
    </section>
  );
}
