"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Images, Eye } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { GALLERY_DATA } from "@/data/galleryData";
import { Lightbox } from "@/components/gallery/Lightbox";

export function GalleryPreview() {
  const previewItems = GALLERY_DATA.slice(0, 6);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  return (
    <section className="py-24 sm:py-32 bg-[#0B0F14] text-white relative overflow-hidden border-b border-white/[0.08]">
      {/* Layered Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 -left-36 w-[600px] h-[600px] bg-[#3B82F6]/10 blur-[160px] rounded-full" />
        <div className="absolute bottom-10 -right-36 w-[500px] h-[500px] bg-[#60A5FA]/10 blur-[160px] rounded-full" />
        <div className="absolute inset-0 bg-[radial-gradient(#3B82F6_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.04]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Visual Storytelling"
          title="Moments of Innovation at CEKNPY"
          subtitle="A glimpse into hackathon night shifts, keynotes, prototypes, and celebration of startup victories."
        />

        {/* Bento Grid Gallery Preview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {previewItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              onClick={() => setSelectedPhotoIndex(idx)}
              className="group relative aspect-[4/3] rounded-[24px] overflow-hidden bg-[#10151D] border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:border-[#3B82F6]/40 hover:shadow-[0_12px_40px_rgba(59,130,246,0.2)] cursor-pointer transition-all duration-300 hover:-translate-y-1.5"
            >
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-92 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-[#050608]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-xs font-semibold text-[#60A5FA] uppercase tracking-widest mb-1">
                  {item.category}
                </span>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <div className="inline-flex items-center gap-1.5 text-xs text-white/72 font-medium">
                  <Eye className="w-3.5 h-3.5 text-[#3B82F6]" strokeWidth={1.8} /> Click to enlarge
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button
            href="/gallery"
            variant="glass"
            size="lg"
            className="border-white/[0.08] bg-[#10151D]/80 text-white hover:bg-white/[0.08] h-[56px] px-8 rounded-full"
            icon={<Images className="w-5 h-5 text-[#60A5FA]" strokeWidth={1.8} />}
          >
            Browse Full Gallery & Media Archive
          </Button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhotoIndex !== null && (
        <Lightbox
          items={previewItems}
          currentIndex={selectedPhotoIndex}
          onClose={() => setSelectedPhotoIndex(null)}
          onNavigate={(newIndex) => setSelectedPhotoIndex(newIndex)}
        />
      )}
    </section>
  );
}
