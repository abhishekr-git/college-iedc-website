"use client";

import React from "react";
import Image from "next/image";
import { Calendar, MapPin, ArrowRight, Sparkles } from "lucide-react";
import { EventItem } from "@/types/event";
import { EventStatusBadge, Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface EventCardProps {
  event: EventItem;
}

export function EventCard({ event }: EventCardProps) {
  const detailHref = event.isFlagship ? "/events/aarambh" : `/events/${event.slug}`;

  return (
    <div className="flex flex-col h-full bg-[#10151D] border border-white/[0.08] rounded-[24px] overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:border-[#3B82F6]/40 hover:shadow-[0_12px_40px_rgba(59,130,246,0.18)] transition-all duration-300 hover:-translate-y-1.5 group">
      {/* Poster Image Container */}
      <div className="relative w-full aspect-[4/3] bg-[#0B0F14] overflow-hidden">
        <Image
          src={event.posterUrl}
          alt={event.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-92 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-[#050608]/30 to-transparent opacity-90" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
          <EventStatusBadge status={event.status} />
          {event.isFlagship && (
            <Badge variant="flagship">
              <Sparkles className="w-3 h-3 mr-1 inline text-[#60A5FA]" strokeWidth={1.8} /> Flagship
            </Badge>
          )}
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
        <div>
          {/* Metadata Row */}
          <div className="flex flex-wrap items-center gap-3 text-xs text-white/72 font-medium mb-3">
            <span className="inline-flex items-center gap-1.5 text-[#3B82F6]">
              <Calendar className="w-3.5 h-3.5 text-[#3B82F6]" strokeWidth={1.8} />
              {event.date}
            </span>
            <span className="text-white/48">•</span>
            <span className="inline-flex items-center gap-1.5 text-white/72">
              <MapPin className="w-3.5 h-3.5 text-[#60A5FA]" strokeWidth={1.8} />
              {event.location.split(",")[0]}
            </span>
          </div>

          <h3 className="text-xl font-extrabold text-white group-hover:text-[#60A5FA] transition-colors mb-2 leading-snug tracking-tight">
            {event.title}
          </h3>

          <p className="text-sm text-white/72 leading-relaxed line-clamp-2 mb-6 font-normal">
            {event.shortDescription}
          </p>
        </div>

        <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
          <span className="text-xs font-semibold text-white/48">
            {event.category.toUpperCase()}
          </span>
          <Button
            href={detailHref}
            variant="glass"
            size="sm"
            className="text-xs border-white/[0.08] bg-white/[0.04] text-white hover:bg-[#3B82F6] hover:border-[#3B82F6] transition-all min-h-[38px] rounded-full"
            icon={<ArrowRight className="w-3.5 h-3.5" strokeWidth={1.8} />}
          >
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
}
