"use client";

import React from "react";
import { ArrowRight, Users, MapPin } from "lucide-react";
import { KKN_INFO, KKN_STATS } from "@/data/kknData";

export default function HeroSection() {
  return (
    <section
      id="beranda"
      className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-ambient-glow"
    >
      {/* Decorative ambient blurred glowing shapes matching logo green tones */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-4xl h-80 bg-gradient-to-br from-[#4FA359]/20 via-[#2B6833]/25 to-emerald-100/30 blur-3xl -z-10 pointer-events-none rounded-full" />
      <div className="absolute top-36 right-4 w-72 h-72 bg-[#387D41]/15 blur-2xl -z-10 pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Clean Editorial Section Overline */}
        <p className="text-xs sm:text-xs font-bold tracking-widest uppercase text-[#2B6833] mb-4">
          KKN UPNYK 84.229
        </p>

        {/* Hero Main Heading (Editorial Serif with green italic accent matching brand) */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold text-[#163E1F] leading-[1.12] tracking-tight mb-6">
          Mengabdi dengan{" "}
          <span className="italic font-normal text-[#2B6833] font-serif pr-1">
            Hati
          </span>
          ,<br className="hidden sm:inline" /> Membangun{" "}
          <span className="italic font-normal text-[#387D41] font-serif underline decoration-[#52B788]/60 decoration-wavy decoration-1 underline-offset-8">
            Kendalsari
          </span>
          .
        </h1>

        {/* Subheading */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-stone-600 leading-relaxed font-normal mb-8">
          Dokumentasi program kerja dan dedikasi nyata mahasiswa KKN Kelompok 229
          UPN &apos;Veteran&apos; Yogyakarta di Padukuhan Kendalsari III, Kec. Kemalang,
          Kab. Klaten.
        </p>

        {/* Quick Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-14">
          <a
            href="#proker"
            className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-[#163E1F] to-[#2B6833] text-white text-sm font-semibold hover:from-[#1D4C27] hover:to-[#387D41] shadow-md shadow-[#163E1F]/20 hover:shadow-lg hover:shadow-[#163E1F]/25 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group cursor-pointer"
          >
            <span>Lihat Program Kerja</span>
            <ArrowRight className="w-4 h-4 text-emerald-300 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#tim"
            className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-white/90 backdrop-blur-xs text-[#163E1F] text-sm font-semibold border border-stone-300/80 hover:bg-white hover:border-[#2B6833] hover:text-[#2B6833] shadow-2xs hover:shadow-xs hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
          >
            <Users className="w-4 h-4 text-stone-500" />
            <span>Profil Kelompok</span>
          </a>

          <a
            href="#profil"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#387D41]/10 text-[#163E1F] text-sm font-semibold border border-[#387D41]/25 hover:bg-[#387D41]/20 shadow-2xs hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
          >
            <MapPin className="w-4 h-4 text-[#2B6833]" />
            <span>Tentang Kendalsari</span>
          </a>
        </div>

        {/* Counter Stats Bar */}
        <div className="max-w-3xl mx-auto pt-6 border-t border-stone-300/60">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-stone-200/80">
            {/* Stat 1 */}
            <div className="flex flex-col items-center justify-center px-2 pt-2 sm:pt-0">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-[#163E1F] tracking-tight">
                {KKN_STATS.prokerUtamaCount}
              </span>
              <span className="text-xs sm:text-xs font-semibold text-stone-500 mt-1 uppercase tracking-wider">
                Proker Utama
              </span>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center justify-center px-2 pt-4 sm:pt-0">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-[#163E1F] tracking-tight">
                {KKN_STATS.prokerIndividuCount}
              </span>
              <span className="text-xs sm:text-xs font-semibold text-stone-500 mt-1 uppercase tracking-wider">
                Proker Individu
              </span>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center justify-center px-2 pt-4 sm:pt-0">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-[#163E1F] tracking-tight">
                {KKN_STATS.prokerPendukungCount}
              </span>
              <span className="text-xs sm:text-xs font-semibold text-stone-500 mt-1 uppercase tracking-wider">
                Proker Pendukung
              </span>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col items-center justify-center px-2 pt-4 sm:pt-0">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-[#163E1F] tracking-tight">
                {KKN_STATS.totalMahasiswa}
              </span>
              <span className="text-xs sm:text-xs font-semibold text-stone-500 mt-1 uppercase tracking-wider">
                Mahasiswa Pengabdi
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
