"use client";

import Image from "next/image";
import newsletterImg from "@/images/newsletter.jpg";
import { motion, type Variants } from "framer-motion";

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
      ease: "easeOut",
    },
  },
};

const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: 0.15,
      ease: "easeOut",
    },
  },
};

export default function NewsLetter() {
  return (
    <section className="relative flex h-screen w-full flex-col items-center justify-center gap-6 overflow-hidden px-6 text-center font-space md:h-100 md:px-16">
      <Image
        src={newsletterImg}
        alt="Newsletter background"
        fill
        priority
        className="object-cover"
      />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
        className="absolute inset-0 bg-black/60"
      />

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10 max-w-3xl space-y-6 px-6 md:px-0"
      >
        <h1 className="text-3xl font-bold text-white md:text-5xl">
          Get Updates
        </h1>

        <p className="text-base font-bold text-white/80 md:text-xl">
          Subscribe to our newsletter for the latest updates, speaker
          announcements, and exclusive insights from Download.
        </p>

        <motion.div
          variants={scaleIn}
          className="flex w-full items-center justify-between rounded-lg bg-white px-4 py-4 md:px-6"
        >
          <input
            type="email"
            placeholder="Enter email address"
            className="flex-1 border-none bg-transparent text-sm text-black outline-none placeholder:font-semibold placeholder:text-[#121212]/70 md:text-base md:placeholder:font-bold"
          />

          <button className="rounded-lg border border-black bg-(--orange) px-4 py-2 text-sm md:px-12 md:py-3 md:text-base">
            Subscribe
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
