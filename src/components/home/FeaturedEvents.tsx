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
    <section className="py-24 sm:py-32 bg-[#0B0F14] text-white relative overflow-hidden border-b border-white/[0.08]">
      {/* Layered Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 -right-36 w-[600px] h-[600px] bg-[#3B82F6]/10 blur-[160px] rounded-full" />
        <div className="absolute bottom-10 -left-36 w-[500px] h-[500px] bg-[#60A5FA]/10 blur-[160px] rounded-full" />
        <div className="absolute inset-0 bg-[radial-gradient(#3B82F6_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.04]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Events & Summits"
          title="Transformative Hackathons & Bootcamps"
          subtitle="Explore flagship summits, hardware prototyping expos, and high-intensity technical bootcamps hosted by IEDC CEKNPY."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
          {featuredEvents.map((event, idx) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <EventCard event={event} />
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button
            href="/events"
            variant="primary"
            size="lg"
            className="bg-[#3B82F6] hover:bg-[#2563EB] text-white shadow-lg shadow-[#3B82F6]/35 border border-[#3B82F6]/50 h-[56px] px-8 rounded-full"
            icon={<ArrowRight className="w-5 h-5 text-white" strokeWidth={1.8} />}
          >
            Explore All Events & Workshops
          </Button>
        </div>
      </div>
    </section>
  );
}
