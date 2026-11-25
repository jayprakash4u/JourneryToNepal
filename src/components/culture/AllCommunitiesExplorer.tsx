"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Languages, MapPin, Search, Users } from "lucide-react";
import Container from "@/components/layout/Container";
import {
  ALL_ETHNIC_COMMUNITIES,
  ETHNIC_CATEGORY_OPTIONS,
  ETHNIC_REGION_OPTIONS,
  TOTAL_ETHNIC_COMMUNITIES,
  type EthnicCategoryId,
  type EthnicCommunity,
  type EthnicRegionId,
} from "@/lib/nepal-ethnic-communities";
import { classNames } from "@/utils";

function CommunityCard({ community }: { community: EthnicCommunity }) {
  return (
    <article
      id={community.slug}
      className="scroll-mt-28 rounded-xl border border-border bg-surface p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="mb-3 flex h-24 items-center justify-center rounded-lg bg-gradient-to-br from-accent/15 via-[#f5ebe0] to-primary/10">
        <Users className="h-8 w-8 text-primary/30" aria-hidden />
      </div>

      <h2 className="text-base font-bold text-primary">{community.name}</h2>

      <p className="mt-2 flex items-center gap-1.5 text-sm text-text-secondary">
        <MapPin className="h-3.5 w-3.5 shrink-0 text-accent" aria-hidden />
        {community.regionLabel}
      </p>

      {community.language ? (
        <p className="mt-1.5 flex items-center gap-1.5 text-sm text-text-secondary">
          <Languages className="h-3.5 w-3.5 shrink-0 text-accent" aria-hidden />
          {community.language}
        </p>
      ) : null}
    </article>
  );
}

export default function AllCommunitiesExplorer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<EthnicCategoryId | "all">("all");
  const [region, setRegion] = useState<EthnicRegionId | "all">("all");

  const filteredCommunities = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return ALL_ETHNIC_COMMUNITIES.filter((community) => {
      const matchesCategory =
        category === "all" || community.category === category;
      const matchesRegion = region === "all" || community.region === region;
      const matchesQuery =
        !normalizedQuery ||
        community.name.toLowerCase().includes(normalizedQuery) ||
        community.regionLabel.toLowerCase().includes(normalizedQuery) ||
        community.language?.toLowerCase().includes(normalizedQuery);

      return matchesCategory && matchesRegion && matchesQuery;
    });
  }, [category, query, region]);

  return (
    <Container>
      <div className="rounded-xl border border-border bg-surface p-4 shadow-sm sm:p-5">
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.8fr)_minmax(0,0.8fr)]">
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-text-primary">
              Search communities
            </span>
            <span className="relative flex items-center">
              <Search
                className="pointer-events-none absolute left-3 h-4 w-4 text-text-muted"
                aria-hidden
              />
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search by name, region, or language..."
                className="h-11 w-full rounded-md border border-border bg-background pl-10 pr-3 text-sm outline-none transition-colors focus:border-primary-light"
              />
            </span>
          </label>

          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-text-primary">
              Category
            </span>
            <select
              value={category}
              onChange={(event) =>
                setCategory(event.target.value as EthnicCategoryId | "all")
              }
              className="h-11 w-full rounded-md border border-border bg-background px-3 text-sm outline-none transition-colors focus:border-primary-light"
            >
              {ETHNIC_CATEGORY_OPTIONS.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-text-primary">
              Region
            </span>
            <select
              value={region}
              onChange={(event) =>
                setRegion(event.target.value as EthnicRegionId | "all")
              }
              className="h-11 w-full rounded-md border border-border bg-background px-3 text-sm outline-none transition-colors focus:border-primary-light"
            >
              {ETHNIC_REGION_OPTIONS.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

      <p className="mt-5 text-sm text-text-secondary">
        Showing{" "}
        <span className="font-semibold text-text-primary">
          {filteredCommunities.length}
        </span>{" "}
        of {TOTAL_ETHNIC_COMMUNITIES} ethnic communities
      </p>

      {filteredCommunities.length > 0 ? (
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredCommunities.map((community) => (
            <CommunityCard key={community.slug} community={community} />
          ))}
        </div>
      ) : (
        <div className="mt-10 rounded-xl border border-dashed border-border bg-surface px-6 py-12 text-center">
          <p className="text-base font-medium text-text-primary">
            No communities match your search.
          </p>
          <p className="mt-2 text-sm text-text-secondary">
            Try a different name, category, or region.
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setCategory("all");
              setRegion("all");
            }}
            className="mt-4 text-sm font-medium text-primary hover:underline"
          >
            Clear filters
          </button>
        </div>
      )}

      <p className="mt-10 text-center text-sm text-text-muted">
        <Link href="/explore/culture-heritage#people-culture" className="text-primary hover:underline">
          ← Back to Culture &amp; Heritage
        </Link>
      </p>
    </Container>
  );
}
