"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animations/fade-up";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { TextReveal } from "@/components/animations/text-reveal";
import { Service } from "@/data/services";
import { Code, Box, PenTool, Smartphone, RefreshCw, Cloud, Brain, ShoppingCart, MessageSquare, Wrench, CheckCircle, ArrowRight, Users, Clock, Layers, Target, Zap, Shield } from "lucide-react";
import { ServiceIcon } from "@/components/shared/icon";
import { cn } from "@/lib/utils";

interface ServiceDetailContentProps {
  service: Service;
  relatedServices: Service[];
}

export function ServiceDetailContent({ service, relatedServices }: ServiceDetailContentProps) {
  return (
    <>
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center overflow-hidden" aria-labelledby="service-title">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" aria-hidden="true" />
        <div className="container mx-auto px-6 relative z-10 py-20">
          <div className="max-w-3xl">
            <FadeUp delay={0.1}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <ServiceIcon slug={service.slug} className="h-4 w-4" />
                {service.title}
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <h1 id="service-title" className="heading-display text-5xl md:text-6xl lg:text-7xl tracking-tighter leading-tight">
                {service.title}
              </h1>
            </FadeUp>
            <FadeUp delay={0.3}>
              <p className="body-lg text-muted-foreground mt-6 max-w-2xl">{service.description}</p>
            </FadeUp>
            <FadeUp delay={0.4}>
              <div className="flex flex-wrap items-center gap-4 mt-8">
                <Link 
                  href="/contact" 
                  className={cn(
                    "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                    "disabled:opacity-50 disabled:pointer-events-none",
                    "active:scale-[0.98]",
                    "bg-primary text-primary-foreground hover:shadow-lg hover:-translate-y-0.5 px-8 py-4 text-base"
                  )}
                >
                  Start a Project
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Link>
                <Link 
                  href="/work" 
                  className={cn(
                    "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                    "disabled:opacity-50 disabled:pointer-events-none",
                    "active:scale-[0.98]",
                    "border border-border bg-transparent hover:bg-muted hover:shadow-lg hover:-translate-y-0.5 px-8 py-4 text-base"
                  )}
                >
                  View Related Work
                </Link>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="section bg-background border-y border-border" aria-labelledby="overview-heading">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-2">
              <FadeUp delay={0.1}>
                <h2 id="overview-heading" className="heading-2 text-3xl md:text-4xl mb-6">Service Overview</h2>
              </FadeUp>
              <FadeUp delay={0.2}>
                <div className="prose prose-muted max-w-none space-y-6">
                  <p className="body-lg">{service.description}</p>
                  <p className="body-lg">Our approach combines technical excellence with strategic thinking to deliver solutions that scale with your business.</p>
                </div>
              </FadeUp>
              
              <FadeUp delay={0.3} className="mt-10">
                <h3 className="heading-3 text-2xl mb-6">Key Capabilities</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {service.capabilities.map((capability, index) => (
                    <motion.div
                      key={capability}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className="flex items-start gap-3 p-4 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="h-5 w-5 text-primary" aria-hidden="true" />
                      </div>
                      <span className="font-medium">{capability}</span>
                    </motion.div>
                  ))}
                </div>
              </FadeUp>
            </div>

            <div className="space-y-8">
              <FadeUp delay={0.2}>
                <Card variant="outlined" padding="none">
                  <CardContent className="p-6">
                    <h3 className="heading-3 text-xl mb-6 flex items-center gap-2">
                      <Layers className="h-5 w-5 text-primary" />
                      Technologies We Use
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="gap-1">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </FadeUp>

              <FadeUp delay={0.3}>
                <Card variant="outlined" padding="none">
                  <CardContent className="p-6">
                    <h3 className="heading-3 text-xl mb-6 flex items-center gap-2">
                      <Target className="h-5 w-5 text-primary" />
                      Business Benefits
                    </h3>
                    <ul className="space-y-3" role="list">
                      {service.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckCircle className="h-3.5 w-3.5 text-primary" />
                          </div>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </FadeUp>

              <FadeUp delay={0.4}>
                <Link 
                  href="/contact" 
                  className={cn(
                    "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                    "disabled:opacity-50 disabled:pointer-events-none",
                    "active:scale-[0.98]",
                    "bg-primary text-primary-foreground hover:shadow-lg hover:-translate-y-0.5 px-8 py-4 text-base w-full"
                  )}
                >
                  Start Your Project
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-muted/30" aria-labelledby="process-heading">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeUp delay={0.1}>
              <span className="caption text-primary">Our Process</span>
            </FadeUp>
            <FadeUp delay={0.2}>
              <h2 id="process-heading" className="heading-1 text-4xl md:text-5xl mt-3 tracking-tight">
                How we deliver {service.title.toLowerCase()} projects
              </h2>
            </FadeUp>
          </div>

          <StaggerContainer staggerDelay={0.1}>
            {service.process.map((step, index) => (
              <StaggerItem key={step.number}>
                <ScrollReveal direction={index % 2 === 0 ? "left" : "right"} distance={40} threshold={0.1}>
                  <div className="relative flex flex-col lg:flex-row gap-8 mb-16 lg:mb-20 items-start">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground font-display font-bold text-2xl flex-shrink-0 z-10">
                      {step.number}
                    </div>
                    
                    <div className="flex-1 lg:w-1/2 p-6 bg-surface border border-border rounded-2xl">
                      <div className="flex items-center gap-2 text-sm text-primary font-medium mb-2">
                        <span className="w-8 h-px bg-primary" />
                        Phase {index + 1}
                      </div>
                      <h3 className="heading-2 text-2xl md:text-3xl mb-3">{step.title}</h3>
                      <p className="text-muted-foreground mb-4">{step.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {step.deliverables.map((deliverable) => (
                          <span key={deliverable} className="px-3 py-1 text-xs bg-muted rounded-full text-muted-foreground">
                            {deliverable}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="section bg-background" aria-labelledby="faqs-heading">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeUp delay={0.1}>
              <span className="caption text-primary">FAQ</span>
            </FadeUp>
            <FadeUp delay={0.2}>
              <h2 id="faqs-heading" className="heading-1 text-4xl md:text-5xl mt-3 tracking-tight">
                Common questions about {service.title.toLowerCase()}
              </h2>
            </FadeUp>
          </div>

          <div className="max-w-3xl mx-auto">
            <StaggerContainer staggerDelay={0.1}>
              {service.faqs.map((faq, index) => (
                <StaggerItem key={index}>
                  <FadeUp>
                    <details className="group bg-surface border border-border rounded-xl overflow-hidden mb-4">
                      <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                        <span className="font-semibold text-lg pr-4">{faq.question}</span>
                        <motion.div
                          className="w-6 h-6 rounded-full border border-border flex items-center justify-center flex-shrink-0 transition-transform duration-300"
                          animate={{ rotate: 0 }}
                        >
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                            <path d="M6 9l6 6 6-6" />
                          </svg>
                        </motion.div>
                      </summary>
                      <div className="px-6 pb-6 text-muted-foreground animate-in slide-down fade-in duration-300">
                        {faq.answer}
                      </div>
                    </details>
                  </FadeUp>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      <section className="section bg-muted/30 border-t border-border" aria-labelledby="related-heading">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <FadeUp delay={0.1}>
              <span className="caption text-primary">Related Services</span>
            </FadeUp>
            <FadeUp delay={0.2}>
              <h2 id="related-heading" className="heading-1 text-4xl md:text-5xl mt-3 tracking-tight">
                Often combined with
              </h2>
            </FadeUp>
          </div>

          <StaggerContainer staggerDelay={0.1}>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedServices.map((relatedService, index) => (
                <StaggerItem key={relatedService.slug}>
                  <Link href={`/services/${relatedService.slug}`} className="block">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.3 }}
                      className="bg-surface border border-border rounded-2xl p-6 h-full hover:border-primary/50 transition-colors duration-300"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                        <ServiceIcon slug={relatedService.slug} className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-xl mb-2">{relatedService.title}</h3>
                      <p className="text-muted-foreground mb-4">{relatedService.shortDescription}</p>
                      <span className="text-primary font-medium flex items-center gap-1">
                        Learn more
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </motion.div>
                  </Link>
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
              Ready to start your {service.title.toLowerCase()} project?
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss your requirements and explore how we can help you achieve your goals.
            </p>
          </FadeUp>
          <FadeUp delay={0.3}>
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
              Get in Touch
              <ArrowRight className="h-6 w-6" />
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
