import { NextResponse } from "next/server";
import { getSessionUser } from "@/lib/session";
import { addAnswer, getQuestionById } from "@/lib/qa-store";
import type { PlaceAnswer } from "@/types/qa";

const MIN_ANSWER_LENGTH = 10;
const MAX_ANSWER_LENGTH = 1000;

interface RouteContext {
  params: Promise<{ placeId: string; questionId: string }>;
}

export async function POST(request: Request, context: RouteContext) {
  const user = await getSessionUser();
  if (!user) {
    return NextResponse.json({ error: "Sign in required." }, { status: 401 });
  }

  const { placeId, questionId } = await context.params;
  const question = await getQuestionById(questionId);

  if (!question || question.placeId !== placeId) {
    return NextResponse.json({ error: "Question not found." }, { status: 404 });
  }

  if (question.status === "hidden") {
    return NextResponse.json({ error: "Question not found." }, { status: 404 });
  }

  const body = (await request.json()) as { text?: string };
  const text = String(body.text ?? "").trim();

  if (text.length < MIN_ANSWER_LENGTH) {
    return NextResponse.json(
      { error: `Answer must be at least ${MIN_ANSWER_LENGTH} characters.` },
      { status: 400 }
    );
  }

  if (text.length > MAX_ANSWER_LENGTH) {
    return NextResponse.json(
      { error: `Answer must be under ${MAX_ANSWER_LENGTH} characters.` },
      { status: 400 }
    );
  }

  const { randomUUID } = await import("crypto");
  const answer: PlaceAnswer = {
    id: randomUUID(),
    questionId,
    userId: user.id,
    authorName: user.name,
    authorProfileImage: user.profileImage,
    text,
    upvotes: [],
    createdAt: new Date().toISOString(),
  };

  const updated = await addAnswer(questionId, answer);
  if (!updated) {
    return NextResponse.json({ error: "Question not found." }, { status: 404 });
  }

  if (updated.status === "pending" && user.isAdmin) {
    const { updateQuestionStatus } = await import("@/lib/qa-store");
    await updateQuestionStatus(questionId, "approved");
    updated.status = "approved";
  }

  return NextResponse.json({ question: updated, answer }, { status: 201 });
}
