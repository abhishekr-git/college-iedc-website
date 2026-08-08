"use client";

import React, { useState } from "react";
import { Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import { LinkedinIcon as Linkedin, InstagramIcon as Instagram, TwitterIcon as Twitter, GithubIcon as Github } from "@/components/ui/SocialIcons";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { SITE_CONFIG } from "@/lib/constants";

export function ContactClient() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSubmitted(true);
  };

  return (
    <div className="bg-[#050505] text-[#FAFAFA] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Info Cards & Map */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold text-[#3B82F6] uppercase tracking-widest">Get In Touch</span>
              <h2 className="text-3xl font-extrabold text-[#FAFAFA] mt-1 mb-2">Reach Out to IEDC Desk</h2>
              <p className="text-[#A1A1AA] text-sm leading-relaxed font-normal">
                Have an innovative startup idea, want to sponsor our events, or collaborate on technical workshops? We are always eager to connect.
              </p>
            </div>

            <Card className="bg-white/[0.04] p-6 border-white/[0.08] space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#3B82F6]/10 border border-[#3B82F6]/30 flex items-center justify-center text-[#3B82F6] shrink-0">
                  <MapPin className="w-5 h-5" strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#FAFAFA]">Campus Address</h3>
                  <p className="text-xs text-[#A1A1AA] mt-0.5 leading-relaxed font-normal">{SITE_CONFIG.location}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-3 border-t border-white/[0.08]">
                <div className="w-10 h-10 rounded-xl bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 flex items-center justify-center text-[#8B5CF6] shrink-0">
                  <Mail className="w-5 h-5" strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#FAFAFA]">Email Address</h3>
                  <a href={`mailto:${SITE_CONFIG.email}`} className="text-xs text-[#3B82F6] font-semibold hover:underline">
                    {SITE_CONFIG.email}
                  </a>
                </div>
              </div>
            </Card>

            {/* Social Links */}
            <Card className="bg-white/[0.04] text-[#FAFAFA] p-6 border-white/[0.08]">
              <h3 className="text-sm font-bold mb-3 text-[#FAFAFA]">Connect on Social Networks</h3>
              <div className="flex items-center gap-3">
                <a
                  href={SITE_CONFIG.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-10 h-10 rounded-xl bg-[#09090B] border border-white/[0.08] flex items-center justify-center text-[#A1A1AA] hover:text-[#FAFAFA] hover:bg-[#3B82F6] transition-all min-h-[44px] min-w-[44px]"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={SITE_CONFIG.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-xl bg-[#09090B] border border-white/[0.08] flex items-center justify-center text-[#A1A1AA] hover:text-[#FAFAFA] hover:bg-[#8B5CF6] transition-all min-h-[44px] min-w-[44px]"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href={SITE_CONFIG.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="w-10 h-10 rounded-xl bg-[#09090B] border border-white/[0.08] flex items-center justify-center text-[#A1A1AA] hover:text-[#FAFAFA] hover:bg-[#3B82F6] transition-all min-h-[44px] min-w-[44px]"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href={SITE_CONFIG.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-10 h-10 rounded-xl bg-[#09090B] border border-white/[0.08] flex items-center justify-center text-[#A1A1AA] hover:text-[#FAFAFA] hover:bg-[#18181B] transition-all min-h-[44px] min-w-[44px]"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </Card>

            {/* Google Maps Frame Placeholder */}
            <Card className="bg-white/[0.04] p-2 border-white/[0.08] overflow-hidden">
              <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-[#09090B] flex items-center justify-center text-center p-4">
                <iframe
                  title="College of Engineering Karunagappally Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.6708779919574!2d76.54452147575306!3d8.995972789445963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05e320f789ef23%3A0xe2ca4d88e0e64906!2sCollege%20of%20Engineering%20Karunagappally!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full rounded-lg"
                />
              </div>
            </Card>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7">
            <Card className="bg-white/[0.04] p-8 sm:p-10 border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
              <h2 className="text-2xl font-extrabold text-[#FAFAFA] mb-6">Send an Inquiry</h2>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-white/[0.04] border border-white/[0.08] text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#3B82F6]/20 border border-[#3B82F6]/40 text-[#3B82F6] flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-6 h-6" strokeWidth={1.8} />
                  </div>
                  <h3 className="text-xl font-bold text-[#FAFAFA]">Message Received!</h3>
                  <p className="text-sm text-[#A1A1AA] max-w-md mx-auto font-normal">
                    Thank you for contacting IEDC CEKNPY. Our student leads or nodal officer will get back to you shortly.
                  </p>
                  <Button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", email: "", subject: "", message: "" });
                    }}
                    variant="outline"
                    size="sm"
                    className="mt-4"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-[#FAFAFA] uppercase tracking-wider mb-2">
                      Your Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. Adithya Kumar"
                      className="w-full px-4 py-3 rounded-xl bg-[#09090B] border border-white/[0.12] text-[#FAFAFA] placeholder-[#71717A] text-sm focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent min-h-[44px]"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-[#FAFAFA] uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#09090B] border border-white/[0.12] text-[#FAFAFA] placeholder-[#71717A] text-sm focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent min-h-[44px]"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-bold text-[#FAFAFA] uppercase tracking-wider mb-2">
                      Subject / Domain
                    </label>
                    <input
                      id="subject"
                      type="text"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      placeholder="e.g. Startup Incubation / Event Partnership"
                      className="w-full px-4 py-3 rounded-xl bg-[#09090B] border border-white/[0.12] text-[#FAFAFA] placeholder-[#71717A] text-sm focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent min-h-[44px]"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-[#FAFAFA] uppercase tracking-wider mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Describe your inquiry or project idea..."
                      className="w-full px-4 py-3 rounded-xl bg-[#09090B] border border-white/[0.12] text-[#FAFAFA] placeholder-[#71717A] text-sm focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full justify-center text-base bg-[#3B82F6] hover:bg-[#2563EB] text-white shadow-lg shadow-[#3B82F6]/20 border border-[#3B82F6]/50 min-h-[48px]"
                    icon={<Send className="w-4 h-4 text-white" strokeWidth={1.8} />}
                  >
                    Submit Inquiry
                  </Button>
                </form>
              )}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
