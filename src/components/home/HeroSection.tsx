"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] sm:min-h-[100vh] bg-[var(--bg-primary)] text-[var(--text-primary)] flex items-center justify-center overflow-hidden border-b border-[var(--border)] pt-32 pb-24 sm:pt-36 sm:pb-28">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[900px] h-[600px] bg-[var(--accent)]/[0.08] blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-purple-600/[0.05] blur-[100px] rounded-full" />
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-cyan-500/[0.04] blur-[100px] rounded-full" />
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] bg-[size:64px_64px] opacity-30 pointer-events-none" />

      {/* Center Hero Content */}
      <div className="w-[90%] max-w-[680px] mx-auto relative z-20 text-center">
        <div className="flex flex-col items-center">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-[var(--font-outfit)] font-bold tracking-[-0.03em] leading-[1.05] text-[clamp(2.5rem,6vw,4.5rem)] text-[var(--text-primary)] mb-5"
          >
            Where Ideas Become{" "}
            <span className="bg-gradient-to-r from-[var(--accent)] to-cyan-400 bg-clip-text text-transparent">
              Ventures
            </span>
          </motion.h1>

          {/* Subhead */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed max-w-[520px] mx-auto mb-10"
          >
            The innovation hub of College of Engineering Karunagappally empowering students to build, launch, and scale.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16"
          >
            <Button
              href="/events"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" strokeWidth={2} />}
            >
              Explore Events
            </Button>
            <Button
              href="/about"
              variant="ghost"
              size="lg"
            >
              Learn More
            </Button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="flex items-center justify-center gap-8 sm:gap-14"
          >
            {[
              { value: "50+", label: "Ideas Incubated" },
              { value: "100+", label: "Active Members" },
              { value: "₹10L+", label: "Grants Disbursed" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs text-[var(--text-tertiary)] font-medium mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
