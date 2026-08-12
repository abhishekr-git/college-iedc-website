"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { GALLERY_DATA } from "@/data/galleryData";
import { Lightbox } from "@/components/gallery/Lightbox";

export function GalleryPreview() {
  const previewItems = GALLERY_DATA.slice(0, 6);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  return (
    <section className="py-[var(--section-py)] bg-[var(--bg-primary)] border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Moments & Memories"
          subtitle="Hackathon nights, keynotes, and celebrations captured in real time."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-12">
          {previewItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              onClick={() => setSelectedPhotoIndex(idx)}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-[var(--bg-surface)] border border-[var(--border)] cursor-pointer transition-all duration-300 hover:border-[var(--border-hover)]"
            >
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-sm font-medium text-white">{item.title}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button
            href="/gallery"
            variant="outline"
            size="md"
            icon={<ArrowRight className="w-4 h-4" strokeWidth={2} />}
          >
            View Gallery
          </Button>
        </div>
      </div>

      {/* Lightbox */}
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
