"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { classNames } from "@/utils";
import { HERO_FADE_MS, HERO_VIDEOS } from "@/lib/hero";
import HeroContent from "./HeroContent";

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const isSwitchingRef = useRef(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPrefersReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const goToNextVideo = useCallback(() => {
    if (isSwitchingRef.current) return;
    isSwitchingRef.current = true;
    setActiveIndex((current) => (current + 1) % HERO_VIDEOS.length);
  }, []);

  const playVideo = useCallback(async (index: number, restart = false) => {
    const video = videoRefs.current[index];
    if (!video) return;

    try {
      if (restart) {
        video.currentTime = 0;
      }
      await video.play();
    } catch {
      // Autoplay can be blocked until user interaction.
    }
  }, []);

  const pauseInactiveVideos = useCallback((active: number) => {
    videoRefs.current.forEach((video, index) => {
      if (!video || index === active) return;
      video.pause();
    });
  }, []);

  useEffect(() => {
    void playVideo(activeIndex, true);
    pauseInactiveVideos(activeIndex);
    isSwitchingRef.current = false;

    const nextIndex = (activeIndex + 1) % HERO_VIDEOS.length;
    const nextVideo = videoRefs.current[nextIndex];
    if (nextVideo) {
      nextVideo.preload = "auto";
      nextVideo.load();
    }
  }, [activeIndex, pauseInactiveVideos, playVideo]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void playVideo(activeIndex, false);
        } else {
          videoRefs.current.forEach((video) => video?.pause());
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [activeIndex, playVideo]);

  const handleVideoEnded = (index: number) => {
    if (index !== activeIndex) return;
    goToNextVideo();
  };

  const handleTimeUpdate = (index: number) => {
    if (index !== activeIndex || isSwitchingRef.current) return;

    const video = videoRefs.current[index];
    if (!video || !Number.isFinite(video.duration) || video.duration <= 0) return;

    if (video.currentTime >= video.duration - 0.35) {
      goToNextVideo();
    }
  };

  const handleCanPlay = (index: number) => {
    if (index === activeIndex) {
      setIsReady(true);
      void playVideo(index, false);
    }
  };

  if (prefersReducedMotion) {
    return (
      <section
        ref={sectionRef}
        className="relative flex min-h-[calc(100svh-4rem)] sm:h-[calc(100svh-4rem)] w-full items-center justify-center overflow-hidden bg-primary"
        aria-label="Nepal hero"
      >
        <video
          src={HERO_VIDEOS[0].src}
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          playsInline
          loop
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-black/40"
          aria-hidden
        />
        <HeroContent />
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[calc(100svh-4rem)] sm:h-[calc(100svh-4rem)] w-full items-center justify-center overflow-hidden bg-primary"
      aria-label="Nepal hero"
    >
      {HERO_VIDEOS.map((video, index) => (
        <video
          key={video.src}
          ref={(element) => {
            videoRefs.current[index] = element;
          }}
          src={video.src}
          muted
          playsInline
          loop={false}
          preload="auto"
          className={classNames(
            "absolute inset-0 h-full w-full object-cover transition-opacity ease-in-out",
            activeIndex === index && isReady ? "opacity-100" : "opacity-0"
          )}
          style={{ transitionDuration: `${HERO_FADE_MS}ms` }}
          onCanPlay={() => handleCanPlay(index)}
          onEnded={() => handleVideoEnded(index)}
          onTimeUpdate={() => handleTimeUpdate(index)}
          aria-hidden
        />
      ))}

      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/55"
        aria-hidden
      />

      <div
        className={classNames(
          "pointer-events-none absolute inset-0 bg-primary transition-opacity duration-700",
          isReady ? "opacity-0" : "opacity-100"
        )}
        aria-hidden
      />

      <HeroContent />
    </section>
  );
}
