"use client";

import { useEffect, useState } from "react";

interface Petal {
  id: number;
  x: number;
  y: number;
  dx: number;
  dy: number;
  size: number;
  rotation: number;
  color: string;
}

export default function PetalTrail() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    let lastTime = 0;
    const colors = ["#FFD700", "#FFC000", "#FFE033", "#FFEB66", "#FFCE00"];

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastTime < 25) return;
      lastTime = now;

      const angle = Math.random() * Math.PI * 2;
      const distance = Math.floor(Math.random() * 35) + 25;
      const dx = Math.cos(angle) * distance;
      const dy = Math.sin(angle) * distance;

      const newPetal: Petal = {
        id: Math.random() + now,
        x: e.clientX,
        y: e.clientY,
        dx,
        dy,
        size: Math.floor(Math.random() * 16) + 24, // Doble de grande: 24px a 40px
        rotation: Math.floor(Math.random() * 360),
        color: colors[Math.floor(Math.random() * colors.length)],
      };

      setPetals((prev) => [...prev.slice(-25), newPetal]);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Limpieza automática tras los 320ms de la animación
  useEffect(() => {
    if (petals.length === 0) return;

    const timer = setTimeout(() => {
      setPetals((prev) => prev.slice(1));
    }, 320);

    return () => clearTimeout(timer);
  }, [petals]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute animate-particle-pop"
          style={
            {
              left: `${petal.x}px`,
              top: `${petal.y}px`,
              "--dx": `${petal.dx}px`,
              "--dy": `${petal.dy}px`,
              "--rot": `${petal.rotation}deg`,
            } as React.CSSProperties
          }
        >
          {/* Pétalo Dorado Sin Borde Negro */}
          <svg
            width={petal.size}
            height={petal.size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2 C6 7, 3 13, 5 18 C7 21, 12 22, 16 19 C20 15, 18 8, 12 2 Z"
              fill={petal.color}
            />
            <path
              d="M12 5 C10 9, 9 14, 11 18"
              stroke="#FFFFFF"
              strokeWidth="1"
              strokeLinecap="round"
              opacity="0.5"
            />
          </svg>
        </div>
      ))}
    </div>
  );
}
