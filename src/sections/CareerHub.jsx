import {
  ArrowUpRight,
  BriefcaseBusiness,
  FileText,
  Map,
  ExternalLink,
  Download,
} from "lucide-react";

const internshipResources = [
  {
    title: "InternShala",
    description:
      "Useful platform where I can discover and apply for internships.",
    icon: BriefcaseBusiness,
    link: "https://internshala.com/",
    label: "Open InternShala",
  },
  {
    title: "LinkedIn",
    description:
      "Find internships, connect with recruiters and discover new opportunities.",
    icon: BriefcaseBusiness,
    link: "https://www.linkedin.com/jobs/",
    label: "Open LinkedIn",
  },
];

const documents = [
  {
    title: "Internship Roadmap",
    description:
      "3rd Year → Internship → PPO Complete Student Action Plan.",
    type: "Notion",
    link: "https://atlantic-jellyfish-c1f.notion.site/3rd-Year-Internship-PPO-Complete-Student-Action-Plan-3c0b5aac78f78142a542c2728b3573f0?pvs=143",
    external: true,
  },
  {
    title: "My Resume",
    description:
      "Latest version of my developer resume.",
    type: "PDF",
    link: "/Bhaskar_Yogi_ATS_Resume.pdf",
    external: false,
  },
  {
    title: "Internship Programs",
    description:
      "all 25 Important Internship Opportunity including Hackathons for getting internships.",
    type: "PDF",
    link: "/resources/internship-programs.pdf",
    external: false,
  },
  {
    title: "JAPAN INTERNSHIP GUIDE • 2027",
    description:
      "Two Japan internships worth applying for A practical CodeForSuccess guide for Indian engineering students, recent graduates and research-minded applicants.",
    type: "PDF",
    link: "/resources/CodeForSuccess_Japan_Internships_2027.pdf",
    external: false,
  },
];

