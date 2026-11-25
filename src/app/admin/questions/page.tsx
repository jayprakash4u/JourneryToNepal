"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Header, Footer, Container, Button } from "@/components";
import { useAuth } from "@/context/AuthContext";
import type { PlaceQuestion } from "@/types/qa";

export default function AdminQuestionsPage() {
  const { user, isLoading } = useAuth();
  const router = useRouter();
  const [questions, setQuestions] = useState<PlaceQuestion[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isLoading && !user?.isAdmin) {
      router.replace("/sign-in?redirect=/admin/questions");
    }
  }, [user, isLoading, router]);

  useEffect(() => {
    if (!user?.isAdmin) return;

    fetch("/api/admin/questions")
      .then((response) => response.json())
      .then((data: { questions: PlaceQuestion[] }) => {
        setQuestions(data.questions);
      })
      .finally(() => setLoading(false));
  }, [user]);

  const updateStatus = async (question: PlaceQuestion, status: "approved" | "hidden") => {
    const response = await fetch(
      `/api/places/${question.placeId}/questions/${question.id}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      }
    );

    if (response.ok) {
      setQuestions((current) => current.filter((item) => item.id !== question.id));
    }
  };

  const markBestAnswer = async (question: PlaceQuestion, answerId: string) => {
    const response = await fetch(
      `/api/places/${question.placeId}/questions/${question.id}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ bestAnswerId: answerId }),
      }
    );

    if (response.ok) {
      const data = (await response.json()) as { question: PlaceQuestion };
      setQuestions((current) =>
        current.map((item) => (item.id === question.id ? data.question : item))
      );
    }
  };

  if (isLoading || loading) {
    return <p className="p-12 text-center text-text-secondary">Loading...</p>;
  }

  if (!user?.isAdmin) return null;

  return (
    <div className="flex min-h-full flex-col">
      <Header />
      <main className="flex-1 py-12">
        <Container>
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <h1 className="text-3xl font-bold text-primary">Review Questions</h1>
            <Link
              href="/admin/submissions"
              className="text-sm font-medium text-primary hover:text-primary-light"
            >
              ← Submissions
            </Link>
          </div>

          {questions.length === 0 ? (
            <p className="text-text-secondary">No pending questions.</p>
          ) : (
            <div className="space-y-5">
              {questions.map((question) => (
                <article
                  key={question.id}
                  className="rounded-2xl border border-border bg-surface p-6 shadow-sm"
                >
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-text-muted">
                    {question.authorName} ·{" "}
                    <Link
                      href={`/places/${question.placeId}`}
                      className="text-primary hover:text-primary-light"
                    >
                      View place
                    </Link>
                  </p>
                  <h2 className="mb-4 text-lg font-semibold text-primary">{question.text}</h2>

                  {question.answers.length > 0 && (
                    <div className="mb-4 space-y-2">
                      {question.answers.map((answer) => (
                        <div
                          key={answer.id}
                          className="rounded-lg bg-background px-4 py-3 text-sm"
                        >
                          <p className="mb-2 text-text-primary">{answer.text}</p>
                          <button
                            type="button"
                            onClick={() => void markBestAnswer(question, answer.id)}
                            className="text-xs font-medium text-secondary hover:underline"
                          >
                            Mark as best answer
                          </button>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex gap-3">
                    <Button
                      size="default"
                      onClick={() => void updateStatus(question, "approved")}
                    >
                      Approve
                    </Button>
                    <Button
                      variant="outline"
                      size="default"
                      onClick={() => void updateStatus(question, "hidden")}
                    >
                      Hide
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </Container>
      </main>
      <Footer />
    </div>
  );
}
