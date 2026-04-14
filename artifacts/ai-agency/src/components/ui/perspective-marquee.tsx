"use client";

import * as React from "react";

export interface PerspectiveMarqueeProps {
  items?: string[];
  fontSize?: number;
  color?: string;
  fontWeight?: number;
  pixelsPerFrame?: number;
  rotateY?: number;
  rotateX?: number;
  perspective?: number;
  fadeColor?: string;
  background?: string;
  speed?: number;
  className?: string;
}

const FONT_FAMILY =
  "var(--font-geist-sans), -apple-system, BlinkMacSystemFont, sans-serif";

const DEFAULT_ITEMS = [
  "Agentes de IA",
  "Automações",
  "Interfaces",
  "Workflows",
  "Software",
  "Landing Pages",
  "Integrações",
  "Analytics",
];

export function PerspectiveMarqueePlayer({
  items = DEFAULT_ITEMS,
  fontSize = 84,
  color = "#fafafa",
  fontWeight = 700,
  pixelsPerFrame = 2,
  rotateY = -28,
  rotateX = 8,
  perspective = 1200,
  fadeColor = "#050505",
  background = "#050505",
  speed = 1,
  className,
}: PerspectiveMarqueeProps) {
  const trackRef = React.useRef<HTMLDivElement>(null);
  const frameRef = React.useRef(0);
  const rafRef = React.useRef<number>(0);

  const itemPadding = fontSize * 0.9;
  const approxItemWidth = React.useMemo(
    () =>
      items.reduce(
        (acc, item) => acc + item.length * fontSize * 0.6 + itemPadding,
        0,
      ),
    [items, fontSize, itemPadding],
  );

  const rendered = [...items, ...items, ...items];

  React.useEffect(() => {
    const spans = trackRef.current?.querySelectorAll<HTMLSpanElement>("span");

    const animate = () => {
      frameRef.current += speed;
      const offset = -((frameRef.current * pixelsPerFrame) % approxItemWidth);

      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(${offset}px)`;
      }

      if (spans) {
        spans.forEach((span, i) => {
          const itemCenter =
            i * (approxItemWidth / items.length) +
            approxItemWidth / items.length / 2 +
            offset;
          const norm = (itemCenter - 640) / 640;
          const distance = Math.min(1, Math.abs(norm));
          const blurPx = distance * 6;
          const opacity = 1 - distance * 0.4;
          span.style.filter = `blur(${blurPx}px)`;
          span.style.opacity = String(opacity);
        });
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [pixelsPerFrame, approxItemWidth, speed, items]);

  return (
    <div
      className={className}
      style={{
        position: "relative",
        width: "100%",
        height: "360px",
        background,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        perspective: `${perspective}px`,
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        <div
          ref={trackRef}
          style={{
            display: "flex",
            whiteSpace: "nowrap",
          }}
        >
          {rendered.map((item, i) => (
            <span
              key={i}
              style={{
                display: "inline-block",
                fontFamily: FONT_FAMILY,
                fontSize,
                fontWeight,
                color,
                letterSpacing: "-0.03em",
                paddingRight: itemPadding,
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Left/right fade */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background: `linear-gradient(90deg, ${fadeColor} 0%, transparent 18%, transparent 82%, ${fadeColor} 100%)`,
        }}
      />
      {/* Top/bottom fade */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background: `linear-gradient(180deg, ${fadeColor} 0%, transparent 25%, transparent 75%, ${fadeColor} 100%)`,
        }}
      />
    </div>
  );
}
