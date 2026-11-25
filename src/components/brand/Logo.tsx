import Image from "next/image";
import Link from "next/link";
import { BRAND } from "@/lib/brand";
import { classNames } from "@/utils";

interface LogoProps {
  variant?: "header" | "footer";
  linked?: boolean;
  className?: string;
  priority?: boolean;
}

export default function Logo({
  variant = "header",
  linked = true,
  className,
  priority,
}: LogoProps) {
  const image =
    variant === "header" ? (
      <span
        className={classNames(
          "block h-10 w-[8.25rem] shrink-0 overflow-hidden sm:h-11 sm:w-36",
          className
        )}
      >
        <Image
          src={BRAND.logo.src}
          alt={BRAND.logo.alt}
          width={BRAND.logo.width}
          height={BRAND.logo.height}
          priority={priority}
          className="h-12 w-auto max-w-none object-left object-top sm:h-[3.25rem]"
        />
      </span>
    ) : (
      <Image
        src={BRAND.logo.src}
        alt={BRAND.logo.alt}
        width={BRAND.logo.width}
        height={BRAND.logo.height}
        className={classNames("h-auto w-48 sm:w-56", className)}
      />
    );

  if (!linked) {
    return <span className="inline-flex shrink-0 items-center">{image}</span>;
  }

  return (
    <Link
      href="/"
      className="inline-flex shrink-0 items-center transition-opacity hover:opacity-90"
      aria-label={BRAND.logo.ariaLabel}
    >
      {image}
    </Link>
  );
}
