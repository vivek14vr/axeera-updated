"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animations/fade-up";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { projects } from "@/data/projects";
import { ArrowRight, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

function ProjectVisual({ project, featured }: { project: (typeof projects)[number]; featured: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imageY = useSpring(useTransform(scrollYProgress, [0, 1], [18, -18]), { stiffness: 90, damping: 26 });

  return (
    <div ref={ref} className={cn("relative overflow-hidden rounded-[1.5rem] bg-deep", featured ? "aspect-[16/10]" : "aspect-[4/3]")}>
      <motion.div style={prefersReducedMotion ? undefined : { y: imageY }} className="absolute -inset-y-5 inset-x-0 will-change-transform">
        <Image
          src={project.heroImage}
          alt={`${project.title} project preview`}
          fill
          unoptimized
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          priority={featured}
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="absolute bottom-0 left-0 right-0 translate-y-full p-6 transition-transform duration-300 group-hover:translate-y-0">
        <div className="flex items-center gap-2 font-medium text-on-dark">
          View Case Study
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}

export function FeaturedWork() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="section bg-work text-on-dark" aria-labelledby="work-heading">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <FadeUp delay={0.1}>
              <span className="caption text-accent-bright">Featured Work</span>
            </FadeUp>
            <FadeUp delay={0.2}>
              <h2 id="work-heading" className="heading-1 mt-3 text-4xl tracking-tight md:text-5xl">
                Projects that define us
              </h2>
            </FadeUp>
            <FadeUp delay={0.3}>
              <p className="body-lg mt-4 text-on-dark/65">
                A selection of our recent work across industries. Each project represents a unique challenge solved with precision and care.
              </p>
            </FadeUp>
          </div>
          <FadeUp delay={0.4}>
            <Link 
              href="/work" 
              className={cn(
                "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                "disabled:opacity-50 disabled:pointer-events-none",
                "active:scale-[0.98]",
                "border border-on-dark/20 bg-on-dark/5 text-on-dark hover:bg-on-dark/10 hover:shadow-lg hover:-translate-y-0.5 px-8 py-4 text-base"
              )}
            >
              View All Projects
            </Link>
          </FadeUp>
        </div>

        <StaggerContainer staggerDelay={0.15}>
          <div className="grid gap-10 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <StaggerItem key={project.slug} className={index === 0 ? "lg:col-span-2" : undefined}>
                <ScrollReveal direction="up" distance={40} threshold={0.1}>
                  <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                    className="group relative"
                  >
                    <Link href={`/work/${project.slug}`} className="block">
                      <ProjectVisual project={project} featured={index === 0} />
                      
                      <div className="mt-4 space-y-3">
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline" size="sm" className="border-on-dark/25 text-on-dark">{project.industry}</Badge>
                          {project.services.slice(0, 2).map((serviceSlug) => (
                            <Badge key={serviceSlug} variant="secondary" size="sm" className="bg-on-dark/10 text-on-dark">
                              {serviceSlug.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                            </Badge>
                          ))}
                        </div>
                        
                        <h3 className="heading-3 text-2xl text-on-dark transition-colors group-hover:text-accent-bright">
                          {project.title}
                        </h3>
                        
                        <p className="text-on-dark/65">{project.shortDescription}</p>

                        <div className="flex items-baseline gap-2 border-l-2 border-accent-bright pl-3 pt-1">
                          <span className="font-display text-xl font-semibold text-on-dark">{project.results[0]?.value}</span>
                          <span className="text-sm text-on-dark/55">{project.results[0]?.metric}</span>
                        </div>
                        
                        <div className="flex items-center justify-between pt-2">
                          <span className="text-sm text-on-dark/50">{project.year}</span>
                          <motion.span
                            initial={{ opacity: 0, x: -10 }}
                            whileHover={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-1 text-sm font-medium text-accent-bright"
                          >
                            <ExternalLink className="h-3 w-3" />
                            Details
                          </motion.span>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                </ScrollReveal>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>

        <div className="mt-16 text-center">
          <FadeUp>
            <Link 
              href="/work" 
              className={cn(
                "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                "disabled:opacity-50 disabled:pointer-events-none",
                "active:scale-[0.98]",
                "bg-surface text-foreground hover:bg-accent-soft hover:shadow-lg hover:-translate-y-0.5 px-8 py-4 text-base"
              )}
            >
              View All Projects
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
