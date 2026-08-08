import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, MapPin, Clock, ArrowLeft, ExternalLink, CheckCircle2, Images } from "lucide-react";
import { ALL_EVENTS } from "@/data/eventsData";
import { getEventTheme } from "@/lib/eventTheme";
import { EventStatusBadge, Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { EventCard } from "@/components/events/EventCard";

export function generateStaticParams() {
  return ALL_EVENTS.filter((e) => !e.isFlagship).map((event) => ({
    slug: event.slug,
  }));
}

interface EventPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: EventPageProps) {
  const { slug } = await params;
  const event = ALL_EVENTS.find((e) => e.slug === slug);
  if (!event) return { title: "Event Not Found" };
  return {
    title: `${event.title} | IEDC CEKNPY`,
    description: event.shortDescription,
  };
}

export default async function EventDetailsPage({ params }: EventPageProps) {
  const { slug } = await params;
  const event = ALL_EVENTS.find((e) => e.slug === slug);

  if (!event) {
    notFound();
  }

  const eventTheme = getEventTheme(event);
  const relatedEvents = ALL_EVENTS.filter(
    (e) => e.id !== event.id && !e.isFlagship
  ).slice(0, 2);

  return (
    <div className="bg-[#07111F] text-white min-h-screen pb-28 relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-r from-blue-600/20 via-cyan-500/15 to-purple-600/20 blur-[160px] rounded-full" />
        <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:36px_36px] opacity-10" />
      </div>

      {/* Hero Banner Section */}
      <div className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-cyan-300 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Events Directory
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <EventStatusBadge status={event.status} />
                <Badge variant="category">{event.category.toUpperCase()}</Badge>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-4">
                {event.title}
              </h1>

              {event.tagline && (
                <p className="text-lg sm:text-xl text-cyan-400 font-semibold mb-6">
                  {event.tagline}
                </p>
              )}

              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-8 max-w-2xl">
                {event.shortDescription}
              </p>

              {/* Action Buttons: Smart CTA for Official Website & Registration */}
              <div className="flex flex-wrap items-center gap-4 mb-8">
                {event.registrationLink && (
                  <Button
                    href={event.registrationLink}
                    variant="primary"
                    size="lg"
                    className="shadow-2xl shadow-blue-600/35 border-blue-400/40 px-8"
                    icon={<ExternalLink className="w-4 h-4" />}
                  >
                    Register Now
                  </Button>
                )}

                {/* Smart CTA: Rendered ONLY if websiteUrl is present in eventTheme */}
                {eventTheme.websiteUrl && (
                  <a
                    href={eventTheme.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full text-base font-bold transition-all border border-cyan-500/40 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-400 backdrop-blur-xl shadow-lg"
                  >
                    <span>Visit Official Website</span>
                    <ExternalLink className="w-4 h-4 text-cyan-300" />
                  </a>
                )}
              </div>

              {/* Event Metadata Card */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 rounded-3xl bg-slate-900/60 border border-white/10 backdrop-blur-xl text-sm shadow-2xl">
                <div className="flex items-center gap-3.5">
                  <Calendar className="w-5 h-5 text-cyan-400 shrink-0" />
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Date</div>
                    <div className="font-bold text-white mt-0.5">{event.date}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3.5">
                  <Clock className="w-5 h-5 text-purple-400 shrink-0" />
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Time</div>
                    <div className="font-bold text-white mt-0.5">{event.time}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3.5">
                  <MapPin className="w-5 h-5 text-blue-400 shrink-0" />
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Venue</div>
                    <div className="font-bold text-white mt-0.5">{event.location}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Poster Thumbnail */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-full max-w-xs aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-slate-950">
                <Image
                  src={event.posterUrl}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Details Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-8">
            {/* Full Description */}
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/60 border border-white/10 backdrop-blur-xl shadow-2xl">
              <h2 className="text-2xl font-bold text-white mb-4">About this Event</h2>
              <p className="text-slate-300 text-base leading-relaxed whitespace-pre-line font-normal">
                {event.fullDescription}
              </p>

              {/* Highlights List */}
              {event.highlights && event.highlights.length > 0 && (
                <div className="mt-8 pt-6 border-t border-slate-800/80">
                  <h3 className="text-lg font-bold text-white mb-4">Key Highlights</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {event.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Timeline */}
            {event.timeline && event.timeline.length > 0 && (
              <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/60 border border-white/10 backdrop-blur-xl shadow-2xl">
                <h2 className="text-2xl font-bold text-white mb-6">Schedule Timeline</h2>
                <div className="space-y-6 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-blue-500/30">
                  {event.timeline.map((item, idx) => (
                    <div key={idx} className="relative pl-8 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold shadow-sm">
                        {idx + 1}
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-white">{item.title}</h4>
                        <p className="text-xs text-slate-400 font-normal">{item.description}</p>
                      </div>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-500/10 text-cyan-300 border border-blue-400/30 self-start sm:self-auto">
                        {item.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Speakers / Guests */}
            {event.speakers && event.speakers.length > 0 && (
              <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/60 border border-white/10 backdrop-blur-xl shadow-2xl">
                <h2 className="text-2xl font-bold text-white mb-6">Featured Speakers & Mentors</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {event.speakers.map((spk, idx) => (
                    <div key={idx} className="flex items-center gap-4 p-4 rounded-2xl bg-slate-950 border border-white/10">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden bg-slate-900 border-2 border-cyan-400 shrink-0">
                        <Image src={spk.avatarUrl} alt={spk.name} fill className="object-cover" />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-white">{spk.name}</h4>
                        <p className="text-xs text-slate-400">{spk.role}</p>
                        {spk.company && (
                          <p className="text-xs text-cyan-400 font-semibold">{spk.company}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Photo Gallery */}
            {event.gallery && event.gallery.length > 0 && (
              <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/60 border border-white/10 backdrop-blur-xl shadow-2xl">
                <div className="flex items-center gap-2 mb-6">
                  <Images className="w-5 h-5 text-cyan-400" />
                  <h2 className="text-2xl font-bold text-white">Event Photographs</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {event.gallery.map((img, idx) => (
                    <div key={idx} className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-950 border border-white/10">
                      <Image src={img} alt={`${event.title} photo ${idx + 1}`} fill className="object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            {/* Registration CTA Card */}
            <div className="p-7 rounded-3xl bg-slate-900/60 border border-white/10 backdrop-blur-xl shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-2">Join Event</h3>
              <p className="text-xs text-slate-400 mb-6 font-normal">
                Registration is open for all students of CEKNPY and partner engineering colleges.
              </p>
              {event.registrationLink ? (
                <Button
                  href={event.registrationLink}
                  variant="primary"
                  size="md"
                  className="w-full justify-center shadow-lg shadow-blue-600/30"
                  icon={<ExternalLink className="w-4 h-4" />}
                >
                  Register Now
                </Button>
              ) : (
                <Button
                  href="/contact"
                  variant="primary"
                  size="md"
                  className="w-full justify-center"
                >
                  Inquire at IEDC Desk
                </Button>
              )}
            </div>

            {/* Related Events */}
            {relatedEvents.length > 0 && (
              <div>
                <h3 className="text-lg font-bold text-white mb-4">Other Events</h3>
                <div className="space-y-4">
                  {relatedEvents.map((rel) => (
                    <EventCard key={rel.id} event={rel} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
