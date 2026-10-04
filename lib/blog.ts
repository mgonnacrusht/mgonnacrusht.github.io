import fs from "node:fs";
import path from "node:path";
import { marked } from "marked";
import { hourlyRate } from "@/lib/content/pricing";
import {
  addOnRange,
  priceRange,
  timeline,
} from "@/lib/quiz/prices";

/**
 * Blog posts live as Markdown files in content/blog/.
 *
 * Front matter (between --- lines):
 *   title:       required
 *   description: required
 *   date:        required, YYYY-MM-DD (first published)
 *   updated:     optional, YYYY-MM-DD (posts are sorted by this, newest first)
 *
 * The file name is the URL slug. Files starting with "_" are ignored.
 *
 * Prices stay in sync with quiz.json through placeholders in the text:
 *   {{price:type_new_app.size_s}}    price range of a service and size
 *   {{timeline:type_new_app.size_s}} typical timeline
 *   {{addon:extra_backend}}          price range of an add-on
 *   {{hourly}}                       the hourly rate card
 */

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  /** YYYY-MM-DD */
  date: string;
  /** YYYY-MM-DD, falls back to `date` */
  updated: string;
  html: string;
};

const BLOG_DIR = path.join(process.cwd(), "content", "blog");
const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

function parseFrontMatter(raw: string, file: string) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) throw new Error(`${file}: missing front matter (--- block)`);
  const data: Record<string, string> = {};
  for (const line of match[1].split(/\r?\n/)) {
    if (!line.trim()) continue;
    const index = line.indexOf(":");
    if (index === -1) throw new Error(`${file}: bad front matter line "${line}"`);
    const key = line.slice(0, index).trim();
    const value = line
      .slice(index + 1)
      .trim()
      .replace(/^["']|["']$/g, "");
    data[key] = value;
  }
  return { data, body: match[2] };
}

function fillPlaceholders(body: string, file: string): string {
  return body.replace(/\{\{\s*([a-z]+)(?::([^}]+?))?\s*\}\}/g, (_all, kind, arg) => {
    const [type, size] = String(arg ?? "").split(".");
    try {
      switch (kind) {
        case "price":
          return priceRange(type, size as "size_s" | "size_m");
        case "timeline":
          return timeline(type, size as "size_s" | "size_m");
        case "addon":
          return addOnRange(String(arg));
        case "hourly":
          return hourlyRate;
      }
    } catch (error) {
      throw new Error(`${file}: ${(error as Error).message}`);
    }
    throw new Error(`${file}: unknown placeholder {{${kind}${arg ? ":" + arg : ""}}}`);
  });
}

function toHtml(markdown: string): string {
  const html = marked.parse(markdown, { async: false }) as string;
  // Open external links in a new tab.
  return html.replace(
    /<a href="(https?:\/\/[^"]+)"/g,
    '<a href="$1" target="_blank" rel="noopener noreferrer"',
  );
}

function loadPost(fileName: string): BlogPost {
  const slug = fileName.replace(/\.md$/, "");
  const raw = fs.readFileSync(path.join(BLOG_DIR, fileName), "utf8");
  const { data, body } = parseFrontMatter(raw, fileName);

  for (const key of ["title", "description", "date"]) {
    if (!data[key]) throw new Error(`${fileName}: missing "${key}" in front matter`);
  }
  for (const key of ["date", "updated"]) {
    if (data[key] && !DATE_PATTERN.test(data[key])) {
      throw new Error(`${fileName}: "${key}" must be YYYY-MM-DD`);
    }
  }

  return {
    slug,
    title: data.title,
    description: data.description,
    date: data.date,
    updated: data.updated || data.date,
    html: toHtml(fillPlaceholders(body, fileName)),
  };
}

/** All posts, most recently updated first. */
export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((name) => name.endsWith(".md") && !name.startsWith("_"))
    .map(loadPost)
    .sort(
      (a, b) =>
        b.updated.localeCompare(a.updated) ||
        b.date.localeCompare(a.date) ||
        a.title.localeCompare(b.title),
    );
}

export function getPost(slug: string): BlogPost | undefined {
  return getAllPosts().find((post) => post.slug === slug);
}

export function formatPostDate(date: string): string {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
