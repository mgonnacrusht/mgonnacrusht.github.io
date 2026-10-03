import type { LucideIcon } from "lucide-react";
import {
  Cloud,
  Database,
  Globe,
  Layers,
  Server,
  Smartphone,
  TabletSmartphone,
  Workflow,
} from "lucide-react";
import { services, type ServiceIcon } from "@/lib/content/services";
import { FadeIn } from "@/components/motion/FadeIn";

const serviceIcons: Record<ServiceIcon, LucideIcon> = {
  smartphone: Smartphone,
  android: TabletSmartphone,
  api: Server,
  cloud: Cloud,
  database: Database,
  saas: Layers,
  workflow: Workflow,
  website: Globe,
};

export function ServiceCardGrid({ limit }: { limit?: number }) {
  const items = limit ? services.slice(0, limit) : services;
  const fourColumns = items.length % 4 === 0;

  return (
    <div
      className={`grid gap-4 sm:grid-cols-2 ${
        fourColumns ? "lg:grid-cols-4" : "lg:grid-cols-3"
      }`}
    >
      {items.map((service, index) => {
        const Icon = serviceIcons[service.icon];

        return (
          <FadeIn key={service.name} delay={index * 0.05} className="h-full">
            <article className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="text-lg font-bold">{service.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {service.summary}
              </p>
              <ul
                className={`mt-4 flex flex-wrap gap-2 ${
                  fourColumns ? "lg:min-h-16 lg:content-start" : ""
                }`}
              >
                {service.chips.map((chip) => (
                  <li
                    key={chip}
                    className="rounded-full bg-background px-3 py-1 text-xs font-medium text-muted"
                  >
                    {chip}
                  </li>
                ))}
              </ul>
            </article>
          </FadeIn>
        );
      })}
    </div>
  );
}
