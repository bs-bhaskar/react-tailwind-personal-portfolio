import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    quote:
      "Pedro is one of the most talented engineers I've worked with. His attention to detail and ability to translate complex requirements into elegant solutions is remarkable.",
    author: "Sarah Chen",
    role: "CTO, Tech Innovators Inc.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    quote:
      "Working with Pedro was a game-changer for our project. He delivered ahead of schedule with code quality that set a new standard for our team.",
    author: "Michael Rodriguez",
    role: "Product Manager, Digital Solutions",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
  },
  {
    quote:
      "Pedro's expertise in React and TypeScript helped us rebuild our entire frontend in record time. His architectural decisions continue to pay dividends.",
    author: "Emily Watson",
    role: "Engineering Lead, StartUp Labs",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
  {
    quote:
      "Not only is Pedro technically brilliant, but he's also a fantastic communicator and team player. He elevated everyone around him.",
    author: "David Kim",
    role: "CEO, Innovation Hub",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
];

export const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setActiveIdx(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };
  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2
       w-[800px] h-[800px] bg-[rgba(32, 178, 166, 0.05)]
        rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      />
      <div
        className="container mx-auto 
      px-6 relative z-10"
      >
        {/* Section Header */}
        <div
          className="text-center max-w-3xl 
        mx-auto mb-16"
        >
          <span
            className="text-[var(--color-secondary-foreground)] 
          text-sm font-medium tracking-wider 
          uppercase animate-fade-in"
          >
            What People Say
          </span>
          <h2
            className="text-4xl md:text-5xl 
          font-bold mt-4 mb-6 animate-fade-in 
          animation-delay-100 text-[var(--color-secondary-foreground)]"
          >
            Kind words from{" "}
            <span
              className="font-serif italic 
            font-normal text-white"
            >
              amazing people.
            </span>
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Testimonial */}
            <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200">
              <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-[var(--color-primary)] flex items-center justify-center">
                <Quote className="w-6 h-6 text-[var(--color-primary-foreground)]" />
              </div>

              <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4">
                "{testimonials[activeIdx].quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                <img
                  src={testimonials[activeIdx].avatar}
                  alt={testimonials[activeIdx].author}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-[rgba(32, 178, 166, 0.2)]"
                />
                <div>
                  <div className="font-semibold">
                    {testimonials[activeIdx].author}
                  </div>
                  <div className="text-sm text-[var(--color-muted-foreground)]">
                    {testimonials[activeIdx].role}
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonials Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                className="p-3 rounded-full glass hover:bg-[rgba(32, 178, 166, 0.1)] hover:text-[var(--color-primary)] transition-all"
                onClick={previous}
              >
                <ChevronLeft />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    onClick={() => setActiveIdx(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    //   idx === activeIdx
                    //     ? "w-8 bg-[var(--color-primary)]"
                    //     : "bg-[rgba(122, 132, 145, 0.3)] hover:bg-[rgba(122, 132, 145, 0.5)]"
                         idx === activeIdx
                         ? "w-8 bg-[var(--color-primary)]"
                         : "bg-white/40 hover:bg-white/70"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-3 rounded-full glass hover:bg-[rgba(32, 178, 166, 0.1)] hover:text-[var(--color-primary)] transition-all"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};