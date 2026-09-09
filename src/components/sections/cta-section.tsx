"use client";

import Link from "next/link";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animations/fade-up";
import { ArrowRight, MessageSquare, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

export function CTASection() {
  return (
    <section className="section relative overflow-hidden border-t border-border bg-page" aria-labelledby="cta-heading">
      <div className="pointer-events-none absolute -right-24 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-accent-bright/20 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(var(--color-ink)_1px,transparent_1px),linear-gradient(90deg,var(--color-ink)_1px,transparent_1px)] [background-size:48px_48px]" aria-hidden="true" />
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <StaggerContainer staggerDelay={0.1}>
            <StaggerItem>
              <FadeUp delay={0.1}>
                <span className="caption text-primary">Ready to Start?</span>
              </FadeUp>
            </StaggerItem>
            <StaggerItem>
              <FadeUp delay={0.2}>
                <h2 id="cta-heading" className="heading-1 text-4xl md:text-5xl lg:text-6xl mt-3 tracking-tight">
                  Let&apos;s build something remarkable together
                </h2>
              </FadeUp>
            </StaggerItem>
            <StaggerItem>
              <FadeUp delay={0.3}>
                <p className="body-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
                  Every great product starts with a conversation. Tell us about your challenge, and we&apos;ll share how we&apos;d approach it.
                </p>
              </FadeUp>
            </StaggerItem>
            <StaggerItem>
              <FadeUp delay={0.4}>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
                  <Link 
                    href="/contact" 
                    className={cn(
                      "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                      "disabled:opacity-50 disabled:pointer-events-none",
                      "active:scale-[0.98]",
                      "bg-primary text-primary-foreground hover:shadow-lg hover:-translate-y-0.5 px-10 py-5 text-lg"
                    )}
                  >
                    Start a Project
                    <ArrowRight className="h-6 w-6" aria-hidden="true" />
                  </Link>
                  <Link 
                    href="/contact" 
                    className={cn(
                      "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                      "disabled:opacity-50 disabled:pointer-events-none",
                      "active:scale-[0.98]",
                      "border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-10 py-5 text-lg"
                    )}
                  >
                    Book a Consultation
                    <Calendar className="h-6 w-6" aria-hidden="true" />
                  </Link>
                </div>
              </FadeUp>
            </StaggerItem>
            <StaggerItem>
              <FadeUp delay={0.5}>
                <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4" aria-hidden="true" />
                    <span>Response within 24 hours</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" aria-hidden="true" />
                    <span>Free initial consultation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3 w-3 text-primary">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                    </span>
                    <span>No obligation</span>
                  </div>
                </div>
              </FadeUp>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
