import Link from "next/link";
import { ArrowRight, MessageCircle, ThumbsUp } from "lucide-react";
import { PLACE_QA_COPY } from "@/lib/place-qa";
import type { PlaceQuestion } from "@/types/qa";

interface QuestionPreviewCardProps {
  question: PlaceQuestion;
  placeName: string;
  placeHref: string;
}

function getTopAnswer(question: PlaceQuestion) {
  if (question.answers.length === 0) return null;

  const sorted = [...question.answers].sort((a, b) => {
    if (question.bestAnswerId === a.id) return -1;
    if (question.bestAnswerId === b.id) return 1;
    return b.upvotes.length - a.upvotes.length;
  });

  return sorted[0];
}

export default function QuestionPreviewCard({
  question,
  placeName,
  placeHref,
}: QuestionPreviewCardProps) {
  const topAnswer = getTopAnswer(question);

  return (
    <article className="flex h-full flex-col rounded-md border border-border bg-surface p-5 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <span className="rounded-md bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
          {placeName}
        </span>
        <span className="inline-flex items-center gap-1 text-xs text-text-muted">
          <MessageCircle className="h-3.5 w-3.5" aria-hidden />
          {PLACE_QA_COPY.replies(question.answers.length)}
        </span>
      </div>

      <h3 className="mb-3 text-base font-semibold leading-snug text-primary">
        {question.text}
      </h3>

      {topAnswer && (
        <div className="mb-4 flex-1 rounded-md border border-border-light bg-background px-4 py-3">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-text-muted">
            {question.bestAnswerId === topAnswer.id
              ? PLACE_QA_COPY.bestAnswer
              : "Top reply"}
          </p>
          <p className="line-clamp-3 text-sm leading-relaxed text-text-secondary">
            {topAnswer.text}
          </p>
          {topAnswer.upvotes.length > 0 && (
            <p className="mt-2 inline-flex items-center gap-1 text-xs text-text-muted">
              <ThumbsUp className="h-3 w-3" aria-hidden />
              {topAnswer.upvotes.length} found helpful
            </p>
          )}
        </div>
      )}

      <Link
        href={`${placeHref}#ask-about-place`}
        className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary-light"
      >
        {PLACE_QA_COPY.viewAllQuestions}
        <ArrowRight className="h-4 w-4" aria-hidden />
      </Link>
    </article>
  );
}
