export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
  projectSlug?: string;
  serviceSlug?: string;
  featured: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: "test-1",
    quote: "Axeera didn't just build software—they understood healthcare workflows and regulatory constraints. The platform has fundamentally changed how our clinics operate.",
    author: "Dr. Sarah Chen",
    role: "Chief Medical Information Officer",
    company: "Meridian Health Systems",
    projectSlug: "meridian-health-platform",
    featured: true,
  },
  {
    id: "test-2",
    quote: "The migration was seamless—our customers didn't notice, but our metrics sure did. 28% conversion lift paid for the project in 3 months.",
    author: "Marcus Rodriguez",
    role: "VP Engineering",
    company: "Velocity Brands",
    projectSlug: "velocity-commerce",
    featured: true,
  },
  {
    id: "test-3",
    quote: "This is the first time our portfolio managers have trusted the numbers on their screens. The real-time capability changed how we make decisions.",
    author: "James Patterson",
    role: "Chief Technology Officer",
    company: "Nexus Capital Partners",
    projectSlug: "nexus-financial-dashboard",
    featured: true,
  },
  {
    id: "test-4",
    quote: "For the first time, our artisans own their customer relationships and see exactly where every dollar goes. That transparency builds trust.",
    author: "Priya Sharma",
    role: "Founder & CEO",
    company: "Artisan Collective",
    projectSlug: "artisan-marketplace",
    featured: false,
  },
  {
    id: "test-5",
    quote: "The health scoring algorithm is our secret sauce. Users trust it because it explains itself—and it actually works.",
    author: "Dr. Michael Torres",
    role: "Co-Founder & Chief Science Officer",
    company: "Vitality Labs",
    projectSlug: "vitality-wellness-app",
    featured: false,
  },
  {
    id: "test-6",
    quote: "Our associates are now our best digital channel. They have the tools to serve clients anywhere—in store, at home, or traveling.",
    author: "Isabelle Dubois",
    role: "Global Digital Director",
    company: "Luxe Maison",
    projectSlug: "luxe-retail-platform",
    featured: true,
  },
  {
    id: "test-7",
    quote: "We went from industry laggard to digital leader. The claims automation alone pays for the platform every quarter.",
    author: "Robert Kim",
    role: "Chief Operating Officer",
    company: "Apex Insurance Group",
    projectSlug: "apex-insurance-portal",
    featured: false,
  },
  {
    id: "test-8",
    quote: "Intraday risk visibility changed how we manage capital. We catch position drift before it becomes a problem.",
    author: "Dr. Elena Volkov",
    role: "Head of Risk",
    company: "Quant Alpha Capital",
    projectSlug: "quant-risk-engine",
    featured: false,
  },
  {
    id: "test-9",
    quote: "Their team integrates like they've been here for years. Code quality, communication, and delivery—consistently excellent.",
    author: "Jennifer Walsh",
    role: "VP Engineering",
    company: "Stellar SaaS",
    serviceSlug: "web-development",
    featured: false,
  },
  {
    id: "test-10",
    quote: "The design system they built cut our feature development time in half. Every component is documented, tested, and accessible.",
    author: "David Park",
    role: "Design Director",
    company: "Fintech startup (Stealth)",
    serviceSlug: "ui-ux-design",
    featured: false,
  },
  {
    id: "test-11",
    quote: "We needed to modernize 15 years of technical debt in 6 months. They delivered a platform that scales and a team that knows how to run it.",
    author: "Amit Shah",
    role: "CTO",
    company: "Logistics Platform",
    serviceSlug: "digital-transformation",
    featured: false,
  },
  {
    id: "test-12",
    quote: "Their cloud architecture review saved us $2M annually and gave us a platform our developers actually enjoy using.",
    author: "Lisa Chen",
    role: "VP Platform Engineering",
    company: "Enterprise SaaS",
    serviceSlug: "cloud-solutions",
    featured: false,
  },
];

export function getFeaturedTestimonials(limit = 3): Testimonial[] {
  return testimonials.filter((t) => t.featured).slice(0, limit);
}

export function getTestimonialsByProject(projectSlug: string): Testimonial[] {
  return testimonials.filter((t) => t.projectSlug === projectSlug);
}

export function getTestimonialsByService(serviceSlug: string): Testimonial[] {
  return testimonials.filter((t) => t.serviceSlug === serviceSlug);
}