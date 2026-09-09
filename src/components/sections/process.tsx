"use client";

import { FadeUp } from "@/components/animations/fade-up";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { motion } from "motion/react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const processSteps = [
  {
    number: "01",
    title: "Discover",
    description: "We immerse ourselves in your business, users, and technology landscape to uncover the real problems worth solving.",
    activities: ["Stakeholder interviews", "User research", "Technical audit", "Competitive analysis", "Data analysis"],
    duration: "2–3 weeks",
  },
  {
    number: "02",
    title: "Strategy",
    description: "We synthesize insights into a clear product strategy, technical architecture, and roadmap aligned with your business goals.",
    activities: ["Product vision & scope", "Architecture design", "Tech stack selection", "Roadmap & milestones", "Risk assessment"],
    duration: "1–2 weeks",
  },
  {
    number: "03",
    title: "Design",
    description: "We create intuitive, accessible interfaces and design systems that users love and developers can build efficiently.",
    activities: ["Information architecture", "Wireframes & flows", "High-fidelity design", "Design system", "Usability testing"],
    duration: "3–6 weeks",
  },
  {
    number: "04",
    title: "Develop",
    description: "We build with clean architecture, comprehensive testing, and continuous delivery—shipping quality code from day one.",
    activities: ["Sprint planning", "Feature development", "Code reviews", "Automated testing", "CI/CD pipeline"],
    duration: "8–16 weeks",
  },
  {
    number: "05",
    title: "Launch",
    description: "We orchestrate smooth production releases with monitoring, rollback plans, and team enablement for day-one success.",
    activities: ["Production deployment", "Monitoring setup", "Runbook creation", "Team training", "Launch support"],
    duration: "1–2 weeks",
  },
  {
    number: "06",
    title: "Grow",
    description: "We partner beyond launch—iterating based on data, optimizing performance, and evolving the product with your business.",
    activities: ["Analytics & insights", "A/B testing", "Feature iteration", "Performance optimization", "Scale planning"],
    duration: "Ongoing",
  },
];

export function Process() {
  const [activeStep, setActiveStep] = useState(0);
  const step = processSteps[activeStep];
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="section bg-muted/30" aria-labelledby="process-heading">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeUp delay={0.1}>
            <span className="caption text-primary">Our Process</span>
          </FadeUp>
          <FadeUp delay={0.2}>
            <h2 id="process-heading" className="heading-1 text-4xl md:text-5xl mt-3 tracking-tight">
              A proven path from idea to impact
            </h2>
          </FadeUp>
          <FadeUp delay={0.3}>
            <p className="body-lg text-muted-foreground mt-4">
              Six phases. Clear milestones. Measurable outcomes. Our process adapts to your context while maintaining the rigor that delivers results.
            </p>
          </FadeUp>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(220px,0.65fr)_minmax(0,1.35fr)] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="mb-5 text-sm font-medium text-muted-foreground">Your path with Axeera</div>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-1" role="tablist" aria-label="Project phases">
              {processSteps.map((item, index) => (
                <button
                  key={item.number}
                  id={`process-tab-${item.number}`}
                  type="button"
                  role="tab"
                  aria-selected={index === activeStep}
                  aria-controls={`process-panel-${item.number}`}
                  onClick={() => setActiveStep(index)}
                  className={cn(
                    "flex min-h-14 items-center gap-3 rounded-xl border px-4 py-3 text-left transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                    index === activeStep
                      ? "border-primary bg-primary text-primary-foreground shadow-lg"
                      : "border-border bg-surface text-foreground hover:border-primary/40 hover:bg-surface"
                  )}
                >
                  <span className={cn("font-mono text-xs", index === activeStep ? "text-on-dark/70" : "text-muted-foreground")}>{item.number}</span>
                  <span className="font-semibold">{item.title}</span>
                </button>
              ))}
            </div>
          </div>

          <motion.div
            key={step.number}
            id={`process-panel-${step.number}`}
            role="tabpanel"
            aria-labelledby={`process-tab-${step.number}`}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-[1.75rem] border border-border bg-surface p-6 shadow-sm md:p-10"
          >
            <div className="flex flex-wrap items-start justify-between gap-5 border-b border-border pb-7">
              <div>
                <div className="mb-3 flex items-center gap-2 text-sm font-medium text-primary">
                  <span className="h-px w-8 bg-primary" />
                  Phase {activeStep + 1} of {processSteps.length}
                </div>
                <h3 className="heading-2 text-3xl md:text-5xl">{step.title}</h3>
              </div>
              <div className="rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground">{step.duration}</div>
            </div>

            <p className="body-lg mt-7 max-w-2xl text-muted-foreground">{step.description}</p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {step.activities.map((activity) => (
                <div key={activity} className="flex items-center gap-3 rounded-xl border border-border/80 bg-muted/40 px-4 py-3 text-sm font-medium">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary" aria-hidden="true">✓</span>
                  {activity}
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-3 border-t border-border pt-6 text-sm text-muted-foreground">
              {processSteps.slice(0, activeStep + 1).map((item) => (
                <span key={item.number} className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  {item.title}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-16 text-center">
          <FadeUp>
            <p className="text-muted-foreground mb-4">Ready to start your project?</p>
            <Link href="/contact" className="link">
              Let&apos;s discuss your project
            </Link>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
