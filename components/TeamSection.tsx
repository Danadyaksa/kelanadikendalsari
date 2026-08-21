import React from "react";
import { TEAM_MEMBERS } from "@/data/kknData";

export default function TeamSection() {
  return (
    <section id="tim" className="py-20 bg-[#F8FAF8] border-t border-stone-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (Clean Editorial Layout) */}
        <div className="max-w-3xl mb-14">
          <p className="text-xs font-bold tracking-widest uppercase text-[#2B6833] mb-2">
            TIM
          </p>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#163E1F] tracking-tight leading-tight mb-3">
            Anggota{" "}
            <span className="italic font-normal text-[#2B6833] font-serif">
              Kelompok
            </span>
          </h2>

          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            10 Mahasiswa lintas jurusan UPN &apos;Veteran&apos; Yogyakarta yang bersatu
            dalam karya, dedikasi, dan kebersamaan di Padukuhan Kendalsari III.
          </p>
        </div>

        {/* 10 Members Grid (Static, Clean, Editorial) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              className="group flex flex-col items-center text-center transition-all duration-300"
            >
              {/* Circular Avatar Container with Green Brand Gradient */}
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 mb-3.5 rounded-full p-1.5 bg-gradient-to-b from-[#2B6833] via-[#387D41] to-[#52B788] shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
                <div className="w-full h-full rounded-full overflow-hidden bg-stone-100 border-2 border-white relative">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Member Name */}
              <h3 className="font-serif text-sm sm:text-base font-bold text-[#163E1F] leading-tight mb-1">
                {member.name}
              </h3>

              {/* Clean Division Only below Name */}
              <p className="text-xs font-semibold text-[#2B6833] tracking-wide">
                {member.divisi}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
