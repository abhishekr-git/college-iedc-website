"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";
import { EventItem } from "@/types/event";
import { EventStatusBadge } from "@/components/ui/Badge";

interface EventCardProps {
  event: EventItem;
}

export function EventCard({ event }: EventCardProps) {
  const detailHref = event.isFlagship ? "/events/aarambh" : `/events/${event.slug}`;

  return (
    <Link href={detailHref} className="block group">
      <div className="flex flex-col h-full bg-[var(--bg-surface)] border border-[var(--border)] rounded-2xl overflow-hidden transition-all duration-300 hover:border-[var(--border-hover)]">
        {/* Image */}
        <div className="relative w-full aspect-[16/10] bg-[var(--bg-primary)] overflow-hidden">
          <Image
            src={event.posterUrl}
            alt={event.title}
            fill
            className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-surface)] via-transparent to-transparent opacity-60" />

          {/* Status Badge */}
          <div className="absolute top-3 left-3 z-10">
            <EventStatusBadge status={event.status} />
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex-1 flex flex-col">
          <div className="flex items-center gap-2 text-xs text-[var(--text-tertiary)] mb-2.5">
            <Calendar className="w-3.5 h-3.5" strokeWidth={1.5} />
            <span>{event.date}</span>
          </div>

          <h3 className="text-lg font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors mb-2 leading-snug tracking-tight">
            {event.title}
          </h3>

          <p className="text-sm text-[var(--text-secondary)] leading-relaxed line-clamp-2">
            {event.shortDescription}
          </p>
        </div>
      </div>
    </Link>
  );
}
