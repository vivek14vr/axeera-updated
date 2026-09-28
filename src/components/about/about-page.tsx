"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animations/fade-up";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { TextReveal } from "@/components/animations/text-reveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Target, Users, Lightbulb, Globe, CheckCircle, Award, TrendingUp, Heart, Code, Zap, Shield, BookOpen } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const values = [
  { icon: Target, title: "Outcomes Over Output", description: "We measure success by business impact, not lines of code or hours billed." },
  { icon: Users, title: "Partnership, Not Vendor", description: "We embed with your team, share risk, and celebrate wins together." },
  { icon: Lightbulb, title: "Clarity Through Complexity", description: "We distill complex technical challenges into clear, actionable paths forward." },
  { icon: Globe, title: "Build for Scale", description: "Every decision considers the next 10x. Technical debt is a choice we make intentionally." },
];

const principles = [
  { icon: Code, title: "Code as Craft", description: "Clean architecture, comprehensive tests, and thoughtful abstractions are non-negotiable." },
  { icon: Zap, title: "Ship Fast, Learn Faster", description: "Short feedback loops, continuous delivery, and data-driven iteration." },
  { icon: Shield, title: "Security by Default", description: "Threat modeling, secure coding practices, and automated security scanning in every pipeline." },
  { icon: BookOpen, title: "Document Decisions", description: "Architecture Decision Records, runbooks, and knowledge sharing are part of the deliverable." },
];

const teamMembers = [
  { name: "Sarah Chen", role: "Principal Engineer", bio: "Former Staff Engineer at Stripe. Leads platform engineering practice.", avatar: "/images/authors/sarah-chen.svg" },
  { name: "Marcus Rodriguez", role: "VP Engineering", bio: "15+ years at Google, Airbnb, and high-growth startups. Oversees engineering delivery.", avatar: "/images/authors/marcus-rodriguez.svg" },
  { name: "Priya Sharma", role: "Design Director", bio: "Created design systems for Fortune 500 and unicorns. Accessibility advocate.", avatar: "/images/authors/priya-sharma.svg" },
  { name: "James Patterson", role: "Cloud Architect", bio: "AWS Hero, CNCF Ambassador. Author of 'Cloud Native Patterns'.", avatar: "/images/authors/james-patterson.svg" },
  { name: "Dr. Elena Volkov", role: "AI Research Lead", bio: "PhD ML from MIT. Former OpenAI, DeepMind. Focuses on production ML systems.", avatar: "/images/authors/elena-volkov.svg" },
  { name: "David Park", role: "Principal Designer", bio: "Led design at Figma and Notion. Expert in design systems and developer experience.", avatar: "/images/team/david-park.jpg" },
];

const stats = [
  { icon: TrendingUp, value: "50+", label: "Projects Delivered" },
  { icon: Users, value: "45+", label: "Team Members" },
  { icon: Globe, value: "8", label: "Countries" },
  { icon: Award, value: "98%", label: "Client Satisfaction" },
  { icon: Heart, value: "100%", label: "Remote-First" },
  { icon: Code, value: "12+", label: "Avg. Years Exp." },
];

