import Link from "next/link";
import Image from "next/image";
import { Sparkles, ArrowRight } from "lucide-react";
import HeartTrail from "@/components/HeartTrail";

interface CouplePage {
  id: string;
  title: string;
  description: string;
  href: string;
  badge: string;
  active: boolean;
  flowerImgPath?: string;
  iconName: "flower" | "history" | "calendar" | "letters";
  sectionColor: string;
  sectionSecondaryColor: string;
  textColor: string;
}

const couplePages: CouplePage[] = [
  {
    id: "flores-amarillas",
    title: "Flores Amarillas",
    description: "Un detalle especial lleno de luz, flores animadas y mensajes de cariño.",
    href: "/flores-amarillas",
    badge: "Disponible",
    active: true,
    flowerImgPath: "/flowers/1.png",
    iconName: "flower",
    sectionColor: "#FFC000",
    sectionSecondaryColor: "#FF8400",
    textColor: "#171D1C",
  },
];

const heartCursorStyle = {
  cursor: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='%23FC5A8D' stroke='%23000F08' stroke-width='1.5'><path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'/></svg>") 12 12, pointer`,
};

export default function Home() {
  return (
    <div
      className="min-h-screen bg-[#F7F7F7] text-[#000F08] flex flex-col font-sans px-4 py-8 sm:px-8 sm:py-12 relative"
      style={heartCursorStyle}
    >
      {/* Rastro de corazones en la página principal */}
      <HeartTrail />

      <div className="w-full max-w-3xl mx-auto flex-1 flex flex-col relative z-10">
        
        {/* Header de la pantalla principal */}
        <header className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#000F08]">
            Nuestros <span className="text-[#FC5A8D]">Momentos</span>
          </h1>
        </header>

        {/* Grid Contenedora Dinámica de Páginas (Mobile First) */}
        <section className="flex-1">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg sm:text-xl font-bold text-[#000F08] flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#FC5A8D]" />
              <span>Secciones Disponibles</span>
            </h2>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[#F786AA]/30 border border-[#000F08]">
              {couplePages.filter((p) => p.active).length} Activa
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {couplePages.map((page) => (
              <div
                key={page.id}
                className="rounded-2xl border-2 border-[#000F08] p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between bg-[#F7F7F7] shadow-[4px_4px_0px_0px_#000F08] hover:shadow-[6px_6px_0px_0px_#000F08] hover:-translate-y-0.5"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-xl border-2 border-[#000F08] flex items-center justify-center p-1.5 shadow-[2px_2px_0px_0px_#000F08]"
                      style={{ backgroundColor: page.sectionColor }}
                    >
                      {page.flowerImgPath ? (
                        <Image
                          src={page.flowerImgPath}
                          alt={page.title}
                          width={40}
                          height={40}
                          className="w-full h-full object-contain"
                        />
                      ) : null}
                    </div>

                    <span
                      className="text-xs font-bold px-2.5 py-1 rounded-full border border-[#000F08]"
                      style={{ backgroundColor: page.sectionSecondaryColor, color: page.textColor }}
                    >
                      {page.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-[#000F08] mb-2">{page.title}</h3>
                  <p className="text-xs sm:text-sm text-[#000F08]/80 mb-6 leading-relaxed">
                    {page.description}
                  </p>
                </div>

                <Link
                  href={page.href}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold border-2 border-[#000F08] shadow-[2px_2px_0px_0px_#000F08] transition-all active:translate-y-0.5 hover:opacity-90"
                  style={{ backgroundColor: page.sectionColor, color: page.textColor }}
                >
                  <span>Entrar a la página</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
