import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nuestros Momentos ❤️",
  description: "Plataforma especial para parejas con detalles y páginas interactivas.",
  icons: {
    icon: "/flower-favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="light">
      <body className={`${geistSans.variable} antialiased bg-[#F7F7F7] text-[#000F08] min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
