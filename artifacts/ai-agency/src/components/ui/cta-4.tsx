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
  description = "Treinado para operar como parte do seu negócio 24h por dia, sem falhas, sem limites. Um agente que não só atende, opera, decide e executa como parte do seu time",
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
    <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6">
      <div className="mx-auto max-w-5xl w-full">
        <div className="flex flex-col gap-8 rounded-xl bg-muted px-6 py-10 sm:px-8 sm:py-12 md:flex-row md:items-start md:justify-between lg:px-16 lg:py-14">
          {/* Left column */}
          <div className="flex flex-col gap-5 md:w-1/2">
            <h4 className="text-2xl font-bold leading-snug sm:text-3xl">
              {title}
            </h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {description}
            </p>
            <a
              href={buttonUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <HoverButton>{buttonText}</HoverButton>
            </a>
          </div>

          {/* Divider — horizontal on mobile, vertical on desktop */}
          <div className="h-px w-full bg-border md:hidden" />
          <div className="hidden md:block md:w-px md:self-stretch bg-border" />

          {/* Right column */}
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
    </section>
  );
};
