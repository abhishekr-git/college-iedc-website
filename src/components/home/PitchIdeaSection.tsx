"use client";

import React from "react";
import { Lightbulb, Sparkles, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function PitchIdeaSection() {
  return (
    <section className="py-24 sm:py-32 bg-[#050505] text-[#FAFAFA] relative overflow-hidden border-b border-white/[0.06]">
      {/* Layered Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-[#3B82F6]/08 blur-[160px] rounded-full" />
        <div className="absolute inset-0 bg-[radial-gradient(#3B82F6_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.04]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl p-8 sm:p-14 bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.4)] overflow-hidden hover:border-[#3B82F6]/40 hover:shadow-[0_8px_32px_rgba(59,130,246,0.15)] transition-all duration-300 text-center sm:text-left flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Column Content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[#A1A1AA] text-xs font-semibold uppercase tracking-widest mb-4 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#3B82F6]" strokeWidth={1.8} /> Incubate Your Vision
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#FAFAFA] tracking-tight leading-tight mb-4">
              Pitch Your Startup Idea
            </h2>

            <p className="text-base sm:text-lg text-[#A1A1AA] font-normal leading-relaxed mb-6">
              Have an innovative startup idea? Share it with IEDC CEKNPY and take the first step toward building your venture.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#A1A1AA]">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#3B82F6] shrink-0" strokeWidth={1.8} />
                <span>Mentorship from serial founders</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#8B5CF6] shrink-0" strokeWidth={1.8} />
                <span>Access to prototype hardware & lab</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#3B82F6] shrink-0" strokeWidth={1.8} />
                <span>KSUM Seed Grant guidance</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#8B5CF6] shrink-0" strokeWidth={1.8} />
                <span>Intellectual Property & Legal aid</span>
              </div>
            </div>
          </div>

          {/* Right Action Button */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full lg:w-auto shrink-0">
            <Button
              href="/pitch-idea"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto justify-center text-base bg-[#3B82F6] hover:bg-[#2563EB] text-white shadow-lg shadow-[#3B82F6]/20 border border-[#3B82F6]/50 min-h-[50px] px-8"
              icon={<Lightbulb className="w-5 h-5 text-white" strokeWidth={1.8} />}
            >
              Pitch Your Idea Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
