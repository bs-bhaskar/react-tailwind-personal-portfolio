import { ArrowLeft, FolderGit2 } from "lucide-react";
import { Link } from "react-router-dom";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const ProjectsPage = () => {
  return (
    <main className="min-h-screen pt-32 pb-24 relative overflow-hidden">

      {/* Background glows */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-[rgba(32,178,166,0.05)] rounded-full blur-3xl" />

      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[rgba(245,166,35,0.04)] rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Back */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-[var(--color-muted-foreground)] hover:text-[var(--color-primary)] transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </Link>

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">

          <div className="flex justify-center mb-5">
            <div className="p-3 rounded-2xl glass">
              <FolderGit2 className="w-7 h-7 text-[var(--color-primary)]" />
            </div>
          </div>

          <span className="text-[var(--color-primary)] text-sm font-medium tracking-wider uppercase">
            Project Archive
          </span>

          <h1 className="text-4xl md:text-6xl font-bold mt-4">
            All My{" "}
            <span className="font-serif italic font-normal text-[var(--color-primary)]">
              Projects.
            </span>
          </h1>

          <p className="text-[var(--color-muted-foreground)] mt-6 leading-relaxed">
            A collection of projects I've built while learning, experimenting,
            and solving real-world problems.
          </p>

          <p className="text-sm text-[var(--color-muted-foreground)] mt-4">
            {projects.length} projects
          </p>

        </div>

        {/* Projects */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={idx}
            />
          ))}
        </div>

      </div>
    </main>
  );
};