"use client";

import React from "react";
import Link from "next/link";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: "primary" | "secondary" | "outline" | "glass" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  href?: string;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      children,
      href,
      className,
      icon,
      iconPosition = "right",
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--bg-primary)] disabled:opacity-50 disabled:pointer-events-none cursor-pointer min-h-[44px] min-w-[44px]";

    const variants = {
      primary:
        "bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white shadow-sm hover:shadow-md",
      secondary:
        "bg-[var(--bg-elevated)] text-[var(--text-primary)] hover:bg-[var(--bg-hover)] border border-[var(--border)]",
      outline:
        "border border-[var(--border)] bg-transparent text-[var(--text-primary)] hover:bg-[var(--border)] hover:border-[var(--border-hover)]",
      glass:
        "bg-[var(--border)] backdrop-blur-md border border-[var(--border)] text-[var(--text-primary)] hover:bg-[var(--border-hover)]",
      ghost:
        "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--border)]",
    };

    const sizes = {
      sm: "text-xs px-4 py-2 gap-1.5 h-[36px]",
      md: "text-sm px-5 py-2.5 gap-2 h-[44px]",
      lg: "text-[15px] px-7 py-3 gap-2.5 h-[48px]",
    };

    const content = (
      <>
        {icon && iconPosition === "left" && <span className="inline-block">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === "right" && <span className="inline-block">{icon}</span>}
      </>
    );

    if (href) {
      if (href.startsWith("http")) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(baseStyles, variants[variant], sizes[size], className)}
          >
            {content}
          </a>
        );
      }
      return (
        <Link
          href={href}
          className={cn(baseStyles, variants[variant], sizes[size], className)}
        >
          {content}
        </Link>
      );
    }

    return (
      <motion.button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {content}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
