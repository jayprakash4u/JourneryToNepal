"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import LocationPicker from "@/components/share/LocationPicker";
import { NEPAL_DISTRICTS } from "@/lib/districts";
import { SUBMISSION_CATEGORIES } from "@/lib/submission-categories";
import { RECOMMEND_COPY } from "@/lib/recommend";
import type { DisplayNamePreference, SubmissionCategory } from "@/types/submission";

export default function SharePlaceForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const [title, setTitle] = useState("");
  const [district, setDistrict] = useState("");
  const [category, setCategory] = useState<SubmissionCategory | "">("");
  const [description, setDescription] = useState("");
  const [reasonToVisit, setReasonToVisit] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [displayNamePreference, setDisplayNamePreference] =
    useState<DisplayNamePreference>("show");
  const [images, setImages] = useState<FileList | null>(null);
  const [video, setVideo] = useState<File | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("district", district);
      formData.append("category", category);
      formData.append("description", description);
      formData.append("reasonToVisit", reasonToVisit);
      formData.append("latitude", latitude);
      formData.append("longitude", longitude);
      formData.append("displayNamePreference", displayNamePreference);

      if (images) {
        Array.from(images).forEach((file) => formData.append("images", file));
      }

      if (video) {
        formData.append("video", video);
      }

      const response = await fetch("/api/submissions", {
        method: "POST",
        body: formData,
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(data.error ?? "Submission failed.");
      }

      setSuccess(true);
      router.refresh();
    } catch (submitError) {
      setError(
        submitError instanceof Error ? submitError.message : "Submission failed."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="rounded-2xl border border-border bg-surface p-8 text-center shadow-sm">
        <h2 className="mb-2 text-2xl font-bold text-primary">Thank you!</h2>
        <p className="text-text-secondary">
          Your recommendation has been submitted and is <strong>pending review</strong>.
          We&apos;ll publish it after our team verifies the details.
        </p>
      </div>
    );
  }

  const inputClassName =
    "w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none ring-primary/20 transition focus:ring-2";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="title" className="text-sm font-medium text-text-primary">
            Place Name
          </label>
          <input
            id="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            className={inputClassName}
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="district" className="text-sm font-medium text-text-primary">
            District
          </label>
          <select
            id="district"
            value={district}
            onChange={(event) => setDistrict(event.target.value)}
            className={inputClassName}
            required
          >
            <option value="">Select district</option>
            {NEPAL_DISTRICTS.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="category" className="text-sm font-medium text-text-primary">
          Category
        </label>
        <select
          id="category"
          value={category}
          onChange={(event) => setCategory(event.target.value as SubmissionCategory)}
          className={inputClassName}
          required
        >
          <option value="">Select category</option>
          {SUBMISSION_CATEGORIES.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="description" className="text-sm font-medium text-text-primary">
          Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          rows={4}
          className={inputClassName}
          required
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="reasonToVisit" className="text-sm font-medium text-text-primary">
          Reason to Visit
        </label>
        <textarea
          id="reasonToVisit"
          value={reasonToVisit}
          onChange={(event) => setReasonToVisit(event.target.value)}
          rows={3}
          className={inputClassName}
          placeholder="Why is this place special?"
          required
        />
      </div>

      <LocationPicker
        latitude={latitude}
        longitude={longitude}
        onLatitudeChange={setLatitude}
        onLongitudeChange={setLongitude}
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="images" className="text-sm font-medium text-text-primary">
            Images
          </label>
          <input
            id="images"
            type="file"
            accept="image/*"
            multiple
            onChange={(event) => setImages(event.target.files)}
            className="block w-full text-sm text-text-secondary file:mr-4 file:rounded-md file:border-0 file:bg-primary/10 file:px-4 file:py-2 file:text-sm file:font-medium file:text-primary"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="video" className="text-sm font-medium text-text-primary">
            Video (optional)
          </label>
          <input
            id="video"
            type="file"
            accept="video/*"
            onChange={(event) => setVideo(event.target.files?.[0] ?? null)}
            className="block w-full text-sm text-text-secondary file:mr-4 file:rounded-md file:border-0 file:bg-primary/10 file:px-4 file:py-2 file:text-sm file:font-medium file:text-primary"
          />
        </div>
      </div>

      <fieldset className="space-y-3">
        <legend className="text-sm font-medium text-text-primary">
          Display Name Preference
        </legend>
        <label className="flex items-center gap-2 text-sm text-text-secondary">
          <input
            type="radio"
            name="displayNamePreference"
            value="show"
            checked={displayNamePreference === "show"}
            onChange={() => setDisplayNamePreference("show")}
          />
          Show my name
        </label>
        <label className="flex items-center gap-2 text-sm text-text-secondary">
          <input
            type="radio"
            name="displayNamePreference"
            value="anonymous"
            checked={displayNamePreference === "anonymous"}
            onChange={() => setDisplayNamePreference("anonymous")}
          />
          Stay anonymous
        </label>
      </fieldset>

      {error && (
        <p className="rounded-xl bg-accent/10 px-4 py-3 text-sm text-accent">{error}</p>
      )}

      <Button type="submit" size="lg" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : RECOMMEND_COPY.submitCta}
      </Button>
    </form>
  );
}
