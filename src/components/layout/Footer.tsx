import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Logo from "@/components/brand/Logo";
import Container from "./Container";
import {
  FOOTER_COLUMNS,
  FOOTER_COPY,
  FOOTER_LEGAL_LINKS,
  FOOTER_SOCIAL_LINKS,
} from "@/lib/footer";
import { SITE } from "@/lib/navigation";
import { BRAND } from "@/lib/brand";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const socialIcons = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  youtube: YoutubeIcon,
  x: XIcon,
} as const;

function FooterLinkColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-wider text-white/50">
        {title}
      </h3>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-white/75 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-primary-light/20 bg-primary text-white">
      <div className="h-1 bg-gradient-to-r from-accent via-secondary to-primary-light" aria-hidden />

      <Container className="py-12 sm:py-14 lg:py-16">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="col-span-2 sm:col-span-2 lg:col-span-4">
            <Link
              href="/"
              className="inline-flex rounded-md bg-white px-4 py-3 transition-opacity hover:opacity-90"
              aria-label="Journey to Nepal home"
            >
              <Logo variant="footer" linked={false} />
            </Link>

            <p className="mt-5 max-w-sm text-sm font-medium text-accent">
              {BRAND.tagline}
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/70">
              {FOOTER_COPY.brandDescription}
            </p>

            <div className="mt-6 flex items-center gap-2">
              {FOOTER_SOCIAL_LINKS.map((social) => {
                const Icon = socialIcons[social.icon];

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/15 bg-white/5 text-white/80 transition-colors hover:border-white/30 hover:bg-white/10 hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title} className="col-span-1 lg:col-span-2">
              <FooterLinkColumn title={column.title} links={column.links} />
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-md border border-white/10 bg-white/5 p-6 md:flex md:items-center md:justify-between md:gap-6 md:p-8">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-accent">
              Community
            </p>
            <h2 className="mt-2 text-lg font-bold text-white md:text-xl">
              {FOOTER_COPY.ctaHeading}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-white/75">
              {FOOTER_COPY.ctaSubtext}
            </p>
          </div>
          <Link
            href={FOOTER_COPY.ctaHref}
            className="mt-5 inline-flex shrink-0 items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent/90 md:mt-0"
          >
            {FOOTER_COPY.ctaLabel}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-4 py-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>

          <nav aria-label="Legal">
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {FOOTER_LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-white/50 transition-colors hover:text-white/80"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      </div>
    </footer>
  );
}
