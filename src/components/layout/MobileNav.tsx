"use client";

import Link from "next/link";
import { ChevronDown, LogOut, Menu, PlusCircle, ShieldCheck, UserCircle, X } from "lucide-react";
import { useCallback, useEffect, useId, useState, type ReactNode } from "react";
import { classNames } from "@/utils";
import { MAIN_NAV, PROFILE_LINKS } from "@/lib/navigation";
import { RECOMMEND_COPY, RECOMMEND_PLACE_PATH } from "@/lib/recommend";
import { useAuth } from "@/context/AuthContext";
import type { DropdownNavConfig, MegaMenuConfig, NavLinkItem } from "@/types/navigation";

interface MobileNavProps {
  isLoggedIn?: boolean;
}

function MobileLinkList({
  items,
  onNavigate,
}: {
  items: NavLinkItem[];
  onNavigate: () => void;
}) {
  return (
    <ul className="space-y-1">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              className="flex min-h-[44px] items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-text-primary transition-colors hover:bg-primary/5 active:bg-primary/10"
              onClick={onNavigate}
            >
              {Icon && (
                <Icon className="h-4 w-4 shrink-0 text-primary-light" aria-hidden />
              )}
              <span>{item.name}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

function MobileAccordion({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();

  return (
    <div className="border-b border-border-light">
      <button
        type="button"
        className="flex min-h-[48px] w-full items-center justify-between py-3 text-left text-sm font-semibold text-text-primary"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span>{label}</span>
        <ChevronDown
          className={classNames(
            "h-4 w-4 text-text-muted transition-transform duration-200",
            isOpen && "rotate-180"
          )}
          aria-hidden
        />
      </button>
      {isOpen && (
        <div id={panelId} className="pb-3 pt-1">
          {children}
        </div>
      )}
    </div>
  );
}

function renderMobileNavContent(
  item: MegaMenuConfig | DropdownNavConfig,
  onNavigate: () => void
) {
  if (item.type === "mega") {
    return (
      <div className="space-y-4">
        <div>
          <p className="section-label mb-2 px-3">By Category</p>
          <MobileLinkList items={item.categories} onNavigate={onNavigate} />
        </div>
        <div className="rounded-lg bg-surface px-3 py-2 border border-border-light">
          <p className="section-label mb-1">{item.sidebar.title}</p>
          <Link
            href={item.sidebar.href}
            className="inline-flex min-h-[44px] items-center text-sm font-semibold text-accent hover:underline"
            onClick={onNavigate}
          >
            {item.sidebar.linkLabel} →
          </Link>
        </div>
        <div className="rounded-lg bg-surface px-3 py-2 border border-border-light">
          <Link
            href={item.highlight.href}
            className="inline-flex min-h-[44px] items-center text-sm font-semibold text-accent hover:underline"
            onClick={onNavigate}
          >
            {item.highlight.linkLabel} →
          </Link>
        </div>
      </div>
    );
  }

  if (item.sections) {
    return (
      <div className="space-y-3">
        {item.sections.map((section) => (
          <div key={section.title ?? section.items[0]?.href}>
            {section.title && (
              <p className="section-label mb-2 px-3">{section.title}</p>
            )}
            <MobileLinkList items={section.items} onNavigate={onNavigate} />
          </div>
        ))}
      </div>
    );
  }

  if (item.items) {
    return <MobileLinkList items={item.items} onNavigate={onNavigate} />;
  }

  return null;
}

export default function MobileNav({ isLoggedIn: _propLoggedIn }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();
  const { user, signOut } = useAuth();
  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, close]);

  const handleSignOut = async () => {
    await signOut();
    close();
  };

  return (
    <>
      <button
        type="button"
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-text-primary transition-colors hover:bg-primary/5 active:bg-primary/10 lg:hidden"
        aria-expanded={isOpen}
        aria-controls={panelId}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        onClick={() => setIsOpen((current) => !current)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
            aria-hidden="true"
            onClick={close}
          />

          {/* Drawer */}
          <div
            id={panelId}
            className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col bg-surface shadow-2xl transition-transform"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="flex h-16 items-center justify-between border-b border-border px-5">
              <span className="text-base font-bold text-primary">Menu</span>
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-text-secondary hover:bg-primary/5"
                aria-label="Close menu"
                onClick={close}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-4 pb-12">
              {/* Prominent Action Button for Mobile */}
              <div className="mb-4">
                <Link
                  href={RECOMMEND_PLACE_PATH}
                  onClick={close}
                  className="flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-accent/90"
                >
                  <PlusCircle className="h-4 w-4" />
                  {RECOMMEND_COPY.navLabel}
                </Link>
              </div>

              {/* Navigation items */}
              <div className="space-y-1">
                {MAIN_NAV.map((item) => (
                  <MobileAccordion key={item.label} label={item.label}>
                    {renderMobileNavContent(item, close)}
                  </MobileAccordion>
                ))}
              </div>

              {/* Account Section */}
              <div className="mt-6 border-t border-border pt-5">
                {user ? (
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 rounded-lg bg-primary/5 p-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                        {user.name.charAt(0).toUpperCase()}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-semibold text-primary">{user.name}</p>
                        <p className="truncate text-xs text-text-secondary">{user.email}</p>
                      </div>
                      {user.isAdmin && (
                        <span className="inline-flex items-center gap-1 rounded bg-secondary/15 px-2 py-0.5 text-[10px] font-semibold text-secondary">
                          <ShieldCheck className="h-3 w-3" />
                          Admin
                        </span>
                      )}
                    </div>

                    <div className="pt-1">
                      <MobileLinkList items={PROFILE_LINKS} onNavigate={close} />
                    </div>

                    {user.isAdmin && (
                      <div className="border-t border-border-light pt-2">
                        <p className="section-label mb-2 px-3">Administration</p>
                        <Link
                          href="/admin/submissions"
                          className="flex min-h-[44px] items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-primary hover:bg-primary/5"
                          onClick={close}
                        >
                          Review Submissions
                        </Link>
                        <Link
                          href="/admin/questions"
                          className="flex min-h-[44px] items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-primary hover:bg-primary/5"
                          onClick={close}
                        >
                          Review Questions
                        </Link>
                      </div>
                    )}

                    <div className="border-t border-border-light pt-2">
                      <button
                        type="button"
                        onClick={handleSignOut}
                        className="flex min-h-[44px] w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-red-600 transition-colors hover:bg-red-50 active:bg-red-100"
                      >
                        <LogOut className="h-4 w-4 shrink-0 text-red-500" aria-hidden />
                        Logout
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <p className="text-xs text-text-muted">Sign in to save favorite places and join the community</p>
                    <Link
                      href="/sign-in"
                      className="flex min-h-[44px] w-full items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-light"
                      onClick={close}
                    >
                      Sign In
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
