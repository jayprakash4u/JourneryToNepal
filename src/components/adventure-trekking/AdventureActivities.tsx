"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { ADVENTURE_ACTIVITIES } from "@/lib/adventure-trekking";
import { classNames } from "@/utils";

export default function AdventureActivities() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const updateScrollState = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;
    setCanScrollPrev(scrollLeft > 4);
    setCanScrollNext(scrollLeft + clientWidth < scrollWidth - 4);
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    updateScrollState();

    container.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      container.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  const scrollByPage = (direction: "prev" | "next") => {
    const container = scrollRef.current;
    if (!container) return;

    const card = container.querySelector<HTMLElement>("[data-activity-card]");
    const gap = 20;
    const step = card ? card.offsetWidth + gap : container.clientWidth;

    container.scrollBy({
      left: direction === "next" ? step : -step,
      behavior: "smooth",
    });
  };

  return (
    <Section variant="surface" aria-labelledby="adventure-activities-heading">
      <Container>
        <div className="mb-8 md:mb-10">
          <h2
            id="adventure-activities-heading"
            className="text-2xl font-bold tracking-tight text-primary md:text-3xl"
          >
            Adventure Activities
          </h2>
          <p className="mt-3 max-w-2xl text-text-secondary">
            Thrilling experiences across Nepal&apos;s top adventure hubs — from skies to rivers
            and canyons.
          </p>
        </div>

        <div className="flex items-stretch gap-3 sm:gap-4">
          <CarouselButton
            direction="prev"
            disabled={!canScrollPrev}
            onClick={() => scrollByPage("prev")}
          />

          <div
            ref={scrollRef}
            className="min-w-0 flex-1 overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            aria-label="Adventure activities carousel"
          >
            <div className="flex gap-5">
              {ADVENTURE_ACTIVITIES.map((activity) => (
                <Link
                  key={activity.slug}
                  data-activity-card
                  href={activity.href}
                  className="group flex w-[min(100%,16.5rem)] shrink-0 flex-col overflow-hidden rounded-md border border-border bg-surface shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-md sm:w-64 md:w-72"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-primary/5">
                    <Image
                      src={activity.image}
                      alt={activity.title}
                      fill
                      quality={95}
                      sizes="(max-width: 640px) 75vw, 288px"
                      className="object-cover"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-4 sm:p-5">
                    <p className="mb-1 flex items-center gap-1.5 text-xs font-medium text-text-muted">
                      <MapPin className="h-3.5 w-3.5 shrink-0 text-primary-light" aria-hidden />
                      {activity.location}
                    </p>
                    <h3 className="text-lg font-semibold text-primary">{activity.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-text-secondary">
                      {activity.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors group-hover:text-accent/80">
                      Explore activity
                      <ArrowRight
                        className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                        aria-hidden
                      />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <CarouselButton
            direction="next"
            disabled={!canScrollNext}
            onClick={() => scrollByPage("next")}
          />
        </div>
      </Container>
    </Section>
  );
}

interface CarouselButtonProps {
  direction: "prev" | "next";
  disabled: boolean;
  onClick: () => void;
}

function CarouselButton({ direction, disabled, onClick }: CarouselButtonProps) {
  const Icon = direction === "prev" ? ChevronLeft : ChevronRight;
  const label = direction === "prev" ? "Previous activities" : "Next activities";

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className={classNames(
        "inline-flex h-10 w-10 shrink-0 self-center items-center justify-center rounded-md border border-border bg-surface text-primary shadow-sm transition-colors sm:h-11 sm:w-11",
        disabled
          ? "cursor-not-allowed opacity-40"
          : "hover:border-primary/30 hover:bg-primary/5"
      )}
    >
      <Icon className="h-5 w-5" aria-hidden />
    </button>
  );
}
