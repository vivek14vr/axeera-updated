"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animations/fade-up";
import { Project } from "@/data/projects";
import { ArrowRight, ExternalLink, Calendar, Users, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface WorkDetailContentProps {
  project: Project;
  relatedProjects: Project[];
}

export function WorkDetailContent({ project, relatedProjects }: WorkDetailContentProps) {
  return (
    <>
      <section className="page-hero relative min-h-[60vh] md:min-h-[70vh] flex items-center" aria-labelledby="project-title">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" aria-hidden="true" />
        <div className="container mx-auto px-6 relative z-10 py-20">
          <div className="max-w-3xl">
            <FadeUp delay={0.1}>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <Badge variant="outline">{project.industry}</Badge>
                {project.services.slice(0, 3).map((serviceSlug) => (
                  <Badge key={serviceSlug} variant="secondary">
                    {serviceSlug.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                  </Badge>
                ))}
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <h1 id="project-title" className="heading-display text-5xl md:text-6xl lg:text-7xl tracking-tighter leading-tight">
                {project.title}
              </h1>
            </FadeUp>
            <FadeUp delay={0.3}>
              <p className="body-lg text-muted-foreground mt-6 max-w-2xl">{project.shortDescription}</p>
            </FadeUp>
            <FadeUp delay={0.4}>
              <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" aria-hidden="true" />
                  <span>{project.year}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" aria-hidden="true" />
                  <span>{project.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" aria-hidden="true" />
                  <span>{project.teamSize} team members</span>
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={0.5}>
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
                  Start a Similar Project
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Link>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex min-h-11 items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2 transition-colors hover:border-primary/50"
                >
                  <span className="text-sm font-medium">Visit live project</span>
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </FadeUp>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" aria-hidden="true" />
      </section>

      <section className="section bg-background" aria-labelledby="hero-image-heading">
        <div className="container mx-auto px-6">
          <FadeUp delay={0.1}>
            <div className="relative mx-auto max-w-6xl rounded-2xl bg-muted">
              <Image
                src={project.heroImage}
                alt={`${project.title} project preview`}
                width={project.imageWidth}
                height={project.imageHeight}
                unoptimized
                className="block h-auto w-full object-contain"
                style={{ width: "100%", height: "auto", objectFit: "contain" }}
                priority
                sizes="100vw"
              />
            </div>
          </FadeUp>
        </div>
      </section>

      {project.gallery.length > 0 && (
        <section className="section bg-muted/30 border-y border-border" aria-labelledby="gallery-heading">
          <div className="container mx-auto px-6">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <FadeUp delay={0.1}>
                <span className="caption text-primary">Project gallery</span>
              </FadeUp>
              <FadeUp delay={0.2}>
                <h2 id="gallery-heading" className="heading-1 mt-3 text-4xl tracking-tight md:text-5xl">
                  A closer look at {project.title}
                </h2>
              </FadeUp>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {project.gallery.map((image, index) => (
                <FadeUp key={image} delay={index * 0.06}>
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border bg-surface">
                    <Image
                      src={image}
                      alt={`${project.title} screenshot ${index + 1}`}
                      fill
                      unoptimized
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section bg-muted/30 border-y border-border" aria-labelledby="challenge-heading">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-1">
              <FadeUp delay={0.1}>
                <h2 id="challenge-heading" className="heading-2 text-3xl md:text-4xl mb-6">The Challenge</h2>
              </FadeUp>
              <FadeUp delay={0.2}>
                <p className="body-lg text-muted-foreground">{project.challenge}</p>
              </FadeUp>
            </div>
            <div className="lg:col-span-2">
              <FadeUp delay={0.2}>
                <h3 className="heading-3 text-2xl mb-6">Our Approach</h3>
              </FadeUp>
              <FadeUp delay={0.3}>
                <p className="body-lg text-muted-foreground">{project.approach}</p>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-background" aria-labelledby="solution-heading">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeUp delay={0.1}>
              <span className="caption text-primary">The Solution</span>
            </FadeUp>
            <FadeUp delay={0.2}>
              <h2 id="solution-heading" className="heading-1 text-4xl md:text-5xl mt-3 tracking-tight">
                Building the {project.title} platform
              </h2>
            </FadeUp>
          </div>

          <div className="prose prose-muted max-w-4xl mx-auto mb-16">
            <FadeUp delay={0.3}>
              <p className="body-lg">{project.solution}</p>
            </FadeUp>
          </div>

          <FadeUp delay={0.4}>
            <h3 className="heading-3 text-2xl mb-8 text-center">Technologies Used</h3>
          </FadeUp>
          <FadeUp delay={0.5}>
            <div className="flex flex-wrap justify-center gap-3 mb-16">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="px-4 py-2 text-sm">
                  {tech}
                </Badge>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="section bg-muted/30 border-y border-border" aria-labelledby="results-heading">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeUp delay={0.1}>
              <span className="caption text-primary">Build highlights</span>
            </FadeUp>
            <FadeUp delay={0.2}>
              <h2 id="results-heading" className="heading-1 text-4xl md:text-5xl mt-3 tracking-tight">
                What shipped
              </h2>
            </FadeUp>
          </div>

          <StaggerContainer staggerDelay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.results.map((result) => (
                <StaggerItem key={result.metric}>
                  <div className="bg-surface border border-border rounded-2xl p-6 text-center">
                    <div className="heading-display text-5xl md:text-6xl font-bold tracking-tighter mb-2">{result.value}</div>
                    <div className="font-semibold text-lg mb-1">{result.metric}</div>
                    {result.description && (
                      <div className="text-sm text-muted-foreground">{result.description}</div>
                    )}
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {project.testimonial && (
        <section className="section bg-background" aria-labelledby="testimonial-heading">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <FadeUp delay={0.1}>
                <span className="caption text-primary">Client Feedback</span>
              </FadeUp>
              <FadeUp delay={0.2}>
                <blockquote className="heading-2 text-3xl md:text-4xl leading-tight mb-8">
                  &ldquo;{project.testimonial.quote}&rdquo;
                </blockquote>
              </FadeUp>
              <FadeUp delay={0.3}>
                <footer className="flex flex-col items-center gap-1">
                  <cite className="font-semibold text-lg">{project.testimonial.author}</cite>
                  <div className="text-muted-foreground text-sm">
                    {project.testimonial.role}, {project.testimonial.company}
                  </div>
                </footer>
              </FadeUp>
            </div>
          </div>
        </section>
      )}

      <section className="section bg-muted/30 border-t border-border" aria-labelledby="related-heading">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <FadeUp delay={0.1}>
              <span className="caption text-primary">Related Work</span>
            </FadeUp>
            <FadeUp delay={0.2}>
              <h2 id="related-heading" className="heading-1 text-4xl md:text-5xl mt-3 tracking-tight">
                More projects you might like
              </h2>
            </FadeUp>
          </div>

          <StaggerContainer staggerDelay={0.1}>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedProjects.map((relatedProject) => (
                <StaggerItem key={relatedProject.slug}>
                  <Link href={`/work/${relatedProject.slug}`} className="block">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.3 }}
                      className="group"
                    >
                      <div className="relative rounded-2xl bg-muted mb-4">
                        <Image
                          src={relatedProject.heroImage}
                          alt={`${relatedProject.title} project preview`}
                      width={relatedProject.imageWidth}
                      height={relatedProject.imageHeight}
                      unoptimized
                      className="block h-auto w-full object-contain"
                          style={{ width: "100%", height: "auto", objectFit: "contain" }}
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline" size="sm">{relatedProject.industry}</Badge>
                        </div>
                        
                        <h3 className="heading-3 text-xl group-hover:text-primary transition-colors">
                          {relatedProject.title}
                        </h3>
                        
                        <p className="text-muted-foreground text-sm">{relatedProject.shortDescription}</p>
                      </div>
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
              Have a similar challenge?
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how we can help you achieve similar results.
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
              Start a Conversation
              <ArrowRight className="h-6 w-6" />
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
