"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import HeartTrail from "@/components/HeartTrail";
import { useEffect, useState } from "react";

// Fecha de inicio: 29 de julio de 2026 a las 22:32 hora Argentina (UTC-3)
const START_DATE = new Date("2026-07-29T22:32:00-03:00");

interface TimeElapsed {
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  totalDays: number;
}

function calcElapsed(): TimeElapsed {
  const now = new Date();
  const diff = now.getTime() - START_DATE.getTime();

  if (diff < 0) return { months: 0, days: 0, hours: 0, minutes: 0, seconds: 0, totalDays: 0 };

  const totalSeconds = Math.floor(diff / 1000);
  const totalMinutes = Math.floor(totalSeconds / 60);
  const totalHours   = Math.floor(totalMinutes / 60);
  const totalDays    = Math.floor(totalHours / 24);

  // Calcular meses completos y días restantes
  const startYear  = START_DATE.getFullYear();
  const startMonth = START_DATE.getMonth();
  const nowYear    = now.getFullYear();
  const nowMonth   = now.getMonth();
  const nowDay     = now.getDate();
  const startDay   = START_DATE.getDate();

  let months = (nowYear - startYear) * 12 + (nowMonth - startMonth);
  let days = nowDay - startDay;
  if (days < 0) {
    months -= 1;
    // Días del mes anterior
    const prevMonth = new Date(nowYear, nowMonth, 0);
    days += prevMonth.getDate();
  }

  const hours   = now.getHours() - START_DATE.getHours()   >= 0
    ? now.getHours()   % 24
    : (now.getHours() + 24) % 24;
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  return { months, days, hours, minutes, seconds, totalDays };
}

interface UnitBoxProps {
  value: number | string;
  label: string;
  accent?: boolean;
}

function UnitBox({ value, label, accent = false }: UnitBoxProps) {
  return (
    <div className={`flex flex-col items-center justify-center rounded-2xl border-2 border-[#171D1C] shadow-[4px_4px_0px_0px_#171D1C] p-4 sm:p-6 min-w-0 ${accent ? "bg-[#FC5A8D]" : "bg-[#F7F7F7]"}`}>
      <span className={`text-4xl sm:text-6xl font-black tabular-nums leading-none ${accent ? "text-[#171D1C]" : "text-[#FC5A8D]"}`}>
        {String(value).padStart(2, "0")}
      </span>
      <span className={`text-xs sm:text-sm font-bold uppercase tracking-widest mt-2 ${accent ? "text-[#171D1C]" : "text-[#171D1C]/70"}`}>
        {label}
      </span>
    </div>
  );
}

export default function ContadorDiasPage() {
  const [elapsed, setElapsed] = useState<TimeElapsed>(calcElapsed());

  useEffect(() => {
    const timer = setInterval(() => {
      setElapsed(calcElapsed());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#F7F7F7] text-[#171D1C] flex flex-col font-sans relative overflow-hidden">

      {/* Rastro de corazones — sin cursor personalizado */}
      <HeartTrail />

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
          <svg
            className="w-6 h-6 sm:w-7 sm:h-7"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#171D1C"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          <span>Contador de Días</span>
        </div>
      </header>

      {/* ------------------------------------------------------------- */}
      {/* CONTENIDO PRINCIPAL: Contador                                  */}
      {/* ------------------------------------------------------------- */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-10 relative z-10">

        {/* Título */}
        <div className="text-center mb-8 sm:mb-10">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#FC5A8D] mb-2">
            Desde el 29 de julio de 2026, 22:32
          </p>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#171D1C] leading-tight">
            Llevamos juntos
          </h2>
        </div>

        {/* Tarjeta principal — Días totales */}
        <div className="w-full max-w-sm mb-6 sm:mb-8">
          <div className="rounded-2xl border-2 border-[#171D1C] bg-[#FC5A8D] shadow-[6px_6px_0px_0px_#171D1C] p-6 sm:p-8 text-center">
            <span className="text-7xl sm:text-9xl font-black tabular-nums text-[#171D1C] leading-none">
              {elapsed.totalDays}
            </span>
            <p className="text-lg sm:text-2xl font-extrabold uppercase tracking-widest text-[#171D1C] mt-3">
              {elapsed.totalDays === 1 ? "día" : "días"}
            </p>
          </div>
        </div>

        {/* Detalle: Meses + Días */}
        <div className="w-full max-w-sm grid grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
          <UnitBox value={elapsed.months} label="meses" accent />
          <UnitBox value={elapsed.days}   label="días" />
        </div>

        {/* Detalle: Horas + Minutos + Segundos */}
        <div className="w-full max-w-sm grid grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-10">
          <UnitBox value={elapsed.hours}   label="horas" />
          <UnitBox value={elapsed.minutes} label="min" accent />
          <UnitBox value={elapsed.seconds} label="seg" />
        </div>

        {/* Mensaje */}
        <p className="text-center text-sm sm:text-base font-semibold text-[#171D1C]/60 max-w-xs">
          y contando cada segundo ♡
        </p>

      </main>
    </div>
  );
}
