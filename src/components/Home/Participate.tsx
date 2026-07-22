"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import brandingImg from "@/images/branding.png";
import speakingImg from "@/images/speaking.png";
import startupImg from "@/images/develop.png";

const items = [
  {
    img: brandingImg,
    imgLeft: true,
    title: "Showcase Your Product at Download 2026",
    description:
      "Put your innovation in the spotlight where tech meets opportunity — connect, demo, and grow at Nigeria's boldest digital stage.",
    cta: "Learn More",
    href: "#",
  },
  {
    img: speakingImg,
    imgLeft: false,
    title: "Interested in Speaking at Download 2026?",
    description:
      "Share your voice, inspire minds, and lead the digital conversation at one of Nigeria's most forward-thinking tech gatherings.",
    cta: "Submit a Pitch",
    href: "https://docs.google.com/forms/d/e/1FAIpQLScr0_rG59E_m48mNXW9rmHN8mLSlXJC3Srzih7UJ0SbzNyQUw/viewform",
  },
  {
    img: startupImg,
    imgLeft: true,
    title: "Do you have an Innovative Start?",
    description:
      "Got a game-changing idea? This is your chance to share it, get noticed, and connect with the right people who can help bring it to life.",
    cta: "Pitch it here",
    href: "https://docs.google.com/forms/d/e/1FAIpQLScr0_rG59E_m48mNXW9rmHN8mLSlXJC3Srzih7UJ0SbzNyQUw/viewform",
  },
];

const imgVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const imgVariantsRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Participate() {
  return (
    <section className="bg-(--navy) py-4 md:py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col gap-12 md:gap-16">
        {/* Header */}
        <motion.div
          className="flex flex-col items-center text-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-(--orange) font-semibold text-sm">Participate</p>
          <h2 className="text-white text-xl md:text-5xl font-bold leading-tight">
            Sell your Brand at Download 2026
          </h2>
        </motion.div>

        {/* Items */}
        <div className="flex flex-col divide-y divide-white/10">
          {items.map((item) => (
            <motion.div
              key={item.title}
              className={`flex flex-col md:flex-row items-center gap-10 py-12 first:pt-0 last:pb-0 ${
                !item.imgLeft ? "md:flex-row-reverse" : ""
              }`}
              variants={childVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Image */}
              <motion.div
                className="w-full md:w-1/2 shrink-0 rounded-2xl overflow-hidden"
                variants={item.imgLeft ? imgVariants : imgVariantsRight}
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  className="w-full h-64 md:h-72 object-cover"
                />
              </motion.div>

              {/* Text */}
              <motion.div
                className="flex-1 flex flex-col gap-5"
                variants={textVariants}
              >
                <motion.h3
                  className="text-white text-xl md:text-3xl font-bold leading-snug"
                  variants={childVariants}
                >
                  {item.title}
                </motion.h3>
                <motion.p
                  className="text-white/80 text-base leading-relaxed"
                  variants={childVariants}
                >
                  {item.description}
                </motion.p>
                <motion.a
                  href={item.href}
                  className="self-start bg-(--orange) shadow-[4px_6px_0_rgba(225,225,225)] hover:opacity-90 transition-opacity text-white font-semibold px-6 py-3 rounded-lg text-sm"
                  variants={childVariants}
                >
                  {item.cta}
                </motion.a>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