export function AboutPageContent() {
  return (
    <>
      <section className="page-hero relative flex min-h-[60vh] items-center border-b border-white/10 md:min-h-[70vh]" aria-labelledby="about-title">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" aria-hidden="true" />
        <div className="relative z-10 mx-auto w-full max-w-[90rem] px-6 py-20 lg:px-10">
          <div className="max-w-4xl">
            <FadeUp delay={0.1}>
              <span className="caption text-primary">About Axeera</span>
            </FadeUp>
            <FadeUp delay={0.2}>
              <h1 id="about-title" className="heading-display text-5xl md:text-6xl lg:text-7xl tracking-tighter leading-tight">
                We&apos;re engineers, designers, and strategists united by a craft obsession.
              </h1>
            </FadeUp>
            <FadeUp delay={0.3}>
              <p className="body-lg text-muted-foreground mt-6 max-w-2xl">
                Founded in 2018, Axeera began with a simple belief: the best digital products come from teams that care deeply about the craft and the outcome.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="section bg-background" aria-labelledby="story-heading">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <FadeUp delay={0.1}>
                <span className="caption text-primary">Our Story</span>
              </FadeUp>
              <FadeUp delay={0.2}>
                <h2 id="story-heading" className="heading-1 text-4xl md:text-5xl mt-3 tracking-tight">
                  From a garage to global impact
                </h2>
              </FadeUp>
              <FadeUp delay={0.3}>
                <div className="prose prose-muted max-w-none mt-6 space-y-4">
                  <p className="body-lg">
                    Three engineers who met at a hackathon in 2017 shared a frustration: brilliant ideas were dying in execution. Not because the technology was hard, but because teams lacked the blend of strategic thinking, design craft, and engineering rigor needed to ship great products.
                  </p>
                  <p className="body-lg">
                    We started Axeera in 2018 with a laptop, a whiteboard, and a commitment to do things differently. No sales team. No middle management. Just senior practitioners who own outcomes end-to-end.
                  </p>
                  <p className="body-lg">
                    Today, we&apos;re 45+ people across 8 countries. We&apos;ve delivered 50+ projects for clients ranging from funded startups to Fortune 500 enterprises. But our operating principle hasn&apos;t changed: senior talent, direct communication, measurable results.
                  </p>
                </div>
              </FadeUp>
            </div>
            <div className="relative">
              <FadeUp delay={0.4}>
                <div className="aspect-square rounded-2xl overflow-hidden bg-muted relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5" />
                  <div className="relative p-8">
                    <div className="space-y-6">
                      {stats.map((stat, index) => (
                        <motion.div
                          key={stat.label}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 * index }}
                          className="flex items-center gap-4 p-4 bg-surface/80 backdrop-blur-sm rounded-xl border border-border/50"
                        >
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <stat.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                          </div>
                          <div>
                            <div className="heading-display text-3xl font-bold tracking-tighter">{stat.value}</div>
                            <div className="text-sm text-muted-foreground">{stat.label}</div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-muted/30 border-y border-border" aria-labelledby="values-heading">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeUp delay={0.1}>
              <span className="caption text-primary">Our Values</span>
            </FadeUp>
            <FadeUp delay={0.2}>
              <h2 id="values-heading" className="heading-1 text-4xl md:text-5xl mt-3 tracking-tight">
                The principles that guide every decision
              </h2>
            </FadeUp>
          </div>

          <StaggerContainer staggerDelay={0.1}>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <StaggerItem key={value.title}>
                  <ScrollReveal direction="up" distance={30} threshold={0.1}>
                    <div className="p-6 bg-surface border border-border rounded-2xl hover:border-primary/50 transition-colors duration-300 h-full">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                        <value.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </ScrollReveal>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      <section className="section bg-background" aria-labelledby="principles-heading">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeUp delay={0.1}>
              <span className="caption text-primary">Engineering Principles</span>
            </FadeUp>
            <FadeUp delay={0.2}>
              <h2 id="principles-heading" className="heading-1 text-4xl md:text-5xl mt-3 tracking-tight">
                How we build software that lasts
              </h2>
            </FadeUp>
          </div>

          <StaggerContainer staggerDelay={0.1}>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {principles.map((principle, index) => (
                <StaggerItem key={principle.title}>
                  <ScrollReveal direction="up" distance={30} threshold={0.1}>
                    <div className="p-6 bg-surface border border-border rounded-2xl hover:border-primary/50 transition-colors duration-300 h-full">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                        <principle.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{principle.title}</h3>
                      <p className="text-muted-foreground">{principle.description}</p>
                    </div>
                  </ScrollReveal>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      <section className="section bg-muted/30 border-y border-border" aria-labelledby="team-heading">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeUp delay={0.1}>
              <span className="caption text-primary">Our Team</span>
            </FadeUp>
            <FadeUp delay={0.2}>
              <h2 id="team-heading" className="heading-1 text-4xl md:text-5xl mt-3 tracking-tight">
                Senior practitioners, not junior resources
              </h2>
            </FadeUp>
            <FadeUp delay={0.3}>
              <p className="body-lg text-muted-foreground mt-4">
                Every project is led by principals with 10+ years of experience. No bait-and-switch.
              </p>
            </FadeUp>
          </div>

          <StaggerContainer staggerDelay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <StaggerItem key={member.name}>
                  <ScrollReveal direction="up" distance={30} threshold={0.1}>
                    <div className="bg-surface border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-colors duration-300">
                      <div className="aspect-square relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5" />
                        <div className="relative h-full flex items-end p-6">
                          <div>
                            <h3 className="font-semibold text-lg text-white">{member.name}</h3>
                            <p className="text-primary-foreground/80 text-sm">{member.role}</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span>12+ years exp.</span>
                          <span>•</span>
                          <span>Remote-first</span>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      <section className="section bg-primary text-primary-foreground" aria-labelledby="cta-heading">
        <div className="container mx-auto px-6 text-center">
          <FadeUp delay={0.1}>
            <h2 id="cta-heading" className="heading-1 text-4xl md:text-5xl tracking-tight mb-6">
              Want to work with us?
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              We&apos;re always looking for exceptional engineers, designers, and strategists who share our obsession with craft.
            </p>
          </FadeUp>
          <FadeUp delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/contact" 
                className={cn(
                  "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                  "disabled:opacity-50 disabled:pointer-events-none",
                  "active:scale-[0.98]",
                  "bg-white text-primary hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5 px-10 py-5 text-lg"
                )}
              >
                Join Our Team
                <ArrowRight className="h-6 w-6" />
              </Link>
              <Link 
                href="/work" 
                className={cn(
                  "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                  "disabled:opacity-50 disabled:pointer-events-none",
                  "active:scale-[0.98]",
                  "border border-white/30 text-white hover:bg-white/10 px-10 py-5 text-lg"
                )}
              >
                View Our Work
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
