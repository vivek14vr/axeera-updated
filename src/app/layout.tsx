import type { Metadata, Viewport } from "next";
import { geistSans, geistMono, spaceGrotesk } from "@/lib/fonts";
import { Providers } from "@/components/providers";
import "./globals.css";

export const metadata: Metadata = {
    title: {
    default: "Axeera — Digital craft for ambitious brands",
    template: "%s | Axeera",
  },
  description: "Axeera designs and builds websites, apps, AI integrations, SEO systems, and software for ambitious brands.",
  keywords: [
    "website development",
    "app development",
    "AI integration",
    "SEO agency",
    "software development",
  ],
  authors: [{ name: "Axeera Tech" }],
  creator: "Axeera Tech",
  publisher: "Axeera Tech",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://axeera.com"),
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://axeera.com",
    siteName: "Axeera",
    title: "Axeera — Digital craft for ambitious brands",
    description: "Websites, apps, AI integrations, SEO, and software delivered by one accountable team.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
          alt: "Axeera Tech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@axeera",
    creator: "@axeera",
    title: "Axeera — Digital craft for ambitious brands",
    description: "Digital products and growth systems for ambitious brands.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head suppressHydrationWarning />
      <body suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} antialiased`}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-primary-foreground">
          Skip to main content
        </a>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
