"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { RECOMMEND_COPY, RECOMMEND_PLACE_PATH } from "@/lib/recommend";
import { Search, X } from "lucide-react";
import Logo from "@/components/brand/Logo";
import Container from "./Container";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import ProfileDropdown from "./ProfileDropdown";

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchQuery.trim();
    if (!query) return;
    setIsSearchOpen(false);
    router.push(`/explore/districts?search=${encodeURIComponent(query)}`);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/95 shadow-nav backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-3 sm:gap-4 lg:gap-5">
        <Logo variant="header" priority />

        <div className="hidden flex-1 justify-center lg:flex">
          <DesktopNav />
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href={RECOMMEND_PLACE_PATH}
            className="hidden rounded-md bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent/90 sm:inline-flex"
          >
            {RECOMMEND_COPY.navLabel}
          </Link>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-text-secondary transition-colors hover:bg-primary/5 hover:text-primary"
            aria-label={isSearchOpen ? "Close search" : "Search places and districts"}
            onClick={() => setIsSearchOpen((prev) => !prev)}
          >
            {isSearchOpen ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
          </button>

          <div className="hidden lg:block">
            <ProfileDropdown />
          </div>

          <MobileNav />
        </div>
      </Container>

      {isSearchOpen && (
        <div className="border-t border-border bg-surface px-4 py-3 shadow-md">
          <Container>
            <form onSubmit={handleSearchSubmit} className="flex items-center gap-2">
              <input
                type="search"
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search districts, places, activities..."
                className="h-10 flex-1 rounded-md border border-border bg-background px-3.5 text-sm text-text-primary outline-none transition-colors placeholder:text-text-muted focus:border-primary/40 focus:ring-2 focus:ring-primary/10"
              />
              <button
                type="submit"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-white transition-colors hover:bg-primary-light"
              >
                Search
              </button>
            </form>
          </Container>
        </div>
      )}
    </header>
  );
}
