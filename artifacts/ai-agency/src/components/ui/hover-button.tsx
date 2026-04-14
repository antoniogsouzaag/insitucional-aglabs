"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface HoverButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

const HoverButton = React.forwardRef<HTMLButtonElement, HoverButtonProps>(
  ({ className, children, onPointerMove, onPointerEnter, onPointerLeave, ...props }, ref) => {
    const buttonRef = React.useRef<HTMLButtonElement>(null)
    const isListeningRef = React.useRef(false)
    const lastAddedRef = React.useRef(0)

    const spawnRipple = React.useCallback((x: number, y: number) => {
      const btn = buttonRef.current
      if (!btn) return
      const ripple = document.createElement("span")
      ripple.className = "hover-btn-ripple"
      ripple.style.left = `${x}px`
      ripple.style.top = `${y}px`
      btn.appendChild(ripple)
      setTimeout(() => ripple.remove(), 1000)
    }, [])

    const handlePointerMove = React.useCallback(
      (event: React.PointerEvent<HTMLButtonElement>) => {
        if (!isListeningRef.current) return
        const now = Date.now()
        if (now - lastAddedRef.current < 100) return
        lastAddedRef.current = now
        const rect = event.currentTarget.getBoundingClientRect()
        spawnRipple(event.clientX - rect.left, event.clientY - rect.top)
        onPointerMove?.(event)
      },
      [spawnRipple, onPointerMove]
    )

    const handlePointerEnter = React.useCallback(
      (event: React.PointerEvent<HTMLButtonElement>) => {
        isListeningRef.current = true
        onPointerEnter?.(event)
      },
      [onPointerEnter]
    )

    const handlePointerLeave = React.useCallback(
      (event: React.PointerEvent<HTMLButtonElement>) => {
        isListeningRef.current = false
        onPointerLeave?.(event)
      },
      [onPointerLeave]
    )

    return (
      <button
        ref={buttonRef}
        className={cn(
          "relative isolate px-8 py-3 rounded-md",
          "text-foreground font-medium text-base leading-6",
          "backdrop-blur-lg bg-[rgba(43,55,80,0.1)]",
          "cursor-pointer overflow-hidden",
          "before:content-[''] before:absolute before:inset-0",
          "before:rounded-[inherit] before:pointer-events-none",
          "before:shadow-[inset_0_0_0_1px_rgba(170,202,255,0.2),inset_0_0_16px_0_rgba(170,202,255,0.1),inset_0_-3px_12px_0_rgba(170,202,255,0.15),0_1px_3px_0_rgba(0,0,0,0.50),0_4px_12px_0_rgba(0,0,0,0.45)]",
          "before:transition-transform before:duration-300",
          "active:before:scale-[0.975]",
          className
        )}
        onPointerMove={handlePointerMove}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        {...props}
      >
        <span className="relative z-10">{children}</span>
      </button>
    )
  }
)

HoverButton.displayName = "HoverButton"

export { HoverButton }
