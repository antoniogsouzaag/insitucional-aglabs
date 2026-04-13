"use client";

import { animate, motion, useMotionValue } from "framer-motion";
import React, { CSSProperties, useEffect, useRef, useState } from "react";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function useMeasure() {
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });
  useEffect(() => {
    if (!ref.current) return;
    const observer = new ResizeObserver(([entry]) => {
      setSize({
        width: entry.contentRect.width,
        height: entry.contentRect.height,
      });
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, size] as const;
}

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type InfiniteSliderProps = {
  children: React.ReactNode;
  gap?: number;
  speed?: number;
  speedOnHover?: number;
  direction?: "horizontal" | "vertical";
  reverse?: boolean;
  className?: string;
};

function InfiniteSlider({
  children,
  gap = 16,
  speed = 100,
  speedOnHover,
  direction = "horizontal",
  reverse = false,
  className,
}: InfiniteSliderProps) {
  const [currentSpeed, setCurrentSpeed] = useState(speed);
  const [ref, { width, height }] = useMeasure();
  const translation = useMotionValue(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    let controls: ReturnType<typeof animate> | undefined;
    const size = direction === "horizontal" ? width : height;
    if (size === 0) return;

    const contentSize = size + gap;
    const from = reverse ? -contentSize / 2 : 0;
    const to = reverse ? 0 : -contentSize / 2;

    const distanceToTravel = Math.abs(to - from);
    const duration = distanceToTravel / currentSpeed;

    if (isTransitioning) {
      const remainingDistance = Math.abs(translation.get() - to);
      const transitionDuration = remainingDistance / currentSpeed;
      controls = animate(translation, [translation.get(), to], {
        ease: "linear",
        duration: transitionDuration,
        onComplete: () => {
          setIsTransitioning(false);
          setKey((prevKey) => prevKey + 1);
        },
      });
    } else {
      controls = animate(translation, [from, to], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
        onRepeat: () => {
          translation.set(from);
        },
      });
    }

    return () => controls?.stop();
  }, [
    key,
    translation,
    currentSpeed,
    width,
    height,
    gap,
    isTransitioning,
    direction,
    reverse,
  ]);

  const hoverProps = speedOnHover
    ? {
        onHoverStart: () => {
          setIsTransitioning(true);
          setCurrentSpeed(speedOnHover);
        },
        onHoverEnd: () => {
          setIsTransitioning(true);
          setCurrentSpeed(speed);
        },
      }
    : {};

  return (
    <div className={cn("overflow-hidden", className)}>
      <motion.div
        className="flex w-max"
        style={{
          ...(direction === "horizontal"
            ? { x: translation }
            : { y: translation }),
          gap: `${gap}px`,
          flexDirection: direction === "horizontal" ? "row" : "column",
        }}
        ref={ref}
        {...hoverProps}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}

type BlurredInfiniteSliderProps = InfiniteSliderProps & {
  fadeWidth?: number;
  containerClassName?: string;
};

function BlurredInfiniteSlider({
  children,
  fadeWidth = 80,
  containerClassName,
  ...sliderProps
}: BlurredInfiniteSliderProps) {
  const maskStyle: CSSProperties = {
    maskImage: `linear-gradient(to right, transparent, black ${fadeWidth}px, black calc(100% - ${fadeWidth}px), transparent)`,
    WebkitMaskImage: `linear-gradient(to right, transparent, black ${fadeWidth}px, black calc(100% - ${fadeWidth}px), transparent)`,
  };

  return (
    <div
      className={cn("relative w-full", containerClassName)}
      style={maskStyle}
    >
      <InfiniteSlider {...sliderProps}>{children}</InfiniteSlider>
    </div>
  );
}

const LOGOS = [
  {
    src: "https://cdn.simpleicons.org/supabase/3ECF8E",
    alt: "Supabase Logo",
    height: 24,
  },
  {
    src: "https://cdn.simpleicons.org/docker/2496ED",
    alt: "Docker Logo",
    height: 24,
  },
  {
    src: "https://cdn.simpleicons.org/nextdotjs/ffffff",
    alt: "Next.js Logo",
    height: 22,
  },
  {
    src: "https://cdn.simpleicons.org/nodedotjs/5FA04E",
    alt: "Node.js Logo",
    height: 24,
  },
  {
    src: "https://cdn.simpleicons.org/n8n/EA4B71",
    alt: "n8n Logo",
    height: 24,
  },
  {
    src: "https://cdn.simpleicons.org/react/61DAFB",
    alt: "React Logo",
    height: 24,
  },
  {
    src: "https://cdn.simpleicons.org/typescript/3178C6",
    alt: "TypeScript Logo",
    height: 22,
  },
  {
    src: "https://cdn.simpleicons.org/claude/DE7356",
    alt: "Claude Logo",
    height: 22,
  },
  {
    src: "https://cdn.simpleicons.org/clerk/ffffff",
    alt: "Clerk Logo",
    height: 22,
  },
  {
    src: "https://cdn.simpleicons.org/github/ffffff",
    alt: "GitHub Logo",
    height: 22,
  },
  {
    src: "https://cdn.simpleicons.org/python/3776AB",
    alt: "Python Logo",
    height: 22,
  },
  {
    src: "https://cdn.simpleicons.org/postgresql/4169E1",
    alt: "PostgreSQL Logo",
    height: 22,
  },
  {
    src: "https://cdn.simpleicons.org/vercel/ffffff",
    alt: "Vercel Logo",
    height: 20,
  },
  {
    src: "https://cdn.simpleicons.org/cloudflare/F38020",
    alt: "Cloudflare Logo",
    height: 28,
  },
  {
    src: "https://cdn.simpleicons.org/brevo/006A43",
    alt: "Brevo Logo",
    height: 28,
  },
];

export default function TechMarquee() {
  return (
    <section className="bg-background overflow-hidden py-16 w-full border-t border-border/30">
      <div className="m-auto max-w-7xl px-6">
        <div className="flex flex-col items-center md:flex-row">
          <div className="flex-shrink-0 text-center md:text-right md:max-w-44 md:border-r md:border-gray-200 dark:md:border-gray-800 md:pr-6">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Tech Stack
            </p>
          </div>
          <div className="w-full py-6 md:w-auto md:flex-1">
            <BlurredInfiniteSlider
              speedOnHover={20}
              speed={40}
              gap={112}
              fadeWidth={80}
            >
              {LOGOS.map((logo) => (
                <div key={logo.src} className="flex items-center">
                  <img
                    className="mx-auto w-fit"
                    src={logo.src}
                    alt={logo.alt}
                    style={{ height: `${logo.height}px` }}
                    width="auto"
                  />
                </div>
              ))}
            </BlurredInfiniteSlider>
          </div>
        </div>
      </div>
    </section>
  );
}
