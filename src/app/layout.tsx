// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import { Inter, Space_Grotesk } from "next/font/google";

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
    "Senior Frontend Engineer building banking-grade frontends, micro frontends, and performant systems across fintech, energy, and banking.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen bg-slate-950 text-slate-50">
        <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12)_0,transparent_55%),radial-gradient(circle_at_bottom,_rgba(16,185,129,0.10)_0,transparent_55%),linear-gradient(to_bottom,#020617,#020617)]" />
        <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_1px_1px,#020617_1px,transparent_0)] bg-[length:42px_42px] opacity-[0.13]" />
        <main className="mx-auto max-w-6xl px-5 pb-16 pt-10 md:px-8 md:pt-14">
          {children}
        </main>
      </body>
    </html>
  );
}