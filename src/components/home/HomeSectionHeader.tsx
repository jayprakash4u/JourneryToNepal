import type { ReactNode } from "react";
import { classNames } from "@/utils";

interface HomeSectionHeaderProps {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  action?: ReactNode;
  className?: string;
}

export default function HomeSectionHeader({
  id,
  eyebrow,
  title,
  subtitle,
  align = "left",
  action,
  className,
}: HomeSectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div
      className={classNames(
        "mb-8 md:mb-10",
        isCenter && "text-center",
        action && !isCenter
          ? "flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
          : undefined,
        className
      )}
    >
      <div className={classNames(isCenter && "mx-auto max-w-2xl")}>
        {eyebrow && (
          <p className="mb-2 text-sm font-medium tracking-wide text-accent">{eyebrow}</p>
        )}
        <h2
          id={id}
          className="text-2xl font-bold tracking-tight text-primary md:text-3xl lg:text-4xl"
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className={classNames(
              "mt-3 text-base leading-relaxed text-text-secondary md:text-lg",
              isCenter ? "mx-auto max-w-xl" : "max-w-2xl"
            )}
          >
            {subtitle}
          </p>
        )}
      </div>
      {action && <div className={classNames(isCenter && "mt-6")}>{action}</div>}
    </div>
  );
}
