import type { Metadata } from "next";
import { PricingPageContent } from "@/components/pricing/pricing-page";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Explore Axeera starting prices for web, product, design, AI, e-commerce, consulting, maintenance, and monthly SEO packages.",
};

export default function PricingPage() {
  return <PricingPageContent />;
}
