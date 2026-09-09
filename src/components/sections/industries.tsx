"use client";

import Link from "next/link";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animations/fade-up";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { industries } from "@/data/navigation";
import { projects } from "@/data/projects";
import { IndustryIcon } from "@/components/shared/icon";
import { cn } from "@/lib/utils";

export function Industries() {
  // Deterministic project counts based on actual data
  const industriesWithCounts = industries.map((industry) => {
    const label = industry.label.toLowerCase().split(" &")[0].toLowerCase();
    const count = projects.filter((p) => p.industry.toLowerCase().includes(label)).length;
    return {
      ...industry,
      projectCount: count,
    };
  });

  return (
    <section className="section bg-background" aria-labelledby="industries-heading">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeUp delay={0.1}>
            <span className="caption text-primary">Industries</span>
          </FadeUp>
          <FadeUp delay={0.2}>
            <h2 id="industries-heading" className="heading-1 text-4xl md:text-5xl mt-3 tracking-tight">
              Deep expertise across sectors
            </h2>
          </FadeUp>
          <FadeUp delay={0.3}>
            <p className="body-lg text-muted-foreground mt-4">
              Industry context matters. We bring domain knowledge that accelerates discovery and reduces risk.
            </p>
          </FadeUp>
        </div>

        <StaggerContainer staggerDelay={0.08}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {industriesWithCounts.map((industry, index) => (
              <StaggerItem key={industry.slug}>
                <ScrollReveal direction="up" distance={30} threshold={0.1} delay={index * 0.05}>
                  <Link
                    href="/work"
                    className={cn(
                      "group relative block h-full p-6 bg-surface border border-border rounded-2xl hover:border-primary/50 hover:shadow-xl transition-all duration-500",
                      "hover:-translate-y-1"
                    )}
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <IndustryIcon slug={industry.slug} className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>
                    <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">{industry.label}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {industry.projectCount > 0 ? `${industry.projectCount} selected ${industry.projectCount === 1 ? "project" : "projects"}` : "Explore our approach"}
                    </p>
                    <div className="pointer-events-none absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                  </Link>
                </ScrollReveal>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>

        <div className="mt-16 text-center">
          <FadeUp>
            <p className="text-muted-foreground mb-4">Don&apos;t see your industry? We adapt quickly.</p>
            <Link href="/contact" className="link">
              Discuss your domain
            </Link>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
