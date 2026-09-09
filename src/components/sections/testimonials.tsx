"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FadeUp } from "@/components/animations/fade-up";
import { testimonials } from "@/data/testimonials";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Star, Quote } from "lucide-react";

const featuredTestimonials = testimonials.filter((t) => t.featured);

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % featuredTestimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + featuredTestimonials.length) % featuredTestimonials.length);
  }, []);

  const testimonial = featuredTestimonials[currentIndex];

  return (
    <section className="section bg-background" aria-labelledby="testimonials-heading">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeUp delay={0.1}>
            <span className="caption text-primary">Testimonials</span>
          </FadeUp>
          <FadeUp delay={0.2}>
            <h2 id="testimonials-heading" className="heading-1 text-4xl md:text-5xl mt-3 tracking-tight">
              What our partners say
            </h2>
          </FadeUp>
          <FadeUp delay={0.3}>
            <p className="body-lg text-muted-foreground mt-4">
              Real feedback from leaders we&apos;ve partnered with across industries and project types.
            </p>
          </FadeUp>
        </div>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 30, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -30, scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <div className="flex items-center justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                ))}
              </div>
              
              <Quote className="h-12 w-12 text-primary/20 mx-auto mb-6" aria-hidden="true" />
              
              <blockquote className="heading-2 text-3xl md:text-4xl leading-tight mb-8">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              
              <footer className="flex flex-col items-center gap-1">
                <cite className="font-semibold text-lg">{testimonial.author}</cite>
                <div className="text-muted-foreground text-sm">
                  {testimonial.role}, {testimonial.company}
                </div>
                {testimonial.projectSlug && (
                  <span className="text-xs text-muted-foreground/70 mt-1">
                    Project: {testimonial.projectSlug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                  </span>
                )}
              </footer>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-10">
            <Button
              variant="ghost"
              size="sm"
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-12 h-12 p-0"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </Button>
            
            <div className="flex gap-2" role="tablist" aria-label="Testimonial navigation">
              {featuredTestimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-primary w-8" : "bg-border hover:bg-muted-foreground/50"
                  }`}
                  role="tab"
                  aria-selected={index === currentIndex}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={next}
              aria-label="Next testimonial"
              className="w-12 h-12 p-0"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </Button>
          </div>
        </div>

        <div className="mt-16 text-center">
          <FadeUp>
            <Link href="/work" className="link">
              View all case studies
            </Link>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
