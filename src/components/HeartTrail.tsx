"use client";

import { useEffect, useState } from "react";

interface HeartItem {
  id: number;
  x: number;
  y: number;
  dx: number;
  dy: number;
  size: number;
  rotation: number;
  color: string;
}

export default function HeartTrail() {
  const [hearts, setHearts] = useState<HeartItem[]>([]);

  useEffect(() => {
    let lastTime = 0;
    const colors = ["#FC5A8D", "#F786AA", "#FF4D6D", "#FF85A1", "#FF758F"];

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastTime < 25) return;
      lastTime = now;

      const angle = Math.random() * Math.PI * 2;
      // Desplazamiento más lento/suave hacia afuera (10px a 24px)
      const distance = Math.floor(Math.random() * 14) + 10;
      const dx = Math.cos(angle) * distance;
      const dy = Math.sin(angle) * distance;

      const newHeart: HeartItem = {
        id: Math.random() + now,
        x: e.clientX,
        y: e.clientY,
        dx,
        dy,
        size: Math.floor(Math.random() * 16) + 24, // Doble de grande: 24px a 40px
        rotation: Math.floor(Math.random() * 60) - 30,
        color: colors[Math.floor(Math.random() * colors.length)],
      };

      setHearts((prev) => [...prev.slice(-25), newHeart]);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Limpieza rápida para mantener la velocidad a la que desaparecen (320ms)
  useEffect(() => {
    if (hearts.length === 0) return;

    const timer = setTimeout(() => {
      setHearts((prev) => prev.slice(1));
    }, 320);

    return () => clearTimeout(timer);
  }, [hearts]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-particle-pop"
          style={
            {
              left: `${heart.x}px`,
              top: `${heart.y}px`,
              "--dx": `${heart.dx}px`,
              "--dy": `${heart.dy}px`,
              "--rot": `${heart.rotation}deg`,
            } as React.CSSProperties
          }
        >
          {/* Corazón Rosa Sin Borde - Doble de tamaño */}
          <svg
            width={heart.size}
            height={heart.size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              fill={heart.color}
            />
          </svg>
        </div>
      ))}
    </div>
  );
}
