"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import PetalTrail from "@/components/PetalTrail";

const PHRASES = ["te quiero", "te quiero mucho", "te amo"];

interface ActiveAnim {
  type: 1 | 2 | 3;
  phrase: string;
  id: number;
}

export default function FloresAmarillasPage() {
  const [activeAnim, setActiveAnim] = useState<ActiveAnim | null>(null);

  // Animación 1: Posiciones Random
  const [randomItems, setRandomItems] = useState<
    Array<{ id: number; x: number; y: number; rotate: number; scale: number; color: string }>
  >([]);

  // Animación 3: Repetición de última letra
  const [repeatingText, setRepeatingText] = useState<string>("");

  // Función para disparar una animación aleatoria al hacer click en cualquier flor
  const handleFlowerClick = () => {
    if (activeAnim) return; // Si hay una animación activa de 5-7s, esperar a que termine

    const phrase = PHRASES[Math.floor(Math.random() * PHRASES.length)];
    const type = (Math.floor(Math.random() * 3) + 1) as 1 | 2 | 3;
    const id = Date.now();

    setActiveAnim({ type, phrase, id });

    // Configurar estados de cada animación
    if (type === 1) {
      // Generar 28 frases en lugares aleatorios
      const items = Array.from({ length: 28 }).map((_, i) => ({
        id: i,
        x: Math.floor(Math.random() * 80) + 5, // 5% a 85%
        y: Math.floor(Math.random() * 80) + 10, // 10% a 90%
        rotate: Math.floor(Math.random() * 40) - 20,
        scale: Math.random() * 0.7 + 0.9,
        color: i % 2 === 0 ? "#FFC000" : "#FF8400",
      }));
      setRandomItems(items);
    } else if (type === 3) {
      setRepeatingText(phrase);
    }

    // Terminar animación automáticamente tras 6 segundos
    setTimeout(() => {
      setActiveAnim(null);
      setRandomItems([]);
      setRepeatingText("");
    }, 6000);
  };

  // Efecto para la Animación 3: Repetir la última letra en tiempo real
  useEffect(() => {
    if (!activeAnim || activeAnim.type !== 3) return;

    const lastChar = activeAnim.phrase.slice(-1);
    const interval = setInterval(() => {
      setRepeatingText((prev) => {
        if (prev.length > 180) return prev; // Límite máximo antes de salirse completamente
        return prev + lastChar;
      });
    }, 45); // Se repite rápidamente cada 45ms

    return () => clearInterval(interval);
  }, [activeAnim]);

  return (
    <div className="min-h-screen bg-[#F7F7F7] text-[#171D1C] flex flex-col font-sans relative overflow-hidden select-none">
      
      {/* Rastro de pétalos amarillos en el cursor del mouse */}
      <PetalTrail />

      {/* ------------------------------------------------------------- */}
      {/* HEADER: Botón bien en la esquina e Ícono + Título centrados    */}
      {/* ------------------------------------------------------------- */}
      <header className="w-full bg-[#FFC000] border-b-2 border-[#171D1C] px-3 sm:px-6 py-3 relative z-40 shadow-sm h-14 sm:h-16 flex items-center">
        
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
            width={32}
            height={32}
            className="w-8 h-8 object-contain"
          />
          <span>Flores Amarillas</span>
        </div>
      </header>

      {/* ------------------------------------------------------------- */}
      {/* CAPA DE FLORES INTERACTIVAS (Hover se agranda y no desaparece) */}
      {/* ------------------------------------------------------------- */}
      <div className="fixed inset-0 z-20 overflow-hidden w-full h-full pointer-events-none">
        
        {/* Helper renderizador de flor interactiva */}
        {[
          { pos: "top-4 left-6", anim: "animate-peek-top", delay: "0s", img: "/flowers/1.png" },
          { pos: "top-4 left-1/3", anim: "animate-peek-top", delay: "2.2s", img: "/flowers/2.png" },
          { pos: "top-4 right-1/4", anim: "animate-peek-top", delay: "4.1s", img: "/flowers/3.png" },
          { pos: "top-4 right-6", anim: "animate-peek-top", delay: "1.4s", img: "/flowers/4.png" },
          
          { pos: "top-1/5 left-4", anim: "animate-peek-left", delay: "0.8s", img: "/flowers/5.png" },
          { pos: "top-1/2 left-4", anim: "animate-peek-left", delay: "3.2s", img: "/flowers/1.png" },
          { pos: "top-3/4 left-4", anim: "animate-peek-left", delay: "5.5s", img: "/flowers/2.png" },

          { pos: "top-1/4 right-4", anim: "animate-peek-right", delay: "2.7s", img: "/flowers/3.png" },
          { pos: "top-3/5 right-4", anim: "animate-peek-right", delay: "0.4s", img: "/flowers/4.png" },
          { pos: "top-4/5 right-4", anim: "animate-peek-right", delay: "4.8s", img: "/flowers/5.png" },

          { pos: "bottom-4 left-8", anim: "animate-peek-bottom", delay: "1.8s", img: "/flowers/1.png" },
          { pos: "bottom-4 left-1/3", anim: "animate-peek-bottom", delay: "4.4s", img: "/flowers/2.png" },
          { pos: "bottom-4 right-1/3", anim: "animate-peek-bottom", delay: "0.5s", img: "/flowers/3.png" },
          { pos: "bottom-4 right-10", anim: "animate-peek-bottom", delay: "3.1s", img: "/flowers/4.png" },

          { pos: "top-1/6 left-1/5", anim: "animate-bloom-fade", delay: "0.3s", img: "/flowers/5.png" },
          { pos: "top-1/3 right-1/5", anim: "animate-bloom-fade", delay: "2.1s", img: "/flowers/1.png" },
          { pos: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2", anim: "animate-bloom-fade", delay: "1.2s", img: "/flowers/2.png" },
          { pos: "bottom-1/4 left-1/4", anim: "animate-bloom-fade", delay: "3.7s", img: "/flowers/3.png" },
          { pos: "bottom-1/5 right-1/3", anim: "animate-bloom-fade", delay: "5.0s", img: "/flowers/4.png" },
        ].map((item, index) => (
          <div
            key={index}
            className={`absolute ${item.pos} ${item.anim} pointer-events-auto cursor-pointer transition-all duration-300 hover:scale-150 hover:opacity-100 hover:z-50 [&:hover]:[animation-play-state:paused]`}
            style={{ animationDelay: item.delay }}
            onClick={handleFlowerClick}
            title="¡Haz clic en mí! 🌻"
          >
            <Image
              src={item.img}
              alt="Flor interactiva"
              width={64}
              height={64}
              className="w-14 h-14 sm:w-18 sm:h-18 object-contain drop-shadow-md active:scale-90 transition-transform"
            />
          </div>
        ))}

      </div>

      {/* ------------------------------------------------------------- */}
      {/* MONTAJE DE ANIMACIONES INTERACTIVAS DE 5-7 SEGUNDOS           */}
      {/* ------------------------------------------------------------- */}
      {activeAnim && (
        <div className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center overflow-hidden bg-black/10 backdrop-blur-[2px] animate-fade-in">
          
          {/* ANIMACIÓN 1: Frases en posiciones random llenando la pantalla */}
          {activeAnim.type === 1 && (
            <div className="w-full h-full relative">
              {randomItems.map((item) => (
                <div
                  key={item.id}
                  className="absolute px-4 py-2 rounded-2xl border-2 border-[#171D1C] font-extrabold text-sm sm:text-xl shadow-[3px_3px_0px_0px_#171D1C] animate-bounce-short"
                  style={{
                    left: `${item.x}%`,
                    top: `${item.y}%`,
                    transform: `rotate(${item.rotate}deg) scale(${item.scale})`,
                    backgroundColor: item.color,
                    color: "#171D1C",
                  }}
                >
                  {activeAnim.phrase.toUpperCase()} 💕
                </div>
              ))}
            </div>
          )}

          {/* ANIMACIÓN 2: Frase en el medio cubriendo pantalla + Explosión de corazones */}
          {activeAnim.type === 2 && (
            <div className="w-full h-full flex flex-col items-center justify-center relative">
              
              {/* Lluvia / Explosión de corazones */}
              {Array.from({ length: 45 }).map((_, i) => {
                const angle = (i / 45) * 360;
                const dist = Math.floor(Math.random() * 250) + 120;
                const dx = Math.cos((angle * Math.PI) / 180) * dist;
                const dy = Math.sin((angle * Math.PI) / 180) * dist;
                return (
                  <div
                    key={i}
                    className="absolute text-2xl sm:text-4xl animate-explode-heart"
                    style={{
                      left: "50%",
                      top: "50%",
                      transform: `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px)) scale(${Math.random() * 0.8 + 0.8})`,
                      transitionDuration: `${Math.random() * 1.5 + 1.5}s`,
                    }}
                  >
                    {i % 2 === 0 ? "❤️" : "💛"}
                  </div>
                );
              })}

              {/* Cartel Gigante Centrado */}
              <div className="z-10 bg-[#FFC000] border-4 border-[#171D1C] px-8 py-6 rounded-3xl shadow-[8px_8px_0px_0px_#171D1C] text-center max-w-lg mx-4 transform animate-pop-in">
                <span className="text-3xl sm:text-6xl font-black uppercase text-[#171D1C] tracking-wide block mb-2">
                  ¡{activeAnim.phrase}!
                </span>
                <span className="text-xl sm:text-3xl font-extrabold text-[#FF8400] drop-shadow-sm">
                  🌻 ❤️ 🌻
                </span>
              </div>
            </div>
          )}

          {/* ANIMACIÓN 3: Frase con la última letra repitiéndose en tiempo real hasta salirse */}
          {activeAnim.type === 3 && (
            <div className="w-full h-full flex items-center justify-center px-4 overflow-hidden">
              <div className="bg-[#FF8400] border-4 border-[#171D1C] px-6 py-4 rounded-3xl shadow-[8px_8px_0px_0px_#171D1C] text-center max-w-full">
                <span className="text-2xl sm:text-5xl font-black uppercase text-[#F7F7F7] tracking-widest whitespace-nowrap block drop-shadow-md">
                  {repeatingText}...
                </span>
              </div>
            </div>
          )}

        </div>
      )}

      {/* Página vacía (solo fondo animado y header) */}
      <main className="flex-1 w-full" />
    </div>
  );
}
