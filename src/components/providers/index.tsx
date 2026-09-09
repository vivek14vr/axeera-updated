"use client";

import { ThemeProvider } from "@/components/providers/theme-provider";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll";
import { NavBar } from "@/components/navigation/nav-bar";
import { Footer } from "@/components/layout/footer";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";

export function Providers({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  return (
    <ThemeProvider>
      <SmoothScrollProvider>
        <div className="flex min-h-screen flex-col">
          {!isHome && <NavBar />}
          <main id="main-content" className={`flex-1 ${isHome ? "" : "pt-16 md:pt-20"}`}>{children}</main>
          {!isHome && <Footer />}
        </div>
      </SmoothScrollProvider>
    </ThemeProvider>
  );
}
