import React from "react";
import { Flame, CheckCircle2, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { EventStatus } from "@/types/event";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "upcoming" | "completed" | "ongoing" | "flagship" | "category" | "neutral";
  className?: string;
}

export function Badge({ children, variant = "neutral", className }: BadgeProps) {
  const variantStyles = {
    upcoming:
      "bg-emerald-500/10 text-emerald-300 border-emerald-500/30 font-medium",
    completed:
      "bg-slate-800/80 text-slate-300 border-slate-700 font-medium",
    ongoing:
      "bg-amber-500/15 text-amber-300 border-amber-500/30 font-semibold animate-pulse",
    flagship:
      "bg-gradient-to-r from-purple-500/20 to-indigo-500/20 text-purple-300 border-purple-400/40 font-bold",
    category:
      "bg-blue-500/10 text-cyan-300 border-blue-400/30 font-medium",
    neutral:
      "bg-slate-800 text-slate-300 border-slate-700 font-medium",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs border tracking-wide transition-colors backdrop-blur-md",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

export function EventStatusBadge({ status }: { status: EventStatus }) {
  if (status === "upcoming") {
    return (
      <Badge variant="upcoming">
        <Clock className="w-3 h-3 text-emerald-400" strokeWidth={1.8} />
        <span>Upcoming</span>
      </Badge>
    );
  }
  if (status === "ongoing") {
    return (
      <Badge variant="ongoing">
        <Flame className="w-3 h-3 text-amber-400" strokeWidth={1.8} />
        <span>Live Now</span>
      </Badge>
    );
  }
  return (
    <Badge variant="completed">
      <CheckCircle2 className="w-3 h-3 text-slate-400" strokeWidth={1.8} />
      <span>Completed</span>
    </Badge>
  );
}
