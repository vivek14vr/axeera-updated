"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { FadeUp } from "@/components/animations/fade-up";
import { industries, projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export function WorkPageContent() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredProjects = selectedIndustry === "all"
    ? projects
    : projects.filter((p) => p.industry === selectedIndustry);

  return (
    <>
      <section className="page-hero section border-b border-white/10" aria-labelledby="work-hero-heading">
        <div className="mx-auto max-w-[90rem] px-6 lg:px-10">
          <div className="max-w-4xl">
            <FadeUp delay={0.1}>
              <span className="caption text-primary">Our Portfolio</span>
            </FadeUp>
            <FadeUp delay={0.2}>
              <h1 id="work-hero-heading" className="heading-1 text-4xl md:text-5xl lg:text-6xl mt-3 tracking-tight">
                Projects that define us
              </h1>
            </FadeUp>
            <FadeUp delay={0.3}>
              <p className="body-lg mt-6 max-w-2xl text-muted-foreground">
                Real websites and products we have designed and built. Explore the live work, then open a case study for the thinking behind it.
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
                <FadeUp key={industry} delay={0.2 + index * 0.05}>
                  <button
                    onClick={() => setSelectedIndustry(industry)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedIndustry === industry
                        ? "bg-primary text-primary-foreground shadow-lg"
                        : "bg-surface border border-border hover:border-primary/50"
                    }`}
                    aria-pressed={selectedIndustry === industry}
                  >
                    {industry}
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

          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project) => (
                <motion.article key={project.slug} whileHover={{ y: -4 }} transition={{ duration: 0.3 }} className="group">
                  <Link href={`/work/${project.slug}`} className="block" aria-label={`Open ${project.title} case study`}>
                    <div className="relative rounded-2xl bg-muted">
                      <Image
                        src={project.heroImage}
                        alt={`${project.title} project preview`}
                        width={project.imageWidth}
                        height={project.imageHeight}
                        unoptimized
                        className="block h-auto w-full object-contain"
                        style={{ width: "100%", height: "auto", objectFit: "contain" }}
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <div className="absolute bottom-0 left-0 right-0 translate-y-full p-6 transition-transform duration-300 group-hover:translate-y-0">
                        <div className="flex items-center gap-2 font-medium text-white">
                          View case study
                          <ArrowRight className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </Link>

                  <div className="mt-4 space-y-3">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" size="sm">{project.industry}</Badge>
                      {project.services.slice(0, 2).map((serviceSlug) => (
                        <Badge key={serviceSlug} variant="secondary" size="sm">
                          {serviceSlug.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                        </Badge>
                      ))}
                    </div>
                    <h3 className="heading-3 text-2xl transition-colors group-hover:text-primary">
                      <Link href={`/work/${project.slug}`}>{project.title}</Link>
                    </h3>
                    <p className="text-muted-foreground">{project.shortDescription}</p>
                    <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                      <span className="text-sm text-muted-foreground">{project.year}</span>
                      <div className="flex items-center gap-4 text-sm font-medium">
                        <Link href={`/work/${project.slug}`} className="flex items-center gap-1 text-primary">
                          Case study <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                        <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-foreground underline underline-offset-4 hover:text-primary">
                          Live project
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="space-y-4" role="list">
              {filteredProjects.map((project) => (
                <motion.article key={project.slug} whileHover={{ x: 4 }} transition={{ duration: 0.3 }} className="group" role="listitem">
                  <div className="flex flex-col gap-6 rounded-2xl border border-border bg-surface p-4 transition-colors duration-300 hover:border-primary/50 md:flex-row">
                    <Link href={`/work/${project.slug}`} className="relative block h-48 w-full flex-shrink-0 overflow-hidden rounded-xl bg-muted md:h-36 md:w-80" aria-label={`Open ${project.title} case study`}>
                      <Image
                        src={project.heroImage}
                        alt={`${project.title} project preview`}
                        width={project.imageWidth}
                        height={project.imageHeight}
                        unoptimized
                        className="h-full w-full object-contain"
                        sizes="320px"
                      />
                    </Link>
                    <div className="flex flex-1 flex-col justify-center space-y-3">
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" size="sm">{project.industry}</Badge>
                        {project.services.slice(0, 3).map((serviceSlug) => (
                          <Badge key={serviceSlug} variant="secondary" size="sm">
                            {serviceSlug.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                          </Badge>
                        ))}
                      </div>
                      <h3 className="heading-3 text-xl transition-colors group-hover:text-primary">
                        <Link href={`/work/${project.slug}`}>{project.title}</Link>
                      </h3>
                      <p className="text-muted-foreground">{project.shortDescription}</p>
                      <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                        <span className="text-sm text-muted-foreground">{project.year}</span>
                        <div className="flex items-center gap-4 text-sm font-medium">
                          <Link href={`/work/${project.slug}`} className="flex items-center gap-1 text-primary">
                            Case study <ArrowRight className="h-3.5 w-3.5" />
                          </Link>
                          <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-foreground underline underline-offset-4 hover:text-primary">
                            Live project
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}

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
