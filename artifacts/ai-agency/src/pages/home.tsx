import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { MinimalistHero } from '@/components/ui/minimalist-hero';

const HomePage = () => {
  const navLinks = [
    { label: 'HOME', href: '#' },
    { label: 'SERVICOS', href: '#' },
    { label: 'CASES', href: '#' },
    { label: 'SOBRE NOS', href: '#' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#' },
    { icon: Instagram, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Linkedin, href: '#' },
  ];

  return (
    <MinimalistHero
      logoText="AG LABS"
      navLinks={navLinks}
      mainText="Agentes autônomos, sistemas inteligentes e interfaces de alto desempenho para o crescimento do seu negócio."
      readMoreLink="#"
      imageSrc="https://udcsokdtdqqdnoqozbxh.supabase.co/storage/v1/object/public/heros-lp/aglabs/1.jpeg"
      imageAlt="AG LABS - Agência de Inteligência Artificial"
      overlayText={{
        part1: 'Simples e',
        part2: 'Inteligente.',
      }}
      socialLinks={socialLinks}
      locationText="Brasil"
    />
  );
};

export default HomePage;
