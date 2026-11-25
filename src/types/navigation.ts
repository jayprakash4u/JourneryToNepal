import type { LucideIcon } from "lucide-react";

export interface NavLinkItem {
  name: string;
  href: string;
  icon?: LucideIcon;
  description?: string;
}

export interface NavSection {
  title?: string;
  items: NavLinkItem[];
}

export interface MegaMenuHighlight {
  title: string;
  description: string;
  href: string;
  linkLabel: string;
  icon: LucideIcon;
}

export interface MegaMenuConfig {
  type: "mega";
  label: string;
  categories: NavLinkItem[];
  highlight: MegaMenuHighlight;
  sidebar: {
    title: string;
    description: string;
    href: string;
    linkLabel: string;
  };
}

export interface DropdownNavConfig {
  type: "dropdown";
  label: string;
  sections?: NavSection[];
  items?: NavLinkItem[];
  panelWidth?: "sm" | "md" | "lg";
  align?: "left" | "right";
}

export type NavConfig = MegaMenuConfig | DropdownNavConfig;
