"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Check } from "lucide-react";
import { siteConfig } from "@/lib/config/site";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";
import {
  answerChips,
  computeResult,
  includedItems,
  formatRange,
  optionLabel,
  quizConfig as config,
  summarizeAnswers,
  visibleSteps,
  type Answers,
  type QuizResult,
  type QuizStep,
} from "@/lib/quiz/engine";

const { copy } = config;

const btnBase =
  "inline-flex min-h-[44px] items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";
const btnPrimary = cn(
  btnBase,
  "bg-accent text-accent-foreground shadow-sm hover:bg-accent/90",
);
const btnSecondary = cn(
  btnBase,
  "border border-border bg-surface text-foreground hover:bg-background",
);
const fieldClass =
  "w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent focus-visible:ring-2 focus-visible:ring-accent/30";

type View = "steps" | "result" | "form";

/** Splits a step's options into consecutive groups by their `group` label. */
function optionGroups(step: QuizStep) {
  const groups: { name: string; options: QuizStep["options"] }[] = [];
  for (const option of step.options) {
    const name = option.group ?? "";
    const last = groups[groups.length - 1];
    if (last && last.name === name) last.options.push(option);
    else groups.push({ name, options: [option] });
  }
  return groups;
}

function resultText(result: QuizResult): string {
  if (result.kind === "range") {
    return formatRange(config, result.low, result.high);
  }
  return result.kind === "contact"
    ? "Needs a conversation (larger project)"
    : "Not sure yet";
}

