import quizJson from "@/lib/content/quiz.json";

export type Condition = Record<string, string[]>;

export type Effect = {
  when?: Condition;
  add?: [number, number];
  multiply?: number;
};

export type QuizOption = {
  id: string;
  label: string;
  hint?: string;
  group?: string;
  /** Short label for the "Based on" summary. Empty string hides the option. */
  short?: string;
  labels?: Record<string, string>;
  effects?: Effect[];
  exclusive?: boolean;
  outcome?: "unsure" | "contact";
};

export type QuizStep = {
  id: string;
  title: string;
  kind: "single" | "multi";
  /** Lay the first N option groups out side by side on wide screens. */
  columns?: number;
  showIf?: Condition;
  options: QuizOption[];
};

export type QuizConfig = {
  currency: string;
  rounding: number;
  contactAbove: number;
  bands: { id: string; upTo: number }[];
  pricingLinks?: Record<string, string>;
  steps: QuizStep[];
  base: Record<string, Record<string, [number, number]>>;
  durations?: Record<string, Record<string, string>>;
  includes?: {
    types?: Record<string, string[]>;
    options?: Record<string, string[]>;
  };
  copy: {
    eyebrow: string;
    title: string;
    lead: string;
    resultTitle: string;
    resultNote: string;
    basedOn: string;
    includedTitle: string;
    assurancesTitle: string;
    durationLabel: string;
    durationNote: string;
    contactTitle: string;
    contactBody: string;
    unsureTitle: string;
    unsureBody: string;
    assurances: string[];
    ctaCall: string;
    ctaBrief: string;
    formTitle: string;
    formLead: string;
    formSuccessTitle: string;
    formSuccessBody: string;
    replyNote?: string;
    restart: string;
    back: string;
    next: string;
    seeResult: string;
  };
};

export type Answers = Record<string, string[]>;

export type QuizResult =
  | {
      kind: "range";
      low: number;
      high: number;
      band: string;
      duration?: string;
    }
  | { kind: "contact"; band: "contact" }
  | { kind: "unsure"; band: "unsure" };

export const quizConfig = quizJson as unknown as QuizConfig;

function matches(condition: Condition | undefined, answers: Answers): boolean {
  if (!condition) return true;
  return Object.entries(condition).every(([stepId, allowed]) =>
    (answers[stepId] ?? []).some((id) => allowed.includes(id)),
  );
}

export function visibleSteps(
  config: QuizConfig,
  answers: Answers,
): QuizStep[] {
  const steps: QuizStep[] = [];
  for (const step of config.steps) {
    if (matches(step.showIf, answers)) steps.push(step);
    // Stop early when an answer ends the flow (e.g. "not sure yet").
    const picked = step.options.filter((o) =>
      (answers[step.id] ?? []).includes(o.id),
    );
    if (picked.some((o) => o.outcome === "unsure")) break;
  }
  return steps;
}

export function optionLabel(option: QuizOption, answers: Answers): string {
  const typeId = answers.type?.[0];
  return (typeId && option.labels?.[typeId]) || option.label;
}

function selectedOptions(config: QuizConfig, answers: Answers): QuizOption[] {
  const visible = new Set(visibleSteps(config, answers).map((s) => s.id));
  return config.steps
    .filter((s) => visible.has(s.id))
    .flatMap((s) => s.options.filter((o) => (answers[s.id] ?? []).includes(o.id)));
}

export function computeResult(
  config: QuizConfig,
  answers: Answers,
): QuizResult {
  const picked = selectedOptions(config, answers);

  if (picked.some((o) => o.outcome === "unsure")) {
    return { kind: "unsure", band: "unsure" };
  }
  if (picked.some((o) => o.outcome === "contact")) {
    return { kind: "contact", band: "contact" };
  }

  const typeId = answers.type?.[0];
  const sizeId = answers.size?.[0];
  const base = typeId && sizeId ? config.base[typeId]?.[sizeId] : undefined;
  if (!base) return { kind: "contact", band: "contact" };

  let low = base[0];
  let high = base[1];
  let factor = 1;

  for (const option of picked) {
    for (const effect of option.effects ?? []) {
      if (!matches(effect.when, answers)) continue;
      if (effect.add) {
        low += effect.add[0];
        high += effect.add[1];
      }
      if (effect.multiply) factor *= effect.multiply;
    }
  }

  const round = (value: number) =>
    Math.round((value * factor) / config.rounding) * config.rounding;
  low = round(low);
  high = round(high);

  if (high > config.contactAbove) return { kind: "contact", band: "contact" };

  const band =
    config.bands.find((b) => high <= b.upTo)?.id ??
    config.bands[config.bands.length - 1]?.id ??
    "high";

  return {
    kind: "range",
    low,
    high,
    band,
    duration: typeId && sizeId ? config.durations?.[typeId]?.[sizeId] : undefined,
  };
}

export function formatRange(
  config: QuizConfig,
  low: number,
  high: number,
): string {
  const fmt = (n: number) => `${config.currency}${n.toLocaleString("en-GB")}`;
  return `${fmt(low)} to ${fmt(high)}`;
}

export function summarizeAnswers(
  config: QuizConfig,
  answers: Answers,
  separator = " | ",
): string {
  return visibleSteps(config, answers)
    .map((step) => {
      const labels = step.options
        .filter((o) => (answers[step.id] ?? []).includes(o.id))
        .map((o) => optionLabel(o, answers));
      return labels.length ? `${step.title} ${labels.join(", ")}` : null;
    })
    .filter(Boolean)
    .join(separator);
}

/** Short labels of the selected options, for the "Based on" summary. */
export function answerChips(config: QuizConfig, answers: Answers): string[] {
  return visibleSteps(config, answers).flatMap((step) =>
    step.options
      .filter((o) => (answers[step.id] ?? []).includes(o.id))
      .map((o) => o.short ?? o.label)
      .filter((label) => label.trim() !== ""),
  );
}

/** What the estimate covers: items for the chosen type plus selected options. */
export function includedItems(config: QuizConfig, answers: Answers): string[] {
  const typeId = answers.type?.[0];
  const items = [...((typeId && config.includes?.types?.[typeId]) || [])];
  for (const step of visibleSteps(config, answers)) {
    for (const option of step.options) {
      if ((answers[step.id] ?? []).includes(option.id)) {
        items.push(...(config.includes?.options?.[option.id] ?? []));
      }
    }
  }
  return items;
}
