import { NextResponse } from "next/server";
import { getSessionUser } from "@/lib/session";
import { toggleAnswerUpvote } from "@/lib/qa-store";

interface RouteContext {
  params: Promise<{ answerId: string }>;
}

export async function POST(_request: Request, context: RouteContext) {
  const user = await getSessionUser();
  if (!user) {
    return NextResponse.json({ error: "Sign in required." }, { status: 401 });
  }

  const { answerId } = await context.params;
  const answer = await toggleAnswerUpvote(answerId, user.id);

  if (!answer) {
    return NextResponse.json({ error: "Answer not found." }, { status: 404 });
  }

  return NextResponse.json({ answer });
}
