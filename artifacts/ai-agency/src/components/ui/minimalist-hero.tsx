import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MinimalistHeroProps {
  logoText: string;
  navLinks: { label: string; href: string }[];
  mainText: string;
  readMoreLink: string;
  imageSrc: string;
  imageAlt: string;
  overlayText: {
    part1: string;
    part2: string;
  };
  socialLinks: { icon: LucideIcon; href: string }[];
  locationText: string;
  className?: string;
}

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-sm font-medium tracking-widest text-foreground/60 transition-colors hover:text-foreground"
  >
    {children}
  </a>
);

const SocialIcon = ({ href, icon: Icon }: { href: string; icon: LucideIcon }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-foreground/60 transition-colors hover:text-foreground">
    <Icon className="h-5 w-5" />
  </a>
);

export const MinimalistHero = ({
  logoText,
  navLinks,
  mainText,
  readMoreLink,
  imageSrc,
  imageAlt,
  overlayText,
  socialLinks,
  locationText,
  className,
}: MinimalistHeroProps) => {
  return (
    <div
      className={cn(
        'relative flex h-screen w-full flex-col items-center justify-between overflow-hidden bg-background px-6 py-6 font-sans md:px-12 md:py-8',
        className
      )}
    >
      {/* Header */}
      <header className="z-30 flex w-full max-w-7xl items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="text-xl font-bold tracking-wider"
        >
          {logoText}
        </motion.div>
        <div className="hidden items-center space-x-8 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.label} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </div>
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col space-y-1.5 md:hidden"
          aria-label="Open menu"
        >
          <span className="block h-0.5 w-6 bg-foreground"></span>
          <span className="block h-0.5 w-6 bg-foreground"></span>
          <span className="block h-0.5 w-5 bg-foreground"></span>
        </motion.button>
      </header>

      {/* Main Content */}
      <div className="relative flex w-full max-w-7xl flex-grow flex-col items-center justify-center gap-8 md:grid md:grid-cols-3 md:items-center md:gap-0">

        {/* Left: description text — desktop only */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="z-20 hidden md:block md:order-1 text-left self-center"
        >
          <p className="max-w-[220px] text-sm leading-relaxed text-foreground/70">{mainText}</p>
          <a href={readMoreLink} className="mt-4 inline-block text-sm font-medium text-foreground underline decoration-from-font">
            Saiba Mais
          </a>
        </motion.div>

        {/* Center: image + circle */}
        <div className="relative order-1 md:order-2 flex justify-center items-center w-full h-full">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="absolute z-0 h-[310px] w-[310px] rounded-full bg-blue-600/90 sm:h-[360px] sm:w-[360px] md:h-[410px] md:w-[410px] lg:h-[456px] lg:w-[456px]"
          />
          <motion.img
            src={imageSrc}
            alt={imageAlt}
            className="relative z-10 w-56 object-contain md:w-64 lg:w-72 scale-[1.5] md:scale-[1.7] lg:scale-[2.1]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = `https://placehold.co/400x500/2563eb/ffffff?text=AG+LABS`;
            }}
          />
        </div>

        {/* Right: headline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="z-20 order-2 md:order-3 flex flex-col items-center text-center md:items-start md:text-left gap-4 self-center"
        >
          <h1 className="text-5xl font-extrabold leading-tight text-foreground sm:text-6xl md:text-5xl lg:text-6xl xl:text-7xl">
            {overlayText.part1}
            <br />
            {overlayText.part2}
          </h1>

          {/* Mobile-only description */}
          <div className="md:hidden">
            <p className="max-w-xs text-sm leading-relaxed text-foreground/70">{mainText}</p>
            <a href={readMoreLink} className="mt-3 inline-block text-sm font-medium text-foreground underline decoration-from-font">
              Saiba Mais
            </a>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="z-30 flex w-full max-w-7xl items-center justify-between pt-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="flex items-center space-x-4"
        >
          {socialLinks.map((link, index) => (
            <SocialIcon key={index} href={link.href} icon={link.icon} />
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="text-sm font-medium text-foreground/70"
        >
          {locationText}
        </motion.div>
      </footer>
    </div>
  );
};
