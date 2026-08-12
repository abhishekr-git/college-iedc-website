"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, MapPin, Trophy, Sparkles, CheckCircle2, ArrowRight, Eye, ExternalLink, Mail, UserCheck, Camera } from "lucide-react";
import { AARAMBH_FLAGSHIP } from "@/data/eventsData";
import { getEventTheme } from "@/lib/eventTheme";
import { SubEvent } from "@/types/event";
import { EventStatusBadge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Modal } from "@/components/ui/Modal";
import { Lightbox } from "@/components/gallery/Lightbox";

export function AarambhClient() {
  const [selectedSubEvent, setSelectedSubEvent] = useState<SubEvent | null>(null);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const eventTheme = getEventTheme(AARAMBH_FLAGSHIP);
  const subEvents = AARAMBH_FLAGSHIP.subEvents || [];
  const galleryItems = AARAMBH_FLAGSHIP.gallery.map((imgUrl, idx) => ({
    id: `aarambh-photo-${idx}`,
    title: `Aarambh 3.0 Highlight ${idx + 1}`,
    category: "aarambh" as const,
    imageUrl: imgUrl,
    date: "4 - 5 Jan 2026",
    description: "Official photography from Aarambh 3.0 flagship innovation summit at CEKNPY.",
  }));

  return (
    <div className="bg-[var(--bg-primary)] text-[var(--text-primary)] min-h-screen pb-28 relative overflow-hidden">
      {/* Background Glow Mesh & Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[900px] h-[600px] bg-[var(--accent)]/[0.08] blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-purple-600/[0.05] blur-[100px] rounded-full" />
        <div className="absolute inset-0 bg-[linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] bg-[size:64px_64px] opacity-30" />
      </div>

      {/* Aarambh Hero Banner Section */}
      <div className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Eyebrow Badge & Status */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--bg-surface)] border border-[var(--border-hover)] text-[var(--accent)] text-xs font-semibold uppercase tracking-wider">
              <Trophy className="w-3.5 h-3.5 text-[var(--accent)]" />
              <span>Flagship Summit</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--bg-surface)] border border-[var(--border)] text-[var(--text-tertiary)] text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
              <span>Jan 4–5, 2026 • CEK Campus</span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="font-[var(--font-outfit)] text-4xl sm:text-6xl lg:text-8xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.08] mb-6">
            AARAMBH{" "}
            <span className="bg-gradient-to-r from-[var(--accent)] to-cyan-400 bg-clip-text text-transparent">
              3.0
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-lg sm:text-2xl text-[var(--text-secondary)] font-medium max-w-3xl mb-10 leading-relaxed">
            {AARAMBH_FLAGSHIP.tagline}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 max-w-xl mb-12">
            <Button
              href="#overview"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Explore Events & Tracks
            </Button>
            
            {eventTheme.websiteUrl && (
              <a
                href={eventTheme.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all border border-[var(--border-hover)] bg-[var(--bg-surface)] text-[var(--text-primary)] hover:border-[var(--accent)] min-h-[44px]"
              >
                <span>Visit aarambh26.tech</span>
                <ExternalLink className="w-4 h-4 text-[var(--text-tertiary)]" />
              </a>
            )}
          </div>

          {/* Quick Metrics Card */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border)] text-sm shadow-xl">
            <div className="flex items-center gap-3.5">
              <Calendar className="w-4 h-4 text-[var(--accent)] shrink-0" />
              <div>
                <div className="text-xs text-[var(--text-tertiary)] font-medium">Summit Dates</div>
                <div className="font-semibold text-[var(--text-primary)] text-base mt-0.5">4 – 5 January 2026</div>
              </div>
            </div>
            <div className="flex items-center gap-3.5">
              <MapPin className="w-4 h-4 text-[var(--accent)] shrink-0" />
              <div>
                <div className="text-xs text-[var(--text-tertiary)] font-medium">Venue</div>
                <div className="font-semibold text-[var(--text-primary)] text-base mt-0.5">{AARAMBH_FLAGSHIP.location}</div>
              </div>
            </div>
            <div className="flex items-center gap-3.5">
              <Trophy className="w-4 h-4 text-[var(--accent)] shrink-0" />
              <div>
                <div className="text-xs text-[var(--text-tertiary)] font-medium">Flagship Tracks</div>
                <div className="font-semibold text-[var(--text-primary)] text-base mt-0.5">10 Sub-Events</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Body */}
      <div id="overview" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 relative z-20 space-y-12">
        {/* Overview & Highlights */}
        <Card className="p-7 sm:p-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--bg-primary)] border border-[var(--border)] text-[var(--accent)] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Flagship Overview
          </div>
          <h2 className="font-[var(--font-outfit)] text-2xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">What is Aarambh 3.0?</h2>
          <p className="text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed mb-8">
            {AARAMBH_FLAGSHIP.fullDescription}
          </p>

          <h3 className="font-[var(--font-outfit)] text-xl font-bold text-[var(--text-primary)] mb-4">Summit Highlights</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {AARAMBH_FLAGSHIP.highlights.map((h, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[var(--bg-primary)] border border-[var(--border)] flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" strokeWidth={2} />
                <span className="text-sm font-medium text-[var(--text-secondary)]">{h}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Sub-Events Multi-Track Section */}
        <div>
          <div className="mb-8 text-center sm:text-left">
            <span className="text-xs font-medium text-[var(--accent)] uppercase tracking-wider">10 Flagship Tracks</span>
            <h2 className="font-[var(--font-outfit)] text-2xl sm:text-4xl font-bold text-[var(--text-primary)] mt-1">Aarambh 3.0 Events & Competitions</h2>
            <p className="text-[var(--text-secondary)] text-base mt-2 max-w-2xl">
              From 24-hour continuous coding marathons to combat bot arenas, auto expos, and hands-on technical masterclasses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subEvents.map((sub) => (
              <Card key={sub.id} className="p-0 overflow-hidden group flex flex-col justify-between">
                <div className="relative w-full aspect-[4/3] bg-[var(--bg-primary)] overflow-hidden">
                  <Image src={sub.posterUrl} alt={sub.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4">
                    <EventStatusBadge status={sub.status} />
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-[var(--text-tertiary)] font-medium mb-2">
                      <span className="text-[var(--accent)]">{sub.date}</span>
                      {sub.prizePool && (
                        <span className="text-[var(--text-primary)] font-semibold px-2.5 py-0.5 rounded-full bg-[var(--border-hover)]">
                          {sub.prizePool}
                        </span>
                      )}
                    </div>
                    <h3 className="font-[var(--font-outfit)] text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors mb-2 leading-snug">
                      {sub.title}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                      {sub.shortDescription}
                    </p>

                    {/* Sub-event Photos Display */}
                    {sub.gallery && sub.gallery.length > 0 && (
                      <div className="pt-3 border-t border-[var(--border)]">
                        <div className="flex items-center justify-between text-xs font-medium text-[var(--text-tertiary)] mb-2 uppercase tracking-wider">
                          <span className="inline-flex items-center gap-1">
                            <Camera className="w-3.5 h-3.5 text-[var(--accent)]" /> Event Photos
                          </span>
                        </div>
                        <div className="grid grid-cols-4 gap-1.5">
                          {sub.gallery.slice(0, 4).map((photo, i) => (
                            <div key={i} className="relative aspect-square rounded-lg overflow-hidden border border-[var(--border)] bg-[var(--bg-primary)] group/photo">
                              <Image src={photo} alt={`${sub.title} photo ${i + 1}`} fill className="object-cover group-hover/photo:scale-105 transition-transform duration-300" />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Schedule Timeline */}
        <Card className="p-7 sm:p-10">
          <div className="mb-6">
            <span className="text-xs font-medium text-[var(--accent)] uppercase tracking-wider">Full Event Schedule</span>
            <h2 className="font-[var(--font-outfit)] text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mt-1">2-Day Summit Agenda</h2>
          </div>
          <div className="space-y-5 relative before:absolute before:left-3.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-[var(--border-strong)]">
            {AARAMBH_FLAGSHIP.timeline.map((item, idx) => (
              <div key={idx} className="relative pl-9 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="absolute left-0 top-1 w-7 h-7 rounded-full bg-[var(--accent)] text-white flex items-center justify-center text-xs font-bold shadow-sm">
                  {idx + 1}
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-[var(--text-primary)]">{item.title}</h4>
                  <p className="text-xs sm:text-sm text-[var(--text-tertiary)]">{item.description}</p>
                </div>
                <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-[var(--border)] text-[var(--text-secondary)] shrink-0 self-start sm:self-auto">
                  {item.time}
                </span>
              </div>
            ))}
          </div>
        </Card>

        {/* Contact & Support Section */}
        <Card className="p-7 sm:p-10">
          <h2 className="font-[var(--font-outfit)] text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-6">Event Contacts & Organizing Desk</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="p-5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border)]">
              <UserCheck className="w-5 h-5 text-[var(--accent)] mb-2" />
              <h3 className="text-base font-semibold text-[var(--text-primary)]">Renjith SR & Hridhya J</h3>
              <p className="text-xs text-[var(--text-tertiary)] mt-0.5 font-medium">Nodal Officers</p>
            </div>

            <div className="p-5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border)]">
              <UserCheck className="w-5 h-5 text-[var(--accent)] mb-2" />
              <h3 className="text-base font-semibold text-[var(--text-primary)]">Anandhu Babu</h3>
              <p className="text-xs text-[var(--text-tertiary)] mt-0.5 font-medium">Student Lead & Convenor</p>
            </div>

            <div className="p-5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border)]">
              <Mail className="w-5 h-5 text-[var(--accent)] mb-2" />
              <h3 className="text-base font-semibold text-[var(--text-primary)]">IEDC Desk Support</h3>
              <p className="text-xs text-[var(--text-tertiary)] mt-0.5 font-medium mb-2">General Helpline</p>
              <a href="mailto:iedccek@gmail.com" className="text-xs text-[var(--accent)] hover:underline flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5" /> iedccek@gmail.com
              </a>
            </div>
          </div>
        </Card>

        {/* Photo Gallery Grid */}
        {AARAMBH_FLAGSHIP.gallery.length > 0 && (
          <Card className="p-7 sm:p-10">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-[var(--font-outfit)] text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">Past Aarambh Moments</h2>
              <span className="text-xs text-[var(--text-tertiary)] font-medium uppercase tracking-wider">Click to enlarge</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {AARAMBH_FLAGSHIP.gallery.map((img, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.03 }}
                  onClick={() => setSelectedPhotoIndex(idx)}
                  className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[var(--bg-primary)] border border-[var(--border)] cursor-pointer shadow-sm group"
                >
                  <Image src={img} alt={`Aarambh photo ${idx + 1}`} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-3 flex items-end">
                    <span className="text-xs font-semibold text-white inline-flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5" /> View Photo
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
        )}
      </div>

      {/* Lightbox Modal for Gallery */}
      {selectedPhotoIndex !== null && (
        <Lightbox
          items={galleryItems}
          currentIndex={selectedPhotoIndex}
          onClose={() => setSelectedPhotoIndex(null)}
          onNavigate={(newIndex) => setSelectedPhotoIndex(newIndex)}
        />
      )}

      {/* Sub-Event Detail Modal */}
      {selectedSubEvent && (
        <Modal
          isOpen={!!selectedSubEvent}
          onClose={() => setSelectedSubEvent(null)}
          title={selectedSubEvent.title}
          maxWidth="2xl"
        >
          <div className="space-y-5 text-[var(--text-primary)]">
            <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-[var(--bg-primary)] border border-[var(--border)]">
              <Image src={selectedSubEvent.posterUrl} alt={selectedSubEvent.title} fill className="object-cover" />
            </div>

            <div>
              <div className="flex items-center justify-between gap-4 mb-3">
                <EventStatusBadge status={selectedSubEvent.status} />
                {selectedSubEvent.prizePool && (
                  <span className="text-xs font-semibold text-[var(--text-primary)] px-3 py-1 rounded-full bg-[var(--border-hover)]">
                    {selectedSubEvent.prizePool}
                  </span>
                )}
              </div>
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed mt-2">
                {selectedSubEvent.fullDescription}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs bg-[var(--bg-primary)] p-4 rounded-xl border border-[var(--border)]">
              <div>
                <span className="text-[var(--text-tertiary)] font-medium">Date & Time:</span>
                <p className="font-semibold text-[var(--text-primary)] mt-0.5">{selectedSubEvent.date} ({selectedSubEvent.time})</p>
              </div>
              <div>
                <span className="text-[var(--text-tertiary)] font-medium">Location:</span>
                <p className="font-semibold text-[var(--text-primary)] mt-0.5">{selectedSubEvent.location}</p>
              </div>
            </div>

            {selectedSubEvent.highlights && (
              <div>
                <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-2">Highlights</h4>
                <ul className="space-y-1.5 text-xs text-[var(--text-secondary)]">
                  {selectedSubEvent.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent)]" /> {h}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Modal Photographs */}
            {selectedSubEvent.gallery && selectedSubEvent.gallery.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                  <Camera className="w-4 h-4 text-[var(--accent)]" /> Event Photographs ({selectedSubEvent.gallery.length} Photos)
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {selectedSubEvent.gallery.slice(0, 4).map((photo, i) => (
                    <div key={i} className="relative aspect-[4/3] rounded-lg overflow-hidden bg-[var(--bg-primary)] border border-[var(--border)] shadow-sm">
                      <Image src={photo} alt={`${selectedSubEvent.title} photo ${i + 1}`} fill className="object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Modal Sub-Event Navigation */}
            <div className="pt-4 border-t border-[var(--border)] flex items-center justify-between">
              <Button
                onClick={() => {
                  const currIdx = subEvents.findIndex((s) => s.id === selectedSubEvent.id);
                  const prevIdx = (currIdx - 1 + subEvents.length) % subEvents.length;
                  setSelectedSubEvent(subEvents[prevIdx]);
                }}
                variant="ghost"
                size="sm"
              >
                ← Previous Event
              </Button>
              <Button
                onClick={() => {
                  const currIdx = subEvents.findIndex((s) => s.id === selectedSubEvent.id);
                  const nextIdx = (currIdx + 1) % subEvents.length;
                  setSelectedSubEvent(subEvents[nextIdx]);
                }}
                variant="ghost"
                size="sm"
              >
                Next Event →
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
