// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Inter, Space_Grotesk } from "next/font/google";
import { ReactNode } from "react";
import { Navbar } from "@/components/navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk"
});

export const metadata: Metadata = {
  title: "Kshitij Kapure | Senior Frontend Engineer",
  description:
    "Senior Frontend Engineer with 7+ years of experience in React, TypeScript, and micro frontends. Built banking-grade systems for Mashreq Bank and high-scale applications across fintech and energy.",
  metadataBase: new URL("https://kshitij.site"),
  openGraph: {
    title: "Kshitij Kapure | Senior Frontend Engineer",
    description:
      "Bank-grade frontend engineering, micro frontends, performance, and DX focused.",
    url: "https://kshitij.site",
    siteName: "kshitij.site"
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen bg-slate-950 text-slate-50">
        <div className="pointer-events-none fixed inset-x-0 top-0 z-30 h-1 bg-gradient-to-r from-sky-500 via-emerald-400 to-fuchsia-500 opacity-60" />
        <Navbar />
        <div className="mx-auto max-w-6xl px-5 pt-24 pb-16 md:px-8">
          {children}
        </div>
      </body>
    </html>
  );
}