"use client";

import { useEffect, useState } from "react";
import { HiArrowTrendingUp } from "react-icons/hi2";
import { FiCalendar } from "react-icons/fi";
import { IoLocationSharp } from "react-icons/io5";
import bars from "@/images/glowBars.png";
import grid from "@/images/grid.png";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const slideLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const slideRight: Variants = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      delay: 0.1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const EVENT_DATE = new Date("2026-09-05T09:00:00");

function getTimeLeft() {
  const now = new Date();
  const diff = EVENT_DATE.getTime() - now.getTime();

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col z-10 items-center justify-center font-light border border-white/20 rounded-md w-19.5 md:w-24 h-19.5 md:h-24  backdrop-blur-sm">
      <span className="text-white text-2xl md:text-4xl font-light">
        {String(value).padStart(2, "0")}
      </span>
      <span className="text-white text-[11px] md:text-xs mt-1 uppercase tracking-widest">
        {label}
      </span>
    </div>
  );
}

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[120vh] bg-(--navy) flex flex-col">
      {/* Grid floor perspective effect */}

      <div className="absolute bottom-0 z-0 w-full pointer-events-none">
        <Image
          src={grid}
          alt=""
          className="w-full h-112.5 pointer-events-none"
        />
      </div>

      {/* glow */}

      <div className="absolute top-0 z-0 w-full pointer-events-none">
        <Image
          src={bars}
          alt=""
          className="w-full h-112.5 md:h-130 pointer-events-none"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 flex font-jakarta flex-col items-center justify-center flex-1 text-center px-4 pt-40 md:pt-32 pb-16 gap-6">
        <h1 className="text-4xl md:text-7xl font-bold text-white leading-tight">
          DOWNLOAD TECH <span className="text-(--orange)">2026</span>
        </h1>

        <p className="text-white md:font-medium text-base md:text-xl max-w-2xl">
          Theme: Building the Talent Infrastructure for Africa's Digital Future
        </p>

        {/* Countdown */}
        <div className="flex flex-wrap justify-center gap-3">
          <CountdownUnit value={timeLeft.days} label="Days" />
          <CountdownUnit value={timeLeft.hours} label="Hours" />
          <CountdownUnit value={timeLeft.minutes} label="Minutes" />
          <CountdownUnit value={timeLeft.seconds} label="Seconds" />
        </div>

        {/* CTA */}
        <a
          href="https://www.funzweb.com/events/download-tech-event-2026-409"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-(--orange) px-6 md:px-8 py-3 md:py-4 mt-4 rounded-xl text-white font-semibold text-sm md:text-base transition-opacity hover:opacity-90"
        >
          Buy Tickets <HiArrowTrendingUp size={18} />
        </a>
      </div>

      {/* Bottom Info Bar */}
      <div className="relative z-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 bg-white/10 px-12 py-7 text-(--orange) md:flex-row">
        {/* Date */}
        <motion.div
          className="flex items-center gap-4"
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-(--orange)">
            <FiCalendar size={22} className="text-white" />
          </div>

          <div>
            <p className="text-(--orange) text-sm font-light uppercase tracking-widest">
              When?
            </p>
            <p className="font-medium text-white">5th September, 2026</p>
          </div>
        </motion.div>

        {/* Venue */}
        <motion.div
          className="flex items-center gap-4"
          variants={slideRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <p className="font-medium text-white">Classic Munich Hotel, Nnewi</p>

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-(--orange)">
            <IoLocationSharp size={20} className="text-white" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
