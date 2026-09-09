import { Metadata } from "next";
import { WorkPageContent } from "@/components/work/work-page";

export const metadata: Metadata = {
  title: "Our Work",
  description: "Explore our portfolio of digital products, platforms, and cloud solutions delivered for clients across healthcare, finance, retail, and technology sectors.",
};

export default function WorkPage() {
  return <WorkPageContent />;
}