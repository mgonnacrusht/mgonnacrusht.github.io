"use client";

import { buttonClasses } from "@/components/ui/Button";
import { trackEvent } from "@/lib/analytics";
import { siteConfig } from "@/lib/config/site";
import { cn } from "@/lib/utils";

type BookLinkProps = {
  /** Where the link sits, sent with the `book_click` Umami event. */
  source: string;
  /** "link" renders an underlined text link with a 44px touch target. */
  variant?: "primary" | "secondary" | "link";
  className?: string;
  children: React.ReactNode;
};

/**
 * Link to the Cal.com discovery call. Opens in a new tab and records a
 * `book_click` event (Umami only, no ad tags or cookies).
 */
export function BookLink({
  source,
  variant = "primary",
  className,
  children,
}: BookLinkProps) {
  const classes =
    variant === "link"
      ? cn(
          "inline-flex min-h-[44px] items-center font-semibold text-accent underline underline-offset-4",
          className,
        )
      : buttonClasses(variant, className);

  return (
    <a
      href={siteConfig.calLink}
      target="_blank"
      rel="noopener noreferrer"
      className={classes}
      onClick={() => trackEvent("book_click", { source })}
    >
      {children}
    </a>
  );
}
