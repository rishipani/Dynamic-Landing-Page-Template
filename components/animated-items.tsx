"use client"

import React from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

type AnimationType = "fade-in" | "slide-up" | "slide-left" | "slide-right" | "scale-in"

interface AnimatedItemsProps {
  children: React.ReactNode
  animation?: AnimationType
  staggered?: boolean
  className?: string
  threshold?: number
  rootMargin?: string
}

export function AnimatedItems({
  children,
  animation = "fade-in",
  staggered = true,
  className = "",
  threshold = 0.1,
  rootMargin = "0px",
}: AnimatedItemsProps) {
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

  // Add stagger-item class to each child
  const childrenWithStagger = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        className: `${child.props.className || ""} ${staggered ? "stagger-item" : ""} animate-on-scroll ${
          isIntersecting ? getAnimationClass() : ""
        }`,
      })
    }
    return child
  })

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className={className}>
      {childrenWithStagger}
    </div>
  )
}
