"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animations/fade-up";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { articles, categories } from "@/data/articles";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, Filter, Tag } from "lucide-react";
import { useState } from "react";
import { formatDate } from "@/lib/utils";

export function InsightsPageContent() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredArticles = selectedCategory === "all"
    ? articles
    : articles.filter((a) => a.category === selectedCategory);

  const featuredArticles = articles.filter((a) => a.featured).slice(0, 3);

  return (
    <>
      <section className="page-hero section border-b border-white/10" aria-labelledby="insights-hero-heading">
        <div className="mx-auto max-w-[90rem] px-6 lg:px-10">
          <div className="max-w-4xl">
            <FadeUp delay={0.1}>
              <span className="caption text-primary">Insights</span>
            </FadeUp>
            <FadeUp delay={0.2}>
              <h1 id="insights-hero-heading" className="heading-1 text-4xl md:text-5xl lg:text-6xl mt-3 tracking-tight">
                Thinking out loud
              </h1>
            </FadeUp>
            <FadeUp delay={0.3}>
              <p className="body-lg mt-6 max-w-2xl text-muted-foreground">
                Thought leadership on digital product development, cloud engineering, AI, design systems, and technology strategy.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="section bg-background" aria-labelledby="featured-heading">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <FadeUp delay={0.1}>
                <h2 id="featured-heading" className="heading-2 text-3xl">Featured Articles</h2>
              </FadeUp>
            </div>
          </div>

          <StaggerContainer staggerDelay={0.15}>
            <div className="grid lg:grid-cols-3 gap-8">
              {featuredArticles.map((article, index) => (
                <StaggerItem key={article.slug}>
                  <ScrollReveal direction="up" distance={40} threshold={0.1}>
                    <Link href={`/insights/${article.slug}`} className="block">
                      <article className="bg-surface border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-colors duration-300 h-full flex flex-col">
                        <div className="relative aspect-[16/9] overflow-hidden">
                          <Image
                            src={article.featuredImage}
                            alt=""
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 33vw"
                          />
                          <div className="absolute top-4 left-4">
                            <Badge variant="secondary">{article.category}</Badge>
                          </div>
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                          <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                            <span>{formatDate(article.publishedAt)}</span>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-3.5 w-3.5" />
                              {article.readingTime} min read
                            </span>
                          </div>
                          <h3 className="heading-3 text-xl mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                            {article.title}
                          </h3>
                          <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-1">{article.description}</p>
                          <div className="flex items-center gap-2 text-primary font-medium">
                            Read Article
                            <ArrowRight className="h-4 w-4" />
                          </div>
                        </div>
                      </article>
                    </Link>
                  </ScrollReveal>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      <section className="section bg-muted/30 border-y border-border" aria-labelledby="all-articles-heading">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
            <div>
              <FadeUp delay={0.1}>
                <h2 id="all-articles-heading" className="heading-2 text-3xl">All Articles</h2>
              </FadeUp>
            </div>
            
            <div className="flex flex-wrap items-center gap-3" role="group" aria-label="Filter by category">
              <FadeUp delay={0.2}>
                <button
                  onClick={() => setSelectedCategory("all")}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === "all"
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "bg-surface border border-border hover:border-primary/50"
                  }`}
                  aria-pressed={selectedCategory === "all"}
                >
                  All Categories
                </button>
              </FadeUp>
              {categories.map((category, index) => (
                <FadeUp key={category} delay={0.2 + index * 0.05}>
                  <button
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                      selectedCategory === category
                        ? "bg-primary text-primary-foreground shadow-lg"
                        : "bg-surface border border-border hover:border-primary/50"
                    }`}
                    aria-pressed={selectedCategory === category}
                  >
                    <Tag className="h-4 w-4" aria-hidden="true" />
                    {category}
                  </button>
                </FadeUp>
              ))}
            </div>
          </div>

          <StaggerContainer staggerDelay={0.1}>
            <div className="space-y-4" role="list">
              {filteredArticles.map((article, index) => (
                <StaggerItem key={article.slug}>
                  <ScrollReveal direction="up" distance={30} threshold={0.1}>
                    <Link href={`/insights/${article.slug}`} className="block">
                      <motion.article
                        initial={{ opacity: 0, x: -20 }}
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.3 }}
                        className="group flex gap-6 p-4 bg-surface border border-border rounded-2xl hover:border-primary/50 transition-colors duration-300"
                        role="listitem"
                      >
                        <div className="relative w-64 h-36 md:w-80 md:h-45 flex-shrink-0 rounded-xl overflow-hidden bg-muted">
                          <Image
                            src={article.featuredImage}
                            alt=""
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="320px"
                          />
                        </div>
                        <div className="flex-1 flex flex-col justify-center space-y-3">
                          <div className="flex flex-wrap items-center gap-3">
                            <Badge variant="secondary">{article.category}</Badge>
                            <div className="flex items-center gap-3 text-sm text-muted-foreground">
                              <span>{formatDate(article.publishedAt)}</span>
                              <span className="flex items-center gap-1">
                                <Clock className="h-3.5 w-3.5" />
                                {article.readingTime} min read
                              </span>
                            </div>
                          </div>
                          
                          <h3 className="heading-3 text-xl group-hover:text-primary transition-colors">
                            {article.title}
                          </h3>
                          
                          <p className="text-muted-foreground line-clamp-2">{article.description}</p>
                          
                          <div className="flex items-center justify-between pt-2">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <img 
                                src={article.author.avatar} 
                                alt="" 
                                className="w-6 h-6 rounded-full" 
                              />
                              <span>{article.author.name}</span>
                            </div>
                            <span className="text-sm text-primary font-medium flex items-center gap-1">
                              Read Article
                              <ArrowRight className="h-3.5 w-3.5" />
                            </span>
                          </div>
                        </div>
                      </motion.article>
                    </Link>
                  </ScrollReveal>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>

          {filteredArticles.length === 0 && (
            <div className="text-center py-16">
              <FadeUp>
                <p className="text-muted-foreground mb-4">No articles found for this category.</p>
                <Button variant="outline" onClick={() => setSelectedCategory("all")}>
                  Show All Articles
                </Button>
              </FadeUp>
            </div>
          )}
        </div>
      </section>

      <section className="section bg-primary text-primary-foreground" aria-labelledby="newsletter-heading">
        <div className="container mx-auto px-6 text-center">
          <FadeUp delay={0.1}>
            <h2 id="newsletter-heading" className="heading-1 text-4xl md:text-5xl tracking-tight mb-4">
              Stay updated
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Get our latest insights delivered straight to your inbox. No spam, unsubscribe anytime.
            </p>
          </FadeUp>
          <FadeUp delay={0.3}>
            <form className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="Email address"
              />
              <Button variant="secondary" size="lg">Subscribe</Button>
            </form>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
