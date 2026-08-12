"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { LinkedinIcon as Linkedin, InstagramIcon as Instagram, TwitterIcon as Twitter, GithubIcon as Github } from "@/components/ui/SocialIcons";
import { SITE_CONFIG } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-[var(--bg-primary)] text-[var(--text-secondary)] pt-16 pb-10 border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1: Brand + Dual Logos + Socials */}
          <div className="md:col-span-1 space-y-5">
            <Link href="/" className="flex items-center gap-3 group focus:outline-none">
              <div className="relative h-8 w-36">
                <Image
                  src="/images/iedc-logo-light.svg"
                  alt="IEDC CEKNPY"
                  fill
                  className="object-contain object-left"
                />
              </div>
              <div className="h-5 w-[1px] bg-[var(--border-strong)]" />
              <div className="relative h-7 w-40">
                <Image
                  src="/images/ksum-iedc-logo-light.svg"
                  alt="Kerala Startup Mission IEDC"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed max-w-xs">
              Fostering innovation, startups, and entrepreneurial mindset at College of Engineering Karunagappally.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-2.5 pt-1">
              {[
                { href: SITE_CONFIG.socials.linkedin, Icon: Linkedin, label: "LinkedIn" },
                { href: SITE_CONFIG.socials.instagram, Icon: Instagram, label: "Instagram" },
                { href: SITE_CONFIG.socials.twitter, Icon: Twitter, label: "Twitter" },
                { href: SITE_CONFIG.socials.github, Icon: Github, label: "GitHub" },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-[var(--border)] flex items-center justify-center text-[var(--text-tertiary)] hover:text-[var(--text-primary)] hover:bg-[var(--border-hover)] transition-all duration-200 min-h-[44px] min-w-[44px]"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-[var(--text-tertiary)] text-xs font-semibold tracking-widest uppercase mb-5">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "Home", href: "/" },
                { label: "Events", href: "/events" },
                { label: "Team", href: "/team/current" },
                { label: "Gallery", href: "/gallery" },
                { label: "About", href: "/about" },
                { label: "Pitch Your Idea", href: "/pitch-idea" },
                { label: "Aarambh 3.0", href: "/events/aarambh" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors py-0.5 inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="text-[var(--text-tertiary)] text-xs font-semibold tracking-widest uppercase mb-5">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-[var(--text-secondary)]">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[var(--text-tertiary)] shrink-0 mt-0.5" strokeWidth={1.5} />
                <span>{SITE_CONFIG.location}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[var(--text-tertiary)] shrink-0" strokeWidth={1.5} />
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-[var(--text-primary)] transition-colors">
                  {SITE_CONFIG.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[var(--text-tertiary)]">
          <p>© {new Date().getFullYear()} IEDC CEKNPY. All rights reserved.</p>
          <p>
            Official Chapter of <span className="text-[var(--text-secondary)]">College of Engineering Karunagappally</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
