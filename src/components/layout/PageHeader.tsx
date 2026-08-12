"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs?: { label: string; href: string }[];
  className?: string;
}

export function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumbs = [],
  className,
}: PageHeaderProps) {
  return (
    <div
      className={cn(
        "relative pt-28 pb-14 sm:pt-36 sm:pb-20 bg-[var(--bg-primary)] text-[var(--text-primary)] border-b border-[var(--border)]",
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb */}
        {breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex items-center gap-1.5 text-xs text-[var(--text-tertiary)] font-medium">
              <li>
                <Link href="/" className="hover:text-[var(--text-primary)] transition-colors">
                  Home
                </Link>
              </li>
              {breadcrumbs.map((crumb, idx) => (
                <React.Fragment key={crumb.href}>
                  <ChevronRight className="w-3 h-3 text-[var(--text-tertiary)]" strokeWidth={1.5} />
                  <li>
                    {idx === breadcrumbs.length - 1 ? (
                      <span className="text-[var(--text-secondary)]">{crumb.label}</span>
                    ) : (
                      <Link href={crumb.href} className="hover:text-[var(--text-primary)] transition-colors">
                        {crumb.label}
                      </Link>
                    )}
                  </li>
                </React.Fragment>
              ))}
            </ol>
          </nav>
        )}

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl"
        >
          <h1 className="font-[var(--font-outfit)] text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] tracking-tight leading-[1.1] mb-4">
            {title}
          </h1>

          {description && (
            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
}
