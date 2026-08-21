"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface DetailBackButtonProps {
  category: string;
}

export default function DetailBackButton({ category }: DetailBackButtonProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [returnUrl, setReturnUrl] = useState("/#proker");
  const [targetLabel, setTargetLabel] = useState("Program Kerja");

  useEffect(() => {
    // Determine the matching tab based on category
    let tabName = "Proker Utama";
    if (category === "Utama Individu") tabName = "Proker Individu";
    if (category === "Pendukung") tabName = "Proker Pendukung";
    if (category === "Utama Kelompok") tabName = "Proker Utama";

    // If there is a 'from' query parameter in the URL, prioritize it
    const params = new URLSearchParams(window.location.search);
    const fromParam = params.get("from");
    if (fromParam) {
      tabName = fromParam;
    }

    setTargetLabel(tabName);
    setReturnUrl(`/?tab=${encodeURIComponent(tabName)}#proker`);

    const handleScroll = () => {
      if (window.scrollY > 140) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [category]);

  return (
    <>
      {/* Top Inline Back Link */}
      <div className="mb-8">
        <Link
          href={returnUrl}
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#2B6833] hover:text-[#163E1F] transition-colors py-1 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Kembali ke {targetLabel}</span>
        </Link>
      </div>

      {/* Floating Circular Icon Button below Navbar (appears when user scrolls down) */}
      <div
        className={`fixed top-24 sm:top-28 left-4 sm:left-8 lg:left-12 z-30 transition-all duration-300 ${
          isScrolled
            ? "opacity-100 translate-y-0 pointer-events-auto scale-100"
            : "opacity-0 -translate-y-2 pointer-events-none scale-90"
        }`}
      >
        <Link
          href={returnUrl}
          aria-label={`Kembali ke ${targetLabel}`}
          title={`Kembali ke ${targetLabel}`}
          className="w-11 h-11 rounded-full bg-white/95 backdrop-blur-md border border-stone-200/90 shadow-md hover:shadow-lg flex items-center justify-center text-[#163E1F] hover:bg-[#163E1F] hover:text-white hover:border-[#163E1F] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </>
  );
}
