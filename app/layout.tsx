import type { Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import "@/styles/globals.css";

import { DEFAULT_METADATA } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SkipToContent } from "@/components/SkipToContent";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata = DEFAULT_METADATA;

export const viewport: Viewport = {
  themeColor: SITE.themeColor,
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={cn(inter.variable, jakarta.variable, "min-h-screen font-sans")}>
        <SkipToContent />
        <Navbar />
        <main id="main" className="min-h-[60vh]">
          {children}
        </main>
        <Footer />
        <GoogleAnalytics />
        <Analytics />
      </body>
    </html>
  );
}
