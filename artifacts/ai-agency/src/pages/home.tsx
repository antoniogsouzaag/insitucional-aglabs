import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { MinimalistHero } from '@/components/ui/minimalist-hero';
import AboutSection from '@/components/ui/about-section';
import { FeatureCarousel } from '@/components/ui/feature-carousel';
import ElegantCarousel from '@/components/ui/elegant-carousel';
import TechMarquee from '@/components/ui/tech-marquee';

const HomePage = () => {
  const navLinks = [
    { label: 'HOME', href: '#' },
    { label: 'SOBRE NÓS', href: '#sobre-nos' },
    { label: 'SERVIÇOS', href: '#services' },
    { label: 'CASES', href: '#cases' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#' },
    { icon: Instagram, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Linkedin, href: '#' },
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
          part1: 'Simples e',
          part2: 'Inteligente.',
        }}
        socialLinks={socialLinks}
        locationText="Brasil"
      />
      <TechMarquee />
      <AboutSection />
      <section id="services" className="w-full bg-background py-8 md:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 mb-10 md:mb-14">
          <h2 className="text-4xl md:text-5xl font-semibold text-white">Nossos Serviços</h2>
          <p className="mt-3 text-muted-foreground max-w-xl">Soluções sob medida para impulsionar o seu negócio com inteligência artificial.</p>
        </div>
        <FeatureCarousel />
      </section>
      <div id="cases">
        <ElegantCarousel />
      </div>
    </>
  );
};

export default HomePage;
