"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeading({ title, subtitle, align = "center" }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-12 sm:mb-16 ${align === "center" ? "text-center" : "text-left"}`}
    >
      <h2 className="font-[var(--font-outfit)] text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] tracking-tight leading-[1.1] mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
