import Link from "next/link";
import { ButtonHTMLAttributes } from "react";
import { classNames } from "@/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "hero" | "heroOutline";
  size?: "default" | "lg";
  href?: string;
}

const baseStyles = "inline-flex items-center justify-center font-medium rounded-md transition-colors";
const variants = {
  primary: "bg-accent text-white hover:bg-accent/90",
  secondary: "bg-primary text-white hover:bg-primary-light",
  outline: "border-2 border-primary text-primary hover:bg-primary/5",
  hero: "bg-white text-primary hover:bg-white/90",
  heroOutline:
    "border-2 border-white bg-white/10 text-white backdrop-blur-sm hover:border-white hover:bg-white/20",
};
const sizes = {
  default: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export default function Button({
  variant = "primary",
  size = "default",
  className,
  children,
  href,
  ...props
}: ButtonProps) {
  const styles = classNames(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={styles} {...props}>
      {children}
    </button>
  );
}
