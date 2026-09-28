"use client";

import * as React from "react";
import { motion, HTMLMotionProps, Easing } from "motion/react";
import { reducedMotionVariants } from "@/lib/animations";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const defaultEase: Easing = [0.16, 1, 0.3, 1];

const motionElements = {
  p: motion.p,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  h4: motion.h4,
  span: motion.span,
  div: motion.div,
} as const;

export interface TextRevealProps extends HTMLMotionProps<"p"> {
  delay?: number;
  duration?: number;
  className?: string;
  children: string;
  as?: "p" | "h1" | "h2" | "h3" | "h4" | "span" | "div";
}

export function TextReveal({ 
  delay = 0, 
  duration = 0.5,
  className, 
  children, 
  as: Component = "p",
  ...props 
}: TextRevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const variants = prefersReducedMotion ? reducedMotionVariants : {
    hidden: { opacity: 0, y: "100%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration, ease: defaultEase },
    },
  };

  const MotionComponent = motionElements[Component];

  return (
    <MotionComponent
      initial={false}
      animate="visible"
      variants={variants}
      style={{ transitionDelay: `${delay}s` }}
      className={className}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}

export interface TextRevealLinesProps extends HTMLMotionProps<"div"> {
  delay?: number;
  staggerDelay?: number;
  duration?: number;
  className?: string;
  children: React.ReactNode;
  as?: "div" | "p";
}

export function TextRevealLines({ 
  delay = 0, 
  staggerDelay = 0.06,
  duration = 0.45,
  className, 
  children, 
  as: Component = "div",
  ...props 
}: TextRevealLinesProps) {
  const prefersReducedMotion = useReducedMotion();
  const containerVariants = prefersReducedMotion ? reducedMotionVariants : {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: staggerDelay, delayChildren: delay },
    },
  };

  const lineVariants = prefersReducedMotion ? reducedMotionVariants : {
    hidden: { opacity: 0, y: "100%" },
    visible: { opacity: 1, y: 0, transition: { duration, ease: defaultEase } },
  };

  const MotionComponent = Component === "p" ? motion.p : motion.div;

  return (
    <MotionComponent
      initial={false}
      animate="visible"
      variants={containerVariants}
      className={className}
      {...props}
    >
      {React.Children.map(children, (child, index) => (
        <motion.span key={index} variants={lineVariants} style={{ display: "block" }}>
          {child}
        </motion.span>
      ))}
    </MotionComponent>
  );
}

export interface SplitTextProps extends HTMLMotionProps<"div"> {
  text: string;
  delay?: number;
  staggerDelay?: number;
  duration?: number;
  className?: string;
  splitBy?: "words" | "chars" | "lines";
  as?: "div" | "p" | "h1" | "h2" | "h3" | "h4";
}

export function SplitText({ 
  text, 
  delay = 0, 
  staggerDelay = 0.03, 
  duration = 0.5, 
  className, 
  splitBy = "words",
  as: Component = "div",
  ...props 
}: SplitTextProps) {
  const prefersReducedMotion = useReducedMotion();
  
  const splitText = (str: string) => {
    if (splitBy === "words") return str.split(" ");
    if (splitBy === "chars") return str.split("");
    if (splitBy === "lines") return str.split("\n");
    return [str];
  };

  const parts = splitText(text);
  
  const containerVariants = prefersReducedMotion ? reducedMotionVariants : {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: staggerDelay, delayChildren: delay },
    },
  };

  const partVariants = prefersReducedMotion ? reducedMotionVariants : {
    hidden: { opacity: 0, y: splitBy === "chars" ? "50%" : "100%" },
    visible: { opacity: 1, y: 0, transition: { duration, ease: defaultEase } },
  };

  const separator = splitBy === "words" ? " " : splitBy === "chars" ? "" : "\n";

  const MotionComponent = motionElements[Component];

  return (
    <MotionComponent
      initial={false}
      animate="visible"
      variants={containerVariants}
      className={className}
      {...props}
    >
      {parts.map((part, index) => (
        <React.Fragment key={`${part}-${index}`}>
          <motion.span variants={partVariants} style={{ display: "inline-block" }}>
            {part}
          </motion.span>
          {index < parts.length - 1 && splitBy === "words" && " "}
          {index < parts.length - 1 && splitBy === "lines" && <br />}
        </React.Fragment>
      ))}
    </MotionComponent>
  );
}

export interface CounterProps extends HTMLMotionProps<"span"> {
  end: number;
  start?: number;
  duration?: number;
  delay?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export function Counter({ 
  end, 
  start: _start = 0, 
  duration = 2, 
  delay = 0, 
  decimals: _decimals = 0, 
  prefix = "", 
  suffix = "", 
  className, 
  ...props 
}: CounterProps) {
  const prefersReducedMotion = useReducedMotion();
  
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: prefersReducedMotion ? 0 : duration, ease: defaultEase, delay }}
      className={className}
      {...props}
    >
      {prefix}
      {end.toLocaleString()}
      {suffix}
    </motion.span>
  );
}
