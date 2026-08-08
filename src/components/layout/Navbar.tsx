"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { cn } from "@/lib/utils";
import { MobileNav } from "./MobileNav";
import { MobileBottomBar } from "./MobileBottomBar";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const pathname = usePathname();
  const { isScrolled } = useScrollPosition();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [teamDropdownOpen, setTeamDropdownOpen] = useState(false);

  // Close dropdown on route change
  useEffect(() => {
    setTeamDropdownOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Top Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none transition-all duration-300">
        {/* Desktop Container */}
        <div className="hidden md:block max-w-7xl mx-auto px-5 sm:px-10 pt-6">
          <div
            className={cn(
              "pointer-events-auto flex items-center justify-between px-6 rounded-full border transition-all duration-300 shadow-[0_20px_60px_rgba(0,0,0,0.35)]",
              isScrolled
                ? "bg-[#0A0A0E]/90 backdrop-blur-3xl border-white/12 py-3 shadow-[0_24px_60px_rgba(0,0,0,0.8)]"
                : "bg-[#0A0A0E]/82 backdrop-blur-2xl border-white/[0.08] py-4"
            )}
          >
            {/* Official Dual Logos */}
            <Link href="/" className="flex items-center gap-4 group focus:outline-none shrink-0">
              <div className="relative h-8 w-40 transition-transform duration-200 group-hover:scale-[1.02]">
                <Image
                  src="/images/iedc-logo-light.svg"
                  alt="IEDC CEKnpy Official Logo"
                  fill
                  priority
                  className="object-contain object-left"
                />
              </div>
              <div className="h-6 w-[1px] bg-white/20" />
              <div className="relative h-7 w-44 transition-transform duration-200 group-hover:scale-[1.02]">
                <Image
                  src="/images/ksum-iedc-logo-light.svg"
                  alt="Kerala Startup Mission IEDC Logo"
                  fill
                  priority
                  className="object-contain object-left"
                />
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="flex items-center gap-1 bg-white/[0.04] backdrop-blur-md px-3 py-1.5 rounded-full border border-white/[0.08]">
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href;

                if (item.dropdown) {
                  const isTeamActive = pathname.startsWith("/team");
                  return (
                    <div
                      key={item.label}
                      className="relative"
                      onMouseEnter={() => setTeamDropdownOpen(true)}
                      onMouseLeave={() => setTeamDropdownOpen(false)}
                    >
                      <button
                        onClick={() => setTeamDropdownOpen(!teamDropdownOpen)}
                        className={cn(
                          "flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all focus:outline-none min-h-[38px]",
                          isTeamActive
                            ? "text-[#60A5FA] bg-white/10"
                            : "text-white/72 hover:text-white hover:bg-white/[0.08]"
                        )}
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={cn(
                            "w-3.5 h-3.5 transition-transform duration-200",
                            teamDropdownOpen && "rotate-180 text-[#3B82F6]"
                          )}
                        />
                      </button>

                      {/* Dropdown Menu */}
                      <AnimatePresence>
                        {teamDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.15 }}
                            className="absolute top-full left-0 mt-2 w-64 rounded-2xl bg-[#0A0A0E]/95 backdrop-blur-3xl border border-white/10 shadow-2xl p-2 z-50 overflow-hidden"
                          >
                            {item.dropdown.map((sub) => (
                              <Link
                                key={sub.href}
                                href={sub.href}
                                className={cn(
                                  "block p-3 rounded-xl transition-all hover:bg-white/[0.08] group",
                                  pathname === sub.href ? "bg-white/10 text-[#60A5FA]" : "text-white/72"
                                )}
                              >
                                <div className="text-sm font-bold text-white group-hover:text-[#60A5FA] transition-colors">
                                  {sub.label}
                                </div>
                                {sub.description && (
                                  <div className="text-xs text-white/48 font-normal mt-0.5">
                                    {sub.description}
                                  </div>
                                )}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all min-h-[38px] inline-flex items-center",
                      isActive
                        ? "bg-[#3B82F6] text-white shadow-md shadow-[#3B82F6]/25"
                        : "text-white/72 hover:text-white hover:bg-white/[0.08]"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Action CTA */}
            <div className="flex items-center gap-3">
              <Button
                href="/pitch-idea"
                variant="primary"
                size="sm"
                className="shadow-lg shadow-[#3B82F6]/25 border-[#3B82F6]/50 text-xs px-4"
                icon={<Sparkles className="w-3.5 h-3.5" />}
              >
                Pitch Idea
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Top Navbar (ONLY Logos + Divider. No Menu Icon, No Buttons) */}
        <div className="md:hidden mx-4 mt-[12px]">
          <div className="pointer-events-auto h-[68px] bg-[#0A0A0E]/82 backdrop-blur-2xl border border-white/[0.08] rounded-full px-5 shadow-[0_20px_60px_rgba(0,0,0,0.35)] flex items-center justify-center">
            <Link href="/" className="flex items-center justify-center gap-4 shrink-0 focus:outline-none">
              <div className="relative h-6 w-28">
                <Image
                  src="/images/iedc-logo-light.svg"
                  alt="IEDC CEKnpy Official Logo"
                  fill
                  priority
                  className="object-contain object-center"
                />
              </div>

              {/* Thin Vertical Divider */}
              <div className="h-4 w-[1px] bg-white/20" />

              <div className="relative h-5 w-32">
                <Image
                  src="/images/ksum-iedc-logo-light.svg"
                  alt="Kerala Startup Mission IEDC Logo"
                  fill
                  priority
                  className="object-contain object-center"
                />
              </div>
            </Link>
          </div>
        </div>
      </header>

      {/* Floating Bottom Navigation Bar (Mobile Only - Scrolls Hide/Show) */}
      <MobileBottomBar onOpenMore={() => setMobileNavOpen(true)} />

      {/* Mobile More Bottom Sheet Drawer */}
      <MobileNav isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />
    </>
  );
}
