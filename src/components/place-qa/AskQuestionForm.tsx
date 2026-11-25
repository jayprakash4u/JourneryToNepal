"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { PLACE_QA_COPY } from "@/lib/place-qa";
import type { PlaceQuestion } from "@/types/qa";

interface AskQuestionFormProps {
  placeId: string;
  redirectPath?: string;
  onQuestionPosted?: (question: PlaceQuestion) => void;
}

export default function AskQuestionForm({
  placeId,
  redirectPath,
  onQuestionPosted,
}: AskQuestionFormProps) {
  const { user } = useAuth();
  const [text, setText] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [pendingMessage, setPendingMessage] = useState(false);

  const signInRedirect = redirectPath ?? `/places/${placeId}`;

  if (!user) {
    return (
      <div className="rounded-2xl border border-dashed border-border bg-primary/5 p-6 text-center">
        <p className="mb-3 text-sm text-text-secondary">{PLACE_QA_COPY.signInToAsk}</p>
        <Link
          href={`/sign-in?redirect=${encodeURIComponent(signInRedirect)}`}
          className="inline-flex rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-light"
        >
          Sign in
        </Link>
      </div>
    );
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setError(null);
    setPendingMessage(false);
    setIsSubmitting(true);

    try {
      const response = await fetch(`/api/places/${placeId}/questions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });

      const data = (await response.json()) as {
        question?: PlaceQuestion;
        error?: string;
      };

      if (!response.ok) {
        setError(data.error ?? "Could not post question.");
        return;
      }

      if (data.question) {
        const isPending = data.question.status === "pending";
        if (isPending) {
          setPendingMessage(true);
        } else {
          onQuestionPosted?.(data.question);
        }
        setText("");
      }
    } catch {
      setError("Could not post question. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={(event) => void handleSubmit(event)} className="space-y-3">
      <textarea
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder={PLACE_QA_COPY.askPlaceholder}
        rows={3}
        className="w-full resize-y rounded-xl border border-border bg-surface px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:border-primary-light focus:outline-none focus:ring-2 focus:ring-primary/20"
        required
        minLength={10}
        maxLength={500}
      />
      {error && <p className="text-sm text-red-600">{error}</p>}
      {pendingMessage && (
        <p className="rounded-lg bg-accent/10 px-4 py-3 text-sm text-text-primary">
          {PLACE_QA_COPY.pendingNote}
        </p>
      )}
      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-md bg-accent px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent/90 disabled:opacity-60"
      >
        {PLACE_QA_COPY.postQuestion}
      </button>
    </form>
  );
}
