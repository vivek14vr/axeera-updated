export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  industry: string;
  services: string[];
  heroImage: string;
  imageWidth: number;
  imageHeight: number;
  imageAspectRatio: number;
  gallery: string[];
  challenge: string;
  approach: string;
  solution: string;
  results: Result[];
  technologies: string[];
  duration: string;
  teamSize: number;
  clientName: string;
  clientLogo?: string;
  liveUrl: string;
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

/**
 * Portfolio entries are intentionally based on the live builds supplied by the team.
 * Keep outcome copy evidence-led; add quantitative results only when the client has
 * approved them for publication.
 */
export const projects: Project[] = [
  {
    slug: "jury-hammer",
    title: "Jury & Hammer Advocates",
    shortDescription: "An editorial legal chambers website for a partner-led practice serving complex disputes across India.",
    description: "Jury & Hammer needed a digital presence with the same considered, authoritative tone as its written work. We shaped a structured chambers experience around practice areas, advocates, notable judgements, journal pieces, and a private consultation path.",
    industry: "Legal & Professional Services",
    services: ["web-development", "ui-ux-design", "digital-transformation"],
    heroImage: "/images/projects/jury-hammer/hero-full.png",
    imageWidth: 3360,
    imageHeight: 1920,
    imageAspectRatio: 3360 / 1920,
    gallery: [
      "/images/projects/jury-hammer/gallery/image_1.png",
      "/images/projects/jury-hammer/gallery/image_2.png",
      "/images/projects/jury-hammer/gallery/image_4.png",
      "/images/projects/jury-hammer/gallery/image_5.png",
      "/images/projects/jury-hammer/gallery/image_6.png",
    ],
    challenge: "The site needed to communicate authority without feeling noisy or corporate, while making a deep practice offering easy for prospective clients to understand.",
    approach: "We organized the experience as an editorial reading journey: a strong opening statement, clear practice pathways, partner-led credibility, judgements, journal content, and a direct consultation flow.",
    solution: "A responsive, content-led legal website with a distinctive visual system, deep practice navigation, advocate profiles, a judgement archive, journal articles, and a consultation form designed around trust and clarity.",
    results: [
      { metric: "Positioning", value: "Editorial", description: "A more considered digital expression for a disputes practice." },
      { metric: "Primary journey", value: "Consult", description: "Visitors can move from practice areas to a private consultation." },
      { metric: "Content system", value: "5 sections", description: "Practice, advocates, judgements, journal, and consultation." },
    ],
    technologies: ["Responsive web design", "Content-led architecture", "Practice navigation", "Editorial UI", "SEO foundations"],
    duration: "Website build",
    teamSize: 1,
    clientName: "Jury & Hammer Advocates",
    liveUrl: "https://jurr-hammer.onrender.com",
    relatedProjects: ["phonics-assam", "la-fashion"],
    featured: true,
    year: 2026,
    datePublished: "2026-01-01",
    author: "Axeera",
  },
  {
    slug: "phonics-assam",
    title: "Phonics Assam",
    shortDescription: "An image-led education project site documenting classroom impact and making teaching galleries easy to explore.",
    description: "Phonics Assam needed a warm, credible home for its literacy mission, classroom stories, and growing library of workshops. The experience makes the initiative easy to understand while giving visitors a clear route into galleries, the project story, and reading-success content.",
    industry: "Education & Social Impact",
    services: ["web-development", "ui-ux-design", "digital-transformation"],
    heroImage: "/images/projects/phonics-assam/hero-full.png",
    imageWidth: 1200,
    imageHeight: 630,
    imageAspectRatio: 1200 / 630,
    gallery: [
      "/images/projects/phonics-assam/gallery/image_1.png",
      "/images/projects/phonics-assam/gallery/image_2.png",
      "/images/projects/phonics-assam/gallery/image_3.png",
      "/images/projects/phonics-assam/gallery/image_4.png",
    ],
    challenge: "The initiative had a powerful story and a large archive of classroom moments, but needed a digital structure that could make the mission, journey, and gallery content feel connected.",
    approach: "We led with the mission, then built clear paths into the project story, impact narrative, state and school galleries, reading-success content, and a video-led explanation of the work.",
    solution: "A responsive storytelling website with gallery discovery by state, city, school, and year; project background; classroom imagery; impact sections; and clear calls to explore the mission further.",
    results: [
      { metric: "Project reach", value: "2,200 schools", description: "Reported on the live Phonics Assam site." },
      { metric: "Geography", value: "11 districts", description: "Reported statewide footprint of the initiative." },
      { metric: "People reached", value: "100,000+", description: "Reported children impacted through the program." },
    ],
    technologies: ["Responsive web design", "Gallery browsing", "Video storytelling", "Content architecture", "SEO foundations"],
    duration: "Website build",
    teamSize: 1,
    clientName: "Phonics Assam",
    liveUrl: "https://phonicsassam-front.onrender.com",
    relatedProjects: ["jury-hammer", "peopleos-hrms"],
    featured: true,
    year: 2026,
    datePublished: "2026-01-01",
    author: "Axeera",
  },
  {
    slug: "sv-enterprises-inventory",
    title: "SV Enterprises Inventory",
    shortDescription: "A focused warehouse inventory app for adding, selling, receiving, and reporting stock across multiple locations.",
    description: "SV Enterprises needed a straightforward internal tool that warehouse teams could use without navigating a heavy enterprise interface. The product is organized around the everyday actions that keep stock moving, with separate access for warehouse and admin workflows.",
    industry: "Operations & Enterprise",
    services: ["web-development", "product-development", "ui-ux-design"],
    heroImage: "/images/projects/sv-enterprises-inventory/hero-full.png",
    imageWidth: 3360,
    imageHeight: 1918,
    imageAspectRatio: 3360 / 1918,
    gallery: [
      "/images/projects/sv-enterprises-inventory/gallery/image_1.png",
      "/images/projects/sv-enterprises-inventory/gallery/image_2.png",
      "/images/projects/sv-enterprises-inventory/gallery/image_3.png",
      "/images/projects/sv-enterprises-inventory/gallery/image_4.png",
    ],
    challenge: "Warehouse work depends on speed and clarity. The app needed to make stock movement and reporting understandable for different teams and locations.",
    approach: "We kept the interface action-oriented, gave each role a clear entry point, and separated day-to-day warehouse work from reporting and settings.",
    solution: "An authenticated inventory workspace with role-based access for Vasai, Goregaon, and admin users, plus dedicated flows for adding, selling, sending, receiving, checking, and reporting stock.",
    results: [
      { metric: "Workspaces", value: "3 roles", description: "Vasai warehouse, Goregaon warehouse, and admin access." },
      { metric: "Core actions", value: "Add → sell", description: "The primary stock movement flow is visible at the entry point." },
      { metric: "Access", value: "Private", description: "Authenticated access for authorized SV Enterprises personnel." },
    ],
    technologies: ["Authenticated UI", "Role-based workflows", "Inventory operations", "Responsive dashboard", "Reporting flows"],
    duration: "Product build",
    teamSize: 1,
    clientName: "SV Enterprises",
    liveUrl: "https://inventory-front-uw53.onrender.com",
    relatedProjects: ["peopleos-hrms", "hitude"],
    featured: true,
    year: 2026,
    datePublished: "2026-01-01",
    author: "Axeera",
  },
  {
    slug: "peopleos-hrms",
    title: "PeopleOS HRMS",
    shortDescription: "A people operations workspace designed to make attendance, employee moments, and team administration easier to manage.",
    description: "PeopleOS brings HR administration into a clearer, more human workspace. The experience introduces separate admin and employee entry points, role-aware access, and a product story centered on reducing busywork across the employee lifecycle.",
    industry: "HR & Operations",
    services: ["web-development", "product-development", "ui-ux-design"],
    heroImage: "/images/projects/peopleos-hrms/hero-full.png",
    imageWidth: 3360,
    imageHeight: 1916,
    imageAspectRatio: 3360 / 1916,
    gallery: [
      "/images/projects/peopleos-hrms/gallery/admin/image_1.png",
      "/images/projects/peopleos-hrms/gallery/admin/image_2.png",
      "/images/projects/peopleos-hrms/gallery/admin/image_3.png",
      "/images/projects/peopleos-hrms/gallery/admin/image_4.png",
      "/images/projects/peopleos-hrms/gallery/admin/image_5.png",
      "/images/projects/peopleos-hrms/gallery/admin/image_6.png",
      "/images/projects/peopleos-hrms/gallery/emplyoee/image_1.png",
      "/images/projects/peopleos-hrms/gallery/emplyoee/image_2.png",
      "/images/projects/peopleos-hrms/gallery/emplyoee/image_3.png",
      "/images/projects/peopleos-hrms/gallery/emplyoee/image_4.png",
    ],
    challenge: "People operations tools often make simple moments feel administrative. PeopleOS needed a calmer entry point that explained the product clearly and supported different roles from the start.",
    approach: "We created a product-led login experience with distinct admin and employee paths, strong product framing, demo guidance, and security cues close to the sign-in action.",
    solution: "A responsive HRMS entry experience with admin and employee modes, seeded demo credentials for local environments, role-aware access, session messaging, and a clear path into the workspace.",
    results: [
      { metric: "Access modes", value: "Admin + employee", description: "Two clear paths into the PeopleOS workspace." },
      { metric: "Product focus", value: "People ops", description: "Attendance, employee moments, and team administration in one place." },
      { metric: "Security cue", value: "Role-aware", description: "The live experience surfaces secure-session and access language." },
    ],
    technologies: ["Role-aware authentication", "Employee portal", "Admin portal", "Responsive product UI", "Notification states"],
    duration: "Product build",
    teamSize: 1,
    clientName: "PeopleOS",
    liveUrl: "https://hrms-frontend-bcc5.onrender.com",
    relatedProjects: ["sv-enterprises-inventory", "phonics-assam"],
    featured: true,
    year: 2026,
    datePublished: "2026-01-01",
    author: "Axeera",
  },
  {
    slug: "la-fashion",
    title: "LA Fashion",
    shortDescription: "A fashion storefront for browsing collections, discovering products, and shopping a brand-led catalog.",
    description: "LA Fashion is a live storefront build shaped around product discovery and a brand-forward shopping experience. The portfolio entry keeps the story focused on the experience itself while the live site remains the source of truth for the current catalog.",
    industry: "Fashion & E-commerce",
    services: ["ecommerce", "web-development", "ui-ux-design"],
    heroImage: "/images/projects/la-fashion/hero-full.png",
    imageWidth: 1200,
    imageHeight: 487,
    imageAspectRatio: 1200 / 487,
    gallery: [],
    challenge: "A fashion storefront has to balance editorial brand expression with the practical job of helping people find and evaluate products quickly.",
    approach: "We treated product discovery, collection browsing, and responsive presentation as one connected journey, with a visual system that keeps the catalog in focus.",
    solution: "A live fashion commerce frontend with a responsive storefront, collection-led browsing, product-focused layouts, and a direct path from discovery to purchase.",
    results: [
      { metric: "Experience", value: "Storefront", description: "A public-facing shopping experience for the LA Fashion catalog." },
      { metric: "Focus", value: "Discovery", description: "Collections and products stay at the center of the journey." },
      { metric: "Delivery", value: "Responsive", description: "Designed to carry the brand across screen sizes." },
    ],
    technologies: ["E-commerce UI", "Product catalog", "Collection browsing", "Responsive design", "Mobile-first layouts"],
    duration: "Storefront build",
    teamSize: 1,
    clientName: "LA Fashion",
    liveUrl: "https://lafashion-frontend.onrender.com",
    relatedProjects: ["jury-hammer", "hitude"],
    featured: false,
    year: 2026,
    datePublished: "2026-01-01",
    author: "Axeera",
  },
  {
    slug: "hitude",
    title: "Hitude",
    shortDescription: "A 3D product commerce experience that brings a catalog, branded storefront, and model-led discovery together.",
    description: "Hitude is a product-led commerce frontend built around a catalog and 3D product presentation. The experience pairs a branded storefront with model assets so product discovery can feel more tangible than a flat grid.",
    industry: "3D Commerce & Retail",
    services: ["ecommerce", "web-development", "ui-ux-design"],
    heroImage: "/images/projects/hitude/hero-full.png",
    imageWidth: 3360,
    imageHeight: 1926,
    imageAspectRatio: 3360 / 1926,
    gallery: [
      "/images/projects/hitude/gallery/image_1.png",
      "/images/projects/hitude/gallery/image_2.png",
      "/images/projects/hitude/gallery/image_3.png",
    ],
    challenge: "Three-dimensional product assets can add depth to a storefront, but they also need careful presentation and loading behavior so the browsing experience stays clear.",
    approach: "We connected the product catalog and brand presentation, then treated 3D model loading as part of the experience rather than an afterthought.",
    solution: "A live product catalog frontend with branded commerce UI, 3D model presentation, and an interaction model designed to keep product exploration intuitive.",
    results: [
      { metric: "Catalog", value: "Live", description: "A public storefront for browsing the product range." },
      { metric: "Product view", value: "3D", description: "Model assets add a richer layer to product discovery." },
      { metric: "Focus", value: "Commerce", description: "Brand, catalog, and product presentation work together." },
    ],
    technologies: ["3D product UI", "Product catalog", "Responsive frontend", "Asset optimization", "Commerce interactions"],
    duration: "Storefront build",
    teamSize: 1,
    clientName: "Hitude",
    liveUrl: "https://hitude-frontend.onrender.com",
    relatedProjects: ["la-fashion", "sv-enterprises-inventory"],
    featured: false,
    year: 2026,
    datePublished: "2026-01-01",
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
  "Legal & Professional Services",
  "Education & Social Impact",
  "Operations & Enterprise",
  "HR & Operations",
  "Fashion & E-commerce",
  "3D Commerce & Retail",
] as const;
