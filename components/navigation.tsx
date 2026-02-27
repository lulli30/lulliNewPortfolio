"use client"

import { useState, useEffect, useRef } from "react"
import "../styles/navigation.css"

const NAV_ITEMS = [
  { id: "about",      label: "ABOUT" },
  { id: "experience", label: "EXP"   },
  { id: "projects",   label: "WORK"  },
  { id: "contact",    label: "CONTACT" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled]     = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [score, setScore]               = useState(0)
  const [menuOpen, setMenuOpen]         = useState(false)
  const [blinkOn, setBlinkOn]           = useState(true)
  const menuRef = useRef<HTMLDivElement>(null)

  /* ── scroll tracking ── */
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 50)
      const sections = ["hero", ...NAV_ITEMS.map(n => n.id)]
      const pos = window.scrollY + 120
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.offsetTop <= pos) { setActiveSection(sections[i]); break }
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  /* ── score counter ── */
  useEffect(() => {
    const t = setInterval(() => setScore(p => (p + 137) % 1000000), 1800)
    return () => clearInterval(t)
  }, [])

  /* ── cursor blink ── */
  useEffect(() => {
    const t = setInterval(() => setBlinkOn(p => !p), 530)
    return () => clearInterval(t)
  }, [])

  /* ── close menu on outside click ── */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false)
      }
    }
    if (menuOpen) document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [menuOpen])

  const scrollTo = (id: string) => {
    console.log('Scrolling to:', id)
    const element = document.getElementById(id)
    if (element) {
      console.log('Found element:', element)
      // Custom smooth scroll implementation
      const startPosition = window.pageYOffset
      const targetPosition = element.offsetTop - 80 // Offset for nav height
      const distance = targetPosition - startPosition
      const duration = 800 // Animation duration in ms
      
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
    setMenuOpen(false)
  }

  return (
    <nav className={`nav-root${isScrolled ? " scrolled" : ""}`} ref={menuRef}>
      <div className="nav-inner">

        {/* Logo */}
        <button className="nav-logo" onClick={() => scrollTo("hero")}>
          <span className="nav-logo-bracket">[</span>
          lulli
          <span style={{ color: blinkOn ? "#00ffff" : "transparent", textShadow: "none", transition: "color 0.1s" }}>_</span>
          <span className="nav-logo-bracket">]</span>
        </button>

        {/* Desktop nav */}
        <div className="nav-desktop">
          <ul className="nav-links">
            {NAV_ITEMS.slice(0, -1).map(({ id, label }) => (
              <li key={id}>
                <button
                  className={`nav-link${activeSection === id ? " active" : ""}`}
                  onClick={() => scrollTo(id)}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
          <button
            className={`nav-cta${activeSection === "contact" ? " active" : ""}`}
            onClick={() => scrollTo("contact")}
          >
            CONTACT
          </button>
        </div>

        {/* Score */}
        <div className="nav-score">
          <span className="nav-score-label">SCORE</span>
          <span className="nav-score-value">{score.toString().padStart(6, "0")}</span>
        </div>

        {/* Hamburger */}
        <button
          className={`nav-hamburger${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen(p => !p)}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`nav-mobile-menu${menuOpen ? " open" : ""}`}>
        {NAV_ITEMS.slice(0, -1).map(({ id, label }) => (
          <button
            key={id}
            className={`nav-mobile-link${activeSection === id ? " active" : ""}`}
            onClick={() => scrollTo(id)}
          >
            {label}
          </button>
        ))}
        <button
          className="nav-mobile-contact"
          onClick={() => scrollTo("contact")}
        >
          ▸ CONTACT ME
        </button>
      </div>
    </nav>
  )
}
