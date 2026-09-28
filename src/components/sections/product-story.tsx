"use client";

import { useEffect, useRef, type RefObject } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDownRight, CheckCircle2 } from "lucide-react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

type ProductStoryProps = { sectionRef?: RefObject<HTMLDivElement | null> };

const outcomes = [
  "Jury & Hammer — editorial chambers website",
  "Phonics Assam — literacy mission and galleries",
  "PeopleOS — human-centered HRMS experience",
];

export function ProductStory({ sectionRef: providedRef }: ProductStoryProps = {}) {
  const localRef = useRef<HTMLDivElement>(null);
  const sectionRef = providedRef ?? localRef;
  const prefersReducedMotion = useReducedMotion();
  const wheelStageRef = useRef(0);
  const wheelLockRef = useRef(false);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const leftX = useTransform(scrollYProgress, [0, 0.45, 0.7, 1], ["0vw", "0vw", "-50vw", "-50vw"]);
  const rightX = useTransform(scrollYProgress, [0, 0.45, 0.7, 1], ["50vw", "50vw", "0vw", "0vw"]);
  const leftOpacity = useTransform(scrollYProgress, [0, 0.5, 0.72], [1, 1, 0]);
  const rightOpacity = useTransform(scrollYProgress, [0.48, 0.72, 1], [0, 1, 1]);

  const scrollToSceneProgress = (progress: number) => {
    const scene = sectionRef.current;
    if (!scene) return;
    const sceneTop = scene.getBoundingClientRect().top + window.scrollY;
    const sceneScrollDistance = Math.max(scene.offsetHeight - window.innerHeight, 0);
    window.scrollTo({ top: sceneTop + sceneScrollDistance * progress, behavior: "smooth" });
  };

  const releaseWheelLock = () => window.setTimeout(() => { wheelLockRef.current = false; }, 1200);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const handleWindowWheel = (event: globalThis.WheelEvent) => {
      const scene = sectionRef.current;
      if (!scene) return;
      const sceneTop = scene.getBoundingClientRect().top + window.scrollY;
      const sceneEnd = sceneTop + scene.offsetHeight - window.innerHeight;
      if (window.scrollY < sceneTop - 8 || window.scrollY > sceneEnd + 8 || Math.abs(event.deltaY) < 2) return;
      const direction = event.deltaY > 0 ? 1 : -1;
      const currentStage = wheelStageRef.current;
      if (wheelLockRef.current) { event.preventDefault(); return; }
      if (direction > 0 && currentStage < 3) {
        event.preventDefault();
        wheelStageRef.current += 1;
        wheelLockRef.current = true;
        if (wheelStageRef.current === 2) scrollToSceneProgress(0.78);
        if (wheelStageRef.current === 3) scrollToSceneProgress(1);
        releaseWheelLock();
      } else if (direction < 0 && currentStage > 0) {
        event.preventDefault();
        wheelStageRef.current -= 1;
        wheelLockRef.current = true;
        if (wheelStageRef.current === 1) scrollToSceneProgress(0);
        if (wheelStageRef.current === 2) scrollToSceneProgress(0.78);
        releaseWheelLock();
      }
    };
    window.addEventListener("wheel", handleWindowWheel, { passive: false, capture: true });
    return () => window.removeEventListener("wheel", handleWindowWheel, true);
  }, [prefersReducedMotion, sectionRef]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div ref={sectionRef} className="relative min-h-[240svh]">
      <section className="sticky top-20 isolate h-[calc(100svh-5rem)] overflow-hidden bg-work py-20 text-page md:py-24" aria-labelledby="product-story-heading">
        <div className="pointer-events-none absolute -right-40 top-0 h-[620px] w-[620px] rounded-full border border-on-dark/10" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-16 top-24 h-[470px] w-[470px] rounded-full border border-on-dark/10" aria-hidden="true" />
        <div className="container relative z-10 mx-auto h-full">
          <motion.div style={prefersReducedMotion ? undefined : { x: leftX, opacity: leftOpacity }} className="absolute left-6 top-20 max-w-xl md:left-10 md:top-24">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-accent-bright">Selected work</p>
            <h2 id="product-story-heading" className="heading-display max-w-2xl text-4xl tracking-[-0.05em] md:text-6xl">Portfolio built for measurable momentum.</h2>
            <p className="body-lg mt-6 max-w-lg text-on-dark/70">A selection of websites, apps, and growth systems we’ve shaped from first brief to measurable business impact.</p>
            <div className="mt-9 grid gap-4">{outcomes.map((outcome) => <div key={outcome} className="flex items-start gap-3 text-sm text-on-dark/80 md:text-base"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-bright" aria-hidden="true" /><span>{outcome}</span></div>)}</div>
            <div className="mt-12 inline-flex items-center gap-3 border-b border-accent-bright/60 pb-2 text-sm font-semibold text-page">Explore our portfolio <ArrowDownRight className="h-4 w-4 text-accent-bright" aria-hidden="true" /></div>
          </motion.div>
          <motion.div style={prefersReducedMotion ? { opacity: 1 } : { x: rightX, opacity: rightOpacity }} className="absolute left-[62%] top-1/2 max-w-md -translate-y-1/2">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-accent-bright">Recent outcomes</p>
            <h2 className="heading-display text-4xl tracking-[-0.05em] md:text-6xl">Work that performs beyond launch.</h2>
            <p className="body-lg mt-6 max-w-md text-on-dark/70">From service brands to digital products, our work is designed to make growth clearer, faster, and easier to sustain.</p>
            <div className="mt-9 grid gap-4 text-sm text-on-dark/80 md:text-base"><div className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-bright" aria-hidden="true" /><span>Digital experiences that convert attention into action</span></div><div className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-bright" aria-hidden="true" /><span>Strategy, design, engineering, AI, and SEO in one team</span></div><div className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-bright" aria-hidden="true" /><span>Clear outcomes that keep improving after launch</span></div></div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
