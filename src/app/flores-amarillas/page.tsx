import Link from "next/link";
import { ArrowLeft, Sun } from "lucide-react";

// ===================================================================
// FLORES VECTORIALES DETALLADAS (SVG)
// ===================================================================

// 1. Margaritas / Flores de Pétalos Suaves en Capas (#FFC000, #FFD700, #FF8400)
function BeautifulDaisy({ size = 64, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`overflow-visible ${className}`}
    >
      <defs>
        <radialGradient id="daisyCenterGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFC000" />
          <stop offset="70%" stopColor="#FF8400" />
          <stop offset="100%" stopColor="#D97706" />
        </radialGradient>
        <linearGradient id="petalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF7ED" />
          <stop offset="35%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#FFC000" />
        </linearGradient>
      </defs>
      
      {/* Capa de Pétalos Posteriores (12 pétalos girados) */}
      <g stroke="#171D1C" strokeWidth="2.5" strokeLinejoin="round">
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
          <path
            key={`p1-${deg}`}
            d="M60 60 C52 30, 48 10, 60 6 C72 10, 68 30, 60 60 Z"
            fill="url(#petalGrad)"
            transform={`rotate(${deg} 60 60)`}
          />
        ))}
      </g>

      {/* Capa de Pétalos Frontales Intermedios (gira 15 grados) */}
      <g stroke="#171D1C" strokeWidth="2" opacity="0.95">
        {[15, 45, 75, 105, 135, 165, 195, 225, 255, 285, 315, 345].map((deg) => (
          <path
            key={`p2-${deg}`}
            d="M60 60 C55 36, 52 20, 60 16 C68 20, 65 36, 60 60 Z"
            fill="#FFC000"
            transform={`rotate(${deg} 60 60)`}
          />
        ))}
      </g>

      {/* Centro Botánico de la Flor */}
      <circle cx="60" cy="60" r="21" fill="url(#daisyCenterGrad)" stroke="#171D1C" strokeWidth="3" />
      <circle cx="60" cy="60" r="14" fill="#FF8400" stroke="#171D1C" strokeWidth="1.5" opacity="0.6" strokeDasharray="3 3" />
      <circle cx="56" cy="54" r="4" fill="#FFF7ED" opacity="0.5" />
    </svg>
  );
}

// 2. Girasol Vectorial Elegante (#FFC000 y #FF8400)
function BeautifulSunflower({ size = 72, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`overflow-visible ${className}`}
    >
      <defs>
        <radialGradient id="sunCenter" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#B45309" />
          <stop offset="60%" stopColor="#78350F" />
          <stop offset="100%" stopColor="#171D1C" />
        </radialGradient>
      </defs>

      {/* Hojas verdes inferiores decorativas */}
      <path d="M60 60 L15 90 C5 75 10 50 40 55 Z" fill="#15803D" stroke="#171D1C" strokeWidth="2.5" />
      <path d="M60 60 L105 90 C115 75 110 50 80 55 Z" fill="#15803D" stroke="#171D1C" strokeWidth="2.5" />

      {/* Pétalos puntiagudos del girasol */}
      <g stroke="#171D1C" strokeWidth="2.5">
        {[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5].map((deg) => (
          <path
            key={`sun-${deg}`}
            d="M60 60 Q50 30 60 5 Q70 30 60 60 Z"
            fill="#FFC000"
            transform={`rotate(${deg} 60 60)`}
          />
        ))}
      </g>

      {/* Corona interior de pétalos pequeños (#FF8400) */}
      <g stroke="#171D1C" strokeWidth="1.5">
        {[11.25, 33.75, 56.25, 78.75, 101.25, 123.75, 146.25, 168.75, 191.25, 213.75, 236.25, 258.75, 281.25, 303.75, 326.25, 348.75].map((deg) => (
          <path
            key={`sun-inner-${deg}`}
            d="M60 60 Q54 38 60 22 Q66 38 60 60 Z"
            fill="#FF8400"
            transform={`rotate(${deg} 60 60)`}
          />
        ))}
      </g>

      {/* Gran centro del girasol */}
      <circle cx="60" cy="60" r="26" fill="url(#sunCenter)" stroke="#171D1C" strokeWidth="3" />
      <circle cx="60" cy="60" r="18" fill="none" stroke="#FFC000" strokeWidth="2" strokeDasharray="4 3" opacity="0.7" />
    </svg>
  );
}

// 3. Rosa Amarilla de Pétalos Curvos
function BeautifulRose({ size = 64, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`overflow-visible ${className}`}
    >
      <g stroke="#171D1C" strokeWidth="2.5" strokeLinejoin="round">
        {/* Pétalos exteriores suaves */}
        <path d="M60 15 C30 15 10 40 20 70 C30 100 90 100 100 70 C110 40 90 15 60 15 Z" fill="#FFC000" />
        <path d="M35 30 C15 55 35 90 60 95 C85 90 105 55 85 30 C65 25 55 25 35 30 Z" fill="#FFD700" />
        {/* Espiral central de la rosa */}
        <path d="M45 45 C35 60 50 80 65 75 C80 70 80 50 65 45 C50 40 45 55 60 60" fill="#FF8400" />
        <circle cx="60" cy="55" r="8" fill="#FFF7ED" opacity="0.4" />
      </g>
    </svg>
  );
}

