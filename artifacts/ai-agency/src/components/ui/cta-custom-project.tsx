"use client";

import { ChevronRight, MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL =
  "https://wa.me/556493259857?text=Olá!%20Tenho%20interesse%20em%20um%20projeto%20personalizado%20com%20a%20AG%20LABS.";

export function CtaCustomProject() {
  return (
    <section
      className="relative w-full overflow-hidden rounded-2xl border border-white/10
      bg-[linear-gradient(to_bottom,#0a0a0a,#050505)]
      px-6 py-16 text-center"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 -z-10 opacity-30 h-full w-full
        bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)]
        bg-[size:4rem_4rem]
        [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_60%,transparent_100%)]"
      />

      {/* Blue radial glow top */}
      <div className="absolute -top-16 left-1/2 -translate-x-1/2 h-40 w-[500px] rounded-full bg-blue-600/20 blur-3xl pointer-events-none" />

      {/* Radial bottom separator */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2
        h-[200px] w-[120%] rounded-[100%]
        bg-[radial-gradient(closest-side,#050505_80%,transparent)]
        pointer-events-none"
      />

      {/* Eyebrow */}
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="group inline-block mb-6">
        <span
          className="text-xs text-gray-400 font-semibold uppercase tracking-widest mx-auto px-5 py-2
          bg-gradient-to-tr from-white/5 via-white/5 to-transparent
          border border-white/10
          rounded-full w-fit flex items-center justify-center gap-1"
        >
          <Sparkles className="w-3.5 h-3.5 text-blue-400" />
          Projetos Sob Medida
          <ChevronRight className="w-3.5 h-3.5 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </a>

      {/* Title */}
      <h2
        className="text-balance text-4xl sm:text-5xl md:text-6xl font-semibold leading-none tracking-tighter
        bg-gradient-to-br from-white from-30% to-white/40 bg-clip-text text-transparent
        mb-5 animate-fade-in"
      >
        Seu projeto,
        <br className="hidden sm:block" /> do jeito que precisa ser.
      </h2>

      {/* Subtitle */}
      <p
        className="mb-10 text-balance text-base md:text-lg tracking-tight text-gray-400
        max-w-xl mx-auto animate-fade-in"
      >
        Desenvolvemos soluções 100% personalizadas — agentes de IA, automações,
        sistemas e interfaces feitos exclusivamente para o seu negócio, do zero
        até a entrega.
      </p>

      {/* CTA button */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
        <Button
          asChild
          className="h-12 px-8 text-base font-semibold bg-green-600 hover:bg-green-500 text-white rounded-full transition-all duration-300 shadow-lg shadow-green-900/30"
        >
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-5 h-5 mr-2" />
            Falar no WhatsApp
          </a>
        </Button>
        <Button
          asChild
          variant="outline"
          className="h-12 px-8 text-base font-medium rounded-full border-white/20 text-white bg-transparent hover:bg-white/5"
        >
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#services")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Ver soluções
          </a>
        </Button>
      </div>
    </section>
  );
}
