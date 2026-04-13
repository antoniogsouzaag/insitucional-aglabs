import React from "react";

export default function FeatureSections() {
  return (
    <section className="w-full bg-background py-16 md:py-24 border-t border-border/30">
      <div className="mx-auto max-w-6xl px-6">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-500 mb-3">Por que a AG LABS</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Tudo que você precisa para crescer com IA
          </h2>
          <p className="text-sm text-muted-foreground mt-3">
            Uma stack completa de inteligência artificial, automações e interfaces que trabalham juntas para escalar o seu negócio.
          </p>
        </div>

        {/* Card grid */}
        <div className="flex flex-wrap items-start justify-center gap-10 mb-20">
          <div className="max-w-xs hover:-translate-y-1 transition duration-300">
            <img
              className="rounded-2xl w-full object-cover border border-border/30"
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/image-1.png"
              alt="Análise de dados com IA"
            />
            <h3 className="text-base font-semibold text-white mt-4">Análise Inteligente de Dados</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Insights em tempo real com dashboards que aprendem e evoluem com o seu negócio.
            </p>
          </div>

          <div className="max-w-xs hover:-translate-y-1 transition duration-300">
            <img
              className="rounded-2xl w-full object-cover border border-border/30"
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/image-2.png"
              alt="Agentes autônomos"
            />
            <h3 className="text-base font-semibold text-white mt-4">Agentes Autônomos</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Funcionários digitais que operam 24h, aprendem com o contexto e tomam decisões precisas.
            </p>
          </div>

          <div className="max-w-xs hover:-translate-y-1 transition duration-300">
            <img
              className="rounded-2xl w-full object-cover border border-border/30"
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/image-3.png"
              alt="Interfaces de alto desempenho"
            />
            <h3 className="text-base font-semibold text-white mt-4">Interfaces de Alto Desempenho</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Produtos digitais projetados para converter, reter e encantar seus usuários.
            </p>
          </div>
        </div>

        {/* Feature list with image */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <img
            className="max-w-lg w-full rounded-2xl border border-border/30"
            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/group-image-1.png"
            alt="AG LABS plataforma"
          />
          <div className="space-y-10 flex-1">
            {/* Feature 1 */}
            <div className="flex items-start gap-6 max-w-md">
              <div className="p-4 aspect-square bg-blue-500/10 rounded-2xl flex-shrink-0">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 18.667V24.5m4.668-8.167V24.5m4.664-12.833V24.5m2.333-21L15.578 13.587a.584.584 0 0 1-.826 0l-3.84-3.84a.583.583 0 0 0-.825 0L2.332 17.5M4.668 21v3.5m4.664-8.167V24.5" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-semibold text-white">Resultados em Tempo Real</h3>
                <p className="text-sm text-muted-foreground">Métricas, conversões e performance acompanhados ao vivo com dashboards alimentados por IA.</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-6 max-w-md">
              <div className="p-4 aspect-square bg-green-500/10 rounded-2xl flex-shrink-0">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 11.667A2.333 2.333 0 0 0 11.667 14c0 1.19-.117 2.929-.304 4.667m4.972-3.36c0 2.776 0 7.443-1.167 10.36m5.004-1.144c.14-.7.502-2.683.583-3.523M2.332 14a11.667 11.667 0 0 1 21-7m-21 11.667h.01m23.092 0c.233-2.333.152-6.246 0-7" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M5.832 22.75C6.415 21 6.999 17.5 6.999 14a7 7 0 0 1 .396-2.333m2.695 13.999c.245-.77.525-1.54.665-2.333m-.255-15.4A7 7 0 0 1 21 14v2.333" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-semibold text-white">Segurança & Privacidade</h3>
                <p className="text-sm text-muted-foreground">Infraestrutura com criptografia ponta a ponta, controle de acesso e conformidade com a LGPD.</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-6 max-w-md">
              <div className="p-4 aspect-square bg-orange-500/10 rounded-2xl flex-shrink-0">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.668 25.666h16.333a2.333 2.333 0 0 0 2.334-2.333V8.166L17.5 2.333H7a2.333 2.333 0 0 0-2.333 2.333v4.667" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16.332 2.333V7a2.334 2.334 0 0 0 2.333 2.333h4.667m-21 8.167h11.667M10.5 21l3.5-3.5-3.5-3.5" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-semibold text-white">Relatórios Personalizados</h3>
                <p className="text-sm text-muted-foreground">Exporte relatórios profissionais de desempenho, ROI e crescimento para qualquer stakeholder.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
