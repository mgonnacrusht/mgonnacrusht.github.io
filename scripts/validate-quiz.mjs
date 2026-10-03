import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const quizPath = path.join(root, "lib", "content", "quiz.json");
const pricingPath = path.join(root, "lib", "content", "pricing.ts");

const errors = [];
const warnings = [];
const fail = (msg) => errors.push(msg);

let config;
try {
  config = JSON.parse(fs.readFileSync(quizPath, "utf8"));
} catch (error) {
  console.error(`quiz.json is not valid JSON: ${error.message}`);
  process.exit(1);
}

const isRange = (value) =>
  Array.isArray(value) &&
  value.length === 2 &&
  value.every((n) => typeof n === "number" && n >= 0) &&
  value[0] <= value[1];

// Collect ids and make sure they are unique.
const stepIds = new Map();
const optionIds = new Map();
for (const step of config.steps ?? []) {
  if (stepIds.has(step.id)) fail(`Duplicate step id: ${step.id}`);
  stepIds.set(step.id, step);
  if (!["single", "multi"].includes(step.kind)) {
    fail(`Step ${step.id}: kind must be "single" or "multi"`);
  }
  if (!step.options?.length) fail(`Step ${step.id}: no options`);
  for (const option of step.options ?? []) {
    if (optionIds.has(option.id)) fail(`Duplicate option id: ${option.id}`);
    optionIds.set(option.id, step.id);
  }
}

// Conditions must point at real steps and options.
const checkCondition = (condition, where) => {
  for (const [stepId, allowed] of Object.entries(condition ?? {})) {
    if (!stepIds.has(stepId)) fail(`${where}: unknown step "${stepId}"`);
    for (const optionId of allowed) {
      if (optionIds.get(optionId) !== stepId) {
        fail(`${where}: option "${optionId}" does not belong to step "${stepId}"`);
      }
    }
  }
};

for (const step of config.steps ?? []) {
  checkCondition(step.showIf, `Step ${step.id} showIf`);
  for (const option of step.options ?? []) {
    for (const effect of option.effects ?? []) {
      checkCondition(effect.when, `Option ${option.id} effect`);
      if (effect.add && !isRange(effect.add)) {
        fail(`Option ${option.id}: "add" must be [low, high] with low <= high`);
      }
      if (effect.multiply !== undefined && !(effect.multiply > 0)) {
        fail(`Option ${option.id}: "multiply" must be greater than 0`);
      }
    }
    for (const typeId of Object.keys(option.labels ?? {})) {
      if (!optionIds.has(typeId)) {
        fail(`Option ${option.id}: label override for unknown option "${typeId}"`);
      }
    }
  }
}

// Every priced type needs a price for every size that is not an outcome.
const typeStep = stepIds.get("type");
const sizeStep = stepIds.get("size");
if (!typeStep || !sizeStep) {
  fail('quiz.json needs steps with ids "type" and "size"');
} else {
  const pricedSizes = sizeStep.options.filter((o) => !o.outcome).map((o) => o.id);
  for (const type of typeStep.options.filter((o) => !o.outcome)) {
    const row = config.base?.[type.id];
    if (!row) {
      fail(`base: missing price row for "${type.id}"`);
      continue;
    }
    for (const sizeId of pricedSizes) {
      if (!isRange(row[sizeId])) {
        fail(`base.${type.id}.${sizeId}: missing or invalid [low, high]`);
      }
    }
  }
  for (const typeId of Object.keys(config.base ?? {})) {
    if (optionIds.get(typeId) !== "type") {
      fail(`base: "${typeId}" is not an option of the "type" step`);
    }
  }
}

// If timelines are configured, every priced type and size needs one.
if (config.durations && typeStep && sizeStep) {
  const pricedSizes = sizeStep.options.filter((o) => !o.outcome).map((o) => o.id);
  for (const type of typeStep.options.filter((o) => !o.outcome)) {
    for (const sizeId of pricedSizes) {
      const value = config.durations[type.id]?.[sizeId];
      if (typeof value !== "string" || !value.trim()) {
        fail(`durations.${type.id}.${sizeId}: missing timeline text`);
      }
    }
  }
}

// "What is included" keys must point at real types and options.
for (const typeId of Object.keys(config.includes?.types ?? {})) {
  if (optionIds.get(typeId) !== "type") {
    fail(`includes.types: "${typeId}" is not an option of the "type" step`);
  }
}
for (const optionId of Object.keys(config.includes?.options ?? {})) {
  if (!optionIds.has(optionId)) fail(`includes.options: unknown option "${optionId}"`);
}

// Bands must be in ascending order.
let previous = 0;
for (const band of config.bands ?? []) {
  if (!(band.upTo > previous)) fail(`bands: "${band.id}" must be above the previous band`);
  previous = band.upTo;
}
if (!(config.rounding > 0)) fail("rounding must be greater than 0");

// Soft check: published pricing bands should match the quiz (warning only).
if (fs.existsSync(pricingPath) && config.pricingLinks) {
  const source = fs.readFileSync(pricingPath, "utf8");
  const parse = (text) =>
    text.match(/£([\d,]+)\s*[–-]\s*£?([\d,]+)/)?.slice(1, 3).map((n) => Number(n.replace(/,/g, "")));
  for (const [key, label] of Object.entries(config.pricingLinks)) {
    const [typeId, sizeId] = key.split(".");
    const quizRange = config.base?.[typeId]?.[sizeId];
    const block = source.match(
      new RegExp(`label:\\s*"${label.replace(/[/]/g, "\\/")}"[\\s\\S]*?range:\\s*"([^"]+)"`),
    );
    const published = block ? parse(block[1]) : null;
    if (!published) {
      warnings.push(`pricing.ts: could not find a range for "${label}"`);
    } else if (!quizRange || published[0] !== quizRange[0] || published[1] !== quizRange[1]) {
      warnings.push(
        `quiz ${key} (${quizRange?.join("–")}) differs from pricing.ts "${label}" (${published.join("–")})`,
      );
    }
  }
}

for (const warning of warnings) console.warn(`Warning: ${warning}`);

if (errors.length) {
  console.error("quiz.json validation failed:");
  for (const error of errors) console.error(`  - ${error}`);
  process.exit(1);
}
console.log(`quiz.json OK (${config.steps.length} steps, ${Object.keys(config.base).length} priced types)`);
