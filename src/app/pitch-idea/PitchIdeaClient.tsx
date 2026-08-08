"use client";

import React, { useState } from "react";
import { Lightbulb, Send, CheckCircle2, Sparkles, ShieldCheck, Rocket } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

interface PitchFormData {
  fullName: string;
  email: string;
  phone: string;
  department: string;
  yearOfStudy: string;
  ideaTitle: string;
  description: string;
}

export function PitchIdeaClient() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<PitchFormData>({
    fullName: "",
    email: "",
    phone: "",
    department: "",
    yearOfStudy: "1st Year",
    ideaTitle: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !form.fullName.trim() ||
      !form.email.trim() ||
      !form.phone.trim() ||
      !form.department.trim() ||
      !form.ideaTitle.trim() ||
      !form.description.trim()
    ) {
      return;
    }

    setSubmitted(true);
  };

  return (
    <div className="bg-[#050505] text-[#FAFAFA] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <Card className="bg-white/[0.04] p-8 sm:p-12 border-white/[0.08] backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] relative overflow-hidden">
          {/* Ambient Lighting */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#3B82F6]/10 rounded-full blur-3xl pointer-events-none" />

          {submitted ? (
            <div className="py-12 px-6 text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-[#3B82F6]/20 border border-[#3B82F6]/40 text-[#3B82F6] flex items-center justify-center mx-auto shadow-xl shadow-[#3B82F6]/20">
                <CheckCircle2 className="w-8 h-8" strokeWidth={1.8} />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold text-[#3B82F6] uppercase tracking-widest">
                  Idea Submitted Successfully
                </span>
                <h2 className="text-3xl font-extrabold text-[#FAFAFA]">
                  Thank You, {form.fullName}!
                </h2>
                <p className="text-[#A1A1AA] text-sm sm:text-base max-w-lg mx-auto leading-relaxed font-normal">
                  Your startup proposal <strong className="text-[#FAFAFA] font-bold">"{form.ideaTitle}"</strong> has been logged with the IEDC CEKNPY technical team. We will review your submission and contact you via email or phone.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#09090B] border border-white/[0.08] text-left max-w-md mx-auto space-y-2 text-xs text-[#A1A1AA]">
                <div className="font-bold text-[#FAFAFA] text-sm mb-1">Submission Summary</div>
                <div><span className="text-[#71717A]">Applicant:</span> {form.fullName}</div>
                <div><span className="text-[#71717A]">Department:</span> {form.department} ({form.yearOfStudy})</div>
                <div><span className="text-[#71717A]">Email:</span> {form.email}</div>
                <div><span className="text-[#71717A]">Phone:</span> {form.phone}</div>
              </div>

              <div className="pt-4 flex justify-center">
                <Button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({
                      fullName: "",
                      email: "",
                      phone: "",
                      department: "",
                      yearOfStudy: "1st Year",
                      ideaTitle: "",
                      description: "",
                    });
                  }}
                  variant="outline"
                  size="md"
                >
                  Pitch Another Idea
                </Button>
              </div>
            </div>
          ) : (
            <div>
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[#3B82F6] text-xs font-bold uppercase tracking-wider mb-3">
                  <Lightbulb className="w-3.5 h-3.5 text-[#3B82F6]" strokeWidth={1.8} /> Student Incubation Portal
                </div>
                <h2 className="text-3xl font-extrabold text-[#FAFAFA]">Submit Your Proposal</h2>
                <p className="text-[#A1A1AA] text-sm mt-1 font-normal">
                  Fill out the form below to share your idea with the IEDC desk for incubation support, prototype funding, and mentorship.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Row 1: Full Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-bold text-[#FAFAFA] uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      required
                      value={form.fullName}
                      onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                      placeholder="e.g. Adithya R."
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
                      placeholder="name@ceknpy.ac.in"
                      className="w-full px-4 py-3 rounded-xl bg-[#09090B] border border-white/[0.12] text-[#FAFAFA] placeholder-[#71717A] text-sm focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent min-h-[44px]"
                    />
                  </div>
                </div>

                {/* Row 2: Phone & Department */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold text-[#FAFAFA] uppercase tracking-wider mb-2">
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl bg-[#09090B] border border-white/[0.12] text-[#FAFAFA] placeholder-[#71717A] text-sm focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent min-h-[44px]"
                    />
                  </div>

                  <div>
                    <label htmlFor="department" className="block text-xs font-bold text-[#FAFAFA] uppercase tracking-wider mb-2">
                      Department *
                    </label>
                    <input
                      id="department"
                      type="text"
                      required
                      value={form.department}
                      onChange={(e) => setForm({ ...form, department: e.target.value })}
                      placeholder="e.g. Computer Science / ECE / Mechanical"
                      className="w-full px-4 py-3 rounded-xl bg-[#09090B] border border-white/[0.12] text-[#FAFAFA] placeholder-[#71717A] text-sm focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent min-h-[44px]"
                    />
                  </div>
                </div>

                {/* Row 3: Year of Study & Idea Title */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div>
                    <label htmlFor="yearOfStudy" className="block text-xs font-bold text-[#FAFAFA] uppercase tracking-wider mb-2">
                      Year of Study *
                    </label>
                    <select
                      id="yearOfStudy"
                      value={form.yearOfStudy}
                      onChange={(e) => setForm({ ...form, yearOfStudy: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#09090B] border border-white/[0.12] text-[#FAFAFA] text-sm focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent min-h-[44px]"
                    >
                      <option value="1st Year">1st Year</option>
                      <option value="2nd Year">2nd Year</option>
                      <option value="3rd Year">3rd Year</option>
                      <option value="4th Year">4th Year</option>
                      <option value="Alumni">Alumni / Faculty</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="ideaTitle" className="block text-xs font-bold text-[#FAFAFA] uppercase tracking-wider mb-2">
                      Startup Idea Title *
                    </label>
                    <input
                      id="ideaTitle"
                      type="text"
                      required
                      value={form.ideaTitle}
                      onChange={(e) => setForm({ ...form, ideaTitle: e.target.value })}
                      placeholder="e.g. AI-Powered Smart Solar Grid Monitor"
                      className="w-full px-4 py-3 rounded-xl bg-[#09090B] border border-white/[0.12] text-[#FAFAFA] placeholder-[#71717A] text-sm focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent min-h-[44px]"
                    />
                  </div>
                </div>

                {/* Textarea: Describe Your Idea */}
                <div>
                  <label htmlFor="description" className="block text-xs font-bold text-[#FAFAFA] uppercase tracking-wider mb-2">
                    Describe Your Idea *
                  </label>
                  <textarea
                    id="description"
                    required
                    rows={6}
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                    placeholder="Explain the problem statement, proposed technical solution, target audience, and current stage of prototype..."
                    className="w-full px-4 py-3 rounded-xl bg-[#09090B] border border-white/[0.12] text-[#FAFAFA] placeholder-[#71717A] text-sm focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full justify-center text-base bg-[#3B82F6] hover:bg-[#2563EB] text-white shadow-lg shadow-[#3B82F6]/20 border border-[#3B82F6]/50 min-h-[48px]"
                  icon={<Send className="w-5 h-5 text-white" strokeWidth={1.8} />}
                >
                  Submit Idea
                </Button>
              </form>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
