"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import type { UseCase } from "@/lib/content/savet";
import { FadeIn } from "@/components/motion/FadeIn";
import { cn } from "@/lib/utils";

export function UseCasesAccordion({ items }: { items: UseCase[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <FadeIn key={item.title} delay={index * 0.03}>
            <div className="overflow-hidden rounded-2xl border border-border bg-surface">
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <div>
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted">{item.excerpt}</p>
                </div>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 shrink-0 text-muted transition-transform",
                    isOpen && "rotate-180",
                  )}
                />
              </button>
              {isOpen ? (
                <div className="border-t border-border px-5 py-4 text-sm leading-relaxed text-muted">
                  {item.body}
                </div>
              ) : null}
            </div>
          </FadeIn>
        );
      })}
    </div>
  );
}

export function SaveTSteps({
  steps,
  intro,
}: {
  steps: Array<{
    number: string;
    title: string;
    description: string;
    image: string;
    alt: string;
  }>;
  intro: string;
}) {
  return (
    <div>
      <p className="mx-auto mb-10 max-w-2xl text-center text-muted">{intro}</p>
      <div className="space-y-12 lg:space-y-16">
        {steps.map((step, index) => {
          const imageRight = index % 2 === 1;

          const image = (
            <div
              className={cn(
                "mx-auto w-full max-w-[240px] overflow-hidden rounded-2xl border border-border bg-surface shadow-sm sm:max-w-[280px] lg:mx-0 lg:max-w-[320px]",
              )}
            >
              <Image
                src={step.image}
                alt={step.alt}
                width={390}
                height={844}
                className="h-auto w-full object-contain"
                loading="lazy"
              />
            </div>
          );

          const text = (
            <div className="text-left">
              <p className="text-sm font-semibold text-accent">{step.number}</p>
              <h3 className="mt-2 text-2xl font-bold">{step.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">
                {step.description}
              </p>
            </div>
          );

          return (
            <FadeIn key={step.number} delay={index * 0.05}>
              <div
                className={cn(
                  "grid items-center gap-8 lg:gap-x-10",
                  imageRight ? "lg:grid-cols-[1fr_auto]" : "lg:grid-cols-[auto_1fr]",
                )}
              >
                {imageRight ? (
                  <>
                    {text}
                    {image}
                  </>
                ) : (
                  <>
                    {image}
                    {text}
                  </>
                )}
              </div>
            </FadeIn>
          );
        })}
      </div>
    </div>
  );
}
