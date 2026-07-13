export type NavItem = {
  name: string;
  href: string;
};

export const mainNav: NavItem[] = [
  { name: "Services", href: "/services/" },
  { name: "Portfolio", href: "/products/" },
  { name: "About", href: "/about/" },
];

export const footerNav: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "SaveT", href: "/savet/" },
  { name: "Services", href: "/services/" },
  { name: "Portfolio", href: "/products/" },
  { name: "Get in touch", href: "/contact/" },
  { name: "Privacy Policy", href: "/legal/privacy/" },
  { name: "Terms of Use", href: "/legal/terms/" },
];

export type SocialLink = {
  name: string;
  href: string;
  icon: "github" | "email" | "linkedin";
};

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    href: "https://github.com/alihan98ersoy",
    icon: "github",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/mgonnacrusht",
    icon: "linkedin",
  },
  {
    name: "Email",
    href: "mailto:hello@mgonnacrusht.co.uk",
    icon: "email",
  },
];
