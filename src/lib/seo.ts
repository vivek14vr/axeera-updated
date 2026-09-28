import { Metadata } from "next";
import { Article } from "@/data/articles";

export const siteConfig = {
  name: "Axeera",
  description: "We design and engineer digital products, platforms, and cloud systems that help businesses launch faster, automate operations, and scale reliably.",
  url: "https://axeera.com",
  ogImage: "/og-image.png",
  twitterHandle: "@axeera",
  linkedin: "https://linkedin.com/company/axeera",
  github: "https://github.com/axeera",
  email: "info@axeera.com",
  phone: "+1 (555) 000-0000",
  address: "San Francisco, CA",
};

export const defaultMetadata: Metadata = {
  title: {
    default: `${siteConfig.name} — Digital Products, Platforms & Cloud Engineering`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "digital product agency",
    "software development",
    "cloud engineering",
    "UI/UX design",
    "mobile development",
    "digital transformation",
    "AI solutions",
    "web development",
    "product design",
    "technology consulting",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: siteConfig.twitterHandle,
    creator: siteConfig.twitterHandle,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export function generatePageMetadata(
  title: string,
  description: string,
  path: string,
  image?: string
): Metadata {
  const url = `${siteConfig.url}${path}`;
  const ogImage = image || siteConfig.ogImage;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      title,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: url,
    },
  };
}

export function generateServiceMetadata(service: {
  title: string;
  description: string;
  slug: string;
  image?: string;
}): Metadata {
  return generatePageMetadata(
    service.title,
    service.description,
    `/services/${service.slug}`,
    service.image
  );
}

export function generateProjectMetadata(project: {
  title: string;
  description: string;
  slug: string;
  image?: string;
  heroImage?: string;
}): Metadata {
  return generatePageMetadata(
    project.title,
    project.description,
    `/work/${project.slug}`,
    project.image || project.heroImage
  );
}

export function generateArticleMetadata(article: Article): Metadata {
  return {
    ...generatePageMetadata(article.title, article.description, `/insights/${article.slug}`, article.featuredImage),
    openGraph: {
      ...generatePageMetadata(article.title, article.description, `/insights/${article.slug}`, article.featuredImage).openGraph,
      type: "article",
      publishedTime: article.publishedAt,
      authors: [article.author.name],
      section: article.category,
      tags: article.tags,
    },
    twitter: {
      ...generatePageMetadata(article.title, article.description, `/insights/${article.slug}`, article.featuredImage).twitter,
    },
  };
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo.png`,
  sameAs: [
    siteConfig.linkedin,
    siteConfig.github,
    `https://twitter.com/${siteConfig.twitterHandle}`,
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: siteConfig.phone,
    contactType: "customer service",
    email: siteConfig.email,
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "San Francisco",
    addressRegion: "CA",
    addressCountry: "US",
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export function generateServiceSchema(service: {
  title: string;
  description: string;
  slug: string;
  provider: string;
  areaServed: string;
  priceRange: string;
}): object {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    url: `${siteConfig.url}/services/${service.slug}`,
    provider: {
      "@type": "Organization",
      name: service.provider,
    },
    areaServed: service.areaServed,
    priceRange: service.priceRange,
    serviceType: "Digital Services",
  };
}

export function generateProjectSchema(project: {
  title: string;
  description: string;
  slug: string;
  image?: string;
  heroImage?: string;
  datePublished: string;
  author: string;
}): object {
  const image = project.image || project.heroImage;
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    url: `${siteConfig.url}/work/${project.slug}`,
    image: image ? `${siteConfig.url}${image}` : undefined,
    datePublished: project.datePublished,
    author: {
      "@type": "Organization",
      name: project.author,
    },
  };
}

export function generateArticleSchema(article: Article): object {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    url: `${siteConfig.url}/insights/${article.slug}`,
    image: article.featuredImage ? `${siteConfig.url}${article.featuredImage}` : undefined,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt || article.publishedAt,
    author: {
      "@type": "Organization",
      name: article.author.name,
    },
    articleSection: article.category,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/logo.png`,
      },
    },
  };
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>): object {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${siteConfig.url}${item.url}`,
    })),
  };
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>): object {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
