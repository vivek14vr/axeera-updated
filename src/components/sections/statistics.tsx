"use client";

import { motion } from "motion/react";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animations/fade-up";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { Counter } from "@/components/animations/text-reveal";
import { TrendingUp, Award, Users, Globe, Zap, Shield } from "lucide-react";

const stats = [
  { icon: TrendingUp, value: 350, suffix: "%", label: "Avg. Performance Improvement", description: "Core Web Vitals across projects" },
  { icon: Award, value: 98, suffix: "%", label: "Client Retention Rate", description: "Clients returning for additional work" },
  { icon: Users, value: 45, suffix: "+", label: "Team Members", description: "Engineers, designers, strategists" },
  { icon: Globe, value: 8, suffix: "", label: "Countries", description: "Distributed team across time zones" },
  { icon: Zap, value: 15, suffix: "", label: "Avg. Sprint Velocity", description: "Story points per developer per sprint" },
  { icon: Shield, value: 0, suffix: "", label: "Critical Security Incidents", description: "In 6+ years of operation" },
];

export function Statistics() {
  return (
    <section className="section bg-primary text-primary-foreground" aria-labelledby="stats-heading">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeUp delay={0.1}>
            <span className="caption text-primary-foreground/70">By the Numbers</span>
          </FadeUp>
          <FadeUp delay={0.2}>
            <h2 id="stats-heading" className="heading-1 text-4xl md:text-5xl mt-3 tracking-tight text-on-dark">
              Measurable impact, consistently delivered
            </h2>
          </FadeUp>
          <FadeUp delay={0.3}>
            <p className="text-lg text-primary-foreground/70 mt-4">
              We track what matters. These numbers represent our cumulative impact across all client engagements.
            </p>
          </FadeUp>
        </div>

        <StaggerContainer staggerDelay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <StaggerItem key={stat.label}>
                <ScrollReveal direction="up" distance={30} threshold={0.1}>
                  <div className="text-center p-6 md:p-8">
                    <div className="w-14 h-14 rounded-xl bg-on-dark/10 flex items-center justify-center mx-auto mb-5 backdrop-blur-sm">
                      <stat.icon className="h-7 w-7" aria-hidden="true" />
                    </div>
                    <div className="mb-3">
                      <Counter
                        end={stat.value}
                        duration={2.5}
                        delay={0.1 * index}
                        className="heading-display text-5xl md:text-6xl font-bold tracking-tighter text-on-dark"
                      >
                        {stat.suffix}
                      </Counter>
                    </div>
                    <h3 className="font-semibold text-lg text-on-dark mb-1">{stat.label}</h3>
                    <p className="text-primary-foreground/60 text-sm">{stat.description}</p>
                  </div>
                </ScrollReveal>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