export const CareerHub = () => {
  return (
    <section
      id="career-hub"
      className="min-h-screen py-28 md:py-32"
    >
      <div className="container mx-auto px-6">

        {/* Hero */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-[var(--color-primary)] mb-4">
            My Resources
          </p>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Career <span className="text-[var(--color-primary)]">Hub</span>
          </h1>

          <p className="mt-6 text-[var(--color-muted-foreground)] text-base md:text-lg leading-relaxed">
            A personal collection of internship opportunities, career
            roadmaps and important documents that I can access anytime,
            anywhere.
          </p>
        </div>

        {/* Quick Access */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto mb-20">

          <a
            href="#internships"
            className="glass rounded-2xl p-6 text-center hover:-translate-y-1 transition-all duration-300"
          >
            <BriefcaseBusiness className="w-7 h-7 mx-auto mb-3 text-[var(--color-primary)]" />
            <h3 className="font-semibold">Internships</h3>
            <p className="text-sm text-[var(--color-muted-foreground)] mt-1">
              Find opportunities
            </p>
          </a>

          <a
            href="#roadmap"
            className="glass rounded-2xl p-6 text-center hover:-translate-y-1 transition-all duration-300"
          >
            <Map className="w-7 h-7 mx-auto mb-3 text-[var(--color-primary)]" />
            <h3 className="font-semibold">Roadmap</h3>
            <p className="text-sm text-[var(--color-muted-foreground)] mt-1">
              My internship journey
            </p>
          </a>

          <a
            href="#documents"
            className="glass rounded-2xl p-6 text-center hover:-translate-y-1 transition-all duration-300"
          >
            <FileText className="w-7 h-7 mx-auto mb-3 text-[var(--color-primary)]" />
            <h3 className="font-semibold">Documents</h3>
            <p className="text-sm text-[var(--color-muted-foreground)] mt-1">
              Important files
            </p>
          </a>

        </div>

        {/* Internship Opportunities */}
        <div id="internships" className="mb-24 scroll-mt-28">

          <div className="flex items-center gap-3 mb-8">
            <BriefcaseBusiness className="text-[var(--color-primary)]" />
            <h2 className="text-2xl md:text-3xl font-bold">
              Internship Opportunities
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">

            {internshipResources.map((resource) => {
              const Icon = resource.icon;

              return (
                <a
                  key={resource.title}
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group glass rounded-2xl p-6 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(32,178,166,0.12)] transition-all duration-300"
                >
                  <div className="flex items-start justify-between">

                    <div className="p-3 rounded-xl bg-[var(--color-surface)]">
                      <Icon className="w-6 h-6 text-[var(--color-primary)]" />
                    </div>

                    <ArrowUpRight
                      className="text-[var(--color-muted-foreground)] group-hover:text-[var(--color-primary)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                    />

                  </div>

                  <h3 className="text-xl font-semibold mt-6">
                    {resource.title}
                  </h3>

                  <p className="text-sm text-[var(--color-muted-foreground)] mt-2 leading-relaxed">
                    {resource.description}
                  </p>

                  <div className="flex items-center gap-2 mt-5 text-sm text-[var(--color-primary)]">
                    {resource.label}
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </a>
              );
            })}

          </div>
        </div>

        {/* Roadmap */}
        <div id="roadmap" className="mb-24 scroll-mt-28">

          <div className="flex items-center gap-3 mb-8">
            <Map className="text-[var(--color-primary)]" />

            <h2 className="text-2xl md:text-3xl font-bold">
              Internship Roadmap
            </h2>
          </div>

          <div className="glass rounded-3xl p-6 md:p-10">

            <p className="text-[var(--color-muted-foreground)] max-w-2xl mb-10">
              My roadmap for going from learning and building projects to
              securing an internship and eventually converting it into a
              full-time opportunity.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

              {[
                "Skills",
                "Projects",
                "Resume & Portfolio",
                "Applications",
                "Interviews",
                "Internship",
                "Performance",
                "PPO / Full-Time",
              ].map((step, index) => (
                <div
                  key={step}
                  className="relative glass rounded-xl p-5"
                >
                  <span className="text-xs text-[var(--color-primary)]">
                    0{index + 1}
                  </span>

                  <h3 className="font-semibold mt-2">
                    {step}
                  </h3>
                </div>
              ))}

            </div>

            <a
              href="https://atlantic-jellyfish-c1f.notion.site/3rd-Year-Internship-PPO-Complete-Student-Action-Plan-3c0b5aac78f78142a542c2728b3573f0?pvs=143"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 px-5 py-3 rounded-full bg-[var(--color-primary)] text-black font-medium hover:opacity-90 transition"
            >
              Open Complete Roadmap
              <ExternalLink className="w-4 h-4" />
            </a>

          </div>
        </div>

        {/* Documents */}
        <div id="documents" className="scroll-mt-28">

          <div className="flex items-center gap-3 mb-8">
            <FileText className="text-[var(--color-primary)]" />

            <h2 className="text-2xl md:text-3xl font-bold">
              Important Documents
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">

            {documents.map((document) => (
              <div
                key={document.title}
                className="glass rounded-2xl p-6"
              >

                <div className="flex items-start justify-between">

                  <div className="p-3 rounded-xl bg-[var(--color-surface)]">
                    <FileText className="w-6 h-6 text-[var(--color-primary)]" />
                  </div>

                  <span className="text-xs px-3 py-1 rounded-full bg-[var(--color-surface)] text-[var(--color-muted-foreground)]">
                    {document.type}
                  </span>

                </div>

                <h3 className="text-xl font-semibold mt-6">
                  {document.title}
                </h3>

                <p className="text-sm text-[var(--color-muted-foreground)] mt-2 leading-relaxed">
                  {document.description}
                </p>

                <div className="flex gap-3 mt-6">

                  <a
                    href={document.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass hover:text-[var(--color-primary)] transition"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Open
                  </a>

                  {document.type === "PDF" && (
                    <a
                      href={document.link}
                      download
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass hover:text-[var(--color-primary)] transition"
                    >
                      <Download className="w-4 h-4" />
                      Download
                    </a>
                  )}

                </div>

              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};