"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animations/fade-up";
import { services } from "@/data/services";
import { ServiceIcon } from "@/components/shared/icon";
import { cn } from "@/lib/utils";

export function ServicesOverview() {
  const featuredServices = services.slice(0, 6);

  return (
    <section className="section bg-background" aria-labelledby="services-heading">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <FadeUp delay={0.1}>
              <span className="caption text-primary">What We Do</span>
            </FadeUp>
            <FadeUp delay={0.2}>
              <h2 id="services-heading" className="heading-1 text-4xl md:text-5xl mt-3 tracking-tight">
                Services designed for impact
              </h2>
            </FadeUp>
            <FadeUp delay={0.3}>
              <p className="body-lg text-muted-foreground mt-4">
                From strategy to launch and beyond, we provide end-to-end digital services that solve complex business challenges.
              </p>
            </FadeUp>
          </div>
          <FadeUp delay={0.4}>
            <Link 
              href="/services" 
              className={cn(
                "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                "disabled:opacity-50 disabled:pointer-events-none",
                "active:scale-[0.98]",
                "border border-border bg-transparent hover:bg-muted hover:shadow-lg hover:-translate-y-0.5 px-8 py-4 text-base"
              )}
            >
              View All Services
            </Link>
          </FadeUp>
        </div>

        <StaggerContainer staggerDelay={0.1} delayChildren={0.1}>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service, index) => (
              <StaggerItem key={service.slug}>
                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className={cn("group h-full", index === 0 && "lg:col-span-2")}
                >
                  <Card variant="outlined" padding="none" className="h-full overflow-hidden border-border/80 bg-surface transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary/40 group-hover:shadow-xl">
                    <CardContent className="flex h-full flex-col p-6 md:p-7">
                      <div className="mb-5 flex items-start justify-between gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary transition-colors duration-300 group-hover:bg-primary">
                        <ServiceIcon slug={service.slug} className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                        </div>
                        <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">0{index + 1}</span>
                      </div>
                      <CardHeader className="mb-3 p-0">
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                      </CardHeader>
                      <p className="mb-6 max-w-2xl text-muted-foreground">{service.shortDescription}</p>
                      <ul className="mb-7 grid gap-2 sm:grid-cols-2" role="list">
                        {service.capabilities.slice(0, 4).map((capability) => (
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
                      <Link
                        href={`/services/${service.slug}`} 
                        className={cn(
                          "mt-auto inline-flex items-center justify-start gap-2 px-0 text-sm font-semibold text-primary transition-colors hover:text-deep",
                          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        )}
                      >
                        Learn more
                        <motion.span
                          className="transition-transform duration-200 group-hover:translate-x-1"
                          aria-hidden="true"
                        >
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </motion.span>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.article>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>

      </div>
    </section>
  );
}
