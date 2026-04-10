"use client"

import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

export default function AboutSection() {
  return (
    <section className="py-20 md:py-28 bg-background" id="sobre">
      <div className="mx-auto max-w-7xl space-y-16 px-6 md:px-8 lg:px-12 xl:px-20">

        <div className="grid gap-6 text-center md:grid-cols-2 md:gap-12 md:text-left">
          <div>
            <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-[0.3em] block mb-3">
              (SOBRE NÓS)
            </span>
            <h2 className="tracking-tighter text-3xl font-medium md:text-4xl lg:text-5xl text-foreground text-balance">
              Transformamos complexidade em resultado
            </h2>
          </div>
          <p className="text-muted-foreground text-base leading-relaxed self-end">
            A AG LABS é uma agência especializada em inteligência artificial. Combinamos tecnologia de ponta com design estratégico para construir sistemas que realmente funcionam — e geram resultado para o seu negócio.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6">

          <div className="md:flex-1">
            <img
              src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200"
              alt="AG LABS - Inteligência Artificial"
              className="rounded-2xl object-cover w-full h-[300px] sm:h-[360px] md:h-full min-h-[400px]"
            />
          </div>

          <div className="flex flex-col gap-6 md:flex-1">

            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 250, damping: 20 }}
              className="relative overflow-hidden rounded-2xl bg-zinc-950 text-white shadow-lg border border-white/5"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="relative h-52 w-full overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=800"
                  alt="Agentes Autônomos"
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-0 h-28 w-full bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-transparent" />
              </motion.div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">Velocidade com Precisão</h3>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                  Entregamos projetos de IA com agilidade e qualidade — do conceito ao deploy em produção.
                </p>
                <Button
                  variant="outline"
                  className="mt-4 border-white/20 text-white hover:bg-white hover:text-black"
                >
                  Saiba Mais
                  <ChevronRight className="size-4" />
                </Button>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 250, damping: 20 }}
              className="relative overflow-hidden rounded-2xl shadow-lg border border-white/5"
            >
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800"
                alt="Interfaces de Alto Desempenho"
                className="h-full w-full object-cover min-h-[200px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-semibold text-white">Design para Converter</h3>
                <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
                  Interfaces modernas e escaláveis que unem estética e performance para negócios digitais.
                </p>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  )
}
