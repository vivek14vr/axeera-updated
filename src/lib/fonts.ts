import { IBM_Plex_Sans, IBM_Plex_Mono, Space_Grotesk } from "next/font/google";

export const geistSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
  preload: true,
});

export const geistMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
  preload: true,
  weight: ["400", "500", "600", "700"],
});

export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  preload: true,
  weight: ["400", "500", "600", "700"],
});
