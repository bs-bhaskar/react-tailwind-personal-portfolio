import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    quote:
      "Bhaskar has always shown strong curiosity for learning and improving his development skills. His consistency, practical mindset, and willingness to build real projects make him stand out among students.",
    author: "Sameer Nainawat",
    role: "Former Faculty & Mentor",
    avatar:
      "./sameer.png",
  },
  {
    quote:
      "Bhaskar is a sincere and dedicated student who continuously works on improving both his programming and problem-solving skills. He actively learns through practice and project building.",
    author: "Vishnu Saini",
    role: "Programming Faculty",
    avatar:
      "./vishnu.png",
  },
  {
    quote:
      "I've seen Bhaskar grow consistently as a developer through regular practice and project building. His dedication toward web development and learning stands out.",
    author: "Amit Saini",
    role: "Classmate & Peer",
    avatar:
      "./amit.png",
  },
  {
    quote:
      "Bhaskar is always focused on learning something new and improving his projects. He is consistent, hardworking, and enjoys helping others while learning together.",
    author: "Lucky Sharma",
    role: "Classmate & Peer",
    avatar:
      "./lucky.png",
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