import React from 'react';
import { Link } from 'wouter';

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border/30 px-6 py-5">
        <div className="mx-auto max-w-4xl flex items-center justify-between">
          <Link href="/">
            <span className="text-lg font-bold tracking-widest text-white cursor-pointer hover:opacity-80 transition-opacity">
              AG LABS
            </span>
          </Link>
          <Link href="/">
            <span className="text-sm text-muted-foreground hover:text-white transition-colors cursor-pointer">
              ← Voltar ao início
            </span>
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Termos de Uso</h1>
        <p className="text-muted-foreground mb-12">Última atualização: abril de 2025</p>

        <div className="prose prose-invert prose-sm max-w-none space-y-10 text-muted-foreground leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Aceitação dos Termos</h2>
            <p>
              Ao acessar e utilizar os serviços, produtos e plataformas da <strong className="text-white">AG LABS</strong>,
              você concorda com estes Termos de Uso. Se não concordar com qualquer parte destes termos, por favor,
              não utilize nossos serviços.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Descrição dos Serviços</h2>
            <p>A AG LABS oferece soluções de inteligência artificial, incluindo:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li><strong className="text-white/80">Corporate Agent:</strong> agentes autônomos de IA para otimização de processos empresariais;</li>
              <li><strong className="text-white/80">Websites que Vendem:</strong> desenvolvimento de páginas e sistemas digitais de alta conversão;</li>
              <li><strong className="text-white/80">Software Performance:</strong> desenvolvimento e redesenho de produtos digitais;</li>
              <li><strong className="text-white/80">Workflows Inteligence:</strong> automação de fluxos de trabalho com inteligência artificial.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Uso Permitido</h2>
            <p>Ao utilizar nossos serviços, você concorda em:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>Utilizar os serviços apenas para fins lícitos e de acordo com a legislação brasileira;</li>
              <li>Não reproduzir, duplicar, copiar ou revender qualquer parte dos serviços sem autorização expressa;</li>
              <li>Não tentar acessar sistemas, áreas restritas ou dados de outros clientes;</li>
              <li>Fornecer informações verdadeiras e atualizadas durante o uso dos serviços;</li>
              <li>Não utilizar os serviços para disseminar conteúdo ilegal, ofensivo ou prejudicial.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Propriedade Intelectual</h2>
            <p>
              Todo o conteúdo presente nas plataformas da AG LABS — incluindo textos, imagens, logotipos, interfaces,
              código-fonte, modelos de IA e metodologias — é de propriedade exclusiva da AG LABS ou de seus licenciadores
              e está protegido pelas leis de propriedade intelectual. É vedada qualquer reprodução sem autorização prévia por escrito.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Responsabilidades do Usuário</h2>
            <p>
              O usuário é inteiramente responsável pelo conteúdo que inserir nas plataformas e agentes da AG LABS,
              bem como pelo uso que fizer dos resultados gerados. A AG LABS não se responsabiliza por decisões
              tomadas com base nas saídas dos sistemas de inteligência artificial.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Limitação de Responsabilidade</h2>
            <p>
              A AG LABS não será responsável por danos diretos, indiretos, incidentais ou consequenciais resultantes
              do uso ou da impossibilidade de uso dos serviços, incluindo perda de dados, lucros cessantes ou
              interrupção de negócios. Nossos serviços são fornecidos "no estado em que se encontram", sem garantias
              de disponibilidade ininterrupta.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Confidencialidade</h2>
            <p>
              As informações compartilhadas durante a contratação e uso dos nossos serviços são tratadas com
              total confidencialidade, conforme nossa Política de Privacidade. A AG LABS não divulgará dados
              de clientes a terceiros sem autorização, exceto quando exigido por lei.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Pagamentos e Contratação</h2>
            <p>
              Os termos específicos de cada serviço, incluindo valores, prazos e condições de pagamento,
              são definidos em proposta ou contrato separado. Em caso de inadimplência, a AG LABS reserva-se
              o direito de suspender o acesso aos serviços após notificação prévia.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">9. Modificações nos Serviços e Termos</h2>
            <p>
              A AG LABS reserva-se o direito de modificar, suspender ou encerrar qualquer serviço a qualquer
              momento, com notificação prévia quando possível. Estes Termos de Uso também podem ser atualizados,
              sendo a versão mais recente sempre disponibilizada em nosso site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">10. Lei Aplicável e Foro</h2>
            <p>
              Estes Termos de Uso são regidos pela legislação brasileira. Qualquer litígio será submetido ao
              foro da comarca de domicílio da AG LABS, com renúncia expressa a qualquer outro, por mais
              privilegiado que seja.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">11. Contato</h2>
            <p>
              Para dúvidas, reclamações ou solicitações relacionadas a estes termos, entre em contato conosco
              pelas nossas redes sociais ou plataformas de atendimento.
            </p>
          </section>
        </div>
      </main>

      <footer className="border-t border-border/30 px-6 py-8 mt-8">
        <div className="mx-auto max-w-4xl text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} AG LABS. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}
