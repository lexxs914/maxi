import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export default function FloresAmarillasPage() {
  return (
    <div className="min-h-screen bg-[#F7F7F7] text-[#171D1C] flex flex-col font-sans relative overflow-hidden">
      
      {/* ------------------------------------------------------------- */}
      {/* HEADER: Botón bien en la esquina e Ícono + Título centrados    */}
      {/* ------------------------------------------------------------- */}
      <header className="w-full bg-[#FFC000] border-b-2 border-[#171D1C] px-3 sm:px-6 py-3 relative z-30 shadow-sm h-14 sm:h-16 flex items-center">
        
        {/* Botón bien en la esquina izquierda del header */}
        <Link
          href="/"
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#F7F7F7] text-[#171D1C] font-bold text-xs sm:text-sm border-2 border-[#171D1C] shadow-[2px_2px_0px_0px_#171D1C] hover:bg-[#FF8400] hover:text-[#F7F7F7] transition-all z-20"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al Inicio</span>
        </Link>

        {/* Título e Ícono SVG perfectamente centrados en la pantalla */}
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex items-center gap-2 font-extrabold text-base sm:text-xl text-[#171D1C] pointer-events-none whitespace-nowrap z-10">
          <Image
            src="/flowers/daisy.svg"
            alt="Flor Amarilla"
            width={28}
            height={28}
            className="w-7 h-7 object-contain"
          />
          <span>Flores Amarillas</span>
        </div>
      </header>

      {/* ------------------------------------------------------------- */}
      {/* CAPA DE FLORES DESDE ARCHIVOS SVG (public/flowers/*.svg)        */}
      {/* Animaciones: Asomarse de bordes y Abrirse/Cerrarse en el fondo */}
      {/* ------------------------------------------------------------- */}
      <div className="flex-1 w-full relative z-10 pointer-events-none">
        
        {/* 1. Asomándose desde el borde superior (Izquierda) */}
        <div className="absolute top-0 left-6 z-10 animate-peek-top">
          <Image src="/flowers/daisy.svg" alt="Flor" width={76} height={76} className="w-16 h-16 sm:w-20 sm:h-20" />
        </div>

        {/* 2. Asomándose desde el borde superior (Derecha) */}
        <div className="absolute top-0 right-10 z-10 animate-peek-top" style={{ animationDelay: "3.5s" }}>
          <Image src="/flowers/sunflower.svg" alt="Girasol" width={84} height={84} className="w-20 h-20 sm:w-22 sm:h-22" />
        </div>

        {/* 3. Asomándose desde el borde lateral izquierdo */}
        <div className="absolute top-1/3 left-0 z-10 animate-peek-left" style={{ animationDelay: "1.5s" }}>
          <Image src="/flowers/rose.svg" alt="Rosa" width={80} height={80} className="w-18 h-18 sm:w-20 sm:h-20" />
        </div>

        {/* 4. Asomándose desde el borde lateral derecho */}
        <div className="absolute top-1/2 right-0 z-10 animate-peek-right" style={{ animationDelay: "4.5s" }}>
          <Image src="/flowers/daisy.svg" alt="Margarita" width={88} height={88} className="w-20 h-20 sm:w-22 sm:h-22" />
        </div>

        {/* 5. Asomándose desde el borde inferior (Izquierda) */}
        <div className="absolute bottom-0 left-12 z-10 animate-peek-bottom" style={{ animationDelay: "2s" }}>
          <Image src="/flowers/sunflower.svg" alt="Girasol" width={92} height={92} className="w-20 h-20 sm:w-24 sm:h-24" />
        </div>

        {/* 6. Asomándose desde el borde inferior (Derecha) */}
        <div className="absolute bottom-0 right-14 z-10 animate-peek-bottom" style={{ animationDelay: "5s" }}>
          <Image src="/flowers/rose.svg" alt="Rosa" width={78} height={78} className="w-18 h-18 sm:w-20 sm:h-20" />
        </div>

        {/* 7. Flor abriéndose y cerrándose en el fondo (Izquierda arriba) */}
        <div className="absolute top-24 left-1/4 z-0 animate-bloom-fade" style={{ animationDelay: "0.8s" }}>
          <Image src="/flowers/daisy.svg" alt="Margarita" width={96} height={96} className="w-20 h-20 sm:w-24 sm:h-24" />
        </div>

        {/* 8. Flor abriéndose y cerrándose en el fondo (Derecha abajo) */}
        <div className="absolute bottom-28 right-1/4 z-0 animate-bloom-fade" style={{ animationDelay: "4s" }}>
          <Image src="/flowers/sunflower.svg" alt="Girasol" width={100} height={100} className="w-22 h-22 sm:w-26 sm:h-26" />
        </div>

        {/* 9. Flor abriéndose y cerrándose en el fondo (Centro) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 animate-bloom-fade" style={{ animationDelay: "2.8s" }}>
          <Image src="/flowers/rose.svg" alt="Rosa" width={110} height={110} className="w-24 h-24 sm:w-28 sm:h-28" />
        </div>

      </div>

      {/* Página de Flores Amarillas vacía (solo fondo y header) */}
      <main className="flex-1 w-full" />
    </div>
  );
}
