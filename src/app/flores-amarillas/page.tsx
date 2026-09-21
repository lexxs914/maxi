"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Sparkles, Sun, Heart } from "lucide-react";

// Componente 1 de Flor Vectorial en SVG
function VectorFlower({ size = 48, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Pétalos en #FFC000 con bordes #171D1C */}
      <g>
        <ellipse cx="50" cy="20" rx="12" ry="20" fill="#FFC000" stroke="#171D1C" strokeWidth="2.5" />
        <ellipse cx="50" cy="80" rx="12" ry="20" fill="#FFC000" stroke="#171D1C" strokeWidth="2.5" />
        <ellipse cx="20" cy="50" rx="20" ry="12" fill="#FFC000" stroke="#171D1C" strokeWidth="2.5" />
        <ellipse cx="80" cy="50" rx="20" ry="12" fill="#FFC000" stroke="#171D1C" strokeWidth="2.5" />
        <ellipse cx="28.79" cy="28.79" rx="12" ry="20" transform="rotate(-45 28.79 28.79)" fill="#FFC000" stroke="#171D1C" strokeWidth="2.5" />
        <ellipse cx="71.21" cy="71.21" rx="12" ry="20" transform="rotate(-45 71.21 71.21)" fill="#FFC000" stroke="#171D1C" strokeWidth="2.5" />
        <ellipse cx="71.21" cy="28.79" rx="12" ry="20" transform="rotate(45 71.21 28.79)" fill="#FFC000" stroke="#171D1C" strokeWidth="2.5" />
        <ellipse cx="28.79" cy="71.21" rx="12" ry="20" transform="rotate(45 28.79 71.21)" fill="#FFC000" stroke="#171D1C" strokeWidth="2.5" />
      </g>
      {/* Centro en #FF8400 */}
      <circle cx="50" cy="50" r="16" fill="#FF8400" stroke="#171D1C" strokeWidth="3" />
      <circle cx="50" cy="50" r="8" fill="#FFC000" opacity="0.8" />
    </svg>
  );
}

// Componente 2 de Girasol / Flor Vectorial alternativa
function VectorSunflower({ size = 56, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M50 5 L56 35 L50 42 L44 35 Z" fill="#FFC000" stroke="#171D1C" strokeWidth="2.5" />
      <path d="M50 95 L56 65 L50 58 L44 65 Z" fill="#FFC000" stroke="#171D1C" strokeWidth="2.5" />
      <path d="M5 50 L35 56 L42 50 L35 44 Z" fill="#FFC000" stroke="#171D1C" strokeWidth="2.5" />
      <path d="M95 50 L65 56 L58 50 L65 44 Z" fill="#FFC000" stroke="#171D1C" strokeWidth="2.5" />
      
      <path d="M18.18 18.18 L39.39 39.39" stroke="#FFC000" strokeWidth="12" strokeLinecap="round" />
      <path d="M81.82 81.82 L60.61 60.61" stroke="#FFC000" strokeWidth="12" strokeLinecap="round" />
      <path d="M81.82 18.18 L60.61 39.39" stroke="#FFC000" strokeWidth="12" strokeLinecap="round" />
      <path d="M18.18 81.82 L39.39 60.61" stroke="#FFC000" strokeWidth="12" strokeLinecap="round" />
      
      <circle cx="50" cy="50" r="20" fill="#FF8400" stroke="#171D1C" strokeWidth="3" />
      <circle cx="50" cy="50" r="11" fill="#171D1C" opacity="0.15" />
    </svg>
  );
}

