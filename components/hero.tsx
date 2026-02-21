"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Zap, Trophy } from "lucide-react"
import { useEffect, useState, useRef } from "react"

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
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Share+Tech+Mono&display=swap');

        :root {
          --neon-cyan: #00ffff;
          --neon-magenta: #ff00ff;
          --neon-yellow: #ffff00;
          --dark-bg: #050510;
          --card-bg: rgba(0, 255, 255, 0.04);
          --card-border: rgba(0, 255, 255, 0.25);
        }

        .hero-section {
          min-height: 100svh;
          background: var(--dark-bg);
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: clamp(80px, 10vw, 120px) clamp(16px, 5vw, 48px) clamp(40px, 6vw, 80px);
          font-family: 'Share Tech Mono', monospace;
        }

        /* Grid lines */
        .hero-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(0,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,255,0.04) 1px, transparent 1px);
          background-size: 40px 40px;
          pointer-events: none;
        }

        /* Perspective grid floor */
        .hero-section::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: -50%;
          right: -50%;
          height: 50%;
          background-image:
            linear-gradient(rgba(0,255,255,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,0,255,0.05) 1px, transparent 1px);
          background-size: 60px 60px;
          transform: perspective(300px) rotateX(60deg);
          transform-origin: bottom;
          pointer-events: none;
          opacity: 0.6;
        }

        .hero-content {
          max-width: min(900px, 100%);
          width: 100%;
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          gap: clamp(24px, 4vw, 40px);
        }

        /* Badge */
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'Share Tech Mono', monospace;
          font-size: clamp(9px, 1.5vw, 11px);
          color: var(--neon-cyan);
          border: 1px solid rgba(0,255,255,0.3);
          padding: 6px 14px;
          background: rgba(0,255,255,0.06);
          width: fit-content;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }

        .hero-badge::before {
          content: '●';
          color: #00ff88;
          animation: blink 1s step-end infinite;
        }

        @keyframes blink {
          50% { opacity: 0; }
        }

        /* Name heading */
        .hero-name {
          font-family: 'Press Start 2P', monospace;
          font-size: clamp(22px, 6vw, 64px);
          line-height: 1.3;
          color: #ffffff;
          letter-spacing: -0.01em;
          position: relative;
        }

        .hero-name-accent {
          display: block;
          color: var(--neon-cyan);
          text-shadow:
            0 0 20px rgba(0,255,255,0.8),
            0 0 40px rgba(0,255,255,0.4),
            0 0 80px rgba(0,255,255,0.2);
          margin-top: 4px;
          position: relative;
        }

        .hero-name-accent.glitch {
          animation: glitch 0.3s steps(1) forwards;
        }

        @keyframes glitch {
          0%   { text-shadow: -3px 0 #ff00ff, 3px 0 #00ffff; clip-path: inset(0 0 95% 0); }
          20%  { text-shadow: 3px 0 #ff00ff, -3px 0 #00ffff; clip-path: inset(40% 0 40% 0); }
          40%  { text-shadow: -3px 0 #ff00ff, 3px 0 #00ffff; clip-path: inset(20% 0 60% 0); }
          60%  { text-shadow: 3px 0 #ff00ff, -3px 0 #00ffff; clip-path: inset(60% 0 10% 0); }
          80%  { text-shadow: -3px 0 #ff00ff, 3px 0 #00ffff; clip-path: inset(80% 0 5% 0); }
          100% {
            text-shadow: 0 0 20px rgba(0,255,255,0.8), 0 0 40px rgba(0,255,255,0.4);
            clip-path: inset(0 0 0 0);
          }
        }

        .hero-subtitle {
          font-family: 'Share Tech Mono', monospace;
          font-size: clamp(10px, 2vw, 14px);
          color: rgba(255, 0, 255, 0.85);
          letter-spacing: 0.2em;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        /* Terminal card */
        .terminal-card {
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          padding: clamp(14px, 3vw, 24px);
          position: relative;
          min-height: 80px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          box-shadow:
            0 0 20px rgba(0,255,255,0.06),
            inset 0 0 20px rgba(0,255,255,0.03);
        }

        .terminal-header {
          display: flex;
          align-items: center;
          gap: 6px;
          padding-bottom: 10px;
          border-bottom: 1px solid rgba(0,255,255,0.15);
        }

        .terminal-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .terminal-body {
          font-family: 'Share Tech Mono', monospace;
          font-size: clamp(10px, 2vw, 13px);
          color: var(--neon-cyan);
          display: flex;
          align-items: center;
          min-height: 20px;
          word-break: break-word;
        }

        .cursor {
          display: inline-block;
          width: 2px;
          height: 1.1em;
          background: var(--neon-cyan);
          margin-left: 2px;
          animation: cursor-blink 1s step-end infinite;
          vertical-align: text-bottom;
          flex-shrink: 0;
        }

        @keyframes cursor-blink {
          50% { opacity: 0; }
        }

        /* Buttons */
        .btn-row {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'Share Tech Mono', monospace;
          font-size: clamp(10px, 1.8vw, 12px);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: clamp(10px, 2vw, 14px) clamp(16px, 3vw, 24px);
          background: rgba(0,255,255,0.1);
          border: 1px solid var(--neon-cyan);
          color: var(--neon-cyan);
          cursor: pointer;
          transition: all 0.2s;
          box-shadow: 0 0 12px rgba(0,255,255,0.15), inset 0 0 12px rgba(0,255,255,0.05);
          text-decoration: none;
          white-space: nowrap;
        }

        .btn-primary:hover {
          background: rgba(0,255,255,0.18);
          box-shadow: 0 0 24px rgba(0,255,255,0.35), inset 0 0 20px rgba(0,255,255,0.1);
          transform: translateY(-2px);
          color: #fff;
        }

        .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'Share Tech Mono', monospace;
          font-size: clamp(10px, 1.8vw, 12px);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: clamp(10px, 2vw, 14px) clamp(16px, 3vw, 24px);
          background: rgba(255,0,255,0.08);
          border: 1px solid rgba(255,0,255,0.6);
          color: rgba(255,0,255,0.9);
          cursor: pointer;
          transition: all 0.2s;
          box-shadow: 0 0 12px rgba(255,0,255,0.1), inset 0 0 12px rgba(255,0,255,0.04);
          text-decoration: none;
          white-space: nowrap;
        }

        .btn-secondary:hover {
          background: rgba(255,0,255,0.16);
          box-shadow: 0 0 24px rgba(255,0,255,0.3), inset 0 0 20px rgba(255,0,255,0.1);
          transform: translateY(-2px);
          color: #fff;
          border-color: rgba(255,0,255,0.9);
        }

        /* Social links */
        .social-row {
          display: flex;
          align-items: center;
          gap: clamp(16px, 4vw, 28px);
          padding-top: 8px;
        }

        .social-link {
          color: rgba(255,255,255,0.35);
          transition: all 0.2s;
          display: flex;
          align-items: center;
        }

        .social-link:hover {
          color: var(--neon-cyan);
          filter: drop-shadow(0 0 8px rgba(0,255,255,0.7));
          transform: scale(1.2) translateY(-2px);
        }

        .social-link svg {
          width: clamp(18px, 3vw, 22px);
          height: clamp(18px, 3vw, 22px);
        }

        /* Divider */
        .hero-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(0,255,255,0.3), transparent);
        }

        /* Stats row */
        .stats-row {
          display: flex;
          gap: clamp(16px, 4vw, 40px);
          flex-wrap: wrap;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .stat-value {
          font-family: 'Press Start 2P', monospace;
          font-size: clamp(14px, 3vw, 22px);
          color: var(--neon-cyan);
          text-shadow: 0 0 10px rgba(0,255,255,0.5);
          line-height: 1;
        }

        .stat-label {
          font-family: 'Share Tech Mono', monospace;
          font-size: clamp(8px, 1.5vw, 10px);
          color: rgba(255,255,255,0.4);
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }

        .stat-divider {
          width: 1px;
          background: rgba(0,255,255,0.2);
          align-self: stretch;
          margin: 4px 0;
        }

        /* Scroll indicator */
        .scroll-cta {
          position: absolute;
          bottom: clamp(16px, 4vw, 32px);
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          cursor: pointer;
          z-index: 10;
        }

        .scroll-cta span {
          font-family: 'Share Tech Mono', monospace;
          font-size: 9px;
          color: rgba(0,255,255,0.4);
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }

        .scroll-arrow {
          color: rgba(0,255,255,0.5);
          font-size: 18px;
          animation: bounce 1.5s ease-in-out infinite;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); opacity: 0.5; }
          50% { transform: translateY(6px); opacity: 1; }
        }

        .scroll-cta:hover .scroll-arrow {
          color: var(--neon-cyan);
          filter: drop-shadow(0 0 6px rgba(0,255,255,0.8));
        }

        /* Scanline canvas */
        .scanlines {
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.5;
          z-index: 5;
        }

        /* Floating corner decorations */
        .corner-tl, .corner-br {
          position: absolute;
          width: clamp(40px, 8vw, 80px);
          height: clamp(40px, 8vw, 80px);
          pointer-events: none;
          z-index: 8;
        }

        .corner-tl {
          top: clamp(60px, 8vw, 80px);
          left: clamp(12px, 3vw, 32px);
          border-top: 2px solid rgba(0,255,255,0.3);
          border-left: 2px solid rgba(0,255,255,0.3);
        }

        .corner-br {
          bottom: clamp(40px, 6vw, 60px);
          right: clamp(12px, 3vw, 32px);
          border-bottom: 2px solid rgba(255,0,255,0.3);
          border-right: 2px solid rgba(255,0,255,0.3);
        }

        /* Fade-in animation */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .fade-up-1 { animation: fadeUp 0.7s ease forwards; }
        .fade-up-2 { animation: fadeUp 0.7s ease 0.15s forwards; opacity: 0; }
        .fade-up-3 { animation: fadeUp 0.7s ease 0.3s forwards; opacity: 0; }
        .fade-up-4 { animation: fadeUp 0.7s ease 0.45s forwards; opacity: 0; }
        .fade-up-5 { animation: fadeUp 0.7s ease 0.6s forwards; opacity: 0; }
        .fade-up-6 { animation: fadeUp 0.7s ease 0.75s forwards; opacity: 0; }
      `}</style>

      <section id="hero" className="hero-section">
        <canvas ref={canvasRef} className="scanlines" />
        <div className="corner-tl" />
        <div className="corner-br" />

        <div className="hero-content">
          {/* Name + Title */}
          <div className="fade-up-2">
            <h1 className="hero-name">
              JOHN ANDREW
              <span className={`hero-name-accent${glitchActive ? " glitch" : ""}`}>
                BORABO
              </span>
            </h1>
            <p className="hero-subtitle" style={{ marginTop: "clamp(12px, 2vw, 16px)" }}>
              <span>▸</span>
              <span>FREELANCE DEVELOPER</span>
              <span style={{ color: "rgba(0,255,255,0.3)" }}>///</span>
              <span>CS STUDENT</span>
              <span>◂</span>
            </p>
          </div>

          {/* Terminal */}
          <div className="terminal-card fade-up-3">
            <div className="terminal-header">
              <div className="terminal-dot" style={{ background: "#ff5f57" }} />
              <div className="terminal-dot" style={{ background: "#ffbd2e" }} />
              <div className="terminal-dot" style={{ background: "#28ca41" }} />
              <span style={{ marginLeft: 8, fontSize: "10px", color: "rgba(0,255,255,0.4)", fontFamily: "'Share Tech Mono', monospace", letterSpacing: "0.1em" }}>
                system.exe
              </span>
            </div>
            <div className="terminal-body">
              <span style={{ color: "rgba(0,255,255,0.4)", marginRight: 8 }}>$&gt;</span>
              {displayText}
              <span className="cursor" />
            </div>
          </div>

          {/* Stats */}
          <div className="stats-row fade-up-4">
            <div className="stat-item">
              <div className="stat-value">3+</div>
              <div className="stat-label">YRS EXP</div>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <div className="stat-value">20+</div>
              <div className="stat-label">PROJECTS</div>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <div className="stat-value">∞</div>
              <div className="stat-label">CURIOSITY</div>
            </div>
          </div>

          <div className="hero-divider fade-up-4" />

          {/* Buttons */}
          <div className="btn-row fade-up-5">
            <button
              className="btn-primary"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Trophy size={14} />
              VIEW PROJECTS
            </button>
            <button
              className="btn-secondary"
              onClick={() => window.open('/file/andrew cv.pdf', '_blank')}
            >
              <Zap size={14} />
              DOWNLOAD CV
            </button>
          </div>

          {/* Socials */}
          <div className="social-row fade-up-6">
            <a
              href="https://github.com/lulli30"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub"
            >
              <Github />
            </a>
            <a
              href="https://www.linkedin.com/in/john-andrew-borabo-3533b3255/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              <Linkedin />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=johnandrewborabo@gmail.com"
              className="social-link"
              aria-label="Email"
            >
              <Mail />
            </a>
            <span style={{ color: "rgba(255,255,255,0.12)", fontSize: "11px", fontFamily: "'Share Tech Mono', monospace", letterSpacing: "0.1em", marginLeft: 4 }}>
              JOHNANDREWBORABO@GMAIL.COM
            </span>
          </div>
        </div>

        {/* Scroll CTA */}
        <button
          className="scroll-cta"
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          aria-label="Scroll to about section"
        >
          <span>SCROLL</span>
          <span className="scroll-arrow">▼</span>
        </button>
      </section>
    </>
  )
}