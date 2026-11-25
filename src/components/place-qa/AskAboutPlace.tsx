"use client";

import { useEffect, useState } from "react";
import { HelpCircle } from "lucide-react";
import { PLACE_QA_COPY } from "@/lib/place-qa";
import type { PlaceAnswer, PlaceQuestion } from "@/types/qa";
import { sortQuestionsByHelpfulness } from "@/types/qa";
import AskQuestionForm from "./AskQuestionForm";
import QuestionCard from "./QuestionCard";

interface AskAboutPlaceProps {
  placeId: string;
  initialQuestions: PlaceQuestion[];
}

export default function AskAboutPlace({
  placeId,
  initialQuestions,
}: AskAboutPlaceProps) {
  const [questions, setQuestions] = useState(initialQuestions);

  useEffect(() => {
    setQuestions(initialQuestions);
  }, [initialQuestions]);

  const handleQuestionPosted = (question: PlaceQuestion) => {
    setQuestions((current) =>
      sortQuestionsByHelpfulness([question, ...current])
    );
  };

  const handleAnswerPosted = (updated: PlaceQuestion) => {
    setQuestions((current) =>
      sortQuestionsByHelpfulness(
        current.map((item) => (item.id === updated.id ? updated : item))
      )
    );
  };

  const handleUpvote = async (answerId: string) => {
    const response = await fetch(`/api/answers/${answerId}/upvote`, {
      method: "POST",
    });

    if (!response.ok) return;

    const data = (await response.json()) as { answer: PlaceAnswer };
    setQuestions((current) =>
      current.map((question) => ({
        ...question,
        answers: question.answers.map((answer) =>
          answer.id === answerId ? data.answer : answer
        ),
      }))
    );
  };

  return (
    <section
      id="ask-about-place"
      className="border border-border bg-surface p-6 shadow-sm md:p-8"
      aria-labelledby="ask-about-place-heading"
    >
      <div className="mb-6 flex items-start gap-3">
        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
          <HelpCircle className="h-5 w-5" aria-hidden />
        </span>
        <div>
          <h2
            id="ask-about-place-heading"
            className="text-xl font-bold text-primary md:text-2xl"
          >
            {PLACE_QA_COPY.sectionTitle}
          </h2>
          <p className="mt-1 text-sm text-text-secondary">
            {PLACE_QA_COPY.sectionSubtext}
          </p>
        </div>
      </div>

      <div className="mb-8">
        <AskQuestionForm placeId={placeId} onQuestionPosted={handleQuestionPosted} />
      </div>

      {questions.length === 0 ? (
        <p className="rounded-xl bg-background px-4 py-6 text-center text-sm text-text-secondary">
          {PLACE_QA_COPY.noQuestions}
        </p>
      ) : (
        <div className="space-y-5">
          {questions.map((question) => (
            <QuestionCard
              key={question.id}
              question={question}
              placeId={placeId}
              onAnswerPosted={handleAnswerPosted}
              onUpvote={handleUpvote}
            />
          ))}
        </div>
      )}
    </section>
  );
}
