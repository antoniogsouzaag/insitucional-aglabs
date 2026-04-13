"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  Network,
  Globe,
  CheckCircle2,
  Cloud,
  BarChart2,
  Wand2,
  Shield,
  Lightbulb,
  Layers,
} from "lucide-react";
import { cn } from "@/lib/utils";

const FEATURES = [
  {
    id: "agents",
    label: "Agentes Autônomos",
    icon: Bot,
    image:
      "https://i.pinimg.com/736x/22/5e/d6/225ed64777b68c6108f4894f3da7c662.jpg",
    description: "IAs que trabalham 24/7 automatizando decisões e operações.",
  },
  {
    id: "automation",
    label: "Automação de Processos",
    icon: Wand2,
    image:
      "https://i.pinimg.com/1200x/c7/b0/8a/c7b08a12b8de7d123d2a7a0fcd3da650.jpg",
    description:
      "Elimine tarefas repetitivas e ganhe escala sem aumentar equipe.",
  },
  {
    id: "generative",
    label: "IA Generativa",
    icon: Lightbulb,
    image:
      "https://i.pinimg.com/736x/4f/4a/11/4f4a1110573077a5ed78066f7dc10b4d.jpg",
    description:
      "Conteúdo, código e insights gerados por modelos de última geração.",
  },
  {
    id: "analytics",
    label: "Análise Preditiva",
    icon: BarChart2,
    image:
      "https://i.pinimg.com/1200x/b7/7a/42/b77a4264911d8cd2e5756fb1eed222f0.jpg",
    description: "Antecipe tendências e tome decisões baseadas em dados reais.",
  },
  {
    id: "integration",
    label: "Integração de Sistemas",
    icon: Network,
    image:
      "https://i.pinimg.com/1200x/43/8c/40/438c40ba655ffde56fe17ae18029a766.jpg",
    description:
      "Conectamos ferramentas, APIs e dados em um único fluxo inteligente.",
  },
  {
    id: "security",
    label: "Segurança & Compliance",
    icon: Shield,
    image:
      "https://i.pinimg.com/736x/e3/cf/07/e3cf07daebe1f8ab5fd3ee4b1ddae08a.jpg",
    description:
      "Proteção de dados e conformidade com LGPD e padrões enterprise.",
  },
  {
    id: "cloud",
    label: "Cloud & Escalabilidade",
    icon: Cloud,
    image:
      "https://i.pinimg.com/736x/4e/af/87/4eaf876784b933ad9c17cc03944a8ff3.jpg",
    description: "Infraestrutura sob demanda que cresce com o seu negócio.",
  },
  {
    id: "interfaces",
    label: "Interfaces Inteligentes",
    icon: Layers,
    image:
      "https://i.pinimg.com/1200x/4c/02/a9/4c02a97b1d03151e93fa1fd6f8c6193c.jpg",
    description: "UX de alto desempenho integrada para máxima conversão.",
  },
  {
    id: "global",
    label: "Alcance Global",
    icon: Globe,
    image:
      "https://i.pinimg.com/736x/4e/e6/4d/4ee64d10e48c9bb92145ca6715f15e92.jpg",
    description:
      "Soluções prontas para operar em múltiplos mercados e idiomas.",
  },
  {
    id: "results",
    label: "Resultados Mensuráveis",
    icon: CheckCircle2,
    image:
      "https://i.pinimg.com/736x/d0/e3/45/d0e345fee5e315782ba616f8aca45d2c.jpg",
    description:
      "Cada entrega com relatórios claros e rastreáveis desde o primeiro dia.",
  },
];

