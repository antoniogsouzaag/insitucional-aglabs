import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface FaqItem {
  question: string;
  answer: string;
}

/**
 * Monta o JSON-LD FAQPage a partir dos MESMOS itens exibidos na tela.
 * O Google só considera FAQ rica quando as perguntas/respostas estão visíveis
 * na página — por isso schema e conteúdo visível são derivados da mesma fonte.
 */
export function faqJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.question,
      acceptedAnswer: { "@type": "Answer", text: it.answer },
    })),
  };
}

/** FAQ do site institucional (home) — alinhada aos clusters de palavras-chave. */
export const institutionalFaq: FaqItem[] = [
  {
    question: "O que é a AG LABS?",
    answer:
      "A AG LABS é uma agência brasileira de inteligência artificial aplicada a negócios. Desenvolvemos agentes de IA, automação de processos e websites de alto desempenho para empresas que querem escalar com tecnologia.",
  },
  {
    question: "O que são agentes de IA para empresas?",
    answer:
      "São assistentes autônomos que executam tarefas como atendimento, qualificação de leads, suporte e análise de dados 24 horas por dia. Na AG LABS, cada agente é treinado com o conhecimento e os processos do seu negócio.",
  },
  {
    question: "Como funciona a automação de processos com IA?",
    answer:
      "Mapeamos tarefas repetitivas — envios de mensagens, follow-ups, geração de conteúdo e relatórios — e as conectamos em fluxos automáticos com IA, integrando as ferramentas que a sua empresa já usa para economizar horas de trabalho por mês.",
  },
  {
    question: "A AG LABS cria atendentes de IA no WhatsApp?",
    answer:
      "Sim. Criamos atendentes de IA para WhatsApp que respondem clientes, agendam, qualificam leads e encaminham para o time humano quando necessário, sem deixar mensagens sem resposta.",
  },
  {
    question: "A AG LABS atende empresas de Rio Verde e Goiás?",
    answer:
      "Sim. Somos uma agência de IA com origem em Rio Verde (GO) e atendemos empresas em todo o Brasil de forma remota, com automação e agentes de IA sob medida para negócios locais e nacionais.",
  },
  {
    question: "Como começar um projeto com a AG LABS?",
    answer:
      "Fale com a gente pelo formulário do site ou pelo WhatsApp. Avaliamos o seu cenário e propomos a solução de IA — agente, automação ou website — mais adequada aos seus objetivos.",
  },
];

/** FAQ do blog — mantém relevância temática e captura buscas informacionais. */
export const blogFaq: FaqItem[] = [
  {
    question: "Sobre o que é o blog da AG LABS?",
    answer:
      "O blog da AG LABS traz conteúdos sobre inteligência artificial, agentes de IA, automação de processos e estratégia digital para empresas que querem crescer com tecnologia.",
  },
  {
    question: "Com que frequência novos artigos são publicados?",
    answer:
      "Publicamos novos artigos regularmente, sempre com foco em aplicações práticas de IA e automação para negócios.",
  },
  {
    question: "Como aplicar IA e automação na minha empresa?",
    answer:
      "Além dos artigos do blog, a AG LABS desenvolve agentes de IA, automações e websites sob medida. Fale com a nossa equipe pelo site para uma avaliação do seu caso.",
  },
];

interface FaqSectionProps {
  items: FaqItem[];
  id?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  className?: string;
}

export function FaqSection({
  items,
  id = "faq",
  eyebrow = "FAQ",
  title = "Perguntas frequentes",
  subtitle,
  className,
}: FaqSectionProps) {
  return (
    <section
      id={id}
      className={
        className ??
        "w-full bg-background py-16 md:py-24 border-t border-border/30"
      }
    >
      <div className="mx-auto max-w-3xl px-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-blue-500 mb-4">
          {eyebrow}
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold text-white">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-3 text-muted-foreground max-w-xl">{subtitle}</p>
        )}

        <Accordion type="single" collapsible className="mt-8">
          {items.map((it, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="border-white/10"
            >
              <AccordionTrigger className="text-base text-white/90 hover:no-underline hover:text-white">
                {it.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {it.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
