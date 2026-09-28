"use client";

import { useEffect, useRef, useState } from "react";
import { motion, HTMLMotionProps, Easing } from "motion/react";
import { reducedMotionVariants, createSlideVariants } from "@/lib/animations";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

const defaultEase: Easing = [0.16, 1, 0.3, 1];

export interface ScrollRevealProps extends HTMLMotionProps<"div"> {
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
  delay?: number;
  duration?: number;
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  className?: string;
  children: React.ReactNode;
}

export function ScrollReveal({
  direction = "up",
  distance = 32,
  delay = 0,
  duration = 0.45,
  threshold = 0.05,
  rootMargin = "0px 0px 96px 0px",
  triggerOnce = true,
  className,
  children,
  ...props
}: ScrollRevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const revealDelay = Math.min(delay, 0.28);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(entry.target);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce, prefersReducedMotion]);

  const slideVariants = createSlideVariants(direction, distance);
  
  const variants = prefersReducedMotion ? reducedMotionVariants : {
    hidden: { opacity: 0, ...slideVariants.hidden },
    visible: { opacity: 1, ...slideVariants.visible, transition: { duration, delay: revealDelay, ease: defaultEase } },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={prefersReducedMotion || isVisible ? "visible" : "hidden"}
      variants={variants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export interface ParallaxProps {
  speed?: number;
  className?: string;
  children: React.ReactNode;
}

export function Parallax({ speed = 0.3, className, children }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    let frame = 0;

    const handleScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        if (rect.bottom > 0 && rect.top < viewportHeight) {
          const progress = (viewportHeight - rect.top) / (viewportHeight + rect.height);
          setOffset((progress - 0.5) * rect.height * speed * 2);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [speed, prefersReducedMotion]);

  return (
    <div ref={ref} className={className}>
      <div
        style={{ transform: `translateY(${offset}px)` }}
      >
        {children}
      </div>
    </div>
  );
}

export interface ScrollProgressProps extends HTMLMotionProps<"div"> {
  className?: string;
}

export function ScrollProgress({ className, ...props }: ScrollProgressProps) {
  const [progress, setProgress] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = scrollTop / docHeight;
      setProgress(Math.min(Math.max(scrollProgress, 0), 1));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prefersReducedMotion]);

  return (
    <motion.div
      className={cn("fixed top-0 left-0 h-px z-50 bg-primary", className)}
      animate={{ scaleX: progress }}
      style={{ transformOrigin: "left center" }}
      {...props}
    />
  );
}
