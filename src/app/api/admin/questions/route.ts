import { NextResponse } from "next/server";
import { getSessionUser } from "@/lib/session";
import { getPendingQuestions } from "@/lib/qa-store";

export async function GET() {
  const user = await getSessionUser();
  if (!user?.isAdmin) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const questions = await getPendingQuestions();
  return NextResponse.json({ questions });
}
