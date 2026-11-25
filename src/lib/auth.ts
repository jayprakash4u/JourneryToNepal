import type { User } from "@/types/submission";

export const SESSION_COOKIE = "jtn_session";

export const DEMO_USERS: User[] = [
  {
    id: "user-demo-1",
    name: "Jay Prakash",
    email: "jay@example.com",
    profileImage: undefined,
  },
  {
    id: "admin-demo",
    name: "Admin",
    email: "admin@journeytonepal.com",
    profileImage: undefined,
    isAdmin: true,
  },
];

export function encodeSession(user: User) {
  return Buffer.from(JSON.stringify(user)).toString("base64url");
}

export function decodeSession(value: string): User | null {
  try {
    const json = Buffer.from(value, "base64url").toString("utf-8");
    return JSON.parse(json) as User;
  } catch {
    return null;
  }
}

export function findUserByEmail(email: string) {
  return DEMO_USERS.find(
    (user) => user.email.toLowerCase() === email.toLowerCase()
  );
}
