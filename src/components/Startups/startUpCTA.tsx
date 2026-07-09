"use client";

import { motion, type Variants } from "framer-motion";
import { IoRocketSharp } from "react-icons/io5";

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

export default function StartUpCTA() {
  return (
    <section className="bg-[#031632] px-6 py-12 md:px-16">
      <div className="mx-auto max-w-5xl">
        <motion.div
          className="flex flex-col items-center gap-6 rounded-2xl border border-white/10 bg-[#0d1f35] px-6 py-16 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl">
            Ready to scale your vision?
          </h2>

          <p className="max-w-xl text-base leading-relaxed text-white/70">
            Take the next step in your startup journey and join innovators
            shaping the future of technology across Africa.
          </p>

          <a
            href="#"
            className="mt-2 flex items-center gap-2 rounded-lg border bg-[#c8e63c] px-10 py-4 text-sm font-semibold text-[#031632] shadow-[6px_6px_0_rgba(244,134,54,1)] transition-opacity hover:opacity-90"
          >
            <IoRocketSharp size={18} />
            Start your Application
          </a>
        </motion.div>
      </div>
    </section>
  );
}