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
    <div className="bg-[#041A0D] text-white min-h-screen pb-28 relative overflow-hidden transition-colors duration-700">
      {/* Premium Dark Green Ambient Glow & Grid Matrix */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top Center Lime & Emerald Glow */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] sm:w-[1200px] h-[500px] sm:h-[750px] bg-gradient-to-b from-[#008C45]/35 via-[#B4D334]/20 to-transparent blur-[160px] rounded-full" />
        
        {/* Left Side Soft Light Green Glow */}
        <div className="absolute top-1/3 -left-40 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] bg-gradient-to-tr from-[#008C45]/25 to-[#B4D334]/15 blur-[160px] rounded-full" />

        {/* Right Side Emerald Glow */}
        <div className="absolute top-1/4 -right-40 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] bg-gradient-to-bl from-[#B4D334]/20 to-[#008C45]/25 blur-[160px] rounded-full" />

        {/* Faint Grid Matrix */}
        <div className="absolute inset-0 bg-[radial-gradient(#B4D334_1px,transparent_1px)] [background-size:36px_36px] opacity-10" />
      </div>

      {/* Aarambh Dedicated Hero Banner Section */}
      <div className="relative pt-36 pb-20 sm:pt-44 sm:pb-28 text-white overflow-hidden border-b border-[#B4D334]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Eyebrow Badge & Status */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#008C45]/20 border border-[#B4D334]/40 text-[#B4D334] text-xs font-bold uppercase tracking-widest backdrop-blur-xl shadow-lg shadow-[#008C45]/20">
              <Trophy className="w-4 h-4 text-[#B4D334] animate-pulse" />
              <span>Flagship Summit</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-700 text-slate-300 text-xs font-bold">
              <span className="w-2 h-2 rounded-full bg-[#008C45]" />
              <span>Jan 4–5, 2026 • CEK Campus</span>
            </div>
          </div>

          {/* Aarambh Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black tracking-tight text-[#FFFFFF] leading-[1.08] mb-6">
            AARAMBH{" "}
            <span className="bg-gradient-to-r from-[#B4D334] via-[#A3E635] to-[#008C45] bg-clip-text text-transparent">
              3.0
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-lg sm:text-2xl text-slate-200 font-medium max-w-3xl mb-10 leading-relaxed">
            {AARAMBH_FLAGSHIP.tagline}
          </p>

          {/* Dual Action Buttons: Explore & Smart CTA for Official Website */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 max-w-xl mb-12">
            <Button
              href="#overview"
              variant="primary"
              size="lg"
              className="bg-gradient-to-r from-[#008C45] to-[#B4D334] text-[#041A0D] font-extrabold hover:brightness-110 shadow-xl shadow-[#008C45]/30 min-h-[50px] px-8 rounded-full"
              icon={<ArrowRight className="w-5 h-5 text-[#041A0D]" />}
            >
              Explore Events & Tracks
            </Button>
            
            {/* Smart CTA for Official Website */}
            {eventTheme.websiteUrl && (
              <a
                href={eventTheme.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full text-base font-bold transition-all border border-[#B4D334]/40 bg-[#008C45]/20 text-[#B4D334] hover:bg-[#008C45]/40 hover:border-[#B4D334] backdrop-blur-xl shadow-lg min-h-[50px]"
              >
                <span>Visit aarambh26.tech</span>
                <ExternalLink className="w-4 h-4 text-[#B4D334]" />
              </a>
            )}
          </div>

          {/* Quick Metrics Header Card */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl p-6 rounded-3xl bg-[#062413]/70 border border-[#B4D334]/25 backdrop-blur-xl text-sm shadow-2xl">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-2xl bg-[#008C45]/30 border border-[#B4D334]/30 flex items-center justify-center text-[#B4D334]">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-medium">Summit Dates</div>
                <div className="font-bold text-white text-base">4 – 5 January 2026</div>
              </div>
            </div>
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-2xl bg-[#008C45]/30 border border-[#B4D334]/30 flex items-center justify-center text-[#B4D334]">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-medium">Venue</div>
                <div className="font-bold text-white text-base">{AARAMBH_FLAGSHIP.location}</div>
              </div>
            </div>
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-2xl bg-[#008C45]/30 border border-[#B4D334]/30 flex items-center justify-center text-[#B4D334]">
                <Trophy className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-medium">Flagship Tracks</div>
                <div className="font-bold text-white text-base">10 Sub-Events</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Body */}
      <div id="overview" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 relative z-20 space-y-16">
        {/* Overview & Highlights */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#062413]/60 border border-[#B4D334]/20 backdrop-blur-xl shadow-2xl hover:border-[#B4D334]/40 transition-all duration-300">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#008C45]/20 border border-[#B4D334]/30 text-[#B4D334] text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Flagship Overview
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-6 tracking-tight">What is Aarambh 3.0?</h2>
          <p className="text-slate-200 text-base sm:text-lg leading-relaxed mb-10 font-normal">
            {AARAMBH_FLAGSHIP.fullDescription}
          </p>

          <h3 className="text-xl font-bold text-white mb-6 tracking-tight">Summit Highlights</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {AARAMBH_FLAGSHIP.highlights.map((h, idx) => (
              <div key={idx} className="p-4 sm:p-5 rounded-2xl bg-[#021008]/80 border border-[#B4D334]/20 flex items-start gap-3.5">
                <CheckCircle2 className="w-5 h-5 text-[#B4D334] shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-slate-200">{h}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sub-Events Multi-Track Section */}
        <div>
          <div className="mb-10 text-center sm:text-left">
            <span className="text-xs font-bold text-[#B4D334] uppercase tracking-widest">10 Flagship Tracks</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-1">Aarambh 3.0 Events & Competitions</h2>
            <p className="text-slate-300 text-base mt-2 max-w-2xl">
              From 24-hour continuous coding marathons to combat bot arenas, auto expos, and hands-on technical masterclasses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subEvents.map((sub) => (
              <div key={sub.id} className="p-0 rounded-3xl bg-[#062413]/60 border border-[#B4D334]/20 backdrop-blur-xl overflow-hidden shadow-2xl hover:border-[#B4D334]/40 hover:shadow-[0_0_30px_rgba(180,211,52,0.2)] transition-all duration-300 flex flex-col justify-between group">
                <div className="relative w-full aspect-[4/3] bg-slate-950 overflow-hidden">
                  <Image src={sub.posterUrl} alt={sub.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#041A0D] via-transparent to-transparent opacity-80" />
                  <div className="absolute top-4 left-4">
                    <EventStatusBadge status={sub.status} />
                  </div>
                </div>

                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-400 font-semibold mb-2">
                      <span className="text-[#B4D334]">{sub.date}</span>
                      {sub.prizePool && (
                        <span className="text-[#B4D334] font-extrabold px-2.5 py-0.5 rounded-full bg-[#008C45]/30 border border-[#B4D334]/30">
                          {sub.prizePool}
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#B4D334] transition-colors mb-2 leading-snug">
                      {sub.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed font-normal mb-3">
                      {sub.shortDescription}
                    </p>

                    {/* Event Photos Display (Only when photos exist) */}
                    {sub.gallery && sub.gallery.length > 0 && (
                      <div className="pt-3 border-t border-[#B4D334]/15">
                        <div className="flex items-center justify-between text-[11px] font-bold text-[#B4D334] mb-2 uppercase tracking-wider">
                          <span className="inline-flex items-center gap-1">
                            <Camera className="w-3.5 h-3.5 text-[#B4D334]" /> Event Photos
                          </span>
                        </div>
                        <div className="grid grid-cols-4 gap-1.5">
                          {sub.gallery.slice(0, 4).map((photo, i) => (
                            <div key={i} className="relative aspect-square rounded-lg overflow-hidden border border-[#B4D334]/30 bg-slate-950 shadow-sm group/photo">
                              <Image src={photo} alt={`${sub.title} photo ${i + 1}`} fill className="object-cover group-hover/photo:scale-110 transition-transform duration-300" />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Schedule Timeline */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#062413]/60 border border-[#B4D334]/20 backdrop-blur-xl shadow-2xl">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-bold text-[#B4D334] uppercase tracking-widest">Full Event Schedule</span>
              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight mt-1">2-Day Summit Agenda</h2>
            </div>
          </div>
          <div className="space-y-6 relative before:absolute before:left-3.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-[#008C45]/40">
            {AARAMBH_FLAGSHIP.timeline.map((item, idx) => (
              <div key={idx} className="relative pl-10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="absolute left-0 top-1 w-7 h-7 rounded-full bg-gradient-to-tr from-[#008C45] to-[#B4D334] text-[#041A0D] flex items-center justify-center text-xs font-extrabold shadow-md">
                  {idx + 1}
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-white">{item.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-300 font-normal">{item.description}</p>
                </div>
                <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-[#008C45]/20 text-[#B4D334] border border-[#B4D334]/30 shrink-0 self-start sm:self-auto">
                  {item.time}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact & Support Section */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#062413]/60 border border-[#B4D334]/20 backdrop-blur-xl shadow-2xl">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-6 tracking-tight">Event Contacts & Organizing Desk</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#021008]/80 border border-[#B4D334]/20">
              <UserCheck className="w-6 h-6 text-[#B4D334] mb-3" />
              <h3 className="text-base font-bold text-white">Renjith S R</h3>
              <p className="text-xs text-[#B4D334] font-semibold">Nodal Officer</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#021008]/80 border border-[#B4D334]/20">
              <UserCheck className="w-6 h-6 text-[#B4D334] mb-3" />
              <h3 className="text-base font-bold text-white">Anandhu Babu</h3>
              <p className="text-xs text-[#B4D334] font-semibold">Student Lead & Convenor</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#021008]/80 border border-[#B4D334]/20">
              <Mail className="w-6 h-6 text-[#B4D334] mb-3" />
              <h3 className="text-base font-bold text-white">IEDC Desk Support</h3>
              <p className="text-xs text-[#B4D334] font-semibold mb-2">General Helpline</p>
              <a href="mailto:iedccek@gmail.com" className="text-xs text-slate-300 hover:text-white flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#B4D334]" /> iedccek@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Photo Gallery Grid */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#062413]/60 border border-[#B4D334]/20 backdrop-blur-xl shadow-2xl">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Past Aarambh Moments</h2>
            <span className="text-xs text-[#B4D334] font-bold uppercase tracking-widest">Click to enlarge</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {AARAMBH_FLAGSHIP.gallery.map((img, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03 }}
                onClick={() => setSelectedPhotoIndex(idx)}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-950 border border-[#B4D334]/20 cursor-pointer shadow-lg group"
              >
                <Image src={img} alt={`Aarambh photo ${idx + 1}`} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#041A0D]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-3 flex items-end">
                  <span className="text-xs font-bold text-[#B4D334] inline-flex items-center gap-1">
                    <Eye className="w-3.5 h-3.5" /> View Photo
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
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
          <div className="space-y-6 text-white">
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-slate-950 border border-[#B4D334]/20">
              <Image src={selectedSubEvent.posterUrl} alt={selectedSubEvent.title} fill className="object-cover" />
            </div>

            <div>
              <div className="flex items-center justify-between gap-4 mb-3">
                <EventStatusBadge status={selectedSubEvent.status} />
                {selectedSubEvent.prizePool && (
                  <span className="text-sm font-extrabold text-[#B4D334] px-3.5 py-1 rounded-full bg-[#008C45]/30 border border-[#B4D334]/40">
                    {selectedSubEvent.prizePool}
                  </span>
                )}
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mt-2 font-normal">
                {selectedSubEvent.fullDescription}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs bg-[#021008] p-4 rounded-2xl border border-[#B4D334]/20">
              <div>
                <span className="text-slate-400 font-medium">Date & Time:</span>
                <p className="font-bold text-white mt-0.5">{selectedSubEvent.date} ({selectedSubEvent.time})</p>
              </div>
              <div>
                <span className="text-slate-400 font-medium">Location:</span>
                <p className="font-bold text-white mt-0.5">{selectedSubEvent.location}</p>
              </div>
            </div>

            {selectedSubEvent.highlights && (
              <div>
                <h4 className="text-sm font-bold text-white mb-2">Highlights</h4>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {selectedSubEvent.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#B4D334]" /> {h}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Modal Event Photographs (Only rendered when photos exist) */}
            {selectedSubEvent.gallery && selectedSubEvent.gallery.length > 0 && (
              <div>
                <h4 className="text-sm font-bold text-[#B4D334] mb-3 flex items-center gap-2">
                  <Camera className="w-4 h-4 text-[#B4D334]" /> Event Photographs ({selectedSubEvent.gallery.length} Photos)
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {selectedSubEvent.gallery.slice(0, 4).map((photo, i) => (
                    <div key={i} className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-950 border border-[#B4D334]/30 shadow-md">
                      <Image src={photo} alt={`${selectedSubEvent.title} photo ${i + 1}`} fill className="object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Registration Action */}
            {selectedSubEvent.registrationLink && (
              <div className="pt-2">
                <a
                  href={selectedSubEvent.registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-[#008C45] hover:bg-[#008C45]/80 text-[#B4D334] font-bold text-xs uppercase tracking-wider transition-all shadow-lg"
                >
                  <ExternalLink className="w-4 h-4 text-[#B4D334]" />
                  <span>Register for {selectedSubEvent.title}</span>
                </a>
              </div>
            )}

            {/* Modal Sub-Event Navigation */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <Button
                onClick={() => {
                  const currIdx = subEvents.findIndex((s) => s.id === selectedSubEvent.id);
                  const prevIdx = (currIdx - 1 + subEvents.length) % subEvents.length;
                  setSelectedSubEvent(subEvents[prevIdx]);
                }}
                variant="ghost"
                size="sm"
                className="text-[#B4D334] hover:bg-[#008C45]/20"
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
                className="text-[#B4D334] hover:bg-[#008C45]/20"
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
