import { quizConfig } from "@/lib/quiz/engine";

type Size = "size_s" | "size_m";

const money = (n: number) =>
  `${quizConfig.currency}${n.toLocaleString("en-GB")}`;

/** Base price range for a service and size, straight from quiz.json. */
export function priceRange(type: string, size: Size): string {
  const range = quizConfig.base[type]?.[size];
  if (!range) throw new Error(`No price for ${type} ${size} in quiz.json`);
  return `${money(range[0])} to ${money(range[1])}`;
}

/** Lowest price of a service size, for "from" wording. */
export function priceFrom(type: string, size: Size = "size_s"): string {
  const range = quizConfig.base[type]?.[size];
  if (!range) throw new Error(`No price for ${type} ${size} in quiz.json`);
  return money(range[0]);
}

/** Typical timeline for a service and size, straight from quiz.json. */
export function timeline(type: string, size: Size): string {
  const text = quizConfig.durations?.[type]?.[size];
  if (!text) throw new Error(`No timeline for ${type} ${size} in quiz.json`);
  return text;
}

/** Price range of an add-on option, for example "extra_backend". */
export function addOnRange(optionId: string): string {
  const option = quizConfig.steps
    .flatMap((step) => step.options)
    .find((o) => o.id === optionId);
  const add = option?.effects?.find((e) => e.add)?.add;
  if (!add) throw new Error(`No add-on price for ${optionId} in quiz.json`);
  return `${money(add[0])} to ${money(add[1])}`;
}

/** "What is included" items for a service type, straight from quiz.json. */
export function includedFor(type: string): string[] {
  return quizConfig.includes?.types?.[type] ?? [];
}
