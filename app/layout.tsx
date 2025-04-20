import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { MainNav } from "@/components/main-nav"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kelvin Schouten | Full-Stack Developer",
  description: "Professioneel CV en portfolio van Kelvin Schouten, een Junior Full-Stack Web Developer",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="min-h-screen bg-background transition-colors duration-300">
            <div className="container mx-auto px-4">
              <MainNav />
              <main>{children}</main>
              <footer className="py-6 text-center text-sm text-muted-foreground">
                <p>© {new Date().getFullYear()} Kelvin Schouten. Alle rechten voorbehouden.</p>
              </footer>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'