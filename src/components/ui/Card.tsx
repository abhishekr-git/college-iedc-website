"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "bg-[var(--bg-surface)] border border-[var(--border)] rounded-2xl transition-all duration-300 hover:border-[var(--border-hover)]",
        className
      )}
    >
      {children}
    </div>
  );
}
