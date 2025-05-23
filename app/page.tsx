"use client"

import { useTheme } from "@/components/theme-provider"
import { AnimatedSection } from "@/components/animated-section"
import { AnimatedItems } from "@/components/animated-items"

export default function Home() {
  const { theme } = useTheme()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        id="hero"
        className={`h-screen flex items-center justify-center theme-transition ${
          theme === "dark" ? "hero-gradient-dark" : "hero-gradient-light"
        }`}
      >
        <div className="text-center">
          <AnimatedSection animation="slide-up">
            <h1
              className={`luxury-heading text-6xl mb-6 text-shadow-luxury ${
                theme === "dark" ? "text-white" : "text-black"
              }`}
            >
              Welcome to Your Website
            </h1>
          </AnimatedSection>
          <AnimatedSection animation="fade-in" delay={200}>
            <p className={`font-serif-body text-2xl mb-8 ${theme === "dark" ? "text-white" : "text-black"}`}>
              Experience modern design with elegant theme switching and smooth animations
            </p>
          </AnimatedSection>
          <AnimatedSection animation="scale-in" delay={400}>
            <button
              className={`px-8 py-4 rounded-full font-serif-body font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                theme === "dark"
                  ? "bg-[#0a1929] text-yellow-400 hover:bg-[#112240] border-2 border-yellow-400"
                  : "bg-rich-gold text-warm-ivory hover:bg-[#b8941f] border-2 border-rich-gold"
              }`}
            >
              Get Started
            </button>
          </AnimatedSection>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-warm-ivory dark:bg-[#0a1929] transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="slide-up">
            <h2 className="luxury-heading text-4xl mb-8 text-black dark:text-white text-shadow-luxury">
              Amazing Features
            </h2>
          </AnimatedSection>
          <AnimatedItems
            animation="slide-up"
            staggered={true}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 stagger-transition"
          >
            {[
              {
                title: "Responsive Design",
                description: "Beautiful layouts that work perfectly on all devices and screen sizes.",
              },
              {
                title: "Theme Switching",
                description: "Elegant light and dark themes with smooth transition animations.",
              },
              {
                title: "Modern Typography",
                description: "Premium serif and sans-serif fonts for a luxurious reading experience.",
              },
              {
                title: "Smooth Animations",
                description: "Carefully crafted animations that enhance user experience without distraction.",
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

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-soft-beige dark:bg-[#112240] transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="slide-left">
            <h2 className="luxury-heading text-4xl mb-8 text-black dark:text-white text-shadow-luxury">
              About This Template
            </h2>
          </AnimatedSection>
          <AnimatedSection animation="slide-right" delay={200}>
            <div className="bg-warm-ivory dark:bg-[#0a1929] p-8 rounded-xl border-2 border-pale-taupe dark:border-yellow-500/50 shadow-lg">
              <p className="font-serif-body text-black dark:text-gray-100 mb-6 text-lg leading-relaxed">
                This is a modern, responsive website template designed with elegance and functionality in mind. It
                features a sophisticated design system with warm, inviting colors and premium typography.
              </p>
              <p className="font-serif-body text-black dark:text-gray-100 text-lg leading-relaxed">
                Switch between the warm ivory light theme and rich navy dark theme to experience the perfect balance of
                luxury and accessibility with smooth transition animations throughout.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
