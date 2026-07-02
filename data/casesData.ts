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
    id: "raro-pilates",
    name: "Raro Pilates",
    url: "https://www.cursoescoladeeventos.com.br/",
    coverImage: "/cases/raropilates/capararopilates.webp",
    logo: "/cases/raropilates/raropilates-logo.webp",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    shortDescription:
      "Site institucional para uma rede de estúdios de pilates, desenvolvido para incentivar o agendamento de aulas experimentais por meio de uma experiência simples, agradável e intuitiva.",
    highlights: ["Rastreamento de métricas", "Múltiplas unidades", "Performance"],
    fullDescription:
      "Site institucional desenvolvido para uma rede de estúdios de pilates, com foco em proporcionar uma experiência visual agradável, navegação intuitiva e comunicação clara para incentivar o agendamento de aulas experimentais. Além do desenvolvimento do site, foram implementados sistemas de rastreamento de interações e cliques, permitindo ao cliente acompanhar métricas de comportamento dos visitantes e avaliar o desempenho do projeto na geração de oportunidades.",
    developmentTime: "60 dias",
    gallery: [
      { desktop: "/cases/raropilates/raropilates1.webp", mobile: "/cases/raropilates/raropilates1-mobile.webp" },
      { desktop: "/cases/raropilates/raropilates2.webp", mobile: "/cases/raropilates/raropilates2-mobile.webp" },
      { desktop: "/cases/raropilates/raropilates3.webp", mobile: "/cases/raropilates/raropilates3-mobile.webp" },
    ],
  },
  {
    id: "santolia-miner",
    name: "Santolia Miner",
    url: "https://santoliaminer.com.br/",
    coverImage: "/cases/santoliaminer/capasantoliaminer.webp",
    logo: "/cases/santoliaminer/santoliaminer-logo.webp",
    technologies: ["Shopify", "Liquid", "CSS", "JavaScript", "APIs", "Vercel"],
    shortDescription:
      "E-commerce em Shopify com customizações em Liquid e desenvolvimento de uma API intermediária para integração e processamento de dados em tempo real.",
    highlights: ["Entrega rápida", "Customização Liquid", "Dados em tempo real"],
    fullDescription:
      "E-commerce desenvolvido em Shopify. Devido à necessidade de uma entrega rápida, o projeto foi iniciado a partir de um tema base, que posteriormente recebeu diversas customizações em Liquid para atender aos requisitos do cliente. Também foi desenvolvido um backend hospedado na Vercel responsável por integrar múltiplas APIs, processar informações e disponibilizar dados em tempo real para a aplicação.",
    developmentTime: "30 dias",
    gallery: [
      { desktop: "/cases/santoliaminer/santoliaminer1.webp", mobile: "/cases/santoliaminer/santoliaminer1-mobile.webp" },
      { desktop: "/cases/santoliaminer/santoliaminer2.webp", mobile: "/cases/santoliaminer/santoliaminer2-mobile.webp" },
      { desktop: "/cases/santoliaminer/santoliaminer3.webp", mobile: "/cases/santoliaminer/santoliaminer3-mobile.webp" },
    ],
  },
  {
    id: "escola-de-eventos",
    name: "Escola de Eventos",
    url: "https://escola-evento.vercel.app/",
    coverImage: "/cases/escoladeeventos/capaescoladeeventos.webp",
    logo: "/cases/escoladeeventos/escoladeeventos-logo.webp",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    shortDescription:
      "Landing Page desenvolvida com foco em conversão, utilizando design estratégico, comunicação persuasiva e uma experiência moderna para incentivar a aquisição dos cursos.",
    highlights: ["Design atrativo", "Organização", "Responsividade"],
    fullDescription:
      "Landing Page criada para maximizar a conversão de interessados em clientes. O projeto combinou uma estrutura estratégica de conteúdo, copy persuasiva e um design atrativo para conduzir o usuário até a ação desejada. A interface foi desenvolvida de forma totalmente responsiva, com animações e interações sutis que enriquecem a experiência sem desviar a atenção do principal objetivo: apresenta o curso de forma clara e incentivar a compra.",
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
    technologies: ["HTML", "CSS", "JavaScript", "Eleventy", "Netlify", "Nunjucks"],
    shortDescription:
      "Site institucional desenvolvido para apresentar as soluções da empresa e gerar leads qualificados, com foco em performance, SEO e uma experiência intuitiva.",
    highlights: ["Performance", "SEO", "Experiência do usuário"],
    fullDescription:
      "Site institucional desenvolvido para destacar as soluções da Atom VoIP e transformar visitantes em oportunidades de negócio. O projeto foi estruturado para apresentar os produtos de forma clara e estratégica, conduzindo o usuário até o formulário de agendamento de demonstração. Além de um design moderno e totalmente responsivo, o desenvolvimento priorizou performance, boas práticas de SEO, contribuindo para a geração de leads orgânicos, e uma navegação intuitiva para maximizar a conversão.",
    developmentTime: "40 dias",
    gallery: [
      { desktop: "/cases/atomvoip/atomvoip1.webp", mobile: "/cases/atomvoip/atomvoip1-mobile.webp" },
      { desktop: "/cases/atomvoip/atomvoip2.webp", mobile: "/cases/atomvoip/atomvoip2-mobile.webp" },
      { desktop: "/cases/atomvoip/atomvoip3.webp", mobile: "/cases/atomvoip/atomvoip3-mobile.webp" },
    ],
  },
];