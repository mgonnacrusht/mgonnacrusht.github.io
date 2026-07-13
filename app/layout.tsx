import type { Metadata } from "next";
import { DM_Sans, Sora } from "next/font/google";
import Script from "next/script";
import { siteConfig } from "@/lib/config/site";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MotionProvider } from "@/components/motion/MotionProvider";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: "MgonnacrushT",
    template: "%s · MgonnacrushT",
  },
  description:
    "MgonnacrushT delivers mobile apps, SaaS backends, and cloud infrastructure for startups and small teams.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${sora.variable}`}
      suppressHydrationWarning
    >
      <body
        className="min-h-screen bg-background text-foreground antialiased"
        suppressHydrationWarning
      >
        <MotionProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </MotionProvider>
        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id={siteConfig.umamiWebsiteId}
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
