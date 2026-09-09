import { Service } from "@/data/services";
import { Project } from "@/data/projects";
import { Article } from "@/data/articles";
import { Testimonial } from "@/data/testimonials";

export type { Service, Project, Article, Testimonial };

export interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
}

export interface ViewportProps {
  width?: string;
  initialScale?: number;
  maximumScale?: number;
  themeColor?: string;
}

export interface LayoutProps {
  children: React.ReactNode;
}

export interface PageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface AnimationProps {
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
}

export interface IntersectionObserverOptions {
  threshold?: number | number[];
  rootMargin?: string;
  triggerOnce?: boolean;
}