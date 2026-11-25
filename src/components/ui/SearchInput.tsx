"use client";

import { Search, X } from "lucide-react";
import { classNames } from "@/utils";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  id?: string;
  "aria-label"?: string;
  variant?: "default" | "hero";
  className?: string;
  showClear?: boolean;
}

const variantStyles = {
  default: {
    icon: "left-3 h-4 w-4 text-text-muted",
    input:
      "h-10 w-full rounded-md border border-border bg-background pl-9 text-sm text-text-primary outline-none transition-colors placeholder:text-text-muted focus:border-primary/40 focus:ring-2 focus:ring-primary/10",
    inputWithClear: "pr-9",
    clear: "right-2.5 rounded-md p-0.5 text-text-muted transition-colors hover:bg-primary/5 hover:text-primary",
    clearIcon: "h-3.5 w-3.5",
  },
  hero: {
    icon: "left-4 h-5 w-5 text-text-muted",
    input:
      "w-full rounded-md border border-white/30 bg-white py-3.5 pl-12 text-base text-text-primary shadow-lg outline-none ring-2 ring-transparent transition-all placeholder:text-text-muted focus:border-accent/50 focus:ring-accent/25",
    inputWithClear: "pr-12",
    clear: "right-3 rounded-md p-1 text-text-muted transition-colors hover:bg-primary/5 hover:text-text-primary",
    clearIcon: "h-4 w-4",
  },
};

export default function SearchInput({
  value,
  onChange,
  placeholder,
  id,
  "aria-label": ariaLabel,
  variant = "default",
  className,
  showClear = true,
}: SearchInputProps) {
  const styles = variantStyles[variant];
  const canClear = showClear && value.length > 0;

  return (
    <div className={classNames("relative", className)}>
      <Search
        className={classNames(
          "pointer-events-none absolute top-1/2 -translate-y-1/2",
          styles.icon
        )}
        aria-hidden
      />
      <input
        id={id}
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        aria-label={ariaLabel ?? placeholder}
        className={classNames(styles.input, canClear && styles.inputWithClear)}
      />
      {canClear && (
        <button
          type="button"
          onClick={() => onChange("")}
          className={classNames("absolute top-1/2 -translate-y-1/2", styles.clear)}
          aria-label="Clear search"
        >
          <X className={styles.clearIcon} aria-hidden />
        </button>
      )}
    </div>
  );
}
