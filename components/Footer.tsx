"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUp, Heart, Sparkles, MapPin, Mail, ExternalLink } from "lucide-react";
import { InstagramIcon, TikTokIcon } from "@/components/icons/SocialIcons";
import { KKN_INFO } from "@/data/kknData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#123319] text-stone-300 pt-16 pb-12 border-t border-[#2B6833]/40 relative overflow-hidden">
      {/* Decorative subtle background accents matching the logo green gradient */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-[#347A3D]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#2B6833]/50">
          {/* Left Column: Brand & Official Logo */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3.5">
              {/* Logo container */}
              <div className="relative w-12 h-12 rounded-2xl overflow-hidden shadow-lg border border-[#387D41]/50 bg-[#163E1F]">
                <Image
                  src="/logo.png"
                  alt="Logo Kelana di Kendalsari"
                  width={52}
                  height={52}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-white tracking-tight">
                  KKN Kelana di Kendalsari
                </h3>
                <p className="text-xs text-emerald-300 font-medium">
                  KKN.AD.84.229 • UPN &apos;Veteran&apos; Yogyakarta
                </p>
              </div>
            </div>

            {/* DPL Information Box */}
            <div className="p-3.5 rounded-2xl bg-[#0C2412]/80 border border-[#2B6833]/40 text-xs">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                Dosen Pembimbing Lapangan (DPL):
              </span>
              <p className="text-white font-semibold mt-0.5">
                {KKN_INFO.dpl.name}
              </p>
              <p className="text-[11px] text-stone-400">
                Dusun III Kendalsari, Kemalang, Klaten
              </p>
            </div>
          </div>

          {/* Middle Column: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#E9C46A]">
              NAVIGASI
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="#beranda"
                  className="hover:text-[#E9C46A] transition-colors inline-block py-0.5"
                >
                  Beranda
                </a>
              </li>
              <li>
                <a
                  href="#proker"
                  className="hover:text-[#E9C46A] transition-colors inline-block py-0.5"
                >
                  Program Kerja
                </a>
              </li>
              <li>
                <a
                  href="#linimasa"
                  className="hover:text-[#E9C46A] transition-colors inline-block py-0.5"
                >
                  Lini Masa Kegiatan
                </a>
              </li>
              <li>
                <a
                  href="#profil"
                  className="hover:text-[#E9C46A] transition-colors inline-block py-0.5"
                >
                  Profil Desa
                </a>
              </li>
              <li>
                <a
                  href="#tim"
                  className="hover:text-[#E9C46A] transition-colors inline-block py-0.5"
                >
                  Anggota Tim
                </a>
              </li>
            </ul>
          </div>

          {/* Right Column: Social Media */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#E9C46A]">
              MEDIA SOSIAL
            </h4>

            <div className="flex flex-col gap-2">
              <a
                href={KKN_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between p-3 rounded-xl bg-[#0C2412]/80 hover:bg-[#163E1F] border border-[#2B6833]/40 text-xs text-white transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <InstagramIcon className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                  <span>Instagram @kelanadikendalsari</span>
                </div>
                <ExternalLink className="w-3 h-3 text-stone-400" />
              </a>

              <a
                href={KKN_INFO.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between p-3 rounded-xl bg-[#0C2412]/80 hover:bg-[#163E1F] border border-[#2B6833]/40 text-xs text-white transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <TikTokIcon className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
                  <span>TikTok @kelanadikendalsari</span>
                </div>
                <ExternalLink className="w-3 h-3 text-stone-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p className="text-center sm:text-left">
            &copy; 2026 KKN Kelompok 229 UPN &apos;Veteran&apos; Yogyakarta.
            Dusun III Kendalsari, Kemalang, Klaten.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0C2412] hover:bg-[#163E1F] text-stone-300 hover:text-white border border-[#2B6833]/50 transition-colors shadow-2xs cursor-pointer"
          >
            <span>Kembali ke atas</span>
            <ArrowUp className="w-3.5 h-3.5 text-emerald-400" />
          </button>
        </div>
      </div>
    </footer>
  );
}
