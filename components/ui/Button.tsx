import Link from "next/link";
import { cn } from "@/lib/utils";

const variants = {
  primary:
    "bg-accent text-accent-foreground hover:bg-accent/90 shadow-sm",
  secondary:
    "border border-border bg-surface text-foreground hover:bg-background",
  ghost: "text-foreground hover:bg-background",
} as const;

export function buttonClasses(
  variant: keyof typeof variants = "primary",
  className?: string,
) {
  return cn(
    "inline-flex min-h-[44px] items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition-colors",
    variants[variant],
    className,
  );
}

type ButtonProps = {
  href?: string;
  variant?: keyof typeof variants;
  className?: string;
  children: React.ReactNode;
  external?: boolean;
  /** Keep Referer on cross-origin opens (e.g. Umami on citylinemap.com). */
  preserveReferrer?: boolean;
};

export function Button({
  href,
  variant = "primary",
  className,
  children,
  external,
  preserveReferrer,
}: ButtonProps) {
  const classes = buttonClasses(variant, className);

  if (!href) {
    return <span className={classes}>{children}</span>;
  }

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel={preserveReferrer ? "noopener" : "noopener noreferrer"}
        referrerPolicy={
          preserveReferrer ? "no-referrer-when-downgrade" : undefined
        }
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
