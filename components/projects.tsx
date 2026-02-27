"use client"

import "../styles/projects.css"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "NEXTSTEP AI",
    description:
      "AI-POWERED PLATFORM FOR PERSONALIZED CAREER PATHWAYS IN THE TECH INDUSTRY. HELPS USERS NAVIGATE THEIR CAREER JOURNEY USING INTELLIGENT RECOMMENDATIONS AND MODERN WEB TECHNOLOGIES.",
    image: "/NextStep-AI.jpg",
    technologies: ["React", "Next.js", "AI/ML", "Tailwind CSS"],
    github: "https://github.com/lulli30/NextStep-AI",
    demo: "https://next-step-ai-eight.vercel.app",
    difficulty: "MEDIUM",
  },
  {
    title: "ASKMYNOTES",
    description:
      "AI-POWERED ANDROID APPLICATION THAT GENERATES QUIZ QUESTIONS FROM USER-PROVIDED STUDY NOTES. DESIGNED TO HELP STUDENTS REVIEW MORE EFFECTIVELY USING NLP-BASED QUESTION GENERATION.",
    image: "/askmynotes.jpg",
    technologies: ["Java", "Android Studio", "NLP", "AI"],
    github: "",
    demo: "",
    difficulty: "MEDIUM",
  },
  {
    title: "SPIST LIBRARY MANAGEMENT SYSTEM",
    description:
      "WEB-BASED LIBRARY MANAGEMENT SYSTEM BUILT FOR SOUTHERN PHILIPPINES INSTITUTE OF SCIENCE & TECHNOLOGY. FEATURES BOOK MANAGEMENT, USER AUTHENTICATION, AND REAL-TIME ANALYTICS.",
    image: "/SPIST Library.jpg",
    technologies: ["Node.js", "Express", "MySQL", "JWT", "Bootstrap 5"],
    github: "https://github.com/lulli30/spist-library-management-system",
    demo: "",
    difficulty: "MEDIUM",
  },
  {
    title: "LULLIDEV PORTFOLIO",
    description:
      "PERSONAL DEVELOPER PORTFOLIO SHOWCASING PROJECTS, SKILLS, AND EXPERIENCE IN SOFTWARE DEVELOPMENT AND AI-FOCUSED APPLICATIONS.",
    image: "/LulliDev.jpg",
    technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/lulli30/LulliDev-Personal-Portfolio",
    demo: "https://lulli-dev.vercel.app",
    difficulty: "EASY",
  },
  {
    title: "CLASSROOM CLEANUP",
    description:
      "2D PYTHON GAME BUILT WITH PYGAME WHERE PLAYERS CLEAN UP A CLASSROOM ENVIRONMENT. FEATURES POWER-UPS, CUSTOM GRAPHICS, AND INTERACTIVE GAMEPLAY MECHANICS.",
    image: "/clean_ers.jpg",
    technologies: ["Python", "Pygame", "MoviePy"],
    github: "https://github.com/lulli30/clean-ers-pygame",
    demo: "https://drive.google.com/drive/folders/1lCW4clowOGX3DfoscPwIN3d0z30vuHfH?usp=sharing",
    difficulty: "EASY",
  },
]

function difficultyClass(d: string) {
  if (d === "EASY")   return "easy"
  if (d === "MEDIUM") return "medium"
  if (d === "HARD")   return "hard"
  return "medium"
}

export function Projects() {
  return (
    <section id="projects" className="projects-section retro-grid">
      <div className="projects-inner">

        {/* Heading */}
        <div className="proj-heading">
          <div className="proj-heading-row">
            <span className="proj-heading-marker">03.</span>
            <h2 className="proj-heading-title">GAME LIBRARY</h2>
          </div>
          <div className="proj-heading-line" />
        </div>

        {/* Grid */}
        <div className="proj-grid">
          {projects.map((project, index) => (
            <div key={index} className="proj-card">

              {/* Thumbnail */}
              <div className="proj-thumb">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                />
                <div className="proj-thumb-overlay">
                  <span className="proj-thumb-overlay-icon">▶ PRESS START</span>
                </div>
                <div className={`proj-badge ${difficultyClass(project.difficulty)}`}>
                  {project.difficulty}
                </div>
                <div className="proj-insert">— INSERT COIN —</div>
              </div>

              {/* Body */}
              <div className="proj-body">
                <h3 className="proj-title">{project.title}</h3>

                <p className="proj-description">{project.description}</p>

                <div className="proj-tags">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="proj-tag">{tech}</span>
                  ))}
                </div>

                <div className="proj-actions">
                  <a
                    href={project.github || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="proj-btn proj-btn-code"
                    aria-disabled={!project.github}
                  >
                    <Github size={10} />
                    CODE
                  </a>
                  <a
                    href={project.demo || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="proj-btn proj-btn-demo"
                    aria-disabled={!project.demo}
                  >
                    <ExternalLink size={10} />
                    PLAY
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}