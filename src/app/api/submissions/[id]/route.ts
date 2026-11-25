import { NextResponse } from "next/server";
import { getSessionUser } from "@/lib/session";
import { getSubmissionById, updateSubmissionStatus } from "@/lib/submissions-store";
import type { SubmissionStatus } from "@/types/submission";

interface RouteContext {
  params: Promise<{ id: string }>;
}

export async function GET(_request: Request, context: RouteContext) {
  const { id } = await context.params;
  const submission = await getSubmissionById(id);

  if (!submission) {
    return NextResponse.json({ error: "Not found." }, { status: 404 });
  }

  if (submission.status !== "approved") {
    const user = await getSessionUser();
    if (!user?.isAdmin && user?.id !== submission.userId) {
      return NextResponse.json({ error: "Not found." }, { status: 404 });
    }
  }

  return NextResponse.json({ submission });
}

export async function PATCH(request: Request, context: RouteContext) {
  const user = await getSessionUser();
  if (!user?.isAdmin) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const { id } = await context.params;
  const body = (await request.json()) as { status?: SubmissionStatus };
  const status = body.status;

  if (!status || !["approved", "rejected"].includes(status)) {
    return NextResponse.json({ error: "Invalid status." }, { status: 400 });
  }

  const updated = await updateSubmissionStatus(id, status);
  if (!updated) {
    return NextResponse.json({ error: "Not found." }, { status: 404 });
  }

  return NextResponse.json({ submission: updated });
}
