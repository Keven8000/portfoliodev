import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/utilitarios/ThemeContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


/*  Google Search Console */

// TODO: trocar pelo domínio final do site
const SITE_URL = "https://www.kevensouza.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Keven Souza | Desenvolvedor Frontend",
    template: "%s | Keven Souza",
  },
  description:
    "Desenvolvedor Frontend especializado em Next.js, React e TypeScript. Experiência no desenvolvimento de sites e aplicações web para clientes, com foco em performance, responsividade, SEO e interfaces modernas que entregam uma excelente experiência ao usuário.",
  keywords: [
    "Keven Souza",
    "desenvolvedor frontend",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "desenvolvedor João Pessoa",
    "criação de sites",
  ],
  authors: [{ name: "Keven Souza", url: SITE_URL }],
  creator: "Keven Souza",
  publisher: "Keven Souza",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "Keven Souza",
    title: "Keven Souza | Desenvolvedor Frontend",
    description:
      "Desenvolvedor Frontend especializado em Next.js, React e TypeScript. Desenvolvo aplicações web rápidas, responsivas e escaláveis, priorizando performance, experiência do usuário e boas práticas de desenvolvimento.",
    images: [
      {
        // TODO: gerar imagem 1200x630 e colocar em /public/og-image.png
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Keven Souza - Desenvolvedor Frontend",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico", // TODO: conferir se existe em /public
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png", // TODO: gerar 180x180
  },
  manifest: "/site.webmanifest", // TODO: criar se ainda não existir
};

// JSON-LD: informa ao Google que essa é a página de uma Pessoa/Profissional
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Keven Souza",
  url: SITE_URL,
  jobTitle: "Desenvolvedor Frontend",
  description:
    "Desenvolvedor Frontend especializado em Next.js, React e TypeScript.",
  image: `${SITE_URL}/og-image.png`, // TODO: mesma imagem do OG
  address: {
    "@type": "PostalAddress",
    addressLocality: "João Pessoa",
    addressRegion: "PB",
    addressCountry: "BR",
  },
  sameAs: [
    "https://www.linkedin.com/in/keven-souza-a24179322/",
    "https://github.com/Keven8000",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}