"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ABOUT_DATA } from "@/data/aboutData";

export function AboutPreview() {
  return (
    <section className="py-[var(--section-py)] bg-[var(--bg-primary)] border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-[var(--font-outfit)] text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] tracking-tight leading-[1.1] mb-6">
              Building Tomorrow&apos;s Innovators
            </h2>
            <p className="text-[var(--text-secondary)] text-base sm:text-lg leading-[1.75] mb-4">
              {ABOUT_DATA.mission}
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors group"
            >
              Learn about IEDC
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" strokeWidth={2} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
