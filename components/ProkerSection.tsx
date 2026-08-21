"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  Search, 
  User, 
  Calendar, 
  SlidersHorizontal
} from "lucide-react";
import { PROKER_LIST, ProkerItem } from "@/data/kknData";

export default function ProkerSection() {
  const [activeTab, setActiveTab] = useState<string>("Proker Utama");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Sync activeTab with URL query parameter (?tab=...) when loaded or returned from detail page
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const tabParam = params.get("tab");
    if (tabParam) {
      if (tabParam === "Semua" || tabParam === "Proker Utama" || tabParam === "Proker Individu" || tabParam === "Proker Pendukung") {
        setActiveTab(tabParam);
      } else if (tabParam.toLowerCase().includes("pendukung")) {
        setActiveTab("Proker Pendukung");
      } else if (tabParam.toLowerCase().includes("individu")) {
        setActiveTab("Proker Individu");
      } else if (tabParam.toLowerCase().includes("utama")) {
        setActiveTab("Proker Utama");
      }
    }
  }, []);

  const handleTabChange = (tabName: string) => {
    setActiveTab(tabName);
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.set("tab", tabName);
      window.history.replaceState({}, "", url.toString());
    }
  };

  const tabs = [
    { name: "Semua", count: PROKER_LIST.length },
    {
      name: "Proker Utama",
      count: PROKER_LIST.filter((p) => p.category === "Utama Kelompok").length,
    },
    {
      name: "Proker Individu",
      count: PROKER_LIST.filter((p) => p.category === "Utama Individu").length,
    },
    {
      name: "Proker Pendukung",
      count: PROKER_LIST.filter((p) => p.category === "Pendukung").length,
    },
  ];

  const getPjList = (pj: string) => {
    return pj
      .split(/\s*&\s*|\s*,\s*/)
      .map((name) => name.trim())
      .filter(Boolean);
  };

  const filteredProkers = PROKER_LIST.filter((proker) => {
    // Tab filter
    let matchesTab = true;
    if (activeTab === "Proker Utama") matchesTab = proker.category === "Utama Kelompok";
    if (activeTab === "Proker Individu") matchesTab = proker.category === "Utama Individu";
    if (activeTab === "Proker Pendukung") matchesTab = proker.category === "Pendukung";

    // Search filter
    const matchesSearch =
      proker.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proker.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proker.pj.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesTab && matchesSearch;
  });

  const getBadgeStyle = (category: string) => {
    switch (category) {
      case "Utama Kelompok":
        return "bg-[#163E1F] text-emerald-100 border-[#2B6833]";
      case "Utama Individu":
        return "bg-[#2B6833]/15 text-[#163E1F] border-[#387D41]/30";
      case "Pendukung":
        return "bg-stone-100 text-stone-700 border-stone-200";
      default:
        return "bg-stone-100 text-stone-900 border-stone-300";
    }
  };

  const getCategoryDisplay = (category: string) => {
    if (category === "Utama Kelompok") return "PROKER UTAMA";
    if (category === "Utama Individu") return "PROKER INDIVIDU";
    if (category === "Pendukung") return "PROKER PENDUKUNG";
    return category.toUpperCase();
  };

  return (
    <section id="proker" className="py-20 bg-[#F8FAF8] border-t border-stone-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (Clean Editorial Layout matching reference) */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-bold tracking-widest uppercase text-[#2B6833] mb-2">
            PROGRAM KERJA
          </p>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#163E1F] tracking-tight leading-tight mb-3">
            Semua yang kami kerjakan{" "}
            <span className="italic font-normal text-[#2B6833] font-serif">
              di desa
            </span>
            .
          </h2>

          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Terbagi menjadi proker utama kelompok, proker individu, dan proker pendukung.
            Klik tiap kartu untuk membaca dokumentasi lengkap, tahapan pelaksanaan, dan foto kegiatan.
          </p>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-stone-200/80">
          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.name;
              return (
                <button
                  key={tab.name}
                  onClick={() => handleTabChange(tab.name)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-r from-[#163E1F] to-[#2B6833] text-white shadow-xs"
                      : "bg-white text-stone-600 border border-stone-200/90 hover:border-stone-400 hover:text-stone-900"
                  }`}
                >
                  <span>{tab.name}</span>
                  <span
                    className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                      isActive
                        ? "bg-[#387D41] text-white"
                        : "bg-stone-100 text-stone-600"
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari program kerja..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9.5 pr-4 py-2 rounded-full bg-white border border-stone-200/90 text-xs text-stone-800 placeholder:text-stone-400 focus:outline-hidden focus:border-[#2B6833] focus:ring-2 focus:ring-[#2B6833]/15 transition-all shadow-2xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 text-xs cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Proker Card Grid linking to Dedicated Full Page */}
        {filteredProkers.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {filteredProkers.map((proker) => (
              <Link
                key={proker.id}
                href={`/program-kerja/${proker.slug}?from=${encodeURIComponent(activeTab)}`}
                className="group bg-white rounded-3xl border border-stone-200/80 hover:border-[#2B6833]/50 p-4 sm:p-5 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  {/* Thumbnail Container */}
                  <div className="relative h-44 sm:h-48 w-full rounded-2xl overflow-hidden mb-4 bg-stone-900">
                    <img
                      src={proker.image}
                      alt={proker.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Script Overlay Title */}
                    <div className="absolute inset-0 flex items-center justify-center p-3 text-center pointer-events-none">
                      <span className="font-serif italic text-white/95 text-xl sm:text-2xl drop-shadow-md font-semibold tracking-wide px-2">
                        {proker.title}
                      </span>
                    </div>

                    {/* Date badge */}
                    <div className="absolute bottom-2.5 right-2.5">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-black/40 backdrop-blur-md text-emerald-200 text-[10px] font-medium">
                        <Calendar className="w-3 h-3 text-emerald-300" />
                        {proker.date}
                      </span>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="mb-2.5">
                    <span
                      className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase border ${getBadgeStyle(
                        proker.category
                      )}`}
                    >
                      {getCategoryDisplay(proker.category)}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#163E1F] mb-2 group-hover:text-[#2B6833] transition-colors leading-snug line-clamp-1">
                    {proker.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4 line-clamp-2">
                    {proker.shortDesc}
                  </p>
                </div>

                {/* Footer of Card: Clean Vertical Stack for Multiple PJ Names */}
                <div className="pt-3.5 border-t border-stone-100 flex items-end justify-between gap-2 mt-auto">
                  <div className="flex items-start gap-1.5 text-xs text-stone-600 min-w-0">
                    <User className="w-3.5 h-3.5 text-[#2B6833] shrink-0 mt-0.5" />
                    <div className="flex flex-col gap-0.5 leading-tight">
                      {getPjList(proker.pj).map((name, i) => (
                        <span key={i} className="font-medium text-stone-700">
                          {name}
                        </span>
                      ))}
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1 text-xs font-bold text-[#163E1F] group-hover:text-[#2B6833] transition-colors shrink-0 pb-0.5">
                    <span>Lihat detail</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          /* Empty state */
          <div className="text-center py-16 bg-white rounded-3xl border border-stone-200/80 p-8">
            <SlidersHorizontal className="w-8 h-8 text-stone-400 mx-auto mb-3" />
            <h4 className="text-base font-bold text-stone-800 mb-1">
              Tidak ada program kerja ditemukan
            </h4>
            <p className="text-xs text-stone-500 mb-4">
              Coba gunakan kata kunci lain atau pilih tab kategori yang berbeda.
            </p>
            <button
              onClick={() => {
                setActiveTab("Semua");
                setSearchQuery("");
              }}
              className="px-4 py-2 rounded-full bg-[#163E1F] text-white text-xs font-semibold cursor-pointer"
            >
              Reset Filter
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
