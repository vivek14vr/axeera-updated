"use client";

import type { SVGProps } from "react";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, type MotionValue } from "motion/react";
import { Boxes, FileText, Monitor } from "lucide-react";

function getBrowserTime() {
  return new Intl.DateTimeFormat(undefined, {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
  }).format(new Date());
}

type PhoneVisualProps = SVGProps<SVGSVGElement> & {
  unlockProgress?: MotionValue<number>;
};

export function PhoneVisual({ unlockProgress, ...props }: PhoneVisualProps) {
  const [browserTime, setBrowserTime] = useState("--:--:--");
  const fallbackUnlockProgress = useMotionValue(1);
  const resolvedUnlockProgress = unlockProgress ?? fallbackUnlockProgress;
  const lockOpacity = useTransform(resolvedUnlockProgress, [0, 0.55, 0.82, 1], [1, 1, 0.2, 0]);
  const lockRotation = useTransform(resolvedUnlockProgress, [0, 0.55, 1], [0, 0, -18]);
  const screenTextColor = useTransform(resolvedUnlockProgress, [0, 0.55, 1], ["#f8f6f1", "#f8f6f1", "#182127"]);
  const appOpacity = useTransform(resolvedUnlockProgress, [0.48, 0.78, 1], [0, 0.7, 1]);
  const appScale = useTransform(resolvedUnlockProgress, [0.48, 0.78, 1], [0.88, 0.98, 1]);
  const appY = useTransform(resolvedUnlockProgress, [0.48, 0.78, 1], [18, 3, 0]);
  const unlockTrack = useTransform(resolvedUnlockProgress, [0, 1], [0, 220]);
  const unlockHintOpacity = useTransform(resolvedUnlockProgress, [0, 0.5, 0.82, 1], [1, 1, 0.45, 0]);
  const unlockedOpacity = useTransform(resolvedUnlockProgress, [0.72, 0.92, 1], [0, 0, 1]);

  useEffect(() => {
    const updateTime = () => setBrowserTime(getBrowserTime());
    updateTime();
    const timer = window.setInterval(updateTime, 1000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <svg
      viewBox="0 0 420 840"
      role="img"
      aria-label="Axeera Studio OS mobile delivery dashboard"
      {...props}
    >
      <defs>
        <linearGradient id="phone-shell" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="var(--color-phone-highlight)" />
          <stop offset="0.52" stopColor="var(--color-page)" />
          <stop offset="1" stopColor="var(--color-phone-shell)" />
        </linearGradient>
        <linearGradient id="phone-screen" x1="0" y1="0" x2="0.8" y2="1">
          <stop offset="0" stopColor="var(--color-phone-highlight)" />
          <stop offset="1" stopColor="var(--color-phone-screen)" />
        </linearGradient>
        <filter id="phone-shadow" x="-30%" y="-20%" width="160%" height="150%">
          <feDropShadow dx="0" dy="24" stdDeviation="20" floodColor="var(--color-phone-ink)" floodOpacity="0.28" />
        </filter>
      </defs>

      <g filter="url(#phone-shadow)">
        <rect x="42" y="10" width="336" height="820" rx="70" fill="url(#phone-shell)" stroke="var(--color-phone-light)" strokeOpacity="0.72" strokeWidth="3" />
        <rect x="34" y="214" width="8" height="54" rx="4" fill="var(--color-phone-shell)" />
        <rect x="34" y="282" width="8" height="82" rx="4" fill="var(--color-phone-shell)" />
        <rect x="378" y="246" width="8" height="92" rx="4" fill="var(--color-phone-shell)" />
        <rect x="57" y="25" width="306" height="790" rx="58" fill="var(--color-phone-ink)" />
        <rect x="72" y="40" width="276" height="760" rx="45" fill="url(#phone-screen)" />
        <rect x="286" y="57" width="42" height="25" rx="13" fill="var(--color-phone-ink)" />
        <circle cx="338" cy="69.5" r="4" fill="var(--color-accent-bright)" />
        <motion.g style={{ opacity: lockOpacity }} aria-hidden="true">
          <rect x="72" y="40" width="276" height="760" rx="45" fill="var(--color-phone-ink)" opacity="0.82" />
          <motion.g style={{ rotate: lockRotation, transformOrigin: "210px 650px" }}>
            <rect x="200" y="662" width="20" height="18" rx="5" fill="var(--color-page)" />
            <path d="M205 662v-7c0-8 10-8 10 0v7" fill="none" stroke="var(--color-page)" strokeWidth="4" strokeLinecap="round" />
            <circle cx="210" cy="671" r="2.5" fill="var(--color-phone-ink)" />
            <path d="M210 674v4" stroke="var(--color-phone-ink)" strokeWidth="1.75" strokeLinecap="round" />
          </motion.g>
          <text x="210" y="710" textAnchor="middle" fill="var(--color-page)" fontFamily="Arial, sans-serif" fontSize="11" fontWeight="700" letterSpacing="2">SCROLL TO UNLOCK</text>
          <text x="210" y="735" textAnchor="middle" fill="var(--color-page)" opacity="0.68" fontFamily="Arial, sans-serif" fontSize="11">Axeera Studio OS</text>
          <rect x="100" y="752" width="220" height="3" rx="1.5" fill="var(--color-page)" opacity="0.16" />
          <motion.rect x="100" y="752" height="3" rx="1.5" fill="var(--color-accent-bright)" style={{ width: unlockTrack }} />
        </motion.g>
        <motion.g style={{ opacity: appOpacity, scale: appScale, y: appY, transformOrigin: "210px 330px" }} aria-hidden="true">
          <Monitor x="104" y="286" width="32" height="32" stroke="var(--color-accent-bright)" strokeWidth="2.5" />
          <Boxes x="194" y="286" width="32" height="32" stroke="var(--color-phone-ink)" strokeWidth="2.5" />
          <FileText x="284" y="286" width="32" height="32" stroke="var(--color-accent-bright)" strokeWidth="2.5" />

          <g fill="var(--color-phone-ink)" fontFamily="Arial, sans-serif">
            <text x="120" y="340" textAnchor="middle" fontSize="11" fontWeight="700">POS</text>
            <text x="210" y="340" textAnchor="middle" fontSize="10" fontWeight="700">Inventory</text>
            <text x="300" y="340" textAnchor="middle" fontSize="9.5" fontWeight="700">Invoice</text>
            <text x="120" y="358" textAnchor="middle" fontSize="9" fill="var(--color-phone-muted)">Live sales</text>
            <text x="210" y="358" textAnchor="middle" fontSize="9" fill="var(--color-phone-muted)">Management</text>
            <text x="300" y="358" textAnchor="middle" fontSize="9" fill="var(--color-phone-muted)">Automated billing</text>
          </g>
        </motion.g>
        <motion.g style={{ opacity: unlockedOpacity }} aria-hidden="true">
          <rect x="145" y="92" width="130" height="25" rx="12.5" fill="var(--color-phone-success)" />
          <circle cx="161" cy="104.5" r="4" fill="var(--color-success)" />
          <text x="173" y="108" fill="var(--color-phone-ink)" fontFamily="Arial, sans-serif" fontSize="9" fontWeight="700" letterSpacing="1">SYSTEM READY</text>
        </motion.g>
        <motion.text x="210" y="760" textAnchor="middle" style={{ opacity: unlockHintOpacity }} fill="var(--color-page)" fontFamily="Arial, sans-serif" fontSize="8" letterSpacing="1.5">KEEP GOING</motion.text>
        <motion.text x="210" y="470" textAnchor="middle" style={{ fill: screenTextColor }} opacity="0.1" fontFamily="Arial, sans-serif" fontSize="42" fontWeight="700" letterSpacing="4">AXEERA</motion.text>
        <motion.text x="94" y="145" textAnchor="start" dominantBaseline="middle" style={{ fill: screenTextColor, fontVariantNumeric: "tabular-nums" }} fontFamily="var(--font-geist-mono), ui-monospace, SFMono-Regular, Menlo, monospace" fontSize="42" fontWeight="600" letterSpacing="1">{browserTime}</motion.text>
        <rect x="162" y="770" width="96" height="5" rx="2.5" fill="var(--color-phone-ink)" opacity="0.82" />
      </g>
    </svg>
  );
}
