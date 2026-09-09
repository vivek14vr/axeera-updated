"use client";

import { motion } from "motion/react";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animations/fade-up";
import { ScrollReveal } from "@/components/animations/scroll-reveal";

const techCategories = [
  {
    name: "Frontend",
    technologies: [
      { name: "React", color: "#61DAFB" },
      { name: "Next.js", color: "#000000" },
      { name: "TypeScript", color: "#3178C6" },
      { name: "Tailwind CSS", color: "#06B6D4" },
      { name: "Vite", color: "#646CFF" },
      { name: "Storybook", color: "#FF4785" },
    ],
  },
  {
    name: "Backend",
    technologies: [
      { name: "Node.js", color: "#339933" },
      { name: "NestJS", color: "#E0234E" },
      { name: "PostgreSQL", color: "#4169E1" },
      { name: "Redis", color: "#DC382D" },
      { name: "GraphQL", color: "#E10098" },
      { name: "tRPC", color: "#2596BE" },
    ],
  },
  {
    name: "Cloud & DevOps",
    technologies: [
      { name: "AWS", color: "#FF9900" },
      { name: "Kubernetes", color: "#326CE5" },
      { name: "Terraform", color: "#7B42BC" },
      { name: "Docker", color: "#2496ED" },
      { name: "GitHub Actions", color: "#2088FF" },
      { name: "ArgoCD", color: "#EF7B4D" },
    ],
  },
  {
    name: "Data & AI",
    technologies: [
      { name: "Python", color: "#3776AB" },
      { name: "PyTorch", color: "#EE4C2C" },
      { name: "LangChain", color: "#1C3C3C" },
      { name: "Pinecone", color: "#00D4AA" },
      { name: "MLflow", color: "#0194E2" },
      { name: "Apache Kafka", color: "#231F20" },
    ],
  },
  {
    name: "Mobile",
    technologies: [
      { name: "React Native", color: "#61DAFB" },
      { name: "Expo", color: "#000020" },
      { name: "Swift", color: "#FA7343" },
      { name: "Kotlin", color: "#7F52FF" },
      { name: "Fastlane", color: "#42A5F5" },
      { name: "Detox", color: "#6B3FA0" },
    ],
  },
  {
    name: "Quality & Observability",
    technologies: [
      { name: "Playwright", color: "#2EAD33" },
      { name: "Vitest", color: "#6E9F18" },
      { name: "Sentry", color: "#362D59" },
      { name: "Datadog", color: "#632CA6" },
      { name: "OpenTelemetry", color: "#00479D" },
      { name: "Grafana", color: "#F46800" },
    ],
  },
];

export function Technologies() {
  return (
    <section className="section bg-muted/30" aria-labelledby="tech-heading">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeUp delay={0.1}>
            <span className="caption text-primary">Technologies</span>
          </FadeUp>
          <FadeUp delay={0.2}>
            <h2 id="tech-heading" className="heading-1 text-4xl md:text-5xl mt-3 tracking-tight">
              Modern stack, pragmatic choices
            </h2>
          </FadeUp>
          <FadeUp delay={0.3}>
            <p className="body-lg text-muted-foreground mt-4">
              We choose technologies for longevity, team velocity, and ecosystem maturity—not hype. Our stack evolves deliberately.
            </p>
          </FadeUp>
        </div>

        <StaggerContainer staggerDelay={0.1}>
          <div className="grid gap-4 md:grid-cols-2">
          {techCategories.map((category, catIndex) => (
            <StaggerItem key={category.name}>
              <ScrollReveal direction="up" distance={30} threshold={0.1}>
                <div className="bg-surface border border-border rounded-2xl p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5 text-primary">
                        <rect x="2" y="3" width="20" height="14" rx="2" />
                        <path d="M8 21h8M12 17v4" />
                      </svg>
                    </div>
                    <h3 className="heading-3 text-xl">{category.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {category.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: catIndex * 0.1 + techIndex * 0.05, duration: 0.3 }}
                        className="group relative"
                        whileHover={{ y: -2 }}
                      >
                        <div className="relative px-4 py-2.5 rounded-xl border border-border bg-surface transition-all duration-300 flex items-center gap-2.5 min-w-[140px]">
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary" aria-hidden="true">
                            <span className="text-on-dark font-semibold text-sm">
                              {tech.name.charAt(0)}
                            </span>
                          </div>
                          <span className="font-medium text-sm">{tech.name}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </StaggerItem>
          ))}
          </div>
        </StaggerContainer>

        <div className="mt-16">
          <FadeUp>
            <div className="bg-primary rounded-2xl p-8 md:p-12 text-center">
              <h3 className="heading-2 text-3xl md:text-4xl text-on-dark mb-4">
                Don&apos;t see your stack?
              </h3>
              <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
                We&apos;re technology agnostic. Our engineers adapt to your existing stack or recommend the right tools for the job.
              </p>
              <a href="/contact" className="inline-flex items-center gap-2 bg-surface text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary-foreground/90 transition-colors">
                Discuss Your Stack
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
