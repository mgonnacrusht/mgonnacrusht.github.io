export type NavItem = {
  name: string;
  href: string;
};

export const mainNav: NavItem[] = [
  { name: "SaveT", href: "/savet/" },
  { name: "Services", href: "/services/" },
  { name: "Portfolio", href: "/products/" },
  { name: "About", href: "/about/" },
  { name: "Contact", href: "/contact/" },
];

export const footerNav: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "SaveT", href: "/savet/" },
  { name: "Services", href: "/services/" },
  { name: "Portfolio", href: "/products/" },
  { name: "Contact", href: "/contact/" },
  { name: "Privacy Policy", href: "/legal/privacy/" },
  { name: "Terms of Use", href: "/legal/terms/" },
];

export const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/alihan98ersoy",
    icon: "github" as const,
  },
  {
    name: "Email",
    href: "mailto:hello@mgonnacrusht.co.uk",
    icon: "email" as const,
  },
];
