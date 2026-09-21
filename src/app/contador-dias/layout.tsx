import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contador de Días 💖",
  description: "Calculadora de días, meses y años compartiendo el camino.",
  icons: {
    icon: "/calendar-icon.svg",
  },
};

export default function ContadorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
