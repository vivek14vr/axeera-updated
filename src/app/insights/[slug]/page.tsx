import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleDetailContent } from "@/components/insights/article-detail";
import { articles, getArticle, getRelatedArticles } from "@/data/articles";
import { generateArticleMetadata, generateArticleSchema, generateBreadcrumbSchema } from "@/lib/seo";
import { formatDate } from "@/lib/utils";

interface ArticleDetailPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticleDetailPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const article = getArticle(resolvedParams.slug);
  if (!article) return { title: "Article Not Found" };
  return generateArticleMetadata(article);
}

export default async function ArticleDetailPage({ params }: ArticleDetailPageProps) {
  const resolvedParams = await params;
  const article = getArticle(resolvedParams.slug);
  
  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(resolvedParams.slug);
  const schema = generateArticleSchema(article);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Insights", url: "/insights" },
    { name: article.title, url: `/insights/${article.slug}` },
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
      <ArticleDetailContent article={article} relatedArticles={relatedArticles} />
    </>
  );
}
