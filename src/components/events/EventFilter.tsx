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
    { id: "all", label: "All Events" },
    { id: "upcoming", label: "Upcoming" },
    { id: "completed", label: "Completed" },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
      {tabs.map((tab) => {
        const isActive = currentFilter === tab.id;
        const count = counts[tab.id] || 0;

        return (
          <button
            key={tab.id}
            onClick={() => onFilterChange(tab.id)}
            className={cn(
              "px-5 py-2.5 rounded-full text-sm font-bold transition-all flex items-center gap-2 min-h-[44px] backdrop-blur-md",
              isActive
                ? "bg-[#3B82F6] text-[#FAFAFA] shadow-lg shadow-[#3B82F6]/20 border border-[#3B82F6]/50"
                : "bg-white/[0.04] text-[#A1A1AA] hover:text-[#FAFAFA] hover:bg-white/[0.08] border border-white/[0.08]"
            )}
          >
            <span>{tab.label}</span>
            <span
              className={cn(
                "px-2 py-0.5 rounded-full text-xs font-semibold",
                isActive
                  ? "bg-white/20 text-white"
                  : "bg-white/[0.08] text-[#A1A1AA]"
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
