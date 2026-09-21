import Link from "next/link";
import { ArrowLeft, Heart } from "lucide-react";

export default function ContadorDiasPage() {
  return (
    <div className="min-h-screen bg-[#F7F7F7] text-[#171D1C] flex flex-col font-sans relative overflow-hidden select-none">

      {/* ------------------------------------------------------------- */}
      {/* HEADER: Botón bien en la esquina e Ícono + Título centrados    */}
      {/* ------------------------------------------------------------- */}
      <header className="w-full bg-[#FC5A8D] border-b-2 border-[#171D1C] px-3 sm:px-6 py-3 relative z-40 shadow-sm h-14 sm:h-16 flex items-center">

        {/* Botón bien en la esquina izquierda del header */}
        <Link
          href="/"
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#F7F7F7] text-[#171D1C] font-bold text-xs sm:text-sm border-2 border-[#171D1C] shadow-[2px_2px_0px_0px_#171D1C] hover:bg-[#F42244] hover:text-[#F7F7F7] transition-all z-20"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al Inicio</span>
        </Link>

        {/* Título e Ícono centrados horizontalmente */}
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex items-center gap-2 font-extrabold text-base sm:text-xl text-[#171D1C] pointer-events-none whitespace-nowrap z-10">
          <Heart className="w-6 h-6 sm:w-7 sm:h-7 fill-[#171D1C]" />
          <span>Contador de Días</span>
        </div>
      </header>

      {/* Contenido vacío */}
      <main className="flex-1 w-full" />
    </div>
  );
}
