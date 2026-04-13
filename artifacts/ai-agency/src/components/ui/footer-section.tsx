'use client';
import React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';

interface FooterLink {
  title: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
  label: string;
  links: FooterLink[];
}

const footerLinks: FooterSection[] = [
  {
    label: 'Navegação',
    links: [
      { title: 'Início', href: '#' },
      { title: 'Sobre Nós', href: '#sobre-nos' },
      { title: 'Serviços', href: '#services' },
      { title: 'Cases', href: '#cases' },
    ],
  },
  {
    label: 'Serviços',
    links: [
      { title: 'Corporate Agent', href: 'https://rag.aglabs.api.br/' },
      { title: 'Websites que Vendem', href: 'https://lp.aglabs.ia.br/' },
      { title: 'Software Performance', href: '#' },
      { title: 'Workflows Inteligence', href: '#' },
    ],
  },
  {
    label: 'Empresa',
    links: [
      { title: 'Sobre a AG LABS', href: '#sobre-nos' },
      { title: 'Política de Privacidade', href: '#' },
      { title: 'Termos de Uso', href: '#' },
      { title: 'Contato', href: '#' },
    ],
  },
  {
    label: 'Redes Sociais',
    links: [
      { title: 'Facebook', href: '#', icon: FacebookIcon },
      { title: 'Instagram', href: '#', icon: InstagramIcon },
      { title: 'Twitter', href: '#', icon: TwitterIcon },
      { title: 'LinkedIn', href: '#', icon: LinkedinIcon },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative w-full border-t border-border/30 bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/5%),transparent)] px-6 py-12 lg:py-16">
      <div className="bg-foreground/20 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-px rounded-full blur" />

      <div className="mx-auto max-w-6xl grid w-full gap-8 xl:grid-cols-3 xl:gap-8">
        <AnimatedContainer className="space-y-4">
          <span className="text-xl font-bold tracking-widest text-white">AG LABS</span>
          <p className="text-muted-foreground mt-4 text-sm leading-relaxed max-w-xs">
            Agentes autônomos, sistemas inteligentes e interfaces de alto desempenho para o crescimento do seu negócio.
          </p>
          <p className="text-muted-foreground text-xs pt-2">
            © {new Date().getFullYear()} AG LABS. Todos os direitos reservados.
          </p>
        </AnimatedContainer>

        <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-2 xl:mt-0">
          {footerLinks.map((section, index) => (
            <AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
              <div className="mb-10 md:mb-0">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-white/60">{section.label}</h3>
                <ul className="text-muted-foreground mt-4 space-y-2 text-sm">
                  {section.links.map((link) => (
                    <li key={link.title}>
                      <a
                        href={link.href}
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="hover:text-white inline-flex items-center transition-all duration-300"
                      >
                        {link.icon && <link.icon className="me-1.5 size-4" />}
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedContainer>
          ))}
        </div>
      </div>
    </footer>
  );
}

type ViewAnimationProps = {
  delay?: number;
  className?: ComponentProps<typeof motion.div>['className'];
  children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
      whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
