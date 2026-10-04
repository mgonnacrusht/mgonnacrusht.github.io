"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { mainNav } from "@/lib/content/navigation";
import { siteConfig } from "@/lib/config/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Section";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close the mobile menu after any navigation, including the call to action.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-surface/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo/logo.svg"
            alt={siteConfig.name}
            width={120}
            height={32}
            className="h-7 w-auto sm:h-8"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              {item.name}
            </Link>
          ))}
          <Button href="/contact/">Get a quote</Button>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-3 text-foreground md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      <div
        id="mobile-menu"
        className={cn(
          "border-t border-border bg-surface md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <Container className="py-2">
          <ul className="divide-y divide-border">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-3.5 text-base font-medium text-foreground"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="border-t border-border py-4">
            <Button href="/contact/" className="px-6 py-3 text-base">
              Get a quote
            </Button>
          </div>
        </Container>
      </div>
    </header>
  );
}
