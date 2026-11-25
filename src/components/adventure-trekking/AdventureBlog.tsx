import Link from "next/link";
import { Clock } from "lucide-react";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { ADVENTURE_ARTICLES } from "@/lib/adventure-trekking";

export default function AdventureBlog() {
  return (
    <Section variant="surface" aria-labelledby="adventure-blog-heading">
      <Container>
        <h2
          id="adventure-blog-heading"
          className="mb-8 text-2xl font-bold tracking-tight text-primary md:text-3xl"
        >
          Latest Articles
        </h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {ADVENTURE_ARTICLES.map((article) => (
            <Link
              key={article.slug}
              href={article.href}
              className="group flex flex-col rounded-md border border-border bg-background p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
            >
              <div
                className="mb-4 aspect-[16/9] rounded-md bg-gradient-to-br from-primary via-primary-light/60 to-secondary/70"
                aria-hidden
              />
              <h3 className="mb-2 text-lg font-semibold text-primary transition-colors group-hover:text-primary-light">
                {article.title}
              </h3>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-text-secondary">
                {article.excerpt}
              </p>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-text-muted">
                <Clock className="h-3.5 w-3.5" aria-hidden />
                {article.readTime}
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
