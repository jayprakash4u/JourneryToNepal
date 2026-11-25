"use client";

import Link from "next/link";
import { LogOut, UserCircle } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import NavDropdown from "./NavDropdown";
import { PROFILE_LINKS } from "@/lib/navigation";

export default function ProfileDropdown() {
  const { user, signOut } = useAuth();

  if (!user) {
    return (
      <Link
        href="/sign-in"
        className="rounded-md border border-border px-4 py-2 text-sm font-medium text-primary transition-colors hover:border-primary/30 hover:bg-primary/5"
      >
        Sign In
      </Link>
    );
  }

  return (
    <NavDropdown label={user.name.split(" ")[0]} align="right" panelWidth="sm">
      <div>
        <div className="mb-1 flex items-center gap-2 border-b border-border-light px-3 py-2">
          <UserCircle className="h-5 w-5 text-primary-light" aria-hidden />
          <span className="text-sm font-medium text-text-primary">{user.name}</span>
        </div>
        <ul className="space-y-0.5" role="none">
          {PROFILE_LINKS.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.href} role="none">
                <Link href={item.href} className="dropdown-link" role="menuitem">
                  {Icon && (
                    <Icon className="h-4 w-4 shrink-0 text-primary-light" aria-hidden />
                  )}
                  <span>{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
        {user.isAdmin && (
          <div className="border-t border-border-light px-3 py-2">
            <Link
              href="/admin/submissions"
              className="text-sm font-medium text-primary hover:text-primary-light"
            >
              Review submissions
            </Link>
          </div>
        )}
        <div className="mt-1 border-t border-border-light pt-1">
          <button
            type="button"
            className="dropdown-link w-full"
            role="menuitem"
            onClick={() => void signOut()}
          >
            <LogOut className="h-4 w-4 shrink-0 text-primary-light" aria-hidden />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </NavDropdown>
  );
}
