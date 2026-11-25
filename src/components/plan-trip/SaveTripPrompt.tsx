"use client";

import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { PLAN_TRIP_PAGE_COPY } from "@/lib/plan-trip-copy";

interface SaveTripPromptProps {
  planTitle: string;
}

export default function SaveTripPrompt({ planTitle }: SaveTripPromptProps) {
  const { user } = useAuth();
  const { planner } = PLAN_TRIP_PAGE_COPY;
  const redirectPath = "/plan-trip/planner#trip-planner-tool";

  if (user) {
    return (
      <div className="rounded-md border border-dashed border-primary/25 bg-primary/5 p-4 text-center">
        <p className="text-sm text-text-secondary">
          <span className="font-medium text-text-primary">&ldquo;{planTitle}&rdquo;</span>{" "}
          {planner.savedMessage}
        </p>
        <Link
          href="/my-trips"
          className="mt-3 inline-flex rounded-md bg-primary px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-light"
        >
          View My Trips
        </Link>
      </div>
    );
  }

  return (
    <div className="rounded-md border border-dashed border-border bg-background p-4 text-center">
      <p className="mb-3 text-sm text-text-secondary">{planner.savePrompt}</p>
      <Link
        href={`/sign-in?redirect=${encodeURIComponent(redirectPath)}`}
        className="inline-flex rounded-md bg-accent px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent/90"
      >
        {planner.saveCta}
      </Link>
    </div>
  );
}
