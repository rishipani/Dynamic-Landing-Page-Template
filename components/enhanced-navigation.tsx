"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "@/components/theme-toggle"
import { useScrollDirection } from "@/hooks/use-scroll-direction"
import { useActiveSection } from "@/hooks/use-active-section"
import { useScrollProgress } from "@/hooks/use-scroll-progress"
import { Menu, X, Search, Globe, ChevronDown, Home, User, Briefcase, Mail, Bell, ArrowUp } from "lucide-react"

const EnhancedNavigation = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [language, setLanguage] = useState("EN")
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null)

  const pathname = usePathname()
  const scrollDirection = useScrollDirection()
  const activeSection = useActiveSection()
  const scrollProgress = useScrollProgress()

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      setScrolled(isScrolled)
      setShowScrollTop(window.scrollY > 400)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Smooth scroll function
  const smoothScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
    setMobileMenuOpen(false)
  }

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const navItems = [
    {
      name: "Home",
      path: "/",
      icon: Home,
      anchor: "hero",
      subItems: [
        { name: "Features", anchor: "features" },
        { name: "About", anchor: "about" },
      ],
    },
    {
      name: "About",
      path: "/about",
      icon: User,
      subItems: [
        { name: "Our Story", path: "/about#story" },
        { name: "Team", path: "/about#team" },
        { name: "Values", path: "/about#values" },
      ],
    },
    {
      name: "Services",
      path: "/services",
      icon: Briefcase,
      subItems: [
        { name: "Web Design", path: "/services#web-design" },
        { name: "Development", path: "/services#development" },
        { name: "Consulting", path: "/services#consulting" },
      ],
    },
    {
      name: "Contact",
      path: "/contact",
      icon: Mail,
    },
  ]

  const languages = ["EN", "ES", "FR", "DE"]

  // Hide navigation on scroll down, show on scroll up
  const shouldHideNav = scrollDirection === "down" && scrolled && !mobileMenuOpen

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-transparent z-[60]">
        <div
          className="h-full bg-gradient-to-r from-rich-gold to-yellow-400 dark:from-yellow-400 dark:to-yellow-300 scroll-progress"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* Enhanced Navigation */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out theme-transition ${
          shouldHideNav ? "-translate-y-full" : "translate-y-0"
        } ${
          scrolled
            ? "bg-warm-ivory/80 dark:bg-[#0a1929]/80 backdrop-blur-lg border-b border-pale-taupe/30 dark:border-yellow-500/20 py-3 shadow-lg"
            : "bg-transparent py-5"
        }`}
        style={{
          backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
        }}
      >
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            {/* Brand Logo */}
            <Link
              href="/"
              className={`text-2xl font-serif-display font-bold transition-all duration-300 text-shadow-luxury group ${
                scrolled ? "text-rich-gold dark:text-yellow-400" : "text-white dark:text-white"
              }`}
            >
              <span className="group-hover:scale-105 inline-block transition-transform duration-300">Your Logo</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <ul className="flex space-x-8">
                {navItems.map((item) => (
                  <li key={item.path} className="relative group">
                    <div
                      className="flex items-center space-x-1 cursor-pointer"
                      onMouseEnter={() => item.subItems && setDropdownOpen(item.name)}
                      onMouseLeave={() => setDropdownOpen(null)}
                    >
                      <item.icon className="w-4 h-4" />
                      {item.anchor ? (
                        <button
                          onClick={() => smoothScrollTo(item.anchor)}
                          className={`relative font-serif-body font-medium transition-all duration-300 ${
                            pathname === item.path || activeSection === item.anchor
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
                            className={`absolute left-0 bottom-[-4px] h-[3px] transition-all duration-300 ${
                              scrolled ? "bg-rich-gold dark:bg-yellow-400" : "bg-white dark:bg-yellow-300"
                            } ${
                              pathname === item.path || activeSection === item.anchor
                                ? "w-full"
                                : "w-0 group-hover:w-full"
                            }`}
                          />
                        </button>
                      ) : (
                        <Link
                          href={item.path}
                          className={`relative font-serif-body font-medium transition-all duration-300 ${
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
                            className={`absolute left-0 bottom-[-4px] h-[3px] transition-all duration-300 ${
                              scrolled ? "bg-rich-gold dark:bg-yellow-400" : "bg-white dark:bg-yellow-300"
                            } ${pathname === item.path ? "w-full" : "w-0 group-hover:w-full"}`}
                          />
                        </Link>
                      )}
                      {item.subItems && (
                        <ChevronDown className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" />
                      )}
                    </div>

                    {/* Dropdown Menu */}
                    {item.subItems && dropdownOpen === item.name && (
                      <div
                        className="absolute top-full left-0 mt-2 w-48 bg-warm-ivory/95 dark:bg-[#0a1929]/95 backdrop-blur-lg border border-pale-taupe/30 dark:border-yellow-500/20 rounded-lg shadow-xl py-2 z-50"
                        onMouseEnter={() => setDropdownOpen(item.name)}
                        onMouseLeave={() => setDropdownOpen(null)}
                      >
                        {item.subItems.map((subItem) => (
                          <div key={subItem.name}>
                            {subItem.anchor ? (
                              <button
                                onClick={() => smoothScrollTo(subItem.anchor)}
                                className="w-full text-left px-4 py-2 text-black dark:text-white hover:bg-rich-gold/10 dark:hover:bg-yellow-400/10 transition-colors duration-200"
                              >
                                {subItem.name}
                              </button>
                            ) : (
                              <Link
                                href={subItem.path!}
                                className="block px-4 py-2 text-black dark:text-white hover:bg-rich-gold/10 dark:hover:bg-yellow-400/10 transition-colors duration-200"
                              >
                                {subItem.name}
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ul>

              {/* Search */}
              <div className="relative">
                <button
                  onClick={() => setSearchOpen(!searchOpen)}
                  className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                    scrolled ? "text-black dark:text-white" : "text-white dark:text-white"
                  }`}
                >
                  <Search className="w-5 h-5" />
                </button>
                {searchOpen && (
                  <div className="absolute top-full right-0 mt-2 w-64 bg-warm-ivory/95 dark:bg-[#0a1929]/95 backdrop-blur-lg border border-pale-taupe/30 dark:border-yellow-500/20 rounded-lg shadow-xl p-4">
                    <input
                      type="text"
                      placeholder="Search..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full px-3 py-2 bg-transparent border border-pale-taupe dark:border-yellow-500/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-rich-gold dark:focus:ring-yellow-400 text-black dark:text-white"
                      autoFocus
                    />
                  </div>
                )}
              </div>

              {/* Language Switcher */}
              <div className="relative group">
                <button
                  className={`flex items-center space-x-1 p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                    scrolled ? "text-black dark:text-white" : "text-white dark:text-white"
                  }`}
                >
                  <Globe className="w-5 h-5" />
                  <span className="text-sm font-serif-body">{language}</span>
                </button>
                <div className="absolute top-full right-0 mt-2 w-20 bg-warm-ivory/95 dark:bg-[#0a1929]/95 backdrop-blur-lg border border-pale-taupe/30 dark:border-yellow-500/20 rounded-lg shadow-xl py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => setLanguage(lang)}
                      className="w-full px-3 py-1 text-sm text-black dark:text-white hover:bg-rich-gold/10 dark:hover:bg-yellow-400/10 transition-colors duration-200"
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              </div>

              {/* Notifications */}
              <div className="relative">
                <button
                  className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                    scrolled ? "text-black dark:text-white" : "text-white dark:text-white"
                  }`}
                >
                  <Bell className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs flex items-center justify-center text-white">
                    3
                  </span>
                </button>
              </div>

              {/* Theme Toggle */}
              <div className={`${scrolled ? "text-black dark:text-white" : "text-white dark:text-white"}`}>
                <ThemeToggle />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
                scrolled ? "text-black dark:text-white" : "text-white dark:text-white"
              }`}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-warm-ivory/95 dark:bg-[#0a1929]/95 backdrop-blur-lg border-b border-pale-taupe/30 dark:border-yellow-500/20 shadow-xl">
            <div className="container mx-auto px-6 py-6">
              {/* Mobile Search */}
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 bg-transparent border border-pale-taupe dark:border-yellow-500/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-rich-gold dark:focus:ring-yellow-400 text-black dark:text-white"
                />
              </div>

              {/* Mobile Navigation Items */}
              <ul className="space-y-4">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <div className="flex items-center justify-between">
                      {item.anchor ? (
                        <button
                          onClick={() => smoothScrollTo(item.anchor)}
                          className="flex items-center space-x-3 text-black dark:text-white font-serif-body font-medium"
                        >
                          <item.icon className="w-5 h-5" />
                          <span>{item.name}</span>
                        </button>
                      ) : (
                        <Link
                          href={item.path}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center space-x-3 text-black dark:text-white font-serif-body font-medium"
                        >
                          <item.icon className="w-5 h-5" />
                          <span>{item.name}</span>
                        </Link>
                      )}
                    </div>
                    {item.subItems && (
                      <ul className="ml-8 mt-2 space-y-2">
                        {item.subItems.map((subItem) => (
                          <li key={subItem.name}>
                            {subItem.anchor ? (
                              <button
                                onClick={() => smoothScrollTo(subItem.anchor)}
                                className="text-gray-600 dark:text-gray-300 hover:text-rich-gold dark:hover:text-yellow-400 transition-colors duration-200"
                              >
                                {subItem.name}
                              </button>
                            ) : (
                              <Link
                                href={subItem.path!}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-gray-600 dark:text-gray-300 hover:text-rich-gold dark:hover:text-yellow-400 transition-colors duration-200"
                              >
                                {subItem.name}
                              </Link>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>

              {/* Mobile Theme Toggle and Language */}
              <div className="flex items-center justify-between mt-6 pt-6 border-t border-pale-taupe dark:border-yellow-500/20">
                <div className="flex items-center space-x-4">
                  <ThemeToggle />
                  <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="bg-transparent border border-pale-taupe dark:border-yellow-500/50 rounded px-2 py-1 text-black dark:text-white"
                  >
                    {languages.map((lang) => (
                      <option key={lang} value={lang} className="bg-warm-ivory dark:bg-[#0a1929]">
                        {lang}
                      </option>
                    ))}
                  </select>
                </div>
                <button className="p-2 text-black dark:text-white">
                  <Bell className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 p-3 bg-rich-gold dark:bg-yellow-400 text-warm-ivory dark:text-[#0a1929] rounded-full shadow-lg hover:scale-110 transition-all duration-300 hover:shadow-xl"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </>
  )
}

export default EnhancedNavigation
