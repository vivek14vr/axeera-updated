import type { LucideIcon } from "lucide-react";
import { BellRing, BrainCircuit, FileText, MessageSquareText, TrendingUp } from "lucide-react";

export const lumenLogos = ["Linear", "Vercel", "Ramp", "Retool", "Intercom", "Webflow"];

export const lumenFeatures: { title: string; description: string; icon: LucideIcon; className?: string; accent: string }[] = [
  { title: "Ask in plain English", description: "Ask why activation changed, which cohort is slipping, or what to test next. Lumen translates the question into a transparent analysis.", icon: MessageSquareText, className: "md:col-span-2 md:row-span-2", accent: "text-[#396BFF]" },
  { title: "Predictive forecasting", description: "Model where revenue, retention, and activation are heading before the next planning cycle.", icon: TrendingUp, accent: "text-[#396BFF]" },
  { title: "Anomaly detection", description: "Get a signal when behavior changes meaningfully—not every time a metric wiggles.", icon: BellRing, accent: "text-[#F47C62]" },
  { title: "Evidence trails", description: "Every answer includes the segments, events, and metric definitions that support it.", icon: BrainCircuit, className: "md:col-span-2", accent: "text-[#396BFF]" },
  { title: "Automated readouts", description: "Turn live analysis into a concise weekly report for the people who need to act on it.", icon: FileText, accent: "text-[#F47C62]" },
];

export const lumenPlans = [
  { name: "Starter", description: "For a small team building its first shared source of truth.", monthly: 0, yearly: 0, cta: "Start free trial", features: ["2 connected sources", "25K monthly events", "30-day history", "5 AI questions / day"] },
  { name: "Pro", description: "For product teams making decisions from live data.", monthly: 180, yearly: 144, cta: "Start free trial", features: ["Unlimited sources", "2M monthly events", "24-month history", "Unlimited AI questions", "Slack and email readouts"] },
  { name: "Enterprise", description: "For governed analytics across a growing organization.", monthly: null, yearly: null, cta: "Talk to sales", features: ["Warehouse-native queries", "Custom retention windows", "SAML SSO and SCIM", "Audit logs and controls", "Dedicated data partner"] },
];

export const lumenFaqs = [
  { question: "What can I connect to Lumen?", answer: "Connect your warehouse, product events, billing, CRM, and support data. Lumen supports Snowflake, BigQuery, Postgres, Segment, Stripe, HubSpot, Intercom, and more." },
  { question: "Does Lumen write SQL for me?", answer: "Yes, but you never have to trust a hidden query. Lumen shows the generated analysis, metric definitions, filters, and evidence behind every answer." },
  { question: "How is this different from a dashboard?", answer: "Dashboards show the metrics someone anticipated. Lumen lets you start with the question you have now, then assembles the chart and explanation around it." },
  { question: "Can we control access to sensitive data?", answer: "Yes. Workspace permissions, row-level access, blocked dimensions, audit logs, and SAML SSO are available on Enterprise." },
];
