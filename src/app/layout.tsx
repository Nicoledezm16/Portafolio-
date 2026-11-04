import type { Metadata, Viewport } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n/LanguageProvider";
import { site } from "@/data/site";

const font = Space_Grotesk({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

const description =
  "Web developer building modern, responsive and user-focused digital experiences.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Nicolas Ledezma — Web Developer",
    template: "%s | Nicolas Ledezma",
  },
  description,
  openGraph: {
    title: "Nicolas Ledezma — Web Developer",
    description,
    url: site.url,
    siteName: "Nicolas Ledezma",
    type: "website",
    images: [{ url: "/images/og.png", width: 1200, height: 630, alt: "Nicolas Ledezma — Web Developer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nicolas Ledezma — Web Developer",
    description,
    images: ["/images/og.png"],
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = { themeColor: "#050507" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={font.variable}>
      <body className="font-sans">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}