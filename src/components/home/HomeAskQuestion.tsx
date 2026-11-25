"use client";

import { useState } from "react";
import { HelpCircle } from "lucide-react";
import AskQuestionForm from "@/components/place-qa/AskQuestionForm";
import { PLACE_QA_COPY, type QaPlaceOption } from "@/lib/place-qa";

interface HomeAskQuestionProps {
  places: QaPlaceOption[];
}

export default function HomeAskQuestion({ places }: HomeAskQuestionProps) {
  const [selectedPlaceId, setSelectedPlaceId] = useState(places[0]?.id ?? "");

  if (places.length === 0) return null;

  return (
    <div className="rounded-xl border border-border bg-surface p-5 sm:p-6 shadow-sm md:p-8">
      <div className="mb-5 flex items-start gap-3">
        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
          <HelpCircle className="h-5 w-5" aria-hidden />
        </span>
        <div>
          <h3 className="text-lg font-bold text-primary md:text-xl">
            {PLACE_QA_COPY.sectionTitle}
          </h3>
          <p className="mt-1 text-sm text-text-secondary">
            Pick a destination and ask anything before you visit.
          </p>
        </div>
      </div>

      <label htmlFor="qa-place-select" className="mb-2 block text-sm font-medium text-text-primary">
        {PLACE_QA_COPY.selectPlace}
      </label>
      <select
        id="qa-place-select"
        value={selectedPlaceId}
        onChange={(event) => setSelectedPlaceId(event.target.value)}
        className="mb-4 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-text-primary focus:border-primary-light focus:outline-none focus:ring-2 focus:ring-primary/20"
      >
        {places.map((place) => (
          <option key={place.id} value={place.id}>
            {place.name}
          </option>
        ))}
      </select>

      <AskQuestionForm
        key={selectedPlaceId}
        placeId={selectedPlaceId}
        redirectPath="/#traveler-questions"
      />
    </div>
  );
}
