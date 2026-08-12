"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const pathname = usePathname();

  const moreLinks = [
    { label: "Home", href: "/" },
    { label: "Events", href: "/events" },
    { label: "Team", href: "/team/current" },
    { label: "About IEDC", href: "/about" },
    { label: "Gallery", href: "/gallery" },
    { label: "Pitch Your Idea", href: "/pitch-idea" },
    { label: "Aarambh 3.0", href: "/events/aarambh" },
    { label: "Contact Us", href: "/contact" },
    { label: "Past Execom", href: "/team/past" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm md:hidden"
          />

          {/* Bottom Sheet Drawer */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-0 inset-x-0 z-50 bg-[var(--bg-surface)] border-t border-[var(--border-hover)] rounded-t-[24px] p-6 md:hidden max-h-[80vh] overflow-y-auto"
          >
            {/* Drag indicator */}
            <div className="w-10 h-1 bg-[var(--border-strong)] rounded-full mx-auto mb-5" />

            {/* Header */}
            <div className="flex items-center justify-between mb-5">
              <Link href="/" onClick={onClose} className="flex items-center gap-2.5">
                <div className="relative h-5 w-20">
                  <Image
                    src="/images/iedc-logo-light.svg"
                    alt="IEDC CEKnpy"
                    fill
                    className="object-contain object-left"
                  />
                </div>
                <div className="h-3.5 w-[1px] bg-[var(--border-strong)]" />
                <div className="relative h-4 w-24">
                  <Image
                    src="/images/ksum-iedc-logo-light.svg"
                    alt="KSUM IEDC"
                    fill
                    className="object-contain object-left"
                  />
                </div>
              </Link>

              <button
                onClick={onClose}
                aria-label="Close menu"
                className="w-8 h-8 rounded-full bg-[var(--border)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] focus:outline-none"
              >
                <X className="w-4 h-4" strokeWidth={2} />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="space-y-0.5">
              {moreLinks.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    className={cn(
                      "flex items-center justify-between py-3.5 px-3.5 rounded-xl transition-all duration-200 min-h-[48px]",
                      isActive
                        ? "bg-[var(--border-hover)] text-[var(--text-primary)] font-semibold"
                        : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--border)]"
                    )}
                  >
                    <span className="text-[15px] font-medium">{item.label}</span>
                    <ChevronRight className="w-4 h-4 text-[var(--text-tertiary)]" strokeWidth={1.5} />
                  </Link>
                );
              })}
            </div>

            {/* Footer */}
            <div className="pt-4 mt-4 border-t border-[var(--border)] text-center text-xs text-[var(--text-tertiary)]">
              IEDC CEKNPY • Under Kerala Startup Mission
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
