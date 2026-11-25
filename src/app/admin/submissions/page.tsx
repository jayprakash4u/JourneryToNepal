"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Header, Footer, Container, Button } from "@/components";
import { useAuth } from "@/context/AuthContext";
import { getCategoryLabel } from "@/lib/submission-categories";
import type { PlaceSubmission } from "@/types/submission";

export default function AdminSubmissionsPage() {
  const { user, isLoading } = useAuth();
  const router = useRouter();
  const [submissions, setSubmissions] = useState<PlaceSubmission[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isLoading && !user?.isAdmin) {
      router.replace("/sign-in?redirect=/admin/submissions");
    }
  }, [user, isLoading, router]);

  useEffect(() => {
    if (!user?.isAdmin) return;

    fetch("/api/submissions?status=pending")
      .then((response) => response.json())
      .then((data: { submissions: PlaceSubmission[] }) => {
        setSubmissions(data.submissions);
      })
      .finally(() => setLoading(false));
  }, [user]);

  const updateStatus = async (id: string, status: "approved" | "rejected") => {
    const response = await fetch(`/api/submissions/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });

    if (response.ok) {
      setSubmissions((current) => current.filter((item) => item.id !== id));
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
            <h1 className="text-3xl font-bold text-primary">Review Submissions</h1>
            <Link
              href="/admin/questions"
              className="text-sm font-medium text-primary hover:text-primary-light"
            >
              Review Questions →
            </Link>
          </div>

          {submissions.length === 0 ? (
            <p className="text-text-secondary">No pending submissions.</p>
          ) : (
            <div className="space-y-5">
              {submissions.map((submission) => (
                <article
                  key={submission.id}
                  className="rounded-2xl border border-border bg-surface p-6 shadow-sm"
                >
                  <div className="mb-3 flex flex-wrap items-center gap-3">
                    <h2 className="text-xl font-semibold text-primary">
                      {submission.title}
                    </h2>
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      {getCategoryLabel(submission.category)}
                    </span>
                    <span className="text-sm text-text-muted">{submission.district}</span>
                  </div>
                  <p className="mb-2 text-sm text-text-secondary">{submission.description}</p>
                  <p className="mb-4 text-sm text-text-primary">
                    <strong>Why visit:</strong> {submission.reasonToVisit}
                  </p>
                  <p className="mb-4 text-xs text-text-muted">
                    By {submission.displayNamePreference === "anonymous" ? "Anonymous" : submission.contributorName}
                  </p>
                  <div className="flex gap-3">
                    <Button onClick={() => updateStatus(submission.id, "approved")}>
                      Approve
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => updateStatus(submission.id, "rejected")}
                    >
                      Reject
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
