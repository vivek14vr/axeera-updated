export interface SeoPackage {
  name: string;
  price: string;
  description: string;
  keywords: string;
  landingPages: string;
  backlinks: string;
  features: string[];
  badge?: string;
}

export interface ServicePrice {
  slug: string;
  title: string;
  price: string;
  model: string;
  description: string;
  includes: string[];
}

export const seoPackages: SeoPackage[] = [
  {
    name: "Launch",
    price: "$300",
    description: "A focused monthly foundation for getting your site discoverable and measurable.",
    keywords: "30 target keywords",
    landingPages: "6 landing pages",
    backlinks: "50 authority links",
    features: [
      "Technical audit and baseline ranking report",
      "Keyword, competitor, and content-gap research",
      "On-page metadata, headings, URLs, and image optimization",
      "Google Business Profile setup and local foundations",
      "Monthly ranking, traffic, and optimization report",
    ],
  },
  {
    name: "Grow",
    price: "$500",
    description: "More content coverage and authority building for teams ready to compound growth.",
    keywords: "50 target keywords",
    landingPages: "10 landing pages",
    backlinks: "90 authority links",
    features: [
      "Everything in Launch",
      "Expanded content briefs and on-site publishing support",
      "Broader local and business-listing coverage",
      "Monthly content promotion and link-building activity",
      "Priority review of technical and conversion opportunities",
    ],
  },
  {
    name: "Scale + AI",
    price: "$750",
    description: "A stronger search engine for brands that need consistent content and smarter workflows.",
    keywords: "75 target keywords",
    landingPages: "15 landing pages",
    backlinks: "150 authority links",
    badge: "Best seller",
    features: [
      "Everything in Grow",
      "AI-assisted content and internal-link opportunities",
      "Conversion-focused content and CTA recommendations",
      "Short-form video and social search support",
      "Monthly strategy review with prioritized next actions",
    ],
  },
  {
    name: "Dominate + AI",
    price: "$1,000",
    description: "A high-velocity program for competitive markets and ambitious growth targets.",
    keywords: "100 target keywords",
    landingPages: "20 landing pages",
    backlinks: "250 authority links",
    features: [
      "Everything in Scale + AI",
      "Higher-volume content production and promotion",
      "Deeper competitor and SERP movement analysis",
      "Expanded digital PR, brand, and local visibility work",
      "Lead-nurture and conversion optimization experiments",
    ],
  },
  {
    name: "Elite + AI",
    price: "$1,500",
    description: "A dedicated search growth engine for brands competing across categories and locations.",
    keywords: "150 target keywords",
    landingPages: "30 landing pages",
    backlinks: "350 authority links",
    features: [
      "Everything in Dominate + AI",
      "Enterprise-level technical and content prioritization",
      "Multi-location and multi-topic search planning",
      "Advanced authority, brand, and video search campaigns",
      "Senior monthly strategy and reporting session",
    ],
  },
];

export const servicePricing: ServicePrice[] = [
  {
    slug: "web-development",
    title: "Web Development",
    price: "From $1,500",
    model: "Project-based",
    description: "High-performing marketing sites and web applications built around your goals.",
    includes: ["Strategy and information architecture", "Responsive UI implementation", "Performance, accessibility, and launch QA"],
  },
  {
    slug: "product-development",
    title: "Product Development",
    price: "From $10,000",
    model: "Project-based",
    description: "A senior product team to move from validated idea to reliable first release.",
    includes: ["Discovery and MVP definition", "Product design and full-stack build", "Analytics, launch, and iteration roadmap"],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    price: "From $750",
    model: "Project-based",
    description: "Clear, usable interfaces and design systems that make the product easier to ship.",
    includes: ["Research and user flows", "Wireframes and high-fidelity screens", "Design system and developer handoff"],
  },
  {
    slug: "mobile-development",
    title: "Mobile Development",
    price: "From $7,500",
    model: "Project-based",
    description: "Useful native and cross-platform experiences for customers and internal teams.",
    includes: ["Mobile product strategy", "React Native or native implementation", "Store submission and release support"],
  },
  {
    slug: "digital-transformation",
    title: "Digital Transformation",
    price: "From $7,500",
    model: "Engagement-based",
    description: "A practical roadmap for modernizing workflows, systems, and customer journeys.",
    includes: ["Current-state audit", "Transformation roadmap and priorities", "Pilot delivery and change support"],
  },
  {
    slug: "cloud-solutions",
    title: "Cloud Solutions",
    price: "From $4,000",
    model: "Engagement-based",
    description: "Cloud foundations that improve reliability, delivery speed, and operational visibility.",
    includes: ["Architecture and infrastructure review", "Deployment and observability setup", "Security and cost optimization"],
  },
  {
    slug: "ai-solutions",
    title: "AI Solutions",
    price: "From $3,000",
    model: "Pilot or project",
    description: "Responsible AI features connected to real workflows, data, and measurable outcomes.",
    includes: ["Use-case and data assessment", "Prototype or production integration", "Evaluation, guardrails, and handover"],
  },
  {
    slug: "ecommerce",
    title: "E-commerce",
    price: "From $2,500",
    model: "Project-based",
    description: "Brand-led commerce experiences that make product discovery and checkout feel simple.",
    includes: ["Catalog and collection architecture", "Storefront design and implementation", "Payments, analytics, and launch QA"],
  },
  {
    slug: "software-consulting",
    title: "Software Consulting",
    price: "$300 / hour",
    model: "Advisory",
    description: "Focused senior guidance for architecture, delivery, technical due diligence, or team enablement.",
    includes: ["Expert technical review", "Written recommendations and priorities", "Working sessions with your team"],
  },
  {
    slug: "maintenance-support",
    title: "Maintenance & Support",
    price: "From $300 / month",
    model: "Monthly retainer",
    description: "Ongoing care that keeps your product secure, fast, and ready for the next release.",
    includes: ["Security and dependency updates", "Performance monitoring and fixes", "Reserved capacity for improvements"],
  },
];
