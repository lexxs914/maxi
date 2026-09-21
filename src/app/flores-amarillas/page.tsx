"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import PetalTrail from "@/components/PetalTrail";

const PHRASES = ["te quiero", "te quiero mucho", "te amo"];
const ANIM_CYCLE: Array<1 | 2 | 3 | 4> = [1, 2, 3, 4];

interface ActiveAnim {
  type: 1 | 2 | 3 | 4;
  phrase: string;
  id: number;
}

interface RandomItem {
  id: number;
  x: number;
  y: number;
  rotate: number;
  scale: number;
}

interface FlyingHeart {
  id: number;
  dx: number;
  dy: number;
  size: number;
  color: string;
}

export default function FloresAmarillasPage() {
  const [activeAnim, setActiveAnim] = useState<ActiveAnim | null>(null);
  
  // Ciclo secuencial de 4 animaciones (1 -> 2 -> 3 -> 4 -> 1...)
  const [cycleIndex, setCycleIndex] = useState<number>(0);

  // Animación 1: Textos apareciendo uno a uno
  const [randomItems, setRandomItems] = useState<RandomItem[]>([]);

  // Animación 2: Explosión inicial de corazones
  const [flyingHearts, setFlyingHearts] = useState<FlyingHeart[]>([]);

  // Animación 3: Repetición de última letra
  const [repeatingText, setRepeatingText] = useState<string>("");

  // Animación 4: Flujo continuo e incesante de corazones desde el centro
  const [continuousHearts, setContinuousHearts] = useState<FlyingHeart[]>([]);

  // Clic en cualquier flor
  const handleFlowerClick = () => {
    if (activeAnim) return;

    const phrase = PHRASES[Math.floor(Math.random() * PHRASES.length)].toLowerCase();
    const type = ANIM_CYCLE[cycleIndex];
    setCycleIndex((prev) => (prev + 1) % ANIM_CYCLE.length);

    const id = Date.now();

    setActiveAnim({ type, phrase, id });
    setRandomItems([]);
    setFlyingHearts([]);
    setRepeatingText("");
    setContinuousHearts([]);

    if (type === 2) {
      const hearts: FlyingHeart[] = Array.from({ length: 50 }).map((_, i) => {
        const angle = Math.random() * Math.PI * 2;
        const dist = Math.floor(Math.random() * 400) + 200;
        return {
          id: i,
          dx: Math.cos(angle) * dist,
          dy: Math.sin(angle) * dist,
          size: Math.floor(Math.random() * 16) + 24,
          color: i % 2 === 0 ? "#FC5A8D" : "#FFC000",
        };
      });
      setFlyingHearts(hearts);
    } else if (type === 3) {
      setRepeatingText(phrase);
    }

    setTimeout(() => {
      setActiveAnim(null);
      setRandomItems([]);
      setFlyingHearts([]);
      setRepeatingText("");
      setContinuousHearts([]);
    }, 5000);
  };

  // Efecto Animación 1: Aparecen uno a uno (38 frases)
  useEffect(() => {
    if (!activeAnim || activeAnim.type !== 1) return;

    let count = 0;
    const interval = setInterval(() => {
      if (count >= 38) {
        clearInterval(interval);
        return;
      }
      count++;
      setRandomItems((prev) => [
        ...prev,
        {
          id: Date.now() + Math.random(),
          x: Math.floor(Math.random() * 75) + 5,
          y: Math.floor(Math.random() * 80) + 10,
          rotate: Math.floor(Math.random() * 24) - 12,
          scale: Math.random() * 0.4 + 0.9,
        },
      ]);
    }, 60);

    return () => clearInterval(interval);
  }, [activeAnim]);

  // Efecto Animación 3: Repetición en tiempo real de la última letra
  useEffect(() => {
    if (!activeAnim || activeAnim.type !== 3) return;

    const lastChar = activeAnim.phrase.slice(-1);
    const interval = setInterval(() => {
      setRepeatingText((prev) => {
        if (prev.length > 150) return prev;
        return prev + lastChar;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [activeAnim]);

  // Efecto Animación 4: Flujo continuo de corazones saliendo del centro hacia los bordes
  useEffect(() => {
    if (!activeAnim || activeAnim.type !== 4) return;

    const interval = setInterval(() => {
      const newHearts: FlyingHeart[] = Array.from({ length: 2 }).map(() => {
        const angle = Math.random() * Math.PI * 2;
        const dist = Math.floor(Math.random() * 450) + 250;
        return {
          id: Date.now() + Math.random(),
          dx: Math.cos(angle) * dist,
          dy: Math.sin(angle) * dist,
          size: Math.floor(Math.random() * 16) + 24,
          color: Math.random() > 0.5 ? "#FC5A8D" : "#FFC000",
        };
      });

      setContinuousHearts((prev) => [...prev.slice(-60), ...newHearts]);
    }, 60);

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
            priority
          />
          <span>Flores Amarillas</span>
        </div>
      </header>

      {/* ------------------------------------------------------------- */}
      {/* CAPA DE FLORES INTERACTIVAS (Hover se agranda y no desaparece) */}
      {/* ------------------------------------------------------------- */}
      <div className="fixed inset-0 z-20 overflow-hidden w-full h-full pointer-events-none">
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
            title="¡Haz clic en mí!"
          >
            <Image
              src={item.img}
              alt="Flor interactiva"
              width={64}
              height={64}
              className="w-14 h-14 sm:w-18 sm:h-18 object-contain drop-shadow-md active:scale-90 transition-transform"
              priority={index < 5}
              loading={index < 5 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>

      {/* ------------------------------------------------------------- */}
      {/* MONTAJE DE ANIMACIONES DE 5s (Con Fondo Oscuro + Blur debajo)  */}
      {/* ------------------------------------------------------------- */}
      {activeAnim && (
        <div className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center overflow-hidden bg-black/30 backdrop-blur-md animate-fade-in">
          
          {/* ANIMACIÓN 1: 38 frases en minúscula que aparecen UNA A UNA */}
          {activeAnim.type === 1 && (
            <div className="w-full h-full relative">
              {randomItems.map((item) => (
                <div
                  key={item.id}
                  className="absolute font-extrabold text-base sm:text-3xl text-[#171D1C] tracking-wide whitespace-nowrap animate-pop-in drop-shadow-sm"
                  style={{
                    left: `${item.x}%`,
                    top: `${item.y}%`,
                    transform: `rotate(${item.rotate}deg) scale(${item.scale})`,
                  }}
                >
                  {activeAnim.phrase}
                </div>
              ))}
            </div>
          )}

          {/* ANIMACIÓN 2: Explosión inicial de corazones desde el centro */}
          {activeAnim.type === 2 && (
            <div className="w-full h-full flex items-center justify-center relative">
              {flyingHearts.map((heart) => (
                <div
                  key={heart.id}
                  className="absolute animate-heart-fly"
                  style={
                    {
                      left: "50%",
                      top: "50%",
                      "--dx": `${heart.dx}px`,
                      "--dy": `${heart.dy}px`,
                      "--rot": `0deg`,
                    } as React.CSSProperties
                  }
                >
                  <svg
                    width={heart.size}
                    height={heart.size}
                    viewBox="0 0 24 24"
                    fill={heart.color}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </div>
              ))}

              <div className="z-20 text-[#171D1C] text-4xl sm:text-7xl font-extrabold tracking-tight text-center animate-pop-in drop-shadow-sm">
                {activeAnim.phrase}
              </div>
            </div>
          )}

          {/* ANIMACIÓN 3: Frase chiquita en el medio con la última letra repitiéndose */}
          {activeAnim.type === 3 && (
            <div className="w-full h-full flex items-center justify-center px-4 overflow-hidden">
              <span className="text-[#171D1C] text-3xl sm:text-6xl font-extrabold tracking-widest whitespace-nowrap text-center drop-shadow-sm">
                {repeatingText}
              </span>
            </div>
          )}

          {/* ANIMACIÓN 4: Flujo continuo e incesante de corazones volando hacia los bordes */}
          {activeAnim.type === 4 && (
            <div className="w-full h-full flex items-center justify-center relative">
              {continuousHearts.map((heart) => (
                <div
                  key={heart.id}
                  className="absolute animate-heart-fly-fast"
                  style={
                    {
                      left: "50%",
                      top: "50%",
                      "--dx": `${heart.dx}px`,
                      "--dy": `${heart.dy}px`,
                    } as React.CSSProperties
                  }
                >
                  <svg
                    width={heart.size}
                    height={heart.size}
                    viewBox="0 0 24 24"
                    fill={heart.color}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </div>
              ))}

              <div className="z-20 text-[#171D1C] text-4xl sm:text-7xl font-extrabold tracking-tight text-center animate-pop-in drop-shadow-sm">
                {activeAnim.phrase}
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
