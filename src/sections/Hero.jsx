import { ArrowRight,ChevronDown,Download } from "lucide-react";
import { FaGithub, FaLinkedin} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { Button } from "../components/Button";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const skills = [
  "React",
  "Node.js",
  "JavaScript",
  "MongoDB",
  "Express.JS",
  "Tailwind CSS",
  "APIs",
  "C/C++",
  "Basic DSA",
  "BootStrap",
  "HTML",
  "CSS",
  "Git",
  "GitHub",
  "Render",
  "Vercel",
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* bg */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="hero image"
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f141833] via-[#0f1418cc] to-[#0f1418]" />
      </div>
      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
      {/* content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column-Text Contect */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-[var(--color-primary)]">
                <span className="w-2 h-2 bg-[var(--color-primary)] rounded-full animate-pulse" />
                BCA Student | Aspiring Full Stack Developer • Software Developer
              </span>
            </div>
            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Turning{" "}
                <span className="text-[var(--color-primary)] glow-text">
                  ideas
                </span>
                <br />
                into real-world
                <br />
                <span className="font-serif italic font-normal text-white">
                  projects.
                </span>
              </h1>
              <p className="text-lg text-[var(--color-muted-foreground)] max-w-lg animate-fade-in animation-delay-800">
                Hi, I'm Bhaskar Yogi — a BCA student and aspiring full stack developer. 
                Currently focused on building real-world projects using React, Node.js, Tailwind CSS, MongoDB, Express.js and improving my DSA skills.
              </p>
            </div>
            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <a href="#contact">
                <Button size="lg">
                  Contact Me <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              <a href="/resume.pdf" download target="_blank" rel="noopener noreferrer">
                <AnimatedBorderButton>
                  <Download className="w-5 h-5" />
                  Resume
                </AnimatedBorderButton>
              </a>
              <a href="/professional-cv.pdf" download target="_blank" rel="noopener noreferrer">
                <AnimatedBorderButton>
                  <Download className="w-5q h-5"/>
                  Professional CV
                </AnimatedBorderButton>
              </a>
            </div>
            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-[var(--color-muted-foreground)]">
                Follow me:{" "}
              </span>
              {[
                { icon: FaGithub, href: "https://github.com/bs-bhaskar" },
                { icon: FaLinkedin, href: "https://www.linkedin.com/in/bhaskar-yogi-180b66325/" },
                { icon: SiLeetcode, href: "https://leetcode.com/u/BhaskarBhai/" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full glass hover:bg-[#20b2a61a] hover:text-[var(--color-primary)] transition-all duration-300"
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>
          {/* Right column-Profile Image */}
          <div className="relative animate-fade-in animation-delay-300">
            {/* Profile Image */}
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[rgba(32,178,166,0.3)] via-transparent to-[rgba(32,178,166,0.1)] blur-2xl animate-pulse" />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/profile-photo-3.png"
                  alt="Bhaskar yogi"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />
                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>
                {/* Stats Badge */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-[var(--color-primary)]">Daily{/*5+*/}</div>
                  <div className="text-xs text-[var(--color-muted-foreground)]">
                    Learning
                    {/* Years Exp. */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills section */}
        {/* I remove this section because it is scroll animation. it is taking time. to save recruter time i remove this animation */}
        {/* <div className="mt-20 animate-fade-in animation-delay-600">
            <p className="text-sm text-[var(--color-muted-foreground)] mb-6 text-center">
                Technologies I work with
            </p>
            <div className="relative overflow-hidden">
                <div className="flex animate-marquee">
                    {[...skills, ...skills].map((skill,idx)=>(
                        <div key={idx} className="flex-shrink-0 px-8 py-4">
                            <span className="text-xl font-semibold text-[rgba(122,132,145,0.5)] hover:text-[var(--color-muted-foreground)] transition-colors">{skill}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div> */}
        {/* ////////////////////////////////////////// */}
<div className="mt-20 animate-fade-in animation-delay-600">
  <p className="text-sm text-[var(--color-muted-foreground)] mb-6 text-center">
    Technologies I work with
  </p>

  <div className="flex flex-wrap justify-center gap-4">
    {/* {["HTML","CSS","JavaScript","React","Node.js","C++"].map((skill, idx) => ( */}
    {[...skills].map((skill, idx) => (
      <span
        key={idx}
        className="
          px-6 py-3 
          rounded-full 
          glass 
          text-sm font-medium 
          text-[var(--color-muted-foreground)]
          hover:text-[var(--color-primary)]
          hover:scale-105
          transition-all duration-300
          cursor-default
        "
      >
        {skill}
      </span>
    ))}
  </div>
</div>
{/* ///////////////////////////////////////////////////////////// */}
      </div>
      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
        <a href="#about" className="flex flex-col items-center gap-2 text-[var(--color-muted-foreground)] hover:text-[var(--color-primary)] transition-colors group">
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
