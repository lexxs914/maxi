import Link from "next/link";
import { Sparkles, Flower2, ArrowRight } from "lucide-react";

/* 
// SECCIONES FUTURAS COMENTADAS HASTA QUE ESTÉN COMPLETAS:
import { BookHeart, Calendar, MessageSquareHeart, Lock } from "lucide-react";
*/

interface CouplePage {
  id: string;
  title: string;
  description: string;
  href: string;
  badge: string;
  active: boolean;
  iconName: "flower" | "history" | "calendar" | "letters";
  // Colores distintivos por sección
  primaryColor: string;
  secondaryColor: string;
  buttonHoverColor: string;
}

const couplePages: CouplePage[] = [
  {
    id: "flores-amarillas",
    title: "Flores Amarillas",
    description: "Un detalle especial lleno de luz, flores animadas y mensajes de cariño.",
    href: "/flores-amarillas",
    badge: "Disponible",
    active: true,
    iconName: "flower",
    primaryColor: "#FC5A8D",
    secondaryColor: "#F786AA",
    buttonHoverColor: "#F786AA",
  },
  /* 
  // Secciones adicionales comentadas hasta estar desarrolladas:
  {
    id: "nuestra-historia",
    title: "Nuestra Historia",
    description: "Línea del tiempo interactiva con los momentos más importantes juntos.",
    href: "#",
    badge: "Próximamente",
    active: false,
    iconName: "history",
    primaryColor: "#9333EA",
    secondaryColor: "#E9D5FF",
    buttonHoverColor: "#A855F7",
  },
  {
    id: "contador-dias",
    title: "Contador de Días",
    description: "Calculadora de días, meses y años compartiendo el camino.",
    href: "#",
    badge: "Próximamente",
    active: false,
    iconName: "calendar",
    primaryColor: "#0284C7",
    secondaryColor: "#BAE6FD",
    buttonHoverColor: "#38BDF8",
  },
  {
    id: "cartas-amor",
    title: "Cartas & Notas",
    description: "Espacio para guardar cartas secretas y notas de amor.",
    href: "#",
    badge: "Próximamente",
    active: false,
    iconName: "letters",
    primaryColor: "#059669",
    secondaryColor: "#A7F3D0",
    buttonHoverColor: "#10B981",
  },
  */
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F7F7F7] text-[#000F08] flex flex-col font-sans px-4 py-8 sm:px-8 sm:py-12">
      {/* Container Mobile First */}
      <div className="w-full max-w-3xl mx-auto flex-1 flex flex-col">
        
        {/* Header de la pantalla principal (Sin cartel, sin subtítulo y sin borde inferior) */}
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
                  {/* Badge & Logo con color distintivo */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="w-11 h-11 rounded-xl border-2 border-[#000F08] flex items-center justify-center text-[#F7F7F7] shadow-[2px_2px_0px_0px_#000F08]"
                      style={{ backgroundColor: page.primaryColor }}
                    >
                      {page.iconName === "flower" && <Flower2 className="w-6 h-6" />}
                    </div>

                    <span
                      className="text-xs font-bold px-2.5 py-1 rounded-full border border-[#000F08]"
                      style={{ backgroundColor: page.secondaryColor, color: "#000F08" }}
                    >
                      {page.badge}
                    </span>
                  </div>

                  {/* Título y Descripción */}
                  <h3 className="text-xl font-extrabold text-[#000F08] mb-2">{page.title}</h3>
                  <p className="text-xs sm:text-sm text-[#000F08]/80 mb-6 leading-relaxed">
                    {page.description}
                  </p>
                </div>

                {/* Botón con color distintivo de la sección */}
                <Link
                  href={page.href}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-[#F7F7F7] border-2 border-[#000F08] shadow-[2px_2px_0px_0px_#000F08] hover:text-[#000F08] transition-all active:translate-y-0.5"
                  style={{ backgroundColor: page.primaryColor }}
                >
                  <span>Entrar a la página</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-12 pt-6 border-t border-[#000F08]/20 text-center text-xs text-[#000F08]/70">
          <p>Plataforma para Parejas • {new Date().getFullYear()}</p>
        </footer>
      </div>
    </div>
  );
}
