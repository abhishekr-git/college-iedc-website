"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Eye, Tag, Calendar } from "lucide-react";
import { GALLERY_DATA } from "@/data/galleryData";
import { GalleryCategory } from "@/types/gallery";
import { cn } from "@/lib/utils";
import { Lightbox } from "@/components/gallery/Lightbox";

export function GalleryClient() {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>("all");
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const categories: { id: GalleryCategory; label: string }[] = [
    { id: "all", label: "All Photos" },
    { id: "aarambh", label: "Aarambh Summit" },
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={cn(
                "px-5 py-2.5 rounded-full text-sm font-bold transition-all min-h-[44px]",
                isActive
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/25"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              )}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: idx * 0.05 }}
            onClick={() => setSelectedPhotoIndex(idx)}
            className="group relative aspect-[4/3] rounded-3xl overflow-hidden bg-slate-900 shadow-sm hover:shadow-xl cursor-pointer border border-slate-200"
          >
            <Image
              src={item.imageUrl}
              alt={item.title}
              fill
              loading="lazy"
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-1">
                {item.category}
              </span>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <div className="inline-flex items-center gap-1 text-xs text-slate-300">
                <Eye className="w-3.5 h-3.5" /> Enlarge
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
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
