export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  external?: boolean;
}

export interface NavConfig {
  main: NavItem[];
  cta: NavItem;
}

export const navigation: NavConfig = {
  main: [
    {
      label: "Services",
      href: "/services",
      children: [
        { label: "Web Development", href: "/services/web-development" },
        { label: "Product Development", href: "/services/product-development" },
        { label: "UI/UX Design", href: "/services/ui-ux-design" },
        { label: "Mobile Development", href: "/services/mobile-development" },
        { label: "Digital Transformation", href: "/services/digital-transformation" },
        { label: "Cloud Solutions", href: "/services/cloud-solutions" },
        { label: "AI Solutions", href: "/services/ai-solutions" },
        { label: "E-commerce", href: "/services/ecommerce" },
        { label: "Software Consulting", href: "/services/software-consulting" },
        { label: "Maintenance & Support", href: "/services/maintenance-support" },
        { label: "SEO Packages", href: "/pricing#seo-packages" },
      ],
    },
    {
      label: "Portfolio",
      href: "/work",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "Company",
      href: "/about",
      children: [
        { label: "About Us", href: "/about" },
        { label: "Our Work", href: "/work" },
        { label: "Insights", href: "/insights" },
        { label: "Careers", href: "/careers" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      label: "Legal",
      href: "/privacy",
      children: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
        { label: "Cookie Policy", href: "/cookies" },
      ],
    },
  ],
  cta: { label: "Get a quote", href: "/contact" },
};

export const footerNavigation = {
  services: [
    { label: "SEO Packages", href: "/pricing#seo-packages" },
    { label: "Web Development", href: "/services/web-development" },
    { label: "Product Development", href: "/services/product-development" },
    { label: "UI/UX Design", href: "/services/ui-ux-design" },
    { label: "Mobile Development", href: "/services/mobile-development" },
    { label: "Digital Transformation", href: "/services/digital-transformation" },
    { label: "Cloud Solutions", href: "/services/cloud-solutions" },
    { label: "AI Solutions", href: "/services/ai-solutions" },
    { label: "E-commerce", href: "/services/ecommerce" },
    { label: "Software Consulting", href: "/services/software-consulting" },
    { label: "Maintenance & Support", href: "/services/maintenance-support" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Work", href: "/work" },
    { label: "Insights", href: "/insights" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
  social: [
    { label: "LinkedIn", href: "https://linkedin.com/company/axeera", external: true },
    { label: "Twitter", href: "https://twitter.com/axeera", external: true },
    { label: "GitHub", href: "https://github.com/axeera", external: true },
    { label: "Dribbble", href: "https://dribbble.com/axeera", external: true },
  ],
};

export const industries = [
  { label: "Healthcare", slug: "healthcare", count: 12 },
  { label: "Financial Services", slug: "financial-services", count: 8 },
  { label: "Retail & E-commerce", slug: "retail-ecommerce", count: 15 },
  { label: "Insurance", slug: "insurance", count: 6 },
  { label: "Marketplace & Platforms", slug: "marketplace-platforms", count: 9 },
  { label: "SaaS & Technology", slug: "saas-technology", count: 22 },
  { label: "Education", slug: "education", count: 4 },
  { label: "Real Estate", slug: "real-estate", count: 3 },
  { label: "Logistics & Supply Chain", slug: "logistics", count: 5 },
  { label: "Media & Entertainment", slug: "media-entertainment", count: 4 },
];
