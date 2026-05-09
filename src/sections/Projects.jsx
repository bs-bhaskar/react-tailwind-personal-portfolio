import { ArrowUpRight} from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { FaGithub} from "react-icons/fa";
const projects = [
  {
    title: "QuickGPT",
    description:
      "AI-powered MERN app where users can sign up and generate text and images using Gemini AI. Includes JWT authentication, ImageKit integration for image handling, and a Stripe-based credit system for purchasing usage. Built for real-world full-stack deployment.",
    image: "/projects/1.png",
    tags: ["React", "Tailwind", "Node.JS", "Stripe", "MongoDB", "Axios", "Prism.JS", "Express.JS"],
    link: "https://quick-gpt-xi-sable.vercel.app/",
    github: "https://github.com/bs-bhaskar/QuickGPT",
  },
  {
    title: "QR Code Generator",
    description:
      "A simple and responsive QR Code Generator built using HTML, CSS, and JavaScript. Users can instantly generate QR codes from any text or URL, download them, and even switch between light and dark mode.",
    image: "/projects/2.png",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://qr-code-generator-eta-flame.vercel.app/",
    github: "https://github.com/bs-bhaskar/qr-code-generator.git",
  },
  {
    title: "Text to Speech Converter",
    description:
      "A clean and simple Text-to-Speech (TTS) web application built using HTML, CSS, and JavaScript. This project converts user input text into spoken audio using the browser's Web Speech API.",
    image: "/projects/3.png",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://text-to-voice-converter-tau.vercel.app/",
    github: "https://github.com/bs-bhaskar/text-to-voice-converter.git",
  },
  {
    title: "Image Background Change Effect",
    description:
      "This project creates a cool image comparison effect where users can slide across the image to reveal the original and edited versions. Built using pure HTML, CSS, and JavaScript.",
    image: "/projects/4.png",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://image-background-change-effect-sand.vercel.app/",
    github: "https://github.com/bs-bhaskar/image-Background-change-effect.git",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[rgba(32,178,166,0.05)] rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-[rgba(245, 166, 35,0.05)] rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-[var(--color-secondary-foreground)] text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-[var(--color-secondary-foreground)]">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-[var(--color-muted-foreground)] animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-[var(--color-card)] via-[rgba(20, 26, 31, 0.5)]
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    target="_blank"
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-[var(--color-primary)] hover:text-[var(--color-primary-foreground)] transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    target="_blank"
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-[var(--color-primary)] hover:text-[var(--color-primary-foreground)] transition-all"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-[var(--color-primary)] transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-[var(--color-muted-foreground)] group-hover:text-[var(--color-primary)]
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-[var(--color-muted-foreground)] text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-[var(--color-surface)] text-xs font-medium border border-[rgba(36, 43, 50, 0.5)] text-[var(--color-muted-foreground)] hover:border-[rgba(32, 178, 166,0.5)] hover:text-[var(--color-primary)] transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <a href="https://github.com/bs-bhaskar" target="_blank" rel="noopener noreferrer">
            <AnimatedBorderButton>
              View All Projects
              <ArrowUpRight className="w-5 h-5" />
            </AnimatedBorderButton>
          </a>
        </div>
      </div>
    </section>
  );
};