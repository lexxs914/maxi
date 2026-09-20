import { Heart, Code2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-slate-950/40 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 text-center flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
        <p className="flex items-center gap-1.5">
          <span>Proyecto estático con Next.js + React + Tailwind</span>
          <Heart className="w-4 h-4 text-amber-400 inline fill-amber-400/20" />
        </p>

        <div className="flex items-center gap-4 text-xs font-mono text-slate-500">
          <span className="flex items-center gap-1">
            <Code2 className="w-3.5 h-3.5 text-amber-400" />
            TypeScript Enabled
          </span>
          <span>•</span>
          <span>Next Router (App Directory)</span>
        </div>
      </div>
    </footer>
  );
}
