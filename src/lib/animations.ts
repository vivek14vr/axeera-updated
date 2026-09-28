import { Variants, Transition, Easing } from "motion";

const defaultEase: Easing = [0.4, 0, 0.2, 1];
const textEase: Easing = [0.16, 1, 0.3, 1];

export const transitions = {
  fast: { duration: 0.15, ease: defaultEase },
  normal: { duration: 0.3, ease: defaultEase },
  slow: { duration: 0.35, ease: defaultEase },
  slower: { duration: 0.45, ease: defaultEase },
  spring: { type: "spring", stiffness: 100, damping: 15 },
  springGentle: { type: "spring", stiffness: 60, damping: 12 },
  springBounce: { type: "spring", stiffness: 200, damping: 12 },
} as const satisfies Record<string, Transition>;

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: transitions.normal },
};

export const fadeOut: Variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0, transition: transitions.fast },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: transitions.slow },
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: transitions.slow },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: transitions.slow },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: transitions.slow },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: transitions.spring },
};

export const scaleOut: Variants = {
  visible: { opacity: 1, scale: 1 },
  hidden: { opacity: 0, scale: 0.95, transition: transitions.fast },
};

export const slideUp: Variants = {
  hidden: { opacity: 0, y: "100%" },
  visible: { opacity: 1, y: 0, transition: transitions.slower },
};

export const slideDown: Variants = {
  hidden: { opacity: 0, y: "-100%" },
  visible: { opacity: 1, y: 0, transition: transitions.slower },
};

export const textReveal: Variants = {
  hidden: { opacity: 0, y: "100%" },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: textEase },
  },
};

export const textRevealLines: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.04 },
  },
};

export const textLine: Variants = {
  hidden: { opacity: 0, y: "100%" },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: textEase } },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.03 },
  },
};

export const staggerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.035, delayChildren: 0.02 },
  },
};

export const staggerSlow: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.03 },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: defaultEase } },
};

export const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 1.1 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.65, ease: textEase } },
};

export const clipReveal: Variants = {
  hidden: { opacity: 0, clipPath: "inset(100% 0 0 0)" },
  visible: { opacity: 1, clipPath: "inset(0 0 0 0)", transition: { duration: 0.65, ease: textEase } },
};

export const sectionReveal: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: textEase } },
};

export const hoverLift = {
  whileHover: { y: -4, transition: transitions.spring },
  whileTap: { scale: 0.98, transition: transitions.fast },
};

export const hoverScale = {
  whileHover: { scale: 1.02, transition: transitions.spring },
  whileTap: { scale: 0.98, transition: transitions.fast },
};

export const hoverGlow = {
  whileHover: { boxShadow: "0 0 40px -10px rgb(10 10 10 / 0.3)", transition: transitions.slow },
};

export const magnetic = {
  whileHover: { transition: transitions.spring },
};

export const linkUnderline = {
  initial: { width: "0%", left: "50%" },
  hover: { width: "100%", left: "0%" },
  transition: { type: "spring", stiffness: 100, damping: 15 },
};

export const pageTransition: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: transitions.slow },
  exit: { opacity: 0, y: -20, transition: transitions.fast },
};

export const modalTransition: Variants = {
  initial: { opacity: 0, scale: 0.95, y: 20 },
  animate: { opacity: 1, scale: 1, y: 0, transition: transitions.spring },
  exit: { opacity: 0, scale: 0.95, y: 20, transition: transitions.fast },
};

export const drawerTransition: Variants = {
  initial: { x: "100%" },
  animate: { x: 0, transition: transitions.spring },
  exit: { x: "100%", transition: transitions.spring },
};

export const accordionTransition: Variants = {
  closed: { height: 0, opacity: 0 },
  open: { height: "auto", opacity: 1, transition: { duration: 0.3, ease: defaultEase } },
};

export const counterAnimation = (end: number, duration = 2) => ({
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration, ease: textEase },
  },
});

export const parallaxVariants = (speed: number): Variants => ({
  initial: { y: 0 },
  animate: { y: 0, transition: { duration: 0 } },
});

export function createStaggerVariants(delay = 0.1): Variants {
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: delay, delayChildren: delay },
    },
  };
}

export function createSlideVariants(direction: "up" | "down" | "left" | "right", distance = 30): Variants {
  const transforms = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
  };

  return {
    hidden: { opacity: 0, ...transforms[direction] },
    visible: { opacity: 1, x: 0, y: 0, transition: transitions.slow },
  };
}

export const reducedMotionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0 } },
};

export function getVariants(prefersReducedMotion: boolean, variants: Variants, fallback: Variants = reducedMotionVariants): Variants {
  return prefersReducedMotion ? fallback : variants;
}
