"use client"

import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

export default function AboutSection() {
  return (
    <div className="flex flex-col">

      {/* ---------------- HERO SECTION ---------------- */}
      <section className="py-16 md:py-28 bg-background">
        <div className="mx-auto max-w-6xl space-y-2 px-6">
          <img
            className="rounded-xl object-cover w-full h-[240px] md:h-[460px]"
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200"
            alt="AG LABS - Inteligência Artificial"
          />

          <div className="grid gap-6 md:grid-cols-2 md:gap-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-white leading-snug">
              O ecossistema{" "}
              <span className="text-blue-500">AG LABS</span>{" "}
              <span className="text-gray-400">
                une modelos, produtos e plataformas de IA.
              </span>
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <p>
                A AG LABS evolui além dos modelos. Construímos um ecossistema completo — de produtos a APIs e plataformas que ajudam empresas e desenvolvedores a inovar com inteligência artificial.
              </p>
              <Button
                asChild
                variant="secondary"
                size="sm"
                className="gap-1 pr-1.5"
              >
                <a href="#">
                  <span>Saiba Mais</span>
                  <ChevronRight className="size-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- ABOUT SECTION ---------------- */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl space-y-16 px-6">

          {/* Header */}
          <div className="grid gap-6 text-center md:grid-cols-2 md:gap-12 md:text-left">
            <h2 className="text-4xl md:text-5xl font-semibold text-white">
              Sobre Nós
            </h2>
            <p className="text-muted-foreground">
              A AG LABS é uma equipe apaixonada por criar soluções inovadoras que capacitam negócios a prosperar na era digital com inteligência artificial.
            </p>
          </div>

          {/* ---------------- THREE CARDS LAYOUT ---------------- */}
          <div className="flex flex-col md:flex-row gap-6 mt-16">

            {/* LEFT BIG IMAGE */}
            <div className="md:flex-1">
              <img
                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800"
                alt="AG LABS"
                className="rounded-xl object-cover w-full h-[300px] sm:h-[360px] md:h-full"
              />
            </div>

            {/* RIGHT TWO CARDS */}
            <div className="flex flex-col gap-6 md:flex-1">

              {/* FIRST CARD */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 250, damping: 20 }}
                className="relative overflow-hidden rounded-xl bg-black text-white shadow-lg"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="relative h-60 sm:h-64 md:h-48 w-full overflow-hidden"
                >
                  <img
                    src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=600"
                    alt="Acelere o crescimento"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute bottom-0 h-32 w-full bg-gradient-to-t from-black via-black/70 to-transparent" />
                </motion.div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">Acelere o Crescimento</h3>
                  <p className="mt-2 text-sm text-gray-300">
                    Nossas soluções impulsionam inovação, eficiência e resultados mensuráveis para empresas.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-4 border-white text-black dark:text-white hover:bg-white hover:text-black"
                  >
                    Saiba Mais
                  </Button>
                </div>
              </motion.div>

              {/* SECOND CARD */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 250, damping: 20 }}
                className="relative overflow-hidden rounded-xl bg-muted shadow-lg"
              >
                <img
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600"
                  alt="Design de Alto Desempenho"
                  className="h-full w-full object-cover min-h-[220px] sm:min-h-[240px] md:min-h-[220px]"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent text-white">
                  <h3 className="text-xl font-bold">Design Pronto para o Futuro</h3>
                  <p className="mt-2 text-sm text-gray-200">
                    Interfaces intuitivas e escaláveis para negócios modernos combinando estética e funcionalidade.
                  </p>
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </section>

    </div>
  )
}
