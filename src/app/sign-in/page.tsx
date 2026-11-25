"use client";

import { FormEvent, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Header, Footer, Container, Button } from "@/components";
import { useAuth } from "@/context/AuthContext";
import { DEMO_USERS } from "@/lib/auth";
import { RECOMMEND_COPY } from "@/lib/recommend";

function SignInForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { signIn } = useAuth();
  const [email, setEmail] = useState(DEMO_USERS[0].email);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const redirect = searchParams.get("redirect") ?? "/";

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      await signIn(email);
      router.push(redirect);
    } catch {
      setError("Sign in failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-text-primary">
          Email
        </label>
        <select
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none ring-primary/20 transition focus:ring-2"
        >
          {DEMO_USERS.map((user) => (
            <option key={user.id} value={user.email}>
              {user.name} ({user.email})
            </option>
          ))}
        </select>
      </div>

      {error && (
        <p className="rounded-xl bg-accent/10 px-4 py-3 text-sm text-accent">{error}</p>
      )}

      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Signing in..." : "Sign In"}
      </Button>
    </form>
  );
}

export default function SignInPage() {
  return (
    <div className="flex min-h-full flex-col">
      <Header />
      <main className="flex-1 py-12 lg:py-16">
        <Container className="max-w-md">
          <h1 className="mb-2 text-3xl font-bold text-primary">Sign In</h1>
          <p className="mb-8 text-text-secondary">
            {RECOMMEND_COPY.signInPrompt}
          </p>
          <Suspense fallback={<p className="text-text-secondary">Loading...</p>}>
            <SignInForm />
          </Suspense>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
