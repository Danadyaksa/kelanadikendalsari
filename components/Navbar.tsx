"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Menu, 
  X, 
  Compass, 
  Calendar, 
  MapPin, 
  Users, 
  BookOpen,
  ArrowUpRight
} from "lucide-react";
import { InstagramIcon } from "@/components/icons/SocialIcons";
import { KKN_INFO } from "@/data/kknData";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("beranda");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check active section
      const sections = ["beranda", "proker", "linimasa", "profil", "tim"];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", href: "/#beranda", id: "beranda", icon: Compass },
    { name: "Program Kerja", href: "/#proker", id: "proker", icon: BookOpen },
    { name: "Lini Masa", href: "/#linimasa", id: "linimasa", icon: Calendar },
    { name: "Profil Desa", href: "/#profil", id: "profil", icon: MapPin },
    { name: "Anggota Tim", href: "/#tim", id: "tim", icon: Users },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? "bg-[#F4F8F4]/92 backdrop-blur-md shadow-xs border-b border-[#163E1F]/10 py-2.5"
          : "bg-transparent py-7 sm:py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          {/* Logo & Brand Identity */}
          <Link
            href="/#beranda"
            className="flex items-center gap-3.5 group focus:outline-hidden shrink-0"
          >
            {/* Logo Image */}
            <div
              className={`relative rounded-2xl overflow-hidden shadow-md shadow-[#163E1F]/20 group-hover:scale-105 transition-all duration-500 ease-out border border-[#2B6833]/30 bg-[#1D4C27] shrink-0 ${
                isScrolled
                  ? "w-10 h-10 sm:w-11 sm:h-11"
                  : "w-13 h-13 sm:w-14 sm:h-14 shadow-lg"
              }`}
            >
              <Image
                src="/logo.png"
                alt="Logo Kelana di Kendalsari"
                width={56}
                height={56}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            
            <div className="flex flex-col transition-all duration-300">
              <span
                className={`font-serif font-bold text-[#163E1F] tracking-tight group-hover:text-[#2B6833] transition-all duration-300 ${
                  isScrolled
                    ? "text-base sm:text-lg"
                    : "text-lg sm:text-2xl"
                }`}
              >
                KelanadiKendalsari
              </span>
              <span
                className={`font-medium text-stone-500 tracking-wide transition-all duration-300 ${
                  isScrolled ? "text-[10px]" : "text-xs"
                }`}
              >
                KKN UPN &apos;Veteran&apos; Yogyakarta
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          {/* When unscrolled: Clean open spacious text links without box */}
          {/* When scrolled: Neatly housed inside compact pill container */}
          <nav
            className={`hidden md:flex items-center transition-all duration-500 ease-out ${
              isScrolled
                ? "bg-white/85 backdrop-blur-md px-3 py-1.5 rounded-full border border-stone-200/90 shadow-xs gap-1"
                : "bg-transparent px-0 py-0 border-transparent shadow-none gap-6 lg:gap-8"
            }`}
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`font-medium transition-all duration-300 cursor-pointer ${
                    isScrolled
                      ? `text-xs px-3.5 py-1.5 rounded-full ${
                          isActive
                            ? "bg-gradient-to-r from-[#163E1F] to-[#2B6833] text-white shadow-xs font-semibold"
                            : "text-stone-600 hover:text-[#163E1F] hover:bg-[#387D41]/10"
                        }`
                      : `text-sm sm:text-base py-1 px-1 relative ${
                          isActive
                            ? "text-[#163E1F] font-bold after:absolute after:bottom-0 after:left-1 after:right-1 after:h-[2px] after:bg-[#2B6833] after:rounded-full"
                            : "text-stone-600 hover:text-[#163E1F]"
                        }`
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Social Media Link / Actions */}
          {/* When unscrolled: Clean text + icon link without pill box */}
          {/* When scrolled: Compact pill button matching screenshot */}
          <div className="hidden lg:flex items-center">
            <a
              href={KKN_INFO.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 font-medium transition-all duration-300 group cursor-pointer ${
                isScrolled
                  ? "text-xs px-3.5 py-2 rounded-full bg-[#387D41]/10 text-[#163E1F] border border-[#387D41]/25 hover:bg-[#387D41]/20 hover:border-[#387D41]/40 shadow-2xs"
                  : "text-sm text-[#163E1F] hover:text-[#2B6833] bg-transparent border-transparent py-1"
              }`}
            >
              <InstagramIcon className={`${isScrolled ? "w-3.5 h-3.5" : "w-4.5 h-4.5"} text-[#2B6833] group-hover:scale-110 transition-transform`} />
              <span className={isScrolled ? "font-semibold" : "font-semibold underline decoration-[#2B6833]/30 underline-offset-4"}>
                @kelanadikendalsari
              </span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#2B6833] opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={KKN_INFO.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-2 rounded-full bg-white border border-stone-200 text-[#163E1F] hover:bg-[#387D41]/10 shadow-xs"
            >
              <InstagramIcon className="w-4 h-4 text-[#2B6833]" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-2xl bg-white border border-stone-200 text-[#163E1F] hover:bg-[#387D41]/10 focus:outline-hidden shadow-xs cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[72px] p-4 bg-[#F4F8F4]/98 backdrop-blur-xl border-b border-stone-200 shadow-xl transition-all">
          <div className="flex flex-col gap-2 p-2 bg-white rounded-2xl border border-stone-200/80 shadow-xs">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-gradient-to-r from-[#163E1F] to-[#2B6833] text-white font-semibold"
                      : "text-stone-700 hover:bg-[#387D41]/10 hover:text-[#163E1F]"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-[#E9C46A]" : "text-[#2B6833]"}`} />
                  <span>{link.name}</span>
                </a>
              );
            })}

            <div className="pt-2 mt-2 border-t border-stone-100">
              <a
                href={KKN_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-gradient-to-r from-[#163E1F] to-[#2B6833] text-white shadow-xs"
              >
                <InstagramIcon className="w-4 h-4 text-white" />
                <span>Ikuti Instagram @kelanadikendalsari</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
