"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, Compass, ArrowRight, Sparkles, Rocket } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ABOUT_DATA } from "@/data/aboutData";
import { Card } from "@/components/ui/Card";

export function AboutPreview() {
  return (
    <section className="py-24 sm:py-32 bg-[#0B0F14] text-white relative overflow-hidden border-b border-white/[0.08]">
      {/* Layered Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 -left-32 w-[500px] h-[500px] bg-[#3B82F6]/10 blur-[160px] rounded-full" />
        <div className="absolute bottom-10 -right-32 w-[500px] h-[500px] bg-[#60A5FA]/10 blur-[160px] rounded-full" />
        <div className="absolute inset-0 bg-[radial-gradient(#3B82F6_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.04]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Ecosystem & Vision"
          title="Building Tomorrow's Tech Leaders at CEKNPY"
          subtitle="IEDC CEKNPY serves as the institutional catalyst for converting engineering academic projects into commercial market solutions."
        />

        {/* Mission & Vision Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          {/* Mission Card */}
          <Card className="p-8 sm:p-10 flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#3B82F6]/15 border border-[#3B82F6]/30 flex items-center justify-center text-[#3B82F6] mb-6 group-hover:scale-105 transition-transform">
                <Target className="w-7 h-7" strokeWidth={1.8} />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 tracking-tight">Our Mission</h3>
              <p className="text-white/72 text-base leading-relaxed font-normal">
                {ABOUT_DATA.mission}
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-white/[0.08] flex items-center gap-2 text-xs font-bold text-[#60A5FA] uppercase tracking-widest">
              <Sparkles className="w-4 h-4 text-[#60A5FA]" strokeWidth={1.8} />
              <span>Execution • Acceleration</span>
            </div>
          </Card>

          {/* Vision Card */}
          <Card className="p-8 sm:p-10 flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#3B82F6]/15 border border-[#3B82F6]/30 flex items-center justify-center text-[#60A5FA] mb-6 group-hover:scale-105 transition-transform">
                <Compass className="w-7 h-7" strokeWidth={1.8} />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 tracking-tight">Our Vision</h3>
              <p className="text-white/72 text-base leading-relaxed font-normal">
                {ABOUT_DATA.vision}
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-white/[0.08] flex items-center gap-2 text-xs font-bold text-[#60A5FA] uppercase tracking-widest">
              <Rocket className="w-4 h-4 text-[#60A5FA]" strokeWidth={1.8} />
              <span>Innovation • Global Scale</span>
            </div>
          </Card>
        </div>

        {/* Bottom Callout & Button */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-[24px] bg-[#10151D] border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
          <div>
            <h4 className="text-xl font-bold text-white mb-1">Discover Our Journey & History</h4>
            <p className="text-sm text-white/72 font-normal">Learn how IEDC CEKNPY grew into one of the top innovation centres in Kerala.</p>
          </div>
          <Button
            href="/about"
            variant="primary"
            size="md"
            className="w-full sm:w-auto shrink-0 justify-center text-sm bg-[#3B82F6] hover:bg-[#2563EB] text-white shadow-lg shadow-[#3B82F6]/25 border border-[#3B82F6]/50 min-h-[48px]"
            icon={<ArrowRight className="w-4 h-4 text-white" strokeWidth={1.8} />}
          >
            Read Full Story
          </Button>
        </div>
      </div>
    </section>
  );
}
