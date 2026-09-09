"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { navigation } from "@/data/navigation";
import { Menu, X } from "lucide-react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-surface/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      )}
      role="banner"
    >
      <nav className="container mx-auto px-6" aria-label="Main navigation">
        <div className="flex h-16 md:h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-2" aria-label="Axeera Home">
            <motion.span
              className="text-xl font-display font-bold tracking-tight"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Axeera
            </motion.span>
          </Link>

          <div className="hidden md:flex md:items-center md:gap-8">
            {navigation.main.map((item) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Link
                  href={item.href}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className={cn(
                    "relative py-2 text-sm font-medium transition-colors duration-200",
                    "hover:text-primary",
                    pathname === item.href && "text-primary",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  )}
                >
                  {item.label}
                  {pathname === item.href && (
                    <span className="absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-primary" aria-hidden="true" />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="hidden md:flex md:items-center md:gap-4">
            <Link
              href={navigation.cta.href}
              className={cn(
                "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                "disabled:opacity-50 disabled:pointer-events-none",
                "active:scale-[0.98]",
                "bg-primary text-primary-foreground hover:shadow-lg hover:-translate-y-0.5 px-6 py-3 text-sm"
              )}
            >
              {navigation.cta.label}
            </Link>
          </div>

          <button
            className="md:hidden flex h-11 w-11 items-center justify-center rounded-lg hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            onClick={handleMobileMenuToggle}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden overflow-hidden border-t border-border bg-surface"
            >
              <div className="px-6 py-4 space-y-4">
                <div className="flex flex-col items-stretch gap-3 pb-4 border-b border-border">
                  <Link href="/insights" onClick={() => setIsMobileMenuOpen(false)} className="flex min-h-11 items-center text-sm font-medium text-muted-foreground hover:text-foreground">
                    Insights
                  </Link>
                  <Link
                    href={navigation.cta.href}
                    className={cn(
                      "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                      "disabled:opacity-50 disabled:pointer-events-none",
                      "active:scale-[0.98]",
                      "bg-primary text-primary-foreground hover:shadow-lg hover:-translate-y-0.5 px-6 py-3 text-sm w-full min-h-11"
                    )}
                  >
                    {navigation.cta.label}
                  </Link>
                </div>
                <nav aria-label="Mobile navigation">
                  <ul className="space-y-1" role="list">
                    {navigation.main.map((item) => (
                      <motion.li
                        key={item.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block py-3 text-base font-medium text-foreground hover:text-primary transition-colors"
                        >
                          {item.label}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
