import type { MetadataRoute } from "next";

// TODO: trocar pelo domínio final do site
const SITE_URL = "https://www.kevensouza.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    // TODO: adicionar outras rotas se o site tiver mais páginas
    // {
    //   url: `${SITE_URL}/sobre`,
    //   lastModified: new Date(),
    //   changeFrequency: "monthly",
    //   priority: 0.8,
    // },
  ];
}