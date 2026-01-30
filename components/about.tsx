"use client"

import { Card } from "@/components/ui/card"
import { useState } from "react"
import Image from "next/image"

export function About() {
  const [activeTech, setActiveTech] = useState<string | null>(null)

  const technologies = [
    "Java",
    "Python",
    "JavaScript",
    "React",
    "Next.js",
    "Android Studio",
    "NLP",
    "Git"
  ]
  
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
            <div className="space-y-2 flex flex-col items-center lg:items-start">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-lg overflow-hidden border-2 border-primary/30 shrink-0">
                <Image
                  src="/andrew.png"
                  alt="Andrew"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 256px, 288px"
                />
              </div>
              <div className="space-y-1 text-sm text-center lg:text-left">
                <p className="font-medium uppercase text-primary">
                  <span className="text-muted-foreground">Name:</span> Andrew
                </p>
                <p className="font-medium uppercase text-primary">
                  <span className="text-muted-foreground">School:</span> National University - Dasmarinas
                </p>
                <p className="font-medium uppercase text-primary">
                  <span className="text-muted-foreground">Year:</span> 4th Year
                </p>
                <p className="font-medium uppercase text-primary">
                  <span className="text-muted-foreground">Course:</span> Computer Science
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6 animate__animated animate__fadeInRight">
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed text-justify sm:text-left">
              LEVELING UP AS A COMPUTER SCIENCE STUDENT AND AI DEVELOPER WITH A STRONG FOCUS ON
              NATURAL LANGUAGE PROCESSING, CYBERSECURITY, AND INTELLIGENT APPLICATIONS.
              I ENJOY TURNING COMPLEX IDEAS AND RESEARCH INTO PRACTICAL, USER-FOCUSED SYSTEMS.

            </p>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed text-justify sm:text-left">
              CURRENT QUEST: BUILDING AI-POWERED TOOLS AND APPLICATIONS — FROM ANDROID APPS THAT
              HELP STUDENTS LEARN MORE EFFECTIVELY TO RESEARCH PROJECTS EXPLORING HOW GENERATIVE
              AI CAN IMPROVE INFORMATION SECURITY AND CONTENT UNDERSTANDING.
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
