"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, Info, Mail, Lightbulb, Sparkles, Users, ArrowRight, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const pathname = usePathname();

  const moreLinks = [
    {
      label: "About IEDC",
      href: "/about",
      icon: Info,
      description: "Vision, mission & institutional ecosystem",
    },
    {
      label: "Contact Us",
      href: "/contact",
      icon: Mail,
      description: "Location map & inquiry portal",
    },
    {
      label: "Startup Ideas",
      href: "/pitch-idea",
      icon: Lightbulb,
      description: "Incubate your venture & request seed grants",
    },
    {
      label: "Aarambh 3.0",
      href: "/events/aarambh",
      icon: Sparkles,
      description: "Flagship innovation summit microsite",
    },
    {
      label: "Executive Committee",
      href: "/team/current",
      icon: Users,
      description: "Student leads & faculty mentors",
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-[#050608]/80 backdrop-blur-md md:hidden"
          />

          {/* Premium Bottom Sheet Drawer */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-0 inset-x-0 z-50 bg-[#0A0A0E]/95 backdrop-blur-3xl border-t border-white/[0.08] rounded-t-[32px] shadow-2xl p-6 md:hidden max-h-[85vh] overflow-y-auto flex flex-col justify-between"
          >
            {/* Top Drag Indicator Pill */}
            <div className="w-12 h-1 bg-white/20 rounded-full mx-auto mb-4" />

            {/* Sheet Header */}
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-4">
              <Link href="/" onClick={onClose} className="flex items-center gap-3">
                <div className="relative h-6 w-24">
                  <Image
                    src="/images/iedc-logo-light.svg"
                    alt="IEDC CEKnpy Logo"
                    fill
                    className="object-contain object-left"
                  />
                </div>
                <div className="h-4 w-[1px] bg-white/20" />
                <div className="relative h-5 w-28">
                  <Image
                    src="/images/ksum-iedc-logo-light.svg"
                    alt="Kerala Startup Mission Logo"
                    fill
                    className="object-contain object-left"
                  />
                </div>
              </Link>

              <button
                onClick={onClose}
                aria-label="Close menu"
                className="w-9 h-9 rounded-full bg-white/[0.08] flex items-center justify-center text-white/72 hover:text-white focus:outline-none"
              >
                <X className="w-5 h-5" strokeWidth={1.8} />
              </button>
            </div>

            {/* Links List */}
            <div className="space-y-2 py-2">
              {moreLinks.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    className={cn(
                      "flex items-center gap-3.5 p-3.5 rounded-2xl transition-all duration-200 group min-h-[48px]",
                      isActive
                        ? "bg-white/10 border border-white/15 text-white"
                        : "hover:bg-white/[0.06] text-white/72 hover:text-white"
                    )}
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#3B82F6]/15 border border-[#3B82F6]/30 flex items-center justify-center text-[#3B82F6] group-hover:scale-105 transition-transform shrink-0">
                      <Icon className="w-5 h-5" strokeWidth={1.8} />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-bold text-white group-hover:text-[#60A5FA] transition-colors flex items-center justify-between">
                        <span>{item.label}</span>
                        {isActive && <ArrowRight className="w-4 h-4 text-[#3B82F6]" strokeWidth={1.8} />}
                      </div>
                      <div className="text-xs text-white/48 font-normal">
                        {item.description}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Footer Notice */}
            <div className="pt-4 mt-4 border-t border-white/[0.08] text-center text-xs text-white/48">
              IEDC CEKnpy • Official Chapter under KSUM
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
