"use client"

import "../styles/components/contact.css"
import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Mail, Linkedin, Github, Send, CheckCircle, AlertCircle, User, MessageSquare, Terminal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

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

type FormField = "name" | "email" | "message"
type FormData = Record<FormField, string>
type TouchedState = Record<FormField, boolean>
type FieldErrors = Partial<Record<FormField, string>>

export function Contact() {
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", message: "" })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})
  const [touched, setTouched] = useState<TouchedState>({ name: false, email: false, message: false })
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  // Intersection Observer for scroll-triggered entrance
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  // Reset success status after delay
  useEffect(() => {
    if (status === "success") {
      const timer = setTimeout(() => setStatus("idle"), 6000)
      return () => clearTimeout(timer)
    }
  }, [status])

  const validateField = (name: FormField, value: string): string => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Name is required"
        if (value.trim().length < 2) return "Name must be at least 2 characters"
        if (value.trim().length > 50) return "Name must be less than 50 characters"
        return ""
      case "email":
        if (!value.trim()) return "Email is required"
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Please enter a valid email"
        return ""
      case "message":
        if (!value.trim()) return "Message is required"
        if (value.trim().length < 10) return "Message must be at least 10 characters"
        if (value.trim().length > 1000) return "Message must be less than 1000 characters"
        return ""
      default:
        return ""
    }
  }

  const handleInputChange = (field: FormField, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (touched[field]) {
      setFieldErrors((prev) => ({ ...prev, [field]: validateField(field, value) }))
    }
    // Clear top-level error once user starts fixing
    if (status === "error" && errorMessage === "Please fix the errors above") {
      setStatus("idle")
      setErrorMessage("")
    }
  }

  const handleFieldBlur = (field: FormField) => {
    setTouched((prev) => ({ ...prev, [field]: true }))
    setFieldErrors((prev) => ({ ...prev, [field]: validateField(field, formData[field]) }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const errors: FieldErrors = {}
    ;(Object.keys(formData) as FormField[]).forEach((key) => {
      const err = validateField(key, formData[key])
      if (err) errors[key] = err
    })

    setFieldErrors(errors)
    setTouched({ name: true, email: true, message: true })

    if (Object.keys(errors).length > 0) {
      setErrorMessage("Please fix the errors above")
      setStatus("error")
      return
    }

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
      setTouched({ name: false, email: false, message: false })
      setFieldErrors({})
    } catch (err) {
      setStatus("error")
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.")
    }
  }

  const charCount = formData.message.length
  const charCountClass = charCount > 900 ? "error" : charCount > 700 ? "warning" : ""

  return (
    <section
      id="contact"
      ref={sectionRef}
      className={`contact-section retro-grid ${isVisible ? "is-visible" : ""}`}
      aria-label="Contact section"
    >
      <div className="contact-inner">

        {/* Heading */}
        <div className="contact-heading">
          <div className="contact-heading-row">
            <span className="contact-heading-marker" aria-hidden="true">04.</span>
            <h2 className="contact-heading-title">CONTACT</h2>
          </div>
          <div className="contact-heading-line" aria-hidden="true" />
        </div>

        {/* Grid */}
        <div className="contact-grid">

          {/* Left */}
          <div className="contact-left">

            {/* Status card */}
            <div className="contact-status" role="status" aria-live="polite">
              <div className="contact-status-row">
                <div className="contact-status-dot" aria-hidden="true" />
                <span className="contact-status-label">STATUS: ONLINE</span>
              </div>
              <p className="contact-status-text">
                ALWAYS READY FOR NEW QUESTS, CREATIVE CHALLENGES, OR COLLABORATION OPPORTUNITIES.
                SEND A MESSAGE TO INITIATE CONTACT PROTOCOL.
              </p>
            </div>

            {/* Social links */}
            <nav className="contact-links" aria-label="Social media links">
              {SOCIAL_LINKS.map(({ type, value, href, icon, color }) => (
                <a
                  key={type}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link-card"
                  style={{ "--link-color": color } as React.CSSProperties}
                  aria-label={`${type}: ${value}`}
                >
                  <div className="contact-link-icon" aria-hidden="true">{icon}</div>
                  <div className="contact-link-info">
                    <span className="contact-link-type">{type}</span>
                    <span className="contact-link-value">{value}</span>
                  </div>
                  <span className="contact-link-arrow" aria-hidden="true">▸</span>
                </a>
              ))}
            </nav>
          </div>

          {/* Right: form */}
          <div className="contact-form-card">
            <div className="contact-form-header">
              <Terminal size={13} className="contact-form-header-icon" aria-hidden="true" />
              <h3 className="contact-form-title">MESSAGE CONSOLE</h3>
            </div>

            <form onSubmit={handleSubmit} className="contact-form" noValidate aria-label="Contact form">

              {/* Name */}
              <div className={`contact-field ${fieldErrors.name && touched.name ? "has-error" : ""}`}>
                <label htmlFor="name" className="contact-label">
                  <User size={12} aria-hidden="true" />
                  PLAYER NAME
                </label>
                <Input
                  id="name"
                  className={`contact-input${fieldErrors.name && touched.name ? " border-destructive" : ""}`}
                  placeholder="ENTER YOUR NAME"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  onBlur={() => handleFieldBlur("name")}
                  required
                  autoComplete="name"
                  aria-invalid={!!(fieldErrors.name && touched.name)}
                  aria-describedby={fieldErrors.name && touched.name ? "name-error" : undefined}
                />
                {fieldErrors.name && touched.name && (
                  <span id="name-error" className="contact-field-error" role="alert">
                    ⚠ {fieldErrors.name}
                  </span>
                )}
              </div>

              {/* Email */}
              <div className={`contact-field ${fieldErrors.email && touched.email ? "has-error" : ""}`}>
                <label htmlFor="email" className="contact-label">
                  <Mail size={12} aria-hidden="true" />
                  EMAIL ADDRESS
                </label>
                <Input
                  id="email"
                  type="email"
                  className={`contact-input${fieldErrors.email && touched.email ? " border-destructive" : ""}`}
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  onBlur={() => handleFieldBlur("email")}
                  required
                  autoComplete="email"
                  aria-invalid={!!(fieldErrors.email && touched.email)}
                  aria-describedby={fieldErrors.email && touched.email ? "email-error" : undefined}
                />
                {fieldErrors.email && touched.email && (
                  <span id="email-error" className="contact-field-error" role="alert">
                    ⚠ {fieldErrors.email}
                  </span>
                )}
              </div>

              {/* Message */}
              <div className={`contact-field ${fieldErrors.message && touched.message ? "has-error" : ""}`}>
                <label htmlFor="message" className="contact-label">
                  <MessageSquare size={12} aria-hidden="true" />
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  className={`contact-textarea${fieldErrors.message && touched.message ? " border-destructive" : ""}`}
                  placeholder="DESCRIBE YOUR QUEST..."
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  onBlur={() => handleFieldBlur("message")}
                  required
                  aria-invalid={!!(fieldErrors.message && touched.message)}
                  aria-describedby={`char-count${fieldErrors.message && touched.message ? " message-error" : ""}`}
                />
                <div className="contact-field-footer">
                  <span
                    id="char-count"
                    className={`contact-char-count${charCountClass ? ` ${charCountClass}` : ""}`}
                    aria-live="polite"
                  >
                    {charCount}/1000
                  </span>
                  {fieldErrors.message && touched.message && (
                    <span id="message-error" className="contact-field-error" role="alert">
                      ⚠ {fieldErrors.message}
                    </span>
                  )}
                </div>
              </div>

              {/* Status messages */}
              {status === "success" && (
                <div className="contact-msg success" role="alert">
                  <CheckCircle size={14} aria-hidden="true" />
                  TRANSMISSION SENT! I'LL GET BACK TO YOU SOON.
                </div>
              )}
              {status === "error" && errorMessage && (
                <div className="contact-msg error" role="alert">
                  <AlertCircle size={14} aria-hidden="true" />
                  {errorMessage}
                </div>
              )}

              <Button
                type="submit"
                className="contact-submit"
                disabled={status === "loading"}
                size="lg"
                aria-busy={status === "loading"}
              >
                {status === "loading" ? (
                  <>
                    <span className="contact-submit-loader" aria-hidden="true" />
                    SENDING...
                  </>
                ) : (
                  <>
                    <Send size={14} aria-hidden="true" />
                    SEND TRANSMISSION
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="contact-footer">
        <p className="contact-footer-text">
          Developed by <span>JOHN ANDREW BORABO</span> // © 2025
        </p>
      </footer>
    </section>
  )
}