export function PriceQuiz() {
  const [answers, setAnswers] = useState<Answers>({});
  const [index, setIndex] = useState(0);
  const [view, setView] = useState<View>("steps");
  const started = useRef(false);
  const interacted = useRef(false);
  const headingRef = useRef<HTMLHeadingElement>(null);

  const steps = useMemo(() => visibleSteps(config, answers), [answers]);
  const current: QuizStep | undefined = steps[Math.min(index, steps.length - 1)];
  const isLast = index >= steps.length - 1;
  const selected = current ? (answers[current.id] ?? []) : [];
  const result = useMemo(() => computeResult(config, answers), [answers]);
  // The step count depends on the first answer, so only show it once known.
  const totalKnown = (answers.type ?? []).length > 0;
  const stepLabel = totalKnown
    ? `Step ${index + 1} of ${steps.length}`
    : `Step ${index + 1}`;
  const progress = totalKnown ? ((index + 1) / steps.length) * 100 : 10;

  // Move focus to the new heading when the step or view changes, but only
  // after the visitor has used the quiz, so the page never jumps on load.
  useEffect(() => {
    if (!interacted.current) return;
    headingRef.current?.focus();
  }, [index, view]);

  function select(step: QuizStep, optionId: string) {
    interacted.current = true;
    if (!started.current) {
      started.current = true;
      trackEvent("quiz_start");
    }
    setAnswers((prev) => {
      if (step.kind === "single") return { ...prev, [step.id]: [optionId] };
      const exclusiveIds = step.options.filter((o) => o.exclusive).map((o) => o.id);
      const option = step.options.find((o) => o.id === optionId);
      const currentIds = prev[step.id] ?? [];
      let nextIds: string[];
      if (currentIds.includes(optionId)) {
        nextIds = currentIds.filter((id) => id !== optionId);
      } else if (option?.exclusive) {
        nextIds = [optionId];
      } else {
        nextIds = [...currentIds.filter((id) => !exclusiveIds.includes(id)), optionId];
      }
      return { ...prev, [step.id]: nextIds };
    });
  }

  function next() {
    if (!current) return;
    interacted.current = true;
    trackEvent("quiz_step", {
      step: current.id,
      answer: selected.join(","),
      position: index + 1,
    });
    if (isLast) {
      trackEvent("quiz_result", {
        type: answers.type?.[0] ?? "",
        size: answers.size?.[0] ?? "",
        band: result.band,
      });
      setView("result");
    } else {
      setIndex(index + 1);
    }
  }

  function back() {
    interacted.current = true;
    if (view === "form") return setView("result");
    if (view === "result") return setView("steps");
    if (index > 0) setIndex(index - 1);
  }

  function restart() {
    trackEvent("quiz_restart");
    started.current = false;
    setAnswers({});
    setIndex(0);
    setView("steps");
  }

  return (
    <div className="mx-auto w-full max-w-4xl">
      <div className="mb-8 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
          {copy.eyebrow}
        </p>
        <h2 id="estimate-title" className="text-2xl font-bold sm:text-3xl">
          {copy.title}
        </h2>
        <p className="mt-3 text-muted">{copy.lead}</p>
      </div>

      <div
        role="group"
        aria-labelledby="estimate-title"
        className="rounded-3xl border border-border bg-surface p-5 shadow-sm sm:p-8"
      >
        {view === "steps" && current ? (
          <div>
            <div className="mb-6">
              <div className="flex items-center justify-between text-sm text-muted">
                <span>{stepLabel}</span>
              </div>
              <div
                role="progressbar"
                aria-label="Estimate progress"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={Math.round(progress)}
                aria-valuetext={stepLabel}
                className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-border"
              >
                <div
                  className="h-full rounded-full bg-accent transition-[width] duration-300 motion-reduce:transition-none"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <fieldset>
              <legend className="sr-only">{current.title}</legend>
              <h3
                ref={headingRef}
                tabIndex={-1}
                className="text-xl font-bold outline-none"
              >
                {current.title}
              </h3>
              {current.kind === "multi" ? (
                <p className="mt-1 text-sm text-muted">Select all that apply.</p>
              ) : null}
              <StepOptions
                step={current}
                answers={answers}
                selected={selected}
                onSelect={(optionId) => select(current, optionId)}
              />
            </fieldset>

            <div className="mt-8 flex items-center justify-between gap-3">
              {index > 0 ? (
                <button type="button" onClick={back} className={btnSecondary}>
                  {copy.back}
                </button>
              ) : (
                <span />
              )}
              <button
                type="button"
                onClick={next}
                disabled={selected.length === 0}
                className={btnPrimary}
              >
                {isLast ? copy.seeResult : copy.next}
              </button>
            </div>
          </div>
        ) : null}

        {view === "result" ? (
          <ResultView
            result={result}
            chips={answerChips(config, answers)}
            included={includedItems(config, answers)}
            onBrief={() => {
              trackEvent("quiz_cta_brief", { band: result.band });
              setView("form");
            }}
            onBack={back}
            onRestart={restart}
          />
        ) : null}

        {view === "form" ? (
          <EstimateForm
            estimate={resultText(result)}
            summary={summarizeAnswers(config, answers)}
            prefill={`${summarizeAnswers(config, answers, "\n")}\nEstimate: ${resultText(result)}\n\nA bit more about my project:\n`}
            band={result.band}
            onBack={back}
            headingRef={headingRef}
          />
        ) : null}
      </div>
    </div>
  );
}