const AUTO_PLAY_INTERVAL = 3000;
const ITEM_HEIGHT = 65;

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export function FeatureCarousel() {
  const [step, setStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const currentIndex =
    ((step % FEATURES.length) + FEATURES.length) % FEATURES.length;

  const nextStep = useCallback(() => {
    setStep((prev) => prev + 1);
  }, []);

  const handleChipClick = (index: number) => {
    const diff = (index - currentIndex + FEATURES.length) % FEATURES.length;
    if (diff > 0) setStep((s) => s + diff);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextStep, AUTO_PLAY_INTERVAL);
    return () => clearInterval(interval);
  }, [nextStep, isPaused]);

  const getCardStatus = (index: number) => {
    const diff = index - currentIndex;
    const len = FEATURES.length;
    let normalizedDiff = diff;
    if (diff > len / 2) normalizedDiff -= len;
    if (diff < -len / 2) normalizedDiff += len;
    if (normalizedDiff === 0) return "active";
    if (normalizedDiff === -1) return "prev";
    if (normalizedDiff === 1) return "next";
    return "hidden";
  };

  return (
    <div className="w-full max-w-7xl mx-auto md:p-8">
      <div className="relative overflow-hidden rounded-[2.5rem] lg:rounded-[4rem] flex flex-col lg:flex-row min-h-[600px] lg:aspect-video border border-border/40">
        {/* Left: scrolling chip list */}
        <div className="w-full lg:w-[40%] min-h-[350px] md:min-h-[450px] lg:h-full relative z-30 flex flex-col items-start justify-center overflow-hidden px-8 md:px-16 lg:pl-16 bg-blue-500">
          <div className="absolute inset-x-0 top-0 h-12 md:h-20 lg:h-16 bg-gradient-to-b from-blue-500 via-blue-500/80 to-transparent z-40" />
          <div className="absolute inset-x-0 bottom-0 h-12 md:h-20 lg:h-16 bg-gradient-to-t from-blue-500 via-blue-500/80 to-transparent z-40" />

          <div className="relative w-full h-full flex items-center justify-center lg:justify-start z-20">
            {FEATURES.map((feature, index) => {
              const isActive = index === currentIndex;
              const distance = index - currentIndex;
              const wrappedDistance = wrap(
                -(FEATURES.length / 2),
                FEATURES.length / 2,
                distance,
              );
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.id}
                  style={{ height: ITEM_HEIGHT, width: "fit-content" }}
                  animate={{
                    y: wrappedDistance * ITEM_HEIGHT,
                    opacity: 1 - Math.abs(wrappedDistance) * 0.25,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 90,
                    damping: 22,
                    mass: 1,
                  }}
                  className="absolute flex items-center justify-start"
                >
                  <button
                    onClick={() => handleChipClick(index)}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    className={cn(
                      "relative flex items-center gap-4 px-6 md:px-10 lg:px-8 py-3.5 md:py-5 lg:py-4 rounded-full transition-all duration-700 text-left group border",
                      isActive
                        ? "bg-white text-blue-500 border-white z-10"
                        : "bg-transparent text-white/60 border-white/20 hover:border-white/40 hover:text-white",
                    )}
                  >
                    <Icon
                      className={cn(
                        "transition-colors duration-500 shrink-0",
                        isActive ? "text-blue-500" : "text-white/40",
                      )}
                      size={18}
                      strokeWidth={2}
                    />
                    <span className="font-normal text-sm md:text-[15px] tracking-tight whitespace-nowrap uppercase">
                      {feature.label}
                    </span>
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right: image cards */}
        <div className="flex-1 min-h-[500px] md:min-h-[600px] lg:h-full relative bg-secondary/30 flex items-center justify-center py-16 md:py-24 lg:py-16 px-6 md:px-12 lg:px-10 overflow-hidden border-t lg:border-t-0 lg:border-l border-border/20">
          <div className="relative w-full max-w-[420px] aspect-[4/5] flex items-center justify-center">
            {FEATURES.map((feature, index) => {
              const status = getCardStatus(index);
              const isActive = status === "active";
              const isPrev = status === "prev";
              const isNext = status === "next";
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.id}
                  initial={false}
                  animate={{
                    x: isActive ? 0 : isPrev ? -100 : isNext ? 100 : 0,
                    scale: isActive ? 1 : isPrev || isNext ? 0.85 : 0.7,
                    opacity: isActive ? 1 : isPrev || isNext ? 0.4 : 0,
                    rotate: isPrev ? -3 : isNext ? 3 : 0,
                    zIndex: isActive ? 20 : isPrev || isNext ? 10 : 0,
                    pointerEvents: isActive ? "auto" : "none",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 25,
                    mass: 0.8,
                  }}
                  className="absolute inset-0 rounded-[2rem] md:rounded-[2.8rem] overflow-hidden border-4 md:border-8 border-background bg-background origin-center"
                >
                  <img
                    src={feature.image}
                    alt={feature.label}
                    className={cn(
                      "w-full h-full object-cover transition-all duration-700",
                      isActive
                        ? "grayscale-0 blur-0"
                        : "grayscale blur-[2px] brightness-75",
                    )}
                  />

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute inset-x-0 bottom-0 p-10 pt-32 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end pointer-events-none"
                      >
                        <div className="bg-background text-foreground px-4 py-1.5 rounded-full text-[11px] font-normal uppercase tracking-[0.2em] w-fit shadow-lg mb-3 border border-border/50">
                          {index + 1} • {feature.label}
                        </div>
                        <p className="text-white font-normal text-xl md:text-2xl leading-tight drop-shadow-md tracking-tight">
                          {feature.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div
                    className={cn(
                      "absolute top-8 left-8 flex items-center gap-3 transition-opacity duration-300",
                      isActive ? "opacity-100" : "opacity-0",
                    )}
                  >
                    <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_10px_white]" />
                    <span className="text-white/80 text-[10px] font-normal uppercase tracking-[0.3em] font-mono">
                      AG LABS
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureCarousel;