export default function FloresAmarillasPage() {
  const [givenCount, setGivenCount] = useState<number>(1);

  return (
    <div className="min-h-screen bg-[#F7F7F7] text-[#171D1C] flex flex-col font-sans relative overflow-hidden">
      
      {/* ------------------------------------------------------------- */}
      {/* CAPA DE FLORES VECTORIALES ANIMADAS (ENTRANDO/SALIENDO Y FONDO) */}
      {/* ------------------------------------------------------------- */}
      
      {/* Flor entrando/saliendo desde el borde superior */}
      <div className="absolute top-0 left-8 z-10 pointer-events-none animate-flower-edge-top">
        <VectorFlower size={64} />
      </div>
      
      <div className="absolute top-0 right-16 z-10 pointer-events-none animate-flower-edge-top" style={{ animationDelay: "3s" }}>
        <VectorSunflower size={52} />
      </div>

      {/* Flor cruzando horizontalmente de izquierda a derecha */}
      <div className="absolute top-1/4 left-0 z-0 pointer-events-none animate-flower-drift-left">
        <VectorFlower size={56} />
      </div>

      {/* Flor cruzando horizontalmente de derecha a izquierda */}
      <div className="absolute top-2/3 right-0 z-0 pointer-events-none animate-flower-drift-right" style={{ animationDelay: "4s" }}>
        <VectorSunflower size={60} />
      </div>

      {/* Flores apareciendo y desapareciendo en el fondo (pop & fade) */}
      <div className="absolute top-1/3 right-8 z-0 pointer-events-none animate-flower-pop-fade" style={{ animationDelay: "1s" }}>
        <VectorFlower size={72} />
      </div>

      <div className="absolute bottom-1/4 left-10 z-0 pointer-events-none animate-flower-pop-fade" style={{ animationDelay: "4.5s" }}>
        <VectorSunflower size={68} />
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 z-0 pointer-events-none animate-flower-pop-fade" style={{ animationDelay: "2.5s" }}>
        <VectorFlower size={80} />
      </div>

      {/* Flores entrando desde el borde inferior */}
      <div className="absolute bottom-0 right-12 z-10 pointer-events-none animate-flower-edge-bottom">
        <VectorSunflower size={70} />
      </div>

      <div className="absolute bottom-0 left-16 z-10 pointer-events-none animate-flower-edge-bottom" style={{ animationDelay: "5s" }}>
        <VectorFlower size={58} />
      </div>

      {/* ------------------------------------------------------------- */}
      {/* HEADER DEL COLOR PRINCIPAL (#FFC000)                           */}
      {/* ------------------------------------------------------------- */}
      <header className="w-full bg-[#FFC000] border-b-2 border-[#171D1C] px-4 py-4 sm:px-8 shadow-sm relative z-20">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#F7F7F7] text-[#171D1C] font-bold text-xs sm:text-sm border-2 border-[#171D1C] shadow-[2px_2px_0px_0px_#171D1C] hover:bg-[#FF8400] hover:text-[#F7F7F7] transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver al Inicio</span>
          </Link>

          <div className="flex items-center gap-2 font-extrabold text-base sm:text-xl text-[#171D1C]">
            <VectorFlower size={28} />
            <span>Flores Amarillas</span>
          </div>
        </div>
      </header>

      {/* ------------------------------------------------------------- */}
      {/* CONTENIDO PRINCIPAL (MOBILE FIRST)                             */}
      {/* ------------------------------------------------------------- */}
      <main className="flex-1 w-full max-w-xl mx-auto px-4 py-8 sm:py-12 flex flex-col justify-center relative z-20">
        
        {/* Tarjeta Central */}
        <div className="bg-[#F7F7F7] border-2 border-[#171D1C] rounded-3xl p-6 sm:p-10 text-center shadow-[6px_6px_0px_0px_#171D1C] relative">
          
          {/* Badge superior */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FF8400]/20 border border-[#171D1C] text-xs font-bold text-[#171D1C] mb-6">
            <Sun className="w-4 h-4 text-[#FF8400]" />
            <span>Detalle Especial</span>
          </div>

          {/* Flor central vectorial */}
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-2xl bg-[#FFC000] border-2 border-[#171D1C] shadow-[3px_3px_0px_0px_#171D1C]">
              <VectorSunflower size={72} />
            </div>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-[#171D1C] mb-3">
            Para Ti: <span className="text-[#FF8400]">Flores Amarillas</span> 🌻
          </h1>

          <p className="text-xs sm:text-sm text-[#171D1C]/80 leading-relaxed mb-8 max-w-md mx-auto">
            Las flores amarillas simbolizan la calidez del sol, la energía, la felicidad compartida y el cariño en momentos inolvidables.
          </p>

          {/* Tarjeta interactiva de regalo */}
          <div className="bg-[#FFC000]/20 border-2 border-[#171D1C] rounded-2xl p-5 mb-6 text-center">
            <div className="text-xs font-bold text-[#171D1C]/70 uppercase tracking-wider mb-1">
              Ramillete Regalado
            </div>
            <div className="text-3xl font-extrabold text-[#171D1C] mb-4 flex items-center justify-center gap-2">
              <span>{givenCount}</span>
              <span className="text-xl">{givenCount === 1 ? "Flor Amarilla 🌻" : "Flores Amarillas 🌻"}</span>
            </div>

            <button
              onClick={() => setGivenCount((prev) => prev + 1)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-[#171D1C] bg-[#FFC000] border-2 border-[#171D1C] shadow-[3px_3px_0px_0px_#171D1C] hover:bg-[#FF8400] hover:text-[#F7F7F7] active:translate-y-0.5 transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Regalar otra flor amarilla</span>
            </button>
          </div>

          {/* Mensaje de dedicación */}
          <div className="p-4 rounded-xl bg-[#F7F7F7] border-2 border-[#171D1C] text-xs sm:text-sm text-[#171D1C] flex items-center justify-center gap-2 font-medium">
            <Heart className="w-4 h-4 text-[#FF8400] fill-[#FF8400]" />
            <span>"Que tu día brille siempre como una flor amarilla."</span>
          </div>

        </div>

      </main>
    </div>
  );
}
