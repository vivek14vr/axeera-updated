import { Metadata } from "next";
import { AxeeraHome } from "@/components/axeera/axeera-home";

export const metadata: Metadata = {
  title: "Axeera — Digital craft for ambitious brands",
  description: "Axeera designs and builds websites, apps, AI integrations, SEO systems, and software for ambitious brands.",
};

export default function HomePage() {
  return (
    <>
      <AxeeraHome />
    </>
  );
}
