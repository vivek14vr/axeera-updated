"use client";

import Link from "next/link";
import { ArrowRight, Check, Clock3, Sparkles } from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animations/fade-up";
import { seoPackages, servicePricing } from "@/data/pricing";
import { cn } from "@/lib/utils";

function ActionLink({ href, children, primary = false }: { href: string; children: React.ReactNode; primary?: boolean }) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5",
        primary ? "bg-primary text-primary-foreground hover:shadow-lg" : "border border-border bg-surface hover:border-primary hover:text-primary",
      )}
    >
      {children}
      <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </Link>
  );
}

export function PricingPageContent() {
  return (
    <>
      <section className="page-hero relative overflow-hidden border-b border-white/10" aria-labelledby="pricing-title">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(240,82,58,0.18),transparent_35%)]" aria-hidden="true" />
        <div className="container relative mx-auto px-6 py-24 md:py-32 lg:py-40">
          <div className="max-w-4xl">
            <FadeUp delay={0.1}><span className="caption text-primary">Pricing & packages</span></FadeUp>
            <FadeUp delay={0.2}><h1 id="pricing-title" className="heading-display mt-4 max-w-4xl text-5xl leading-[0.95] tracking-[-0.065em] text-on-dark md:text-7xl">Clear starting points for serious digital work.</h1></FadeUp>
            <FadeUp delay={0.3}><p className="body-lg mt-7 max-w-2xl text-on-dark/65">Choose a focused service, a monthly SEO program, or a tailored engagement. We use these ranges to start useful conversations—not to hide the scope in a sales call.</p></FadeUp>
            <FadeUp delay={0.4}><div className="mt-9 flex flex-wrap gap-3"><ActionLink href="#seo-packages" primary>View SEO packages</ActionLink><ActionLink href="#service-pricing">Explore services</ActionLink></div></FadeUp>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-background" aria-label="Pricing principles">
        <div className="container mx-auto grid gap-px bg-border px-6 md:grid-cols-3 md:px-0">
          {[
            ["01", "Start with the outcome", "We scope around the business result, not a pile of deliverables."],
            ["02", "See what is included", "Every range has a clear shape so you can compare the right things."],
            ["03", "Scale when it matters", "Move from a focused start to a dedicated team when the work earns it."],
          ].map(([number, title, body]) => (
            <div key={number} className="bg-background px-6 py-8 md:px-10 md:py-12">
              <span className="font-mono text-xs font-semibold tracking-[0.18em] text-primary">{number}</span>
              <h2 className="heading-3 mt-4 text-xl">{title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="seo-packages" className="section scroll-mt-24 bg-muted/30" aria-labelledby="seo-heading">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <FadeUp delay={0.1}><span className="caption text-primary">SEO packages</span></FadeUp>
            <FadeUp delay={0.2}><h2 id="seo-heading" className="heading-1 mt-3 text-4xl tracking-tight md:text-5xl">Search growth with a monthly rhythm.</h2></FadeUp>
            <FadeUp delay={0.3}><p className="mx-auto mt-5 max-w-2xl text-muted-foreground">Five levels of monthly SEO support, from a focused foundation to a dedicated search growth engine. All plans are billed monthly and finalized after an initial site review.</p></FadeUp>
          </div>

          <StaggerContainer staggerDelay={0.07} className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {seoPackages.map((plan) => (
              <StaggerItem key={plan.name}>
                <article className={cn("flex h-full flex-col rounded-2xl border bg-surface p-6", plan.badge ? "border-primary shadow-xl shadow-primary/10" : "border-border")}>
                  <div className="min-h-12">
                    {plan.badge && <span className="mb-3 inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary"><Sparkles className="h-3.5 w-3.5" aria-hidden="true" />{plan.badge}</span>}
                    <h3 className="heading-3 text-2xl">{plan.name}</h3>
                  </div>
                  <p className="mt-4 min-h-16 text-sm leading-relaxed text-muted-foreground">{plan.description}</p>
                  <div className="mt-6 border-y border-border py-5"><p className="font-display text-4xl font-semibold tracking-tight">{plan.price}</p><p className="mt-1 text-sm text-muted-foreground">per month</p></div>
                  <div className="mt-5 grid gap-2 text-sm">{[plan.keywords, plan.landingPages, plan.backlinks].map((metric) => <div key={metric} className="flex items-start gap-2 font-medium"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" /><span>{metric}</span></div>)}</div>
                  <ul className="mt-6 grid gap-3 border-t border-border pt-5 text-sm text-muted-foreground" role="list">{plan.features.map((feature) => <li key={feature} className="flex items-start gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" aria-hidden="true" /><span>{feature}</span></li>)}</ul>
                  <Link href={`/contact?service=seo&plan=${encodeURIComponent(plan.name)}`} className="mt-auto inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-lg">Start with {plan.name}<ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeUp delay={0.3} className="mx-auto mt-8 flex max-w-3xl items-start gap-3 rounded-xl border border-border bg-surface p-5 text-sm text-muted-foreground"><Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" /><p>SEO is a compounding channel. We recommend a minimum three-month starting window so the technical, content, and authority work has time to be measured honestly.</p></FadeUp>
        </div>
      </section>

      <section id="service-pricing" className="section scroll-mt-24 bg-background" aria-labelledby="service-pricing-heading">
        <div className="container mx-auto px-6">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <FadeUp delay={0.1}><span className="caption text-primary">Service pricing</span></FadeUp>
              <FadeUp delay={0.2}><h2 id="service-pricing-heading" className="heading-1 mt-3 text-4xl tracking-tight md:text-5xl">Pick the capability you need next.</h2></FadeUp>
              <FadeUp delay={0.3}><p className="mt-5 max-w-2xl text-muted-foreground">Indicative starting points for the rest of our services. We’ll confirm the final scope, team, and timeline before work begins.</p></FadeUp>
            </div>
            <FadeUp delay={0.35}><span className="text-sm text-muted-foreground">USD · starting ranges</span></FadeUp>
          </div>

          <StaggerContainer staggerDelay={0.06} className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {servicePricing.map((service) => (
              <StaggerItem key={service.slug}>
                <article className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg">
                  <div className="flex items-start justify-between gap-4"><h3 className="heading-3 text-2xl">{service.title}</h3><span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">{service.model}</span></div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                  <p className="mt-6 font-display text-3xl font-semibold tracking-tight">{service.price}</p>
                  <ul className="mt-6 grid gap-3 border-t border-border pt-5 text-sm text-muted-foreground" role="list">{service.includes.map((item) => <li key={item} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" /><span>{item}</span></li>)}</ul>
                  <div className="mt-auto pt-7"><Link href={`/services/${service.slug}`} className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3">View service<ArrowRight className="h-4 w-4" aria-hidden="true" /></Link></div>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="section border-t border-border bg-muted/30" aria-labelledby="pricing-cta-heading">
        <div className="container mx-auto px-6"><div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-8 rounded-3xl bg-work p-8 text-on-dark md:flex-row md:items-end md:p-12"><div><span className="caption text-accent-bright">Not sure where to start?</span><h2 id="pricing-cta-heading" className="heading-2 mt-3 max-w-2xl text-3xl md:text-4xl">Bring us the goal. We’ll shape the right engagement.</h2></div><ActionLink href="/contact" primary>Talk to Axeera</ActionLink></div></div>
      </section>
    </>
  );
}
