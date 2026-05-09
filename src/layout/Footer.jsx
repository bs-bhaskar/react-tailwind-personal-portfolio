// import { Github, Linkedin, Twitter, Heart } from "lucide-react";
import { FaGithub, FaLinkedin} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/bs-bhaskar", label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/bhaskar-yogi-180b66325/", label: "LinkedIn" },
  { icon: SiLeetcode, href: "https://leetcode.com/u/BhaskarBhai/", label: "LeetCode" },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Journey" },
  { href: "#contact", label: "Contact" },
  { href: "#testimonials", label: "Feedback" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-[var(--color-border)]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold tracking-tight hover:text-[var(--color-primary)]">
              BY<span className="text-[var(--color-primary)]">.</span>
            </a>
            <p className="text-sm text-[var(--color-muted-foreground)] mt-2">
              © {currentYear} Bhaskar Yogi. Built with React & Tailwind CSS.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                aria-label={social.label}
                rel="noopener noreferrer"
                className="p-2 rounded-full glass hover:bg-[rgba(32, 178, 166,0.1)] hover:text-[var(--color-primary)] transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};