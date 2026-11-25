import { ReactNode } from "react";
import { classNames } from "@/utils";

const variants = {
  default: "bg-background",
  surface: "border-t border-border-light bg-surface",
  muted: "bg-primary/5",
  gradient: "bg-gradient-to-b from-primary/5 via-background to-background",
  primary: "bg-primary text-white",
} as const;

interface SectionProps {
  children: ReactNode;
  className?: string;
  variant?: keyof typeof variants;
  compact?: boolean;
  id?: string;
  "aria-labelledby"?: string;
}

/**
 * Full-width section shell — use for backgrounds, vertical rhythm, and breaks.
 * Pair with <Container> inside for readable, centered content.
 */
export default function Section({
  children,
  className,
  variant = "default",
  compact = false,
  id,
  "aria-labelledby": ariaLabelledby,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledby}
      className={classNames(
        "w-full",
        compact ? "py-14 lg:py-16" : "py-section-y",
        variants[variant],
        className
      )}
    >
      {children}
    </section>
  );
}
