import Link from "next/link";
import { Github, Mail } from "lucide-react";
import { footerNav, socialLinks } from "@/lib/content/navigation";
import { siteConfig } from "@/lib/config/site";
import { Container } from "@/components/layout/Section";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <Container className="py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-lg font-bold">{siteConfig.name}</p>
            <p className="mt-2 max-w-sm text-sm text-muted">
              Product engineering and practical software for startups and small
              teams.
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2 sm:grid-cols-3">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted transition-colors hover:text-foreground"
                target={link.icon === "github" ? "_blank" : undefined}
                rel={link.icon === "github" ? "noopener noreferrer" : undefined}
                aria-label={link.name}
              >
                {link.icon === "github" ? (
                  <Github className="h-5 w-5" />
                ) : (
                  <Mail className="h-5 w-5" />
                )}
              </a>
            ))}
          </div>
          <p className="text-sm text-muted">{siteConfig.copyright}</p>
        </div>
      </Container>
    </footer>
  );
}
