import Link from "next/link";
import { RECOMMEND_COPY, RECOMMEND_PLACE_PATH } from "@/lib/recommend";
import { Search } from "lucide-react";
import Logo from "@/components/brand/Logo";
import Container from "./Container";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import ProfileDropdown from "./ProfileDropdown";

export default function Header() {
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
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>

          <div className="hidden lg:block">
            <ProfileDropdown />
          </div>

          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
