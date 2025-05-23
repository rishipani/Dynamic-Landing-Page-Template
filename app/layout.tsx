import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display, Crimson_Text } from "next/font/google"
import "./globals.css"
import EnhancedNavigation from "@/components/enhanced-navigation"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
})
const crimson = Crimson_Text({
  subsets: ["latin"],
  variable: "--font-crimson",
  weight: ["400", "600", "700"],
})

export const metadata: Metadata = {
  title: "Modern Website Template",
  description: "A modern, responsive website template with theme switching and smooth animations",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} ${crimson.variable} font-sans`}>
        <ThemeProvider>
          <EnhancedNavigation />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
