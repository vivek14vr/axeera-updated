"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

// Type that omits all conflicting event handlers between React and Motion
type MotionSafeProps<T extends React.ElementType> = Omit<
  React.ComponentPropsWithoutRef<T>,
  | "onDrag" | "onDragEnd" | "onDragStart" | "onDragEnter" | "onDragLeave" | "onDragOver" | "onDrop"
  | "onAnimationStart" | "onAnimationEnd" | "onAnimationIteration"
  | "onTransitionStart" | "onTransitionEnd" | "onTransitionRun" | "onTransitionCancel"
>;

type CardProps = MotionSafeProps<"div"> & {
  variant?: "default" | "outlined" | "elevated" | "interactive";
  padding?: "none" | "sm" | "md" | "lg";
  hover?: boolean;
};

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", padding = "md", hover = false, children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn(
          "rounded-xl transition-all duration-300",
          {
            "bg-surface border border-border": variant === "default",
            "bg-surface border-2 border-border": variant === "outlined",
            "bg-surface shadow-lg": variant === "elevated",
            "bg-surface border border-border hover:shadow-xl hover:-translate-y-1": variant === "interactive" && hover,
          },
          {
            "p-0": padding === "none",
            "p-4": padding === "sm",
            "p-6": padding === "md",
            "p-8": padding === "lg",
          },
          className
        )}
        whileHover={variant === "interactive" && hover ? { y: -4, boxShadow: "0 20px 40px -10px rgb(0 0 0 / 0.15)" } : {}}
        whileTap={variant === "interactive" && hover ? { scale: 0.98 } : {}}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);
Card.displayName = "Card";

export const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("mb-4", className)} {...props} />
  )
);
CardHeader.displayName = "CardHeader";

export const CardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn("text-xl font-semibold tracking-tight", className)} {...props} />
  )
);
CardTitle.displayName = "CardTitle";

export const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-muted-foreground text-sm mt-1", className)} {...props} />
  )
);
CardDescription.displayName = "CardDescription";

export const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("", className)} {...props} />
  )
);
CardContent.displayName = "CardContent";

export const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("mt-4 flex items-center gap-2", className)} {...props} />
  )
);
CardFooter.displayName = "CardFooter";

export { Card };