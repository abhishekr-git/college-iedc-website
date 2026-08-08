"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Calendar, Tag } from "lucide-react";
import { GalleryItem } from "@/types/gallery";

interface LightboxProps {
  items: GalleryItem[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export function Lightbox({
  items,
  currentIndex,
  onClose,
  onNavigate,
}: LightboxProps) {
  const currentPhoto = items[currentIndex];

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") {
        onNavigate((currentIndex - 1 + items.length) % items.length);
      }
      if (e.key === "ArrowRight") {
        onNavigate((currentIndex + 1) % items.length);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, items.length, onClose, onNavigate]);

  if (!currentPhoto) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 backdrop-blur-2xl p-4 sm:p-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Lightbox"
          className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-slate-900/80 border border-slate-700 text-white flex items-center justify-center hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Previous Button */}
        <button
          onClick={() =>
            onNavigate((currentIndex - 1 + items.length) % items.length)
          }
          aria-label="Previous Image"
          className="absolute left-4 sm:left-8 z-50 w-12 h-12 rounded-full bg-slate-900/80 border border-slate-700 text-white flex items-center justify-center hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Next Button */}
        <button
          onClick={() => onNavigate((currentIndex + 1) % items.length)}
          aria-label="Next Image"
          className="absolute right-4 sm:right-8 z-50 w-12 h-12 rounded-full bg-slate-900/80 border border-slate-700 text-white flex items-center justify-center hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Image Content Container */}
        <motion.div
          key={currentPhoto.id}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.25 }}
          className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center"
        >
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] max-h-[70vh] rounded-3xl overflow-hidden shadow-2xl border border-slate-800">
            <Image
              src={currentPhoto.imageUrl}
              alt={currentPhoto.title}
              fill
              className="object-contain"
            />
          </div>

          {/* Photo Details Footer */}
          <div className="mt-4 text-center max-w-2xl px-4">
            <div className="flex items-center justify-center gap-3 text-xs text-slate-400 mb-1">
              <span className="inline-flex items-center gap-1">
                <Tag className="w-3.5 h-3.5 text-cyan-400" />
                {currentPhoto.category.toUpperCase()}
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-blue-400" />
                {currentPhoto.date}
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-1">
              {currentPhoto.title}
            </h3>
            {currentPhoto.caption && (
              <p className="text-sm text-slate-300 font-normal">
                {currentPhoto.caption}
              </p>
            )}
            <div className="text-xs text-slate-500 mt-2 font-mono">
              {currentIndex + 1} of {items.length}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
