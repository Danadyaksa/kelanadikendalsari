import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { 
  ArrowLeft, 
  MapPin, 
  FolderOpen, 
  ExternalLink
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProkerGallery from "./ProkerGallery";
import DetailBackButton from "./DetailBackButton";
import { PROKER_LIST } from "@/data/kknData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROKER_LIST.map((proker) => ({
    slug: proker.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const proker = PROKER_LIST.find((p) => p.slug === slug || p.id === slug);

  if (!proker) {
    return {
      title: "Program Kerja Tidak Ditemukan | Kelana di Kendalsari",
    };
  }

  return {
    title: `${proker.title} | Kelana di Kendalsari KKN 229`,
    description: proker.shortDesc,
  };
}

export default async function ProkerDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const proker = PROKER_LIST.find((p) => p.slug === slug || p.id === slug);

  if (!proker) {
    notFound();
  }

  const renderParagraphs = (content: string | string[] | undefined) => {
    if (!content) return null;
    if (Array.isArray(content)) {
      return content.map((paragraph, idx) => (
        <p key={idx} className="text-sm sm:text-base leading-relaxed text-justify text-stone-700 mb-3.5">
          {paragraph}
        </p>
      ));
    }
    return content.split("\n\n").map((paragraph, idx) => (
      <p key={idx} className="text-sm sm:text-base leading-relaxed text-justify text-stone-700 mb-3.5">
        {paragraph}
      </p>
    ));
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F6F8F5] text-stone-800 selection:bg-[#387D41]/20 selection:text-[#163E1F]">
      <Navbar />

      <main className="grow pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Dynamic Smart Back Button (with scroll transition to floating icon) */}
          <DetailBackButton category={proker.category} />

          {/* Category Overline */}
          <p className="text-xs font-bold tracking-widest uppercase text-[#2B6833] mb-2">
            {proker.category === "Utama Kelompok"
              ? "PROKER UTAMA KELOMPOK"
              : proker.category === "Utama Individu"
              ? "PROKER UTAMA INDIVIDU"
              : "PROKER PENDUKUNG"}
          </p>

          {/* Main Title (Editorial Serif) */}
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#163E1F] leading-tight tracking-tight mb-8">
            {proker.title}
          </h1>

          {/* 4-Column Metadata Bar (Exact layout from user screenshot) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-5 px-4 sm:px-6 rounded-2xl bg-white border border-stone-200/80 shadow-2xs mb-10 text-xs">
            <div>
              <span className="block text-[10px] font-bold uppercase tracking-wider text-stone-400 mb-1">
                WAKTU PELAKSANAAN
              </span>
              <p className="font-semibold text-stone-800 leading-snug">
                {proker.date}
              </p>
              {proker.time && (
                <p className="text-[11px] text-stone-500 mt-0.5">{proker.time}</p>
              )}
            </div>

            <div>
              <span className="block text-[10px] font-bold uppercase tracking-wider text-stone-400 mb-1">
                SASARAN
              </span>
              <p className="font-semibold text-stone-800 leading-snug">
                {proker.targetBeneficiaries}
              </p>
            </div>

            <div>
              <span className="block text-[10px] font-bold uppercase tracking-wider text-stone-400 mb-1">
                PENANGGUNG JAWAB
              </span>
              <p className="font-semibold text-stone-800 leading-snug">
                {proker.pj}
              </p>
              {proker.pjNIM && (
                <p className="text-[11px] font-mono text-stone-500 mt-0.5">
                  NIM: {proker.pjNIM}
                </p>
              )}
            </div>

            <div>
              <span className="block text-[10px] font-bold uppercase tracking-wider text-stone-400 mb-1">
                STATUS
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#387D41]/15 text-[#163E1F] font-bold text-[11px]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2B6833]" />
                Selesai Terlaksana
              </span>
            </div>
          </div>

          {/* Featured Hero Banner with Script Overlay */}
          <div className="relative h-64 sm:h-96 w-full rounded-3xl overflow-hidden shadow-md mb-12 bg-stone-900 border border-stone-200/80">
            <img
              src={proker.image}
              alt={proker.title}
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

            {/* Script Text Overlay */}
            <div className="absolute inset-0 flex items-center justify-center p-4 text-center pointer-events-none">
              <span className="font-serif italic text-white text-3xl sm:text-5xl font-bold drop-shadow-lg tracking-wide px-4">
                {proker.title}
              </span>
            </div>

            {/* Location tag on banner */}
            <div className="absolute bottom-4 left-4 sm:left-6 flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-xl text-white text-xs">
              <MapPin className="w-3.5 h-3.5 text-emerald-300" />
              <span>{proker.location}</span>
            </div>
          </div>

          {/* Content Body Sections (Latar Belakang, Tujuan, Pelaksanaan, Output, Dokumentasi) */}
          <div className="space-y-10 text-stone-700">
            {/* Latar Belakang */}
            <section className="space-y-3">
              <h2 className="font-serif text-2xl font-bold text-[#163E1F]">
                Latar Belakang
              </h2>
              <div>
                {renderParagraphs(proker.background)}
              </div>
            </section>

            {/* Tujuan */}
            {proker.objectives && proker.objectives.length > 0 && (
              <section className="space-y-3 pt-2">
                <h2 className="font-serif text-2xl font-bold text-[#163E1F]">
                  Tujuan
                </h2>
                <ul className="space-y-2.5 text-sm sm:text-base text-stone-700">
                  {proker.objectives.map((obj, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-[#2B6833] font-bold select-none shrink-0">—</span>
                      <span className="leading-relaxed">{obj}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Pelaksanaan */}
            <section className="space-y-3 pt-2">
              <h2 className="font-serif text-2xl font-bold text-[#163E1F]">
                Pelaksanaan
              </h2>
              <div>
                {renderParagraphs(proker.implementation)}
              </div>
            </section>

            {/* Output & Hasil */}
            {proker.output && (
              <section className="space-y-3 pt-2">
                <h2 className="font-serif text-2xl font-bold text-[#163E1F]">
                  Hasil & Manfaat
                </h2>
                <div className="p-5 rounded-2xl bg-white border border-stone-200/80 shadow-2xs text-sm sm:text-base text-stone-800 leading-relaxed text-justify">
                  {proker.output}
                </div>
              </section>
            )}

            {/* Dokumentasi Photo & Video Gallery */}
            <section className="space-y-5 pt-4 border-t border-stone-200/80">
              <div className="flex items-center justify-between">
                <h2 className="font-serif text-2xl font-bold text-[#163E1F]">
                  Dokumentasi
                </h2>

                {proker.driveLink && (
                  <a
                    href={proker.driveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white hover:bg-[#387D41]/10 text-[#163E1F] border border-stone-200 text-xs font-semibold transition-colors shadow-2xs"
                  >
                    <FolderOpen className="w-3.5 h-3.5 text-[#2B6833]" />
                    <span>Google Drive Folder</span>
                    <ExternalLink className="w-3 h-3 text-stone-400" />
                  </a>
                )}
              </div>

              {/* YouTube Video Player Embed if Available */}
              {proker.youtubeEmbedUrl && (
                <div className="rounded-3xl overflow-hidden border border-stone-200/80 shadow-md bg-stone-950">
                  <div className="relative aspect-video w-full">
                    <iframe
                      src={proker.youtubeEmbedUrl}
                      title={`Video Dokumentasi ${proker.title}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-full h-full border-0"
                    />
                  </div>
                  {proker.videoUrl && (
                    <div className="p-4 bg-stone-900 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-stone-300">
                      <span className="font-semibold text-emerald-300 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                        Tonton Langsung di YouTube
                      </span>
                      <a
                        href={proker.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-white hover:text-emerald-300 font-semibold underline"
                      >
                        <span>Buka Tautan YouTube</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  )}
                </div>
              )}

              {/* Responsive Photo Gallery */}
              <ProkerGallery photos={proker.gallery || [{ url: proker.image, caption: proker.title }]} />
            </section>

            {/* Bottom Return Button */}
            <div className="pt-10 pb-6 text-center">
              <Link
                href={`/?tab=${encodeURIComponent(
                  proker.category === "Utama Individu"
                    ? "Proker Individu"
                    : proker.category === "Pendukung"
                    ? "Proker Pendukung"
                    : "Proker Utama"
                )}#proker`}
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-white hover:bg-[#163E1F] text-[#163E1F] hover:text-white border border-[#2B6833]/40 text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-2xs hover:shadow-md cursor-pointer"
              >
                <span>
                  ← Kembali ke{" "}
                  {proker.category === "Utama Individu"
                    ? "Proker Individu"
                    : proker.category === "Pendukung"
                    ? "Proker Pendukung"
                    : "Proker Utama"}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
