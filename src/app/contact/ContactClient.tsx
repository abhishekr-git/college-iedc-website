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
    <div className="bg-[var(--bg-primary)] text-[var(--text-primary)] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-5">
            <Card className="p-6 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[var(--text-tertiary)] shrink-0 mt-0.5" strokeWidth={1.5} />
                <div>
                  <h3 className="text-sm font-medium text-[var(--text-primary)]">Address</h3>
                  <p className="text-xs text-[var(--text-secondary)] mt-0.5 leading-relaxed">{SITE_CONFIG.location}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-[var(--border)]">
                <Mail className="w-4 h-4 text-[var(--text-tertiary)] shrink-0 mt-0.5" strokeWidth={1.5} />
                <div>
                  <h3 className="text-sm font-medium text-[var(--text-primary)]">Email</h3>
                  <a href={`mailto:${SITE_CONFIG.email}`} className="text-xs text-[var(--accent)] hover:underline">
                    {SITE_CONFIG.email}
                  </a>
                </div>
              </div>
            </Card>

            {/* Social */}
            <Card className="p-6">
              <h3 className="text-sm font-medium text-[var(--text-primary)] mb-3">Social</h3>
              <div className="flex items-center gap-2">
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
                    className="w-9 h-9 rounded-lg bg-[var(--border)] flex items-center justify-center text-[var(--text-tertiary)] hover:text-[var(--text-primary)] hover:bg-[var(--border-hover)] transition-all min-h-[44px] min-w-[44px]"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </Card>

            {/* Map */}
            <Card className="p-1.5 overflow-hidden">
              <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-[var(--bg-elevated)]">
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

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <Card className="p-7 sm:p-9">
              <h2 className="font-[var(--font-outfit)] text-xl font-semibold text-[var(--text-primary)] mb-6">Send an Inquiry</h2>

              {submitted ? (
                <div className="p-8 rounded-xl bg-[var(--bg-primary)] border border-[var(--border)] text-center space-y-3">
                  <CheckCircle2 className="w-8 h-8 text-[var(--accent)] mx-auto" strokeWidth={1.5} />
                  <h3 className="text-lg font-semibold text-[var(--text-primary)]">Message Received</h3>
                  <p className="text-sm text-[var(--text-secondary)] max-w-sm mx-auto">
                    Our team will get back to you shortly.
                  </p>
                  <Button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", email: "", subject: "", message: "" });
                    }}
                    variant="outline"
                    size="sm"
                    className="mt-3"
                  >
                    Send Another
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {[
                    { id: "name", label: "Name", type: "text", required: true, placeholder: "Your name" },
                    { id: "email", label: "Email", type: "email", required: true, placeholder: "name@example.com" },
                    { id: "subject", label: "Subject", type: "text", required: false, placeholder: "What's this about?" },
                  ].map((field) => (
                    <div key={field.id}>
                      <label htmlFor={field.id} className="block text-xs font-medium text-[var(--text-secondary)] mb-1.5">
                        {field.label}{field.required ? " *" : ""}
                      </label>
                      <input
                        id={field.id}
                        type={field.type}
                        required={field.required}
                        value={form[field.id as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                        placeholder={field.placeholder}
                        className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-hover)] text-[var(--text-primary)] placeholder-[var(--text-tertiary)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent min-h-[44px] transition-colors"
                      />
                    </div>
                  ))}

                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-[var(--text-secondary)] mb-1.5">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Your message..."
                      className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-hover)] text-[var(--text-primary)] placeholder-[var(--text-tertiary)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-colors"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full justify-center"
                    icon={<Send className="w-4 h-4" strokeWidth={2} />}
                  >
                    Submit
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
