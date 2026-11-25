"use client";

import Link from "next/link";
import { ChevronDown, LogOut, Menu, X } from "lucide-react";
import { useCallback, useEffect, useId, useState, type ReactNode } from "react";
import { classNames } from "@/utils";
import { MAIN_NAV, PROFILE_LINKS } from "@/lib/navigation";
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
    <ul className="space-y-0.5">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-text-primary transition-colors hover:bg-primary/5"
              onClick={onNavigate}
            >
              {Icon && (
                <Icon className="h-4 w-4 shrink-0 text-primary-light" aria-hidden />
              )}
              {item.name}
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
        className="flex w-full items-center justify-between py-3.5 text-left text-sm font-medium text-text-primary"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => setIsOpen((current) => !current)}
      >
        {label}
        <ChevronDown
          className={classNames(
            "h-4 w-4 text-text-muted transition-transform duration-200",
            isOpen && "rotate-180"
          )}
          aria-hidden
        />
      </button>
      {isOpen && (
        <div id={panelId} className="pb-3">
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
        <div className="px-3">
          <p className="section-label mb-2">{item.sidebar.title}</p>
          <Link
            href={item.sidebar.href}
            className="text-sm font-medium text-accent"
            onClick={onNavigate}
          >
            {item.sidebar.linkLabel} →
          </Link>
        </div>
        <div className="px-3">
          <Link
            href={item.highlight.href}
            className="text-sm font-medium text-accent"
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

export default function MobileNav({ isLoggedIn = false }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();

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

  return (
    <>
      <button
        type="button"
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-text-primary transition-colors hover:bg-primary/5 lg:hidden"
        aria-expanded={isOpen}
        aria-controls={panelId}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        onClick={() => setIsOpen((current) => !current)}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {isOpen && (
        <>
          <button
            type="button"
            className="fixed inset-0 z-40 bg-text-primary/20 backdrop-blur-sm lg:hidden"
            aria-label="Close menu overlay"
            onClick={close}
          />

          <div
            id={panelId}
            className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col bg-surface shadow-dropdown lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <span className="text-sm font-semibold text-primary">Menu</span>
              <button
                type="button"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg hover:bg-primary/5"
                aria-label="Close menu"
                onClick={close}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-2">
              {MAIN_NAV.map((item) => (
                <MobileAccordion key={item.label} label={item.label}>
                  {renderMobileNavContent(item, close)}
                </MobileAccordion>
              ))}

              <div className="mt-4 border-t border-border-light pt-4">
                {isLoggedIn ? (
                  <>
                    <p className="section-label mb-2 px-3">Account</p>
                    <MobileLinkList items={PROFILE_LINKS} onNavigate={close} />
                    <button
                      type="button"
                      className="mt-1 flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-text-primary transition-colors hover:bg-primary/5"
                    >
                      <LogOut className="h-4 w-4 text-primary-light" aria-hidden />
                      Logout
                    </button>
                  </>
                ) : (
                  <Link
                    href="/sign-in"
                    className="flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-light"
                    onClick={close}
                  >
                    Sign In
                  </Link>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
