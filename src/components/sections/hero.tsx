"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, CheckCircle2, Layers3 } from "lucide-react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { PhoneVisual } from "@/components/sections/phone-visual";
import type { MotionValue } from "motion/react";

const proofPoints = [
  "Senior product, design, and engineering team",
  "From first workshop to reliable production systems",
  "Clear milestones, measurable outcomes, no black box",
];

export function Hero({ unlockProgress }: { unlockProgress?: MotionValue<number> }) {
  const prefersReducedMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const gridY = useTransform(scrollY, [0, 1100], [0, 72]);

  return (
    <section className="relative z-10 min-h-[calc(100svh-5rem)] overflow-visible border-b border-border bg-page pb-10 pt-24 md:pb-14 md:pt-28 lg:pb-6 lg:pt-20">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-accent-soft/45 blur-3xl" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-accent-bright/15 blur-3xl" />
        <motion.div style={prefersReducedMotion ? undefined : { y: gridY }} className="absolute inset-0 opacity-[0.028] [background-image:linear-gradient(var(--color-ink)_1px,transparent_1px),linear-gradient(90deg,var(--color-ink)_1px,transparent_1px)] [background-size:48px_48px]" />
      </div>

      <div className="container relative z-10 mx-auto">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <motion.div initial={prefersReducedMotion ? false : "hidden"} animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 0.12 } } }} className="max-w-2xl">
            <motion.div variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }} className="mb-7">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-4 py-2 text-sm font-medium shadow-sm backdrop-blur"><span className="accent-dot h-2 w-2 rounded-full" /> Senior teams for high-stakes digital products</span>
            </motion.div>
            <motion.h1 variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } }} className="heading-display max-w-3xl text-5xl leading-[1.02] tracking-[-0.065em] text-foreground sm:text-6xl lg:text-7xl">Turn complex ideas into products people rely on.</motion.h1>
            <motion.p variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }} className="body-lg mt-7 max-w-xl text-muted-foreground">Axeera brings product strategy, design, and engineering together to help ambitious teams move from uncertainty to measurable momentum.</motion.p>
            <motion.div variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }} className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-base font-semibold text-primary-foreground shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">Start a project <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" /></Link>
              <Link href="/work" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-border bg-surface/70 px-6 py-4 text-base font-semibold transition-all hover:-translate-y-0.5 hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">Explore our work</Link>
            </motion.div>
            <motion.div variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }} className="mt-10 grid gap-3 text-sm text-muted-foreground">{proofPoints.map((point) => <div key={point} className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" /><span>{point}</span></div>)}</motion.div>
          </motion.div>

          <div className="relative mx-auto min-h-[520px] w-full max-w-2xl overflow-visible lg:min-h-[560px] lg:pt-4">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[72%] w-[62%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-soft/55 blur-3xl" aria-hidden="true" />
            <motion.div className="relative z-10 mx-auto w-[285px] sm:w-[300px] lg:hidden"><PhoneVisual unlockProgress={unlockProgress} className="phone-shadow h-auto w-full scale-x-[1.18]" /></motion.div>
          </div>
        </div>
        <div className="mt-10 grid gap-5 border-t border-border/80 pt-6 text-sm text-muted-foreground sm:grid-cols-[auto_1fr] sm:items-center lg:mt-8"><span className="font-medium text-foreground">Trusted by teams shipping critical digital products</span><span className="inline-flex items-center gap-2 sm:justify-self-end"><Layers3 className="h-4 w-4 text-primary" aria-hidden="true" /> Product · platform · cloud expertise</span></div>
      </div>
    </section>
  );
}
