import Link from "next/link";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { footerNavigation, navigation } from "@/data/navigation";
import { Mail, MapPin, ArrowRight } from "lucide-react";
import { LinkedinIcon, WhatsappIcon } from "@/components/shared/social-icons";
import { AxeeraLogo } from "@/components/shared/axeera-logo";
import { siteConfig } from "@/lib/seo";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t border-border" role="contentinfo">
      <div className="container mx-auto px-6 py-16 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-14">
          <div className="lg:col-span-2 space-y-6">
            <AxeeraLogo className="h-16 w-24" />
            <p className="text-muted-foreground text-base leading-relaxed max-w-xs">
              We design and engineer digital products, platforms, and cloud systems that help businesses launch faster, automate operations, and scale reliably.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex items-center justify-center w-10 h-10 rounded-lg bg-surface border border-border",
                  "hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200"
                )}
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          <nav aria-label="Services">
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-3" role="list">
              {footerNavigation.services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company">
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3" role="list">
              {footerNavigation.company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Legal">
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-3" role="list">
              {footerNavigation.legal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-6">
            <h3 className="font-semibold">Contact</h3>
            <address className="not-italic space-y-4 text-sm text-muted-foreground">
              <div className="flex items-start gap-3">
                <Mail className="h-4 w-4 shrink-0 mt-0.5" aria-hidden="true" />
                <a href="mailto:info@axeera.com" className="hover:text-primary transition-colors">
                  info@axeera.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <WhatsappIcon className="h-4 w-4 shrink-0 mt-0.5" />
                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  WhatsApp: {siteConfig.phone}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" aria-hidden="true" />
                <span>{siteConfig.address}</span>
              </div>
            </address>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all duration-200"
            >
              Get in touch
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row md:items-center md:justify-between gap-4"
        >
          <p className="text-sm text-muted-foreground">
            © {currentYear} Axeera. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
