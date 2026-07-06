"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { mainNav } from "@/lib/content/navigation";
import { siteConfig } from "@/lib/config/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Section";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-surface/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo/logo.svg"
            alt={siteConfig.name}
            width={120}
            height={32}
            className="hidden h-8 w-auto sm:block"
            priority
          />
          <Image
            src="/images/logo/logo-mobile.svg"
            alt={siteConfig.name}
            width={32}
            height={32}
            className="h-8 w-8 sm:hidden"
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
          <Button href="/contact/">Get in touch</Button>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      <div
        className={cn(
          "border-t border-border bg-surface md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <Container className="flex flex-col gap-3 py-4">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="py-2 text-sm font-medium text-foreground"
              onClick={() => setOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Button href="/contact/" className="w-full">
            Get in touch
          </Button>
        </Container>
      </div>
    </header>
  );
}
