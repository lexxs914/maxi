"use client";

import { useEffect, useState } from "react";

interface HeartItem {
  id: number;
  x: number;
  y: number;
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
      if (now - lastTime < 30) return;
      lastTime = now;

      const newHeart: HeartItem = {
        id: Math.random() + now,
        x: e.clientX,
        y: e.clientY,
        size: Math.floor(Math.random() * 8) + 12, // 12px a 20px
        rotation: Math.floor(Math.random() * 40) - 20,
        color: colors[Math.floor(Math.random() * colors.length)],
      };

      setHearts((prev) => [...prev.slice(-20), newHeart]);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Eliminar rápido los corazones para que sean efímeros
  useEffect(() => {
    if (hearts.length === 0) return;

    const timer = setTimeout(() => {
      setHearts((prev) => prev.slice(1));
    }, 400);

    return () => clearTimeout(timer);
  }, [hearts]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-400 ease-out opacity-0 scale-75"
          style={{
            left: `${heart.x}px`,
            top: `${heart.y}px`,
            transform: `translate(-50%, -50%) rotate(${heart.rotation}deg)`,
            opacity: 0.9,
          }}
        >
          {/* Corazón SVG Sin Borde */}
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
