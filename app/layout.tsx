import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://frenchieperbote-madrid.vercel.app"),
  title: "Frenchieperbote | Peluquería canina y formación",
  description:
    "Peluquería canina, cursos prácticos y tienda en San Fernando de Henares, Madrid.",
  openGraph: {
    title: "Frenchieperbote | Cada perro tiene su manera de estar guapo",
    description:
      "Peluquería canina con 15 años de experiencia y formación práctica en San Fernando de Henares.",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
