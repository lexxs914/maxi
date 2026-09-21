"use client";

import { useEffect, useState } from "react";

interface Petal {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
  color: string;
}

export default function PetalTrail() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    let lastTime = 0;
    const colors = ["#FFC000", "#FFD700", "#FF8400", "#FBBF24"];

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      // Generar un pétalo cada 40ms de movimiento del mouse
      if (now - lastTime < 40) return;
      lastTime = now;

      const newPetal: Petal = {
        id: Math.random() + now,
        x: e.clientX,
        y: e.clientY,
        size: Math.floor(Math.random() * 8) + 12, // Tamaño entre 12px y 20px
        rotation: Math.floor(Math.random() * 360),
        color: colors[Math.floor(Math.random() * colors.length)],
      };

      setPetals((prev) => [...prev.slice(-25), newPetal]); // Mantener máximo 25 pétalos
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Eliminar automáticamente pétalos antiguos
  useEffect(() => {
    if (petals.length === 0) return;

    const timer = setTimeout(() => {
      setPetals((prev) => prev.slice(1));
    }, 700);

    return () => clearTimeout(timer);
  }, [petals]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute -translate-x-1/2 -translate-y-1/2 transition-opacity duration-700 ease-out"
          style={{
            left: `${petal.x}px`,
            top: `${petal.y}px`,
            transform: `translate(-50%, -50%) rotate(${petal.rotation}deg)`,
            opacity: 0.85,
          }}
        >
          {/* Pétalo Vectorial SVG */}
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
              stroke="#171D1C"
              strokeWidth="1.2"
            />
            <path
              d="M12 5 C10 9, 9 14, 11 18"
              stroke="#171D1C"
              strokeWidth="0.8"
              strokeLinecap="round"
              opacity="0.4"
            />
          </svg>
        </div>
      ))}
    </div>
  );
}
