import type { MetadataRoute } from "next";

// TODO: trocar pelo domínio final do site
const SITE_URL = "https://www.kevensouza.com.br";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}