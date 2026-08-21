import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kelana di Kendalsari | KKN 229 UPN 'Veteran' Yogyakarta",
  description:
    "Dokumentasi resmi pengabdian mahasiswa KKN Kelompok 229 UPN 'Veteran' Yogyakarta di Padukuhan Kendalsari III, Desa Kendalsari, Kec. Kemalang, Kab. Klaten. Mengabdi dengan Hati, Membangun Kendalsari.",
  keywords: [
    "KKN Kendalsari",
    "KKN UPN Veteran Yogyakarta",
    "Kelana di Kendalsari",
    "Kendalsari III",
    "Kemalang Klaten",
    "KKN 229"
  ],
  authors: [{ name: "KKN Kelompok 229 UPNYK" }],
  openGraph: {
    title: "Kelana di Kendalsari — KKN 229 UPN 'Veteran' Yogyakarta",
    description:
      "Mengabdi dengan Hati, Membangun Kendalsari. Dokumentasi program kerja, lini masa, dan profil pengabdian.",
    url: "https://kelanadikendalsari.vercel.app",
    siteName: "Kelana di Kendalsari",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${jakarta.variable} ${playfair.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#F6F8F5] text-stone-800 font-sans antialiased selection:bg-emerald-200 selection:text-emerald-950">
        {children}
      </body>
    </html>
  );
}
