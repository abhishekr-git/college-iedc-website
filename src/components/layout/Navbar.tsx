"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { cn } from "@/lib/utils";
import { MobileNav } from "./MobileNav";

export function Navbar() {
  const pathname = usePathname();
  const { isScrolled } = useScrollPosition();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <>
      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none transition-all duration-500">
        {/* Desktop Navigation */}
        <div className="hidden md:block max-w-7xl mx-auto px-6 pt-4">
          <div
            className={cn(
              "pointer-events-auto flex items-center justify-between px-6 rounded-full border transition-all duration-500",
              isScrolled
                ? "bg-[var(--bg-primary)]/85 backdrop-blur-2xl border-[var(--border-hover)] py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
                : "bg-[var(--bg-primary)]/60 backdrop-blur-xl border-[var(--border)] py-3.5"
            )}
          >
            {/* Logo — IEDC only */}
            <Link href="/" className="flex items-center gap-3 group focus:outline-none shrink-0">
              <div className="relative h-7 w-36 transition-opacity duration-200 group-hover:opacity-80">
                <Image
                  src="/images/iedc-logo-light.svg"
                  alt="IEDC CEKNPY"
                  fill
                  priority
                  className="object-contain object-left"
                />
              </div>
            </Link>

            {/* Navigation Links */}
            <nav className="flex items-center gap-1">
              {NAV_ITEMS.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                      isActive
                        ? "text-[var(--text-primary)] bg-[var(--border-hover)]"
                        : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--border)]"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Empty right spacer for balance */}
            <div className="w-36 shrink-0" />
          </div>
        </div>

        {/* Mobile Top Bar — Logo + "More" Button */}
        <div className="md:hidden mx-4 mt-3">
          <div className="pointer-events-auto h-[56px] bg-[var(--bg-primary)]/85 backdrop-blur-2xl border border-[var(--border)] rounded-full px-5 flex items-center justify-between shadow-lg">
            <Link href="/" className="flex items-center gap-2.5 shrink-0 focus:outline-none">
              <div className="relative h-5 w-20">
                <Image
                  src="/images/iedc-logo-light.svg"
                  alt="IEDC CEKNPY"
                  fill
                  priority
                  className="object-contain object-left"
                />
              </div>
              <div className="h-3.5 w-[1px] bg-[var(--border-strong)]" />
              <div className="relative h-4 w-22">
                <Image
                  src="/images/ksum-iedc-logo-light.svg"
                  alt="Kerala Startup Mission IEDC"
                  fill
                  priority
                  className="object-contain object-left"
                />
              </div>
            </Link>

            {/* "More" Menu Button in Top Nav */}
            <button
              onClick={() => setMobileNavOpen(true)}
              aria-label="Open Navigation Menu"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[var(--border)] text-[var(--text-primary)] hover:bg-[var(--border-hover)] text-xs font-medium transition-all focus:outline-none min-h-[36px]"
            >
              <Menu className="w-4 h-4 text-[var(--text-primary)]" strokeWidth={2} />
              <span>More</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (Opened via "More" in top bar) */}
      <MobileNav isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />
    </>
  );
}
