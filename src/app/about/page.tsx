import { Metadata } from "next";
import { AboutPageContent } from "@/components/about/about-page";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Axeera — our mission, values, team, and approach to building digital products that create measurable business impact.",
};

export default function AboutPage() {
  return <AboutPageContent />;
}