export default function FloresAmarillasPage() {
  return (
    <div className="min-h-screen bg-[#F7F7F7] text-[#171D1C] flex flex-col font-sans relative overflow-hidden">
      
      {/* ------------------------------------------------------------- */}
      {/* CAPA DE FLORES VECTORIALES ANIMADAS EN EL FONDO Y BORDES       */}
      {/* (Sin deambular: solo asomarse desde bordes o abrirse/cerrarse) */}
      {/* ------------------------------------------------------------- */}

      {/* 1. Asomándose desde el borde superior (Izquierda) */}
      <div className="absolute top-0 left-6 z-10 pointer-events-none animate-peek-top">
        <BeautifulDaisy size={76} />
      </div>

      {/* 2. Asomándose desde el borde superior (Derecha) */}
      <div className="absolute top-0 right-10 z-10 pointer-events-none animate-peek-top" style={{ animationDelay: "3.5s" }}>
        <BeautifulSunflower size={84} />
      </div>

      {/* 3. Asomándose desde el borde lateral izquierdo */}
      <div className="absolute top-1/3 left-0 z-10 pointer-events-none animate-peek-left" style={{ animationDelay: "1.5s" }}>
        <BeautifulRose size={80} />
      </div>

      {/* 4. Asomándose desde el borde lateral derecho */}
      <div className="absolute top-1/2 right-0 z-10 pointer-events-none animate-peek-right" style={{ animationDelay: "4.5s" }}>
        <BeautifulDaisy size={88} />
      </div>

      {/* 5. Asomándose desde el borde inferior (Izquierda) */}
      <div className="absolute bottom-0 left-12 z-10 pointer-events-none animate-peek-bottom" style={{ animationDelay: "2s" }}>
        <BeautifulSunflower size={92} />
      </div>

      {/* 6. Asomándose desde el borde inferior (Derecha) */}
      <div className="absolute bottom-0 right-14 z-10 pointer-events-none animate-peek-bottom" style={{ animationDelay: "5s" }}>
        <BeautifulRose size={78} />
      </div>

      {/* 7. Flor abriéndose y cerrándose en punto fijo aleatorio del fondo (Izquierda arriba) */}
      <div className="absolute top-24 left-1/4 z-0 pointer-events-none animate-bloom-fade" style={{ animationDelay: "0.8s" }}>
        <BeautifulDaisy size={96} />
      </div>

      {/* 8. Flor abriéndose y cerrándose en punto fijo aleatorio del fondo (Derecha abajo) */}
      <div className="absolute bottom-28 right-1/4 z-0 pointer-events-none animate-bloom-fade" style={{ animationDelay: "4s" }}>
        <BeautifulSunflower size={100} />
      </div>

      {/* 9. Flor abriéndose y cerrándose en punto fijo aleatorio del fondo (Centro superior) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none animate-bloom-fade" style={{ animationDelay: "2.8s" }}>
        <BeautifulRose size={110} />
      </div>


      {/* ------------------------------------------------------------- */}
      {/* HEADER: Título perfectamente centrado y botón al borde        */}
      {/* ------------------------------------------------------------- */}
      <header className="w-full bg-[#FFC000] border-b-2 border-[#171D1C] px-4 py-3 sm:px-6 relative z-30 shadow-sm">
        <div className="max-w-4xl mx-auto flex items-center justify-between relative min-h-[44px]">
          
          {/* Botón de volver situado al borde izquierdo */}
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#F7F7F7] text-[#171D1C] font-bold text-xs sm:text-sm border-2 border-[#171D1C] shadow-[2px_2px_0px_0px_#171D1C] hover:bg-[#FF8400] hover:text-[#F7F7F7] transition-all z-20"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver al Inicio</span>
          </Link>

          {/* Título horizontalmente centrado en el medio exacto del header */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 font-extrabold text-base sm:text-xl text-[#171D1C] pointer-events-none whitespace-nowrap z-10">
            <BeautifulDaisy size={30} />
            <span>Flores Amarillas</span>
          </div>

          {/* Div fantasma a la derecha para equilibrar espacio en flex si es necesario */}
          <div className="w-10 sm:w-24 opacity-0 pointer-events-none" />
        </div>
      </header>

      {/* ------------------------------------------------------------- */}
      {/* CONTENIDO PRINCIPAL (Modo claro y Mobile First)                */}
      {/* (Cartel de regalar flores quitado como fue solicitado)        */}
      {/* ------------------------------------------------------------- */}
      <main className="flex-1 w-full max-w-xl mx-auto px-4 py-8 sm:py-12 flex flex-col justify-center relative z-20">
        
        {/* Tarjeta Contenedora Principal */}
        <div className="bg-[#F7F7F7] border-2 border-[#171D1C] rounded-3xl p-6 sm:p-10 text-center shadow-[6px_6px_0px_0px_#171D1C] relative">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FF8400]/20 border border-[#171D1C] text-xs font-bold text-[#171D1C] mb-6">
            <Sun className="w-4 h-4 text-[#FF8400]" />
            <span>Flores Amarillas</span>
          </div>

          {/* Flor vectorial destacada al centro */}
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-2xl bg-[#FFC000] border-2 border-[#171D1C] shadow-[4px_4px_0px_0px_#171D1C]">
              <BeautifulSunflower size={88} />
            </div>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-[#171D1C] mb-3">
            Flores <span className="text-[#FF8400]">Amarillas</span> 🌻
          </h1>

          <p className="text-xs sm:text-sm text-[#171D1C]/80 leading-relaxed max-w-md mx-auto">
            Las flores amarillas simbolizan la alegría, la luz del sol, el afecto y los momentos más especiales compartidos en pareja.
          </p>

        </div>

      </main>
    </div>
  );
}
