// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import { Navbar } from "@/components/navbar";
import { Inter, Space_Grotesk } from "next/font/google";
import { BackgroundOrbits } from "@/components/background-orbits";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Kshitij Kapure | Senior Frontend Engineer",
  description:
    "Senior Frontend Engineer with 7+ years of experience building banking-grade frontends, micro frontends and performance-obsessed systems.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen bg-slate-950 text-slate-50">
        <BackgroundOrbits />
        <div className="pointer-events-none fixed inset-x-0 top-0 z-30 h-1 bg-gradient-to-r from-sky-500 via-emerald-400 to-fuchsia-500 opacity-70" />
        <Navbar />
        <div className="app-shell mx-auto max-w-6xl px-5 pt-24 pb-16 md:px-8">
          {children}
        </div>
      </body>
    </html>
  );
}