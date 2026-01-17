"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [score, setScore] = useState(0)
  const [activeSection, setActiveSection] = useState<string>("hero")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Determine active section based on scroll position
      const sections = ["hero", "about", "experience", "projects", "contact"]
      const scrollPosition = window.scrollY + 100 // Offset for nav height
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i])
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check on mount
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setScore((prev) => (prev + 100) % 100000)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm border-b-2 border-primary pixel-border" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-sm sm:text-base text-primary hover:text-secondary transition-colors neon-text uppercase tracking-wider"
          >
            ◀ lulli ▶
          </button>

          <div className="hidden md:flex items-center gap-6 text-xs">
            <button
              onClick={() => scrollToSection("about")}
              className={`transition-all hover:scale-110 uppercase tracking-wide ${
                activeSection === "about"
                  ? "text-primary neon-text"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              ABOUT
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className={`transition-all hover:scale-110 uppercase tracking-wide ${
                activeSection === "experience"
                  ? "text-primary neon-text"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              EXP
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className={`transition-all hover:scale-110 uppercase tracking-wide ${
                activeSection === "projects"
                  ? "text-primary neon-text"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              PROJECTS
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              size="sm"
              className={`arcade-card border-2 uppercase text-xs hover:-translate-y-1 text-white ${
                activeSection === "contact" ? "neon-text" : ""
              }`}
            >
              CONTACT
            </Button>
          </div>

          <div className="text-xs text-primary neon-text hidden sm:block">{score.toString().padStart(6, "0")}</div>
        </div>
      </div>
    </nav>
  )
}
