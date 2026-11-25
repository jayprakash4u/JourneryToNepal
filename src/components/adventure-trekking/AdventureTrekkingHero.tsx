"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import SearchInput from "@/components/ui/SearchInput";
import { ADVENTURE_HERO, ADVENTURE_QUICK_FILTERS } from "@/lib/adventure-trekking";

export default function AdventureTrekkingHero() {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const router = useRouter();

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) return;
    router.push(`/explore/districts?search=${encodeURIComponent(trimmed)}`);
  };

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;

    const playVideo = async () => {
      try {
        await video.play();
      } catch {
        // Autoplay may be blocked until user interaction.
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void playVideo();
        } else {
          video.pause();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(section);
    void playVideo();

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[70vh] sm:min-h-[75vh] lg:h-[75vh] w-full items-center justify-center overflow-hidden bg-primary py-12 sm:py-16 lg:py-0"
    >
      <video
        ref={videoRef}
        src={ADVENTURE_HERO.videoSrc}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        playsInline
        loop
        preload="auto"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/55"
        aria-hidden
      />

      <div className="relative z-10 flex w-full items-center justify-center px-4 sm:px-6">
        <div className="mx-auto w-full max-w-3xl text-center">
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            {ADVENTURE_HERO.headline}
          </h1>

          <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            {ADVENTURE_HERO.subtext}
          </p>

          <form onSubmit={handleSearch} className="mb-4">
            <label htmlFor="adventure-search" className="mb-2 block text-sm font-medium text-white/90">
              {ADVENTURE_HERO.searchLabel}
            </label>
            <SearchInput
              id="adventure-search"
              variant="hero"
              value={query}
              onChange={setQuery}
              placeholder={ADVENTURE_HERO.searchPlaceholder}
              className="mx-auto max-w-xl"
            />
          </form>

          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {ADVENTURE_QUICK_FILTERS.map((filter) => (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActiveFilter(activeFilter === filter.id ? null : filter.id)}
                aria-pressed={activeFilter === filter.id}
                className={`rounded-md border px-3 py-1.5 text-xs font-medium backdrop-blur-sm transition-colors ${
                  activeFilter === filter.id
                    ? "border-white bg-white text-primary"
                    : "border-white/30 bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <Button
            size="lg"
            variant="hero"
            href={ADVENTURE_HERO.cta.href}
          >
            {ADVENTURE_HERO.cta.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
