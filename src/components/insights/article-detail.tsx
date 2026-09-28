"use client";

import { Fragment, type ElementType, type ReactNode } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animations/fade-up";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { TextReveal } from "@/components/animations/text-reveal";
import { Article } from "@/data/articles";
import { ArrowRight, Calendar, Clock, Share2, Mail, Tag, User, ArrowLeft } from "lucide-react";
import { TwitterIcon, LinkedinIcon } from "@/components/shared/social-icons";
import { formatDate } from "@/lib/utils";

interface ArticleDetailContentProps {
  article: Article;
  relatedArticles: Article[];
}

function renderInlineMarkdown(value: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const tokenPattern = /(\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*|`([^`]+)`|\*([^*]+)\*)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = tokenPattern.exec(value)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(value.slice(lastIndex, match.index));
    }

    if (match[2] && match[3]) {
      const href = match[3];
      const link = href.startsWith("/") ? (
        <Link href={href}>{match[2]}</Link>
      ) : (
        <a href={href} target="_blank" rel="noopener noreferrer">{match[2]}</a>
      );
      nodes.push(<Fragment key={match.index}>{link}</Fragment>);
    } else if (match[4]) {
      nodes.push(<strong key={match.index}>{renderInlineMarkdown(match[4])}</strong>);
    } else if (match[5]) {
      nodes.push(<code key={match.index}>{match[5]}</code>);
    } else if (match[6]) {
      nodes.push(<em key={match.index}>{renderInlineMarkdown(match[6])}</em>);
    }

    lastIndex = tokenPattern.lastIndex;
  }

  if (lastIndex < value.length) {
    nodes.push(value.slice(lastIndex));
  }

  return nodes;
}

function isMarkdownBlockStart(line: string): boolean {
  return /^(#{1,6}\s+|```|[-*]\s+|\d+\.\s+|---+$)/.test(line);
}

function renderMarkdown(markdown: string): ReactNode[] {
  const lines = markdown.trim().split(/\r?\n/);
  const blocks: ReactNode[] = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index].trim();

    if (!line) {
      index += 1;
      continue;
    }

    const fence = line.match(/^```(\w*)$/);
    if (fence) {
      const language = fence[1];
      const codeLines: string[] = [];
      index += 1;
      while (index < lines.length && !/^```$/.test(lines[index].trim())) {
        codeLines.push(lines[index]);
        index += 1;
      }
      index += 1;
      blocks.push(
        <pre key={`code-${index}`} className="overflow-x-auto rounded-xl bg-foreground p-5 text-sm text-background">
          <code className={language ? `language-${language}` : undefined}>{codeLines.join("\n")}</code>
        </pre>
      );
      continue;
    }

    const heading = line.match(/^(#{1,6})\s+(.+)$/);
    if (heading) {
      const level = heading[1].length;
      const HeadingTag = `h${Math.min(level, 6)}` as ElementType;
      const headingClass = level === 2 ? "text-3xl md:text-4xl" : level === 3 ? "text-2xl" : "text-xl";
      blocks.push(
        <HeadingTag key={`heading-${index}`} className={`${headingClass} font-semibold tracking-tight`}>
          {renderInlineMarkdown(heading[2])}
        </HeadingTag>
      );
      index += 1;
      continue;
    }

    if (/^---+$/.test(line)) {
      blocks.push(<hr key={`rule-${index}`} className="border-border" />);
      index += 1;
      continue;
    }

    if (/^[-*]\s+/.test(line)) {
      const items: ReactNode[] = [];
      while (index < lines.length && /^[-*]\s+/.test(lines[index].trim())) {
        items.push(<li key={index}>{renderInlineMarkdown(lines[index].trim().replace(/^[-*]\s+/, ""))}</li>);
        index += 1;
      }
      blocks.push(<ul key={`list-${index}`} className="list-disc space-y-2 pl-6">{items}</ul>);
      continue;
    }

    if (/^\d+\.\s+/.test(line)) {
      const items: ReactNode[] = [];
      while (index < lines.length && /^\d+\.\s+/.test(lines[index].trim())) {
        items.push(<li key={index}>{renderInlineMarkdown(lines[index].trim().replace(/^\d+\.\s+/, ""))}</li>);
        index += 1;
      }
      blocks.push(<ol key={`ordered-list-${index}`} className="list-decimal space-y-2 pl-6">{items}</ol>);
      continue;
    }

    const paragraphLines = [line];
    index += 1;
    while (index < lines.length) {
      const nextLine = lines[index].trim();
      if (!nextLine || isMarkdownBlockStart(nextLine)) break;
      paragraphLines.push(nextLine);
      index += 1;
    }
    blocks.push(<p key={`paragraph-${index}`}>{renderInlineMarkdown(paragraphLines.join(" "))}</p>);
  }

  return blocks;
}

