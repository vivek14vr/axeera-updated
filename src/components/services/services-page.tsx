"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animations/fade-up";
import { services, serviceCategories } from "@/data/services";
import { Code, Box, PenTool, Smartphone, RefreshCw, Cloud, Brain, ShoppingCart, MessageSquare, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ServiceIcon } from "@/components/shared/icon";

export function ServicesPageContent() {
  return (
    <>
      <section className="page-hero section border-b border-white/10" aria-labelledby="services-hero-heading">
        <div className="mx-auto max-w-[90rem] px-6 lg:px-10">
          <div className="max-w-4xl">
            <FadeUp delay={0.1}>
              <span className="caption text-primary">Our Services</span>
            </FadeUp>
            <FadeUp delay={0.2}>
              <h1 id="services-hero-heading" className="heading-1 text-4xl md:text-5xl lg:text-6xl mt-3 tracking-tight">
                Services designed for business impact
              </h1>
            </FadeUp>
            <FadeUp delay={0.3}>
              <p className="body-lg mt-6 max-w-2xl text-muted-foreground">
                From strategy to launch and beyond, we provide end-to-end digital services that solve complex challenges and create measurable outcomes.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="section bg-background" aria-labelledby="services-categories-heading">
        <div className="container mx-auto px-6">
          <StaggerContainer staggerDelay={0.15}>
            {serviceCategories.map((category, catIndex) => (
              <StaggerItem key={category.name}>
                <div className="mb-16 lg:mb-20">
                  <FadeUp>
                    <h2 className="heading-2 text-3xl md:text-4xl mb-8">{category.name}</h2>
                  </FadeUp>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.slugs.map((slug, index) => {
                      const service = services.find((s) => s.slug === slug);
                      if (!service) return null;
                      
                      return (
                        <StaggerItem key={service.slug}>
                          <motion.article
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -4 }}
                            transition={{ duration: 0.3 }}
                            className="group"
                          >
                            <Link href={`/services/${service.slug}`}>
                              <Card variant="outlined" padding="none" className="h-full group-hover:border-primary/50 transition-colors duration-300">
                                <CardContent className="p-6 md:p-8">
                                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                                    <ServiceIcon slug={service.slug} className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                                  </div>
                                  <CardHeader className="mb-4">
                                    <CardTitle className="text-xl">{service.title}</CardTitle>
                                    <CardDescription className="mt-2">{service.shortDescription}</CardDescription>
                                  </CardHeader>
                                  <ul className="space-y-2 mb-6" role="list">
                                    {service.capabilities.slice(0, 5).map((capability) => (
                                      <li key={capability} className="flex items-start gap-2 text-sm text-muted-foreground">
                                        <motion.span
                                          initial={{ opacity: 0, x: -10 }}
                                          animate={{ opacity: 1, x: 0 }}
                                          transition={{ delay: 0.1 }}
                                          className="h-4 w-4 flex-shrink-0 text-primary"
                                        >
                                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <path d="M20 6L9 17l-5-5" />
                                          </svg>
                                        </motion.span>
                                        {capability}
                                      </li>
                                    ))}
                                  </ul>
                                  <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all duration-200">
                                    <span>View Details</span>
                                    <motion.span
                                      className="inline-block transition-transform duration-200 group-hover:translate-x-1"
                                      aria-hidden="true"
                                    >
                                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                      </svg>
                                    </motion.span>
                                  </div>
                                </CardContent>
                              </Card>
                            </Link>
                          </motion.article>
                        </StaggerItem>
                      );
                    })}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div className="mt-16 text-center">
            <FadeUp>
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
                Discuss Your Project
              </Link>
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  );
}
