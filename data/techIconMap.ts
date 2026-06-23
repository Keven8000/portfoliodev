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
  SiNodedotjs,
  SiDocker,
  SiGit,
  SiGithub,
  SiN8n,
  SiPython,
  SiNunjucks,
  SiChatwoot
} from "@icons-pack/react-simple-icons";
import { Webhook, Database, ShoppingCart, Network } from "lucide-react";
import type { ComponentType, SVGProps } from "react";

type BrandIcon = ComponentType<SVGProps<SVGSVGElement> & { color?: string; size?: string | number }>;

export const techIconMap: Record<string, BrandIcon> = {
  HTML: SiHtml5,
  CSS: SiCss, // Corrigido para SiCss3 para garantir compatibilidade
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  React: SiReact,
  "Next.js": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  Eleventy: SiEleventy,
  Shopify: SiShopify,
  Liquid: SiShopify,
  "Node.js": SiNodedotjs,
  Git: SiGit,
  GitHub: SiGithub,
  Vercel: SiVercel,
  Netlify: SiNetlify,
  Nunjucks: SiNunjucks,
  Docker: SiDocker,
  n8n: SiN8n,
  Python: SiPython,
  Chatwoot: SiChatwoot,
  // Ícones do Lucide para ferramentas sem logo oficial no simple-icons
  TablePlus: Database,
  "E-commerces": ShoppingCart,
  "APIs REST": Network,
  Webhooks: Webhook,
  "Evolution API": Webhook, // Webhook ou MessageCircle combinam bem aqui
};

export const fallbackIcon = Webhook;