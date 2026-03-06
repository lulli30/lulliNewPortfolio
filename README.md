# LulliDev Portfolio

A modern, responsive portfolio website built with Next.js, showcasing software development projects, skills, and experience in AI-focused applications.

## Features

- **Modern Tech Stack**: Built with Next.js 16, React 19, and TypeScript
- **Responsive Design**: Fully responsive layout that works on all devices
- **Retro Gaming Theme**: Unique gaming-inspired UI with modern aesthetics
- **Project Showcase**: Interactive project cards with live demos and GitHub links
- **Experience Timeline**: Chronological display of professional and academic experience
- **Skills Section**: Interactive tech stack display
- **Certifications**: Display of professional certifications and achievements
- **Contact Section**: Easy ways to get in touch
- **Dark/Light Theme**: Theme switching capability
- **Optimized Performance**: Built with performance in mind using Next.js optimizations

## Tech Stack

### Frontend
- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library

### UI Components
- **Radix UI** - Accessible component primitives
- **class-variance-authority** - Component variant management
- **clsx & tailwind-merge** - Conditional class utilities

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Vercel Analytics** - Performance monitoring

## Project Structure

```
lulliNew/
├── app/                     # Next.js App Router
│   ├── api/                    # API routes
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Home page
├── components/              # React components
│   ├── ui/                     # Reusable UI components
│   ├── about.tsx               # About section
│   ├── contact.tsx             # Contact section
│   ├── experience.tsx          # Experience timeline
│   ├── hero.tsx               # Hero section
│   ├── navigation.tsx          # Navigation component
│   ├── projects.tsx            # Projects showcase
│   └── theme-provider.tsx      # Theme context
├── styles/                  # Stylesheets
│   ├── components/             # Component-specific styles
│   └── globals.css             # Global styles
├── public/                  # Static assets
│   └── assets/                 # Organized assets
│       ├── images/             # Profile and general images
│       ├── projects/           # Project screenshots
│       ├── certs/              # Certificates
│       ├── documents/          # Documents
│       └── placeholders/       # Placeholder assets
├── lib/                     # Utilities and helpers
├── docs/                    # Documentation
└── Configuration files
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/lulli30/lulliNewPortfolio.git
   cd lulliNewPortfolio
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Set up environment variables
   ```bash
   cp .env.example .env
   # Add your environment variables
   ```

4. Run the development server
   ```bash
   npm run dev
   ```

5. Open your browser
   Navigate to [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Customization

### Adding New Projects

1. Add project data to `components/projects.tsx`:
   ```typescript
   {
     title: "Your Project",
     description: "Project description",
     image: "/assets/projects/your-image.jpg",
     technologies: ["Tech1", "Tech2"],
     github: "https://github.com/your-repo",
     demo: "https://your-demo-url.com"
   }
   ```

2. Add project image to `public/assets/projects/`

### Adding New Experience

1. Add experience data to `components/experience.tsx`:
   ```typescript
   {
     title: "Your Role",
     company: "Company Name",
     period: "Period",
     description: "Description",
     technologies: ["Tech1", "Tech2"],
     link: "https://example.com"
   }
   ```

### Updating Styles

- Component-specific styles: `styles/components/[component].css`
- Global styles: `styles/globals.css`
- Tailwind configuration: `tailwind.config.js`

## Sections Overview

### Hero Section
- Eye-catching introduction with typewriter effect
- Call-to-action buttons
- Animated background elements

### About Section
- Personal information and stats
- Interactive tech stack display
- Professional bio

### Experience Section
- Timeline of professional and academic experience
- Chronological navigation
- Technology tags for each role

### Projects Section
- Grid layout of featured projects
- Project cards with images and descriptions
- Links to live demos and GitHub repositories
- Technology stack tags

### Contact Section
- Social media links
- Direct contact information
- Professional networking options

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically on every push to main branch

### Manual Deployment

1. Build the project
   ```bash
   npm run build
   ```

2. Start production server
   ```bash
   npm run start
   ```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

**John Andrew Borabo**
- GitHub: [@lulli30](https://github.com/lulli30)
- LinkedIn: [John Andrew Borabo](https://linkedin.com/in/john-andrew-borabo-3533b3255/)
- Email: johnandrewborabo@gmail.com

## Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Radix UI](https://www.radix-ui.com/) - UI components
- [Lucide](https://lucide.dev/) - Icon library

## Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: Optimized for fast loading
- **Responsive**: Mobile-first design approach
- **SEO Optimized**: Meta tags and structured data

---

Built with ❤️ and lots of ☕
