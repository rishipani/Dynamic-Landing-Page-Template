"use client"

import { useTheme } from "@/components/theme-provider"
import { AnimatedSection } from "@/components/animated-section"
import { AnimatedItems } from "@/components/animated-items"

export default function Services() {
  const { theme } = useTheme()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
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
              Template Features
            </h1>
          </AnimatedSection>
          <AnimatedSection animation="fade-in" delay={200}>
            <p
              className={`font-serif-body text-xl mb-8 max-w-2xl mx-auto px-4 ${theme === "dark" ? "text-white" : "text-black"}`}
            >
              Explore the comprehensive features and capabilities included in this modern website template
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Design Features Section */}
      <section id="web-design" className="py-20 px-4 bg-warm-ivory dark:bg-[#0a1929] transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="slide-up">
            <h2 className="luxury-heading text-4xl mb-8 text-black dark:text-white text-shadow-luxury">
              Design Features
            </h2>
          </AnimatedSection>
          <AnimatedSection animation="fade-in" delay={200}>
            <div className="bg-soft-beige dark:bg-[#112240] p-8 rounded-xl border-2 border-pale-taupe dark:border-yellow-500/50 mb-8">
              <p className="font-serif-body text-black dark:text-gray-100 mb-6 text-lg leading-relaxed">
                The template includes a comprehensive design system with carefully crafted components, color schemes,
                and typography that work harmoniously together.
              </p>
              <p className="font-serif-body text-black dark:text-gray-100 text-lg leading-relaxed">
                Every element is designed with attention to detail, ensuring a consistent and professional appearance
                across all pages and components.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedItems
            animation="slide-up"
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 stagger-transition"
          >
            {[
              { title: "Color System", description: "Warm, sophisticated color palette with excellent contrast" },
              { title: "Typography", description: "Premium serif and sans-serif font combinations" },
              { title: "Layout Grid", description: "Flexible, responsive grid system for all content types" },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-[#f9f6f0] dark:bg-[#0c1e36] p-8 rounded-xl border-2 border-[#e8dcc6] dark:border-yellow-500/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <h3 className="luxury-subheading text-2xl mb-4 text-rich-gold dark:text-yellow-400">{feature.title}</h3>
                <p className="font-sans text-black dark:text-gray-200 text-lg">{feature.description}</p>
              </div>
            ))}
          </AnimatedItems>
        </div>
      </section>

      {/* Technical Features Section */}
      <section id="development" className="py-20 px-4 bg-soft-beige dark:bg-[#112240] transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="slide-left">
            <h2 className="luxury-heading text-4xl mb-8 text-black dark:text-white text-shadow-luxury">
              Technical Features
            </h2>
          </AnimatedSection>
          <AnimatedSection animation="fade-in" delay={200}>
            <p className="font-serif-body text-black dark:text-gray-100 mb-12 text-xl">
              Built with modern web technologies and best practices for performance, accessibility, and maintainability.
            </p>
          </AnimatedSection>

          <AnimatedItems
            animation="scale-in"
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 stagger-transition"
          >
            {[
              {
                title: "Performance Optimized",
                description: "Fast loading times with optimized images and code splitting",
              },
              {
                title: "SEO Ready",
                description: "Built-in SEO optimization with proper meta tags and structure",
              },
              { title: "Responsive Design", description: "Perfect display on all devices from mobile to desktop" },
              {
                title: "Accessibility",
                description: "WCAG compliant with keyboard navigation and screen reader support",
              },
              { title: "Theme System", description: "Smooth light/dark theme switching with user preference storage" },
              { title: "Animation Library", description: "Smooth, performant animations that enhance user experience" },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-warm-ivory dark:bg-[#0a1929] p-8 rounded-xl border-2 border-pale-taupe dark:border-yellow-500/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <h3 className="luxury-subheading text-2xl mb-4 text-rich-gold dark:text-yellow-400">{feature.title}</h3>
                <p className="font-sans text-black dark:text-gray-200 text-lg">{feature.description}</p>
              </div>
            ))}
          </AnimatedItems>
        </div>
      </section>

      {/* Customization Section */}
      <section id="consulting" className="py-20 px-4 bg-warm-ivory dark:bg-[#0a1929] transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="slide-right">
            <h2 className="luxury-heading text-4xl mb-8 text-black dark:text-white text-shadow-luxury">
              Customization
            </h2>
          </AnimatedSection>
          <AnimatedSection animation="fade-in" delay={200}>
            <p className="font-serif-body text-black dark:text-gray-100 mb-12 text-xl">
              Easy to customize and extend with well-organized code structure and comprehensive documentation.
            </p>
          </AnimatedSection>

          <AnimatedItems animation="slide-up" className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Component Library", description: "Reusable components with consistent styling and behavior" },
              {
                title: "Theme Configuration",
                description: "Easy color and typography customization through CSS variables",
              },
              {
                title: "Layout Flexibility",
                description: "Modular layout system that adapts to different content needs",
              },
              {
                title: "Developer Experience",
                description: "TypeScript support with excellent IDE integration and debugging",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-8 border-2 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 bg-soft-beige dark:bg-[#112240] border-pale-taupe dark:border-yellow-500/50"
              >
                <h3 className="luxury-subheading text-2xl mb-4 text-rich-gold dark:text-yellow-400">{feature.title}</h3>
                <p className="font-sans text-black dark:text-gray-200 text-lg">{feature.description}</p>
              </div>
            ))}
          </AnimatedItems>
        </div>
      </section>
    </div>
  )
}
