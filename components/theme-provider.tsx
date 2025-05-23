"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"

type Theme = "light" | "dark" | "system"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
  isTransitioning: boolean
}

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
  isTransitioning: false,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({ children, defaultTheme = "system", ...props }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme
    if (savedTheme) {
      setTheme(savedTheme)
    }
  }, [])

  useEffect(() => {
    const root = window.document.documentElement

    // Start transition
    setIsTransitioning(true)
    root.classList.add("theme-switching")

    // Add transition loading state
    document.body.classList.add("theme-loading")

    const applyTheme = () => {
      root.classList.remove("light", "dark")

      if (theme === "system") {
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
        root.classList.add(systemTheme)
        return
      }

      root.classList.add(theme)
      localStorage.setItem("theme", theme)
    }

    // Small delay to ensure smooth transition
    const timeoutId = setTimeout(() => {
      applyTheme()

      // End transition after animation completes
      setTimeout(() => {
        setIsTransitioning(false)
        root.classList.remove("theme-switching")
        document.body.classList.remove("theme-loading")
      }, 300) // Match CSS transition duration
    }, 50)

    return () => {
      clearTimeout(timeoutId)
      setIsTransitioning(false)
      root.classList.remove("theme-switching")
      document.body.classList.remove("theme-loading")
    }
  }, [theme])

  const handleSetTheme = (newTheme: Theme) => {
    if (newTheme !== theme) {
      setTheme(newTheme)
    }
  }

  const value = {
    theme,
    setTheme: handleSetTheme,
    isTransitioning,
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }

  return context
}
