"use client";

import explore from "@/images/explore.png";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { IoIosMic } from "react-icons/io";

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

export default function SpeakersHero() {
  return (
    <section className="relative w-full bg-(--navy) px-6 pt-36 pb-24 md:px-16">
      {/* glow */}
      <div className="absolute -top-40 left-75 h-107.5 w-107.5 bg-radial from-[#83CFFF]/15 to-transparent blur-xl" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-6 md:flex-row md:justify-between">
        {/* Left: text */}
        <motion.div
          className="flex flex-col gap-4 md:w-2/5"
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="flex w-fit items-center gap-2 rounded-full border border-[#83CFFF33]/80 bg-[#83CFFF]/20 px-4 py-2 text-sm font-medium text-[#83CFFF]">
            <IoIosMic size={16} />
            Speakers
          </span>

          <h1 className="text-4xl font-bold leading-tight text-[#D3E4FE] md:text-5xl">
            Inspire the Next Generation of Innovators
          </h1>

          <p className="text-base leading-relaxed text-[#C5C6CE]">
            Share your expertise, elevate your influence, and{" "}
            <br className="hidden md:block" />
            help shape the future of technology on a global stage of innovation.
          </p>
        </motion.div>

        {/* Right: image */}
        <motion.div
          className="w-full md:w-[55%]"
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Image
            src={explore}
            alt="Explore hero image"
            className="aspect-video w-full object-cover"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
