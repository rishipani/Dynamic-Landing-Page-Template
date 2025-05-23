"use client"

import { useTheme } from "@/components/theme-provider"
import { AnimatedSection } from "@/components/animated-section"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function Contact() {
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
              Get in Touch
            </h1>
          </AnimatedSection>
          <AnimatedSection animation="fade-in" delay={200}>
            <p
              className={`font-serif-body text-xl mb-8 max-w-2xl mx-auto px-4 ${theme === "dark" ? "text-white" : "text-black"}`}
            >
              This is a template contact page. Customize it with your own contact information and form handling
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 bg-warm-ivory dark:bg-[#0a1929] transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="slide-up">
            <h2 className="luxury-heading text-4xl mb-8 text-black dark:text-white text-shadow-luxury">Contact Form</h2>
          </AnimatedSection>
          <AnimatedSection animation="fade-in" delay={200}>
            <p className="font-serif-body text-black dark:text-gray-100 mb-12 text-xl">
              This contact form is ready to be connected to your preferred form handling service or backend API.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <AnimatedSection animation="slide-left" delay={300}>
              <div className="bg-soft-beige dark:bg-[#112240] p-8 rounded-xl border-2 border-pale-taupe dark:border-yellow-500/50">
                <form className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-lg font-serif-body font-bold text-black dark:text-white mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border-2 border-pale-taupe dark:border-yellow-500/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-rich-gold dark:focus:ring-yellow-400 bg-warm-ivory dark:bg-[#0a1929] text-black dark:text-white text-lg font-sans"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-lg font-serif-body font-bold text-black dark:text-white mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border-2 border-pale-taupe dark:border-yellow-500/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-rich-gold dark:focus:ring-yellow-400 bg-warm-ivory dark:bg-[#0a1929] text-black dark:text-white text-lg font-sans"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-lg font-serif-body font-bold text-black dark:text-white mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-3 border-2 border-pale-taupe dark:border-yellow-500/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-rich-gold dark:focus:ring-yellow-400 bg-warm-ivory dark:bg-[#0a1929] text-black dark:text-white text-lg font-sans"
                      placeholder="What is this about?"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-lg font-serif-body font-bold text-black dark:text-white mb-2"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 border-2 border-pale-taupe dark:border-yellow-500/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-rich-gold dark:focus:ring-yellow-400 bg-warm-ivory dark:bg-[#0a1929] text-black dark:text-white text-lg font-sans"
                      placeholder="Write your message here..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-rich-gold dark:bg-yellow-400 text-warm-ivory dark:text-[#0a1929] px-8 py-4 rounded-lg hover:bg-[#b8941f] dark:hover:bg-yellow-500 transition-colors font-serif-body font-bold text-lg shadow-lg"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="slide-right" delay={300}>
              <div className="bg-[#f9f6f0] dark:bg-[#0c1e36] p-8 rounded-xl border-2 border-[#e8dcc6] dark:border-yellow-500/50">
                <h2 className="luxury-subheading text-3xl mb-6 text-rich-gold dark:text-yellow-400">
                  Template Information
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-rich-gold dark:text-yellow-400 mt-1" />
                    <div>
                      <h3 className="font-serif-body font-bold text-lg text-black dark:text-white">Location</h3>
                      <p className="font-sans text-black dark:text-gray-100">
                        Replace with your address
                        <br />
                        City, State, ZIP
                        <br />
                        Country
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-rich-gold dark:text-yellow-400 mt-1" />
                    <div>
                      <h3 className="font-serif-body font-bold text-lg text-black dark:text-white">Phone</h3>
                      <p className="font-sans text-black dark:text-gray-100">+1 (555) 000-0000</p>
                      <p className="font-sans text-black dark:text-gray-100">+1 (555) 000-0001</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-rich-gold dark:text-yellow-400 mt-1" />
                    <div>
                      <h3 className="font-serif-body font-bold text-lg text-black dark:text-white">Email</h3>
                      <p className="font-sans text-black dark:text-gray-100">hello@yourwebsite.com</p>
                      <p className="font-sans text-black dark:text-gray-100">support@yourwebsite.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-rich-gold dark:text-yellow-400 mt-1" />
                    <div>
                      <h3 className="font-serif-body font-bold text-lg text-black dark:text-white">Hours</h3>
                      <p className="font-sans text-black dark:text-gray-100">Monday - Friday: 9am - 6pm</p>
                      <p className="font-sans text-black dark:text-gray-100">Saturday: 10am - 4pm</p>
                      <p className="font-sans text-black dark:text-gray-100">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 px-4 bg-soft-beige dark:bg-[#112240] transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="slide-up">
            <h2 className="luxury-heading text-4xl mb-8 text-black dark:text-white text-shadow-luxury">
              Form Integration
            </h2>
          </AnimatedSection>
          <AnimatedSection animation="fade-in" delay={200}>
            <div className="bg-warm-ivory dark:bg-[#0a1929] p-8 rounded-xl border-2 border-pale-taupe dark:border-yellow-500/50 shadow-lg">
              <h3 className="luxury-subheading text-2xl mb-4 text-rich-gold dark:text-yellow-400">
                Ready for Integration
              </h3>
              <p className="font-serif-body text-black dark:text-gray-100 mb-4 text-lg">
                This contact form is ready to be connected to your preferred form handling service:
              </p>
              <ul className="font-sans text-black dark:text-gray-100 text-lg space-y-2">
                <li>• Netlify Forms</li>
                <li>• Formspree</li>
                <li>• EmailJS</li>
                <li>• Custom backend API</li>
                <li>• Serverless functions</li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
