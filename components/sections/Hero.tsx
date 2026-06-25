import { CtaButton } from "../utilitarios/CtaButton";

export function HeroSection() {
  return (
    /* min de mt-[10px] por causa do top-2.5 no header */
    <section className="relative bg-background flex items-center justify-center mt-[80px]">
      {/* Container Principal: Grid dividindo em 2 colunas no Desktop */}
      <div className="container-lp grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Coluna da Esquerda: Textos e CTAs */}
        <div className="flex flex-col gap-6">
          <div>
            <span className="bg-degrade bg-clip-text text-transparent text-sm tracking-wider uppercase mb-2 block">
              Bem-vindo ao meu portfólio
            </span>
            <h1 className="text-3xl max-[480px]:text-2xl sm:text-4xl xl:text-[40px] font-bold text-text-color leading-tight">
              Desenvolvedor Web especializado em Frontend
              <br />
            </h1>
          </div>
          
          <p className="text-base md:text-lg text-surface-text leading-relaxed hyphens-auto">
           Desenvolvo aplicações web com foco em performance, experiência do usuário e qualidade de código, utilizando principalmente React, Next.js, TypeScript e tecnologias modernas do ecossistema web. Também tenho experiência com integrações de APIs, automações e conhecimentos de backend que me permitem atuar além da interface quando necessário.
          </p>
          <CtaButton 
            text="Entrar em contato"
            href="contato"
          />
        </div>

        {/* Coluna da Direita: Vídeo com proporção deitada (16:9) */}
        <div className=" w-full flex justify-center lg:justify-end ">
          {/* Container do vídeo com as cores de superfície do seu tema */}
          <div className={`relative w-full aspect-video max-w-[600px] rounded-2xl overflow-hidden bg-surface shadow-2xl border border-surface-text/60 ring-4 ring-background dark:ring-foreground`}>
            
            {/* Detalhe estético: Barra de navegação "Mockup" (opcional, deixa mais premium) */}
            <div className="absolute top-0 w-full h-8 bg-surface border-b border-surface-text/10 flex items-center px-4 gap-2 ">
              <div className="w-2.5 h-2.5 rounded-full bg-surface-text/40"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-surface-text/40"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-surface-text/40"></div>
            </div>

            {/* Vídeo */}
            <video
              autoPlay
              loop
              muted
              playsInline
              poster="/capa-do-video-otimizada.webp"
              className="w-full h-full object-cover pt-8 pointer-events-none"
            >
              <source src="/videos/hero-demo.webm" type="video/webm" />
              <source src="/videos/hero-demo.mp4" type="video/mp4" />
              Seu navegador não suporta a tag de vídeo.
            </video>

            {/* Efeito de brilho/sombra interno usando sua cor primária */}
            <div className="absolute inset-0 border border-primary/20 rounded-2xl pointer-events-none"></div>
          </div>
        </div>

      </div>

      {/* Elemento de background opcional (Glow suave) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
    </section>
  );
}