"use client";

import { useState } from "react";
import { ThumbsUp } from "lucide-react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { PLACE_QA_COPY } from "@/lib/place-qa";
import type { PlaceAnswer } from "@/types/qa";
import { classNames } from "@/utils";
import UserAvatar from "./UserAvatar";

function formatRelativeDate(iso: string) {
  const date = new Date(iso);
  const diffMs = Date.now() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "Yesterday";
  if (diffDays < 30) return `${diffDays} days ago`;

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

interface AnswerItemProps {
  answer: PlaceAnswer;
  isBest?: boolean;
  onUpvote: (answerId: string) => Promise<void>;
}

export default function AnswerItem({ answer, isBest, onUpvote }: AnswerItemProps) {
  const { user } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const hasUpvoted = user ? answer.upvotes.includes(user.id) : false;

  const handleUpvote = async () => {
    if (!user || isSubmitting) return;
    setIsSubmitting(true);
    try {
      await onUpvote(answer.id);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <article
      className={classNames(
        "border p-4",
        isBest ? "border-secondary/40 bg-secondary/5" : "border-border-light bg-background"
      )}
    >
      <div className="mb-2 flex items-start justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <UserAvatar
            name={answer.authorName}
            profileImage={answer.authorProfileImage}
          />
          <div>
            <p className="text-sm font-medium text-text-primary">{answer.authorName}</p>
            <p className="text-xs text-text-muted">{formatRelativeDate(answer.createdAt)}</p>
          </div>
        </div>
        {isBest && (
          <span className="shrink-0 rounded-full bg-secondary/15 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-secondary">
            {PLACE_QA_COPY.bestAnswer}
          </span>
        )}
      </div>

      <p className="mb-3 text-sm leading-relaxed text-text-primary">{answer.text}</p>

      {user ? (
        <button
          type="button"
          onClick={() => void handleUpvote()}
          disabled={isSubmitting}
          className={classNames(
            "inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors",
            hasUpvoted
              ? "bg-primary/10 text-primary"
              : "text-text-muted hover:bg-primary/5 hover:text-primary"
          )}
        >
          <ThumbsUp className="h-3.5 w-3.5" aria-hidden />
          {hasUpvoted ? PLACE_QA_COPY.upvoted : PLACE_QA_COPY.upvote}
          {answer.upvotes.length > 0 && (
            <span className="text-text-muted">({answer.upvotes.length})</span>
          )}
        </button>
      ) : (
        <p className="text-xs text-text-muted">
          {answer.upvotes.length > 0 && (
            <span>{answer.upvotes.length} found this helpful · </span>
          )}
          <Link href="/sign-in" className="font-medium text-primary hover:text-primary-light">
            Sign in
          </Link>{" "}
          to mark helpful
        </p>
      )}
    </article>
  );
}
