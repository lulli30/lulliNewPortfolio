"use client"

import "../styles/experience.css"
import { ExternalLink } from "lucide-react"

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
  return (
    <section id="experience" className="experience-section retro-grid">
      <div className="experience-inner">

        {/* Heading */}
        <div className="exp-heading">
          <div className="exp-heading-row">
            <span className="exp-heading-marker">02.</span>
            <h2 className="exp-heading-title">QUEST LOG</h2>
          </div>
          <div className="exp-heading-line" />
        </div>

        {/* Timeline */}
        <div className="exp-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="exp-entry">

              {/* Node */}
              <div className="exp-node">
                <div className="exp-node-dot">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>

              {/* Card */}
              <div className="exp-card">
                <div className="exp-card-header">
                  <div className="exp-card-meta">
                    {/* Level stars */}
                    <div className="exp-level-row">
                      {Array.from({ length: exp.level }).map((_, i) => (
                        <span key={i} className="exp-star">★</span>
                      ))}
                      <span className="exp-level-badge">LVL {exp.level}</span>
                    </div>

                    <h3 className="exp-title">{exp.title}</h3>
                    <p className="exp-company">{exp.company}</p>
                  </div>

                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="exp-link"
                    aria-label="View link"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>

                <div className="exp-period">{exp.period}</div>

                <p className="exp-description">{exp.description}</p>

                <div className="exp-tags">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="exp-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}