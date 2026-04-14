"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface HoverButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

const HoverButton = React.forwardRef<HTMLButtonElement, HoverButtonProps>(
  ({ className, children, ...props }, ref) => {
    const buttonRef = React.useRef<HTMLButtonElement>(null)
    const [isListening, setIsListening] = React.useState(false)
    const [circles, setCircles] = React.useState<Array<{
      id: number
      x: number
      y: number
      fadeState: "in" | "out" | null
    }>>([])
    const lastAddedRef = React.useRef(0)

    const createCircle = React.useCallback((x: number, y: number) => {
      setCircles((prev) => [
        ...prev,
        { id: Date.now(), x, y, fadeState: null },
      ])
    }, [])

    const handlePointerMove = React.useCallback(
      (event: React.PointerEvent<HTMLButtonElement>) => {
        if (!isListening) return
        const currentTime = Date.now()
        if (currentTime - lastAddedRef.current > 80) {
          lastAddedRef.current = currentTime
          const rect = event.currentTarget.getBoundingClientRect()
          const x = event.clientX - rect.left
          const y = event.clientY - rect.top
          createCircle(x, y)
        }
      },
      [isListening, createCircle]
    )

    const handlePointerEnter = React.useCallback(() => {
      setIsListening(true)
    }, [])

    const handlePointerLeave = React.useCallback(() => {
      setIsListening(false)
    }, [])

    React.useEffect(() => {
      circles.forEach((circle) => {
        if (!circle.fadeState) {
          setTimeout(() => {
            setCircles((prev) =>
              prev.map((c) => c.id === circle.id ? { ...c, fadeState: "in" } : c)
            )
          }, 0)

          setTimeout(() => {
            setCircles((prev) =>
              prev.map((c) => c.id === circle.id ? { ...c, fadeState: "out" } : c)
            )
          }, 800)

          setTimeout(() => {
            setCircles((prev) => prev.filter((c) => c.id !== circle.id))
          }, 1600)
        }
      })
    }, [circles])

    return (
      <button
        ref={buttonRef}
        className={cn(
          "relative px-8 py-3 rounded-md",
          "text-foreground font-medium text-base leading-6",
          "backdrop-blur-lg bg-[rgba(43,55,80,0.1)]",
          "cursor-pointer overflow-hidden",
          "shadow-[inset_0_0_0_1px_rgba(170,202,255,0.2),inset_0_0_16px_0_rgba(170,202,255,0.1),inset_0_-3px_12px_0_rgba(170,202,255,0.15),0_1px_3px_0_rgba(0,0,0,0.50),0_4px_12px_0_rgba(0,0,0,0.45)]",
          "active:scale-[0.975] transition-transform duration-150",
          className
        )}
        onPointerMove={handlePointerMove}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        {...props}
      >
        {circles.map(({ id, x, y, fadeState }) => (
          <span
            key={id}
            className={cn(
              "absolute w-20 h-20 -translate-x-1/2 -translate-y-1/2 rounded-full",
              "blur-xl pointer-events-none transition-opacity",
              fadeState === "in" && "opacity-60 duration-300",
              fadeState === "out" && "opacity-0 duration-[800ms]",
              !fadeState && "opacity-0 duration-0"
            )}
            style={{
              left: x,
              top: y,
              background: "radial-gradient(circle, #60a5fa, #3b82f6)",
            }}
          />
        ))}
        <span className="relative z-10">{children}</span>
      </button>
    )
  }
)

HoverButton.displayName = "HoverButton"

export { HoverButton }
