import "server-only";

import { cookies } from "next/headers";
import type { User } from "@/types/submission";
import { SESSION_COOKIE, decodeSession } from "@/lib/auth";

export async function getSessionUser(): Promise<User | null> {
  const cookieStore = await cookies();
  const session = cookieStore.get(SESSION_COOKIE)?.value;
  if (!session) return null;
  return decodeSession(session);
}
