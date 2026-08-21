"use client";

import React from "react";
import { 
  MapPin, 
  Mountain, 
  TreePine, 
  ExternalLink, 
  Navigation
} from "lucide-react";
import { KKN_INFO } from "@/data/kknData";

export default function ProfileDesaSection() {
  return (
    <section id="profil" className="py-20 bg-[#F4F8F4] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (Clean Editorial Layout matching reference) */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-bold tracking-widest uppercase text-[#2B6833] mb-2">
            LOKASI
          </p>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#163E1F] tracking-tight leading-tight mb-3">
            Mengenal lebih dekat{" "}
            <span className="italic font-normal text-[#2B6833] font-serif">
              wilayah
            </span>{" "}
            dan lokasi KKN kami.
          </h2>

          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Sekilas tentang Dusun III Kendalsari, lanskap alam lereng Merapi,
            dan dinamika masyarakat desa tempat kami mengabdi.
          </p>
        </div>

        {/* Location Profile Content Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          {/* Left Column: Descriptive Profile & Metadata Matrix */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-xs">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#163E1F] mb-4">
                Profil Desa & Dusun III Kendalsari
              </h3>

              <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-4">
                Dusun III Kendalsari terletak di Desa Kendalsari, Kecamatan
                Kemalang, Kabupaten Klaten, Jawa Tengah. Secara geografis berada di
                kawasan perbukitan lereng tenggara Gunung Merapi yang berhawa sejuk
                dan bertanah subur.
              </p>

              <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6">
                Mayoritas warga menggantungkan mata pencaharian pada sektor
                pertanian sayur-mayur, perkebunan pisang, dan peternakan sapi
                perah/potong. Nilai kegotongroyongan, kehangatan pos kamling, serta
                tradisi sambung rasa masyarakat menjadi modal sosial utama dalam
                suksesnya seluruh program pengabdian kami.
              </p>

              {/* Data attributes list matching reference style */}
              <div className="space-y-3 pt-4 border-t border-stone-100 text-xs sm:text-sm font-medium">
                <div className="flex items-start gap-2">
                  <span className="text-[#2B6833] font-bold">—</span>
                  <span className="text-stone-500 w-28 shrink-0">Kecamatan:</span>
                  <span className="text-stone-900 font-semibold">
                    {KKN_INFO.location.kecamatan}
                  </span>
                </div>

                <div className="flex items-start gap-2">
                  <span className="text-[#2B6833] font-bold">—</span>
                  <span className="text-stone-500 w-28 shrink-0">Kabupaten:</span>
                  <span className="text-stone-900 font-semibold">
                    {KKN_INFO.location.kabupaten}, {KKN_INFO.location.provinsi}
                  </span>
                </div>

                <div className="flex items-start gap-2">
                  <span className="text-[#2B6833] font-bold">—</span>
                  <span className="text-stone-500 w-28 shrink-0">Periode KKN:</span>
                  <span className="text-stone-900 font-semibold">
                    {KKN_INFO.period}
                  </span>
                </div>

                <div className="flex items-start gap-2">
                  <span className="text-[#2B6833] font-bold">—</span>
                  <span className="text-stone-500 w-28 shrink-0">Tema KKN:</span>
                  <span className="text-[#163E1F] font-bold uppercase tracking-tight">
                    Pemberdayaan Dusun III Kendalsari Berbasis Pendidikan, Teknologi, dan Sosial
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Feature Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-white p-4 rounded-2xl border border-stone-200/80 shadow-2xs">
                <Mountain className="w-5 h-5 text-[#2B6833] mb-2" />
                <h4 className="font-bold text-xs text-stone-900 mb-1">
                  Lereng Merapi
                </h4>
                <p className="text-[11px] text-stone-500 leading-tight">
                  Ketinggian dataran tinggi dengan udara sejuk & panorama alam.
                </p>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-stone-200/80 shadow-2xs">
                <TreePine className="w-5 h-5 text-[#2B6833] mb-2" />
                <h4 className="font-bold text-xs text-stone-900 mb-1">
                  Potensi Tani & Kebun
                </h4>
                <p className="text-[11px] text-stone-500 leading-tight">
                  Sentra pisang lokal, palawija, serta pakan ternak hijau.
                </p>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-stone-200/80 shadow-2xs">
                <Navigation className="w-5 h-5 text-[#2B6833] mb-2" />
                <h4 className="font-bold text-xs text-stone-900 mb-1">
                  Guyub Rukun
                </h4>
                <p className="text-[11px] text-stone-500 leading-tight">
                  Kekeluargaan hangat & budaya ronda malam yang kompak.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Map Box */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl border border-stone-200/80 p-4 sm:p-5 shadow-xs flex flex-col h-full">
              {/* Map Title Bar */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-stone-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#387D41]/15 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-[#2B6833]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#163E1F]">
                      Peta Kendalsari III, Kemalang
                    </h4>
                    <p className="text-[10px] text-stone-500">
                      Koordinat Lereng Gunung Merapi
                    </p>
                  </div>
                </div>

                <a
                  href={KKN_INFO.location.gmapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-stone-100 hover:bg-[#387D41]/10 text-[11px] font-semibold text-[#163E1F] border border-stone-200 transition-colors"
                >
                  <span>Buka di Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Responsive Map Embed with satellite/map overlay look */}
              <div className="relative w-full h-[360px] sm:h-[420px] rounded-2xl overflow-hidden border border-stone-200/80 bg-stone-100">
                <iframe
                  title="Peta Lokasi KKN Kendalsari"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15816.353381665476!2d110.478952!3d-7.619894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a60d6919db45b%3A0x6e0e0921477aa2bd!2sKendalsari%2C%20Kemalang%2C%20Klaten%20Regency%2C%20Central%20Java!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
                  className="w-full h-full border-0"
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="mt-3 flex items-center justify-between text-[11px] text-stone-500 px-1">
                <span>Radius Operasi KKN: RT 14 s/d RT 23 Dusun III Kendalsari</span>
                <span className="font-semibold text-[#2B6833]">Kemalang, Klaten</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
