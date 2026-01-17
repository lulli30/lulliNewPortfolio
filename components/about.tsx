"use client"

import { Card } from "@/components/ui/card"
import { useState } from "react"

export function About() {
  const [activeTech, setActiveTech] = useState<string | null>(null)

  const technologies = ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "TailwindCSS", "PostgreSQL", "Git"]

  return (
    <section id="about" className="py-24 px-6 lg:px-8 relative">
      <div className="absolute inset-0 retro-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-4 animate__animated animate__fadeInLeft">
            <div className="flex items-center gap-4">
              <span className="text-primary text-2xl">▶</span>
              <h2 className="text-2xl md:text-3xl font-bold uppercase">PLAYER INFO</h2>
            </div>
            <div className="h-1 w-20 bg-primary rounded-sm pixel-border" />
          </div>

          <div className="space-y-6 animate__animated animate__fadeInRight">
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              LEVEL 99 DEVELOPER SPECIALIZING IN CRAFTING PIXEL-PERFECT USER INTERFACES. ACHIEVED HIGH SCORE IN
              COMBINING DESIGN WITH ROBUST ENGINEERING. CURRENT QUEST: BUILDING ACCESSIBLE WEB EXPERIENCES.
            </p>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              CURRENTLY GRINDING AS SENIOR FULL-STACK ENGINEER. MAIN SKILLS: BUILDING SCALABLE WEB APPS, UI COMPONENT
              MASTERY, AND ACCESSIBILITY STANDARDS COMPLIANCE.
            </p>

            <Card className="arcade-card p-6 animate__animated animate__zoomIn">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-primary text-xl">●</span>
                <h3 className="text-sm sm:text-base font-semibold uppercase">TECH STACK</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <button
                    key={tech}
                    onMouseEnter={() => setActiveTech(tech)}
                    onMouseLeave={() => setActiveTech(null)}
                    className={`px-3 py-2 border-2 rounded-sm text-xs font-medium uppercase transition-all transform hover:scale-110 ${
                      activeTech === tech
                        ? "bg-primary text-background border-primary scale-110"
                        : "bg-primary/10 text-primary border-primary/30"
                    }`}
                  >
                    {tech}
                  </button>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
