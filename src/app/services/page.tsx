import { Metadata } from "next";
import { ServicesPageContent } from "@/components/services/services-page";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore our comprehensive digital services: web development, product development, UI/UX design, mobile development, cloud solutions, AI solutions, and more.",
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}