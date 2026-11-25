"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { ADVENTURE_FAQ } from "@/lib/adventure-trekking";
import { classNames } from "@/utils";

export default function AdventureFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section aria-labelledby="adventure-faq-heading">
      <Container narrow>
        <h2
          id="adventure-faq-heading"
          className="mb-8 text-center text-2xl font-bold tracking-tight text-primary md:text-3xl"
        >
          Frequently Asked Questions
        </h2>

        <div className="divide-y divide-border rounded-md border border-border bg-surface shadow-sm">
          {ADVENTURE_FAQ.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={item.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-primary/5"
                >
                  <span className="font-semibold text-text-primary">{item.question}</span>
                  <ChevronDown
                    className={classNames(
                      "h-5 w-5 shrink-0 text-text-muted transition-transform",
                      isOpen && "rotate-180"
                    )}
                    aria-hidden
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-4 text-sm leading-relaxed text-text-secondary">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
