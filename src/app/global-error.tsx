"use client";

import { Button } from "@/components/ui/button";
import { RefreshCw, Home } from "lucide-react";
import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen items-center justify-center px-6 bg-background">
        <div className="text-center max-w-md">
          <div className="mb-8">
            <RefreshCw className="h-16 w-16 mx-auto text-muted/30" />
          </div>
          <h1 className="heading-1 text-4xl md:text-5xl mb-4">Something went wrong</h1>
          <p className="text-muted-foreground mb-8">
            We&apos;re sorry, but an unexpected error occurred. Our team has been notified.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button onClick={reset} variant="primary" size="lg">
              <RefreshCw className="h-5 w-5 mr-2" />
              Try Again
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/">
                <Home className="h-5 w-5 mr-2" />
                Go Home
              </Link>
            </Button>
          </div>
          {process.env.NODE_ENV === "development" && (
            <details className="mt-8 text-left">
              <summary className="cursor-pointer text-sm text-muted-foreground">Error Details</summary>
              <pre className="mt-4 p-4 bg-muted rounded-lg text-xs overflow-auto text-foreground">
                {error.message}
                {error.digest && `\nDigest: ${error.digest}`}
              </pre>
            </details>
          )}
        </div>
      </body>
    </html>
  );
}