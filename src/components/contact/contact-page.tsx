"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animations/fade-up";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { Mail, MessageCircle, MapPin, MessageSquare, Calendar, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/seo";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(1, "Company name is required"),
  phone: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  budget: z.string().min(1, "Please select a budget range"),
  timeline: z.string().min(1, "Please select a timeline"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const services = [
  { value: "web-development", label: "Web Development" },
  { value: "product-development", label: "Product Development" },
  { value: "ui-ux-design", label: "UI/UX Design" },
  { value: "mobile-development", label: "Mobile Development" },
  { value: "digital-transformation", label: "Digital Transformation" },
  { value: "cloud-solutions", label: "Cloud Solutions" },
  { value: "ai-solutions", label: "AI Solutions" },
  { value: "ecommerce", label: "E-commerce" },
  { value: "software-consulting", label: "Software Consulting" },
  { value: "maintenance-support", label: "Maintenance & Support" },
  { value: "other", label: "Other / Not Sure" },
];

const budgets = [
  { value: "300-1k", label: "$300 - $1,000" },
  { value: "1k-3k", label: "$1,000 - $3,000" },
  { value: "3k-5k", label: "$3,000 - $5,000" },
  { value: "5k-10k", label: "$5,000 - $10,000" },
  { value: "10k-plus", label: "$10,000+" },
  { value: "not-sure", label: "Not Sure" },
];

const timelines = [
  { value: "asap", label: "ASAP" },
  { value: "1-3-months", label: "1-3 Months" },
  { value: "3-6-months", label: "3-6 Months" },
  { value: "6-12-months", label: "6-12 Months" },
  { value: "flexible", label: "Flexible" },
];

export function ContactPageContent() {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      service: "",
      budget: "",
      timeline: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus("submitting");
    setSubmitMessage("");

    try {
      const response = await fetch("/api/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || "Something went wrong. Please try again.");
      }

      setSubmitStatus("success");
      setSubmitMessage("Thanks — your inquiry was sent to Axeera. We’ll get back to you soon.");
      reset();
    } catch (error) {
      setSubmitStatus("error");
      setSubmitMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again or email us directly at info@axeera.com.",
      );
    }
  };

  return (
    <>
      <section className="page-hero relative flex min-h-[50vh] items-center border-b border-white/10 md:min-h-[60vh]" aria-labelledby="contact-title">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" aria-hidden="true" />
        <div className="relative z-10 mx-auto w-full max-w-[90rem] px-6 py-20 lg:px-10">
          <div className="max-w-4xl">
            <FadeUp delay={0.1}>
              <span className="caption text-primary">Get in Touch</span>
            </FadeUp>
            <FadeUp delay={0.2}>
              <h1 id="contact-title" className="heading-display text-5xl md:text-6xl lg:text-7xl tracking-tighter leading-tight">
                Let&apos;s start a conversation
              </h1>
            </FadeUp>
            <FadeUp delay={0.3}>
              <p className="body-lg text-muted-foreground mt-6 max-w-2xl">
                Every great project starts with a conversation. Tell us about your challenge, and we&apos;ll share how we&apos;d approach it.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="section bg-background" aria-labelledby="contact-form-heading">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-1">
              <FadeUp delay={0.1}>
                <h2 id="contact-form-heading" className="heading-2 text-3xl mb-6">Other ways to connect</h2>
              </FadeUp>
              <FadeUp delay={0.2}>
                <p className="text-muted-foreground mb-8">Prefer a direct line? We&apos;re available through multiple channels.</p>
              </FadeUp>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-surface border border-border rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email Us</h3>
                    <a href="mailto:info@axeera.com" className="text-primary hover:underline mt-1 block">info@axeera.com</a>
                    <p className="text-sm text-muted-foreground mt-1">Response within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-surface border border-border rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Book a Call</h3>
                    <a href="/contact" className="text-primary hover:underline mt-1 block">Schedule a consultation</a>
                    <p className="text-sm text-muted-foreground mt-1">30-min discovery call, no obligation</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-surface border border-border rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">WhatsApp Us</h3>
                    <a
                      href={siteConfig.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline mt-1 block"
                    >
                      {siteConfig.phone}
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">Message us on WhatsApp</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-surface border border-border rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Visit Us</h3>
                    <p className="text-primary mt-1">{siteConfig.address}</p>
                    <p className="text-sm text-muted-foreground mt-1">United States office</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <FadeUp delay={0.2}>
                <div className="bg-surface border border-border rounded-2xl p-6 md:p-8">
                  <h3 className="heading-3 text-2xl mb-6">Project Inquiry</h3>
                  
                  {submitStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl"
                    >
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div className="text-green-800">
                          <p className="font-medium">Inquiry sent successfully</p>
                          <p className="text-sm mt-1">{submitMessage}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  
                  {submitStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl"
                    >
                      <div className="flex items-start gap-3">
                        <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <div className="text-red-800">
                          <p className="font-medium">Submission failed</p>
                          <p className="text-sm mt-1">{submitMessage}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          placeholder="John Doe"
                          {...register("name")}
                          aria-invalid={!!errors.name}
                          aria-describedby={errors.name ? "name-error" : undefined}
                        />
                        {errors.name && (
                          <p id="name-error" className="text-sm text-red-600" role="alert">{errors.name.message}</p>
                        )}
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@company.com"
                          {...register("email")}
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? "email-error" : undefined}
                        />
                        {errors.email && (
                          <p id="email-error" className="text-sm text-red-600" role="alert">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company *</Label>
                        <Input
                          id="company"
                          placeholder="Acme Inc."
                          {...register("company")}
                          aria-invalid={!!errors.company}
                          aria-describedby={errors.company ? "company-error" : undefined}
                        />
                        {errors.company && (
                          <p id="company-error" className="text-sm text-red-600" role="alert">{errors.company.message}</p>
                        )}
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          {...register("phone")}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="service">Service Interested In *</Label>
                        <Select
                          onValueChange={(value) => setValue("service", value)}
                          defaultValue={watch("service")}
                        >
                          <SelectTrigger aria-invalid={!!errors.service}>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service.value} value={service.value}>
                                {service.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors.service && (
                          <p className="text-sm text-red-600" role="alert">{errors.service.message}</p>
                        )}
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="budget">Budget Range *</Label>
                        <Select
                          onValueChange={(value) => setValue("budget", value)}
                          defaultValue={watch("budget")}
                        >
                          <SelectTrigger aria-invalid={!!errors.budget}>
                            <SelectValue placeholder="Select budget" />
                          </SelectTrigger>
                          <SelectContent>
                            {budgets.map((budget) => (
                              <SelectItem key={budget.value} value={budget.value}>
                                {budget.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors.budget && (
                          <p className="text-sm text-red-600" role="alert">{errors.budget.message}</p>
                        )}
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="timeline">Project Timeline *</Label>
                        <Select
                          onValueChange={(value) => setValue("timeline", value)}
                          defaultValue={watch("timeline")}
                        >
                          <SelectTrigger aria-invalid={!!errors.timeline}>
                            <SelectValue placeholder="Select timeline" />
                          </SelectTrigger>
                          <SelectContent>
                            {timelines.map((timeline) => (
                              <SelectItem key={timeline.value} value={timeline.value}>
                                {timeline.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors.timeline && (
                          <p className="text-sm text-red-600" role="alert">{errors.timeline.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Project Details *</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your project, goals, challenges, and any specific requirements..."
                        rows={6}
                        {...register("message")}
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? "message-error" : "message-hint"}
                      />
                      <p id="message-hint" className="text-sm text-muted-foreground">
                        Minimum 20 characters. Include project scope, technical requirements, and desired outcomes.
                      </p>
                      {errors.message && (
                        <p id="message-error" className="text-sm text-red-600" role="alert">{errors.message.message}</p>
                      )}
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-xl">
                      <input
                        type="checkbox"
                        id="newsletter"
                        className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-primary"
                      />
                      <Label htmlFor="newsletter" className="text-sm cursor-pointer">
                        Keep me updated with Axeera insights and news. <Link href="/privacy" className="underline">Privacy Policy</Link>
                      </Label>
                    </div>

                    <Button type="submit" size="lg" className="w-full md:w-auto" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-5 w-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Inquiry
                          <ArrowRight className="h-5 w-5" />
                        </>
                      )}
                    </Button>

                    <p className="text-sm text-muted-foreground text-center md:text-left">
                      By submitting this form, you agree to our <Link href="/privacy" className="underline">Privacy Policy</Link> and <Link href="/terms" className="underline">Terms of Service</Link>.
                    </p>
                  </form>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-muted/30 border-t border-border" aria-labelledby="faq-heading">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <FadeUp delay={0.1}>
              <span className="caption text-primary">FAQ</span>
            </FadeUp>
            <FadeUp delay={0.2}>
              <h2 id="faq-heading" className="heading-1 text-4xl md:text-5xl mt-3 tracking-tight">
                Quick answers
              </h2>
            </FadeUp>
          </div>

          <div className="max-w-3xl mx-auto">
            <StaggerContainer staggerDelay={0.1}>
              <StaggerItem>
                <details className="group bg-surface border border-border rounded-xl overflow-hidden mb-4">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <span className="font-semibold text-lg pr-4">What&apos;s your typical project timeline?</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5 text-muted-foreground group-open:rotate-180 transition-transform duration-200">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 text-muted-foreground animate-in slide-down fade-in duration-300">
                    Most projects range from 8-16 weeks depending on complexity. We provide a detailed timeline during discovery. Small engagements (audits, consulting) can be 2-4 weeks.
                  </div>
                </details>
              </StaggerItem>
              
              <StaggerItem>
                <details className="group bg-surface border border-border rounded-xl overflow-hidden mb-4">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <span className="font-semibold text-lg pr-4">How do you handle project pricing?</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5 text-muted-foreground group-open:rotate-180 transition-transform duration-200">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 text-muted-foreground animate-in slide-down fade-in duration-300">
                    We offer both fixed-price and time-and-materials engagements. For well-defined scopes, we prefer fixed-price with clear milestones. For exploratory work, we use T&M with weekly caps and transparent reporting.
                  </div>
                </details>
              </StaggerItem>
              
              <StaggerItem>
                <details className="group bg-surface border border-border rounded-xl overflow-hidden mb-4">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <span className="font-semibold text-lg pr-4">Do you work with existing teams?</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5 text-muted-foreground group-open:rotate-180 transition-transform duration-200">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 text-muted-foreground animate-in slide-down fade-in duration-300">
                    Absolutely. We integrate seamlessly with internal teams through shared repositories, code reviews, and agile ceremonies. Many engagements are team augmentation or co-development.
                  </div>
                </details>
              </StaggerItem>
              
              <StaggerItem>
                <details className="group bg-surface border border-border rounded-xl overflow-hidden mb-4">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <span className="font-semibold text-lg pr-4">What&apos;s your approach to intellectual property?</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5 text-muted-foreground group-open:rotate-180 transition-transform duration-200">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 text-muted-foreground animate-in slide-down fade-in duration-300">
                    All code, designs, and deliverables are your property. We assign full IP rights upon payment. We only retain rights to our internal frameworks, methodologies, and generic components we bring to the engagement.
                  </div>
                </details>
              </StaggerItem>
              
              <StaggerItem>
                <details className="group bg-surface border border-border rounded-xl overflow-hidden mb-4">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <span className="font-semibold text-lg pr-4">Do you provide ongoing maintenance?</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5 text-muted-foreground group-open:rotate-180 transition-transform duration-200">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 text-muted-foreground animate-in slide-down fade-in duration-300">
                    Yes, we offer retainer-based maintenance including security updates, performance monitoring, feature development, and 24/7 incident response. Our maintenance programs start at $300/month.
                  </div>
                </details>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>

      <section className="section bg-primary text-primary-foreground" aria-labelledby="final-cta-heading">
        <div className="container mx-auto px-6 text-center">
          <FadeUp delay={0.1}>
            <h2 id="final-cta-heading" className="heading-1 text-4xl md:text-5xl tracking-tight mb-6">
              Ready to move forward?
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss your project and explore how we can help you achieve your goals.
            </p>
          </FadeUp>
          <FadeUp delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/contact" 
                className={cn(
                  "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                  "disabled:opacity-50 disabled:pointer-events-none",
                  "active:scale-[0.98]",
                  "bg-white text-primary hover:bg-white/90 hover:shadow-lg hover:-translate-y-0.5 px-10 py-5 text-lg"
                )}
              >
                Start a Project
                <ArrowRight className="h-6 w-6" />
              </Link>
              <Link 
                href="/work" 
                className={cn(
                  "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                  "disabled:opacity-50 disabled:pointer-events-none",
                  "active:scale-[0.98]",
                  "border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-10 py-5 text-lg"
                )}
              >
                View Our Work
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
