"use client";

import Link from "next/link";
import Image from "next/image";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animations/fade-up";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { Target, Users, Lightbulb, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

const values = [
  { icon: Target, title: "Outcomes Over Output", description: "We measure success by business impact, not lines of code or hours billed." },
  { icon: Users, title: "Partnership, Not Vendor", description: "We embed with your team, share risk, and celebrate wins together." },
  { icon: Lightbulb, title: "Clarity Through Complexity", description: "We distill complex technical challenges into clear, actionable paths forward." },
  { icon: Globe, title: "Build for Scale", description: "Every decision considers the next 10x. Technical debt is a choice we make intentionally." },
];

const teamStats = [
  { value: 45, label: "Team Members" },
  { value: 12, label: "Avg. Years Exp." },
  { value: 8, label: "Countries" },
  { value: 100, suffix: "%", label: "Remote-First" },
];

export function AboutPreview() {
  return (
    <section className="section bg-background" aria-labelledby="about-heading">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div>
            <FadeUp delay={0.1}>
              <span className="caption text-primary">About Axeera</span>
            </FadeUp>
            <FadeUp delay={0.2}>
              <h2 id="about-heading" className="heading-1 text-4xl md:text-5xl mt-3 tracking-tight">
                We&apos;re engineers, designers, and strategists united by a craft obsession.
              </h2>
            </FadeUp>
            <FadeUp delay={0.3}>
              <div className="prose prose-muted max-w-none mt-6 space-y-4">
                <p className="body-lg">
                  Founded in 2018, Axeera began with a simple belief: the best digital products come from teams that care deeply about the craft and the outcome.
                </p>
                <p className="body-lg">
                  Today, we&apos;re a team of 45+ across 8 countries, working with clients ranging from funded startups to Fortune 500 enterprises. We&apos;ve delivered 50+ projects across healthcare, finance, retail, and technology.
                </p>
                <p className="body-lg">
                  We don&apos;t just build software. We help organizations transform how they operate, compete, and grow in a digital-first world.
                </p>
              </div>
            </FadeUp>
            
            <FadeUp delay={0.4} className="mt-8">
              <Link 
                href="/about" 
                className={cn(
                  "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                  "disabled:opacity-50 disabled:pointer-events-none",
                  "active:scale-[0.98]",
                  "bg-primary text-primary-foreground hover:shadow-lg hover:-translate-y-0.5 px-8 py-4 text-base"
                )}
              >
                Learn More About Us
              </Link>
            </FadeUp>
          </div>

          <div className="space-y-8">
            <div className="relative overflow-hidden rounded-[1.75rem] border border-border bg-work p-3 shadow-xl">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[1.25rem]">
                <Image
                  src="/images/projects/velocity-hero.svg"
                  alt="Velocity Commerce product experience"
                  fill
                  unoptimized
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute inset-x-5 bottom-5 text-on-dark">
                  <div className="text-xs font-medium uppercase tracking-[0.18em] text-on-dark/60">How we work</div>
                  <div className="mt-2 font-display text-2xl font-semibold tracking-tight">Small senior team. Serious outcomes.</div>
                </div>
              </div>
            </div>
            <StaggerContainer staggerDelay={0.1}>
              {values.map((value) => (
                <StaggerItem key={value.title}>
                  <ScrollReveal direction="left" distance={30} threshold={0.1}>
                    <div className="flex gap-4 p-6 bg-muted/30 rounded-2xl border border-border hover:border-primary/50 transition-colors duration-300">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <value.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{value.title}</h3>
                        <p className="text-muted-foreground mt-1">{value.description}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <ScrollReveal direction="up" distance={30}>
              <div className="grid grid-cols-2 gap-6 pt-4 border-t border-border">
                {teamStats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="heading-display text-4xl font-bold tracking-tighter">
                      {stat.value}
                      {stat.suffix}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
