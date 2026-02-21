"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Zap, Trophy } from "lucide-react"
import { useEffect, useState, useRef } from "react"
import "../styles/hero.css"

export function Hero() {
  const [displayText, setDisplayText] = useState("")
  const [glitchActive, setGlitchActive] = useState(false)
  const fullText = "GENERATING KNOWLEDGE FROM CODE AND DATA..."
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Typewriter effect
  useEffect(() => {
    let index = 0
    let direction: "forward" | "backward" = "forward"
    const typeSpeed = 80
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
    return () => { if (holdTimer) clearTimeout(holdTimer) }
  }, [])

  // Periodic glitch effect on name
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchActive(true)
      setTimeout(() => setGlitchActive(false), 300)
    }, 4000)
    return () => clearInterval(glitchInterval)
  }, [])

  // Scanline canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (let y = 0; y < canvas.height; y += 4) {
        ctx.fillStyle = "rgba(0,0,0,0.08)"
        ctx.fillRect(0, y, canvas.width, 2)
      }
    }

    resize()
    window.addEventListener("resize", resize)
    return () => window.removeEventListener("resize", resize)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <section id="hero" className="hero-section">
        <canvas ref={canvasRef} className="scanlines" />
        <div className="corner-tl" />
        <div className="corner-br" />

        <div className="hero-content">
          <div className="fade-up-1">
            <div className="hero-badge">
              <Zap className="w-4 h-4" />
              <span>SYSTEM ONLINE</span>
            </div>
          </div>

          <div className="fade-up-2">
            <h1 className="hero-name">
              ANDREW
              <span className={`hero-name-accent${glitchActive ? " glitch" : ""}`}>
                LULLI
              </span>
            </h1>
          </div>

          <div className="fade-up-3">
            <div className="hero-subtitle">
              <Trophy className="w-4 h-4" />
              <span>CS STUDENT • AI ENTHUSIAST • DEVELOPER</span>
            </div>
          </div>

          <div className="fade-up-4">
            <div className="terminal-card">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500" />
                <div className="terminal-dot bg-yellow-500" />
                <div className="terminal-dot bg-green-500" />
              </div>
              <div className="terminal-body">
                <span>{displayText}</span>
                <span className="cursor" />
              </div>
            </div>
          </div>

          <div className="fade-up-5">
            <div className="btn-row">
              <Button 
                className="btn-primary"
                onClick={() => scrollTo("projects")}
              >
                <Mail className="w-4 h-4" />
                VIEW PROJECTS
              </Button>
              <Button 
                variant="outline" 
                className="btn-secondary"
                onClick={() => scrollTo("contact")}
              >
                <Linkedin className="w-4 h-4" />
                GET IN TOUCH
              </Button>
            </div>
          </div>

          <div className="fade-up-6">
            <div className="hero-divider" />
            <div className="stats-row">
              <div className="stat-item">
                <div className="stat-value">4+</div>
                <div className="stat-label">YEARS</div>
              </div>
              <div className="stat-divider" />
              <div className="stat-item">
                <div className="stat-value">10+</div>
                <div className="stat-label">PROJECTS</div>
              </div>
              <div className="stat-divider" />
              <div className="stat-item">
                <div className="stat-value">AI</div>
                <div className="stat-label">FOCUS</div>
              </div>
            </div>
          </div>

          <div className="fade-up-6">
            <div className="social-row">
              <a 
                href="https://github.com" 
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:andrew@example.com" 
                className="social-link"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="scroll-cta" onClick={() => scrollTo("about")}>
          <span>SCROLL DOWN</span>
          <div className="scroll-arrow">▼</div>
        </div>
      </section>
    </>
  )
}
