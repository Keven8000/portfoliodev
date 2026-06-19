
export function HeroSection() {
  return (
    /* min de mt-10 px por causa do top-2.5 no header */
    <section className=" bg-background flex items-center justify-center mt-[80px]">
      {/* Container Principal: Grid dividindo em 2 colunas no Desktop */}
      <div className="container-lp grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Coluna da Esquerda: Textos e CTAs */}
        <div className="flex flex-col gap-6">
          <div>
            <span className="bg-degrade bg-clip-text text-transparent text-sm tracking-wider uppercase mb-2 block">
              Bem-vindo ao meu portfólio
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-color leading-tight">
              Desenvolvimento web além da interface.
              <br />
            </h1>
          </div>
          
          <p className="text-base md:text-lg text-surface-text leading-relaxed">
            Desenvolvedor Full Stack especializado em React, Next.js e tecnologias modernas. Crio sites, plataformas e automações que ajudam empresas a crescer, otimizar processos e transformar ideias em produtos digitais de alto desempenho.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <a 
              href="#projetos" 
              className="inline-flex justify-center items-center bg-primary  hover:bg-primary-hover text-text-color hover:text-background font-medium py-3 px-8 rounded-lg transition-colors duration-300 shadow-lg"
            >
              Ver meus Projetos
            </a>
            <a 
              href="#contato" 
              className="inline-flex justify-center items-center bg-surface/80 hover:bg-surface text-text-color hover:text-background border border-surface-text font-medium py-3 px-8 rounded-lg transition-all duration-300"
            >
              Entrar em Contato
            </a>
          </div>
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