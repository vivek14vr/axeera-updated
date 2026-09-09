"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

// Event handlers that conflict between React and Motion
type ConflictingEvent = 
  | "onDrag" | "onDragEnd" | "onDragStart" | "onDragEnter" | "onDragLeave" | "onDragOver" | "onDrop"
  | "onAnimationStart" | "onAnimationEnd" | "onAnimationIteration"
  | "onTransitionStart" | "onTransitionEnd" | "onTransitionRun" | "onTransitionCancel";

// Helper type to omit conflicting events
type OmitConflicting<T> = Omit<T, 
  "onDrag" | "onDragEnd" | "onDragStart" | "onDragEnter" | "onDragLeave" | "onDragOver" | "onDrop"
  | "onAnimationStart" | "onAnimationEnd" | "onAnimationIteration"
  | "onTransitionStart" | "onTransitionEnd" | "onTransitionRun" | "onTransitionCancel"
>;

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "default" | "muted" | "primary";
  underline?: boolean;
  external?: boolean;
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ({ className, variant = "default", underline = true, external = false, children, onDrag, onDragEnd, onDragStart, onDragEnter, onDragLeave, onDragOver, onDrop, onAnimationStart, onAnimationEnd, onAnimationIteration, onTransitionStart, onTransitionEnd, onTransitionRun, onTransitionCancel, ...props }, ref) => {
    const isExternal = external || (props.href && props.href.startsWith("http"));
    
    return (
      <motion.a
        ref={ref}
        className={cn(
          "inline-flex items-center gap-1.5 font-medium transition-colors duration-200",
          {
            "text-primary hover:text-primary/70": variant === "primary",
            "text-muted-foreground hover:text-foreground": variant === "muted",
            "text-foreground hover:text-primary": variant === "default",
          },
          className
        )}
        whileHover={{ x: underline && !isExternal ? 4 : 0 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {children}
        {underline && !isExternal && (
          <motion.span
            className="relative overflow-hidden"
            style={{ width: "1em", height: "1em" }}
          >
            <motion.svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="absolute left-0 bottom-0 w-full h-full"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </motion.svg>
          </motion.span>
        )}
        {isExternal && (
          <svg className="h-3.5 w-3.5 opacity-60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        )}
      </motion.a>
    );
  }
);
Link.displayName = "Link";

export { Link };