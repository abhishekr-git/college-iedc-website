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
      "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:ring-offset-2 focus:ring-offset-[#050505] disabled:opacity-50 disabled:pointer-events-none hover:-translate-y-[2px] active:translate-y-[1px] active:scale-[0.99] cursor-pointer min-h-[44px] min-w-[44px]";

    const variants = {
      primary:
        "bg-[#3B82F6] hover:bg-[#2563EB] text-[#FAFAFA] shadow-lg shadow-[#3B82F6]/20 border border-[#3B82F6]/50 hover:border-[#3B82F6] hover:shadow-[0_0_24px_rgba(59,130,246,0.35)] hover:brightness-105",
      secondary:
        "bg-[#18181B] text-[#FAFAFA] hover:bg-[#27272A] border border-white/[0.08] hover:border-white/20 shadow-md hover:shadow-[0_0_20px_rgba(255,255,255,0.08)]",
      outline:
        "border border-white/[0.12] bg-white/[0.04] backdrop-blur-md text-[#FAFAFA] hover:bg-white/[0.08] hover:border-[#3B82F6]/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]",
      glass:
        "bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] text-[#FAFAFA] hover:bg-white/[0.08] hover:border-[#3B82F6]/40 hover:shadow-[0_0_24px_rgba(59,130,246,0.25)] hover:brightness-105",
      ghost:
        "text-[#A1A1AA] hover:text-[#FAFAFA] hover:bg-white/[0.06]",
    };

    const sizes = {
      sm: "text-xs px-4 py-2 gap-1.5 h-[40px]",
      md: "text-sm px-5 py-2.5 gap-2 h-[48px]",
      lg: "text-base px-8 py-3.5 gap-2.5 h-[56px] rounded-full",
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
