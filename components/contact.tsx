"use client"

import "../styles/contact.css"
import type React from "react"
import { useState } from "react"
import { Mail, Linkedin, Github, Send } from "lucide-react"

const SOCIAL_LINKS = [
  {
    type: "EMAIL",
    value: "johnandrewborabo@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=johnandrewborabo@gmail.com",
    icon: <Mail size={15} />,
    color: "var(--primary)",
  },
  {
    type: "LINKEDIN",
    value: "john-andrew-borabo",
    href: "https://www.linkedin.com/in/john-andrew-borabo-3533b3255/",
    icon: <Linkedin size={15} />,
    color: "var(--secondary)",
  },
  {
    type: "GITHUB",
    value: "github.com/lulli30",
    href: "https://github.com/lulli30",
    icon: <Github size={15} />,
    color: "var(--accent)",
  },
]

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    setErrorMessage("")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || "Failed to send message")
      setStatus("success")
      setFormData({ name: "", email: "", message: "" })
    } catch (err) {
      setStatus("error")
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.")
    }
  }

  return (
    <section id="contact" className="contact-section retro-grid">
      <div className="contact-inner">

        {/* Heading */}
        <div className="contact-heading">
          <div className="contact-heading-row">
            <span className="contact-heading-marker">05.</span>
            <h2 className="contact-heading-title">CONNECT</h2>
          </div>
          <div className="contact-heading-line" />
        </div>

        {/* Grid */}
        <div className="contact-grid">

          {/* Left */}
          <div className="contact-left">

            {/* Status */}
            <div className="contact-status">
              <div className="contact-status-row">
                <div className="contact-status-dot" />
                <span className="contact-status-label">STATUS: ONLINE</span>
              </div>
              <p className="contact-status-text">
                ALWAYS READY FOR NEW QUESTS, CREATIVE CHALLENGES, OR COLLABORATION OPPORTUNITIES.
                SEND A MESSAGE TO INITIATE CONTACT PROTOCOL.
              </p>
            </div>

            {/* Social links */}
            <div className="contact-links">
              {SOCIAL_LINKS.map(({ type, value, href, icon, color }) => (
                <a
                  key={type}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link-card"
                  style={{ "--link-color": color } as React.CSSProperties}
                >
                  <div className="contact-link-icon">{icon}</div>
                  <div className="contact-link-info">
                    <span className="contact-link-type">{type}</span>
                    <span className="contact-link-value">{value}</span>
                  </div>
                  <span className="contact-link-arrow">▸</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="contact-form-card">
            <div className="contact-form-header">
              <div className="contact-form-header-dot" />
              <h3 className="contact-form-title">MESSAGE CONSOLE</h3>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="contact-field">
                <label htmlFor="name" className="contact-label">PLAYER NAME</label>
                <input
                  id="name"
                  className="contact-input"
                  placeholder="ENTER YOUR NAME"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  autoComplete="name"
                />
              </div>

              <div className="contact-field">
                <label htmlFor="email" className="contact-label">EMAIL ADDRESS</label>
                <input
                  id="email"
                  type="email"
                  className="contact-input"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  autoComplete="email"
                />
              </div>

              <div className="contact-field">
                <label htmlFor="message" className="contact-label">MESSAGE</label>
                <textarea
                  id="message"
                  className="contact-textarea"
                  placeholder="DESCRIBE YOUR QUEST..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>

              {status === "success" && (
                <div className="contact-msg success">
                  ✓ TRANSMISSION SENT! I'LL GET BACK TO YOU SOON.
                </div>
              )}
              {status === "error" && (
                <div className="contact-msg error">
                  ✕ {errorMessage}
                </div>
              )}

              <button
                type="submit"
                className="contact-submit"
                disabled={status === "loading"}
              >
                {status === "loading" ? (
                  <>
                    <span className="contact-submit-loader" />
                    SENDING...
                  </>
                ) : (
                  <>
                    <Send size={13} />
                    SEND TRANSMISSION
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="contact-footer">
        <p className="contact-footer-text">
          Developed by <span>JOHN ANDREW BORABO</span> // © 2025 
        </p>
      </div>
    </section>
  )
}