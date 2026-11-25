import { NextResponse } from "next/server";
import { getSessionUser } from "@/lib/session";
import {
  getQuestionById,
  setBestAnswer,
  updateQuestionStatus,
} from "@/lib/qa-store";
import type { QuestionStatus } from "@/types/qa";

interface RouteContext {
  params: Promise<{ placeId: string; questionId: string }>;
}

export async function PATCH(request: Request, context: RouteContext) {
  const user = await getSessionUser();
  if (!user?.isAdmin) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const { placeId, questionId } = await context.params;
  const question = await getQuestionById(questionId);

  if (!question || question.placeId !== placeId) {
    return NextResponse.json({ error: "Question not found." }, { status: 404 });
  }

  const body = (await request.json()) as {
    status?: QuestionStatus;
    bestAnswerId?: string | null;
  };

  if (body.status) {
    if (!["approved", "hidden", "pending"].includes(body.status)) {
      return NextResponse.json({ error: "Invalid status." }, { status: 400 });
    }
    const updated = await updateQuestionStatus(questionId, body.status);
    return NextResponse.json({ question: updated });
  }

  if (body.bestAnswerId) {
    const updated = await setBestAnswer(questionId, body.bestAnswerId);
    if (!updated) {
      return NextResponse.json({ error: "Answer not found." }, { status: 404 });
    }
    return NextResponse.json({ question: updated });
  }

  return NextResponse.json({ error: "No valid update provided." }, { status: 400 });
}
