"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import aboutImg from "@/images/about.png";

const fadeLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -24,
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

const fadeRight: Variants = {
  hidden: {
    opacity: 0,
    x: 24,
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

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function AboutUs() {
  return (
    <section className="bg-[#031632] px-6 py-12 md:px-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 md:flex-row md:gap-16">
        {/* Left: Image */}
        <motion.div
          className="w-full shrink-0 overflow-hidden rounded-2xl md:w-1/2"
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Image
            src={aboutImg}
            alt="Download Tech 2025 event"
            className="h-full w-full rounded-2xl object-cover"
          />
        </motion.div>

        {/* Right: Text */}
        <motion.div
          className="flex w-full flex-col gap-6 md:w-1/2"
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="font-semibold uppercase tracking-wide text-(--orange)">
            About Us
          </p>

          <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl">
            Dream, Develop, Dominate.
          </h2>

          <div className="flex flex-col gap-4 text-base leading-relaxed text-white/80">
            <p>
              Download is more than a tech event — it's where ambition meets
              innovation. We equip creators, entrepreneurs, and forward-thinkers
              with the tools, insights, and digital intelligence needed to
              thrive in today's connected world.
            </p>

            <p>
              This year's edition focuses on unlocking the next wave of digital
              potential. From social strategy to emerging tech, participants
              will discover how to turn ideas into scalable movements, drive
              brand impact, and build future-ready businesses.
            </p>

            <p>
              Whether you're growing a brand, shaping a cause, or launching the
              next big idea — Download 2026 is your blueprint for navigating and
              dominating the digital frontier.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Intentions */}
      <motion.div
        className="mt-8 flex w-full flex-col items-center gap-8 p-4 md:p-7"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <p className="font-semibold text-(--orange)">Know our Intention</p>

        <motion.div
          className="flex max-w-4xl flex-col gap-8 rounded-xl bg-white/10 p-6 text-center md:p-10"
          variants={fadeUp}
          transition={{ delay: 0.15 }}
        >
          <h3 className="text-lg font-semibold text-(--orange) md:text-3xl">
            Our Vision
          </h3>

          <p className="text-sm leading-7.5 text-white/80 md:text-base">
            To become Africa’s leading grassroots-driven technology and
            innovation summit—bridging the gap between emerging talents and
            global opportunities by empowering individuals and communities
            through tech, entrepreneurship, and collaboration.
          </p>
        </motion.div>

        <motion.div
          className="flex max-w-4xl flex-col gap-8 rounded-xl bg-white/10 p-6 text-center md:p-10"
          variants={fadeUp}
          transition={{ delay: 0.17 }}
        >
          <h3 className="text-lg font-semibold text-(--orange) md:text-3xl">
            Our Mission
          </h3>

          <p className="text-sm leading-7.5 text-white/80 md:text-base">
            Foster innovation, creativity, and entrepreneurship by showcasing
            emerging technologies and ideas. Connect startups, tech enthusiasts,
            ecosystem builders, and industry leaders for knowledge exchange and
            networking. Equip young people with the tools, mentorship, and
            visibility needed to solve real-world problems through technology.
            Drive inclusive digital transformation that elevates the
            socioeconomic potential of underserved regions, starting with Nnewi
            and beyond.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
