"use client";

import React from "react";
import { motion } from "framer-motion";
import { Rocket, Calendar, Users, Wrench, Trophy, Lightbulb, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Counter } from "@/components/ui/Counter";
import { STATS_DATA } from "@/data/statsData";

const iconMap = {
  Rocket,
  Calendar,
  Users,
  Wrench,
  Trophy,
  Lightbulb,
};

export function StatsSection() {
  return (
    <section className="py-24 sm:py-32 bg-[#050505] text-[#FAFAFA] relative overflow-hidden border-b border-white/[0.06]">
      {/* Layered Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-[#3B82F6]/08 blur-[160px] rounded-full" />
        <div className="absolute inset-0 bg-[radial-gradient(#3B82F6_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.04]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Impact by Numbers"
          title="Empowering the Campus Innovation Frontier"
          subtitle="Our track record over the years reflects relentless building, high-impact events, and student innovation."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {STATS_DATA.map((stat, idx) => {
            const Icon = iconMap[stat.iconName] || Lightbulb;

            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 sm:p-10 rounded-3xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] flex flex-col justify-between hover:border-[#3B82F6]/40 hover:shadow-[0_8px_32px_rgba(59,130,246,0.15)] transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-[#3B82F6]/10 border border-[#3B82F6]/30 flex items-center justify-center text-[#3B82F6] group-hover:scale-105 transition-transform">
                    <Icon className="w-7 h-7" strokeWidth={1.8} />
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#A1A1AA] uppercase tracking-widest bg-white/[0.04] px-3 py-1 rounded-full border border-white/[0.08]">
                    <Sparkles className="w-3 h-3 text-[#3B82F6]" strokeWidth={1.8} /> Metric
                  </span>
                </div>

                <div>
                  <div className="text-4xl sm:text-5xl font-extrabold text-[#FAFAFA] tracking-tight mb-3">
                    <Counter to={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                  </div>
                  <div className="text-lg font-bold text-[#FAFAFA] mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-[#A1A1AA] leading-relaxed font-normal">
                    {stat.description}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
