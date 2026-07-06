import Image from "next/image";
import Link from "next/link";
import type { PortfolioProject } from "@/lib/content/portfolio";
import { FadeIn } from "@/components/motion/FadeIn";

export function ProjectCard({
  project,
  featured = false,
}: {
  project: PortfolioProject & { bullets?: string[] };
  featured?: boolean;
}) {
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
        <div className="flex items-center gap-2">
          <h3 className="text-xl font-bold">{project.title}</h3>
          {project.status === "coming-soon" ? (
            <span className="rounded-full bg-background px-2.5 py-0.5 text-xs font-medium text-muted">
              Coming soon
            </span>
          ) : null}
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
        {project.href ? (
          <p className="mt-auto pt-5 text-sm font-semibold text-accent">
            View details →
          </p>
        ) : null}
      </div>
    </article>
  );

  return (
    <FadeIn className="h-full">
      {project.href ? (
        <Link href={project.href} className="block h-full">
          {content}
        </Link>
      ) : (
        content
      )}
    </FadeIn>
  );
}
