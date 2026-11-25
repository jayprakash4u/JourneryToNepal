import { ReactNode } from "react";
import { classNames } from "@/utils";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "main";
  narrow?: boolean;
}

/**
 * Centered content column — max ~1280px with side padding.
 * Use inside full-width <Section> or <header>/<footer> shells.
 */
export default function Container({
  children,
  className,
  as: Component = "div",
  narrow = false,
}: ContainerProps) {
  return (
    <Component
      className={classNames(
        "mx-auto w-full px-4 sm:px-6",
        narrow ? "max-w-3xl" : "max-w-content",
        className
      )}
    >
      {children}
    </Component>
  );
}
