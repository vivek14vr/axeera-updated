import { Metadata } from "next";
import { WorkPageContent } from "@/components/work/work-page";

export const metadata: Metadata = {
  title: "Our Work",
  description: "Explore real websites and products Axeera has designed and built across legal, education, operations, HR, fashion, and commerce.",
};

export default function WorkPage() {
  return <WorkPageContent />;
}
