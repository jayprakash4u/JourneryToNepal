import { MapPin } from "lucide-react";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button";
import { RECOMMEND_COPY, RECOMMEND_PLACE_PATH } from "@/lib/recommend";

export default function RecommendAPlaceSection() {
  return (
    <Section aria-labelledby="recommend-place-heading">
      <Container>
        <div className="relative overflow-hidden rounded-md border border-border bg-surface px-6 py-10 text-center shadow-sm md:px-12 md:py-14">
          <div
            className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent via-secondary to-primary"
            aria-hidden
          />

          <span className="mx-auto mb-4 inline-flex h-11 w-11 items-center justify-center rounded-md bg-accent/10 text-accent">
            <MapPin className="h-5 w-5" aria-hidden />
          </span>

          <p className="text-sm font-medium tracking-wide text-accent">Share your discovery</p>
          <h2
            id="recommend-place-heading"
            className="mt-2 text-2xl font-bold tracking-tight text-primary md:text-3xl"
          >
            {RECOMMEND_COPY.homepageHeading}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-text-secondary md:text-lg">
            {RECOMMEND_COPY.homepageSubtext}
          </p>
          <div className="mt-8">
            <Button size="lg" href={RECOMMEND_PLACE_PATH}>
              {RECOMMEND_COPY.homepageCta}
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
