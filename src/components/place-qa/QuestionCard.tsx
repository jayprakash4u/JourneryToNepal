"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { PLACE_QA_COPY } from "@/lib/place-qa";
import type { PlaceQuestion } from "@/types/qa";
import AnswerItem from "./AnswerItem";
import UserAvatar from "./UserAvatar";

function formatRelativeDate(iso: string) {
  const date = new Date(iso);
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

interface QuestionCardProps {
  question: PlaceQuestion;
  placeId: string;
  onAnswerPosted: (question: PlaceQuestion) => void;
  onUpvote: (answerId: string) => Promise<void>;
}

export default function QuestionCard({
  question,
  placeId,
  onAnswerPosted,
  onUpvote,
}: QuestionCardProps) {
  const { user } = useAuth();
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [answerText, setAnswerText] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sortedAnswers = [...question.answers].sort((a, b) => {
    if (question.bestAnswerId === a.id) return -1;
    if (question.bestAnswerId === b.id) return 1;
    return b.upvotes.length - a.upvotes.length;
  });

  const handleSubmitAnswer = async (event: FormEvent) => {
    event.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      const response = await fetch(
        `/api/places/${placeId}/questions/${question.id}/answers`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text: answerText }),
        }
      );

      const data = (await response.json()) as {
        question?: PlaceQuestion;
        error?: string;
      };

      if (!response.ok) {
        setError(data.error ?? "Could not post answer.");
        return;
      }

      if (data.question) {
        onAnswerPosted(data.question);
        setAnswerText("");
        setShowReplyForm(false);
      }
    } catch {
      setError("Could not post answer. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <article className="border border-border bg-surface p-5 shadow-sm md:p-6">
      <div className="mb-4 flex items-start gap-3">
        <UserAvatar
          name={question.authorName}
          profileImage={question.authorProfileImage}
          size="md"
        />
        <div className="min-w-0 flex-1">
          <p className="font-medium text-text-primary">{question.authorName}</p>
          <p className="text-xs text-text-muted">{formatRelativeDate(question.createdAt)}</p>
        </div>
      </div>

      <h3 className="mb-4 text-base font-semibold leading-snug text-primary md:text-lg">
        {question.text}
      </h3>

      {sortedAnswers.length > 0 && (
        <div className="mb-4 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
            {PLACE_QA_COPY.replies(sortedAnswers.length)}
          </p>
          {sortedAnswers.map((answer) => (
            <AnswerItem
              key={answer.id}
              answer={answer}
              isBest={question.bestAnswerId === answer.id}
              onUpvote={onUpvote}
            />
          ))}
        </div>
      )}

      {user ? (
        <>
          {!showReplyForm ? (
            <button
              type="button"
              onClick={() => setShowReplyForm(true)}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary-light"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              {PLACE_QA_COPY.reply}
            </button>
          ) : (
            <form onSubmit={(event) => void handleSubmitAnswer(event)} className="mt-2">
              <textarea
                value={answerText}
                onChange={(event) => setAnswerText(event.target.value)}
                placeholder={PLACE_QA_COPY.answerPlaceholder}
                rows={3}
                className="w-full resize-y rounded-xl border border-border bg-background px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:border-primary-light focus:outline-none focus:ring-2 focus:ring-primary/20"
                required
                minLength={10}
                maxLength={1000}
              />
              {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
              <div className="mt-3 flex gap-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-md bg-primary px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-light disabled:opacity-60"
                >
                  {PLACE_QA_COPY.postAnswer}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowReplyForm(false);
                    setError(null);
                  }}
                  className="rounded-md px-4 py-2 text-sm font-medium text-text-secondary hover:text-text-primary"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </>
      ) : (
        <p className="text-sm text-text-secondary">
          <Link
            href={`/sign-in?redirect=${encodeURIComponent(`/places/${placeId}`)}`}
            className="font-medium text-primary hover:text-primary-light"
          >
            {PLACE_QA_COPY.signInToAnswer}
          </Link>
        </p>
      )}
    </article>
  );
}
