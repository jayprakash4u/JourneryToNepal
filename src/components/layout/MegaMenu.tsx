"use client";

import Link from "next/link";
import NavDropdown, { NavLinkList } from "./NavDropdown";
import type { MegaMenuConfig } from "@/types/navigation";

interface MegaMenuProps {
  config: MegaMenuConfig;
}

export default function MegaMenu({ config }: MegaMenuProps) {
  const HighlightIcon = config.highlight.icon;

  return (
    <NavDropdown
      label={config.label}
      align="center"
      panelClassName="w-[min(100vw-2rem,56rem)] p-0"
    >
      <div className="grid grid-cols-1 gap-0 md:grid-cols-3">
        <div className="border-b border-border-light p-5 md:border-b-0 md:border-r">
          <p className="section-label mb-3">By Category</p>
          <NavLinkList items={config.categories} />
        </div>

        <div className="border-b border-border-light p-5 md:border-b-0 md:border-r">
          <p className="section-label mb-3">{config.sidebar.title}</p>
          <p className="mb-3 text-sm text-text-secondary">
            {config.sidebar.description}
          </p>
          <Link
            href={config.sidebar.href}
            className="text-sm font-medium text-accent transition-colors hover:text-accent/80"
            role="menuitem"
          >
            {config.sidebar.linkLabel} →
          </Link>
        </div>

        <div className="flex flex-col items-center justify-center bg-primary/5 p-6 text-center">
          <HighlightIcon
            className="mb-3 h-10 w-10 text-primary-light"
            aria-hidden
          />
          <h4 className="mb-1 text-sm font-semibold text-primary">
            {config.highlight.title}
          </h4>
          <p className="mb-3 text-xs text-text-secondary">
            {config.highlight.description}
          </p>
          <Link
            href={config.highlight.href}
            className="text-sm font-medium text-accent transition-colors hover:text-accent/80"
            role="menuitem"
          >
            {config.highlight.linkLabel} →
          </Link>
        </div>
      </div>
    </NavDropdown>
  );
}
