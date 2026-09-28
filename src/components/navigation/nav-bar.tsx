"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { navigation } from "@/data/navigation";
import { ChevronDown, ExternalLink, Menu, X } from "lucide-react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { AxeeraLogo } from "@/components/shared/axeera-logo";

function isNavItemActive(item: (typeof navigation.main)[number], pathname: string) {
  return pathname === item.href || item.children?.some((child) => !child.external && (pathname === child.href || pathname.startsWith(`${child.href}/`)));
}

export function DesktopNavItem({ item, pathname, prefersReducedMotion, dark = false }: { item: (typeof navigation.main)[number]; pathname: string; prefersReducedMotion: boolean; dark?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const active = isNavItemActive(item, pathname);

  useEffect(() => {
    if (!isOpen) return;
    const handlePointerDown = (event: PointerEvent) => {
      if (!dropdownRef.current?.contains(event.target as Node)) setIsOpen(false);
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  if (!item.children) {
    return <Link href={item.href} aria-current={pathname === item.href ? "page" : undefined} className={cn("relative py-2 text-sm font-medium transition-colors duration-200", dark ? "text-[#f9f5ed]/70 hover:text-[#f9f5ed]" : "hover:text-primary", pathname === item.href && (dark ? "text-[#f0523a]" : "text-primary"), "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2")}>{item.label}{pathname === item.href && <span className={cn("absolute inset-x-0 -bottom-1 h-0.5 rounded-full", dark ? "bg-[#f0523a]" : "bg-primary")} aria-hidden="true" />}</Link>;
  }

  return <div ref={dropdownRef} onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)} onFocus={() => setIsOpen(true)} className="relative">
    <Link href={item.href} aria-haspopup="menu" aria-expanded={isOpen} className={cn("inline-flex items-center gap-1 py-2 text-sm font-medium transition-colors duration-200", dark ? "text-[#f9f5ed]/70 hover:text-[#f9f5ed]" : "hover:text-primary", active && (dark ? "text-[#f0523a]" : "text-primary"), "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2")}>
      {item.label}
      <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", isOpen && "rotate-180")} aria-hidden="true" />
    </Link>
    <AnimatePresence>
      {isOpen && <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: prefersReducedMotion ? 0 : 0.16 }} role="menu" className="absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 overflow-y-auto pt-3 before:absolute before:inset-x-0 before:top-0 before:h-3">
        <div className={cn("max-h-[min(70vh,32rem)] overflow-y-auto rounded-2xl border p-2 shadow-2xl", dark ? "border-[#f9f5ed]/20 bg-[#17232b]" : "border-border bg-surface")}>
          <div className={cn("pt-1", dark ? "border-[#f9f5ed]/15" : "border-border")}>
            {item.children.map((child) => child.external ? <a key={child.href} href={child.href} target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} role="menuitem" className={cn("flex items-center justify-between rounded-xl px-4 py-2.5 text-sm transition-colors", dark ? "text-[#f9f5ed]/70 hover:bg-[#f9f5ed]/10 hover:text-[#f9f5ed]" : "text-muted-foreground hover:bg-muted hover:text-primary")}>{child.label}<ExternalLink className="h-3.5 w-3.5" aria-hidden="true" /></a> : <Link key={child.href} href={child.href} onClick={() => setIsOpen(false)} role="menuitem" className={cn("block rounded-xl px-4 py-2.5 text-sm transition-colors", dark ? "text-[#f9f5ed]/70 hover:bg-[#f9f5ed]/10 hover:text-[#f9f5ed]" : "text-muted-foreground hover:bg-muted hover:text-primary", pathname === child.href && (dark ? "bg-[#f0523a]/15 font-medium text-[#f9f5ed]" : "bg-primary/10 font-medium text-primary"))}>{child.label}</Link>)}
          </div>
        </div>
      </motion.div>}
    </AnimatePresence>
  </div>;
}

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
      <nav className="mx-auto w-full max-w-[90rem] px-6 lg:px-10" aria-label="Main navigation">
        <div className="flex h-16 items-center justify-between md:h-20">
          <AxeeraLogo className="h-20 w-28" />

          <div className="hidden lg:flex lg:items-center lg:gap-6">
            {navigation.main.map((item) => (
              <motion.div key={item.href} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                <DesktopNavItem item={item} pathname={pathname} prefersReducedMotion={prefersReducedMotion} />
              </motion.div>
            ))}
          </div>

          <div className="hidden lg:flex lg:items-center lg:gap-4">
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
            className="lg:hidden flex h-11 w-11 items-center justify-center rounded-lg hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
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
              className="lg:hidden overflow-hidden border-t border-border bg-surface"
            >
              <div className="space-y-4 px-6 py-4">
                <div className="flex flex-col items-stretch gap-1 border-b border-border pb-4">
                  <nav aria-label="Mobile primary navigation">
                    <ul className="space-y-1" role="list">
                      {navigation.main.map((item) => (
                        <motion.li key={item.href} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}>
                          {item.children ? <details className="group">
                            <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between py-3 text-base font-medium text-foreground transition-colors hover:text-primary [&::-webkit-details-marker]:hidden">
                              {item.label}
                              <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" aria-hidden="true" />
                            </summary>
                            <div className="ml-3 border-l border-border pl-4 pb-2">
                              {item.children.map((child) => child.external ? <a key={child.href} href={child.href} target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)} className="flex min-h-10 items-center justify-between py-2 text-sm text-muted-foreground hover:text-primary">{child.label}<ExternalLink className="h-3.5 w-3.5" aria-hidden="true" /></a> : <Link key={child.href} href={child.href} onClick={() => setIsMobileMenuOpen(false)} className="block min-h-10 py-2 text-sm text-muted-foreground hover:text-primary">{child.label}</Link>)}
                            </div>
                          </details> : <Link href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="block min-h-11 py-3 text-base font-medium text-foreground transition-colors hover:text-primary">{item.label}</Link>}
                        </motion.li>
                      ))}
                    </ul>
                  </nav>
                  <Link
                    href={navigation.cta.href}
                    onClick={() => setIsMobileMenuOpen(false)}
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
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
