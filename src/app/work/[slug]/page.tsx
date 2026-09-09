import { Metadata } from "next";
import { notFound } from "next/navigation";
import { WorkDetailContent } from "@/components/work/work-detail";
import { getProject, getRelatedProjects } from "@/data/projects";
import { generateProjectMetadata, generateProjectSchema, generateBreadcrumbSchema } from "@/lib/seo";

interface WorkDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: WorkDetailPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const project = getProject(resolvedParams.slug);
  if (!project) return { title: "Project Not Found" };
  return generateProjectMetadata(project);
}

export default async function WorkDetailPage({ params }: WorkDetailPageProps) {
  const resolvedParams = await params;
  const project = getProject(resolvedParams.slug);
  
  if (!project) {
    notFound();
  }

  const relatedProjects = getRelatedProjects(resolvedParams.slug);
  const schema = generateProjectSchema(project);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Work", url: "/work" },
    { name: project.title, url: `/work/${project.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <WorkDetailContent project={project} relatedProjects={relatedProjects} />
    </>
  );
}