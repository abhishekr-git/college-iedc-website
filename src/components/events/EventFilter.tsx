"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { EventStatus } from "@/types/event";

type FilterTab = "all" | EventStatus;

interface EventFilterProps {
  currentFilter: FilterTab;
  onFilterChange: (filter: FilterTab) => void;
  counts: Record<FilterTab, number>;
}

export function EventFilter({
  currentFilter,
  onFilterChange,
  counts,
}: EventFilterProps) {
  const tabs: { id: FilterTab; label: string }[] = [
    { id: "all", label: "All" },
    { id: "upcoming", label: "Upcoming" },
    { id: "completed", label: "Completed" },
  ];

  return (
    <div className="flex items-center justify-center gap-1.5 mb-10 p-1 bg-[var(--bg-surface)] rounded-full border border-[var(--border)] max-w-fit mx-auto">
      {tabs.map((tab) => {
        const isActive = currentFilter === tab.id;
        const count = counts[tab.id] || 0;

        return (
          <button
            key={tab.id}
            onClick={() => onFilterChange(tab.id)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-1.5 min-h-[36px]",
              isActive
                ? "bg-[var(--border-hover)] text-[var(--text-primary)]"
                : "text-[var(--text-tertiary)] hover:text-[var(--text-secondary)]"
            )}
          >
            <span>{tab.label}</span>
            <span
              className={cn(
                "text-xs tabular-nums",
                isActive ? "text-[var(--text-secondary)]" : "text-[var(--text-tertiary)]"
              )}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
}
