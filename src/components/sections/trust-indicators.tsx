"use client";

import Image from "next/image";
import { FadeUp } from "@/components/animations/fade-up";
import { Counter } from "@/components/animations/text-reveal";

const stats = [
  { value: 50, suffix: "+", label: "Projects Delivered", description: "Across web, mobile, and cloud" },
  { value: 20, suffix: "+", label: "Active Clients", description: "From startups to enterprise" },
  { value: 5, suffix: "+", label: "Industries Served", description: "Healthcare, Finance, Retail, more" },
  { value: 98, suffix: "%", label: "Client Satisfaction", description: "Net Promoter Score" },
];

const clientLogos = [
  { name: "Meridian Health", logo: "/images/clients/meridian-logo.svg" },
  { name: "Velocity Brands", logo: "/images/clients/velocity-logo.svg" },
  { name: "Nexus Capital", logo: "/images/clients/nexus-logo.svg" },
  { name: "Artisan Collective", logo: "/images/clients/artisan-logo.svg" },
  { name: "Luxe Maison", logo: "/images/clients/luxe-logo.svg" },
  { name: "Apex Insurance", logo: "/images/clients/apex-logo.svg" },
  { name: "Quant Alpha", logo: "/images/clients/quant-logo.svg" },
  { name: "Vitality Labs", logo: "/images/clients/vitality-logo.svg" },
];

export function TrustIndicators() {
  return (
    <section className="border-y border-border bg-surface py-14 md:py-20" aria-labelledby="trust-heading">
      <div className="container mx-auto px-6">
        <div className="grid gap-10 border-b border-border pb-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-end lg:gap-20">
          <div className="max-w-xl">
          <FadeUp delay={0.1}>
            <span className="caption text-primary">Proof in the work</span>
          </FadeUp>
          <FadeUp delay={0.2}>
            <h2 id="trust-heading" className="heading-1 text-4xl md:text-5xl mt-3 tracking-tight">
              Trusted when the work matters
            </h2>
          </FadeUp>
          <FadeUp delay={0.3}>
            <p className="body-lg text-muted-foreground mt-4">
              From healthcare to finance, teams bring us the problems that need clarity, craft, and dependable execution.
            </p>
          </FadeUp>
          </div>
          <FadeUp delay={0.35} className="lg:justify-self-end">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Teams we&apos;ve helped move forward</p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-5 sm:grid-cols-4" role="list" aria-label="Client logos">
              {clientLogos.slice(0, 8).map((client) => (
                <div key={client.name} role="listitem" className="flex h-10 items-center grayscale opacity-60 transition-all duration-300 hover:grayscale-0 hover:opacity-100">
                  <Image src={client.logo} alt={client.name} width={160} height={40} unoptimized className="h-7 w-auto max-w-full object-contain" />
                </div>
              ))}
            </div>
          </FadeUp>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
          {stats.map((stat, index) => (
            <FadeUp key={stat.label} delay={0.1 * index} className="bg-muted p-5 text-left md:p-6">
              <div className="mb-2">
                <Counter
                  end={stat.value}
                  duration={2}
                  delay={0.2 * index}
                  className="heading-display text-4xl font-bold tracking-tighter text-primary md:text-5xl"
                >
                  {stat.suffix}
                </Counter>
              </div>
              <div className="font-semibold text-base md:text-lg">{stat.label}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.description}</div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