function ResultView({
  result,
  chips,
  included,
  onBrief,
  onBack,
  onRestart,
}: {
  result: QuizResult;
  chips: string[];
  included: string[];
  onBrief: () => void;
  onBack: () => void;
  onRestart: () => void;
}) {
  const headingRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    headingRef.current?.focus();
  }, []);

  const calLink = siteConfig.calLink;
  const title =
    result.kind === "range"
      ? copy.resultTitle
      : result.kind === "contact"
        ? copy.contactTitle
        : copy.unsureTitle;

  return (
    <div>
      <h3 ref={headingRef} tabIndex={-1} className="text-xl font-bold outline-none">
        {title}
      </h3>

      {result.kind === "range" ? (
        <>
          <p className="mt-3 font-display text-3xl font-bold text-accent sm:text-4xl">
            {formatRange(config, result.low, result.high)}
          </p>
          {result.duration ? (
            <p className="mt-2 text-sm font-medium text-foreground">
              {copy.durationLabel}: {result.duration}
            </p>
          ) : null}
          <p className="mt-3 text-sm text-muted">
            {copy.resultNote}
            {result.duration ? ` ${copy.durationNote}` : ""}
          </p>
        </>
      ) : (
        <p className="mt-3 text-muted">
          {result.kind === "contact" ? copy.contactBody : copy.unsureBody}
        </p>
      )}

      {result.kind !== "unsure" && chips.length > 0 ? (
        <div className="mt-5">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted">
            {copy.basedOn}
          </p>
          <ul className="flex flex-wrap gap-2">
            {chips.map((chip) => (
              <li
                key={chip}
                className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted"
              >
                {chip}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {result.kind === "range" && included.length > 0 ? (
        <div className="mt-6">
          <p className="mb-2 text-sm font-semibold">{copy.includedTitle}</p>
          <ul className="space-y-2 text-sm text-muted">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="mt-6">
        <p className="mb-2 text-sm font-semibold">{copy.assurancesTitle}</p>
        <ul className="space-y-2 text-sm text-muted">
          {copy.assurances.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        {calLink ? (
          <a
            href={calLink}
            target="_blank"
            rel="noopener noreferrer"
            className={btnPrimary}
            onClick={() => trackEvent("quiz_cta_call", { band: result.band })}
          >
            {copy.ctaCall}
          </a>
        ) : null}
        <button
          type="button"
          onClick={onBrief}
          className={calLink ? btnSecondary : btnPrimary}
        >
          {copy.ctaBrief}
        </button>
      </div>

      <div className="mt-6 flex flex-wrap gap-4 text-sm">
        <button type="button" onClick={onBack} className="text-muted underline hover:text-foreground">
          {copy.back}
        </button>
        <button type="button" onClick={onRestart} className="text-muted underline hover:text-foreground">
          {copy.restart}
        </button>
      </div>
    </div>
  );
}

function EstimateForm({
  estimate,
  summary,
  prefill,
  band,
  onBack,
  headingRef,
}: {
  estimate: string;
  summary: string;
  prefill: string;
  band: string;
  onBack: () => void;
  headingRef: React.RefObject<HTMLHeadingElement | null>;
}) {
  const [state, handleSubmit] = useForm(siteConfig.formspreeFormId);

  useEffect(() => {
    if (state.succeeded) trackEvent("quiz_submit", { band });
  }, [state.succeeded, band]);

  if (state.succeeded) {
    return (
      <div className="text-center" role="status">
        <h3 className="text-xl font-bold">{copy.formSuccessTitle}</h3>
        <p className="mt-3 text-muted">
          {copy.formSuccessBody}
          {copy.replyNote ? ` ${copy.replyNote}` : ""}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <h3 ref={headingRef} tabIndex={-1} className="text-xl font-bold outline-none">
          {copy.formTitle}
        </h3>
        <p className="mt-2 text-sm text-muted">
          {copy.formLead}
          {copy.replyNote ? ` ${copy.replyNote}` : ""}
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="quiz-name" className="mb-2 block text-sm font-medium">
            Name
          </label>
          <input id="quiz-name" name="name" type="text" required className={fieldClass} />
        </div>
        <div>
          <label htmlFor="quiz-email" className="mb-2 block text-sm font-medium">
            Email
          </label>
          <input id="quiz-email" name="email" type="email" required className={fieldClass} />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            className="mt-1 text-sm text-red-600"
          />
        </div>
      </div>

      <div>
        <label htmlFor="quiz-message" className="mb-2 block text-sm font-medium">
          Your message
        </label>
        <textarea
          id="quiz-message"
          name="message"
          rows={8}
          defaultValue={prefill}
          className={cn(fieldClass, "resize-y")}
        />
      </div>

      <input type="hidden" name="intent" value="services" />
      <input type="hidden" name="source" value="price-estimator" />
      <input type="hidden" name="estimate" value={estimate} />
      <input type="hidden" name="answers" value={summary} />
      <input type="hidden" name="_subject" value="Project estimate enquiry" />
      <input
        type="text"
        name="_gotcha"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <p className="text-sm text-muted">
        Submitting this form sends your details to MgonnacrushT via Formspree so
        we can reply by email. See the{" "}
        <Link href="/legal/privacy/" className="text-accent underline">
          Privacy Policy
        </Link>{" "}
        for how inquiry data is handled.
      </p>

      <div className="flex flex-wrap items-center gap-3">
        <button type="submit" disabled={state.submitting} className={btnPrimary}>
          {state.submitting ? "Sending..." : "Send brief"}
        </button>
        <button type="button" onClick={onBack} className={btnSecondary}>
          {copy.back}
        </button>
      </div>
    </form>
  );
}

function StepOptions({
  step,
  answers,
  selected,
  onSelect,
}: {
  step: QuizStep;
  answers: Answers;
  selected: string[];
  onSelect: (optionId: string) => void;
}) {
  const groups = optionGroups(step);
  const columns = step.columns && step.columns > 1 ? step.columns : 0;
  const card = (option: QuizStep["options"][number]) => (
    <OptionCard
      key={option.id}
      step={step}
      option={option}
      answers={answers}
      checked={selected.includes(option.id)}
      onSelect={onSelect}
    />
  );

  // Columns layout: the first groups sit side by side, the rest below.
  if (columns) {
    const colClass = columns === 2 ? "md:grid-cols-2" : "md:grid-cols-3";
    const top = groups.slice(0, columns);
    const rest = groups.slice(columns).flatMap((g) => g.options);
    return (
      <div className="mt-5 space-y-4">
        <div className={cn("grid gap-5", colClass)}>
          {top.map((group) => (
            <div key={group.name}>
              {group.name ? (
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted">
                  {group.name}
                </p>
              ) : null}
              <div className="grid gap-3">{group.options.map(card)}</div>
            </div>
          ))}
        </div>
        {rest.length ? (
          <div className={cn("grid gap-3", colClass)}>{rest.map(card)}</div>
        ) : null}
      </div>
    );
  }

  return (
    <>
      {groups.map((group) => (
        <div key={group.name} className="mt-5">
          {group.name ? (
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted">
              {group.name}
            </p>
          ) : null}
          <div className="grid gap-3 sm:grid-cols-2">{group.options.map(card)}</div>
        </div>
      ))}
    </>
  );
}

function OptionCard({
  step,
  option,
  answers,
  checked,
  onSelect,
}: {
  step: QuizStep;
  option: QuizStep["options"][number];
  answers: Answers;
  checked: boolean;
  onSelect: (optionId: string) => void;
}) {
  return (
    <label
      className={cn(
        "flex min-h-[44px] cursor-pointer items-start gap-3 rounded-2xl border p-3.5 transition-colors",
        "has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-accent has-[:focus-visible]:ring-offset-2",
        checked
          ? "border-accent bg-accent/5"
          : "border-border bg-background hover:border-accent/60",
      )}
    >
      <input
        type={step.kind === "single" ? "radio" : "checkbox"}
        name={step.id}
        value={option.id}
        checked={checked}
        onChange={() => onSelect(option.id)}
        className="sr-only"
      />
      <span
        aria-hidden="true"
        className={cn(
          "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border",
          step.kind === "single" ? "rounded-full" : "rounded-md",
          checked
            ? "border-accent bg-accent text-accent-foreground"
            : "border-border bg-surface",
        )}
      >
        {checked ? <Check className="h-3.5 w-3.5" /> : null}
      </span>
      <span>
        <span className="block text-sm font-semibold">
          {optionLabel(option, answers)}
        </span>
        {option.hint ? (
          <span className="mt-0.5 block text-sm text-muted">{option.hint}</span>
        ) : null}
      </span>
    </label>
  );
}
