"use client";

import React, { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import { DocumentationPhoto } from "@/data/kknData";

interface ProkerGalleryProps {
  photos: DocumentationPhoto[];
}

export default function ProkerGallery({ photos }: ProkerGalleryProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<DocumentationPhoto | null>(null);

  if (!photos || photos.length === 0) return null;

  return (
    <div>
      {/* Grid of Photos: 2 columns per row with rectangular widescreen aspect ratio */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {photos.map((photo, index) => (
          <div
            key={index}
            onClick={() => setSelectedPhoto(photo)}
            className="group relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-stone-900 cursor-pointer border border-stone-200/80 shadow-xs hover:shadow-xl transition-all duration-300"
          >
            <img
              src={photo.url}
              alt={photo.caption || `Dokumentasi ${index + 1}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />

            {/* Zoom Icon on hover */}
            <div className="absolute top-3.5 right-3.5 p-2 rounded-full bg-black/50 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
              <ZoomIn className="w-4 h-4" />
            </div>

            {/* Caption */}
            {photo.caption && (
              <div className="absolute bottom-3.5 left-4 right-4">
                <p className="text-white text-xs sm:text-sm font-medium line-clamp-2 drop-shadow-md leading-relaxed">
                  {photo.caption}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox Zoom Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedPhoto(null)}
          />

          <div className="relative max-w-4xl w-full bg-stone-950 rounded-3xl overflow-hidden shadow-2xl border border-white/10 z-10 animate-scale-up">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors z-20 cursor-pointer"
              aria-label="Tutup Foto"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative max-h-[75vh] w-full flex items-center justify-center bg-black">
              <img
                src={selectedPhoto.url}
                alt={selectedPhoto.caption}
                className="max-h-[75vh] w-auto max-w-full object-contain"
              />
            </div>

            {selectedPhoto.caption && (
              <div className="p-4 sm:p-5 bg-stone-900 text-stone-200 text-xs sm:text-sm text-center">
                {selectedPhoto.caption}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
