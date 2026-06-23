export interface GalleryImage {
  desktop: string;
  mobile: string;
}

export interface CaseProject {
  id: string;
  name: string;
  url: string;
  coverImage: string;
  logo: string;
  technologies: string[];
  shortDescription: string;
  highlights: string[];
  fullDescription: string;
  developmentTime: string;
  gallery: GalleryImage[];
}

export const casesData: CaseProject[] = [
  {
    id: "escola-de-eventos",
    name: "Escola de Eventos",
    url: "https://escola-evento.vercel.app/",
    coverImage: "/cases/escoladeeventos/capaescoladeeventos.webp",
    logo: "/cases/escoladeeventos/escoladeeventos-logo.webp",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    shortDescription:
      "Landing page com foco em apresentação visual, comunicação clara e experiência moderna para o usuário.",
    highlights: ["Design atrativo", "Organização", "Responsividade"],
    fullDescription:
      "Landing Page desenvolvida com foco em apresentação visual, comunicação clara e experiência moderna para o usuário. O projeto priorizou design atrativo, organização das informações e responsividade.",
    developmentTime: "21 dias",
    gallery: [
      { desktop: "/cases/escoladeeventos/escoladeeventos1.webp", mobile: "/cases/escoladeeventos/escoladeeventos1-mobile.webp" },
      { desktop: "/cases/escoladeeventos/escoladeeventos2.webp", mobile: "/cases/escoladeeventos/escoladeeventos2-mobile.webp" },
      { desktop: "/cases/escoladeeventos/escoladeeventos3.webp", mobile: "/cases/escoladeeventos/escoladeeventos3-mobile.webp" },
    ],
  },
  {
    id: "atom-voip",
    name: "Atom VoIP",
    url: "https://atomvoip.com.br/",
    coverImage: "/cases/atomvoip/capaatomvoip.webp",
    logo: "/cases/atomvoip/atomvoip-logo.webp",
    technologies: ["HTML", "CSS", "Javascript", "Eleventy", "Netlify", "Nunjucks"],
    shortDescription:
      "Site institucional para empresa do setor de telefonia, com foco em performance, SEO e experiência do usuário.",
    highlights: ["Performance", "SEO", "Experiência do usuário"],
    fullDescription:
      "Site institucional desenvolvido para uma empresa do setor de telefonia. O projeto foi construído com foco em performance, SEO e experiência do usuário. O cliente relatou resultados positivos relacionados à geração de leads através de tráfego orgânico.",
    developmentTime: "40 dias",
    gallery: [
      { desktop: "/cases/atomvoip/atomvoip1.webp", mobile: "/cases/atomvoip/atomvoip1-mobile.webp" },
      { desktop: "/cases/atomvoip/atomvoip2.webp", mobile: "/cases/atomvoip/atomvoip2-mobile.webp" },
      { desktop: "/cases/atomvoip/atomvoip3.webp", mobile: "/cases/atomvoip/atomvoip3-mobile.webp" },
    ],
  },
  {
    id: "santolia-miner",
    name: "Santolia Miner",
    url: "https://santoliaminer.com.br/",
    coverImage: "/cases/santoliaminer/capasantoliaminer.webp",
    logo: "/cases/santoliaminer/santoliaminer-logo.webp",
    technologies: ["Shopify", "Liquid", "CSS", "Javascript", "APIs", "Vercel"],
    shortDescription:
      "E-commerce em Shopify com customizações em Liquid e integração de dados em tempo real via API própria.",
    highlights: ["Entrega rápida", "Customização Liquid", "Dados em tempo real"],
    fullDescription:
      "E-commerce desenvolvido utilizando Shopify. Devido à necessidade de entrega rápida, foi utilizado um template base que posteriormente recebeu diversas customizações através de código Liquid. Também foi realizada integração com APIs e desenvolvimento de um servidor hospedado na Vercel para disponibilizar dados atualizados em tempo real sobre moedas de mineração.",
    developmentTime: "30 dias",
    gallery: [
      { desktop: "/cases/santoliaminer/santoliaminer1.webp", mobile: "/cases/santoliaminer/santoliaminer1-mobile.webp" },
      { desktop: "/cases/santoliaminer/santoliaminer2.webp", mobile: "/cases/santoliaminer/santoliaminer2-mobile.webp" },
      { desktop: "/cases/santoliaminer/santoliaminer3.webp", mobile: "/cases/santoliaminer/santoliaminer3-mobile.webp" },
    ],
  },
  {
    id: "raro-pilates",
    name: "Raro Pilates",
    url: "https://site-raropilates.vercel.app/",
    coverImage: "/cases/raropilates/capararopilates.webp",
    logo: "/cases/raropilates/raropilates-logo.webp",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    shortDescription:
      "Site institucional para rede de estúdios de pilates, com rastreamento de métricas de acesso e cliques.",
    highlights: ["Rastreamento de métricas", "Múltiplas unidades", "Performance"],
    fullDescription:
      "Site institucional desenvolvido para uma empresa responsável por uma rede de estúdios de pilates. Além da construção do site, foram implementados sistemas de rastreamento de interações para permitir ao cliente acompanhar métricas de acesso e cliques realizados pelos visitantes.",
    developmentTime: "60 dias",
    gallery: [
      { desktop: "/cases/raropilates/raropilates1.webp", mobile: "/cases/raropilates/raropilates1-mobile.webp" },
      { desktop: "/cases/raropilates/raropilates2.webp", mobile: "/cases/raropilates/raropilates2-mobile.webp" },
      { desktop: "/cases/raropilates/raropilates3.webp", mobile: "/cases/raropilates/raropilates3-mobile.webp" },
    ],
  },
];