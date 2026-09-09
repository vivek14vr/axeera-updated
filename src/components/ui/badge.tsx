"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary" | "outline" | "success" | "warning" | "destructive";
  size?: "sm" | "md" | "lg";
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", size = "md", ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center font-medium rounded-full",
          "transition-colors duration-200",
          {
            "bg-primary text-primary-foreground": variant === "default",
            "bg-secondary text-secondary-foreground": variant === "secondary",
            "border border-border bg-transparent": variant === "outline",
            "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400": variant === "success",
            "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400": variant === "warning",
            "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400": variant === "destructive",
            "px-2 py-0.5 text-xs": size === "sm",
            "px-2.5 py-0.5 text-xs": size === "md",
            "px-3 py-1 text-sm": size === "lg",
          },
          className
        )}
        {...props}
      />
    );
  }
);
Badge.displayName = "Badge";

export { Badge };