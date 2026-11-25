import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { BLOG_ARTICLES } from "@/lib/blog";
import HomeSectionHeader from "./HomeSectionHeader";

export default function BlogPreview() {
  const articles = BLOG_ARTICLES;

  return (
    <Section aria-labelledby="blog-preview-heading">
      <Container>
        <HomeSectionHeader
          id="blog-preview-heading"
          eyebrow="Travel insights"
          title="From the Blog"
          subtitle="Guides and tips to help you plan a smarter, richer journey through Nepal."
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={article.href}
              className="group flex h-full flex-col overflow-hidden rounded-md border border-border bg-surface shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg"
            >
              <div className="h-1.5 bg-gradient-to-r from-primary via-primary-light to-secondary" aria-hidden />
              <div className="flex flex-1 flex-col p-5 md:p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                  Guide
                </p>
                <h3 className="mt-2 text-lg font-bold text-primary transition-colors group-hover:text-primary-light">
                  {article.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-text-secondary">
                  {article.excerpt}
                </p>
                <div className="mt-5 flex items-center justify-between gap-3 border-t border-border-light pt-4">
                  <span className="inline-flex items-center gap-1.5 text-xs text-text-muted">
                    <Clock className="h-3.5 w-3.5" aria-hidden />
                    {article.readTime}
                  </span>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:text-accent">
                    Read
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
