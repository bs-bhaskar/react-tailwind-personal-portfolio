import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Building responsive and modern web applications using React and JavaScript.",
  },
  {
    icon: Rocket,
    title: "Fast Learner",
    description:
      "Continuously exploring new technologies and improving development skills.",
  },
  {
    icon: Users,
    title: "Problem Solving",
    description: "Practicing DSA and logical thinking to become a stronger developer.",
  },
  {
    icon: Lightbulb,
    title: "Project Building",
    description:
      "Learning by creating real-world projects and experimenting with new ideas.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden scroll-mt-28">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-[var(--color-secondary-foreground)] text-lg font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-[var(--color-secondary-foreground)]">
              Learning, building,
              <span className="font-serif italic font-normal text-white">
                {" "}
                and growing every day.
              </span>
            </h2>
            <div className="space-y-4 text-[var(--color-muted-foreground)] animate-fade-in animation-delay-200">
              <p>
                I'm currently pursuing BCA and focused on becoming a skilled full stack developer. I enjoy building modern web applications and continuously improving my coding skills.
              </p>
              <p>
                My current tech stack includes React, JavaScript, Node.js, MongoDB, and C++. Alongside web development, I'm also practicing Data Structures and Algorithms to strengthen my problem-solving abilities.
              </p>
              <p>
                I believe the best way to learn is by building real projects. That's why I regularly create projects, explore new technologies, and challenge myself to improve every single day.
              </p>
            </div>
            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-[var(--color-foreground)]">
                "My goal is simple — keep learning, keep building, and become a developer capable of creating impactful digital experiences."
              </p>
            </div>
          </div>
          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-[rgba(32,178,166,0.1)] flex items-center justify-center mb-4 hover:bg-[rgba(32,178,166,0.2)]">
                  <item.icon className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--color-muted-foreground)]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
