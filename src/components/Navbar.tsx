"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Flower2, Home, Sparkles, Code2 } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="p-2 rounded-xl bg-gradient-to-tr from-amber-500/20 to-yellow-400/20 border border-amber-500/30 group-hover:border-amber-400 transition-all duration-300">
            <Sparkles className="w-5 h-5 text-amber-400 group-hover:rotate-12 transition-transform duration-300" />
          </div>
          <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-white via-slate-200 to-amber-200 bg-clip-text text-transparent">
            NextJS <span className="text-amber-400 font-extrabold">App</span>
          </span>
        </Link>

        {/* Navigation Links */}
        <nav className="flex items-center gap-1 sm:gap-2">
          <Link
            href="/"
            className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              pathname === "/"
                ? "bg-amber-500/15 text-amber-300 border border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.2)]"
                : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
            }`}
          >
            <Home className="w-4 h-4" />
            <span>Inicio</span>
          </Link>

          <Link
            href="/flores-amarillas"
            className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              pathname === "/flores-amarillas"
                ? "bg-amber-400/20 text-yellow-300 border border-amber-400/40 shadow-[0_0_20px_rgba(251,191,36,0.3)]"
                : "text-amber-400/80 hover:text-yellow-300 hover:bg-amber-500/10"
            }`}
          >
            <Flower2 className="w-4 h-4 text-amber-400 animate-pulse" />
            <span>Flores Amarillas</span>
          </Link>
        </nav>

        {/* Static Badge */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          <Code2 className="w-3.5 h-3.5" />
          <span>Static Export Ready</span>
        </div>
      </div>
    </header>
  );
}
