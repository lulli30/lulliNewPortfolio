"use client"

import { Card } from "@/components/ui/card"
import { ExternalLink, Star } from "lucide-react"
import { useState } from "react"

const experiences = [
  {
    title: "AI RESEARCHER & CO-AUTHOR",
    company: "KST 2026 (INTERNATIONAL CONFERENCE)",
    period: "ACCEPTED — 2026",
    description:
      "CO-AUTHORED AN ACCEPTED RESEARCH PAPER TITLED 'EYSTREAM: REAL-TIME SENTIMENT ANALYSIS AND CHAT FILTERING SYSTEM FOR TIKTOK LIVE STUDIOS.' CONTRIBUTED TO THE DESIGN AND IMPLEMENTATION OF AN NLP-BASED SYSTEM FOR REAL-TIME SENTIMENT ANALYSIS AND CONTENT MODERATION IN LIVE STREAMING ENVIRONMENTS.",
    technologies: ["Python", "NLP", "Sentiment Analysis", "AI Research"],
    link: "https://kst.buu.ac.th/2025/accepted-paper.html",
    level: 1,
  },
  {
    title: "HACKATHON PARTICIPANT",
    company: "ISEAC 2025 HACKATHON",
    period: "FEB 2025",
    description:
      "COLLABORATED WITH A TEAM TO DESIGN AND BUILD A WORKING SOFTWARE SOLUTION UNDER TIME CONSTRAINTS. APPLIED PROBLEM-SOLVING, RAPID PROTOTYPING, AND TEAM COMMUNICATION SKILLS IN A COMPETITIVE ENVIRONMENT.",
    technologies: ["JavaScript", "Problem Solving", "Team Collaboration"],
    link: "https://www.facebook.com/share/p/1C1kupmv8F/",
    level: 2,
  },
  {
    title: "FREELANCE WEB & SOFTWARE DEVELOPER",
    company: "SELF-EMPLOYED",
    period: "2022 — PRESENT",
    description:
      "DEVELOPED WEBSITES AND SOFTWARE SOLUTIONS FOR CLIENTS AND PERSONAL PROJECTS. BUILT RESPONSIVE USER INTERFACES, IMPLEMENTED APPLICATION LOGIC, AND CONTINUOUSLY LEARNED NEW TOOLS AND FRAMEWORKS THROUGH HANDS-ON PROJECTS.",
    technologies: ["JavaScript", "React", "Next.js", "Git"],
    link: "https://github.com/lulli30",
    level: 3,
  },
]


export function Experience() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="experience" className="py-24 px-6 lg:px-8 bg-secondary/10 relative overflow-hidden">
      <div className="absolute inset-0 retro-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="space-y-4 mb-12 animate__animated animate__fadeIn">
          <div className="flex items-center gap-4">
            <span className="text-secondary text-2xl">★</span>
            <h2 className="text-2xl md:text-3xl font-bold uppercase">QUEST LOG</h2>
          </div>
          <div className="h-1 w-20 bg-secondary rounded-sm pixel-border" />
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="arcade-card p-6 animate__animated animate__fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      {Array.from({ length: exp.level }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                      <span className="text-xs text-primary uppercase">LVL {exp.level}</span>
                    </div>

                    <h3 className="text-sm sm:text-base font-semibold text-foreground uppercase mb-1">{exp.title}</h3>
                    <p className="text-xs sm:text-sm text-secondary font-medium uppercase">{exp.company}</p>
                  </div>
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-muted-foreground hover:text-primary transition-all ${
                      hoveredIndex === index ? "scale-125" : ""
                    }`}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>

                <p className="text-xs text-muted-foreground uppercase tracking-wide">{exp.period}</p>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-mono">{exp.description}</p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 border-2 border-primary/30 bg-primary/10 text-primary rounded-sm text-xs uppercase hover:bg-primary hover:text-background transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
