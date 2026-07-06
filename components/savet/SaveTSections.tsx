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
      <p className="mx-auto mb-30 max-w-2xl text-center text-muted">{intro}</p>

      {/* Mobile: each step stacked */}
      <div className="space-y-10 lg:hidden">
        {steps.map((step, index) => (
          <FadeIn key={step.number} delay={index * 0.05}>
            <div className="space-y-5">
              <StepScreenshot step={step} />
              <StepCopy step={step} />
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Desktop: compact 3×2 zigzag grid */}
      <FadeIn>
        <div className="mx-auto hidden max-w-3xl grid-cols-2 gap-x-0 gap-y-20 lg:grid">
          <div className="justify-self-start">
            <StepScreenshot step={steps[0]} />
          </div>
          <div className="flex max-w-[240px] items-center self-center justify-self-start">
            <StepCopy step={steps[0]} />
          </div>

          <div className="-mt-24 flex max-w-[240px] items-center self-center justify-self-start lg:-mt-32">
            <StepCopy step={steps[1]} />
          </div>
          <div className="-mt-24 justify-self-start lg:-mt-32">
            <StepScreenshot step={steps[1]} />
          </div>

          <div className="-mt-24 justify-self-start lg:-mt-32">
            <StepScreenshot step={steps[2]} />
          </div>
          <div className="-mt-24 flex max-w-[240px] items-center self-center justify-self-start lg:-mt-32">
            <StepCopy step={steps[2]} />
          </div>
        </div>
      </FadeIn>
    </div>
  );
}

function StepScreenshot({
  step,
}: {
  step: {
    image: string;
    alt: string;
  };
}) {
  return (
    <div className="mx-auto w-full max-w-[220px] overflow-hidden rounded-2xl border border-border bg-surface shadow-sm sm:max-w-[240px] lg:mx-0 lg:max-w-[220px]">
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
}

function StepCopy({
  step,
}: {
  step: {
    number: string;
    title: string;
    description: string;
  };
}) {
  return (
    <div className="text-left">
      <p className="text-sm font-semibold text-accent">{step.number}</p>
      <h3 className="mt-2 text-2xl font-bold">{step.title}</h3>
      <p className="mt-3 leading-relaxed text-muted">{step.description}</p>
    </div>
  );
}
