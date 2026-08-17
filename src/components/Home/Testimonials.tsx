"use client";

import { useEffect, useRef, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Edozieee",
    content:
      "Download Tech Event 2025 exceeded expectations and became one of the standout tech gatherings in the region. It brought together students, professionals, entrepreneurs, and tech enthusiasts for a day of solid learning, real networking, and honest conversations about tech and innovation.",
  },
  {
    name: "Ogonna",
    content:
      "I was privileged to be part of the download tech volunteers last year. It was such a wonderful experience, I got to meet influential people, the likes of Mrs Chinyere Otuonye.",
  },
  {
    name: "Kosisochukwu Moneke",
    content:
      "My first ever tech event was Download Tech Event 2025, and I attended as a volunteer. It was a mind shaping experience. From volunteering before to the day of the event.",
  },
  {
    name: "JC Joetex",
    content:
      "Attending Download Tech 2025 was hands down one of the best moves I made last year. I showed up as a volunteer, ran with the registration unit, and honestly, the experience was unmatched.",
  },
  {
    name: "Ugochi Elechi",
    content:
      "Attending Download Tech last year was an amazing experience. The event was well-organized and packed with valuable insights from experienced speakers. I connected with inspiring people who are passionate about tech.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const visibleCount = 4; // desktop shows 4, we track by index

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 3000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const getVisible = () => {
    return Array.from(
      { length: visibleCount },
      (_, i) => testimonials[(current + i) % testimonials.length],
    );
  };

  return (
    <section className="bg-[#031632] py-20 px-6 md:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-3">
          <p className="text-[#F48636] font-semibold text-sm uppercase tracking-widest">
            Testimonials
          </p>
          <h2 className="text-white text-3xl md:text-5xl font-bold leading-tight">
            What Attendees Are Saying
          </h2>
        </div>

        {/* Cards — desktop shows 4, mobile shows 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Mobile: show only current */}
          <div className="md:hidden">
            <TestimonialCard
              name={testimonials[current].name}
              content={testimonials[current].content}
            />
          </div>

          {/* Desktop: show 4 */}
          {getVisible().map((t, i) => (
            <div key={i} className="hidden md:block">
              <TestimonialCard name={t.name} content={t.content} />
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setCurrent(i);
                if (timerRef.current) clearInterval(timerRef.current);
                startTimer();
              }}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "bg-[#F48636] w-6 h-2"
                  : "bg-white/20 w-2 h-2 hover:bg-white/40"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ name, content }: { name: string; content: string }) {
  return (
    <div className="bg-[#0a1e35] border border-white/10 rounded-2xl p-6 flex flex-col gap-4 h-full">
      <FaQuoteLeft size={20} className="text-[#F48636] opacity-60" />
      <p className="text-white/70 text-sm leading-relaxed flex-1">{content}</p>
      <div className="flex items-center gap-3 pt-2 border-t border-white/10">
        <div className="w-8 h-8 rounded-full bg-[#F48636]/20 flex items-center justify-center shrink-0">
          <span className="text-[#F48636] text-xs font-bold">
            {name.charAt(0)}
          </span>
        </div>
        <p className="text-white font-semibold text-sm">{name}</p>
      </div>
    </div>
  );
}
