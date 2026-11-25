"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { MapPin } from "lucide-react";
import Button from "@/components/ui/Button";
import SearchInput from "@/components/ui/SearchInput";
import { HERO_CONTENT } from "@/lib/hero";

export default function HeroContent() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) return;
    router.push(`/search?q=${encodeURIComponent(trimmed)}`);
  };

  return (
    <div className="relative z-10 flex h-full items-center justify-center px-6 py-12">
      <div className="mx-auto w-full max-w-3xl text-center">
        <p className="mb-4 inline-flex items-center gap-2 rounded-md border border-white/25 bg-white/10 px-3 py-1.5 text-sm font-medium text-white/90 backdrop-blur-sm">
          <MapPin className="h-4 w-4" aria-hidden />
          77 districts · 7 provinces
        </p>

        <h1 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
          {HERO_CONTENT.headline}
        </h1>

        <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
          {HERO_CONTENT.subtext}
        </p>

        <form onSubmit={handleSearch} className="mb-8">
          <label htmlFor="hero-search" className="sr-only">
            Search places, districts, or experiences
          </label>
          <SearchInput
            id="hero-search"
            variant="hero"
            value={query}
            onChange={setQuery}
            placeholder={HERO_CONTENT.searchPlaceholder}
            className="mx-auto max-w-xl"
          />
        </form>

        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button size="lg" variant="hero" href={HERO_CONTENT.ctas[0].href}>
            {HERO_CONTENT.ctas[0].label}
          </Button>
          <Button variant="heroOutline" size="lg" href={HERO_CONTENT.ctas[1].href}>
            {HERO_CONTENT.ctas[1].label}
          </Button>
        </div>
      </div>
    </div>
  );
}
