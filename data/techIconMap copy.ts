import {
  SiHtml5,
  SiCss,
  SiEleventy,
  SiShopify,
  SiVercel,
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiNetlify,
  SiNunjucks

} from "@icons-pack/react-simple-icons";
import { Webhook } from "lucide-react";
import type { ComponentType, SVGProps } from "react";

// "APIs" não é uma marca/logo, então usamos um ícone genérico do lucide-react
// (não aceita a prop "color", por isso o componente trata os dois casos separadamente)
type BrandIcon = ComponentType<SVGProps<SVGSVGElement> & { color?: string; size?: string | number }>;

export const techIconMap: Record<string, BrandIcon> = {
  HTML: SiHtml5,
  CSS: SiCss,
  Eleventy: SiEleventy,
  Shopify: SiShopify,
  Liquid: SiShopify,
  Vercel: SiVercel,
  "Next.js": SiNextdotjs,
  React: SiReact,
  TypeScript: SiTypescript,
  "Tailwind CSS": SiTailwindcss,
  Javascript: SiJavascript,
  Netlify: SiNetlify,
  Nunjucks: SiNunjucks,
  
};

// Ícone sem marca/logo oficial (ex: "APIs"), usado separadamente no componente
export const fallbackIcon = Webhook;