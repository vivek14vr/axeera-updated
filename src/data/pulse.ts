import type { LucideIcon } from "lucide-react";
import { Activity, Bot, BrainCircuit, FileBarChart, Radar } from "lucide-react";

export const pulseLogos = ["Lattice", "Vercel", "Linear", "Arc", "Notion", "Ramp"];

export const pulseFeatures: { title: string; description: string; icon: LucideIcon; tone: string; size: string }[] = [
  { title: "Anomaly radar", description: "Catch conversion drops, latency spikes, and retention shifts before they become stand-ups.", icon: Radar, tone: "from-cyan-400/20 to-blue-500/5", size: "md:col-span-2" },
  { title: "Ask your data", description: "Query product behavior in plain English. Pulse shows the answer and the evidence behind it.", icon: Bot, tone: "from-violet-400/20 to-fuchsia-500/5", size: "md:row-span-2" },
  { title: "Predictive trends", description: "See where activation and revenue are heading—not just where they have been.", icon: BrainCircuit, tone: "from-amber-300/20 to-orange-500/5", size: "" },
  { title: "Automated reports", description: "Ship a clear weekly readout to every team, automatically synthesized by AI.", icon: FileBarChart, tone: "from-emerald-300/20 to-cyan-500/5", size: "" },
  { title: "Live metric rooms", description: "Give every squad a shared view of the numbers that move their work.", icon: Activity, tone: "from-pink-300/20 to-violet-500/5", size: "md:col-span-2" },
];

export const pulsePlans = [
  { name: "Starter", description: "For teams finding their signal.", monthly: 0, yearly: 0, cta: "Start for free", features: ["2 data sources", "10K monthly events", "7-day history", "AI summaries"] },
  { name: "Growth", description: "For product teams scaling what works.", monthly: 149, yearly: 119, cta: "Start 14-day trial", features: ["Unlimited data sources", "1M monthly events", "12-month history", "Predictive forecasting", "Slack + Notion reports"] },
  { name: "Scale", description: "For organizations where every decision compounds.", monthly: 499, yearly: 399, cta: "Talk to sales", features: ["Unlimited events", "Advanced governance", "Custom AI models", "SAML SSO + SCIM", "Dedicated data partner"] },
];

export const pulseFaqs = [
  { question: "How long does setup take?", answer: "Most teams connect their warehouse and first product source in under an hour. Pulse begins backfilling historical data while the live event stream starts immediately." },
  { question: "Does Pulse replace our data warehouse?", answer: "No. Pulse sits on top of your existing stack. It connects to warehouses like Snowflake and BigQuery plus product sources like Segment, PostHog, and Stripe." },
  { question: "How does the AI explain its insights?", answer: "Every generated insight includes the metric definition, time window, segments, contributing events, and a link back to the underlying exploration. No black-box scorecards." },
  { question: "Can we control what the AI can access?", answer: "Yes. Define workspace permissions, sensitive dimensions, approved metrics, and retention policies. Enterprise plans include audit logs and SAML SSO." },
];
