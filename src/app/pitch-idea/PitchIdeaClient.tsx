"use client";

import React, { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

interface PitchFormData {
  fullName: string;
  email: string;
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
    department: "",
    yearOfStudy: "1st Year",
    ideaTitle: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullName.trim() || !form.email.trim() || !form.department.trim() || !form.ideaTitle.trim() || !form.description.trim()) return;
    setSubmitted(true);
  };

  const inputClass = "w-full px-4 py-2.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-hover)] text-[var(--text-primary)] placeholder-[var(--text-tertiary)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent min-h-[44px] transition-colors";

  return (
    <div className="bg-[var(--bg-primary)] text-[var(--text-primary)] min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <Card className="p-7 sm:p-10">
          {submitted ? (
            <div className="py-10 text-center space-y-4">
              <CheckCircle2 className="w-10 h-10 text-[var(--accent)] mx-auto" strokeWidth={1.5} />
              <h2 className="font-[var(--font-outfit)] text-2xl font-bold text-[var(--text-primary)]">
                Idea Submitted
              </h2>
              <p className="text-sm text-[var(--text-secondary)] max-w-md mx-auto">
                Your proposal <strong className="text-[var(--text-primary)]">&ldquo;{form.ideaTitle}&rdquo;</strong> has been received. We&apos;ll review and contact you.
              </p>
              <Button
                onClick={() => {
                  setSubmitted(false);
                  setForm({ fullName: "", email: "", department: "", yearOfStudy: "1st Year", ideaTitle: "", description: "" });
                }}
                variant="outline"
                size="sm"
                className="mt-3"
              >
                Submit Another
              </Button>
            </div>
          ) : (
            <div>
              <h2 className="font-[var(--font-outfit)] text-xl font-semibold text-[var(--text-primary)] mb-1">Submit Your Proposal</h2>
              <p className="text-sm text-[var(--text-secondary)] mb-6">
                Share your idea for incubation support, prototype funding, and mentorship.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-medium text-[var(--text-secondary)] mb-1.5">Name *</label>
                    <input id="fullName" type="text" required value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })} placeholder="Your name" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-[var(--text-secondary)] mb-1.5">Email *</label>
                    <input id="email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="name@example.com" className={inputClass} />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="department" className="block text-xs font-medium text-[var(--text-secondary)] mb-1.5">Department *</label>
                    <input id="department" type="text" required value={form.department} onChange={(e) => setForm({ ...form, department: e.target.value })} placeholder="e.g. CSE" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="yearOfStudy" className="block text-xs font-medium text-[var(--text-secondary)] mb-1.5">Year</label>
                    <select id="yearOfStudy" value={form.yearOfStudy} onChange={(e) => setForm({ ...form, yearOfStudy: e.target.value })} className={inputClass}>
                      <option value="1st Year">1st Year</option>
                      <option value="2nd Year">2nd Year</option>
                      <option value="3rd Year">3rd Year</option>
                      <option value="4th Year">4th Year</option>
                      <option value="Alumni">Alumni / Faculty</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="ideaTitle" className="block text-xs font-medium text-[var(--text-secondary)] mb-1.5">Idea Title *</label>
                    <input id="ideaTitle" type="text" required value={form.ideaTitle} onChange={(e) => setForm({ ...form, ideaTitle: e.target.value })} placeholder="Your startup idea" className={inputClass} />
                  </div>
                </div>

                <div>
                  <label htmlFor="description" className="block text-xs font-medium text-[var(--text-secondary)] mb-1.5">Description *</label>
                  <textarea id="description" required rows={5} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} placeholder="Problem, solution, target audience, current stage..." className={inputClass + " min-h-0"} />
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full justify-center" icon={<Send className="w-4 h-4" strokeWidth={2} />}>
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
