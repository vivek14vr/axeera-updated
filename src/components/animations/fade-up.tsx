"use client";

import { motion, HTMLMotionProps, Easing } from "motion/react";
import { reducedMotionVariants } from "@/lib/animations";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const defaultEase: Easing = [0.16, 1, 0.3, 1];

export interface FadeUpProps extends HTMLMotionProps<"div"> {
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  children: React.ReactNode;
}

export function FadeUp({ delay = 0, duration = 0.4, distance = 20, className, children, ...props }: FadeUpProps) {
  const prefersReducedMotion = useReducedMotion();
  const revealDelay = Math.min(delay, 0.28);
  const variants = prefersReducedMotion ? reducedMotionVariants : {
    hidden: { opacity: 0, y: distance },
    visible: { opacity: 1, y: 0, transition: { duration, delay: revealDelay, ease: defaultEase } },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.08, margin: "0px 0px 80px" }}
      variants={variants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export interface FadeInProps extends HTMLMotionProps<"div"> {
  delay?: number;
  duration?: number;
  className?: string;
  children: React.ReactNode;
}

export function FadeIn({ delay = 0, duration = 0.4, className, children, ...props }: FadeInProps) {
  const prefersReducedMotion = useReducedMotion();
  const variants = prefersReducedMotion ? reducedMotionVariants : {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration, delay } },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.08, margin: "0px 0px 80px" }}
      variants={variants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export interface ScaleInProps extends HTMLMotionProps<"div"> {
  delay?: number;
  duration?: number;
  scale?: number;
  className?: string;
  children: React.ReactNode;
}

export function ScaleIn({ delay = 0, duration = 0.4, scale = 0.95, className, children, ...props }: ScaleInProps) {
  const prefersReducedMotion = useReducedMotion();
  const variants = prefersReducedMotion ? reducedMotionVariants : {
    hidden: { opacity: 0, scale },
    visible: { opacity: 1, scale: 1, transition: { duration, delay, ease: defaultEase } },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18, margin: "0px 0px -64px" }}
      variants={variants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export interface StaggerContainerProps extends HTMLMotionProps<"div"> {
  staggerDelay?: number;
  delayChildren?: number;
  className?: string;
  children: React.ReactNode;
}

export function StaggerContainer({ 
  staggerDelay = 0.05,
  delayChildren = 0.02,
  className, 
  children, 
  ...props 
}: StaggerContainerProps) {
  const prefersReducedMotion = useReducedMotion();
  const safeStaggerDelay = Math.min(staggerDelay, 0.06);
  const safeDelayChildren = Math.min(delayChildren, 0.03);
  const variants = prefersReducedMotion ? reducedMotionVariants : {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: safeStaggerDelay, delayChildren: safeDelayChildren },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05, margin: "0px 0px 96px" }}
      variants={variants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export interface StaggerItemProps extends HTMLMotionProps<"div"> {
  className?: string;
  children: React.ReactNode;
}

export function StaggerItem({ className, children, ...props }: StaggerItemProps) {
  const prefersReducedMotion = useReducedMotion();
  const variants = prefersReducedMotion ? reducedMotionVariants : {
    hidden: { opacity: 0, y: 14 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: defaultEase } },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05, margin: "0px 0px 96px" }}
      variants={variants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
