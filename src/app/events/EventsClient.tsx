"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ALL_EVENTS } from "@/data/eventsData";
import { EventStatus } from "@/types/event";
import { EventCard } from "@/components/events/EventCard";
import { EventFilter } from "@/components/events/EventFilter";

type FilterTab = "all" | EventStatus;

export function EventsClient() {
  const [filter, setFilter] = useState<FilterTab>("all");

  const counts: Record<FilterTab, number> = {
    all: ALL_EVENTS.length,
    upcoming: ALL_EVENTS.filter((e) => e.status === "upcoming").length,
    completed: ALL_EVENTS.filter((e) => e.status === "completed").length,
    ongoing: ALL_EVENTS.filter((e) => e.status === "ongoing").length,
  };

  const filteredEvents = ALL_EVENTS.filter((e) => {
    if (filter === "all") return true;
    return e.status === filter;
  });

  return (
    <div className="bg-[var(--bg-primary)] text-[var(--text-primary)] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <EventFilter
          currentFilter={filter}
          onFilterChange={setFilter}
          counts={counts}
        />

        {filteredEvents.length === 0 ? (
          <div className="text-center py-16 bg-[var(--bg-surface)] rounded-2xl border border-[var(--border)]">
            <p className="text-[var(--text-secondary)] text-base">
              No events found in this category. Check back soon!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event, idx) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
              >
                <EventCard event={event} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
