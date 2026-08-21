"use client";

import React, { useState } from "react";
import { 
  Calendar, 
  MapPin, 
  CheckCircle2 
} from "lucide-react";
import { TIMELINE_ITEMS } from "@/data/kknData";

export default function TimelineSection() {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const getCategoryBadgeClass = (category: string) => {
    switch (category) {
      case "Penerjunan":
        return "bg-stone-200/90 text-stone-800 border-stone-300";
      case "Proker Utama":
        return "bg-[#163E1F] text-emerald-100 border-[#2B6833]";
      case "Penarikan":
        return "bg-[#387D41]/15 text-[#163E1F] border-[#387D41]/30";
      default:
        return "bg-stone-100 text-stone-800 border-stone-200";
    }
  };

  return (
    <section id="linimasa" className="py-20 bg-ambient-glow relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (Clean Editorial Layout matching reference) */}
        <div className="mb-14">
          <p className="text-xs font-bold tracking-widest uppercase text-[#2B6833] mb-2">
            PERJALANAN
          </p>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#163E1F] tracking-tight leading-tight mb-3">
            Lini masa{" "}
            <span className="italic font-normal text-[#2B6833] font-serif">
              kegiatan
            </span>
          </h2>

          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Rangkaian tonggak kegiatan utama mulai dari Penerjunan ke desa,
            pelaksanaan Program Kerja Utama kelompok, hingga Penarikan resmi KKN
            Angkatan 84 di bulan Juli 2026.
          </p>
        </div>

        {/* Vertical Interactive Timeline */}
        <div className="relative pl-7 sm:pl-12 ml-1 sm:ml-4">
          {/* Continuous vertical line track in lush brand green */}
          <div className="absolute left-[14px] sm:left-[17px] top-3 bottom-8 w-[3px] bg-gradient-to-b from-[#4FA359] via-[#2B6833] to-[#163E1F] rounded-full" />

          <div className="space-y-9 sm:space-y-11">
            {TIMELINE_ITEMS.map((item) => {
              const isExpanded = activeItem === item.id;
              return (
                <div
                  key={item.id}
                  className="relative group cursor-pointer"
                  onClick={() =>
                    setActiveItem(isExpanded ? null : item.id)
                  }
                >
                  {/* Timeline Circle Node */}
                  <div className="absolute -left-7 sm:-left-12 top-1 flex items-center justify-center">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#2B6833] border-4 border-[#EAF2E9] shadow-xs group-hover:scale-125 group-hover:bg-[#387D41] transition-transform duration-200 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white" />
                    </div>
                  </div>

                  {/* Content Box */}
                  <div className="pl-3 sm:pl-5">
                    {/* Date Tag */}
                    <div className="inline-flex items-center gap-2 mb-1.5">
                      <span className="px-2.5 py-0.5 rounded-md bg-[#387D41]/15 text-[#163E1F] font-bold text-xs tracking-wide">
                        {item.date}
                      </span>
                      <span className="text-xs text-stone-500 font-medium">
                        ({item.day})
                      </span>
                    </div>

                    {/* Event Title */}
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-[#163E1F] group-hover:text-[#2B6833] transition-colors leading-snug mb-1.5">
                      {item.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-2.5 max-w-2xl">
                      {item.desc}
                    </p>

                    {/* Meta Pill Badges */}
                    <div className="flex flex-wrap items-center gap-2 pt-1">
                      <span
                        className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${getCategoryBadgeClass(
                          item.category
                        )}`}
                      >
                        {item.category}
                      </span>

                      {item.location && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white text-stone-600 border border-stone-200 text-[11px]">
                          <MapPin className="w-3 h-3 text-[#2B6833]" />
                          <span>{item.location}</span>
                        </span>
                      )}

                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#2B6833] ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Selesai Terlaksana</span>
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
