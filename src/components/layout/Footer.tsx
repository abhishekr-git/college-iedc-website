"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { LinkedinIcon as Linkedin, InstagramIcon as Instagram, TwitterIcon as Twitter, GithubIcon as Github } from "@/components/ui/SocialIcons";
import { SITE_CONFIG, NAV_ITEMS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-[#050505] text-[#A1A1AA] pt-20 pb-12 border-t border-white/[0.06] relative overflow-hidden">
      {/* Layered Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#3B82F6]/08 blur-[160px] rounded-full" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#8B5CF6]/08 blur-[160px] rounded-full" />
        <div className="absolute inset-0 bg-[radial-gradient(#3B82F6_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.04]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Column 1: Brand Info & Dual Logos */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-3 sm:gap-4 group focus:outline-none">
              <div className="relative h-10 w-44">
                <Image
                  src="/images/iedc-logo-light.svg"
                  alt="IEDC CEKnpy Official Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
              <div className="h-6 w-[1px] bg-white/20" />
              <div className="relative h-9 w-48">
                <Image
                  src="/images/ksum-iedc-logo-light.svg"
                  alt="Kerala Startup Mission Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-[#A1A1AA] text-sm leading-relaxed max-w-sm font-normal">
              Fostering student startups, technical innovation, and entrepreneurial mindset at College of Engineering Karunagappally under Kerala Startup Mission (KSUM).
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={SITE_CONFIG.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#A1A1AA] hover:text-[#FAFAFA] hover:bg-[#3B82F6] hover:border-[#3B82F6] transition-all min-h-[44px] min-w-[44px]"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#A1A1AA] hover:text-[#FAFAFA] hover:bg-[#8B5CF6] hover:border-[#8B5CF6] transition-all min-h-[44px] min-w-[44px]"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-10 h-10 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#A1A1AA] hover:text-[#FAFAFA] hover:bg-[#3B82F6] hover:border-[#3B82F6] transition-all min-h-[44px] min-w-[44px]"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#A1A1AA] hover:text-[#FAFAFA] hover:bg-[#18181B] hover:border-white/20 transition-all min-h-[44px] min-w-[44px]"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-[#3B82F6] text-xs font-bold tracking-widest uppercase mb-6">
              Navigation
            </h3>
            <ul className="space-y-3 text-sm font-medium">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors inline-flex items-center gap-1 py-0.5"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Initiatives & Highlights */}
          <div>
            <h3 className="text-[#3B82F6] text-xs font-bold tracking-widest uppercase mb-6">
              Flagship Events
            </h3>
            <ul className="space-y-3 text-sm font-medium">
              <li>
                <Link
                  href="/pitch-idea"
                  className="text-[#3B82F6] font-semibold hover:underline inline-flex items-center gap-1 py-0.5"
                >
                  Pitch Your Idea <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.8} />
                </Link>
              </li>
              <li>
                <Link
                  href="/events/aarambh"
                  className="text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors inline-flex items-center gap-1 py-0.5"
                >
                  Aarambh 3.0 Summit
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors inline-flex items-center gap-1 py-0.5"
                >
                  HackCraft 24h Hackathon
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors inline-flex items-center gap-1 py-0.5"
                >
                  IgnitePitch VC Arena
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors inline-flex items-center gap-1 py-0.5"
                >
                  Generative AI Bootcamp
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Brief */}
          <div>
            <h3 className="text-[#3B82F6] text-xs font-bold tracking-widest uppercase mb-6">
              Get in Touch
            </h3>
            <ul className="space-y-3.5 text-sm text-[#A1A1AA]">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#3B82F6] shrink-0 mt-1" strokeWidth={1.8} />
                <span>{SITE_CONFIG.location}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#3B82F6] shrink-0" strokeWidth={1.8} />
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-[#FAFAFA] transition-colors">
                  {SITE_CONFIG.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#71717A]">
          <p>© {new Date().getFullYear()} IEDC CEKNPY. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Official Chapter of <span className="text-[#FAFAFA] font-medium">College of Engineering Karunagappally</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
