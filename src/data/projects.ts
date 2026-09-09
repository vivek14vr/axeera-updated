export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  industry: string;
  services: string[];
  heroImage: string;
  gallery: string[];
  challenge: string;
  approach: string;
  solution: string;
  results: Result[];
  technologies: string[];
  duration: string;
  teamSize: number;
  clientName: string;
  clientLogo: string;
  testimonial?: Testimonial;
  relatedProjects: string[];
  featured: boolean;
  year: number;
  datePublished: string;
  author: string;
}

export interface Result {
  metric: string;
  value: string;
  description?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
}

export const projects: Project[] = [
  {
    slug: "meridian-health-platform",
    title: "Meridian Health Platform",
    shortDescription: "A unified digital health platform connecting patients, providers, and payers across 200+ clinics.",
    description: "Meridian Health needed to replace a fragmented legacy system with a unified platform serving 2M+ patients across 200+ clinics. We architected and built a HIPAA-compliant platform with real-time scheduling, telehealth, patient portal, and provider dashboards—reducing appointment no-shows by 40% and cutting administrative overhead by 60%.",
    industry: "Healthcare",
    services: ["web-development", "product-development", "cloud-solutions", "ui-ux-design"],
    heroImage: "/images/projects/meridian-hero.svg",
    gallery: [
      "/images/projects/meridian-1.jpg",
      "/images/projects/meridian-2.jpg",
      "/images/projects/meridian-3.jpg",
    ],
    challenge: "Meridian operated on 12 disparate systems built over 15 years. Patient data was siloed, scheduling required phone calls, and providers spent 30% of their time on administrative tasks. The legacy stack couldn't support telehealth or modern patient expectations.",
    approach: "We conducted a 6-week discovery across 5 stakeholder groups, mapped 200+ user journeys, and designed a modular architecture. We chose a strangler fig pattern—building the new platform alongside legacy systems and migrating clinic by clinic to minimize risk.",
    solution: "A Next.js/React platform on AWS with FHIR-compliant APIs, real-time scheduling engine, integrated telehealth (WebRTC), patient portal with mobile apps, provider dashboard with clinical decision support, and automated billing reconciliation. Built with TypeScript, PostgreSQL, Redis, and Kubernetes.",
    results: [
      { metric: "Appointment No-Shows", value: "-40%", description: "Automated reminders and self-scheduling" },
      { metric: "Admin Time", value: "-60%", description: "Unified workflows and automation" },
      { metric: "Patient Satisfaction", value: "4.8/5", description: "Post-visit surveys across 200+ clinics" },
      { metric: "System Uptime", value: "99.99%", description: "Multi-AZ deployment with auto-failover" },
      { metric: "Development Velocity", value: "3x", description: "Shared component library and platform" },
    ],
    technologies: [
      "Next.js 15",
      "React 18",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "Kubernetes (EKS)",
      "Terraform",
      "FHIR/R4",
      "WebRTC",
      "GraphQL",
      "Tailwind CSS",
      "Storybook",
    ],
    duration: "14 months",
    teamSize: 18,
    clientName: "Meridian Health Systems",
    clientLogo: "/images/clients/meridian-logo.svg",
    testimonial: {
      quote: "Axeera didn't just build software—they understood healthcare workflows and regulatory constraints. The platform has fundamentally changed how our clinics operate.",
      author: "Dr. Sarah Chen",
      role: "Chief Medical Information Officer",
      company: "Meridian Health Systems",
    },
    relatedProjects: ["vitality-wellness-app", "apex-insurance-portal"],
    featured: true,
    year: 2024,
    datePublished: "2024-06-15",
    author: "Axeera",
  },
  {
    slug: "velocity-commerce",
    title: "Velocity Commerce Platform",
    shortDescription: "Headless commerce platform processing $500M+ GMV annually across 15 countries.",
    description: "A direct-to-consumer brand outgrew Shopify Plus and needed a composable commerce architecture supporting complex B2B workflows, subscription commerce, and global expansion. We built a headless platform on commercetools with a Next.js storefront, reducing page load times by 65% and increasing conversion by 28%.",
    industry: "Retail & E-commerce",
    services: ["ecommerce", "web-development", "product-development", "cloud-solutions"],
    heroImage: "/images/projects/velocity-hero.svg",
    gallery: [
      "/images/projects/velocity-1.jpg",
      "/images/projects/velocity-2.jpg",
    ],
    challenge: "The brand hit Shopify's limits: rigid B2B pricing, no native subscription management for complex bundles, slow international expansion, and increasing platform fees eating 3% of revenue. They needed ownership of their commerce stack.",
    approach: "We evaluated commercetools, Medusa, and custom builds. Selected commercetools for B2B maturity and ecosystem. Designed a phased migration: catalog → checkout → accounts → subscriptions. Ran both platforms in parallel for 8 weeks with traffic shadowing.",
    solution: "Composable commerce on commercetools with Next.js 15 storefront, Algolia search, Stripe Billing for subscriptions, Contentful for content, and Vercel Edge Network. Custom B2B pricing engine, quote-to-order workflow, and multi-currency/multi-language support across 15 markets.",
    results: [
      { metric: "Page Load Time", value: "-65%", description: "LCP from 3.2s to 1.1s globally" },
      { metric: "Conversion Rate", value: "+28%", description: "Faster checkout, better UX" },
      { metric: "Platform Costs", value: "-40%", description: "Eliminated Shopify Plus fees" },
      { metric: "International Launch", value: "4 weeks", description: "New market from 6 months to 4 weeks" },
      { metric: "Developer Velocity", value: "2.5x", description: "Decoupled frontend/backend teams" },
    ],
    technologies: [
      "Next.js 15",
      "React 18",
      "TypeScript",
      "commercetools",
      "Stripe",
      "Algolia",
      "Contentful",
      "Vercel",
      "Tailwind CSS",
      "GraphQL",
      "Playwright",
      "Datadog",
    ],
    duration: "10 months",
    teamSize: 14,
    clientName: "Velocity Brands",
    clientLogo: "/images/clients/velocity-logo.svg",
    testimonial: {
      quote: "The migration was seamless—our customers didn't notice, but our metrics sure did. 28% conversion lift paid for the project in 3 months.",
      author: "Marcus Rodriguez",
      role: "VP Engineering",
      company: "Velocity Brands",
    },
    relatedProjects: ["artisan-marketplace", "luxe-retail-platform"],
    featured: true,
    year: 2024,
    datePublished: "2024-03-22",
    author: "Axeera",
  },
  {
    slug: "nexus-financial-dashboard",
    title: "Nexus Financial Dashboard",
    shortDescription: "Real-time portfolio management platform for $50B+ AUM, processing 10M+ transactions daily.",
    description: "A global asset manager needed to replace a 20-year-old portfolio management system. We built a modern, real-time platform handling complex multi-asset portfolios, regulatory reporting, and client-facing dashboards—processing 10M+ transactions daily with sub-100ms query response.",
    industry: "Financial Services",
    services: ["web-development", "product-development", "cloud-solutions", "software-consulting"],
    heroImage: "/images/projects/nexus-hero.svg",
    gallery: [
      "/images/projects/nexus-1.jpg",
      "/images/projects/nexus-2.jpg",
      "/images/projects/nexus-3.jpg",
    ],
    challenge: "Legacy system built on mainframe/COBOL couldn't support real-time reporting, new asset classes (crypto, alternatives), or modern regulatory requirements (MiFID II, SFDR). Batch processing meant portfolio managers saw yesterday's data.",
    approach: "We proposed an event-driven architecture with CQRS. Built a streaming platform on Kafka, materialized views for common queries, and a GraphQL federation layer. Migrated data using dual-write pattern with reconciliation jobs over 6 months.",
    solution: "Real-time portfolio platform on AWS with Kafka event streaming, PostgreSQL/TimescaleDB for time-series, GraphQL federation (Apollo), Next.js dashboard with WebSocket updates, automated regulatory reporting engine, and client portal with white-label support.",
    results: [
      { metric: "Query Latency", value: "<100ms", description: "P99 for complex portfolio queries" },
      { metric: "Data Freshness", value: "Real-time", description: "From T+1 batch to streaming" },
      { metric: "Regulatory Reports", value: "Automated", description: "MiFID II, SFDR, Form PF" },
      { metric: "Incident Resolution", value: "-80%", description: "Observability and automated runbooks" },
      { metric: "New Asset Class Onboarding", value: "Days not months", description: "Schema-on-read flexibility" },
    ],
    technologies: [
      "Next.js 15",
      "React 18",
      "TypeScript",
      "Apache Kafka",
      "TimescaleDB",
      "PostgreSQL",
      "Apollo Federation",
      "GraphQL",
      "Kubernetes (EKS)",
      "Terraform",
      "OpenTelemetry",
      "Grafana",
    ],
    duration: "18 months",
    teamSize: 22,
    clientName: "Nexus Capital Partners",
    clientLogo: "/images/clients/nexus-logo.svg",
    testimonial: {
      quote: "This is the first time our portfolio managers have trusted the numbers on their screens. The real-time capability changed how we make decisions.",
      author: "James Patterson",
      role: "Chief Technology Officer",
      company: "Nexus Capital Partners",
    },
    relatedProjects: ["apex-insurance-portal", "quant-risk-engine"],
    featured: true,
    year: 2023,
    datePublished: "2023-09-10",
    author: "Axeera",
  },
  {
    slug: "artisan-marketplace",
    title: "Artisan Marketplace",
    shortDescription: "Two-sided marketplace connecting 50K+ artisans with global buyers, $100M+ GMV in year one.",
    description: "A social enterprise needed a marketplace platform supporting 50K+ artisans across 40 countries with complex logistics, multi-currency payments, and story-driven product pages. We built a scalable marketplace on Medusa with custom vendor tools, achieving $100M GMV in year one.",
    industry: "Marketplace & Platforms",
    services: ["ecommerce", "product-development", "web-development", "mobile-development"],
    heroImage: "/images/projects/artisan-hero.svg",
    gallery: [
      "/images/projects/artisan-1.jpg",
      "/images/projects/artisan-2.jpg",
    ],
    challenge: "Existing platforms (Etsy, Amazon Handmade) took 15-20% commissions and offered no brand ownership. Artisans needed tools for inventory, shipping, storytelling, and direct customer relationships. Buyers wanted authenticity verification and impact tracking.",
    approach: "Built on Medusa (open-source commerce) for flexibility and ownership. Custom vendor dashboard with inventory sync, shipping label generation, and impact analytics. Buyer-facing Next.js PWA with artisan stories, video content, and transparent pricing breakdown.",
    solution: "Medusa backend with custom plugins for vendor management, Stripe Connect for multi-party payments, Shippo for global shipping, Cloudinary for media, Next.js PWA frontend, React Native vendor app, and analytics pipeline with PostHog.",
    results: [
      { metric: "Artisans Onboarded", value: "50K+", description: "Across 40 countries in 12 months" },
      { metric: "Year 1 GMV", value: "$100M+", description: "Exceeded projections by 40%" },
      { metric: "Artisan Revenue Share", value: "92%", description: "vs 80-85% on traditional platforms" },
      { metric: "Repeat Purchase Rate", value: "34%", description: "Industry average ~20%" },
      { metric: "Mobile Revenue", value: "68%", description: "PWA and native app combined" },
    ],
    technologies: [
      "Medusa",
      "Next.js 15",
      "React Native",
      "TypeScript",
      "Stripe Connect",
      "PostgreSQL",
      "Redis",
      "Kubernetes",
      "PostHog",
      "Cloudinary",
      "Shippo",
      "Vercel",
    ],
    duration: "12 months",
    teamSize: 16,
    clientName: "Artisan Collective",
    clientLogo: "/images/clients/artisan-logo.svg",
    testimonial: {
      quote: "For the first time, our artisans own their customer relationships and see exactly where every dollar goes. That transparency builds trust.",
      author: "Priya Sharma",
      role: "Founder & CEO",
      company: "Artisan Collective",
    },
    relatedProjects: ["velocity-commerce", "luxe-retail-platform"],
    featured: false,
    year: 2024,
    datePublished: "2024-01-20",
    author: "Axeera",
  },
  {
    slug: "vitality-wellness-app",
    title: "Vitality Wellness App",
    shortDescription: "Consumer health app with 2M+ downloads, 4.9-star rating, and integrated wearable ecosystem.",
    description: "A wellness startup needed a consumer app integrating with Apple Health, Google Fit, Garmin, and Whoop—providing personalized coaching, habit tracking, and community features. We built a React Native app with real-time sync, achieving 2M downloads and 4.9-star rating.",
    industry: "Healthcare & Wellness",
    services: ["mobile-development", "product-development", "ui-ux-design", "ai-solutions"],
    heroImage: "/images/projects/vitality-hero.svg",
    gallery: [
      "/images/projects/vitality-1.jpg",
      "/images/projects/vitality-2.jpg",
    ],
    challenge: "Fragmented wearable data, no unified health score, generic coaching that didn't adapt, and poor retention after 30 days. Users wanted one app that understood their complete health picture.",
    approach: "Built a unified data layer normalizing 50+ metrics from 10+ wearables. Designed a health scoring algorithm with explainable AI. Created adaptive coaching that learns from user behavior. Built community features with privacy-first architecture.",
    solution: "React Native (Expo) with TypeScript, unified wearable SDK, TensorFlow Lite for on-device ML, Firebase for real-time sync, RevenueCat for subscriptions, Sentry for monitoring, and custom design system with 200+ components.",
    results: [
      { metric: "Downloads", value: "2M+", description: "Organic growth, 4.9 App Store rating" },
      { metric: "Day 30 Retention", value: "42%", description: "Industry average ~25%" },
      { metric: "Subscription Conversion", value: "18%", description: "Freemium to paid" },
      { metric: "Data Sync Reliability", value: "99.7%", description: "Across 10+ wearable brands" },
      { metric: "Health Score Accuracy", value: "Validated", description: "Clinical study correlation r=0.87" },
    ],
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "TensorFlow Lite",
      "Firebase",
      "RevenueCat",
      "Sentry",
      "PostHog",
      "Apple HealthKit",
      "Google Fit API",
      "Garmin Connect IQ",
      "Whoop API",
    ],
    duration: "10 months",
    teamSize: 12,
    clientName: "Vitality Labs",
    clientLogo: "/images/clients/vitality-logo.svg",
    testimonial: {
      quote: "The health scoring algorithm is our secret sauce. Users trust it because it explains itself—and it actually works.",
      author: "Dr. Michael Torres",
      role: "Co-Founder & Chief Science Officer",
      company: "Vitality Labs",
    },
    relatedProjects: ["meridian-health-platform", "quant-risk-engine"],
    featured: false,
    year: 2024,
    datePublished: "2024-05-05",
    author: "Axeera",
  },
  {
    slug: "luxe-retail-platform",
    title: "Luxe Retail Platform",
    shortDescription: "Unified commerce for luxury retailer—150 stores, 12 countries, endless aisle, clienteling.",
    description: "A luxury fashion house needed to unify online and in-store experiences. We built a composable platform with endless aisle (order in-store, ship from warehouse), clienteling tools for associates, and a headless storefront—driving 35% of online revenue from store-initiated orders.",
    industry: "Retail & Luxury",
    services: ["ecommerce", "web-development", "mobile-development", "cloud-solutions"],
    heroImage: "/images/projects/luxe-hero.svg",
    gallery: [
      "/images/projects/luxe-1.jpg",
      "/images/projects/luxe-2.jpg",
    ],
    challenge: "Stores and e-commerce operated as separate P&Ls. Associates couldn't access online inventory. Clients expected seamless experience but got fragmented service. Inventory visibility was store-only.",
    approach: "Implemented endless aisle architecture: single inventory pool, real-time availability, associate iPad app for clienteling, unified customer profile. Headless commercetools backend with Next.js storefront and React Native associate app.",
    solution: "Commercetools with custom inventory service, Next.js storefront, React Native associate app (offline-first), Algolia for unified search, Segment for customer data platform, Braze for personalization, and Vercel Edge for global performance.",
    results: [
      { metric: "Store-Initiated Online Revenue", value: "35%", description: "Endless aisle + clienteling" },
      { metric: "Inventory Turnover", value: "+22%", description: "Unified pool reduced dead stock" },
      { metric: "Client Retention", value: "+18%", description: "Associates with full client history" },
      { metric: "Average Order Value", value: "+40%", description: "Cross-channel recommendations" },
      { metric: "Global Launch Time", value: "6 weeks", description: "New market from concept to live" },
    ],
    technologies: [
      "commercetools",
      "Next.js 15",
      "React Native",
      "TypeScript",
      "Algolia",
      "Segment",
      "Braze",
      "Vercel",
      "PostgreSQL",
      "Redis",
      "Kubernetes",
      "Datadog",
    ],
    duration: "14 months",
    teamSize: 20,
    clientName: "Luxe Maison",
    clientLogo: "/images/clients/luxe-logo.svg",
    testimonial: {
      quote: "Our associates are now our best digital channel. They have the tools to serve clients anywhere—in store, at home, or traveling.",
      author: "Isabelle Dubois",
      role: "Global Digital Director",
      company: "Luxe Maison",
    },
    relatedProjects: ["velocity-commerce", "artisan-marketplace"],
    featured: true,
    year: 2023,
    datePublished: "2023-11-01",
    author: "Axeera",
  },
  {
    slug: "apex-insurance-portal",
    title: "Apex Insurance Portal",
    shortDescription: "Digital policy administration and claims platform reducing processing time from 14 days to 4 hours.",
    description: "A regional insurer modernized their policy admin and claims system. We built a digital portal with automated underwriting, straight-through processing, and customer self-service—cutting claims processing from 14 days to 4 hours and reducing operational costs by 45%.",
    industry: "Insurance",
    services: ["web-development", "product-development", "digital-transformation", "cloud-solutions"],
    heroImage: "/images/projects/apex-hero.svg",
    gallery: [
      "/images/projects/apex-1.jpg",
      "/images/projects/apex-2.jpg",
    ],
    challenge: "Paper-heavy processes, mainframe policy admin, manual underwriting, and claims requiring 5+ handoffs. Customers waited weeks for quotes and claims. Operational costs were 3x industry benchmarks.",
    approach: "Built a modern policy administration system with rules engine for automated underwriting, document AI for claims intake, and customer portal for self-service. Phased migration: new business → renewals → in-force → claims.",
    solution: "Next.js portal, NestJS backend with temporal workflows, PostgreSQL, Camunda for BPMN, AWS Textract for document AI, Plaid for financial verification, Twilio for communications, and Kubernetes on AWS.",
    results: [
      { metric: "Claims Processing", value: "14 days → 4 hours", description: "Straight-through for 60% of claims" },
      { metric: "Quote Generation", value: "Minutes not days", description: "Automated underwriting engine" },
      { metric: "Operational Cost", value: "-45%", description: "Automation and self-service" },
      { metric: "Customer NPS", value: "+35 pts", description: "Transparency and speed" },
      { metric: "Combined Ratio", value: "Improved 8 pts", description: "Loss adjustment expense reduction" },
    ],
    technologies: [
      "Next.js 15",
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "Temporal",
      "Camunda",
      "AWS Textract",
      "Plaid",
      "Twilio",
      "Kubernetes (EKS)",
      "Terraform",
      "Grafana",
    ],
    duration: "16 months",
    teamSize: 18,
    clientName: "Apex Insurance Group",
    clientLogo: "/images/clients/apex-logo.svg",
    testimonial: {
      quote: "We went from industry laggard to digital leader. The claims automation alone pays for the platform every quarter.",
      author: "Robert Kim",
      role: "Chief Operating Officer",
      company: "Apex Insurance Group",
    },
    relatedProjects: ["meridian-health-platform", "nexus-financial-dashboard"],
    featured: false,
    year: 2023,
    datePublished: "2023-07-15",
    author: "Axeera",
  },
  {
    slug: "quant-risk-engine",
    title: "Quant Risk Engine",
    shortDescription: "Real-time risk analytics platform for quantitative hedge fund—Monte Carlo at scale.",
    description: "A quantitative hedge fund needed a risk engine capable of running 100K+ Monte Carlo simulations per second across 500+ strategies. We built a distributed computing platform on Kubernetes with GPU acceleration, reducing VaR calculation from 4 hours to 3 minutes.",
    industry: "Financial Services",
    services: ["product-development", "cloud-solutions", "software-consulting", "ai-solutions"],
    heroImage: "/images/projects/quant-hero.svg",
    gallery: [
      "/images/projects/quant-1.jpg",
    ],
    challenge: "Legacy risk engine ran on 200-core on-premise cluster. 4-hour VaR cycle meant intraday risk was invisible. GPU utilization was 15%. No support for alternative data or ML-based risk factors.",
    approach: "Designed a serverless burst-compute architecture on Kubernetes with Kueue for queueing, NVIDIA GPU operator, and Ray for distributed Python. Built a risk factor library with 200+ factors including alternative data. Implemented incremental VaR for intraday updates.",
    solution: "Ray on Kubernetes (KubeRay), NVIDIA A100 GPUs, Python/Numba for compute, Apache Arrow for data exchange, Next.js risk dashboard with WebSocket streaming, S3/Parquet for data lake, and GitOps with ArgoCD.",
    results: [
      { metric: "VaR Calculation", value: "4 hours → 3 minutes", description: "100K simulations, 500 strategies" },
      { metric: "GPU Utilization", value: "85%", description: "From 15% with dynamic scheduling" },
      { metric: "Intraday Risk Updates", value: "Every 5 min", description: "Incremental VaR with streaming" },
      { metric: "Compute Cost", value: "-60%", description: "Burst to cloud, scale to zero" },
      { metric: "New Factor Onboarding", value: "Hours not weeks", description: "Factor library with CI/CD" },
    ],
    technologies: [
      "Ray",
      "Kubernetes (KubeRay)",
      "NVIDIA GPU Operator",
      "Python/Numba",
      "Apache Arrow",
      "Next.js 15",
      "TypeScript",
      "S3/Parquet",
      "ArgoCD",
      "Prometheus",
      "Grafana",
      "WebSockets",
    ],
    duration: "8 months",
    teamSize: 10,
    clientName: "Quant Alpha Capital",
    clientLogo: "/images/clients/quant-logo.svg",
    testimonial: {
      quote: "Intraday risk visibility changed how we manage capital. We catch position drift before it becomes a problem.",
      author: "Dr. Elena Volkov",
      role: "Head of Risk",
      company: "Quant Alpha Capital",
    },
    relatedProjects: ["nexus-financial-dashboard", "vitality-wellness-app"],
    featured: false,
    year: 2024,
    datePublished: "2024-08-01",
    author: "Axeera",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(limit = 3): Project[] {
  return projects.filter((p) => p.featured).slice(0, limit);
}

export function getRelatedProjects(slug: string, limit = 3): Project[] {
  const project = getProject(slug);
  if (!project) return projects.slice(0, limit);
  return projects
    .filter((p) => project.relatedProjects.includes(p.slug))
    .slice(0, limit);
}

export function getProjectsByIndustry(industry: string): Project[] {
  return projects.filter((p) => p.industry === industry);
}

export function getProjectsByService(serviceSlug: string): Project[] {
  return projects.filter((p) => p.services.includes(serviceSlug));
}

export const industries = [
  "Healthcare",
  "Retail & E-commerce",
  "Financial Services",
  "Insurance",
  "Marketplace & Platforms",
  "Retail & Luxury",
  "Healthcare & Wellness",
] as const;
