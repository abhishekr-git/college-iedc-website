"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { GALLERY_DATA } from "@/data/galleryData";
import { GalleryCategory } from "@/types/gallery";
import { cn } from "@/lib/utils";
import { Lightbox } from "@/components/gallery/Lightbox";

export function GalleryClient() {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>("all");
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const categories: { id: GalleryCategory; label: string }[] = [
    { id: "all", label: "All" },
    { id: "aarambh", label: "Aarambh" },
    { id: "hackathons", label: "Hackathons" },
    { id: "workshops", label: "Workshops" },
    { id: "execom", label: "Execom" },
    { id: "achievements", label: "Achievements" },
  ];

  const filteredItems = GALLERY_DATA.filter((item) => {
    if (selectedCategory === "all") return true;
    return item.category === selectedCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
      {/* Filter */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 mb-10 p-1 bg-[var(--bg-surface)] rounded-full border border-[var(--border)] max-w-fit mx-auto">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 min-h-[36px]",
                isActive
                  ? "bg-[var(--border-hover)] text-[var(--text-primary)]"
                  : "text-[var(--text-tertiary)] hover:text-[var(--text-secondary)]"
              )}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
        {filteredItems.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: idx * 0.04 }}
            onClick={() => setSelectedPhotoIndex(idx)}
            className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-[var(--bg-surface)] border border-[var(--border)] cursor-pointer transition-all duration-300 hover:border-[var(--border-hover)]"
          >
            <Image
              src={item.imageUrl}
              alt={item.title}
              fill
              loading="lazy"
              className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <h3 className="text-sm font-medium text-white">{item.title}</h3>
              <span className="text-xs text-white/60 mt-0.5">{item.date}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedPhotoIndex !== null && (
        <Lightbox
          items={filteredItems}
          currentIndex={selectedPhotoIndex}
          onClose={() => setSelectedPhotoIndex(null)}
          onNavigate={(newIndex) => setSelectedPhotoIndex(newIndex)}
        />
      )}
    </div>
  );
}
