import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import PetalTrail from "@/components/PetalTrail";

export default function FloresAmarillasPage() {
  return (
    <div className="min-h-screen bg-[#F7F7F7] text-[#171D1C] flex flex-col font-sans relative overflow-hidden">
      
      {/* Rastro de pétalos amarillos en el cursor del mouse */}
      <PetalTrail />

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

        {/* Título e Ícono de flor centrados horizontalmente */}
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex items-center gap-2 font-extrabold text-base sm:text-xl text-[#171D1C] pointer-events-none whitespace-nowrap z-10">
          <Image
            src="/flowers/1.png"
            alt="Flor Amarilla"
            width={28}
            height={28}
            className="w-7 h-7 object-contain"
          />
          <span>Flores Amarillas</span>
        </div>
      </header>

      {/* ------------------------------------------------------------- */}
      {/* CAPA DE FLORES EN TODO EL VIEWPORT (Fixed Inset-0)              */}
      {/* Flores más pequeñas (w-12 a w-16) y frecuentes en toda la pantalla */}
      {/* ------------------------------------------------------------- */}
      <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden w-full h-full">
        
        {/* --- Bordes Superiores --- */}
        <div className="absolute top-0 left-4 animate-peek-top" style={{ animationDelay: "0s" }}>
          <Image src="/flowers/1.png" alt="Flor 1" width={56} height={56} className="w-12 h-12 sm:w-14 sm:h-14 object-contain" />
        </div>
        <div className="absolute top-0 left-1/3 animate-peek-top" style={{ animationDelay: "2.2s" }}>
          <Image src="/flowers/2.png" alt="Flor 2" width={60} height={60} className="w-14 h-14 sm:w-16 sm:h-16 object-contain" />
        </div>
        <div className="absolute top-0 right-1/4 animate-peek-top" style={{ animationDelay: "4.1s" }}>
          <Image src="/flowers/3.png" alt="Flor 3" width={52} height={52} className="w-12 h-12 sm:w-14 sm:h-14 object-contain" />
        </div>
        <div className="absolute top-0 right-6 animate-peek-top" style={{ animationDelay: "1.4s" }}>
          <Image src="/flowers/4.png" alt="Flor 4" width={64} height={64} className="w-14 h-14 sm:w-16 sm:h-16 object-contain" />
        </div>

        {/* --- Bordes Laterales Izquierdos --- */}
        <div className="absolute top-1/5 left-0 animate-peek-left" style={{ animationDelay: "0.8s" }}>
          <Image src="/flowers/5.png" alt="Flor 5" width={56} height={56} className="w-12 h-12 sm:w-14 sm:h-14 object-contain" />
        </div>
        <div className="absolute top-1/2 left-0 animate-peek-left" style={{ animationDelay: "3.2s" }}>
          <Image src="/flowers/1.png" alt="Flor 1" width={64} height={64} className="w-14 h-14 sm:w-16 sm:h-16 object-contain" />
        </div>
        <div className="absolute top-3/4 left-0 animate-peek-left" style={{ animationDelay: "5.5s" }}>
          <Image src="/flowers/2.png" alt="Flor 2" width={52} height={52} className="w-12 h-12 sm:w-14 sm:h-14 object-contain" />
        </div>

        {/* --- Bordes Laterales Derechos --- */}
        <div className="absolute top-1/4 right-0 animate-peek-right" style={{ animationDelay: "2.7s" }}>
          <Image src="/flowers/3.png" alt="Flor 3" width={60} height={60} className="w-14 h-14 sm:w-16 sm:h-16 object-contain" />
        </div>
        <div className="absolute top-3/5 right-0 animate-peek-right" style={{ animationDelay: "0.4s" }}>
          <Image src="/flowers/4.png" alt="Flor 4" width={56} height={56} className="w-12 h-12 sm:w-14 sm:h-14 object-contain" />
        </div>
        <div className="absolute top-4/5 right-0 animate-peek-right" style={{ animationDelay: "4.8s" }}>
          <Image src="/flowers/5.png" alt="Flor 5" width={64} height={64} className="w-14 h-14 sm:w-16 sm:h-16 object-contain" />
        </div>

        {/* --- Bordes Inferiores --- */}
        <div className="absolute bottom-0 left-8 animate-peek-bottom" style={{ animationDelay: "1.8s" }}>
          <Image src="/flowers/1.png" alt="Flor 1" width={60} height={60} className="w-14 h-14 sm:w-16 sm:h-16 object-contain" />
        </div>
        <div className="absolute bottom-0 left-1/3 animate-peek-bottom" style={{ animationDelay: "4.4s" }}>
          <Image src="/flowers/2.png" alt="Flor 2" width={52} height={52} className="w-12 h-12 sm:w-14 sm:h-14 object-contain" />
        </div>
        <div className="absolute bottom-0 right-1/3 animate-peek-bottom" style={{ animationDelay: "0.5s" }}>
          <Image src="/flowers/3.png" alt="Flor 3" width={64} height={64} className="w-14 h-14 sm:w-16 sm:h-16 object-contain" />
        </div>
        <div className="absolute bottom-0 right-10 animate-peek-bottom" style={{ animationDelay: "3.1s" }}>
          <Image src="/flowers/4.png" alt="Flor 4" width={56} height={56} className="w-12 h-12 sm:w-14 sm:h-14 object-contain" />
        </div>

        {/* --- Flores en el fondo (Blooming & Closing en pantalla) --- */}
        <div className="absolute top-1/6 left-1/5 animate-bloom-fade" style={{ animationDelay: "0.3s" }}>
          <Image src="/flowers/5.png" alt="Flor 5" width={60} height={60} className="w-14 h-14 sm:w-16 sm:h-16 object-contain" />
        </div>
        <div className="absolute top-1/3 right-1/5 animate-bloom-fade" style={{ animationDelay: "2.1s" }}>
          <Image src="/flowers/1.png" alt="Flor 1" width={68} height={68} className="w-16 h-16 sm:w-18 sm:h-18 object-contain" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-bloom-fade" style={{ animationDelay: "1.2s" }}>
          <Image src="/flowers/2.png" alt="Flor 2" width={72} height={72} className="w-16 h-16 sm:w-20 sm:h-20 object-contain" />
        </div>
        <div className="absolute bottom-1/4 left-1/4 animate-bloom-fade" style={{ animationDelay: "3.7s" }}>
          <Image src="/flowers/3.png" alt="Flor 3" width={64} height={64} className="w-14 h-14 sm:w-16 sm:h-16 object-contain" />
        </div>
        <div className="absolute bottom-1/5 right-1/3 animate-bloom-fade" style={{ animationDelay: "5.0s" }}>
          <Image src="/flowers/4.png" alt="Flor 4" width={60} height={60} className="w-14 h-14 sm:w-16 sm:h-16 object-contain" />
        </div>

      </div>

      {/* Página vacía (solo fondo y header) */}
      <main className="flex-1 w-full" />
    </div>
  );
}
