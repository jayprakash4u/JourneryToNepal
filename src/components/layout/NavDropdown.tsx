"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { classNames } from "@/utils";
import type { NavLinkItem, NavSection } from "@/types/navigation";

const PANEL_WIDTHS = {
  sm: "w-56",
  md: "w-64",
  lg: "w-72",
} as const;

function useSupportsHover() {
  const [supportsHover, setSupportsHover] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(hover: hover)");
    const update = () => setSupportsHover(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return supportsHover;
}

function NavLinkList({ items }: { items: NavLinkItem[] }) {
  return (
    <ul className="space-y-0.5" role="none">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <li key={item.href} role="none">
            <Link href={item.href} className="dropdown-link" role="menuitem">
              {Icon && <Icon className="h-4 w-4 shrink-0 text-primary-light" aria-hidden />}
              <span>{item.name}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

function NavSectionList({ sections }: { sections: NavSection[] }) {
  return (
    <div className="space-y-3">
      {sections.map((section) => (
        <div key={section.title ?? section.items[0]?.href}>
          {section.title && (
            <p className="section-label mb-2 px-3">{section.title}</p>
          )}
          <NavLinkList items={section.items} />
        </div>
      ))}
    </div>
  );
}

interface NavDropdownProps {
  label: string;
  items?: NavLinkItem[];
  sections?: NavSection[];
  panelWidth?: keyof typeof PANEL_WIDTHS;
  align?: "left" | "right" | "center";
  children?: ReactNode;
  panelClassName?: string;
}

export default function NavDropdown({
  label,
  items,
  sections,
  panelWidth = "sm",
  align = "left",
  children,
  panelClassName,
}: NavDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const supportsHover = useSupportsHover();
  const menuId = useId();
  const containerRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => setIsOpen(false), []);
  const open = useCallback(() => setIsOpen(true), []);

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        close();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, close]);

  const handleMouseEnter = () => {
    if (supportsHover) open();
  };

  const handleMouseLeave = () => {
    if (supportsHover) close();
  };

  const handleToggle = () => {
    if (!supportsHover) {
      setIsOpen((current) => !current);
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        type="button"
        className={classNames(
          "nav-link inline-flex items-center gap-1.5 rounded-md px-2 py-1.5",
          isOpen && "text-primary"
        )}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        aria-controls={menuId}
        onClick={handleToggle}
      >
        {label}
        <ChevronDown
          className={classNames(
            "h-3.5 w-3.5 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
          aria-hidden
        />
      </button>

      {isOpen && (
        <div
          className={classNames(
            "absolute top-full z-50 pt-2",
            align === "right" && "right-0",
            align === "center" && "left-1/2 -translate-x-1/2",
            align === "left" && "left-0"
          )}
        >
          <div
            id={menuId}
            role="menu"
            aria-label={label}
            className={classNames(
              "rounded-xl border border-border bg-surface p-2 shadow-dropdown",
              !children && PANEL_WIDTHS[panelWidth],
              panelClassName
            )}
          >
            {children ?? (
              <>
                {sections && <NavSectionList sections={sections} />}
                {items && <NavLinkList items={items} />}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export { NavLinkList, NavSectionList };
