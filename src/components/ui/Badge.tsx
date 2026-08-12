import React from "react";
import { cn } from "@/lib/utils";
import { EventStatus } from "@/types/event";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "upcoming" | "completed" | "ongoing" | "flagship" | "category" | "neutral";
  className?: string;
}

export function Badge({ children, variant = "neutral", className }: BadgeProps) {
  const variantStyles = {
    upcoming: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    completed: "bg-[var(--border)] text-[var(--text-secondary)] border-[var(--border)]",
    ongoing: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    flagship: "bg-[var(--accent-subtle)] text-[var(--accent)] border-[var(--accent-border)]",
    category: "bg-[var(--border)] text-[var(--text-secondary)] border-[var(--border)]",
    neutral: "bg-[var(--border)] text-[var(--text-secondary)] border-[var(--border)]",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

export function EventStatusBadge({ status }: { status: EventStatus }) {
  const config = {
    upcoming: { label: "Upcoming", variant: "upcoming" as const },
    ongoing: { label: "Live", variant: "ongoing" as const },
    completed: { label: "Completed", variant: "completed" as const },
  };

  const { label, variant } = config[status] || config.completed;

  return <Badge variant={variant}>{label}</Badge>;
}
