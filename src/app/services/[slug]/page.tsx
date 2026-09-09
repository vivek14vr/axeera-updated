import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetailContent } from "@/components/services/service-detail";
import { getService, getRelatedServices } from "@/data/services";
import { generateServiceMetadata, generateServiceSchema } from "@/lib/seo";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const service = getService(resolvedParams.slug);
  if (!service) return { title: "Service Not Found" };
  return generateServiceMetadata(service);
}

export default async function ServicePage({ params }: ServicePageProps) {
  const resolvedParams = await params;
  const service = getService(resolvedParams.slug);
  
  if (!service) {
    notFound();
  }

  const relatedServices = getRelatedServices(resolvedParams.slug);
  const schema = generateServiceSchema({
    title: service.title,
    description: service.description,
    slug: service.slug,
    provider: "Axeera",
    areaServed: "Global",
    priceRange: "$$$",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServiceDetailContent service={service} relatedServices={relatedServices} />
    </>
  );
}