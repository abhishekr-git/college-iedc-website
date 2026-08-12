"use client";

import React from "react";
import { motion } from "framer-motion";
import { Counter } from "@/components/ui/Counter";
import { STATS_DATA } from "@/data/statsData";

export function StatsSection() {
  return (
    <section className="py-16 sm:py-20 bg-[var(--bg-primary)] border-t border-[var(--border)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12"
        >
          {STATS_DATA.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] tracking-tight mb-1.5">
                <Counter to={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-[var(--text-tertiary)] font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
