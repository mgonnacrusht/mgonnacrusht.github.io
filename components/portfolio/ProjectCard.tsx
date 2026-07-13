import Image from "next/image";
import Link from "next/link";
import type { PortfolioProject } from "@/lib/content/portfolio";
import { FadeIn } from "@/components/motion/FadeIn";

const statusLabels: Record<
  PortfolioProject["status"],
  { text: string; className: string }
> = {
  "closed-beta": {
    text: "Closed beta",
    className: "bg-accent/10 text-accent",
  },
  live: {
    text: "Live",
    className: "bg-background text-muted",
  },
  "coming-soon": {
    text: "Coming soon",
    className: "bg-background text-muted",
  },
};

function StatusBadge({ status }: { status: PortfolioProject["status"] }) {
  const { text, className } = statusLabels[status];
  return (
    <span
      className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${className}`}
    >
      {text}
    </span>
  );
}

export function ProjectCard({
  project,
  featured = false,
}: {
  project: PortfolioProject & { bullets?: string[] };
  featured?: boolean;
}) {
  const ctaLabel =
    project.cta?.label ??
    (project.href ? "View details" : undefined);

  const content = (
    <article
      className={`flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-sm transition-transform hover:-translate-y-0.5 ${
        featured ? "lg:flex-row" : ""
      }`}
    >
      <div
        className={`relative bg-background ${
          featured ? "lg:w-2/5" : "aspect-[16/10]"
        }`}
      >
        <Image
          src={project.image}
          alt={project.title}
          width={featured ? 400 : 640}
          height={featured ? 400 : 400}
          className={`object-contain p-6 ${
            featured ? "h-full w-full" : "h-full w-full"
          }`}
        />
      </div>
      <div className={`flex flex-1 flex-col p-6 ${featured ? "lg:p-8" : ""}`}>
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="text-xl font-bold">{project.title}</h3>
          <StatusBadge status={project.status} />
        </div>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          {project.description}
        </p>
        {"bullets" in project && project.bullets ? (
          <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-muted">
            {project.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        ) : null}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-background px-3 py-1 text-xs font-medium text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
        {ctaLabel && project.href ? (
          <p className="mt-auto pt-5 text-sm font-semibold text-accent">
            {ctaLabel} →
          </p>
        ) : null}
      </div>
    </article>
  );

  const linkHref = project.cta?.href ?? project.href;
  const isExternal = project.cta?.external ?? false;

  const wrapper = linkHref ? (
    isExternal ? (
      <a
        href={linkHref}
        className="block h-full"
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    ) : (
      <Link href={linkHref} className="block h-full">
        {content}
      </Link>
    )
  ) : (
    content
  );

  return <FadeIn className="h-full">{wrapper}</FadeIn>;
}
