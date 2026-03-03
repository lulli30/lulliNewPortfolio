"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Zap, Trophy } from "lucide-react"
import { useEffect, useState, useRef } from "react"
import "../styles/hero.css"

export function Hero() {
  const [displayText, setDisplayText] = useState("")
  const [glitchActive, setGlitchActive] = useState(false)
  const fullText = "Computer Science Student specializing in Machine Learning"
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
    console.log('Scrolling to:', id)
    const element = document.getElementById(id)
    if (element) {
      console.log('Found element:', element)
      // Custom smooth scroll implementation
      const startPosition = window.pageYOffset
      const targetPosition = element.offsetTop - 80
      const distance = targetPosition - startPosition
      const duration = 800
      
      let start: number | null = null
      const animation = (currentTime: number) => {
        if (start === null) start = currentTime
        const timeElapsed = currentTime - start
        const run = ease(timeElapsed, startPosition, distance, duration)
        window.scrollTo(0, run)
        if (timeElapsed < duration) requestAnimationFrame(animation)
      }
      
      const ease = (t: number, b: number, c: number, d: number) => {
        t /= d / 2
        if (t < 1) return c / 2 * t * t + b
        t--
        return -c / 2 * (t * (t - 2) - 1) + b
      }
      
      requestAnimationFrame(animation)
    } else {
      console.error('Element not found:', id)
    }
  }

  return (
    <>
      <section id="hero" className="hero-section">
        <canvas ref={canvasRef} className="scanlines" />
        <div className="corner-tl" />
        <div className="corner-br" />

        <div className="hero-content">

          <div className="fade-up-2">
            <h1 className="hero-name">
              JOHN ANDREW
              <span className={`hero-name-accent${glitchActive ? " glitch" : ""}`}>
                BORABO
              </span>
            </h1>
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
                onClick={() => {
                  const link = document.createElement('a')
                  link.href = '/resume.pdf'
                  link.download = 'John_Andrew_Borabo_Resume.pdf'
                  document.body.appendChild(link)
                  link.click()
                  document.body.removeChild(link)
                }}
              >
                <Linkedin className="w-4 h-4" />
                DOWNLOAD CV
              </Button>
            </div>
          </div>

          <div className="fade-up-6">
            <div className="social-row">
              <a 
                href="https://github.com/lulli30" 
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/john-andrew-borabo-3533b3255/" 
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5" />
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