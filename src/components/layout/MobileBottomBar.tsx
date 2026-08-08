"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { House, CalendarDays, Users, Images, Menu } from "lucide-react";
import { cn } from "@/lib/utils";

interface MobileBottomBarProps {
  onOpenMore: () => void;
}

export function MobileBottomBar({ onOpenMore }: MobileBottomBarProps) {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  // Scroll direction detection: hide on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 30) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current + 8) {
        setIsVisible(false); // scrolling down -> hide
      } else if (currentScrollY < lastScrollY.current - 8) {
        setIsVisible(true); // scrolling up -> show
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      label: "Home",
      href: "/",
      icon: House,
      isActive: pathname === "/",
    },
    {
      label: "Events",
      href: "/events",
      icon: CalendarDays,
      isActive: pathname.startsWith("/events"),
    },
    {
      label: "Team",
      href: "/team",
      icon: Users,
      isActive: pathname.startsWith("/team"),
    },
    {
      label: "Gallery",
      href: "/gallery",
      icon: Images,
      isActive: pathname.startsWith("/gallery"),
    },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 inset-x-0 z-50 md:hidden pointer-events-none pb-safe"
        >
          <nav
            aria-label="Mobile Bottom Navigation"
            className="pointer-events-auto h-[72px] bg-[#0A0A0E]/90 backdrop-blur-3xl border-t border-white/[0.08] shadow-[0_-10px_50px_rgba(0,0,0,0.5)] rounded-t-[28px] px-3 flex items-center justify-around"
          >
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-label={item.label}
                  className={cn(
                    "flex-1 flex flex-col items-center justify-center py-2 px-1 rounded-full transition-all duration-300 min-h-[48px]",
                    item.isActive
                      ? "bg-[#3B82F6] text-white shadow-lg shadow-[#3B82F6]/35"
                      : "text-white/65 hover:text-white"
                  )}
                >
                  <Icon className="w-[22px] h-[22px]" strokeWidth={1.8} />
                  <span className="text-[12px] font-medium leading-none mt-1">
                    {item.label}
                  </span>
                </Link>
              );
            })}

            {/* More Button */}
            <button
              onClick={onOpenMore}
              aria-label="More Options"
              className="flex-1 flex flex-col items-center justify-center py-2 px-1 rounded-full transition-all duration-300 text-white/65 hover:text-white min-h-[48px] focus:outline-none"
            >
              <Menu className="w-[22px] h-[22px]" strokeWidth={1.8} />
              <span className="text-[12px] font-medium leading-none mt-1">
                More
              </span>
            </button>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
