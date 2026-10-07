import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NVT BI | Demonstração de Inteligência Comercial",
  description: "Portfólio demonstrativo de uma plataforma de inteligência comercial integrada a ERP.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
