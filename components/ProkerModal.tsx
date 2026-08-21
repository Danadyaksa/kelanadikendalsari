"use client";

import React, { useEffect } from "react";
import { 
  X, 
  Calendar, 
  MapPin, 
  User, 
  CheckCircle2, 
  Sparkles, 
  Share2, 
  Clock, 
  Users, 
  ExternalLink,
  FolderOpen
} from "lucide-react";
import { ProkerItem } from "@/data/kknData";

interface ProkerModalProps {
  proker: ProkerItem | null;
  onClose: () => void;
}

export default function ProkerModal({ proker, onClose }: ProkerModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (proker) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [proker, onClose]);

  if (!proker) return null;

  const getCategoryBadgeClass = (category: string) => {
    switch (category) {
      case "Utama Kelompok":
        return "bg-[#163E1F] text-emerald-100 border-[#2B6833]";
      case "Utama Individu":
        return "bg-[#2B6833] text-white border-[#387D41]";
      case "Pendukung":
        return "bg-[#387D41]/20 text-[#163E1F] border-[#387D41]/40";
      default:
        return "bg-stone-100 text-stone-900 border-stone-300";
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: proker.title,
        text: proker.shortDesc,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Tautan berhasil disalin ke clipboard!");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-stone-900/60 backdrop-blur-xs transition-opacity duration-300"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-stone-200/80 overflow-hidden z-10 my-8 animate-scale-up">
        {/* Header Image with Overlay */}
        <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-stone-900">
          <img
            src={proker.image}
            alt={proker.title}
            className="w-full h-full object-cover opacity-90 transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/40 to-transparent" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/40 backdrop-blur-md text-white hover:bg-black/70 hover:scale-105 transition-all focus:outline-hidden"
            aria-label="Tutup Detail"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Category Pill on Image */}
          <div className="absolute top-4 left-4">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border shadow-xs ${getCategoryBadgeClass(
                proker.category
              )}`}
            >
              {proker.category}
            </span>
          </div>

          {/* Title & Metadata on Image Bottom */}
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold leading-tight drop-shadow-xs">
              {proker.title}
            </h3>
            <div className="flex flex-wrap items-center gap-2.5 mt-2 text-xs text-stone-200">
              <span className="flex items-center gap-1.5 bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-lg">
                <Calendar className="w-3.5 h-3.5 text-emerald-300" />
                {proker.date}
              </span>
              {proker.time && (
                <span className="flex items-center gap-1.5 bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-lg">
                  <Clock className="w-3.5 h-3.5 text-emerald-300" />
                  {proker.time}
                </span>
              )}
              <span className="flex items-center gap-1.5 bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-lg">
                <MapPin className="w-3.5 h-3.5 text-emerald-300" />
                {proker.location}
              </span>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          {/* Penanggung Jawab Box */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl bg-[#F4F8F4] border border-[#387D41]/20">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-[#163E1F] text-white flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                <User className="w-5 h-5 text-emerald-300" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500">
                  Penanggung Jawab (PJ)
                </span>
                <p className="text-sm font-bold text-[#163E1F] leading-snug">
                  {proker.pj}
                </p>
                {proker.pjNIM && (
                  <p className="text-[11px] text-stone-500 font-mono">
                    NIM: {proker.pjNIM}
                  </p>
                )}
                {proker.pjRole && (
                  <p className="text-xs text-[#2B6833] font-medium">{proker.pjRole}</p>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              {proker.driveLink && (
                <a
                  href={proker.driveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-stone-200 text-xs font-semibold text-[#163E1F] hover:bg-[#387D41]/10 hover:border-[#2B6833] transition-colors shadow-2xs"
                  title="Buka Dokumentasi Google Drive"
                >
                  <FolderOpen className="w-3.5 h-3.5 text-[#2B6833]" />
                  <span>Drive Foto</span>
                  <ExternalLink className="w-3 h-3 text-stone-400" />
                </a>
              )}
              <button
                onClick={handleShare}
                className="p-2 rounded-xl bg-white border border-stone-200 text-stone-600 hover:text-[#163E1F] hover:border-[#2B6833] transition-colors shadow-2xs cursor-pointer"
                title="Bagikan Program Kerja"
              >
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Full Description */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
              Deskripsi & Latar Belakang Program
            </h4>
            <p className="text-stone-700 leading-relaxed text-sm sm:text-base text-justify">
              {proker.fullDesc}
            </p>
          </div>

          {/* Penerima Manfaat */}
          {proker.targetBeneficiaries && (
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-stone-100/70 border border-stone-200/80 text-xs text-stone-700">
              <Users className="w-4 h-4 text-[#2B6833] shrink-0" />
              <span>
                <strong className="text-[#163E1F]">Sasaran / Penerima Manfaat:</strong>{" "}
                {proker.targetBeneficiaries}
              </span>
            </div>
          )}

          {/* Objectives */}
          {proker.objectives && proker.objectives.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-3">
                Tujuan Pelaksanaan
              </h4>
              <div className="grid gap-2 sm:gap-2.5">
                {proker.objectives.map((obj, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-[#387D41]/10 border border-[#387D41]/20 text-sm text-[#163E1F]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#2B6833] shrink-0 mt-0.5" />
                    <span className="leading-snug">{obj}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Output & Manfaat (Clean Green Palette) */}
          {proker.output && (
            <div className="p-4 rounded-2xl bg-[#F0F6F0] border border-[#387D41]/30">
              <span className="text-xs font-bold uppercase tracking-wider text-[#163E1F] flex items-center gap-1.5 mb-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#2B6833]" />
                Output & Hasil Pelaksanaan
              </span>
              <p className="text-xs sm:text-sm text-stone-800 font-medium leading-relaxed">
                {proker.output}
              </p>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:px-8 sm:py-4 bg-stone-50 border-t border-stone-200/80 flex items-center justify-between">
          <span className="text-xs text-stone-500 font-medium">
            KKN AD.84.229 • Padukuhan Kendalsari III
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-gradient-to-r from-[#163E1F] to-[#2B6833] text-white text-xs font-semibold hover:from-[#1D4C27] hover:to-[#387D41] transition-colors cursor-pointer"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
}
