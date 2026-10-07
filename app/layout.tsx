import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nvt-bi-portfolio.italo-farias90.chatgpt.site"),
  title: "NVT BI | Demonstração de Inteligência Comercial",
  description: "Portfólio demonstrativo de uma plataforma de inteligência comercial integrada a ERP.",
  openGraph: {
    title: "NVT BI — Inteligência Comercial integrada a ERP",
    description: "Dashboard demonstrativo de vendas, metas, estoque, financeiro e IA aplicada ao negócio.",
    images: ["/portfolio-cover.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NVT BI — Inteligência Comercial integrada a ERP",
    description: "Dashboard demonstrativo de vendas, metas, estoque, financeiro e IA aplicada ao negócio.",
    images: ["/portfolio-cover.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
