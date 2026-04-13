import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Cta4Props {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonUrl?: string;
  items?: string[];
}

export const Cta4 = ({
  title = "Audite e automatize sua empresa com Agentes de IA",
  description = "Implante funcionários digitais que trabalham 24h — sem pausas, sem erros, sem custo fixo. Cada agente é treinado para o seu negócio e entra em operação em dias.",
  buttonText = "Quero meu Agente de IA",
  buttonUrl = "https://rag.aglabs.api.br/",
  items = [
    "Atendentes de WhatsApp com IA",
    "Agentes que executam tarefas e tomam decisões",
    "Análise de dados e relatórios automáticos",
    "Criadores de conteúdo e copy para marketing",
    "Automação de prospecção e qualificação de leads",
  ],
}: Cta4Props) => {
  return (
    <section className="py-32">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="max-w-5xl">
            <div className="flex flex-col items-start justify-between gap-8 rounded-lg bg-muted px-6 py-10 md:flex-row lg:px-20 lg:py-16">
              <div className="md:w-1/2">
                <h4 className="mb-1 text-2xl font-bold md:text-3xl">{title}</h4>
                <p className="text-muted-foreground">{description}</p>
                <Button className="mt-6" asChild>
                  <a href={buttonUrl} target="_blank" rel="noopener noreferrer">
                    {buttonText} <ArrowRight className="size-4" />
                  </a>
                </Button>
              </div>
              <div className="md:w-1/3">
                <ul className="flex flex-col space-y-2 text-sm font-medium">
                  {items.map((item, idx) => (
                    <li className="flex items-center" key={idx}>
                      <Check className="mr-4 size-4 flex-shrink-0" />
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
