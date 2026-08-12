"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EventCard } from "@/components/events/EventCard";
import { Button } from "@/components/ui/Button";
import { ALL_EVENTS } from "@/data/eventsData";

export function FeaturedEvents() {
  const featuredEvents = ALL_EVENTS.slice(0, 3);

  return (
    <section className="py-[var(--section-py)] bg-[var(--bg-primary)] border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Events & Workshops"
          subtitle="Hackathons, bootcamps, and summits that push the boundaries of student innovation."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredEvents.map((event, idx) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
            >
              <EventCard event={event} />
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button
            href="/events"
            variant="outline"
            size="md"
            icon={<ArrowRight className="w-4 h-4" strokeWidth={2} />}
          >
            All Events
          </Button>
        </div>
      </div>
    </section>
  );
}
