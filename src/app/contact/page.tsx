import { Metadata } from "next";
import { ContactPageContent } from "@/components/contact/contact-page";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Start a project, book a consultation, or just say hello. We'd love to hear about your challenge and explore how we can help.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}