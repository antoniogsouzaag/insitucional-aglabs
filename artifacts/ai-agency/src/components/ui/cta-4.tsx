import { Check } from "lucide-react";
import { HoverButton } from "@/components/ui/hover-button";

interface Cta4Props {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonUrl?: string;
  items?: string[];
}

export const Cta4 = ({
  title = "Seu funcionário digital, 24h, não falta, não erra...",
  description = "Enquanto você lê isso, seus concorrentes estão automatizando atendimento, análises, conteúdo e vendas com agentes de IA. Descubra onde o seu negócio está perdendo tempo — e deixe um agente resolver isso agora.",
  buttonText = "Automatizar minha empresa →",
  buttonUrl = "https://rag.aglabs.api.br/",
  items = [
    "Atendentes de WhatsApp que nunca dormem",
    "Agentes que executam, decidem e reportam",
    "Análise de dados e relatórios no piloto automático",
    "Criação de conteúdo e copy para marketing",
    "Prospecção e qualificação de leads com IA",
  ],
}: Cta4Props) => {
  return (
    <section className="py-32">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="max-w-5xl w-full">
            <div className="flex flex-col items-start justify-between gap-10 rounded-lg bg-muted px-6 py-10 md:flex-row lg:px-20 lg:py-16">
              <div className="md:w-1/2 space-y-5">
                <h4 className="text-2xl font-bold md:text-3xl leading-snug">
                  {title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {description}
                </p>
                <a
                  href={buttonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2"
                >
                  <HoverButton>{buttonText}</HoverButton>
                </a>
              </div>
              <div className="md:w-5/12">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                  O que os agentes fazem por você
                </p>
                <ul className="flex flex-col space-y-3 text-sm font-medium">
                  {items.map((item, idx) => (
                    <li className="flex items-start gap-3" key={idx}>
                      <Check className="mt-0.5 size-4 flex-shrink-0 text-blue-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
