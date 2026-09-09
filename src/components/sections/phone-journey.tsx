"use client";

import { Hero } from "@/components/sections/hero";
import { ProductStory } from "@/components/sections/product-story";
import { PhoneVisual } from "@/components/sections/phone-visual";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";

export function PhoneJourney() {
  const productStoryRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const unlockProgress = useTransform(scrollY, [0, 560], [0, 1]);
  const { scrollYProgress } = useScroll({
    target: productStoryRef,
    offset: ["start start", "end end"],
  });
  const phoneX = useSpring(
    useTransform(scrollYProgress, [0, 0.24, 0.52, 0.68, 1], ["0px", "0px", "-760px", "-740px", "-740px"]),
    { stiffness: 100, damping: 26, mass: 0.8 },
  );

  return (
    <div className="relative overflow-visible">
      <div className="pointer-events-none relative z-20 hidden h-[900px] w-[390px] pt-24 lg:sticky lg:top-0 lg:ml-auto lg:mr-[10%] lg:block xl:w-[420px]" aria-hidden="true">
        <motion.div className="will-change-transform" style={{ x: phoneX }}>
          <PhoneVisual unlockProgress={unlockProgress} className="phone-shadow h-auto w-[360px] scale-x-[1.18] xl:w-[390px]" />
        </motion.div>
      </div>
      <div className="relative -mt-[900px]">
        <Hero unlockProgress={unlockProgress} />
      </div>
      <ProductStory sectionRef={productStoryRef} />
    </div>
  );
}
