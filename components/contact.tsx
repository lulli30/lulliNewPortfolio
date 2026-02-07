"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Linkedin, Github, Send, Wifi } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
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

      if (!res.ok) {
        throw new Error(data.error || "Failed to send message")
      }

      setStatus("success")
      setFormData({ name: "", email: "", message: "" })
    } catch (err) {
      setStatus("error")
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.")
    }
  }

  return (
    <section id="contact" className="py-24 px-6 lg:px-8 bg-secondary/10 relative overflow-hidden">
      <div className="absolute inset-0 retro-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8 animate__animated animate__fadeInLeft">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-accent text-2xl">▣</span>
                <h2 className="text-2xl md:text-3xl font-bold uppercase">CONNECT</h2>
              </div>
              <div className="h-1 w-20 bg-accent rounded-sm pixel-border" />
            </div>

            <div className="arcade-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <Wifi className="w-5 h-5 text-primary animate-pulse" />
                <p className="text-xs sm:text-sm text-primary uppercase font-bold">STATUS: ONLINE</p>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-mono">
                ALWAYS READY FOR NEW QUESTS, CREATIVE CHALLENGES, OR COLLABORATION OPPORTUNITIES. SEND MESSAGE TO
                INITIATE CONTACT PROTOCOL.
              </p>
            </div>

            <div className="space-y-4">
              <Card className="arcade-card p-4 hover:scale-105 transition-transform">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/20 border-2 border-primary rounded-sm">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase">Email</p>
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=johnandrewborabo@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm text-foreground hover:text-primary transition-colors font-mono"
                    >
                      johnandrewborabo@gmail.com
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="arcade-card p-4 hover:scale-105 transition-transform">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-secondary/20 border-2 border-secondary rounded-sm">
                    <Linkedin className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase">LinkedIn</p>
                    <a
                      href="https://www.linkedin.com/in/john-andrew-borabo-3533b3255/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm text-foreground hover:text-secondary transition-colors font-mono"
                    >
                      linkedin.com/in/john-andrew-borabo-3533b3255/
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="arcade-card p-4 hover:scale-105 transition-transform">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-accent/20 border-2 border-accent rounded-sm">
                    <Github className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase">GitHub</p>
                    <a
                      href="https://github.com/lulli30"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm text-foreground hover:text-accent transition-colors font-mono"
                    >
                      github.com/lulli30
                    </a>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <Card className="arcade-card p-8 animate__animated animate__fadeInRight">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-primary text-xl">▸</span>
              <h3 className="text-sm sm:text-base font-bold uppercase">MESSAGE CONSOLE</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-xs uppercase text-primary">
                  Player Name
                </Label>
                <Input
                  id="name"
                  placeholder="ENTER YOUR NAME"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="border-2 border-primary/30 bg-background/50 focus:border-primary text-xs sm:text-sm uppercase font-mono"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-xs uppercase text-primary">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="johnandrewborabo@gmail.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="border-2 border-primary/30 bg-background/50 focus:border-primary text-xs sm:text-sm font-mono"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-xs uppercase text-primary">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="DESCRIBE YOUR QUEST..."
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="border-2 border-primary/30 bg-background/50 focus:border-primary text-xs sm:text-sm font-mono resize-none"
                />
              </div>

              {status === "success" && (
                <p className="text-sm text-primary font-mono uppercase border-2 border-primary/50 bg-primary/10 p-3 rounded-sm">
                  Transmission sent! I&apos;ll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-destructive font-mono uppercase border-2 border-destructive/50 bg-destructive/10 p-3 rounded-sm">
                  {errorMessage}
                </p>
              )}
              <Button
                type="submit"
                disabled={status === "loading"}
                className="w-full arcade-card border-2 border-primary text-foreground uppercase text-xs sm:text-sm hover:-translate-y-1 transition-transform disabled:opacity-70 disabled:cursor-not-allowed"
                size="lg"
              >
                {status === "loading" ? (
                  <>Sending...</>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Transmission
                  </>
                )}
              </Button>
            </form>
          </Card>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t-2 border-primary/30 relative z-10">
        <p className="text-center text-muted-foreground text-xs uppercase tracking-wider font-mono">
          © 2025 John Andrew Borabo // BUILT WITH NEXT.JS + TAILWINDCSS // GAME OVER? PRESS START
        </p>
      </div>
    </section>
  )
}
