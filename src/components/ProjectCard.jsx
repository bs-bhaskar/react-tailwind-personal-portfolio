import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export const ProjectCard = ({ project, index = 0 }) => {
  return (
    <div
      className="group glass rounded-2xl overflow-hidden animate-fade-in"
      style={{ animationDelay: `${(index + 1) * 100}ms` }}
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
          bg-gradient-to-t 
          from-[var(--color-card)] 
          via-[rgba(20,26,31,0.5)]
          to-transparent 
          opacity-60"
        />

        {/* Overlay Links */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={project.link}
            className="p-3 rounded-full glass hover:bg-[var(--color-primary)] hover:text-[var(--color-primary-foreground)] transition-all"
            aria-label={`View ${project.title}`}
          >
            <ArrowUpRight className="w-5 h-5" />
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href={project.github}
            className="p-3 rounded-full glass hover:bg-[var(--color-primary)] hover:text-[var(--color-primary-foreground)] transition-all"
            aria-label={`View ${project.title} source code`}
          >
            <FaGithub className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold group-hover:text-[var(--color-primary)] transition-colors">
            {project.title}
          </h3>

          <ArrowUpRight
            className="w-5 h-5 shrink-0 text-[var(--color-muted-foreground)] group-hover:text-[var(--color-primary)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
          />
        </div>

        <p className="text-[var(--color-muted-foreground)] text-sm">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-1.5 rounded-full bg-[var(--color-surface)] text-xs font-medium border border-[rgba(36,43,50,0.5)] text-[var(--color-muted-foreground)] hover:border-[rgba(32,178,166,0.5)] hover:text-[var(--color-primary)] transition-all duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};