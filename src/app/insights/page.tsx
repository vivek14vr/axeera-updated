import { Metadata } from "next";
import { InsightsPageContent } from "@/components/insights/insights-page";

export const metadata: Metadata = {
  title: "Insights",
  description: "Thought leadership on digital product development, cloud engineering, AI, design systems, and technology strategy from the Axeera team.",
};

export default function InsightsPage() {
  return <InsightsPageContent />;
}