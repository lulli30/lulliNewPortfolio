"use client"

import "../styles/about.css"
import { useState } from "react"
import Image from "next/image"
import { ExternalLink } from "lucide-react"

const TECHNOLOGIES = [
  { name: "Java"           },
  { name: "Python"         },
  { name: "JavaScript"     },
  { name: "React"          },
  { name: "Next.js"        },
  { name: "Android Studio" },
  { name: "NLP"            },
  { name: "Git"            },
]

const STATS = [
  { label: "PROGRAM", value: "CS STUDENT"    },
  { label: "SCHOOL",  value: "NU DASMARIÑAS" },
  { label: "YEAR",    value: "4TH YEAR"      },
  { label: "STATUS",  value: "AVAILABLE"     },
]

/**
 * CERTIFICATIONS
 * Each cert can have:
 *   - icon: a local image path (e.g. "/certs/google.png") or a URL
 *   - emoji: a fallback emoji string (e.g. "🎓") used when no icon is provided
 * If neither is set, a default "✦" symbol is shown.
 *
 * Examples:
 *   { title: "...", issuer: "Google", icon: "/certs/google.png", ... }
 *   { title: "...", issuer: "Meta",   emoji: "🎓",               ... }
 *   { title: "...", issuer: "AWS",    icon: "https://...",        ... }
 */
const CERTIFICATIONS = [
  {
    title: "Programming for Intermediate Users Using Python",
    issuer: "DICT",
    date: "Dec 2022",
    credential: "https://www.linkedin.com/in/john-andrew-borabo-3533b3255/details/certifications/1741502797081/single-media-viewer/?profileId=ACoAAD7ihS8BEiX3-iwqg2fcc8QQa6ETuVPC6Ss",
    icon: "/certs/DICT.jpg",
  },
  {
    title: "IT Specialist - Software Development",
    issuer: "Certiport, a Pearson VUE business",
    date: "March 2025",
    credential: "https://www.credly.com/badges/933bcf0f-c316-48ee-9c8f-57182d0f9704/public_url",
    icon: "/certs/ITS-Badges_Software-Development_1200px.png",
  },
  {
    title: "Programming for Beginners Using Python",
    issuer: "DICT",
    date: "Dec 2022",
    credential: "https://www.linkedin.com/in/john-andrew-borabo-3533b3255/details/certifications/1741502761837/single-media-viewer/?profileId=ACoAAD7ihS8BEiX3-iwqg2fcc8QQa6ETuVPC6Ss",
    icon: "/certs/DICT.jpg",
  },
  {
    title: "JavaScript OOP: Mastering Modern Object-Oriented Programming",
    issuer: "Udemy",
    date: "Mar 2025",
    credential: "https://www.udemy.com/certificate/UC-882b177f-4e25-4025-9027-1780c213501d/",
    icon: "/certs/udemy.png",
  },
  {
    title: "Cybersecurity Defense with AI and Gen AI",
    issuer: "Udemy",
    date: "Mar 2025",
    credential: "https://www.udemy.com/certificate/UC-ba10a56a-ca60-4b93-9552-b57faff1539e/",
    icon: "/certs/udemy.png",
  },
  {
    title: "Git & GitHub Bootcamp",
    issuer: "Udemy",
    date: "Apr 2025",
    credential: "https://www.udemy.com/certificate/UC-51da5bd0-fe48-4039-8cc3-f590a7b07959/",
    icon: "/certs/udemy.png",
  }
]

function CertIcon({ icon, emoji }: { icon?: string; emoji?: string }) {
  if (icon) {
    return (
      <div className="cert-icon-img-wrap">
        <Image
          src={icon}
          alt="issuer icon"
          fill
          className="cert-icon-img"
          sizes="36px"
        />
      </div>
    )
  }
  if (emoji) {
    return <span className="cert-icon-emoji">{emoji}</span>
  }
  return <span className="cert-icon-default">✦</span>
}

export function About() {
  const [activeTech, setActiveTech] = useState<string | null>(null)

  return (
    <section id="about" className="about-section retro-grid">
      <div className="about-inner">

        {/* Section heading */}
        <div className="about-heading">
          <div className="about-heading-row">
            <span className="about-heading-marker">01.</span>
            <h2 className="about-heading-title">PLAYER INFO</h2>
          </div>
          <div className="about-heading-line" />
        </div>

        {/* Main grid */}
        <div className="about-grid">

          {/* Left: player card */}
          <div className="player-card anim-left">
            <div className="player-card-header">PLAYER_PROFILE.EXE</div>

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

        {/* ── Certifications ── */}
        <div className="cert-section">
          <div className="cert-heading">
            <div className="cert-heading-dot" />
            <span className="cert-heading-title">Licenses & certifications</span>
            <span className="cert-heading-count">{CERTIFICATIONS.length} CERTS</span>
          </div>

          <div className="cert-grid">
            {CERTIFICATIONS.map((cert, i) => (
              <div key={i} className="cert-card">
                <div className="cert-card-top">
                  <CertIcon icon={cert.icon} />
                  <div className="cert-info">
                    <p className="cert-title">{cert.title}</p>
                    <p className="cert-issuer">{cert.issuer}</p>
                  </div>
                </div>
                <div className="cert-card-bottom">
                  <span className="cert-date">{cert.date}</span>
                  {cert.credential ? (
                    <a
                      href={cert.credential}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cert-link"
                    >
                      <ExternalLink size={10} />
                      VERIFY
                    </a>
                  ) : (
                    <span className="cert-no-link">NO LINK</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}