"use client"

import { useTheme } from "@/components/theme-provider"
import { AnimatedSection } from "@/components/animated-section"
import { AnimatedItems } from "@/components/animated-items"

export default function About() {
  const { theme } = useTheme()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        id="story"
        className={`h-[50vh] flex items-center justify-center theme-transition ${
          theme === "dark" ? "hero-gradient-dark" : "hero-gradient-light"
        }`}
      >
        <div className="text-center">
          <AnimatedSection animation="slide-up">
            <h1
              className={`luxury-heading text-5xl mb-6 text-shadow-luxury ${
                theme === "dark" ? "text-white" : "text-black"
              }`}
            >
              About This Template
            </h1>
          </AnimatedSection>
          <AnimatedSection animation="fade-in" delay={200}>
            <p
              className={`font-serif-body text-xl mb-8 max-w-2xl mx-auto px-4 ${theme === "dark" ? "text-white" : "text-black"}`}
            >
              Discover the features, design philosophy, and technical details behind this modern template
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Template Story Section */}
      <section id="story" className="py-20 px-4 bg-warm-ivory dark:bg-[#0a1929] transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="slide-up">
            <h2 className="luxury-heading text-4xl mb-8 text-black dark:text-white text-shadow-luxury">
              Template Overview
            </h2>
          </AnimatedSection>
          <AnimatedSection animation="fade-in" delay={200}>
            <div className="bg-soft-beige dark:bg-[#112240] p-8 rounded-xl border-2 border-pale-taupe dark:border-yellow-500/50 mb-8">
              <p className="font-serif-body text-black dark:text-gray-100 mb-6 text-lg leading-relaxed">
                This template is designed for modern websites that need to balance elegance with functionality. It
                features a sophisticated design system with carefully chosen colors, typography, and animations.
              </p>
              <p className="font-serif-body text-black dark:text-gray-100 text-lg leading-relaxed">
                Built with accessibility in mind, the template includes smooth theme transitions, responsive design, and
                performance optimizations that work across all devices and user preferences.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedItems
            animation="slide-up"
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 stagger-transition"
          >
            <div className="bg-[#f9f6f0] dark:bg-[#0c1e36] p-8 rounded-xl border-2 border-[#e8dcc6] dark:border-yellow-500/50">
              <h2 className="luxury-subheading text-3xl mb-4 text-rich-gold dark:text-yellow-400">Design Philosophy</h2>
              <p className="font-serif-body text-black dark:text-gray-100 text-lg">
                Clean, modern aesthetics combined with warm, inviting colors create an experience that feels both
                professional and approachable.
              </p>
            </div>
            <div className="bg-[#f9f6f0] dark:bg-[#0c1e36] p-8 rounded-xl border-2 border-[#e8dcc6] dark:border-yellow-500/50">
              <h2 className="luxury-subheading text-3xl mb-4 text-rich-gold dark:text-yellow-400">
                Technical Features
              </h2>
              <p className="font-serif-body text-black dark:text-gray-100 text-lg">
                Built with Next.js, TypeScript, and Tailwind CSS for optimal performance, maintainability, and developer
                experience.
              </p>
            </div>
          </AnimatedItems>
        </div>
      </section>

      {/* Features Section */}
      <section id="team" className="py-20 px-4 bg-soft-beige dark:bg-[#112240] transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="slide-left">
            <h2 className="luxury-heading text-4xl mb-8 text-black dark:text-white text-shadow-luxury">Key Features</h2>
          </AnimatedSection>
          <AnimatedSection animation="fade-in" delay={200}>
            <p className="font-serif-body text-black dark:text-gray-100 mb-12 text-xl">
              Everything you need to create a modern, professional website with excellent user experience.
            </p>
          </AnimatedSection>

          <AnimatedItems
            animation="scale-in"
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 stagger-transition"
          >
            {[
              { name: "Responsive Design", feature: "Mobile-first approach" },
              { name: "Theme Switching", feature: "Light & dark modes" },
              { name: "Smooth Animations", feature: "Performance optimized" },
              { name: "Modern Typography", feature: "Premium font pairings" },
              { name: "Accessibility", feature: "WCAG compliant" },
              { name: "SEO Optimized", feature: "Search engine ready" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-warm-ivory dark:bg-[#0a1929] p-8 rounded-xl border-2 border-pale-taupe dark:border-yellow-500/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center"
              >
                <div className="w-16 h-16 bg-rich-gold dark:bg-yellow-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-serif-display font-bold text-warm-ivory dark:text-[#0a1929]">
                    {index + 1}
                  </span>
                </div>
                <h3 className="luxury-subheading text-2xl mb-2 text-rich-gold dark:text-yellow-400">{item.name}</h3>
                <p className="font-sans text-black dark:text-gray-200 text-lg">{item.feature}</p>
              </div>
            ))}
          </AnimatedItems>
        </div>
      </section>

      {/* Technical Details Section */}
      <section id="values" className="py-20 px-4 bg-warm-ivory dark:bg-[#0a1929] transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="slide-right">
            <h2 className="luxury-heading text-4xl mb-8 text-black dark:text-white text-shadow-luxury">
              Technical Stack
            </h2>
          </AnimatedSection>
          <AnimatedSection animation="fade-in" delay={200}>
            <p className="font-serif-body text-black dark:text-gray-100 mb-12 text-xl">
              Built with modern technologies and best practices for optimal performance and maintainability.
            </p>
          </AnimatedSection>

          <AnimatedItems animation="slide-up" className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Next.js 15", description: "React framework with App Router for optimal performance and SEO." },
              { title: "TypeScript", description: "Type-safe development with enhanced developer experience." },
              { title: "Tailwind CSS", description: "Utility-first CSS framework for rapid UI development." },
              {
                title: "Framer Motion",
                description: "Smooth animations and transitions with performance optimization.",
              },
            ].map((tech, index) => (
              <div
                key={index}
                className="p-8 border-2 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 bg-soft-beige dark:bg-[#112240] border-pale-taupe dark:border-yellow-500/50"
              >
                <h3 className="luxury-subheading text-2xl mb-4 text-rich-gold dark:text-yellow-400">{tech.title}</h3>
                <p className="font-sans text-black dark:text-gray-200 text-lg">{tech.description}</p>
              </div>
            ))}
          </AnimatedItems>
        </div>
      </section>
    </div>
  )
}
