"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "@/components/theme-toggle"

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll)

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Services", path: "/services" },
    { name: "Get in Touch", path: "/contact" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-warm-ivory dark:bg-[#0a1929] shadow-lg border-b border-pale-taupe dark:border-yellow-500/30 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className={`text-2xl font-serif-display font-bold transition-colors duration-300 text-shadow-luxury ${
              scrolled ? "text-rich-gold dark:text-yellow-400" : "text-white dark:text-white"
            }`}
          >
            BrandName
          </Link>

          <div className="flex items-center space-x-8">
            <ul className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className={`relative group transition-colors duration-300 font-serif-body font-medium ${
                      pathname === item.path
                        ? scrolled
                          ? "text-rich-gold dark:text-yellow-400 font-bold"
                          : "text-white dark:text-white font-bold"
                        : scrolled
                          ? "text-black dark:text-white hover:text-rich-gold dark:hover:text-yellow-400"
                          : "text-gray-200 dark:text-gray-300 hover:text-white dark:hover:text-yellow-300"
                    }`}
                  >
                    {item.name}
                    <span
                      className={`absolute left-0 bottom-[-4px] w-0 h-[3px] transition-all duration-300 group-hover:w-full ${
                        scrolled ? "bg-rich-gold dark:bg-yellow-400" : "bg-white dark:bg-yellow-300"
                      } ${pathname === item.path ? "w-full" : ""}`}
                    ></span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className={`${scrolled ? "text-black dark:text-white" : "text-white dark:text-white"}`}>
              <ThemeToggle />
            </div>

            <button
              className={`md:hidden transition-colors duration-300 ${
                scrolled ? "text-black dark:text-white" : "text-white dark:text-white"
              }`}
              aria-label="Toggle mobile menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
