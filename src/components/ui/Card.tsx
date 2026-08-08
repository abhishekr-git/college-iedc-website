"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export function Card({
  children,
  className,
  hoverEffect = true,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "bg-[#10151D] rounded-[24px] border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.4)] text-white transition-all duration-300",
        hoverEffect &&
          "hover:-translate-y-1.5 hover:border-[#3B82F6]/40 hover:shadow-[0_12px_40px_rgba(59,130,246,0.18)] cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
