"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import SharePlaceForm from "@/components/share/SharePlaceForm";

import { RECOMMEND_PLACE_PATH } from "@/lib/recommend";

export default function SharePlaceGate() {
  const { user, isLoading } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") ?? RECOMMEND_PLACE_PATH;

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace(`/sign-in?redirect=${encodeURIComponent(redirect)}`);
    }
  }, [isLoading, user, router, redirect]);

  if (isLoading) {
    return <p className="text-center text-text-secondary">Loading...</p>;
  }

  if (!user) return null;

  return <SharePlaceForm />;
}