export function ArticleDetailContent({ article, relatedArticles }: ArticleDetailContentProps) {
  const siteUrl = "https://axeera.com";
  const articleUrl = `${siteUrl}/insights/${article.slug}`;
  const encodedUrl = encodeURIComponent(articleUrl);
  const encodedTitle = encodeURIComponent(article.title);

  return (
    <>
      <section className="page-hero section border-b border-white/10" aria-labelledby="article-title">
        <div className="container mx-auto px-6">
          <FadeUp delay={0.1}>
            <Link href="/insights" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
              <ArrowLeft className="h-4 w-4" />
              Back to Insights
            </Link>
          </FadeUp>
          
          <FadeUp delay={0.2}>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge variant="secondary">{article.category}</Badge>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <time dateTime={article.publishedAt}>
                  {formatDate(article.publishedAt)}
                </time>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  {article.readingTime} min read
                </span>
              </div>
            </div>
          </FadeUp>
          
          <FadeUp delay={0.3}>
            <h1 id="article-title" className="heading-display text-4xl md:text-5xl lg:text-6xl tracking-tighter leading-tight mb-6">
              {article.title}
            </h1>
          </FadeUp>
          
          <FadeUp delay={0.4}>
            <p className="body-lg text-muted-foreground max-w-3xl">{article.description}</p>
          </FadeUp>
          
          <FadeUp delay={0.5}>
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <div className="flex items-center gap-3">
                <img 
                  src={article.author.avatar} 
                  alt="" 
                  className="w-10 h-10 rounded-full" 
                />
                <div>
                  <div className="font-medium">{article.author.name}</div>
                  <div className="text-sm text-muted-foreground">{article.author.role}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  className="p-2 rounded-lg hover:bg-muted transition-colors"
                  aria-label="Share on Twitter"
                >
                  <a href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`} target="_blank" rel="noopener noreferrer">
                    <TwitterIcon className="h-5 w-5" />
                  </a>
                </button>
                <button
                  className="p-2 rounded-lg hover:bg-muted transition-colors"
                  aria-label="Share on LinkedIn"
                >
                  <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`} target="_blank" rel="noopener noreferrer">
                    <LinkedinIcon className="h-5 w-5" />
                  </a>
                </button>
                <button
                  className="p-2 rounded-lg hover:bg-muted transition-colors"
                  aria-label="Share via email"
                >
                  <a href={`mailto:?subject=${encodedTitle}&body=${encodedUrl}`}>
                    <Mail className="h-5 w-5" />
                  </a>
                </button>
                <button
                  className="p-2 rounded-lg hover:bg-muted transition-colors"
                  aria-label="Copy link"
                >
                  <Share2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="section bg-background" aria-labelledby="featured-image-heading">
        <div className="container mx-auto px-6">
          <FadeUp delay={0.2}>
            <div className="relative aspect-[21/9] max-w-6xl mx-auto rounded-2xl overflow-hidden">
              <Image
                src={article.featuredImage}
                alt=""
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="section bg-background" aria-labelledby="article-content-heading">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-12 lg:gap-16">
            <div className="lg:col-span-3">
              <FadeUp delay={0.3}>
                <article className="prose prose-muted max-w-none space-y-8">
                  <div className="prose prose-muted max-w-none space-y-6">{renderMarkdown(article.content)}</div>
                </article>
              </FadeUp>

              <FadeUp delay={0.4} className="mt-12">
                <div className="flex flex-wrap gap-2" aria-label="Tags">
                  {article.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="gap-1">
                      <Tag className="h-3 w-3" />
                      {tag}
                    </Badge>
                  ))}
                </div>
              </FadeUp>

              <FadeUp delay={0.5} className="mt-12 pt-8 border-t border-border">
                <div className="flex flex-col gap-4 rounded-xl bg-muted/30 p-4 md:flex-row md:items-center md:justify-between">
                  <div className="flex min-w-0 items-center gap-3 md:w-1/3 md:shrink-0">
                    <img src={article.author.avatar} alt="" className="w-12 h-12 rounded-full" />
                    <div className="min-w-0">
                      <div className="whitespace-nowrap font-semibold">{article.author.name}</div>
                      <div className="text-sm text-muted-foreground">{article.author.role}</div>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground md:max-w-[60%]">
                    {article.author.bio}
                  </div>
                </div>
              </FadeUp>
            </div>

            <div className="lg:col-span-1">
              <FadeUp delay={0.3}>
                <div className="sticky top-24 space-y-6">
                  <div className="bg-surface border border-border rounded-2xl p-6">
                    <h3 className="font-semibold mb-4">Share this article</h3>
                    <div className="flex gap-3">
                      <a
                        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 p-3 rounded-lg bg-surface border border-border text-center hover:border-primary/50 transition-colors"
                        aria-label="Share on Twitter"
                      >
                        <TwitterIcon className="h-5 w-5 mx-auto mb-1 text-primary" />
                        <div className="text-xs font-medium">Twitter</div>
                      </a>
                      <a
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 p-3 rounded-lg bg-surface border border-border text-center hover:border-primary/50 transition-colors"
                        aria-label="Share on LinkedIn"
                      >
                        <LinkedinIcon className="h-5 w-5 mx-auto mb-1 text-primary" />
                        <div className="text-xs font-medium">LinkedIn</div>
                      </a>
                    </div>
                  </div>

                  <div className="bg-surface border border-border rounded-2xl p-6">
                    <h3 className="font-semibold mb-4">More in {article.category}</h3>
                    <ul className="space-y-3" role="list">
                      {relatedArticles.slice(0, 3).map((related) => (
                        <li key={related.slug}>
                          <Link href={`/insights/${related.slug}`} className="block p-3 rounded-lg hover:bg-muted transition-colors">
                            <p className="font-medium text-sm line-clamp-1 mb-1">{related.title}</p>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <Calendar className="h-3 w-3" />
                              <time>{formatDate(related.publishedAt)}</time>
                              <span>•</span>
                              <span className="flex items-center gap-1">
                                <Clock className="h-2.5 w-2.5" />
                                {related.readingTime} min
                              </span>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Link href="/insights" className="block mt-4 text-center text-primary font-medium hover:underline">
                      View all articles
                    </Link>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-muted/30 border-t border-border" aria-labelledby="related-heading">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <FadeUp delay={0.1}>
              <span className="caption text-primary">Related Articles</span>
            </FadeUp>
            <FadeUp delay={0.2}>
              <h2 id="related-heading" className="heading-1 text-4xl md:text-5xl mt-3 tracking-tight">
                Keep reading
              </h2>
            </FadeUp>
          </div>

          <StaggerContainer staggerDelay={0.1}>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedArticles.slice(0, 3).map((related, index) => (
                <StaggerItem key={related.slug}>
                  <Link href={`/insights/${related.slug}`} className="block">
                    <motion.div
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.3 }}
                      className="group bg-surface border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-colors duration-300 h-full flex flex-col"
                    >
                      <div className="relative aspect-[16/9] overflow-hidden">
                        <Image
                          src={related.featuredImage}
                          alt=""
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge variant="secondary">{related.category}</Badge>
                        </div>
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                          <time>{formatDate(related.publishedAt)}</time>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3.5 w-3.5" />
                            {related.readingTime} min read
                          </span>
                        </div>
                        <h3 className="heading-3 text-xl mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                          {related.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-1">{related.description}</p>
                        <div className="flex items-center gap-2 text-primary font-medium">
                          Read Article
                          <ArrowRight className="h-4 w-4" />
                        </div>
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
            <h2 id="cta-heading" className="heading-1 text-4xl md:text-5xl tracking-tight mb-4">
              Want more insights like this?
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for weekly deep dives on digital product development, cloud engineering, and technology strategy.
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
