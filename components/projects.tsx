"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Sparkles } from "lucide-react"
import { useState } from "react"

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


export function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "EASY":
        return "text-accent border-accent"
      case "MEDIUM":
        return "text-secondary border-secondary"
      case "HARD":
        return "text-destructive border-destructive"
      default:
        return "text-primary border-primary"
    }
  }

  return (
    <section id="projects" className="py-24 px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 retro-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="space-y-4 mb-12 animate__animated animate__fadeIn">
          <div className="flex items-center gap-4">
            <span className="text-accent text-2xl">◆</span>
            <h2 className="text-2xl md:text-3xl font-bold uppercase">GAME LIBRARY</h2>
          </div>
          <div className="h-1 w-20 bg-accent rounded-sm pixel-border" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="arcade-card overflow-hidden group animate__animated animate__zoomIn"
              style={{ animationDelay: `${index * 0.15}s` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative aspect-video overflow-hidden bg-secondary/20 border-b-2 border-primary">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  className={`absolute top-3 right-3 px-3 py-1 border-2 ${getDifficultyColor(project.difficulty)} bg-background/90 text-xs uppercase font-bold`}
                >
                  {project.difficulty}
                </div>
                {hoveredIndex === index && (
                  <div className="absolute inset-0 bg-primary/20 flex items-center justify-center animate__animated animate__fadeIn animate__faster">
                    <Sparkles className="w-12 h-12 text-primary animate-pulse" />
                  </div>
                )}
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-sm sm:text-base font-semibold uppercase leading-tight">{project.title}</h3>

                <p className="text-xs text-muted-foreground leading-relaxed font-mono min-h-[60px]">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 border border-primary/30 bg-primary/10 text-primary rounded-sm text-xs uppercase"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="flex-1 border-2 text-xs uppercase hover:scale-105 transition-transform bg-transparent"
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-3 h-3 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    variant="default"
                    asChild
                    className="flex-1 text-xs uppercase hover:scale-105 transition-transform"
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-3 h-3 mr-2" />
                      Play
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
