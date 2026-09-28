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

// Keep this collection empty until client-approved quotes are available.
export const testimonials: Testimonial[] = [];

export function getFeaturedTestimonials(limit = 3): Testimonial[] {
  return testimonials.filter((t) => t.featured).slice(0, limit);
}

export function getTestimonialsByProject(projectSlug: string): Testimonial[] {
  return testimonials.filter((t) => t.projectSlug === projectSlug);
}

export function getTestimonialsByService(serviceSlug: string): Testimonial[] {
  return testimonials.filter((t) => t.serviceSlug === serviceSlug);
}
