import React, { CSSProperties } from 'react';
import { cn } from '@/lib/utils';

const TECH_LOGOS = [
  {
    name: 'Supabase',
    src: 'https://cdn.simpleicons.org/supabase/3ECF8E',
  },
  {
    name: 'Docker',
    src: 'https://cdn.simpleicons.org/docker/2496ED',
  },
  {
    name: 'Next.js',
    src: 'https://cdn.simpleicons.org/nextdotjs/ffffff',
  },
  {
    name: 'Node.js',
    src: 'https://cdn.simpleicons.org/nodedotjs/5FA04E',
  },
  {
    name: 'n8n',
    src: 'https://cdn.simpleicons.org/n8n/EA4B71',
  },
  {
    name: 'React',
    src: 'https://cdn.simpleicons.org/react/61DAFB',
  },
  {
    name: 'TypeScript',
    src: 'https://cdn.simpleicons.org/typescript/3178C6',
  },
  {
    name: 'Anthropic',
    src: 'https://cdn.simpleicons.org/anthropic/ffffff',
  },
  {
    name: 'OpenAI',
    src: 'https://cdn.simpleicons.org/openai/ffffff',
  },
  {
    name: 'Google Gemini',
    src: 'https://cdn.simpleicons.org/googlegemini/8E75B2',
  },
  {
    name: 'Python',
    src: 'https://cdn.simpleicons.org/python/3776AB',
  },
  {
    name: 'PostgreSQL',
    src: 'https://cdn.simpleicons.org/postgresql/4169E1',
  },
  {
    name: 'Vercel',
    src: 'https://cdn.simpleicons.org/vercel/ffffff',
  },
  {
    name: 'GitHub',
    src: 'https://cdn.simpleicons.org/github/ffffff',
  },
];

const marqueeStyle: CSSProperties = {
  maskImage:
    'linear-gradient(to right, transparent, black 80px, black calc(100% - 80px), transparent)',
  WebkitMaskImage:
    'linear-gradient(to right, transparent, black 80px, black calc(100% - 80px), transparent)',
};

export default function TechMarquee() {
  return (
    <section className="w-full bg-background py-10 overflow-hidden border-t border-border/30">
      <div className="mx-auto max-w-7xl px-6 mb-6">
        <p className="text-center text-sm text-muted-foreground tracking-widest uppercase">
          Tecnologias que dominamos
        </p>
      </div>

      <div className="relative w-full" style={marqueeStyle}>
        <div className="flex w-max animate-marquee gap-16 items-center">
          {[...TECH_LOGOS, ...TECH_LOGOS].map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex flex-col items-center gap-2 group"
            >
              <img
                src={logo.src}
                alt={`${logo.name} logo`}
                className="h-8 w-8 object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                width={32}
                height={32}
              />
              <span className="text-xs text-muted-foreground/60 group-hover:text-muted-foreground transition-colors duration-300 whitespace-nowrap">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
