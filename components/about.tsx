"use client"

import "../styles/about.css"
import { useState } from "react"
import Image from "next/image"

const TECHNOLOGIES = [
  { name: "Java",           },
  { name: "Python",         },
  { name: "JavaScript",     },
  { name: "React",          },
  { name: "Next.js",        },
  { name: "Android Studio", },
  { name: "NLP",            },
  { name: "Git",            },
]

const STATS = [
  { label: "CLASS",  value: "CS STUDENT"    },
  { label: "SCHOOL", value: "NU DASMARIÑAS" },
  { label: "YEAR",   value: "4TH YEAR"      },
  { label: "STATUS", value: "AVAILABLE"     },
]

export function About() {
  const [activeTech, setActiveTech] = useState<string | null>(null)

  return (
    <section id="about" className="about-section retro-grid">
      <div className="about-inner">

        {/* Section heading */}
        <div className="about-heading">
          <div className="about-heading-row">
            <span className="about-heading-marker">02.</span>
            <h2 className="about-heading-title">PLAYER INFO</h2>
          </div>
          <div className="about-heading-line" />
        </div>

        {/* Main grid */}
        <div className="about-grid">

          {/* Left: player card */}
          <div className="player-card anim-left">
            <div className="player-card-header">PLAYER_PROFILE.EXE</div>

            {/* Photo */}
            <div className="photo-frame">
              <div className="photo-frame-border">
                <div className="photo-frame-inner">
                  <Image
                    src="/andrew.png"
                    alt="Andrew"
                    fill
                    className="object-cover object-top"
                    sizes="220px"
                  />
                </div>
                <div className="photo-corner-tr" />
                <div className="photo-corner-bl" />
              </div>
            </div>

            {/* Stats */}
            <div className="player-stats">
              {STATS.map(({ label, value }) => (
                <div key={label} className="player-stat-row">
                  <span className="player-stat-label">{label}</span>
                  <span className="player-stat-sep">▸</span>
                  <span className={`player-stat-value${label === "STATUS" ? " highlight" : ""}`}>
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: bio + tech */}
          <div className="about-right anim-right">

            {/* Bio */}
            <div className="about-bio">
              <div className="about-bio-label">BIO</div>
              <p>
                LEVELING UP AS A CS STUDENT AND FREELANCE DEVELOPER WITH A STRONG FOCUS ON{" "}
                <span>NATURAL LANGUAGE PROCESSING</span>, <span>CYBERSECURITY</span>, AND{" "}
                <span>INTELLIGENT APPLICATIONS</span>. I ENJOY TURNING COMPLEX IDEAS AND RESEARCH
                INTO PRACTICAL, USER-FOCUSED SYSTEMS.
              </p>
              <p>
                CURRENT QUEST: BUILDING <span>AI-POWERED TOOLS</span> — FROM ANDROID APPS THAT
                HELP STUDENTS LEARN MORE EFFECTIVELY TO RESEARCH PROJECTS EXPLORING HOW GENERATIVE
                AI CAN IMPROVE INFORMATION SECURITY AND CONTENT UNDERSTANDING.
              </p>
            </div>

            {/* Tech stack */}
            <div className="tech-card">
              <div className="tech-card-header">
                <span className="tech-card-title">TECH STACK</span>
                <span className="tech-count">{TECHNOLOGIES.length} SKILLS UNLOCKED</span>
              </div>

              <div className="tech-grid">
                {TECHNOLOGIES.map(({ name }) => (
                  <button
                    key={name}
                    className={`tech-btn${activeTech === name ? " active" : ""}`}
                    onMouseEnter={() => setActiveTech(name)}
                    onMouseLeave={() => setActiveTech(null)}
                  >
                    <span className="tech-btn-name">{name}</span>
                  </button>
                ))}
              </div>

              <div className={`tech-detail${activeTech ? "" : " empty"}`}>
                {activeTech ? `${activeTech} selected — skill equipped` : "hover a skill"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}