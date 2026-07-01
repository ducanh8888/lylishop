import type { Viewport } from "next";

import "@/styles/globals.css";

import { DEFAULT_METADATA } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SkipToContent } from "@/components/SkipToContent";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";

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
      <body className={cn("min-h-screen font-sans")}>
        <SkipToContent />
        <Navbar />
        <main id="main" className="min-h-[60vh]">
          {children}
        </main>
        <Footer />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
