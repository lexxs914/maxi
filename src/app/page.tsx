import Link from "next/link";
import { Heart, Flower2, Sparkles, Calendar, BookHeart, MessageSquareHeart, ArrowRight, Lock } from "lucide-react";

// Configuración dinámica de páginas para parejas
interface CouplePage {
  id: string;
  title: string;
  description: string;
  href: string;
  badge: string;
  active: boolean;
  iconName: "flower" | "history" | "calendar" | "letters";
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
  },
  {
    id: "nuestra-historia",
    title: "Nuestra Historia",
    description: "Línea del tiempo con los momentos más importantes juntos.",
    href: "#",
    badge: "Próximamente",
    active: false,
    iconName: "history",
  },
  {
    id: "contador-dias",
    title: "Contador de Días",
    description: "Calculadora de días, meses y años compartiendo el camino.",
    href: "#",
    badge: "Próximamente",
    active: false,
    iconName: "calendar",
  },
  {
    id: "cartas-amor",
    title: "Cartas & Notas",
    description: "Espacio para guardar cartas secretas y notas de amor.",
    href: "#",
    badge: "Próximamente",
    active: false,
    iconName: "letters",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F7F7F7] text-[#000F08] flex flex-col font-sans px-4 py-8 sm:px-8 sm:py-12">
      {/* Container Mobile First */}
      <div className="w-full max-w-3xl mx-auto flex-1 flex flex-col">
        
        {/* Header de la pantalla principal */}
        <header className="text-center mb-8 sm:mb-12 border-b-2 border-[#000F08] pb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F786AA]/20 border border-[#000F08] text-[#000F08] text-xs sm:text-sm font-bold mb-4">
            <Heart className="w-4 h-4 fill-[#FC5A8D] text-[#FC5A8D]" />
            <span>Espacio para Parejas</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#000F08] mb-3">
            Nuestros <span className="text-[#FC5A8D]">Momentos</span>
          </h1>

          <p className="text-sm sm:text-base text-[#000F08]/80 max-w-md mx-auto leading-relaxed">
            Colección de páginas interactivas y detalles dedicados a nuestra relación.
          </p>
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
                className={`rounded-2xl border-2 border-[#000F08] p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between ${
                  page.active
                    ? "bg-[#F7F7F7] shadow-[4px_4px_0px_0px_#000F08] hover:shadow-[6px_6px_0px_0px_#000F08] hover:-translate-y-0.5"
                    : "bg-[#F7F7F7]/60 opacity-75 border-dashed"
                }`}
              >
                <div>
                  {/* Badge & Icon Top Row */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-11 h-11 rounded-xl border-2 border-[#000F08] flex items-center justify-center ${
                        page.active ? "bg-[#FC5A8D] text-[#F7F7F7]" : "bg-[#F786AA]/30 text-[#000F08]"
                      }`}
                    >
                      {page.iconName === "flower" && <Flower2 className="w-6 h-6" />}
                      {page.iconName === "history" && <BookHeart className="w-6 h-6" />}
                      {page.iconName === "calendar" && <Calendar className="w-6 h-6" />}
                      {page.iconName === "letters" && <MessageSquareHeart className="w-6 h-6" />}
                    </div>

                    <span
                      className={`text-xs font-bold px-2.5 py-1 rounded-full border border-[#000F08] ${
                        page.active
                          ? "bg-[#F786AA] text-[#000F08]"
                          : "bg-gray-200 text-gray-700"
                      }`}
                    >
                      {page.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-extrabold text-[#000F08] mb-2">{page.title}</h3>
                  <p className="text-xs sm:text-sm text-[#000F08]/80 mb-6 leading-relaxed">
                    {page.description}
                  </p>
                </div>

                {/* Button / Action */}
                {page.active ? (
                  <Link
                    href={page.href}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-[#F7F7F7] bg-[#FC5A8D] border-2 border-[#000F08] shadow-[2px_2px_0px_0px_#000F08] hover:bg-[#F786AA] hover:text-[#000F08] transition-all active:translate-y-0.5"
                  >
                    <span>Entrar a la página</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                ) : (
                  <div className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-semibold text-xs text-[#000F08]/60 bg-gray-200/80 border border-[#000F08]/30">
                    <Lock className="w-3.5 h-3.5" />
                    <span>Próximamente disponible</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Footer simple integrado en modo claro */}
        <footer className="mt-12 pt-6 border-t border-[#000F08]/20 text-center text-xs text-[#000F08]/70">
          <p>Plataforma para Parejas • {new Date().getFullYear()}</p>
        </footer>
      </div>
    </div>
  );
}
