import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ViewAllLinkProps {
  href: string;
  children: ReactNode;
}

export default function ViewAllLink({ href, children }: ViewAllLinkProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-accent"
    >
      {children}
      <ArrowRight className="h-4 w-4" aria-hidden />
    </Link>
  );
}
