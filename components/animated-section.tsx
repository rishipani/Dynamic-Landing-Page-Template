"use client"

import type React from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

type AnimationType = "fade-in" | "slide-up" | "slide-left" | "slide-right" | "scale-in"

interface AnimatedSectionProps {
  children: React.ReactNode
  animation?: AnimationType
  delay?: number
  className?: string
  threshold?: number
  rootMargin?: string
}

export function AnimatedSection({
  children,
  animation = "fade-in",
  delay = 0,
  className = "",
  threshold = 0.1,
  rootMargin = "0px",
}: AnimatedSectionProps) {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold,
    rootMargin,
    triggerOnce: true,
  })

  const getAnimationClass = () => {
    switch (animation) {
      case "fade-in":
        return "animate-fade-in"
      case "slide-up":
        return "animate-slide-up"
      case "slide-left":
        return "animate-slide-left"
      case "slide-right":
        return "animate-slide-right"
      case "scale-in":
        return "animate-scale-in"
      default:
        return "animate-fade-in"
    }
  }

  const getDelayClass = () => {
    if (delay === 0) return ""
    return `delay-${delay}`
  }

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`animate-on-scroll ${isIntersecting ? `${getAnimationClass()} ${getDelayClass()}` : ""} ${className}`}
    >
      {children}
    </div>
  )
}
