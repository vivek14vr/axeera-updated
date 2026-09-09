import { Metadata } from "next";
import Link from "next/link";
import { Home, Search } from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "Sorry, we couldn't find the page you're looking for.",
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <span className="text-9xl font-display font-bold tracking-tighter text-muted/30">404</span>
        </div>
        <h1 className="heading-1 text-4xl md:text-5xl mb-4">Page Not Found</h1>
        <p className="text-muted-foreground mb-8">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved or doesn&apos;t exist.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/" 
            className={cn(
              "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              "disabled:opacity-50 disabled:pointer-events-none",
              "active:scale-[0.98]",
              "bg-primary text-primary-foreground hover:shadow-lg hover:-translate-y-0.5 px-8 py-4 text-base"
            )}
          >
            <Home className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
          <Link 
            href="/work" 
            className={cn(
              "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              "disabled:opacity-50 disabled:pointer-events-none",
              "active:scale-[0.98]",
              "border border-border bg-transparent hover:bg-muted hover:shadow-lg hover:-translate-y-0.5 px-8 py-4 text-base"
            )}
          >
            <Search className="h-5 w-5 mr-2" />
            Browse Work
          </Link>
        </div>
        <div className="mt-12 flex items-center justify-center gap-8 text-sm text-muted-foreground">
          <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
          <Link href="/insights" className="hover:text-primary transition-colors">Insights</Link>
          <Link href="/about" className="hover:text-primary transition-colors">About</Link>
          <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
        </div>
      </div>
    </div>
  );
}
