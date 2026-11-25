"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { MapPin } from "lucide-react";
import Button from "@/components/ui/Button";
import { DISTRICTS_HERO } from "@/lib/districts-copy";

export default function DistrictsHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!DISTRICTS_HERO.useVideo) return;

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
      {DISTRICTS_HERO.useVideo ? (
        <video
          ref={videoRef}
          src={DISTRICTS_HERO.videoSrc}
          poster={DISTRICTS_HERO.imageSrc}
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          playsInline
          loop
          preload="auto"
          aria-hidden
        />
      ) : (
        <Image
          src={DISTRICTS_HERO.imageSrc}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
          aria-hidden
        />
      )}

      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/60"
        aria-hidden
      />

      <div className="relative z-10 flex w-full items-center justify-center px-4 sm:px-6">
        <div className="mx-auto w-full max-w-3xl text-center">
          <p className="mb-4 inline-flex items-center gap-2 rounded-md border border-white/25 bg-white/10 px-3 py-1.5 text-sm font-medium text-white/90 backdrop-blur-sm">
            <MapPin className="h-4 w-4" aria-hidden />
            {DISTRICTS_HERO.badge}
          </p>

          <h1 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            {DISTRICTS_HERO.headline}
          </h1>

          <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            {DISTRICTS_HERO.subtext}
          </p>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              size="lg"
              variant="hero"
              href={DISTRICTS_HERO.ctas.explore.href}
              className="w-full sm:w-auto"
            >
              {DISTRICTS_HERO.ctas.explore.label}
            </Button>
            <Button
              size="lg"
              variant="heroOutline"
              href={DISTRICTS_HERO.ctas.plan.href}
              className="w-full sm:w-auto"
            >
              {DISTRICTS_HERO.ctas.plan.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
