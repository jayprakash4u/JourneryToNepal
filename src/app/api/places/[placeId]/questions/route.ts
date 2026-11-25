import { NextResponse } from "next/server";
import { getSessionUser } from "@/lib/session";
import { getQuestionsByPlaceId, saveQuestion } from "@/lib/qa-store";
import type { PlaceQuestion } from "@/types/qa";

const MIN_QUESTION_LENGTH = 10;
const MAX_QUESTION_LENGTH = 500;

interface RouteContext {
  params: Promise<{ placeId: string }>;
}

export async function GET(_request: Request, context: RouteContext) {
  const { placeId } = await context.params;
  const questions = await getQuestionsByPlaceId(placeId);
  return NextResponse.json({ questions });
}

export async function POST(request: Request, context: RouteContext) {
  const user = await getSessionUser();
  if (!user) {
    return NextResponse.json({ error: "Sign in required." }, { status: 401 });
  }

  const { placeId } = await context.params;
  const body = (await request.json()) as { text?: string };
  const text = String(body.text ?? "").trim();

  if (text.length < MIN_QUESTION_LENGTH) {
    return NextResponse.json(
      { error: `Question must be at least ${MIN_QUESTION_LENGTH} characters.` },
      { status: 400 }
    );
  }

  if (text.length > MAX_QUESTION_LENGTH) {
    return NextResponse.json(
      { error: `Question must be under ${MAX_QUESTION_LENGTH} characters.` },
      { status: 400 }
    );
  }

  const { randomUUID } = await import("crypto");
  const question: PlaceQuestion = {
    id: randomUUID(),
    placeId,
    userId: user.id,
    authorName: user.name,
    authorProfileImage: user.profileImage,
    text,
    status: user.isAdmin ? "approved" : "pending",
    answers: [],
    createdAt: new Date().toISOString(),
  };

  const saved = await saveQuestion(question);
  return NextResponse.json({ question: saved }, { status: 201 });
}
