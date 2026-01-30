"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Zap, Gamepad2, Trophy } from "lucide-react"
import { useEffect, useState } from "react"

export function Hero() {
  const [displayText, setDisplayText] = useState("")
  const fullText = "GENERATING KNOWLEDGE FROM CODE AND DATA..."

  useEffect(() => {
    let index = 0
    let direction: "forward" | "backward" = "forward"
    const typeSpeed = 100
    const holdAtEnd = 2000
    const holdAtStart = 800
    let holdTimer: ReturnType<typeof setTimeout> | null = null

    const tick = () => {
      if (direction === "forward") {
        if (index <= fullText.length) {
          setDisplayText(fullText.slice(0, index))
          index++
        } else {
          direction = "backward"
          holdTimer = setTimeout(tick, holdAtEnd)
          return
        }
      } else {
        if (index > 0) {
          index--
          setDisplayText(fullText.slice(0, index))
        } else {
          direction = "forward"
          holdTimer = setTimeout(tick, holdAtStart)
          return
        }
      }
      holdTimer = setTimeout(tick, typeSpeed)
    }

    holdTimer = setTimeout(tick, typeSpeed)

    return () => {
      if (holdTimer) clearTimeout(holdTimer)
    }
  }, [])

  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 lg:px-8 pt-16 relative overflow-hidden retro-grid"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 text-6xl text-primary/20 animate-float">▲</div>
        <div
          className="absolute bottom-40 right-20 text-8xl text-secondary/20 animate-float"
          style={{ animationDelay: "1s" }}
        >
          ●
        </div>
        <div
          className="absolute top-1/2 right-10 text-7xl text-accent/20 animate-float"
          style={{ animationDelay: "2s" }}
        >
          ■
        </div>
      </div>

      <div className="max-w-4xl w-full relative z-10">
        <div className="space-y-8">
          <div className="flex items-center gap-4 mb-4 animate-pulse">
            <Gamepad2 className="w-8 h-8 text-primary" />
            <span className="text-xs text-primary uppercase tracking-widest">PLAYER 1 READY</span>
          </div>

          <div className="space-y-6 animate__animated animate__fadeIn">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-balance leading-tight">
              JOHN ANDREW <span className="text-primary neon-text block mt-2">BORABO</span>
              
            </h1>
            <p className="text-sm sm:text-base md:text-xl text-secondary uppercase tracking-wide">▸ AI DEV & CS RESEARCHER ◂
            </p>
          </div>

          <div className="arcade-card p-6 text-xs sm:text-sm text-primary min-h-[80px] flex items-center">
            <p className="font-mono">
              {displayText}
              <span className="animate-pulse">_</span>
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              onClick={scrollToProjects}
              className="arcade-card border-2 uppercase text-xs sm:text-sm hover:-translate-y-1 transition-transform text-foreground"
            >
              <Trophy className="w-4 h-4 mr-2" />
              VIEW PROJECTS
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToContact}
              className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-background uppercase text-xs sm:text-sm transition-all bg-transparent"
            >
              <Zap className="w-4 h-4 mr-2" />
              Contact Me
            </Button>
          </div>

          <div className="flex items-center gap-6 pt-4">
            <a
              href="https://github.com/lulli30"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all hover:scale-125 transform"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/john-andrew-borabo-3533b3255/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all hover:scale-125 transform"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:johnandrewborabo@gmail.com"
              className="text-muted-foreground hover:text-primary transition-all hover:scale-125 transform"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        <button
          onClick={scrollToAbout}
          className="absolute bottom-1 left-1/2 -translate-x-1/2 text-primary transition-all animate-bounce hover:scale-125 text-2xl"
        >
          ▼
        </button>
      </div>
    </section>
  )
}
