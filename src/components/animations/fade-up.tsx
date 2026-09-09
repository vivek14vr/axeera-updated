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

export function FadeUp({ delay = 0, duration = 0.6, distance = 30, className, children, ...props }: FadeUpProps) {
  const prefersReducedMotion = useReducedMotion();
  const variants = prefersReducedMotion ? reducedMotionVariants : {
    hidden: { opacity: 0, y: distance },
    visible: { opacity: 1, y: 0, transition: { duration, delay, ease: defaultEase } },
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
      viewport={{ once: true, amount: 0.18, margin: "0px 0px -64px" }}
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
  staggerDelay = 0.1, 
  delayChildren = 0.1, 
  className, 
  children, 
  ...props 
}: StaggerContainerProps) {
  const prefersReducedMotion = useReducedMotion();
  const variants = prefersReducedMotion ? reducedMotionVariants : {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: staggerDelay, delayChildren },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12, margin: "0px 0px -48px" }}
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: defaultEase } },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12, margin: "0px 0px -48px" }}
      variants={variants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
