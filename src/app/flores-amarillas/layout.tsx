import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flores Amarillas 🌻",
  description: "Un detalle lleno de flores amarillas animadas.",
  icons: {
    icon: "/flowers/1.png",
  },
};

export default function FloresLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
