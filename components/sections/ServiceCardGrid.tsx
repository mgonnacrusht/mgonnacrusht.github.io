import { services } from "@/lib/content/services";
import { FadeIn } from "@/components/motion/FadeIn";

export function ServiceCardGrid({ limit }: { limit?: number }) {
  const items = limit ? services.slice(0, limit) : services;

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((service, index) => (
        <FadeIn key={service.name} delay={index * 0.05}>
          <article className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6 shadow-sm transition-transform hover:-translate-y-0.5">
            <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-xs font-bold text-accent">
              {service.iconLabel}
            </span>
            <h3 className="text-lg font-bold">{service.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {service.summary}
            </p>
          </article>
        </FadeIn>
      ))}
    </div>
  );
}
