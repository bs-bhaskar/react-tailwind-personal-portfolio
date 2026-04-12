const experiences = [
  {
    period: "2022 — Present",
    role: "Senior Frontend Engineer",
    company: "Tech Innovators Inc.",
    description:
      "Leading frontend architecture for a suite of fintech products. Implemented micro-frontend architecture, reduced bundle size by 40%, and mentored a team of 5 developers.",
    technologies: ["React", "TypeScript", "Next.js", "GraphQL"],
    current: true,
  },
  {
    period: "2020 — 2022",
    role: "Frontend Engineer",
    company: "Digital Solutions Co.",
    description:
      "Built and maintained multiple React applications for enterprise clients. Introduced automated testing practices that improved code coverage to 85%.",
    technologies: ["React", "Redux", "Jest", "Cypress"],
    current: false,
  },
  {
    period: "2019 — 2020",
    role: "Junior Developer",
    company: "StartUp Labs",
    description:
      "Contributed to the development of a SaaS platform from MVP to production. Collaborated with designers to implement pixel-perfect UI components.",
    technologies: ["React", "Node.js", "MongoDB", "AWS"],
    current: false,
  },
  {
    period: "2018 — 2019",
    role: "Freelance Developer",
    company: "Self-Employed",
    description:
      "Delivered custom web solutions for small businesses and startups. Built 15+ websites and applications, handling everything from design to deployment.",
    technologies: ["JavaScript", "PHP", "WordPress", "MySQL"],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-[rgba(32, 178, 166,0.05)] rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span
            className="text-[var(--color-secondary-foreground)] text-sm
           font-medium tracking-wider uppercase animate-fade-in"
          >
            Career Journey
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold
           mt-4 mb-6 animate-fade-in animation-delay-100
            text-[var(--color-secondary-foreground)]"
          >
            Experience that{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              speaks volumes.
            </span>
          </h2>

          <p
            className="text-[var(--color-muted-foreground)]
           animate-fade-in animation-delay-200"
          >
            A timeline of my professional growth, from curious beginner to
            senior engineer leading teams and building products at scale.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[rgba(32, 178, 166,0.7)] via-[rgba(32, 178, 166,0.3)] to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          {/* changes */}
          <div className="space-y-12 relative z-10">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-[var(--color-primary)] rounded-full -translate-x-1/2 ring-4 ring-[var(--color-background)] z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-[var(--color-primary)] animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-[rgba(32, 178, 166,0.3)] hover:border-[rgba(32, 178, 166,0.5)] transition-all duration-500`}
                  >
                    <span className="text-sm text-[var(--color-primary)] font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-[var(--color-muted-foreground)]">{exp.company}</p>
                    <p className="text-sm text-[var(--color-muted-foreground)] mt-4">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-[var(--color-muted-foreground)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};