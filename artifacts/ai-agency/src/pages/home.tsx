import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Bot,
  Globe,
  Zap,
  Database,
  Code2,
  Brain,
  Network,
  Cpu,
} from "lucide-react";
import { MinimalistHero } from "@/components/ui/minimalist-hero";
import AboutSection from "@/components/ui/about-section";
import { FeatureCarousel } from "@/components/ui/feature-carousel";
import ElegantCarousel from "@/components/ui/elegant-carousel";
import TechMarquee from "@/components/ui/tech-marquee";
import { Footer } from "@/components/ui/footer-section";
import { Radar, IconContainer } from "@/components/ui/radar-effect";
import FeatureSections from "@/components/ui/feature-sections";
import { Cta4 } from "@/components/ui/cta-4";

const HomePage = () => {
  const navLinks = [
    { label: "HOME", href: "#" },
    { label: "SOBRE NÓS", href: "#sobre-nos" },
    { label: "SERVIÇOS", href: "#services" },
    { label: "CASES", href: "#cases" },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/profile.php?id=61573483665476",
    },
    { icon: Instagram, href: "https://www.instagram.com/ag_labs" },
    { icon: Twitter, href: "https://x.com/aglabsrv" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/ag-labs" },
  ];

  return (
    <>
      <MinimalistHero
        logoText="AG LABS"
        navLinks={navLinks}
        mainText="Agentes autônomos, sistemas inteligentes e interfaces de alto desempenho para o crescimento do seu negócio."
        readMoreLink="#services"
        imageSrc="https://udcsokdtdqqdnoqozbxh.supabase.co/storage/v1/object/public/heros-lp/aglabs/2.png"
        imageAlt="AG LABS - Agência de Inteligência Artificial"
        overlayText={{
          part1: "Simples e",
          part2: "Inteligente.",
        }}
        socialLinks={socialLinks}
        locationText="Brasil"
      />
      <TechMarquee />
      <AboutSection />
      <section
        id="services"
        className="w-full bg-background py-8 md:py-16 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-6 mb-10 md:mb-14">
          <h2 className="text-4xl md:text-5xl font-semibold text-white">
            Soluções Personalizadas
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl">
            Projetos sob medida para impulsionar o seu negócio com inteligência
            artificial.
          </p>
        </div>
        <FeatureCarousel />
      </section>
      <div id="cases">
        <ElegantCarousel />
      </div>
      {/* CTA Radar Section */}
      <section className="relative w-full bg-background py-16 md:py-24 overflow-hidden border-t border-border/30">
        <div className="mx-auto max-w-4xl px-6 text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-500 mb-4">
            IA + WebDesign
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Coloque seu negócio no radar
            <br className="hidden md:block" /> dos seus clientes
          </h2>
          <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
            Combine agentes de IA, automações e interfaces de alto desempenho
            para que o seu negócio evolua, seja encontrado, lembrado e
            escolhido.
          </p>
        </div>

        <div className="relative flex h-[420px] w-full max-w-3xl mx-auto flex-col items-center justify-center space-y-4 overflow-hidden px-4">
          {/* Row 1 */}
          <div className="mx-auto w-full max-w-3xl">
            <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0">
              <IconContainer
                text="Agentes de IA"
                delay={0.2}
                icon={<Bot className="h-6 w-6 text-blue-400" />}
              />
              <IconContainer
                text="Presença Digital"
                delay={0.4}
                icon={<Globe className="h-6 w-6 text-blue-400" />}
              />
              <IconContainer
                text="Automações"
                delay={0.3}
                icon={<Zap className="h-6 w-6 text-blue-400" />}
              />
            </div>
          </div>
          {/* Row 2 */}
          <div className="mx-auto w-full max-w-md">
            <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0">
              <IconContainer
                text="Dados & Analytics"
                delay={0.5}
                icon={<Database className="h-6 w-6 text-blue-400" />}
              />
              <IconContainer
                text="Redes Neurais"
                delay={0.8}
                icon={<Brain className="h-6 w-6 text-blue-400" />}
              />
            </div>
          </div>
          {/* Row 3 */}
          <div className="mx-auto w-full max-w-3xl">
            <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0">
              <IconContainer
                text="Integrações"
                delay={0.6}
                icon={<Network className="h-6 w-6 text-blue-400" />}
              />
              <IconContainer
                text="Software"
                delay={0.7}
                icon={<Code2 className="h-6 w-6 text-blue-400" />}
              />
            </div>
          </div>

          <Radar className="absolute -bottom-12" />
          <div className="absolute bottom-0 z-[41] h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
        </div>
      </section>

      <FeatureSections />
      <Cta4 />
      <Footer />
    </>
  );
};

export default HomePage;
