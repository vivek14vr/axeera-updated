"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animations/fade-up";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { projects } from "@/data/projects";
import { industries } from "@/data/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Filter } from "lucide-react";
import { useState } from "react";
import { IndustryIcon } from "@/components/shared/icon";

export function WorkPageContent() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredProjects = selectedIndustry === "all"
    ? projects
    : projects.filter((p) => p.industry.toLowerCase() === selectedIndustry.toLowerCase());

  return (
    <>
      <section className="section bg-muted/30 border-b border-border" aria-labelledby="work-hero-heading">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <FadeUp delay={0.1}>
              <span className="caption text-primary">Our Portfolio</span>
            </FadeUp>
            <FadeUp delay={0.2}>
              <h1 id="work-hero-heading" className="heading-1 text-4xl md:text-5xl lg:text-6xl mt-3 tracking-tight">
                Projects that define us
              </h1>
            </FadeUp>
            <FadeUp delay={0.3}>
              <p className="body-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
                A selection of our work across industries. Each project represents a unique challenge solved with precision and care.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="section bg-background" aria-labelledby="filters-heading">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
            <div>
              <FadeUp delay={0.1}>
                <h2 id="filters-heading" className="heading-2 text-3xl sr-only">Filter Projects</h2>
              </FadeUp>
            </div>
            
            <div className="flex flex-wrap items-center gap-3" role="group" aria-label="Filter by industry">
              <FadeUp delay={0.2}>
                <button
                  onClick={() => setSelectedIndustry("all")}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedIndustry === "all"
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "bg-surface border border-border hover:border-primary/50"
                  }`}
                  aria-pressed={selectedIndustry === "all"}
                >
                  All Projects
                </button>
              </FadeUp>
              {industries.map((industry, index) => (
                <FadeUp key={industry.slug} delay={0.2 + index * 0.05}>
                  <button
                    onClick={() => setSelectedIndustry(industry.slug)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                      selectedIndustry === industry.slug
                        ? "bg-primary text-primary-foreground shadow-lg"
                        : "bg-surface border border-border hover:border-primary/50"
                    }`}
                    aria-pressed={selectedIndustry === industry.slug}
                  >
                    <IndustryIcon slug={industry.slug} className="h-4 w-4" />
                    {industry.label}
                  </button>
                </FadeUp>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
            <div>
              <FadeUp delay={0.3}>
                <p className="text-muted-foreground">
                  Showing <span className="font-semibold">{filteredProjects.length}</span> of {projects.length} projects
                </p>
              </FadeUp>
            </div>
            
            <div className="flex items-center gap-2" role="group" aria-label="View mode">
              <FadeUp delay={0.4}>
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === "grid" ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                  }`}
                  aria-pressed={viewMode === "grid"}
                  aria-label="Grid view"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                    <rect x="3" y="3" width="7" height="7" rx="1" />
                    <rect x="14" y="3" width="7" height="7" rx="1" />
                    <rect x="3" y="14" width="7" height="7" rx="1" />
                    <rect x="14" y="14" width="7" height="7" rx="1" />
                  </svg>
                </button>
              </FadeUp>
              <FadeUp delay={0.45}>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === "list" ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                  }`}
                  aria-pressed={viewMode === "list"}
                  aria-label="List view"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </svg>
                </button>
              </FadeUp>
            </div>
          </div>

          <StaggerContainer staggerDelay={0.1}>
            {viewMode === "grid" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project, index) => (
                  <StaggerItem key={project.slug}>
                    <ScrollReveal direction="up" distance={40} threshold={0.1}>
                      <motion.article
                        initial={{ opacity: 0, y: 20 }}
                        whileHover={{ y: -4 }}
                        transition={{ duration: 0.3 }}
                        className="group"
                      >
                        <Link href={`/work/${project.slug}`} className="block">
                          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
                            <Image
                              src={project.heroImage}
                              alt=""
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-105"
                              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                              <div className="flex items-center gap-2 text-white font-medium">
                                View Case Study
                                <ArrowRight className="h-4 w-4" />
                              </div>
                            </div>
                          </div>
                          
                          <div className="mt-4 space-y-3">
                            <div className="flex flex-wrap gap-2">
                              <Badge variant="outline" size="sm">{project.industry}</Badge>
                              {project.services.slice(0, 2).map((serviceSlug) => (
                                <Badge key={serviceSlug} variant="secondary" size="sm">
                                  {serviceSlug.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                                </Badge>
                              ))}
                            </div>
                            
                            <h3 className="heading-3 text-2xl group-hover:text-primary transition-colors">
                              {project.title}
                            </h3>
                            
                            <p className="text-muted-foreground">{project.shortDescription}</p>
                            
                            <div className="flex items-center justify-between pt-2">
                              <span className="text-sm text-muted-foreground">{project.year}</span>
                              <span className="text-sm text-primary font-medium flex items-center gap-1">
                                View Details
                                <ArrowRight className="h-3.5 w-3.5" />
                              </span>
                            </div>
                          </div>
                        </Link>
                      </motion.article>
                    </ScrollReveal>
                  </StaggerItem>
                ))}
              </div>
            ) : (
              <div className="space-y-4" role="list">
                {filteredProjects.map((project, index) => (
                  <StaggerItem key={project.slug}>
                    <ScrollReveal direction="up" distance={30} threshold={0.1}>
                      <motion.article
                        initial={{ opacity: 0, x: -20 }}
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.3 }}
                        className="group"
                        role="listitem"
                      >
                        <Link href={`/work/${project.slug}`} className="block">
                          <div className="flex gap-6 p-4 bg-surface border border-border rounded-2xl hover:border-primary/50 transition-colors duration-300">
                            <div className="relative w-64 h-36 md:w-80 md:h-45 flex-shrink-0 rounded-xl overflow-hidden bg-muted">
                              <Image
                                src={project.heroImage}
                                alt=""
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                sizes="320px"
                              />
                            </div>
                            <div className="flex-1 flex flex-col justify-center space-y-3">
                              <div className="flex flex-wrap gap-2">
                                <Badge variant="outline" size="sm">{project.industry}</Badge>
                                {project.services.slice(0, 3).map((serviceSlug) => (
                                  <Badge key={serviceSlug} variant="secondary" size="sm">
                                    {serviceSlug.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                                  </Badge>
                                ))}
                              </div>
                              
                              <h3 className="heading-3 text-xl group-hover:text-primary transition-colors">
                                {project.title}
                              </h3>
                              
                              <p className="text-muted-foreground">{project.shortDescription}</p>
                              
                              <div className="flex items-center justify-between pt-2">
                                <span className="text-sm text-muted-foreground">{project.year}</span>
                                <span className="text-sm text-primary font-medium flex items-center gap-1">
                                  View Details
                                  <ArrowRight className="h-3.5 w-3.5" />
                                </span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </motion.article>
                    </ScrollReveal>
                  </StaggerItem>
                ))}
              </div>
            )}
          </StaggerContainer>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <FadeUp>
                <p className="text-muted-foreground mb-4">No projects found for this industry.</p>
                <Button variant="outline" onClick={() => setSelectedIndustry("all")}>
                  Show All Projects
                </Button>
              </FadeUp>
            </div>
          )}
        </div>
      </section>
    </>
  );
}